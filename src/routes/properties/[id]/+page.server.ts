import { db } from '$lib/server/db';
import { bookings, properties, propertyImages } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error, fail } from '@sveltejs/kit';
import { sendSMS } from '$lib/server/arkesel';
import { env } from '$env/dynamic/private';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const propertyId = parseInt(params.id);
	
	if (isNaN(propertyId)) {
		throw error(400, 'Invalid property ID');
	}

	const [property] = await db
		.select()
		.from(properties)
		.where(eq(properties.id, propertyId));

	if (!property) {
		throw error(404, 'Property not found');
	}

	const gallery = await db
		.select()
		.from(propertyImages)
		.where(eq(propertyImages.propertyId, propertyId));

	return {
		property,
		gallery
	};
};

export const actions: Actions = {
	book: async ({ request, params }) => {
		const propertyId = parseInt(params.id);
		const formData = await request.formData();
		const clientName = formData.get('name') as string;
		const clientEmail = formData.get('email') as string;
		const clientPhone = formData.get('phone') as string;
		const message = formData.get('message') as string;
		const date = formData.get('date') as string;

		if (!clientName || !clientEmail || !clientPhone || !message) {
			return fail(400, { message: 'Required fields missing' });
		}

		try {
			await db.insert(bookings).values({
				propertyId,
				clientName,
				clientEmail,
				clientPhone,
				message: `[Viewing Date: ${date}] ${message}`,
				status: 'pending'
			});

			const [property] = await db.select({ title: properties.title }).from(properties).where(eq(properties.id, propertyId));

			// Notify Admin via Arkesel
			if (env.ADMIN_PHONE) {
				const adminSMS = `RealView Alert: New viewing for ${property?.title} by ${clientName}. Contact: ${clientPhone}. Date: ${date}.`;
				await sendSMS(env.ADMIN_PHONE, adminSMS);
			}

			// Send Confirmation to Client
			if (clientPhone) {
				const clientSMS = `Hello ${clientName}, RealView Homes has received your viewing request for ${property?.title}. Our agents will contact you shortly. Thank you.`;
				await sendSMS(clientPhone, clientSMS);
			}

			return { success: true };
		} catch (err) {
			console.error('Booking error:', err);
			return fail(500, { message: 'Failed to submit request' });
		}
	}
};
