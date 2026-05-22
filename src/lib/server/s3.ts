import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { env as private_env } from '$env/dynamic/private';

// Initialize S3 Client lazily at runtime
let _s3Client: S3Client | null = null;

export function getS3Client(): S3Client {
    if (!_s3Client) {
        _s3Client = new S3Client({
            region: private_env.S3_REGION || 'us-east-1',
            endpoint: private_env.S3_ENDPOINT,
            credentials: {
                accessKeyId: private_env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: private_env.S3_SECRET_ACCESS_KEY || '',
            },
            forcePathStyle: true 
        });
    }
    return _s3Client;
}

export function getS3Bucket(): string {
    return private_env.S3_BUCKET || '';
}

/**
 * Processes a file (resize, convert to WebP) and uploads it to S3.
 * Returns the proxy URL.
 */
export async function processAndUpload(file: File): Promise<string> {
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
    const filename = `${timestamp}-${safeName.split('.')[0]}.webp`;
    const key = `properties/${filename}`;

    // 1. Optimize with Sharp
    const optimizedBuffer = await sharp(buffer)
        .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
        })
        .webp({ quality: 80 })
        .toBuffer();

    // 2. Upload to S3
    const client = getS3Client();
    const bucket = getS3Bucket();
    await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: optimizedBuffer,
        ContentType: "image/webp",
        ACL: 'private' 
    }));

    // 3. Return the Proxy URL
    return `/api/images/${key}`;
}

/**
 * Deletes an image from S3 given its proxy URL.
 */
export async function deleteFromS3(proxyUrl: string): Promise<void> {
    if (!proxyUrl || !proxyUrl.startsWith('/api/images/')) return;

    // Extract the key from the proxy URL
    const key = proxyUrl.replace('/api/images/', '');

    try {
        const client = getS3Client();
        const bucket = getS3Bucket();
        await client.send(new DeleteObjectCommand({
            Bucket: bucket,
            Key: key
        }));
        console.log(`Successfully deleted ${key} from S3`);
    } catch (error) {
        console.error(`Failed to delete ${key} from S3:`, error);
    }
}
