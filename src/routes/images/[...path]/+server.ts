import { s3Client } from "$lib/server/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const key = params.path;
    
    if (!key) {
        throw error(400, 'Image path is required');
    }

    try {
        const command = new GetObjectCommand({
            Bucket: env.S3_BUCKET,
            Key: key,
        });

        const response = await s3Client.send(command);

        if (!response.Body) {
            throw error(404, 'Image not found');
        }

        // Convert S3 stream to a web-supported ReadableStream
        // Note: SvelteKit's Response handles ReadableStream automatically
        return new Response(response.Body as ReadableStream, {
            headers: {
                "Content-Type": response.ContentType || "image/webp",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (err) {
        console.error(`S3 Proxy Error for ${key}:`, err);
        throw error(404, 'Image not found');
    }
};
