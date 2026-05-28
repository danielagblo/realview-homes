<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PropertyCard from '$lib/components/PropertyCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const services: {
		id: string;
		title: string;
		subtitle: string;
		desc: string;
		features: string[];
		image: string;
		accent: string;
		icon: string;
	}[] = [
		{
			id: 'land-sales',
			title: 'Land Sales',
			subtitle: 'Prime land acquisition across Ghana.',
			desc: 'We offer curated listings of premium land parcels for development, ensuring clear titles and optimal locations.',
			features: ['Location scouting', 'Title verification', 'Investment analysis'],
			image: '/images/service-land.png',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="currentColor"/></svg>`,
			accent: 'brand-maroon'
		},
		{
			id: 'house-rentals-sales',
			title: 'House Rentals & Sales',
			subtitle: 'Find your next home or investment property.',
			desc: 'Comprehensive listings of rental and sale properties, with virtual tours and personalized matching.',
			features: ['Rental management', 'Sale listings', 'Virtual tours'],
			image: '/images/service-house.png',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75V6a1 1 0 011-1h16a1 1 0 011 1v13.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 14.25V6"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v6m-4-3h8"/></svg>`,
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
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9h6M9 12h6M9 15h6M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z"/></svg>`,
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
			image: '/images/service-architecture.png',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7m-9 0v12"/></svg>`,
			accent: 'brand-maroon'
		}
	];

	const steps = [
		{
			step: '01',
			title: 'Discovery Phase',
			desc: 'Explore our elite portfolio of modern villas and urban apartments curated for your unique lifestyle.'
		},
		{
			step: '02',
			title: 'Personalized Viewing',
			desc: 'Experience your future home firsthand with our expert consultants who provide deep property insights.'
		},
		{
			step: '03',
			title: 'Seamless Transition',
			desc: 'We oversee the entire legal and logistical process, ensuring a smooth hand-over of your new keys.'
		},
		{
			step: '04',
			title: 'After-Sales Care',
			desc: 'Our relationship continues beyond the sale, with dedicated support for property management and maintenance.'
		}
	];

	let showCertificateModal = $state(false);
</script>

<svelte:head>
	<title>RealView Homes | Luxury Real Estate & Architecture</title>
	<meta
		name="description"
		content="Discover premium properties and architectural excellence with RealView Homes. From luxury villas to modern apartments."
	/>
</svelte:head>

<Hero locations={data.locations} priceBuckets={data.priceBuckets} />

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && showCertificateModal) showCertificateModal = false;
	}}
/>

<!-- Accreditation Section -->
<section
	id="accreditation"
	class="relative scroll-mt-28 overflow-hidden border-b border-brand-black/5 bg-white py-24"
>
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<div class="mb-6 inline-flex items-center gap-3">
					<span class="h-px w-8 bg-brand-maroon"></span>
					<span class="text-[10px] font-bold tracking-[0.5em] text-brand-maroon uppercase"
						>Accredited & Certified</span
					>
				</div>
				<h2 class="mb-8 text-4xl leading-[1.1] font-black text-brand-black md:text-5xl">
					GHIREB Registered <br />
					<span class="serif font-normal text-brand-maroon lowercase italic">Brokerage.</span>
				</h2>
				<p class="mb-6 text-lg leading-relaxed font-light text-brand-black/70">
					RealView Homes is proud to be led by <strong>Sandra Apperkon Polo</strong>, a fully
					certified and licensed professional agent under the
					<strong>Ghana Institute of Real Estate Brokers (GHIREB)</strong>.
				</p>
				<p class="mb-8 text-base leading-relaxed font-light text-brand-black/50">
					Registration number <strong>PB97-25-63</strong>. Our active GHIREB credentials guarantee
					that all land sales, residential listings, and property management contracts through
					RealView Homes are legally sound, certified, and completely litigation-free. We uphold the
					absolute highest code of ethics, protecting your investments at every step.
				</p>
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-maroon/10 bg-white text-brand-maroon shadow-md"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/></svg
						>
					</div>
					<div>
						<h4 class="text-sm font-bold tracking-widest text-brand-black uppercase">
							Professional License No. 97 2024
						</h4>
						<p class="text-xs text-brand-black/40">
							Granted permission to use the prefix PB as official designation.
						</p>
					</div>
				</div>
			</div>

			<div class="flex justify-center lg:col-span-5">
				<button
					onclick={() => (showCertificateModal = true)}
					class="group relative w-full max-w-sm cursor-zoom-in text-left focus:outline-none"
				>
					<!-- Elegant Shadow & Border Frame -->
					<div
						class="transition-smooth absolute inset-0 rounded-3xl bg-brand-maroon/5 opacity-50 blur-2xl group-hover:opacity-100 lg:-inset-4"
					></div>
					<div
						class="transition-smooth relative overflow-hidden rounded-3xl border border-brand-black/5 bg-white p-4 shadow-2xl hover:scale-[1.02] hover:border-brand-maroon/20"
					>
						<img
							src="/images/citation.jpg"
							alt="GHIREB Certification of Membership"
							class="h-[400px] w-full rounded-2xl bg-white object-contain"
						/>
						<div
							class="transition-smooth absolute inset-0 flex items-center justify-center rounded-3xl bg-brand-black/40 opacity-0 group-hover:opacity-100"
						>
							<span
								class="transition-smooth translate-y-4 transform rounded-full bg-white px-6 py-3 text-xs font-bold tracking-widest text-brand-black uppercase shadow-lg group-hover:translate-y-0"
							>
								View Certificate
							</span>
						</div>
					</div>
				</button>
			</div>
		</div>
	</div>
