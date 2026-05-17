export interface Property {
	id: number;
	title: string;
	description: string;
	price: number;
	location: string;
	beds: number;
	baths: number;
	sqft: number;
	imageUrl: string;
	type: 'Sale' | 'Rent';
}

export const properties: Property[] = [
	{
		id: 1,
		title: 'Executive 4-Bedroom Villa',
		description: 'A stunning 4-bedroom villa with modern amenities, large garden, and premium finishes. Perfect for a growing family in a secure neighborhood.',
		price: 1500000,
		location: 'East Legon, Accra',
		beds: 4,
		baths: 4.5,
		sqft: 3200,
		imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
		type: 'Sale'
	},
	{
		id: 2,
		title: 'Modern 2-Bedroom Apartment',
		description: 'Stylish 2-bedroom apartment in the heart of Airport Residential. Fully furnished with high-end appliances and access to a rooftop pool.',
		price: 8500,
		location: 'Airport Residential, Accra',
		beds: 2,
		baths: 2,
		sqft: 1200,
		imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
		type: 'Rent'
	},
	{
		id: 3,
		title: 'Family Home in Lashibi',
		description: 'Cozy and spacious family home located in Community 17, Lashibi. Close to schools and shopping centers.',
		price: 950000,
		location: 'Community 17, Lashibi',
		beds: 3,
		baths: 2,
		sqft: 2100,
		imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
		type: 'Sale'
	},
	{
		id: 4,
		title: 'Cozy 3-Bedroom Bungalow',
		description: 'Charming 3-bedroom bungalow in Tema Community 25. Modern kitchen and a beautiful porch for relaxing.',
		price: 750000,
		location: 'Tema Community 25',
		beds: 3,
		baths: 3,
		sqft: 1800,
		imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2067&auto=format&fit=crop',
		type: 'Sale'
	},
	{
		id: 5,
		title: 'Luxury Penthouse',
		description: 'Exclusive luxury penthouse in Cantonments. Breathtaking views of the city, private elevator, and 24/7 security.',
		price: 12000,
		location: 'Cantonments, Accra',
		beds: 3,
		baths: 3.5,
		sqft: 2500,
		imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=2071&auto=format&fit=crop',
		type: 'Rent'
	},
	{
		id: 6,
		title: 'Modern Studio Apartment',
		description: 'Compact and modern studio apartment in Osu. Ideal for young professionals who want to be close to the nightlife and business hub.',
		price: 3500,
		location: 'Osu, Accra',
		beds: 1,
		baths: 1,
		sqft: 600,
		imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
		type: 'Rent'
	}
];
