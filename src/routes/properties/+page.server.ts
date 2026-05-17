import { db } from '$lib/server/db';
import { properties as propertiesTable } from '$lib/server/db/schema';
import { and, ilike, lte, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const allProps = await db.select({ 
		price: propertiesTable.price, 
		location: propertiesTable.location 
	}).from(propertiesTable);

	// Dynamic Filter Options
	const locations = [...new Set(allProps.map(p => p.location))].sort();
	const prices = allProps.map(p => p.price).filter(p => p > 0).sort((a, b) => a - b);
	const maxPropPrice = prices[prices.length - 1] || 0;

	const priceBuckets = [];
	if (maxPropPrice > 0) {
		const step = Math.ceil(maxPropPrice / 4 / 10000) * 10000;
		priceBuckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step)}`, value: step });
		priceBuckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step * 2)}`, value: step * 2 });
		priceBuckets.push({ label: `Under GHS ${new Intl.NumberFormat().format(step * 3)}`, value: step * 3 });
		priceBuckets.push({ label: `GHS ${new Intl.NumberFormat().format(step * 3)}+`, value: 999999999 });
	}

	const search = url.searchParams.get('search') || '';
	const location = url.searchParams.get('location') || '';
	const maxPrice = url.searchParams.get('maxPrice') || '';

	let query = db.select().from(propertiesTable);
	const filters = [];

	if (search) {
		filters.push(ilike(propertiesTable.title, `%${search}%`));
	}
	if (location) {
		filters.push(ilike(propertiesTable.location, `%${location}%`));
	}
	if (maxPrice && !isNaN(parseFloat(maxPrice))) {
		filters.push(lte(propertiesTable.price, parseFloat(maxPrice)));
	}

	const properties = await (filters.length > 0 
		? query.where(and(...filters)) 
		: query);

	return {
		properties,
		searchParams: { search, location, maxPrice },
		locations,
		priceBuckets
	};
};
