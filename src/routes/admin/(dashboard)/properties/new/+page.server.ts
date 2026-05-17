import { db } from '$lib/server/db';
import { properties } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

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
		const imageUrl = formData.get('imageUrl') as string;
		const type = formData.get('type') as string;
		const isFeatured = formData.get('isFeatured') === 'on';

		try {
			await db.insert(properties).values({
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
			});
		} catch (error) {
			console.error('Error creating property:', error);
			return fail(500, { message: 'Could not create property' });
		}

		throw redirect(303, '/admin/properties');
	}
};
