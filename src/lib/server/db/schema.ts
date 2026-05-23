import { pgTable, serial, integer, text, timestamp, boolean, doublePrecision } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull(), // Should be hashed
	role: text('role').notNull().default('admin')
});

export const properties = pgTable('properties', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description'),
	price: doublePrecision('price').notNull(),
	location: text('location').notNull(),
	beds: integer('beds').notNull(),
	baths: integer('baths').notNull(),
	sqft: integer('sqft').notNull(),
	imageUrl: text('image_url').notNull(),
	isFeatured: boolean('is_featured').default(false),
	status: text('status').notNull().default('available'), // available, sold, rented
	type: text('type').notNull().default('sale') // sale, rental
});

export const propertyImages = pgTable('property_images', {
	id: serial('id').primaryKey(),
	propertyId: integer('property_id').notNull().references(() => properties.id, { onDelete: 'cascade' }),
	url: text('url').notNull()
});

export const bookings = pgTable('bookings', {
	id: serial('id').primaryKey(),
	propertyId: integer('property_id').references(() => properties.id, { onDelete: 'cascade' }),
	clientName: text('client_name').notNull(),
	clientEmail: text('client_email').notNull(),
	clientPhone: text('client_phone').notNull(),
	message: text('message'),
	status: text('status').notNull().default('pending'), // pending, confirmed, cancelled
	createdAt: timestamp('created_at').defaultNow()
});
