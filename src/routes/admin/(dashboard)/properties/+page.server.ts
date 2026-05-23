import { db } from '$lib/server/db';
import { properties, propertyImages, bookings } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';
import { processAndUpload, deleteFromS3 } from '$lib/server/s3';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const allProperties = await db.select().from(properties);
	return {
		properties: allProperties
	};
};

export const actions: Actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = parseInt(formData.get('id') as string);

		try {
			// 1. Fetch the property and its gallery images
			const [property] = await db.select().from(properties).where(eq(properties.id, id)).limit(1);
			const galleryImagesList = await db.select().from(propertyImages).where(eq(propertyImages.propertyId, id));
			
			if (property) {
				// 2. Delete associated bookings
				await db.delete(bookings).where(eq(bookings.propertyId, id));

				// 3. Delete main image from S3
				await deleteFromS3(property.imageUrl);
				
				// 4. Delete all gallery images from S3
				for (const img of galleryImagesList) {
					await deleteFromS3(img.url);
				}
				
				// 5. Delete from Database
				await db.delete(properties).where(eq(properties.id, id));
			}
			
			return { success: true };
		} catch (error) {
			console.error('Error deleting property:', error);
			return fail(500, { message: 'Could not delete property and its gallery' });
		}
	}
};
