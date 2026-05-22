<script lang="ts">
	let showCertificateModal = $state(false);

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

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && showCertificateModal) showCertificateModal = false;
	}}
/>

<div class="min-h-screen bg-white pt-32 pb-20">
	<div class="container mx-auto px-6">
		<!-- Hero Section (Fit to Screen) -->
		<div class="mb-32 flex h-[calc(100vh-(--spacing(40)))] items-center">
			<div class="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
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
						class="absolute -inset-10 rounded-full bg-brand-maroon/5 opacity-50 blur-[80px]"
					></div>
					<div
						class="relative overflow-hidden rounded-[3rem] border-4 border-brand-cream/50 shadow-2xl"
					>
						<img
							src="/hero-home.png"
							alt="Architectural Masterpiece"
							class="h-[450px] w-full object-cover"
						/>
					</div>
					<div
						class="absolute -right-6 -bottom-6 hidden max-w-[200px] rounded-3xl bg-brand-black p-6 shadow-2xl md:block"
					>
						<p class="text-[11px] font-light text-white/60 italic">
							"Our mission is to create spaces that inspire and endure."
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

		<!-- Accreditation Section -->
		<div id="accreditation" class="mb-40 scroll-mt-28 border-t border-brand-black/5 pt-24">
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
						RealView Homes are legally sound, certified, and completely litigation-free. We uphold
						the absolute highest code of ethics, protecting your investments at every step.
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
							class="transition-smooth absolute -inset-4 rounded-3xl bg-brand-maroon/5 opacity-50 blur-2xl group-hover:opacity-100"
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
						<p class="text-sm font-medium text-white">
							GHIREB Certificate of Professional Membership
						</p>
						<p class="mt-1 text-xs text-white/40">
							Sandra Apperkon Polo — Registration No. PB97-25-63
						</p>
					</div>
				</div>
			</div>
		{/if}

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
