<script lang="ts">
	const values = [
		{
			title: 'Uncompromising Precision',
			desc: 'We believe that the smallest detail is the foundation of excellence. From blueprints to finishings, our work is defined by absolute accuracy.',
			icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
		},
		{
			title: 'Strategic Innovation',
			desc: 'Real estate in Ghana is evolving, and we lead that change by integrating modern technology with sustainable architectural practices.',
			icon: 'M13 10V3L4 14h7v7l9-11h-7z'
		},
		{
			title: 'Legacy & Trust',
			desc: "We don't just build houses; we build long-term relationships. Our clients trust us to manage their most significant investments with integrity.",
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
		}
	];
</script>

<svelte:head>
	<title>About Us | RealView Homes</title>
	<meta
		name="description"
		content="Learn about RealView Homes, our mission, values, and commitment to delivering luxury architectural services in Ghana."
	/>
</svelte:head>



<div class="min-h-screen bg-white pt-24 lg:pt-32 pb-20 overflow-x-hidden">
	<div class="container mx-auto px-6">
		<!-- Hero Section (Responsive Layout) -->
		<div class="min-h-0 h-auto lg:h-[calc(100vh-16rem)] lg:min-h-[500px] flex items-center mb-20 lg:mb-32 lg:pt-0">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
				<div class="relative z-10">
					<div class="mb-6 inline-flex items-center gap-4">
						<span class="h-px w-10 bg-brand-maroon"></span>
						<span class="text-[9px] font-bold tracking-[0.4em] text-brand-maroon uppercase"
							>The RealView Narrative</span
						>
					</div>
					<h1
						class="mb-8 text-5xl leading-[0.95] font-black tracking-tighter text-brand-black md:text-7xl"
					>
						Defining <br />
						<span class="serif mt-2 block font-normal text-brand-maroon lowercase italic"
							>Modern Living</span
						>
						<span class="text-brand-black/20">in Ghana.</span>
					</h1>
					<div class="border-l-4 border-brand-maroon/30 pl-8">
						<p
							class="serif mb-8 max-w-xl text-lg leading-relaxed font-light text-brand-black/80 italic md:text-xl"
						>
							"We believe that a building is not just a structure, but a vessel for life's most
							meaningful moments."
						</p>
						<p class="mb-8 max-w-lg text-base leading-relaxed text-brand-black/50">
							RealView Homes bridges the gap between visionary design and master-class construction,
							ensuring every project is a landmark of quality.
						</p>
						<div class="mt-10 flex items-center gap-10">
							<div>
								<div class="mb-1 text-3xl font-black text-brand-maroon">12+</div>
								<div class="text-[9px] font-bold tracking-widest text-brand-black/40 uppercase">
									Years Experience
								</div>
							</div>
							<div>
								<div class="mb-1 text-3xl font-black text-brand-maroon">450+</div>
								<div class="text-[9px] font-bold tracking-widest text-brand-black/40 uppercase">
									Projects Delivered
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group relative">
					<div
						class="absolute inset-0 lg:-inset-10 rounded-full bg-brand-maroon/5 opacity-50 blur-[80px]"
					></div>
					<div
						class="relative overflow-hidden rounded-[3rem] border-4 border-brand-cream/50 shadow-2xl"
					>
						<img 
							src="/hero-home.png" 
							alt="Architectural Masterpiece" 
							class="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Vision & Mission Section -->
		<div class="mb-40">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				<div class="lg:col-span-5">
					<div class="mb-6 inline-flex items-center gap-3">
						<span class="h-px w-8 bg-brand-maroon"></span>
						<span class="text-[10px] font-bold tracking-[0.5em] text-brand-maroon uppercase"
							>Our Purpose</span
						>
					</div>
					<h2 class="text-4xl leading-[1.1] font-black text-brand-black md:text-5xl uppercase mb-6">
						Vision & <br />
						<span class="serif text-brand-maroon lowercase italic font-normal">Mission</span>
					</h2>
					<p class="leading-relaxed font-light text-brand-black/60">
						We are committed to elevating the standard of real estate in Ghana, building landscapes of luxury, sustainability, and trust.
					</p>
				</div>
				<div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
					<!-- Vision Card -->
					<div class="relative group overflow-hidden rounded-3xl border border-brand-maroon/10 bg-brand-cream/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-maroon/5">
						<div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-maroon/5 transition-transform duration-500 group-hover:scale-150"></div>
						<span class="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-maroon/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-maroon uppercase">
							Our Vision
						</span>
						<p class="text-2xl font-black leading-tight text-brand-black serif italic">
							“Creating elegant living for everyone”
						</p>
					</div>

					<!-- Mission Card -->
					<div class="relative group overflow-hidden rounded-3xl border border-brand-black/5 bg-brand-black/[0.02] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-black/5">
						<div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-black/[0.02] transition-transform duration-500 group-hover:scale-150"></div>
						<span class="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-black/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-black uppercase">
							Our Mission
						</span>
						<p class="text-lg leading-snug font-medium text-brand-black/80">
							Building and delivering elegant properties with comfort, quality, and trust.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Pillars of Excellence (Professional Icons) -->
		<div class="mb-40">
			<div class="mb-20 text-center">
				<span class="mb-4 block text-[10px] font-bold tracking-[0.6em] text-brand-maroon uppercase"
					>Core Foundations</span
				>
				<h2 class="text-4xl font-black text-brand-black md:text-5xl">Our Pillars of Excellence</h2>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div
					class="group rounded-[3rem] border border-brand-black/5 bg-brand-cream/40 p-12 transition-all duration-500 hover:border-brand-maroon/20 hover:bg-white"
				>
					<div
						class="transition-smooth mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-maroon shadow-xl group-hover:bg-brand-maroon group-hover:text-white"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/></svg
						>
					</div>
					<h3 class="mb-6 text-2xl font-bold text-brand-black">Expert Construction</h3>
					<p class="leading-relaxed text-brand-black/50">
						We utilize premium materials and world-class engineering to ensure that every structure
						we build is not only aesthetically stunning but structurally immortal.
					</p>
				</div>

				<div
					class="group rounded-[3rem] border border-brand-black/5 bg-brand-cream/40 p-12 transition-all duration-500 hover:border-brand-maroon/20 hover:bg-white"
				>
					<div
						class="transition-smooth mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-maroon shadow-xl group-hover:bg-brand-maroon group-hover:text-white"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
					</div>
					<h3 class="mb-6 text-2xl font-bold text-brand-black">Strategic Oversight</h3>
					<p class="leading-relaxed text-brand-black/50">
						Our management philosophy focuses on preventative maintenance and high-yield returns,
						protecting your investment for generations to come.
					</p>
				</div>

				<div
					class="group rounded-[3rem] border border-brand-black/5 bg-brand-cream/40 p-12 transition-all duration-500 hover:border-brand-maroon/20 hover:bg-white"
				>
					<div
						class="transition-smooth mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-maroon shadow-xl group-hover:bg-brand-maroon group-hover:text-white"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/></svg
						>
					</div>
					<h3 class="mb-6 text-2xl font-bold text-brand-black">Prime Brokerage</h3>
					<p class="leading-relaxed text-brand-black/50">
						We provide exclusive access to litigation-free, verified lands and properties across
						Ghana’s fastest-growing residential and commercial hubs.
					</p>
				</div>
			</div>
		</div>



		<!-- Core Values (Lucid Light Version) -->
		<div class="border-t border-brand-black/5 py-24">
			<div class="grid grid-cols-1 gap-20 lg:grid-cols-12">
				<div class="lg:col-span-4">
					<div class="mb-6 inline-flex items-center gap-3">
						<span class="h-px w-8 bg-brand-maroon"></span>
						<span class="text-[10px] font-bold tracking-[0.5em] text-brand-maroon uppercase"
							>Our Ethics</span
						>
					</div>
					<h2 class="mb-8 text-4xl leading-tight font-black text-brand-black md:text-5xl">
						The Values <br />That Guide Us
					</h2>
					<p class="leading-relaxed font-light text-brand-black/50">
						At RealView Homes, we are driven by a commitment to excellence that goes beyond the
						surface. We build for the future, with integrity as our cornerstone.
					</p>
				</div>
				<div class="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:col-span-8">
					{#each values as value}
						<div class="group flex flex-col gap-6">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-maroon/20 bg-brand-cream text-brand-maroon shadow-sm transition-all duration-500 group-hover:bg-brand-maroon group-hover:text-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d={value.icon}
									/>
								</svg>
							</div>
							<div>
								<h4 class="mb-3 text-lg font-black tracking-wider text-brand-black uppercase">
									{value.title}
								</h4>
								<p class="text-sm leading-relaxed font-light text-brand-black/60">{value.desc}</p>
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
