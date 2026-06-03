<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import {
		initGSAP,
		fadeUp,
		fadeIn,
		slideInLeft,
		slideInRight,
		staggerIn,
		parallax,
		popIn,
		killAll
	} from '$lib/animations';

	const services = [
		{
			id: 'land-sales',
			title: 'Land Sales',
			subtitle: 'Prime land acquisition across Ghana.',
			desc: 'We offer curated listings of premium land parcels for development, ensuring clear titles and optimal locations.',
			features: ['Location scouting', 'Title verification', 'Investment analysis'],
			image: '/images/service-land.png',
			accent: 'brand-maroon'
		},
		{
			id: 'house-rentals-sales',
			title: 'House Rentals & Sales',
			subtitle: 'Find your next home or investment property.',
			desc: 'Comprehensive listings of rental and sale properties, with virtual tours and personalized matching.',
			features: ['Rental management', 'Sale listings', 'Virtual tours'],
			image: '/images/service-house.png',
			accent: 'brand-black'
		},
		{
			id: 'property-management',
			title: 'Property Management',
			subtitle: 'Ensuring your investment thrives.',
			desc: 'Our end-to-end management services ensure your investment remains impeccable while delivering consistent high-yield returns.',
			features: [
				'Tenant Sourcing & Screening',
				'Rent Collection & Financial Reporting',
				'Routine Maintenance & Repairs',
				'Security & Facility Oversight',
				'Renovation & Refurbishment'
			],
			image:
				'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
			accent: 'brand-black'
		},
		{
			id: 'architecture-design',
			title: 'Architecture Design & Building Construction',
			subtitle: 'Visionary blueprints and elite construction.',
			desc: 'From concept to completion, we deliver bespoke architectural designs and premium construction services.',
			features: [
				'Conceptual design',
				'3D visualization',
				'Structural engineering',
				'Sustainability audits',
				'Interior planning'
			],
			image: '/images/service-architectural.png',
			accent: 'brand-maroon'
		}
	];

	// Service IDs in DOM order (mirrors the `services` array order)
	const serviceIds = [
		'land-sales',
		'house-rentals-sales',
		'property-management',
		'architecture-design'
	];

	onMount(() => {
		if (!browser) return;

		initGSAP();

		// ── 1. Hero heading ──────────────────────────────────────────────────────
		const heroHeading = document.querySelector<HTMLElement>('.max-w-3xl h2');
		if (heroHeading) fadeUp(heroHeading, { y: 35, duration: 1 });

		// ── 2. Hero border-left block & details ──────────────────────────────────
		const heroBorder = document.querySelector<HTMLElement>('[data-anim="hero-details"]');
		if (heroBorder) {
			slideInLeft(heroBorder, { delay: 0.2, duration: 0.9, x: -50 });
			const detailsKids = heroBorder.querySelectorAll(':scope > *');
			if (detailsKids.length) {
				fadeUp(Array.from(detailsKids), { stagger: 0.12, delay: 0.3, y: 20 });
			}
		}

		// ── 3. Service rows ──────────────────────────────────────────────────────
		serviceIds.forEach((id, i) => {
			const row = document.getElementById(id);
			if (!row) return;

			// The flex container that holds content + image halves
			const flexWrap = row.querySelector<HTMLElement>('.flex.flex-col');
			if (!flexWrap) return;

			const halves = flexWrap.querySelectorAll<HTMLElement>(':scope > div');
			// halves[0] = content side, halves[1] = image side
			const contentSide = halves[0];
			const imageSide = halves[1];

			// Even rows: content slides from left, image from right
			// Odd rows: content slides from right, image from left (flex-row-reverse)
			if (contentSide) {
				if (i % 2 === 0) {
					slideInLeft(contentSide, { duration: 0.95, x: -50 });
				} else {
					slideInRight(contentSide, { duration: 0.95, x: 50 });
				}
			}

			if (imageSide) {
				if (i % 2 === 0) {
					slideInRight(imageSide, { duration: 0.95, x: 50 });
				} else {
					slideInLeft(imageSide, { duration: 0.95, x: -50 });
				}
			}

			// Stagger feature bullet items
			const featuresGrid = row.querySelector<HTMLElement>('.grid.grid-cols-1');
			if (featuresGrid) {
				staggerIn(featuresGrid, '.flex.items-center', { stagger: 0.1, y: 20, delay: 0.15 });
			}
		});

		// ── 4. Service image parallax ────────────────────────────────────────────
		const serviceImgs = document.querySelectorAll<HTMLElement>('section.bg-white img');
		serviceImgs.forEach((img) => {
			parallax(img, { speed: -40 });
		});

		// ── 5. CTA section ───────────────────────────────────────────────────────
		const ctaSection = document.querySelector<HTMLElement>('section.bg-brand-cream');
		if (ctaSection) {
			const ctaHeading = ctaSection.querySelector<HTMLElement>('h2');
			const ctaParagraph = ctaSection.querySelector<HTMLElement>('p');
			const ctaButton = ctaSection.querySelector<HTMLElement>('a');

			if (ctaHeading) fadeUp(ctaHeading, { y: 30, duration: 0.9 });
			if (ctaParagraph) fadeIn(ctaParagraph, { delay: 0.15, duration: 0.85 });
			if (ctaButton) popIn(ctaButton, { delay: 0.3 });
		}
	});

	onDestroy(() => {
		if (browser) killAll();
	});
