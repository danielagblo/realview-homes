import { db } from '$lib/server/db';
import { bookings, properties } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	// Fetch bookings with their associated property titles
	const allBookings = await db
		.select({
			id: bookings.id,
			name: bookings.clientName,
			email: bookings.clientEmail,
			phone: bookings.clientPhone,
			message: bookings.message,
			status: bookings.status,
			createdAt: bookings.createdAt,
			propertyTitle: properties.title
		})
		.from(bookings)
		.leftJoin(properties, eq(bookings.propertyId, properties.id))
		.orderBy(bookings.createdAt);

	return {
		bookings: allBookings
	};
};

export const actions: Actions = {
	updateStatus: async ({ request }) => {
		const formData = await request.formData();
		const id = parseInt(formData.get('id') as string);
		const status = formData.get('status') as string;

		try {
			await db.update(bookings).set({ status }).where(eq(bookings.id, id));
			return { success: true };
		} catch (error) {
			console.error('Error updating booking status:', error);
			return fail(500, { message: 'Could not update status' });
		}
	}
};
