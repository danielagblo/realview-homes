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
			image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
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
			image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
			accent: 'brand-black'
		}
	];
</script>

<svelte:head>
	<title>Our Services | RealView Homes</title>
	<meta name="description" content="Explore our comprehensive real estate services including architectural design, luxury construction, and property management." />
</svelte:head>

<div class="relative h-screen overflow-hidden bg-brand-black flex shadow-2xl">
	<!-- Left Side: Visual Statement (40%) -->
	<div class="hidden lg:block w-[40%] h-full relative overflow-hidden">
		<img 
			src="/images/services-hero-editorial.png" 
			alt="Architectural Statement" 
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-brand-maroon/20 mix-blend-overlay"></div>
		<div class="absolute inset-0 bg-linear-to-r from-transparent to-brand-black"></div>
		
		<!-- Vertical Branding -->
		<div class="absolute left-12 bottom-20 flex items-center gap-6 -rotate-90 origin-left">
			<span class="w-16 h-px bg-brand-maroon"></span>
			<span class="text-white/20 font-bold uppercase tracking-[1em] text-[8px]">RealView Signature</span>
		</div>
	</div>

	<!-- Right Side: Content (60%) -->
	<div class="flex-1 h-full relative flex items-center px-8 md:px-16 pt-24">
		<div class="relative z-10 max-w-3xl">
			<div class="flex items-center gap-3 mb-8">
				<span class="w-8 h-px bg-brand-maroon"></span>
				<span class="text-brand-maroon font-bold uppercase tracking-[0.6em] text-[10px]">Expertise & Services</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-10">
				<span class="block">THE ART OF</span>
				<span class="text-brand-maroon italic serif lowercase font-normal">precision.</span>
			</h1>
			
			<div class="border-l-2 border-brand-maroon/30 pl-8 max-w-2xl">
				<p class="text-white/90 text-xl md:text-2xl leading-snug font-light mb-8 italic serif">
					Crafting environments that transcend the ordinary.
				</p>
				<p class="text-white/40 text-base md:text-lg leading-relaxed font-light">
					A unified ecosystem for the most discerning lifestyles, merging 
					architectural purity with master-class construction.
				</p>
				
				<div class="mt-12 flex items-center gap-6">
					<a href="#architecture" class="bg-brand-maroon text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-brand-black transition-all duration-500 shadow-xl shadow-brand-maroon/20">
						Discover More
					</a>
					<div class="flex items-center gap-3 animate-pulse opacity-30">
						<div class="w-1 h-1 rounded-full bg-white"></div>
						<span class="text-white text-[8px] uppercase tracking-[0.4em]">Scroll</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Services Breakdown -->
<section class="bg-white">
	{#each services as service, i}
		<div id={service.id} class="py-32 border-b border-brand-black/5 last:border-0 overflow-hidden">
			<div class="container mx-auto px-6">
				<div class="flex flex-col {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20">
					<!-- Content -->
					<div class="lg:w-1/2">
						<div class="inline-flex items-center gap-3 mb-8">
							<span class="w-10 h-px bg-brand-maroon/30"></span>
							<span class="text-brand-maroon font-bold uppercase tracking-[0.3em] text-[10px]">Service {i + 1}</span>
						</div>
						<h2 class="text-4xl md:text-5xl font-black text-brand-black mb-4">
							{service.title}
						</h2>
						<p class="text-brand-maroon font-bold text-lg mb-8 italic serif">
							{service.subtitle}
						</p>
						<p class="text-brand-black/60 text-lg leading-relaxed mb-10">
							{service.desc}
						</p>
						
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{#each service.features as feature}
								<div class="flex items-center gap-3">
									<div class="w-2 h-2 rounded-full bg-brand-maroon"></div>
									<span class="text-sm font-bold text-brand-black/80">{feature}</span>
								</div>
							{/each}
						</div>

						<div class="mt-12">
							<a href="/contact" class="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full hover:bg-brand-maroon transition-smooth font-bold uppercase tracking-widest text-[10px]">
								Enquire about this service
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</a>
						</div>
					</div>

					<!-- Image -->
					<div class="lg:w-1/2 relative group">
						<div class="absolute -inset-4 bg-brand-maroon/5 blur-3xl rounded-[4rem] group-hover:bg-brand-maroon/10 transition-smooth"></div>
						<div class="relative overflow-hidden rounded-[4rem] shadow-2xl border-8 border-brand-cream/50">
							<img 
								src={service.image} 
								alt={service.title} 
								class="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
							/>
							<div class="absolute inset-0 bg-linear-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-12">
								<p class="text-white text-sm font-medium italic">Commitment to {service.title} excellence.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>

<!-- Final CTA -->
<section class="py-12 bg-brand-cream relative overflow-hidden">
	<div class="container mx-auto px-6">
		<div class="bg-brand-black p-8 md:p-10 relative overflow-hidden shadow-2xl text-center max-w-3xl mx-auto border-t-2 border-brand-maroon">
			<div class="absolute inset-0 bg-brand-maroon/5 opacity-20"></div>
			<div class="relative z-10 max-w-xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
					Ready to start <span class="text-brand-maroon italic serif lowercase font-normal">your vision?</span>
				</h2>
				<p class="text-white/40 text-xs md:text-sm mb-6 leading-relaxed">
					From blueprint to masterpiece, our team brings your architectural dreams to life.
				</p>
				<a
					href="/contact"
					class="inline-block bg-brand-maroon text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[9px] shadow-lg shadow-brand-maroon/20 hover:scale-105 transition-all duration-500"
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