</section>
<!-- Featured Properties -->
<section class="relative bg-brand-cream/10 py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
			<div class="max-w-xl">
				<span class="mb-4 block text-xs font-bold tracking-widest text-brand-maroon uppercase"
					>Our Best Offers</span
				>
				<h2 class="mb-6 text-4xl font-black text-brand-black uppercase md:text-5xl">
					Featured <span class="serif text-brand-maroon lowercase italic">Properties</span>
				</h2>
				<p class="leading-relaxed text-brand-black/60">
					Explore our hand-picked properties. From luxury villas to cozy apartments, we have
					something for everyone.
				</p>
			</div>
			<a
				href="/properties"
				class="flex items-center gap-2 border-b-2 border-brand-maroon/20 pb-1 font-bold text-brand-maroon transition-all duration-300 hover:gap-4"
			>
				Browse all properties
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
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

		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
			{#each data.featuredProperties as property}
				<PropertyCard {property} />
			{/each}
		</div>
	</div>
</section>
<!-- Brand Philosophy & Stats Section -->
<section class="relative overflow-hidden bg-white py-20">
	<div class="container mx-auto px-6">
		<div class="flex flex-col items-center gap-20 lg:flex-row">
			<div class="lg:w-1/2">
				<div class="mb-8 inline-flex items-center gap-3">
					<span class="h-px w-10 bg-brand-maroon/30"></span>
					<span class="text-[10px] font-bold tracking-[0.3em] text-brand-maroon uppercase"
						>Our Philosophy</span
					>
				</div>
				<h2 class="mb-10 text-4xl leading-[1.1] font-black text-brand-black md:text-6xl">
					Redefining the <br />
					<span class="serif font-normal text-brand-maroon lowercase italic">Art of Living.</span>
				</h2>

				<div class="mb-12 grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
					<!-- Vision Card -->
					<div
						class="group relative overflow-hidden rounded-3xl border border-brand-maroon/10 bg-brand-cream/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-maroon/5"
					>
						<div
							class="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-maroon/5 transition-transform duration-500 group-hover:scale-150"
						></div>
						<span
							class="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-maroon/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-maroon uppercase"
						>
							Our Vision
						</span>
						<p class="serif text-2xl leading-tight font-black text-brand-black italic">
							“Creating elegant living for everyone”
						</p>
					</div>

					<!-- Mission Card -->
					<div
						class="group relative overflow-hidden rounded-3xl border border-brand-black/5 bg-brand-black/[0.02] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-black/5"
					>
						<div
							class="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-black/[0.02] transition-transform duration-500 group-hover:scale-150"
						></div>
						<span
							class="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-black/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-black uppercase"
						>
							Our Mission
						</span>
						<p class="text-lg leading-snug font-medium text-brand-black/80">
							Building and delivering elegant properties with comfort, quality, and trust.
						</p>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-12 border-t border-brand-black/5 pt-12">
					<div>
						<span class="mb-2 block text-4xl font-black text-brand-maroon">12+</span>
						<span
							class="block text-[10px] leading-tight font-bold tracking-widest text-brand-black/40 uppercase"
						>
							Years of <br />Architectural Excellence
						</span>
					</div>
					<div>
						<span class="mb-2 block text-4xl font-black text-brand-maroon">450+</span>
						<span
							class="block text-[10px] leading-tight font-bold tracking-widest text-brand-black/40 uppercase"
						>
							Luxury Homes <br />Delivered
						</span>
					</div>
				</div>
			</div>

			<div class="relative lg:w-1/2">
				<div
					class="absolute -top-10 -left-10 -z-10 h-40 w-40 rounded-full bg-brand-cream opacity-50 blur-3xl"
				></div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-4 pt-12">
						<img
							src="/images/philosophy-1.png"
							alt="Modern Interior"
							class="transition-smooth h-64 w-full rounded-3xl object-cover shadow-2xl hover:scale-[1.03]"
						/>
						<img
							src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
							alt="Architectural Detail"
							class="transition-smooth h-48 w-full rounded-3xl object-cover shadow-2xl hover:scale-[1.03]"
						/>
					</div>
					<div class="space-y-4">
						<img
							src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
							alt="Luxury Exterior"
							class="transition-smooth h-48 w-full rounded-3xl object-cover shadow-2xl hover:scale-[1.03]"
						/>
						<img
							src="/images/philosophy-2.png"
							alt="Contemporary Design"
							class="transition-smooth h-64 w-full rounded-3xl object-cover shadow-2xl hover:scale-[1.03]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="relative overflow-hidden bg-brand-cream/30 py-20">
	<div class="container mx-auto px-6">
		<div class="flex flex-col items-center gap-16 lg:flex-row">
			<div class="lg:w-1/2">
				<div class="mb-6 inline-flex items-center gap-3">
					<span class="h-px w-10 bg-brand-maroon/30"></span>
					<span class="text-[10px] font-bold tracking-[0.3em] text-brand-maroon uppercase"
						>What we do</span
					>
				</div>
				<h2 class="mb-8 text-4xl leading-tight font-black text-brand-black md:text-6xl">
					Comprehensive <br />
					<span class="serif font-normal text-brand-maroon lowercase italic">Expertise.</span>
				</h2>
				<p class="mb-10 text-lg leading-relaxed text-brand-black/70">
					We provide a full-service real estate ecosystem, merging architectural innovation with
					master-class construction and management.
				</p>
				<button
					class="rounded-full bg-brand-black px-10 py-5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-maroon"
				>
					Explore Services
				</button>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2">
				{#each services as service}
					<a
						href="/services#{service.id}"
						class="group relative block overflow-hidden rounded-[2.5rem] border border-brand-black/5 bg-white p-8 shadow-xl shadow-brand-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-maroon/10"
					>
						<div
							class="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cream text-brand-maroon transition-colors duration-300 group-hover:bg-brand-maroon group-hover:text-white"
						>
							{@html service.icon}
						</div>
						<div class="relative z-10">
							<h3 class="mb-3 text-xl font-bold text-brand-black">{service.title}</h3>
							<p class="text-sm leading-relaxed text-brand-black/60">
								{service.desc}
							</p>
						</div>
						<div
							class="transition-smooth absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-bl-[4rem] bg-brand-maroon/5 group-hover:scale-125"
						></div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="relative overflow-hidden bg-white py-20">
	<div class="container mx-auto px-6">
		<div class="flex flex-col items-center gap-24 lg:flex-row">
			<div class="group relative lg:w-1/2">
				<div
					class="transition-smooth absolute -inset-4 rounded-full bg-brand-maroon/5 blur-3xl group-hover:bg-brand-maroon/10"
				></div>
				<img
					src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
					alt="Consultation"
					class="transition-smooth relative rounded-[4rem] border-8 border-brand-cream/50 shadow-2xl group-hover:scale-[1.02]"
				/>
				<!-- Floating Stat Overlay -->
				<div
					class="absolute -right-10 -bottom-10 hidden rounded-[2.5rem] bg-brand-black p-8 shadow-2xl md:block"
				>
					<span class="mb-1 block text-4xl font-black text-white">100%</span>
					<span class="text-[10px] font-bold tracking-widest text-white/40 uppercase"
						>Client Satisfaction</span
					>
				</div>
			</div>

			<div class="lg:w-1/2">
				<div class="mb-8 inline-flex items-center gap-3">
					<span class="h-px w-10 bg-brand-maroon/30"></span>
					<span class="text-[10px] font-bold tracking-[0.3em] text-brand-maroon uppercase"
						>Seamless Experience</span
					>
				</div>

				<h2 class="mb-16 text-4xl leading-tight font-black text-brand-black md:text-5xl">
					Your Journey to a <br />New <span class="text-brand-maroon">Home.</span>
				</h2>

				<div class="space-y-12">
					{#each steps as item}
						<div class="group flex gap-8">
							<div
								class="transition-smooth flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand-maroon/20 text-xl font-black text-brand-maroon shadow-lg shadow-brand-maroon/5 group-hover:bg-brand-maroon group-hover:text-white"
							>
								{item.step}
							</div>
							<div>
								<h3 class="mb-3 text-xl font-bold text-brand-black">{item.title}</h3>
								<p class="max-w-md leading-relaxed text-brand-black/50">
									{item.desc}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action (Compact & Elegant) -->
<section class="relative overflow-hidden bg-brand-cream py-12">
	<div class="container mx-auto px-6 text-center">
		<div
			class="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-brand-maroon/10 bg-white p-8 shadow-2xl md:p-16"
		>
			<!-- Decorative Background Elements -->
			<div class="pointer-events-none absolute inset-0 bg-brand-maroon/2"></div>

			<div class="relative z-10 mx-auto max-w-2xl">
				<h2
					class="mb-6 text-3xl leading-tight font-black tracking-tighter text-brand-black uppercase md:text-5xl"
				>
					Find your <span class="serif font-normal text-brand-maroon lowercase italic"
						>dream home</span
					>.
				</h2>
				<p class="mb-10 text-base leading-relaxed font-medium text-slate-500 md:text-lg">
					Our experts are ready to guide you through every step of your journey. Experience the next
					level of luxury living.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="/contact"
						class="transition-smooth inline-block w-full rounded-full bg-brand-maroon px-10 py-4 text-[10px] font-bold tracking-widest text-white uppercase shadow-xl shadow-brand-maroon/20 hover:scale-105 sm:w-auto"
					>
						Contact an Expert
					</a>
					<a
						href="/properties"
						class="transition-smooth inline-block w-full rounded-full border border-slate-200 bg-white px-10 py-4 text-[10px] font-bold tracking-widest text-brand-black uppercase hover:bg-slate-50 sm:w-auto"
					>
						Browse Properties
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Lightbox Modal -->
{#if showCertificateModal}
	<div
		class="animate-fade-in fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-brand-black/90 p-4 backdrop-blur-md md:p-10"
		role="button"
		tabindex="-1"
		onclick={() => (showCertificateModal = false)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') showCertificateModal = false;
		}}
	>
		<button
			onclick={() => (showCertificateModal = false)}
			class="transition-smooth absolute top-6 right-6 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white/50 hover:bg-white/20 hover:text-white focus:outline-none"
			aria-label="Close modal"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="animate-scale-in relative flex max-h-[85vh] w-full max-w-4xl cursor-default flex-col items-center justify-center"
			onclick={(e) => e.stopPropagation()}
			role="document"
		>
			<img
				src="/images/citation.jpg"
				alt="GHIREB Certification of Membership - Sandra Apperkon Polo"
				class="max-h-[80vh] max-w-full rounded-lg border-4 border-white bg-white object-contain shadow-2xl"
			/>
			<div class="mt-4 text-center">
				<p class="text-sm font-medium text-white">GHIREB Certificate of Professional Membership</p>
				<p class="mt-1 text-xs text-white/40">Sandra Apperkon Polo — Registration No. PB97-25-63</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.serif {
		font-family: 'Playfair Display', serif;
	}
</style>
