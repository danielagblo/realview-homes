import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('admin_session');

	// Protect all admin routes except the login page
	if (event.url.pathname.startsWith('/admin') && event.url.pathname !== '/admin/login') {
		if (!session || session !== 'authenticated') {
			throw redirect(303, '/admin/login');
		}
	}

	// Prevent logged-in users from seeing the login page
	if (event.url.pathname === '/admin/login' && session === 'authenticated') {
		throw redirect(303, '/admin');
	}

	return await resolve(event);
};
