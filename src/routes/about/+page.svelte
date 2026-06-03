<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import {
		initGSAP,
		fadeUp,
		slideInLeft,
		slideInRight,
		staggerIn,
		popIn,
		parallax,
		countUp,
		killAll
	} from '$lib/animations';

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

	// ── Element refs ─────────────────────────────────────────────────────────
	// Hero left side
	let heroEyebrow: HTMLElement;
	let heroH1: HTMLElement;
	let heroQuoteBlock: HTMLElement;
	let heroStats: HTMLElement;

	// Hero image (right column)
	let heroImageWrap: HTMLElement;

	// Vision & Mission cards
	let visionCard: HTMLElement;
	let missionCard: HTMLElement;

	// Pillars grid parent
	let pillarsGrid: HTMLElement;

	// Founder
	let founderPortraitCard: HTMLElement;
	let founderBioHeading: HTMLElement;
	let founderBio: HTMLElement; // the .founder-bio column

	// Core Values grid
	let coreValuesGrid: HTMLElement;

	onMount(() => {
		if (!browser) return;
		initGSAP();

		// ── 1. Hero left column ──────────────────────────────────────────────
		fadeUp(heroEyebrow, { delay: 0.1, y: 30 });
		fadeUp(heroH1, { delay: 0.28, y: 35 });
		fadeUp(heroQuoteBlock, { delay: 0.48, y: 30 });
		fadeUp(heroStats, { delay: 0.65, y: 25 });

		// ── 2. Hero stat countUp (12+ and 450+) ─────────────────────────────
		const statEls = document.querySelectorAll<HTMLElement>('.mb-1.text-3xl.font-black.text-brand-maroon');
		if (statEls.length >= 2) {
			countUp(statEls[0], { target: 12, suffix: '+', duration: 1.8 });
			countUp(statEls[1], { target: 450, suffix: '+', duration: 2.0 });
		}

		// ── 3. Hero image — slideInRight + parallax ──────────────────────────
		slideInRight(heroImageWrap, { delay: 0.35, duration: 1.0, x: 55 });
		parallax(heroImageWrap, { speed: -35 });

		// ── 4. Vision & Mission cards ────────────────────────────────────────
		slideInLeft(visionCard, { delay: 0, duration: 0.9 });
		slideInRight(missionCard, { delay: 0.18, duration: 0.9 });

		// ── 5. Pillars of Excellence — popIn on 3 cards ──────────────────────
		if (pillarsGrid) {
			const pillarCards = pillarsGrid.querySelectorAll(':scope > div');
			popIn(Array.from(pillarCards), { stagger: 0.13 });
		}

		// ── 6. Founder — portrait slideInLeft + parallax ─────────────────────
		slideInLeft(founderPortraitCard, { delay: 0, duration: 1.0 });
		parallax(founderPortraitCard, { speed: -25 });

		// Founder bio — heading + paragraphs + stats staggered fadeUp
		if (founderBio) {
			const bioItems = founderBio.querySelectorAll(
				'.founder-bio__heading, .founder-bio__body, .founder-stats'
			);
			fadeUp(Array.from(bioItems), { stagger: 0.15, y: 30 });
		}

		// ── 7. Core Values — staggerIn on value items ────────────────────────
		staggerIn(coreValuesGrid, '.group.flex.flex-col', { stagger: 0.14, y: 32 });
	});

	onDestroy(() => {
		if (browser) killAll();
	});
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
					<div bind:this={heroEyebrow} class="mb-6 inline-flex items-center gap-4">
						<span class="h-px w-10 bg-brand-maroon"></span>
						<span class="text-[9px] font-bold tracking-[0.4em] text-brand-maroon uppercase"
							>The RealView Narrative</span
						>
					</div>
					<h1
						bind:this={heroH1}
						class="mb-8 text-5xl leading-[0.95] font-black tracking-tighter text-brand-black md:text-7xl"
					>
						Defining <br />
						<span class="serif mt-2 block font-normal text-brand-maroon lowercase italic"
							>Modern Living</span
						>
						<span class="text-brand-black/20">in Ghana.</span>
					</h1>
					<div bind:this={heroQuoteBlock} class="border-l-4 border-brand-maroon/30 pl-8">
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
						<div bind:this={heroStats} class="mt-10 flex items-center gap-10">
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
				<div bind:this={heroImageWrap} class="group relative">
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
					<div bind:this={visionCard} class="relative group overflow-hidden rounded-3xl border border-brand-maroon/10 bg-brand-cream/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-maroon/5">
						<div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-maroon/5 transition-transform duration-500 group-hover:scale-150"></div>
						<span class="mb-4 inline-flex items-center justify-center rounded-xl bg-brand-maroon/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-maroon uppercase">
							Our Vision
						</span>
						<p class="text-2xl font-black leading-tight text-brand-black serif italic">
							“Creating elegant living for everyone”
						</p>
					</div>

					<!-- Mission Card -->
					<div bind:this={missionCard} class="relative group overflow-hidden rounded-3xl border border-brand-black/5 bg-brand-black/[0.02] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-black/5">
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

			<div bind:this={pillarsGrid} class="grid grid-cols-1 gap-8 md:grid-cols-3">
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



		<!-- Meet the Founder -->
		<div class="founder-section mb-40">
			<div class="mb-16 text-center">
				<span class="mb-4 block text-[10px] font-bold tracking-[0.6em] text-brand-maroon uppercase"
					>The Visionary</span
				>
				<h2 class="text-4xl font-black text-brand-black md:text-5xl">Meet the Founder</h2>
			</div>

			<div class="founder-layout">
				<!-- Portrait Column -->
				<div class="founder-portrait-wrap">
					<!-- Decorative blobs -->
					<div class="portrait-blob portrait-blob--top"></div>
					<div class="portrait-blob portrait-blob--bottom"></div>

					<!-- Main portrait card -->
					<div bind:this={founderPortraitCard} class="portrait-card group">
						<!-- Accent border lines -->
						<div class="portrait-accent portrait-accent--tl"></div>
						<div class="portrait-accent portrait-accent--br"></div>

						<img
							src="/images/photo_2026-06-03_14-55-11.jpg"
							alt="Founder of RealView Homes"
							class="portrait-img"
						/>

						<!-- Floating name badge -->
						<div class="founder-badge">
							<div class="founder-badge__dot"></div>
							<div>
								<p class="founder-badge__name">Founder & CEO</p>
								<p class="founder-badge__company">RealView Homes</p>
							</div>
						</div>

						<!-- Experience chip -->
						<div class="founder-chip">12+ yrs</div>
					</div>
				</div>

				<!-- Bio Column -->
				<div bind:this={founderBio} class="founder-bio">
					<div class="mb-6 inline-flex items-center gap-3">
						<span class="h-px w-8 bg-brand-maroon"></span>
						<span class="text-[10px] font-bold tracking-[0.5em] text-brand-maroon uppercase"
							>Leadership</span
						>
					</div>

					<h3 class="founder-bio__heading serif">
						"Transforming the way Ghana lives, one home at a time."
					</h3>

					<p class="founder-bio__body">
						With over a decade of experience in luxury real estate development, our founder built
						RealView Homes on the conviction that every Ghanaian deserves access to spaces of
						elegance and integrity. Her relentless pursuit of architectural excellence has shaped
						hundreds of landmark properties across the country.
					</p>

					<p class="founder-bio__body">
						A graduate of distinguished institutions in architecture and business, she combines
						creative vision with strategic acumen — driving RealView to the forefront of Ghana's
						premium property market.
					</p>

					<div class="founder-stats">
						<div class="founder-stat">
							<span class="founder-stat__num">450+</span>
							<span class="founder-stat__label">Projects Delivered</span>
						</div>
						<div class="founder-stat-divider"></div>
						<div class="founder-stat">
							<span class="founder-stat__num">12+</span>
							<span class="founder-stat__label">Years Experience</span>
						</div>
						<div class="founder-stat-divider"></div>
						<div class="founder-stat">
							<span class="founder-stat__num">100%</span>
							<span class="founder-stat__label">Client Satisfaction</span>
						</div>
					</div>
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
				<div bind:this={coreValuesGrid} class="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:col-span-8">
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

	/* ── Founder Section ───────────────────────────────────── */
	.founder-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 4rem;
		align-items: center;
	}

	@media (min-width: 1024px) {
		.founder-layout {
			grid-template-columns: 1fr 1fr;
			gap: 6rem;
		}
	}

	/* Portrait wrapper – positions decorative blobs */
	.founder-portrait-wrap {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.portrait-blob {
		position: absolute;
		border-radius: 9999px;
		filter: blur(70px);
		pointer-events: none;
	}

	.portrait-blob--top {
		top: -60px;
		right: -40px;
		width: 280px;
		height: 280px;
		background: rgba(139, 0, 0, 0.08);
	}

	.portrait-blob--bottom {
		bottom: -40px;
		left: -20px;
		width: 200px;
		height: 200px;
		background: rgba(245, 235, 220, 0.9);
	}

	/* Main portrait card */
	.portrait-card {
		position: relative;
		width: 100%;
		max-width: 420px;
		border-radius: 2.5rem;
		overflow: visible;
		transition: transform 0.4s ease;
	}

	.portrait-card:hover {
		transform: translateY(-6px);
	}

	/* Corner accent lines */
	.portrait-accent {
		position: absolute;
		width: 48px;
		height: 48px;
		z-index: 10;
		pointer-events: none;
	}

	.portrait-accent--tl {
		top: -10px;
		left: -10px;
		border-top: 3px solid rgba(139, 0, 0, 0.4);
		border-left: 3px solid rgba(139, 0, 0, 0.4);
		border-radius: 8px 0 0 0;
	}

	.portrait-accent--br {
		bottom: 60px;
		right: -10px;
		border-bottom: 3px solid rgba(139, 0, 0, 0.4);
		border-right: 3px solid rgba(139, 0, 0, 0.4);
		border-radius: 0 0 8px 0;
	}

	/* The photo itself */
	.portrait-img {
		display: block;
		width: 100%;
		height: 520px;
		object-fit: cover;
		object-position: top center;
		border-radius: 2.5rem;
		border: 4px solid rgba(245, 235, 220, 0.6);
		box-shadow:
			0 30px 80px rgba(0, 0, 0, 0.15),
			0 0 0 1px rgba(139, 0, 0, 0.08);
		transition: box-shadow 0.4s ease;
	}

	.portrait-card:hover .portrait-img {
		box-shadow:
			0 40px 100px rgba(0, 0, 0, 0.2),
			0 0 0 1px rgba(139, 0, 0, 0.14);
	}

	/* Floating name badge */
	.founder-badge {
		position: absolute;
		bottom: -18px;
		left: 28px;
		display: flex;
		align-items: center;
		gap: 10px;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(139, 0, 0, 0.12);
		border-radius: 100px;
		padding: 10px 20px 10px 12px;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
	}

	.founder-badge__dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #8b0000;
		flex-shrink: 0;
		box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.15);
	}

	.founder-badge__name {
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 0.05em;
		color: #1a1a1a;
		margin: 0;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.founder-badge__company {
		font-size: 10px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.5);
		margin: 0;
		line-height: 1.2;
	}

	/* Experience chip */
	.founder-chip {
		position: absolute;
		top: 24px;
		right: -14px;
		background: #8b0000;
		color: #fff;
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 8px 14px;
		border-radius: 100px;
		box-shadow: 0 6px 24px rgba(139, 0, 0, 0.35);
	}

	/* ── Bio column ─────────────────────────────────────────── */
	.founder-bio {
		padding-top: 1.5rem;
	}

	.founder-bio__heading {
		font-size: clamp(1.5rem, 3vw, 2.2rem);
		line-height: 1.3;
		font-weight: 400;
		font-style: italic;
		color: #1a1a1a;
		margin-bottom: 1.75rem;
	}

	.founder-bio__body {
		font-size: 0.95rem;
		line-height: 1.85;
		color: rgba(26, 26, 26, 0.6);
		font-weight: 300;
		margin-bottom: 1.25rem;
	}

	/* Stats row */
	.founder-stats {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(26, 26, 26, 0.06);
	}

	.founder-stat {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.founder-stat__num {
		font-size: 1.75rem;
		font-weight: 900;
		color: #8b0000;
		line-height: 1;
	}

	.founder-stat__label {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(26, 26, 26, 0.4);
	}

	.founder-stat-divider {
		width: 1px;
		height: 36px;
		background: rgba(26, 26, 26, 0.1);
		flex-shrink: 0;
	}

	/* ── Mobile Responsive Adjustments ──────────────────────── */
	@media (max-width: 640px) {
		.founder-layout {
			gap: 2.5rem;
		}

		.portrait-img {
			height: 440px;
			border-radius: 2rem;
		}

		.founder-chip {
			right: 12px;
			top: 16px;
			font-size: 10px;
			padding: 6px 12px;
		}

		.founder-badge {
			left: 16px;
			bottom: -12px;
			padding: 8px 16px 8px 10px;
		}

		.founder-stats {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem 1rem;
			justify-content: space-between;
			margin-top: 2rem;
			padding-top: 1.5rem;
		}

		.founder-stat-divider {
			display: none;
		}

		.founder-stat {
			flex: 1 1 40%;
			align-items: center;
			text-align: center;
			min-width: 120px;
		}

		.founder-stat:last-child {
			flex: 1 1 100%;
			margin-top: 0.5rem;
		}
	}
</style>
