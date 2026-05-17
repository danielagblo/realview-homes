import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { env as private_env } from '$env/dynamic/private';
import { env as public_env } from '$env/dynamic/public';

// Initialize S3 Client
export const s3Client = new S3Client({
    region: private_env.S3_REGION || 'us-east-1',
    endpoint: private_env.S3_ENDPOINT,
    credentials: {
        accessKeyId: private_env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: private_env.S3_SECRET_ACCESS_KEY || '',
    },
    forcePathStyle: true 
});

const S3_BUCKET = private_env.S3_BUCKET;

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

    // 1. Optimize with Sharp (matches Tres Jolie logic)
    const optimizedBuffer = await sharp(buffer)
        .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
        })
        .webp({ quality: 80 })
        .toBuffer();

    // 2. Upload to S3
    await s3Client.send(new PutObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
        Body: optimizedBuffer,
        ContentType: "image/webp",
        // If your bucket is private, we'll serve via proxy anyway
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
    // e.g., /api/images/properties/123.webp -> properties/123.webp
    const key = proxyUrl.replace('/api/images/', '');

    try {
        await s3Client.send(new DeleteObjectCommand({
            Bucket: S3_BUCKET,
            Key: key
        }));
        console.log(`Successfully deleted ${key} from S3`);
    } catch (error) {
        console.error(`Failed to delete ${key} from S3:`, error);
        // We don't throw here to avoid blocking database deletion 
        // if S3 fails, but you might want to log this for cleanup.
    }
}
