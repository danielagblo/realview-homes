import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';
import { env } from '$env/dynamic/private';

// Helper to read env variables with fallback to process.env for absolute production reliability
const getEnv = (key: string): string => {
  return env[key] || (typeof process !== 'undefined' ? process.env[key] : '') || '';
};

export const s3Client = new S3Client({
  region: getEnv('S3_REGION') || 'us-east-1',
  endpoint: getEnv('S3_ENDPOINT') || undefined,
  credentials: {
    accessKeyId: getEnv('S3_ACCESS_KEY_ID'),
    secretAccessKey: getEnv('S3_SECRET_ACCESS_KEY'),
  },
  forcePathStyle: true,
});

export const S3_BUCKET = getEnv('S3_BUCKET');

// Getters for backwards compatibility
export function getS3Client(): S3Client {
  return s3Client;
}

export function getS3Bucket(): string {
  return S3_BUCKET;
}

// Upload and convert to WebP (matching guide naming)
export async function uploadAndCompressToS3(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}.webp`;
  const key = `properties/${filename}`; // Maintain properties/ folder prefix for compatibility

  // Optimize image
  const optimizedBuffer = await sharp(buffer)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  await s3Client.send(new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: optimizedBuffer,
    ContentType: 'image/webp',
  }));

  const baseUrl = getEnv('BASE_URL');
  const relativePath = `/api/images/${key}`;
  return baseUrl ? `${baseUrl.replace(/\/$/, '')}${relativePath}` : relativePath;
}

// Delete object from S3 (matching guide naming)
export async function deleteFileFromS3(url: string): Promise<void> {
  if (!url || !url.includes('/api/images/')) return;
  
  // Extract key (everything after /api/images/)
  const key = url.split('/api/images/')[1];
  if (!key) return;

  try {
    await s3Client.send(new DeleteObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
    }));
    console.log(`Deleted S3 object: ${key}`);
  } catch (err) {
    console.error(`Failed to delete S3 object: ${key}`, err);
  }
}

// Aliases for compatibility with the existing codebase
export { uploadAndCompressToS3 as processAndUpload };
export { deleteFileFromS3 as deleteFromS3 };
