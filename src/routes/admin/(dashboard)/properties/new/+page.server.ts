import { db } from '$lib/server/db';
import { properties, propertyImages } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { processAndUpload } from '$lib/server/s3';

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
		const imageFile = formData.get('imageFile') as File;
		const type = formData.get('type') as string;
		const isFeatured = formData.get('isFeatured') === 'on';
		const galleryFiles = formData.getAll('galleryFiles') as File[];

		if (!imageFile || imageFile.size === 0) {
			return fail(400, { message: 'Cover image is required' });
		}

		try {
			// 1. Upload cover image to S3
			const imageUrl = await processAndUpload(imageFile);

			// 2. Insert property with uploaded image URL
			const [newProperty] = await db.insert(properties).values({
				title,
				description,
				price,
				location,
				beds,
				baths,
				sqft,
				imageUrl,
				type,
				isFeatured
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
		} catch (error) {
			console.error('Error creating property:', error);
			return fail(500, { message: 'Could not create property' });
		}

		throw redirect(303, '/admin/properties');
	}
};
