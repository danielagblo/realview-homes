import { s3Client, S3_BUCKET } from "$lib/server/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const key = params.path;

    if (!key) {
        throw error(400, 'Image path is required');
    }

    try {
        // Normalize the incoming key to match the safe filenames we store
// 1. Decode URI components
let normalizedKey = decodeURIComponent(key);
// 2. Remove parentheses
normalizedKey = normalizedKey.replace(/[()]/g, '');
// 3. Convert to lower‑case
normalizedKey = normalizedKey.toLowerCase();
// 4. Trim any duplicate slashes
normalizedKey = normalizedKey.replace(/\/+/g, '/');

// Try the normalized key first
let command = new GetObjectCommand({ Bucket: S3_BUCKET, Key: normalizedKey });
let response;
try {
  response = await s3Client.send(command);
} catch (e) {
  // If not found, fall back to the original key (in case it was stored that way)
  console.warn(`Normalized key not found (${normalizedKey}), trying original key ${key}`);
  command = new GetObjectCommand({ Bucket: S3_BUCKET, Key: key });
  response = await s3Client.send(command);
}


        if (!response.Body) {
            throw error(404, 'Image not found');
        }

        // Convert S3 stream to Uint8Array (ensures compatibility across all Node/hosting environments)
        const byteArray = await (response.Body as any).transformToByteArray();
        return new Response(byteArray, {
            headers: {
                "Content-Type": response.ContentType || "image/webp",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (err: any) {
        console.error(`S3 Proxy Error for ${key}:`, err);
        return new Response(JSON.stringify({
            error: 'S3 Proxy Error',
            message: err.message || String(err),
            code: err.code || err.name,
            key: key,
            bucket: S3_BUCKET,
            endpoint: s3Client.config.endpoint ? 'configured' : 'not configured'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
