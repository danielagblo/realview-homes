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
        const command = new GetObjectCommand({
            Bucket: S3_BUCKET,
            Key: key,
        });

        const response = await s3Client.send(command);

        if (!response.Body) {
            throw error(404, 'Image not found');
        }

        // Convert S3 stream to Uint8Array
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
