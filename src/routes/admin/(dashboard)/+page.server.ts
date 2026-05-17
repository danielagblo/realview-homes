import { db } from '$lib/server/db';
import { properties, bookings } from '$lib/server/db/schema';
import { count, eq, sum } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Fetch real stats
	const [propertyCount] = await db.select({ value: count() }).from(properties);
	const [bookingCount] = await db.select({ value: count() }).from(bookings);
	const [pendingCount] = await db.select({ value: count() }).from(bookings).where(eq(bookings.status, 'pending'));
	const [totalPrice] = await db.select({ value: sum(properties.price) }).from(properties);

	// Fetch recent bookings with property titles
	const recentBookings = await db
		.select({
			id: bookings.id,
			name: bookings.clientName,
			email: bookings.clientEmail,
			status: bookings.status,
			createdAt: bookings.createdAt,
			propertyTitle: properties.title
		})
		.from(bookings)
		.leftJoin(properties, eq(bookings.propertyId, properties.id))
		.orderBy(bookings.createdAt)
		.limit(5);

	return {
		stats: [
			{ label: 'Active Properties', value: propertyCount.value.toString(), icon: '🏠', color: 'bg-blue-500' },
			{ label: 'Total Bookings', value: bookingCount.value.toString(), icon: '📅', color: 'bg-brand-maroon' },
			{ label: 'Pending Requests', value: pendingCount.value.toString(), icon: '⏳', color: 'bg-amber-500' },
			{ 
				label: 'Total Value', 
				value: new Intl.NumberFormat('en-GH', { 
					style: 'currency', 
					currency: 'GHS', 
					compactDisplay: 'short', 
					notation: 'compact' 
				}).format(Number(totalPrice.value) || 0), 
				icon: '💰', 
				color: 'bg-emerald-500' 
			}
		],
		recentBookings
	};
};
