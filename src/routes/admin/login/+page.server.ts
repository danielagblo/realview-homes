import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (email === env.ADMIN_EMAIL && password === env.ADMIN_PASSWORD) {
			cookies.set('admin_session', 'authenticated', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 // 1 day
			});

			throw redirect(303, '/admin');
		}

		return fail(401, { message: 'Architectural clearance denied. Invalid credentials.' });
	}
};
