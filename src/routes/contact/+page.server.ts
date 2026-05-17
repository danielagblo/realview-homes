import { db } from '$lib/server/db';
import { bookings } from '$lib/server/db/schema';
import { sendSMS } from '$lib/server/arkesel';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const clientName = formData.get('name') as string;
		const clientEmail = formData.get('email') as string;
		const clientPhone = formData.get('phone') as string;
		const location = formData.get('location') as string;
		const budget = formData.get('message') as string; // Reusing 'message' field for budget from hero
		let message = formData.get('message') as string;

		if (location) {
			message = `Lead interested in ${location}. Budget: ${budget}.`;
		}

		// Basic validation
		if (!clientName || !clientEmail || !clientPhone || !message) {
			return fail(400, { message: 'All fields are required' });
		}

		try {
			await db.insert(bookings).values({
				clientName,
				clientEmail,
				clientPhone,
				message,
				status: 'pending'
			});

			// Notify Admin via Arkesel SMS
			if (env.ADMIN_PHONE) {
				const adminSMS = `RealView Alert: New contact inquiry from ${clientName}. Phone: ${clientPhone}. Msg: ${message.substring(0, 40)}...`;
				await sendSMS(env.ADMIN_PHONE, adminSMS);
			}

			// Notify Client via Arkesel SMS
			if (clientPhone) {
				const clientSMS = `Hello ${clientName}, thank you for contacting RealView Homes. We have received your message and will get back to you shortly.`;
				await sendSMS(clientPhone, clientSMS);
			}

			return { success: true };
		} catch (error) {
			console.error('Error saving booking:', error);
			return fail(500, { message: 'Failed to send message' });
		}
	}
};
