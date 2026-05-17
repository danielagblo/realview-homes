import { db } from '$lib/server/db';
import { properties, propertyImages } from '$lib/server/db/schema';
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
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const price = parseFloat(formData.get('price') as string);
		const location = formData.get('location') as string;
		const beds = parseInt(formData.get('beds') as string);
		const baths = parseInt(formData.get('baths') as string);
		const sqft = parseInt(formData.get('sqft') as string);
		const type = formData.get('type') as string;
		const isFeatured = formData.get('isFeatured') === 'on';
		const imageFile = formData.get('imageFile') as File;
		const galleryFiles = formData.getAll('galleryFiles') as File[];

		if (!imageFile || imageFile.size === 0) {
			return fail(400, { message: 'Cover image is required' });
		}

		try {
			// 1. Upload Cover Image
			const imageUrl = await processAndUpload(imageFile);

			// 2. Create Property Record
			const [newProperty] = await db.insert(properties).values({
				title,
				description,
				price,
				location,
				beds,
				baths,
				sqft,
				imageUrl,
				isFeatured,
				type
			}).returning();

			// 3. Process and Upload Gallery Images
			if (galleryFiles && galleryFiles.length > 0) {
				for (const file of galleryFiles) {
					if (file.size > 0) {
						const galleryUrl = await processAndUpload(file);
						await db.insert(propertyImages).values({
							propertyId: newProperty.id,
							url: galleryUrl
						});
					}
				}
			}

			return { success: true };
		} catch (error) {
			console.error('Error creating property:', error);
			return fail(500, { message: 'Failed to create property and upload images' });
		}
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = parseInt(formData.get('id') as string);

		try {
			// 1. Fetch the property and its gallery images
			const [property] = await db.select().from(properties).where(eq(properties.id, id)).limit(1);
			const galleryImagesList = await db.select().from(propertyImages).where(eq(propertyImages.propertyId, id));
			
			if (property) {
				// 2. Delete main image from S3
				await deleteFromS3(property.imageUrl);
				
				// 3. Delete all gallery images from S3
				for (const img of galleryImagesList) {
					await deleteFromS3(img.url);
				}
				
				// 4. Delete from Database (Cascade will handle propertyImages records if set up, but we'll be safe)
				await db.delete(properties).where(eq(properties.id, id));
			}
			
			return { success: true };
		} catch (error) {
			console.error('Error deleting property:', error);
			return fail(500, { message: 'Could not delete property and its gallery' });
		}
	}
};
