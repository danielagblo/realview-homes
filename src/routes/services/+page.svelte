<script lang="ts">
	const services = [
		{
			id: 'architecture',
			title: 'Architectural Planning',
			subtitle: 'Visionary blueprints for modern life.',
			desc: 'Our design philosophy is rooted in the belief that every building should tell a story. We create bespoke blueprints that balance contemporary aesthetics with sustainable functionality, specifically tailored for the diverse Ghanaian landscape.',
			features: [
				'Conceptual Site Development',
				'3D Architectural Visualization',
				'Structural Engineering Coordination',
				'Sustainability & Energy Audits',
				'Interior Spatial Planning'
			],
			image: '/images/service-architectural.png',
			accent: 'brand-maroon'
		},
		{
			id: 'construction',
			title: 'Luxury Construction',
			subtitle: 'Building the landmarks of tomorrow.',
			desc: 'Precision engineering meets world-class craftsmanship. We manage the entire building lifecycle, ensuring that every detail—from the foundation to the finishing—is executed to the highest international standards using premium materials.',
			features: [
				'Full-Scale Project Management',
				'Quality Material Sourcing',
				'Structural Integrity Testing',
				'Smart Home Integration',
				'Landscape & Hardscape Construction'
			],
			image: '/images/service-construction.png',
			accent: 'brand-black'
		},
		{
			id: 'brokerage',
			title: 'Property Brokerage',
			subtitle: 'Exclusive access to prime real estate.',
			desc: 'We provide direct access to verified, prime litigation-free lands and luxury residential properties across Ghana’s fastest-growing hubs. Our brokerage service is built on transparency, legal rigor, and client trust.',
			features: [
				'Prime Land Acquisition',
				'Investment Portfolio Consulting',
				'Legal & Documentation Support',
				'Market Valuation Reports',
				'Exclusive Property Showings'
			],
			image:
				'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
			accent: 'brand-maroon'
		},
		{
			id: 'management',
			title: 'Property Management',
			subtitle: 'Ensuring your investment thrives.',
			desc: 'Our end-to-end management services ensure your investment remains impeccable while delivering consistent high-yield returns. We handle everything from tenant relations to preventative maintenance.',
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
		}
	];
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

		<div class="border-l-2 border-brand-maroon/30 pl-5">
			<p class="serif mb-3 text-base font-light text-gray-700 italic">
				Crafting environments that transcend the ordinary.
			</p>
			<p class="mb-6 text-sm font-light text-gray-500">
				A unified ecosystem for the most discerning lifestyles, merging architectural purity with
				master-class construction.
			</p>

			<a
				href="#architecture"
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