</script>

<svelte:head>
	<title>Our Services | RealView Homes</title>
	<meta
		name="description"
		content="Explore our comprehensive real estate services including architectural design, luxury construction, and property management."
	/>
</svelte:head>

<div class=" px-6 py-10 pt-24 md:px-16">
	<div class="max-w-3xl">
		<h2 class="mb-4 text-3xl font-black tracking-tighter text-gray-900 md:text-4xl">
			THE ART OF
			<span class="font-normal text-brand-maroon lowercase italic">precision.</span>
		</h2>

		<div class="border-l-2 border-brand-maroon/30 pl-5" data-anim="hero-details">
			<p class="serif mb-3 text-base font-light text-gray-700 italic">
				Crafting environments that transcend the ordinary.
			</p>
			<p class="mb-6 text-sm font-light text-gray-500">
				A unified ecosystem for the most discerning lifestyles, merging architectural purity with
				master-class construction.
			</p>

			<a
				href="#architecture-design"
				class="inline-block rounded-full bg-brand-maroon px-5 py-2 text-[10px] font-bold tracking-widest text-white uppercase transition-all duration-500 hover:bg-gray-800 hover:text-white"
			>
				Discover More
			</a>
		</div>
	</div>
</div>

<!-- Services Breakdown -->
<section class="bg-white">
	{#each services as service, i}
		<div
			id={service.id}
			class="overflow-hidden border-b border-brand-black/5 py-16 last:border-0 lg:py-32"
		>
			<div class="container mx-auto px-6">
				<div
					class="flex flex-col {i % 2 === 0
						? 'lg:flex-row'
						: 'lg:flex-row-reverse'} items-center gap-20"
				>
					<!-- Content -->
					<div class="lg:w-1/2">
						<div class="mb-8 inline-flex items-center gap-3">
							<span class="h-px w-10 bg-brand-maroon/30"></span>
							<span class="text-[10px] font-bold tracking-[0.3em] text-brand-maroon uppercase"
								>Service {i + 1}</span
							>
						</div>
						<h2 class="mb-4 text-4xl font-black text-brand-black md:text-5xl">
							{service.title}
						</h2>
						<p class="serif mb-8 text-lg font-bold text-brand-maroon italic">
							{service.subtitle}
						</p>
						<p class="mb-10 text-lg leading-relaxed text-brand-black/60">
							{service.desc}
						</p>

						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{#each service.features as feature}
								<div class="flex items-center gap-3">
									<div class="h-2 w-2 rounded-full bg-brand-maroon"></div>
									<span class="text-sm font-bold text-brand-black/80">{feature}</span>
								</div>
							{/each}
						</div>

						<div class="mt-12">
							<a
								href="/contact"
								class="transition-smooth inline-flex items-center gap-3 rounded-full bg-brand-black px-8 py-4 text-[10px] font-bold tracking-widest text-white uppercase hover:bg-brand-maroon"
							>
								Enquire about this service
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</a>
						</div>
					</div>

					<!-- Image -->
					<div class="group relative lg:w-1/2">
						<div
							class="transition-smooth absolute inset-0 rounded-[4rem] bg-brand-maroon/5 blur-3xl group-hover:bg-brand-maroon/10 lg:-inset-4"
						></div>
						<div
							class="relative overflow-hidden rounded-[2.5rem] border-4 border-brand-cream/50 shadow-2xl lg:rounded-[4rem] lg:border-8"
						>
							<img
								src={service.image}
								alt={service.title}
								class="transition-smooth h-[300px] w-full object-cover group-hover:scale-105 sm:h-[400px] lg:h-[500px]"
							/>
							<div
								class="transition-smooth absolute inset-0 flex items-end bg-linear-to-t from-brand-black/60 to-transparent p-12 opacity-0 group-hover:opacity-100"
							>
								<p class="text-sm font-medium text-white italic">
									Commitment to {service.title} excellence.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>

<!-- Final CTA -->
<section class="relative overflow-hidden bg-brand-cream py-12">
	<div class="container mx-auto px-6">
		<div
			class="relative mx-auto max-w-3xl overflow-hidden border-t-2 border-brand-maroon bg-brand-black p-8 text-center shadow-2xl md:p-10"
		>
			<div class="absolute inset-0 bg-brand-maroon/5 opacity-20"></div>
			<div class="relative z-10 mx-auto max-w-xl">
				<h2 class="mb-4 text-3xl font-black tracking-tighter text-white uppercase md:text-4xl">
					Ready to start <span class="serif font-normal text-brand-maroon lowercase italic"
						>your vision?</span
					>
				</h2>
				<p class="mb-6 text-xs leading-relaxed text-white/40 md:text-sm">
					From blueprint to masterpiece, our team brings your architectural dreams to life.
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full bg-brand-maroon px-8 py-3 text-[9px] font-bold tracking-widest text-white uppercase shadow-lg shadow-brand-maroon/20 transition-all duration-500 hover:scale-105"
				>
					Book a Consultation
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.serif {
		font-family: 'Playfair Display', serif;
	}
</style>
