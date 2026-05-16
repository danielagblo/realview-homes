import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { properties as propertiesTable } from './src/lib/server/db/schema';

if (!process.env.DATABASE_URL) {
	console.error('DATABASE_URL is not set. Please run with node --env-file=.env seed.ts');
	process.exit(1);
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

const properties = [
	{
		title: 'Ultra-Modern Villa',
		description: 'A masterpiece of contemporary architecture featuring panoramic views and smart home technology.',
		price: 750000,
		location: 'East Legon, Accra',
		beds: 5,
		baths: 6,
		sqft: 4500,
		imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
		isFeatured: true,
		type: 'sale'
	},
	{
		title: 'Luxury Penthouse',
		description: 'Sky-high living with exclusive amenities and a private infinity pool overlooking the city.',
		price: 450000,
		location: 'Airport Residential Area, Accra',
		beds: 3,
		baths: 4,
		sqft: 2800,
		imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
		isFeatured: true,
		type: 'sale'
	},
	{
		title: 'Modern Family Home',
		description: 'Spacious and elegant family residence designed for comfort and sophisticated entertaining.',
		price: 320000,
		location: 'Spintex, Accra',
		beds: 4,
		baths: 3,
		sqft: 3200,
		imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
		isFeatured: true,
		type: 'sale'
	},
	{
		title: 'Contemporary Apartment',
		description: 'Sleek urban living in a prime location with state-of-the-art facilities.',
		price: 2500,
		location: 'Cantonments, Accra',
		beds: 2,
		baths: 2,
		sqft: 1200,
		imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop',
		isFeatured: false,
		type: 'rental'
	}
];

async function seed() {
	console.log('Seeding properties into Postgres...');
	for (const property of properties) {
		await db.insert(propertiesTable).values(property);
		console.log(`- Inserted: ${property.title}`);
	}
	console.log('🎉 Seeding complete!');
	process.exit(0);
}

seed().catch((err) => {
	console.error('❌ Seeding failed:', err);
	process.exit(1);
});
