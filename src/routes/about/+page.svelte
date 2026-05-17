<script lang="ts">
	const values = [
		{
			title: "Uncompromising Precision",
			desc: "We believe that the smallest detail is the foundation of excellence. From blueprints to finishings, our work is defined by absolute accuracy.",
			icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
		},
		{
			title: "Strategic Innovation",
			desc: "Real estate in Ghana is evolving, and we lead that change by integrating modern technology with sustainable architectural practices.",
			icon: "M13 10V3L4 14h7v7l9-11h-7z"
		},
		{
			title: "Legacy & Trust",
			desc: "We don't just build houses; we build long-term relationships. Our clients trust us to manage their most significant investments with integrity.",
			icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
		}
	];
</script>

<svelte:head>
	<title>About Us | RealView Homes</title>
	<meta name="description" content="Learn about RealView Homes, our mission, values, and commitment to delivering luxury architectural services in Ghana." />
</svelte:head>

<div class="pt-32 pb-20 bg-white min-h-screen">
	<div class="container mx-auto px-6">
		<!-- Hero Section (Fit to Screen) -->
		<div class="h-[calc(100vh-(--spacing(40)))] flex items-center mb-32">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
				<div class="relative z-10">
					<div class="inline-flex items-center gap-4 mb-6">
						<span class="w-10 h-px bg-brand-maroon"></span>
						<span class="text-brand-maroon font-bold uppercase tracking-[0.4em] text-[9px]">The RealView Narrative</span>
					</div>
					<h1 class="text-5xl md:text-7xl font-black text-brand-black mb-8 leading-[0.95] tracking-tighter">
						Defining <br/>
						<span class="text-brand-maroon italic serif lowercase font-normal block mt-2">Modern Living</span> 
						<span class="text-brand-black/20">in Ghana.</span>
					</h1>
					<div class="border-l-4 border-brand-maroon/30 pl-8">
						<p class="text-brand-black/80 text-lg md:text-xl leading-relaxed font-light italic serif mb-8 max-w-xl">
							"We believe that a building is not just a structure, but a vessel for life's most meaningful moments."
						</p>
						<p class="text-brand-black/50 text-base leading-relaxed mb-8 max-w-lg">
							RealView Homes bridges the gap between visionary design and master-class construction, ensuring every project is a landmark of quality.
						</p>
						<div class="flex items-center gap-10 mt-10">
							<div>
								<div class="text-3xl font-black text-brand-maroon mb-1">12+</div>
								<div class="text-[9px] font-bold uppercase tracking-widest text-brand-black/40">Years Experience</div>
							</div>
							<div>
								<div class="text-3xl font-black text-brand-maroon mb-1">450+</div>
								<div class="text-[9px] font-bold uppercase tracking-widest text-brand-black/40">Projects Delivered</div>
							</div>
						</div>
					</div>
				</div>
				<div class="relative group">
					<div class="absolute -inset-10 bg-brand-maroon/5 blur-[80px] rounded-full opacity-50"></div>
					<div class="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-brand-cream/50">
						<img 
							src="/hero-home.png" 
							alt="Architectural Masterpiece" 
							class="w-full h-[450px] object-cover"
						/>
					</div>
					<div class="absolute -bottom-6 -right-6 bg-brand-black p-6 rounded-3xl shadow-2xl max-w-[200px] hidden md:block">
						<p class="text-white/60 text-[11px] italic font-light">"Our mission is to create spaces that inspire and endure."</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Pillars of Excellence (Professional Icons) -->
		<div class="mb-40">
			<div class="text-center mb-20">
				<span class="text-brand-maroon font-bold uppercase tracking-[0.6em] text-[10px] block mb-4">Core Foundations</span>
				<h2 class="text-4xl md:text-5xl font-black text-brand-black">Our Pillars of Excellence</h2>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-brand-cream/40 p-12 rounded-[3rem] border border-brand-black/5 hover:border-brand-maroon/20 hover:bg-white transition-all duration-500 group">
					<div class="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-maroon mb-10 group-hover:bg-brand-maroon group-hover:text-white transition-smooth">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
					</div>
					<h3 class="text-2xl font-bold text-brand-black mb-6">Expert Construction</h3>
					<p class="text-brand-black/50 leading-relaxed">
						We utilize premium materials and world-class engineering to ensure that every structure we build is not only aesthetically stunning but structurally immortal.
					</p>
				</div>
				
				<div class="bg-brand-cream/40 p-12 rounded-[3rem] border border-brand-black/5 hover:border-brand-maroon/20 hover:bg-white transition-all duration-500 group">
					<div class="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-maroon mb-10 group-hover:bg-brand-maroon group-hover:text-white transition-smooth">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
					</div>
					<h3 class="text-2xl font-bold text-brand-black mb-6">Strategic Oversight</h3>
					<p class="text-brand-black/50 leading-relaxed">
						Our management philosophy focuses on preventative maintenance and high-yield returns, protecting your investment for generations to come.
					</p>
				</div>
				
				<div class="bg-brand-cream/40 p-12 rounded-[3rem] border border-brand-black/5 hover:border-brand-maroon/20 hover:bg-white transition-all duration-500 group">
					<div class="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-maroon mb-10 group-hover:bg-brand-maroon group-hover:text-white transition-smooth">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
					</div>
					<h3 class="text-2xl font-bold text-brand-black mb-6">Prime Brokerage</h3>
					<p class="text-brand-black/50 leading-relaxed">
						We provide exclusive access to litigation-free, verified lands and properties across Ghana’s fastest-growing residential and commercial hubs.
					</p>
				</div>
			</div>
		</div>

		<!-- Core Values (Lucid Light Version) -->
		<div class="py-24 border-t border-brand-black/5">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
				<div class="lg:col-span-4">
					<div class="inline-flex items-center gap-3 mb-6">
						<span class="w-8 h-px bg-brand-maroon"></span>
						<span class="text-brand-maroon font-bold uppercase tracking-[0.5em] text-[10px]">Our Ethics</span>
					</div>
					<h2 class="text-4xl md:text-5xl font-black text-brand-black leading-tight mb-8">
						The Values <br/>That Guide Us
					</h2>
					<p class="text-brand-black/50 leading-relaxed font-light">
						At RealView Homes, we are driven by a commitment to excellence that goes beyond the surface. We build for the future, with integrity as our cornerstone.
					</p>
				</div>
				<div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
					{#each values as value}
						<div class="flex flex-col gap-6 group">
							<div class="w-12 h-12 rounded-xl bg-brand-cream border border-brand-maroon/20 flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-500 shadow-sm">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={value.icon}/>
								</svg>
							</div>
							<div>
								<h4 class="text-lg font-black text-brand-black uppercase tracking-wider mb-3">{value.title}</h4>
								<p class="text-brand-black/60 text-sm leading-relaxed font-light">{value.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.serif {
		font-family: 'Playfair Display', serif;
	}
</style>
