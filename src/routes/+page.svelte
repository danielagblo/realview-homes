<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PropertyCard from '$lib/components/PropertyCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const services = [
		{
			title: 'Architectural Planning',
			desc: 'Bespoke blueprints that balance contemporary aesthetics with sustainable functionality, tailored for the modern landscape.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>`
		},
		{
			title: 'Luxury Construction',
			desc: 'Precision engineering and world-class building services using premium materials to create lasting landmarks.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M4.5 21h4.5m10.5-17.505S18.335 12 12 12s-8.25-8.46-8.25-8.46m16.5 0c0 .498-.407.9-.9.9s-.9-.402-.9-.9.407-.9.9-.9.9.402.9.9ZM4.5 3.545c0 .498.407.9.9.9s.9-.402.9-.9-.407-.9-.9-.9-.9.402-.9.9Z" /></svg>`
		},
		{
			title: 'Property Brokerage',
			desc: 'Seamless real estate transactions with a focus on high-value investments and exclusive residential properties.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`
		},
		{
			title: 'Interior Design',
			desc: 'Curated interiors that evoke emotion and elegance, blending local artistry with international design standards.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m-6-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>`
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
</script>

<svelte:head>
	<title>RealView Homes | Luxury Real Estate & Architecture</title>
	<meta
		name="description"
		content="Discover premium properties and architectural excellence with RealView Homes. From luxury villas to modern apartments."
	/>
</svelte:head>

<Hero locations={data.locations} priceBuckets={data.priceBuckets} />

<!-- Brand Philosophy & Stats Section -->
<section class="py-20 bg-white relative overflow-hidden">
	<div class="container mx-auto px-6">
		<div class="flex flex-col lg:flex-row items-center gap-20">
			<div class="lg:w-1/2">
				<div class="inline-flex items-center gap-3 mb-8">
					<span class="w-10 h-px bg-brand-maroon/30"></span>
					<span class="text-brand-maroon font-bold uppercase tracking-[0.3em] text-[10px]"
						>Our Philosophy</span
					>
				</div>
				<h2 class="text-4xl md:text-6xl font-black text-brand-black mb-10 leading-[1.1]">
					Redefining the <br />
					<span class="text-brand-maroon italic serif lowercase font-normal">Art of Living.</span>
				</h2>
				<p class="text-brand-black/60 text-lg leading-relaxed mb-12 max-w-xl">
					At RealView Homes, we believe architecture is more than just structure—it's a canvas for
					human experience. We merge traditional Ghanaian warmth with global modernism to create 
					spaces that are as functional as they are breathtaking.
				</p>
				
				<div class="grid grid-cols-2 gap-12 border-t border-brand-black/5 pt-12">
					<div>
						<span class="block text-4xl font-black text-brand-maroon mb-2">12+</span>
						<span class="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest leading-tight block">
							Years of <br/>Architectural Excellence
						</span>
					</div>
					<div>
						<span class="block text-4xl font-black text-brand-maroon mb-2">450+</span>
						<span class="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest leading-tight block">
							Luxury Homes <br/>Delivered
						</span>
					</div>
				</div>

				<!-- GHIREB Trust Badge -->
				<div class="mt-8 pt-8 border-t border-brand-black/5">
					<a href="/about#accreditation" class="inline-flex items-center gap-4 group p-4 bg-brand-cream/50 rounded-2xl hover:bg-brand-cream hover:shadow-md transition-smooth border border-brand-black/5">
						<div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-maroon shadow-sm border border-brand-maroon/10 group-hover:scale-105 transition-smooth">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
						</div>
						<div>
							<span class="block text-[10px] font-bold text-brand-black uppercase tracking-wider group-hover:text-brand-maroon transition-smooth">GHIREB Certified Broker</span>
							<span class="block text-[9px] text-brand-black/40 uppercase tracking-widest font-semibold mt-0.5">Sandra Apperkon Polo • PB97-25-63</span>
						</div>
					</a>
				</div>
			</div>

			<div class="lg:w-1/2 relative">
				<div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-cream rounded-full -z-10 blur-3xl opacity-50"></div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-4 pt-12">
						<img 
							src="/images/philosophy-1.png" 
							alt="Modern Interior" 
							class="rounded-3xl shadow-2xl hover:scale-[1.03] transition-smooth h-64 w-full object-cover"
						/>
						<img 
							src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
							alt="Architectural Detail" 
							class="rounded-3xl shadow-2xl hover:scale-[1.03] transition-smooth h-48 w-full object-cover"
						/>
					</div>
					<div class="space-y-4">
						<img 
							src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" 
							alt="Luxury Exterior" 
							class="rounded-3xl shadow-2xl hover:scale-[1.03] transition-smooth h-48 w-full object-cover"
						/>
						<img 
							src="/images/philosophy-2.png" 
							alt="Contemporary Design" 
							class="rounded-3xl shadow-2xl hover:scale-[1.03] transition-smooth h-64 w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Properties -->
<section class="py-24 bg-brand-cream/10 relative">
	<div class="container mx-auto px-6">
		<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
			<div class="max-w-xl">
				<span class="text-brand-maroon font-bold uppercase tracking-widest text-xs mb-4 block"
					>Our Best Offers</span
				>
				<h2 class="text-4xl md:text-5xl font-black text-brand-black mb-6 uppercase">
					Featured <span class="text-brand-maroon italic serif lowercase">Properties</span>
				</h2>
				<p class="text-brand-black/60 leading-relaxed">
					Explore our hand-picked properties. From luxury villas to cozy apartments, we have
					something for everyone.
				</p>
			</div>
			<a
				href="/properties"
				class="flex items-center gap-2 font-bold text-brand-maroon hover:gap-4 transition-all duration-300 border-b-2 border-brand-maroon/20 pb-1"
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

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{#each data.featuredProperties as property}
				<PropertyCard {property} />
			{/each}
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-20 bg-brand-cream/30 relative overflow-hidden">
	<div class="container mx-auto px-6">
		<div class="flex flex-col lg:flex-row items-center gap-16">
			<div class="lg:w-1/2">
				<div class="inline-flex items-center gap-3 mb-6">
					<span class="w-10 h-px bg-brand-maroon/30"></span>
					<span class="text-brand-maroon font-bold uppercase tracking-[0.3em] text-[10px]"
						>What we do</span
					>
				</div>
				<h2 class="text-4xl md:text-6xl font-black text-brand-black mb-8 leading-tight">
					Comprehensive <br />
					<span class="text-brand-maroon italic serif lowercase font-normal">Expertise.</span>
				</h2>
				<p class="text-brand-black/70 text-lg leading-relaxed mb-10">
					We provide a full-service real estate ecosystem, merging architectural innovation with
					master-class construction and management.
				</p>
				<button
					class="bg-brand-black text-white px-10 py-5 rounded-full hover:bg-brand-maroon transition-all duration-300 font-bold uppercase tracking-widest text-xs"
				>
					Explore Services
				</button>
			</div>

			<div class="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each services as service}
					<a
						href="/services#{service.title.split(' ')[0].toLowerCase()}"
						class="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-brand-black/5 hover:shadow-2xl hover:shadow-brand-maroon/10 transition-all duration-500 border border-brand-black/5 relative overflow-hidden block"
					>
						<div
							class="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-300 relative z-10"
						>
							{@html service.icon}
						</div>
						<div class="relative z-10">
							<h3 class="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
							<p class="text-brand-black/60 text-sm leading-relaxed">
								{service.desc}
							</p>
						</div>
						<div
							class="absolute top-0 right-0 w-32 h-32 bg-brand-maroon/5 rounded-bl-[4rem] -mr-12 -mt-12 group-hover:scale-125 transition-smooth"
						></div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20 bg-white relative overflow-hidden">
	<div class="container mx-auto px-6">
		<div class="flex flex-col lg:flex-row items-center gap-24">
			<div class="lg:w-1/2 relative group">
				<div
					class="absolute -inset-4 bg-brand-maroon/5 blur-3xl rounded-full group-hover:bg-brand-maroon/10 transition-smooth"
				></div>
				<img
					src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
					alt="Consultation"
					class="relative rounded-[4rem] shadow-2xl border-8 border-brand-cream/50 group-hover:scale-[1.02] transition-smooth"
				/>
				<!-- Floating Stat Overlay -->
				<div
					class="absolute -bottom-10 -right-10 bg-brand-black p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
				>
					<span class="block text-4xl font-black text-white mb-1">100%</span>
					<span class="text-[10px] font-bold text-white/40 uppercase tracking-widest"
						>Client Satisfaction</span
					>
				</div>
			</div>

			<div class="lg:w-1/2">
				<div class="inline-flex items-center gap-3 mb-8">
					<span class="w-10 h-px bg-brand-maroon/30"></span>
					<span class="text-brand-maroon font-bold uppercase tracking-[0.3em] text-[10px]"
						>Seamless Experience</span
					>
				</div>

				<h2 class="text-4xl md:text-5xl font-black text-brand-black mb-16 leading-tight">
					Your Journey to a <br />New <span class="text-brand-maroon">Home.</span>
				</h2>

				<div class="space-y-12">
					{#each steps as item}
						<div class="flex gap-8 group">
							<div
								class="shrink-0 w-16 h-16 rounded-full border-2 border-brand-maroon/20 flex items-center justify-center text-xl font-black text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-smooth shadow-lg shadow-brand-maroon/5"
							>
								{item.step}
							</div>
							<div>
								<h3 class="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
								<p class="text-brand-black/50 leading-relaxed max-w-md">
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
<section class="py-12 bg-brand-cream relative overflow-hidden">
	<div class="container mx-auto px-6 text-center">
		<div class="bg-white p-8 md:p-16 relative overflow-hidden shadow-2xl border border-brand-maroon/10 max-w-5xl mx-auto rounded-[3rem]">
			<!-- Decorative Background Elements -->
			<div class="absolute inset-0 bg-brand-maroon/2 pointer-events-none"></div>
			
			<div class="relative z-10 max-w-2xl mx-auto">
				<h2 class="text-3xl md:text-5xl font-black text-brand-black mb-6 uppercase tracking-tighter leading-tight">
					Find your <span class="text-brand-maroon italic serif lowercase font-normal">dream home</span>.
				</h2>
				<p class="text-slate-500 text-base md:text-lg mb-10 leading-relaxed font-medium">
					Our experts are ready to guide you through every step of your journey. 
					Experience the next level of luxury living.
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="/contact"
						class="w-full sm:w-auto inline-block bg-brand-maroon text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl shadow-brand-maroon/20 hover:scale-105 transition-smooth"
					>
						Contact an Expert
					</a>
					<a
						href="/properties"
						class="w-full sm:w-auto inline-block bg-white text-brand-black border border-slate-200 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-smooth"
					>
						Browse Properties
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.serif {
		font-family: 'Playfair Display', serif;
	}
</style>
