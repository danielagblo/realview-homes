import { db } from '$lib/server/db';
import { properties, propertyImages } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error, fail, redirect } from '@sveltejs/kit';
import { processAndUpload, deleteFromS3 } from '$lib/server/s3';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.id);
	const [property] = await db.select().from(properties).where(eq(properties.id, id));
	const gallery = await db.select().from(propertyImages).where(eq(propertyImages.propertyId, id));

	if (!property) {
		throw error(404, 'Property not found');
	}

	return {
		property,
		gallery
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const id = parseInt(params.id);
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

		// 1. Handle Cover Image Replacement
		const imageFile = formData.get('imageFile') as File;
		const galleryFiles = formData.getAll('galleryFiles') as File[];
		let imageUrl = formData.get('currentImageUrl') as string;

		if (imageFile && imageFile.size > 0) {
			try {
				const newImageUrl = await processAndUpload(imageFile);
				if (imageUrl) await deleteFromS3(imageUrl);
				imageUrl = newImageUrl;
			} catch (err) {
				console.error('S3 Cover Update Error:', err);
				return fail(400, { message: 'Cover image update failed' });
			}
		}

		try {
			// 2. Update Main Property Record
			await db.update(properties).set({
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
			}).where(eq(properties.id, id));

			// 3. Process and Add New Gallery Images
			if (galleryFiles && galleryFiles.length > 0) {
				for (const file of galleryFiles) {
					if (file.size > 0) {
						const galleryUrl = await processAndUpload(file);
						await db.insert(propertyImages).values({
							propertyId: id,
							url: galleryUrl
						});
					}
				}
			}
		} catch (err) {
			console.error('Update error:', err);
			return fail(500, { message: 'Failed to update property and gallery' });
		}

		throw redirect(303, '/admin/properties');
	}
};
