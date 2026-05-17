import { db } from '$lib/server/db';
import { properties as propertiesTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const allProps = await db.select({ 
		price: propertiesTable.price, 
		location: propertiesTable.location 
	}).from(propertiesTable);

	// Dynamic Locations
	const locations = [...new Set(allProps.map(p => p.location))].sort();

	// Smart Price Buckets
	const prices = allProps.map(p => p.price).filter(p => p > 0).sort((a, b) => a - b);
	const minPrice = prices[0] || 0;
	const maxPrice = prices[prices.length - 1] || 0;

	// Generate 4 logical buckets
	const buckets = [];
	if (maxPrice > 0) {
		const step = Math.ceil(maxPrice / 4 / 10000) * 10000; // Round to nearest 10k
		buckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step)}`, value: step });
		buckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step * 2)}`, value: step * 2 });
		buckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step * 3)}`, value: step * 3 });
		buckets.push({ label: `GHS ${new Intl.NumberFormat().format(step * 3)}+`, value: 999999999 });
	}

	// Fetch only featured properties for the home page
	const featuredProperties = await db
		.select()
		.from(propertiesTable)
		.where(eq(propertiesTable.isFeatured, true))
		.limit(3);

	return {
		featuredProperties,
		locations,
		priceBuckets: buckets
	};
};
