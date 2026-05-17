<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	let { data, form } = $props<{ data: PageData; form: ActionData }>();
	const property = $derived(data.property);
	const gallery = $derived(data.gallery);
	let isSubmitting = $state(false);

	const allImages = $derived([property.imageUrl, ...gallery.map((img: { url: string }) => img.url)]);
	let activeImageIndex = $state(0);
	let isLightboxOpen = $state(false);

	const toggleLightbox = () => (isLightboxOpen = !isLightboxOpen);

	const nextImage = () => {
		activeImageIndex = (activeImageIndex + 1) % allImages.length;
	};

	const prevImage = () => {
		activeImageIndex = (activeImageIndex - 1 + allImages.length) % allImages.length;
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (!isLightboxOpen) return;
		if (e.key === 'Escape') isLightboxOpen = false;
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') prevImage();
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('en-GH', {
			style: 'currency',
			currency: 'GHS',
			maximumFractionDigits: 0
		}).format(price);
	};
</script>

<svelte:head>
	<title>{property.title} in {property.location} | RealView Homes</title>
	<meta name="description" content="{property.description.substring(0, 160)}..." />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="min-h-screen bg-white font-sans selection:bg-brand-maroon/10 selection:text-brand-maroon">
	<div class="container mx-auto px-6 pt-28 pb-20">
		<!-- Breadcrumbs (Refined) -->
		<nav
			class="mb-10 flex text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase"
			aria-label="Breadcrumb"
		>
			<ol class="flex items-center space-x-4">
				<li><a href="/" class="transition-smooth hover:text-brand-maroon">Home</a></li>
				<li class="opacity-20">/</li>
				<li>
					<a href="/properties" class="transition-smooth hover:text-brand-maroon">Properties</a>
				</li>
				<li class="opacity-20">/</li>
				<li class="text-brand-black">{property.title}</li>
			</ol>
		</nav>

		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
			<!-- Left Column: Gallery & Details -->
			<div class="space-y-12 lg:col-span-3">
				<!-- Hero Image Section (Gallery Slider) -->
				<div class="space-y-6">
					<div class="relative overflow-hidden rounded-4xl border border-slate-100 shadow-2xl bg-brand-cream/10">
						<div 
							onclick={toggleLightbox}
							onkeydown={(e) => e.key === 'Enter' && toggleLightbox()}
							role="button"
							tabindex="0"
							class="relative h-[600px] w-full overflow-hidden group cursor-zoom-in"
							aria-label="Open full-screen gallery"
						>
							{#key activeImageIndex}
								<img 
									src={allImages[activeImageIndex]} 
									alt={property.title} 
									class="h-full w-full object-cover animate-fade-in transition-all duration-700 group-hover:scale-105" 
								/>
							{/key}
							
							<div class="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-smooth"></div>

							<div class="absolute top-8 left-8 flex gap-3 pointer-events-none">
								<span class="rounded-2xl bg-brand-maroon px-6 py-3 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-2xl shadow-brand-maroon/40 border border-white/10">
									For {property.type}
								</span>
								<span class="rounded-2xl bg-brand-black px-6 py-3 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-2xl shadow-brand-black/20 border border-white/10">
									{property.status}
								</span>
							</div>

							<div class="absolute bottom-8 right-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
								<div class="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest">
									View Gallery ({allImages.length})
								</div>
							</div>
						</div>

						<!-- Slider Controls (Now outside the main trigger to avoid button nesting) -->
						{#if allImages.length > 1}
							<div class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
								<button 
									type="button"
									onclick={prevImage}
									aria-label="Previous image"
									class="pointer-events-auto w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-smooth shadow-xl"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
								</button>
								<button 
									type="button"
									onclick={nextImage}
									aria-label="Next image"
									class="pointer-events-auto w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-smooth shadow-xl"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
								</button>
							</div>
						{/if}
					</div>

					<!-- Thumbnails Grid -->
					{#if allImages.length > 1}
						<div class="grid grid-cols-4 md:grid-cols-6 gap-4">
							{#each allImages as img, i}
								<button 
									type="button"
									onclick={() => activeImageIndex = i}
									aria-label="View image {i + 1}"
									class="aspect-square rounded-3xl overflow-hidden border-4 transition-smooth
										{activeImageIndex === i ? 'border-brand-maroon shadow-lg shadow-brand-maroon/20' : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-200'}"
								>
									<img src={img} alt="Thumbnail {i + 1}" class="w-full h-full object-cover" />
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Property Identity -->
				<div class="space-y-6">
					<div
						class="flex flex-col justify-between gap-6 border-b border-slate-100 pb-8 md:flex-row md:items-end"
					>
						<div class="space-y-1">
							<h1
								class="text-2xl leading-tight font-black tracking-tighter text-brand-black md:text-3xl"
							>
								{property.title}
							</h1>
							<p class="flex items-center gap-2 text-sm font-medium text-slate-500">
								<svg
									class="h-4 w-4 text-brand-maroon"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
								</svg>
								{property.location}
							</p>
						</div>
						<div class="text-right">
							<span
								class="mb-1 block text-[9px] font-bold tracking-widest text-brand-maroon uppercase"
								>Market Value</span
							>
							<span class="text-3xl font-black text-brand-black">{formatPrice(property.price)}</span
							>
						</div>
					</div>

					<!-- Features Grid -->
					<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
						<div
							class="flex flex-col items-center rounded-4xl border border-brand-maroon/5 bg-brand-cream/30 p-6 text-center"
						>
							<div class="mb-3 h-8 w-8 text-brand-maroon/40">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/></svg
								>
							</div>
							<span class="mb-1 text-[8px] font-bold tracking-widest text-slate-400 uppercase"
								>Bedrooms</span
							>
							<span class="text-lg font-black text-brand-black">{property.beds}</span>
						</div>
						<div
							class="flex flex-col items-center rounded-4xl border border-brand-maroon/5 bg-brand-cream/30 p-6 text-center"
						>
							<div class="mb-3 h-8 w-8 text-brand-maroon/40">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/></svg
								>
							</div>
							<span class="mb-1 text-[8px] font-bold tracking-widest text-slate-400 uppercase"
								>Bathrooms</span
							>
							<span class="text-lg font-black text-brand-black">{property.baths}</span>
						</div>
						<div
							class="flex flex-col items-center rounded-4xl border border-brand-maroon/5 bg-brand-cream/30 p-6 text-center"
						>
							<div class="mb-3 h-8 w-8 text-brand-maroon/40">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
									/></svg
								>
							</div>
							<span class="mb-1 text-[8px] font-bold tracking-widest text-slate-400 uppercase"
								>Square Feet</span
							>
							<span class="text-lg font-black text-brand-black">{property.sqft}</span>
						</div>
						<div
							class="flex flex-col items-center rounded-4xl border border-brand-maroon/5 bg-brand-cream/30 p-6 text-center"
						>
							<div class="mb-3 h-8 w-8 text-brand-maroon/40">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/></svg
								>
							</div>
							<span class="mb-1 text-[8px] font-bold tracking-widest text-slate-400 uppercase"
								>Type</span
							>
							<span class="text-lg font-black text-brand-black capitalize">{property.type}</span>
						</div>
					</div>
				</div>

				<!-- Description -->
				<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
					<div class="md:col-span-4">
						<h3 class="text-xl font-black tracking-tighter text-brand-black uppercase">
							Description
						</h3>
					</div>
					<div class="space-y-4 md:col-span-8">
						<p class="text-base leading-relaxed text-slate-600">
							{property.description}
						</p>
					</div>
				</div>
			</div>

			<!-- Right Column: Booking Card -->
			<div class="lg:col-span-2">
				<div
					class="sticky top-28 overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 text-brand-black shadow-2xl md:p-10"
				>
					<div class="pointer-events-none absolute inset-0 bg-brand-maroon/2"></div>
					<div class="relative z-10">
						<div class="mb-6 flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-maroon text-white"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/></svg
								>
							</div>
							<h3 class="text-xl font-black">Book a Viewing</h3>
						</div>

						{#if form?.success}
							<div
								class="animate-in fade-in slide-in-from-top-4 mb-8 flex items-center gap-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-sm font-bold text-emerald-700"
							>
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
										><path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/></svg
									>
								</div>
								Success! Our consultants will call you shortly.
							</div>
						{/if}

						<form
							method="POST"
							action="?/book"
							use:enhance={() => {
								isSubmitting = true;
								return async ({ update }) => {
									isSubmitting = false;
									update();
								};
							}}
							class="space-y-8"
						>
							<div class="group relative">
								<label
									for="name"
									class="transition-smooth mb-3 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-focus-within:text-brand-maroon"
									>Full Name</label
								>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="e.g. Samuel Mensah"
									class="w-full rounded-4xl border border-slate-100 bg-slate-50 px-6 py-5 transition-all duration-500 outline-none focus:border-brand-maroon focus:bg-white focus:ring-0"
									required
								/>
							</div>
							<div class="group relative">
								<label
									for="email"
									class="transition-smooth mb-3 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-focus-within:text-brand-maroon"
									>Email Address</label
								>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="e.g. sam@company.com"
									class="w-full rounded-4xl border border-slate-100 bg-slate-50 px-6 py-5 transition-all duration-500 outline-none focus:border-brand-maroon focus:bg-white focus:ring-0"
									required
								/>
							</div>
							<div class="group relative">
								<label
									for="phone"
									class="transition-smooth mb-3 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-focus-within:text-brand-maroon"
									>Contact Number</label
								>
								<input
									type="tel"
									id="phone"
									name="phone"
									placeholder="e.g. +233 24 000 0000"
									class="w-full rounded-4xl border border-slate-100 bg-slate-50 px-6 py-5 transition-all duration-500 outline-none focus:border-brand-maroon focus:bg-white focus:ring-0"
									required
								/>
							</div>
							<div class="group relative">
								<label
									for="date"
									class="transition-smooth mb-3 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-focus-within:text-brand-maroon"
									>Preferred Consultation Date</label
								>
								<input
									type="date"
									id="date"
									name="date"
									class="w-full rounded-4xl border border-slate-100 bg-slate-50 px-6 py-5 transition-all duration-500 outline-none focus:border-brand-maroon focus:bg-white focus:ring-0"
									required
								/>
							</div>
							<div class="group relative">
								<label
									for="message"
									class="transition-smooth mb-3 block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-focus-within:text-brand-maroon"
									>Bespoke Requirements</label
								>
								<textarea
									id="message"
									name="message"
									rows="3"
									placeholder="Tell us about your architectural preferences..."
									class="w-full resize-none rounded-4xl border border-slate-100 bg-slate-50 px-6 py-5 transition-all duration-500 outline-none focus:border-brand-maroon focus:bg-white focus:ring-0"
								></textarea>
							</div>

							<button
								type="submit"
								class="mt-4 w-full rounded-4xl bg-brand-maroon py-6 text-[10px] font-black tracking-[0.3em] text-white uppercase shadow-2xl shadow-brand-maroon/30 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Processing Request...' : 'Confirm Consultation'}
							</button>

							<p
								class="mt-8 text-center text-[9px] font-bold tracking-widest text-slate-300 uppercase"
							>
								Privacy & Structural integrity guaranteed.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if isLightboxOpen}
	<!-- Lightbox Modal -->
	<div 
		class="fixed inset-0 z-100 bg-brand-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:p-12 animate-fade-in"
		onclick={toggleLightbox}
		onkeydown={(e) => e.key === 'Escape' && toggleLightbox()}
		role="dialog"
		aria-modal="true"
		tabindex="0"
	>
		<!-- Close Button -->
		<button 
			type="button"
			onclick={toggleLightbox}
			class="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-smooth border border-white/20 z-110"
			aria-label="Close gallery"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
		</button>

		<!-- Main Image Stage -->
		<div class="relative w-full h-full flex items-center justify-center" onclick={(e) => e.stopPropagation()} role="presentation">
			{#key activeImageIndex}
				<img 
					src={allImages[activeImageIndex]} 
					alt="Full screen view" 
					class="max-w-full max-h-full object-contain rounded-4xl shadow-2xl animate-scale-in"
				/>
			{/key}

			<!-- Navigation Arrows -->
			{#if allImages.length > 1}
				<div class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
					<button 
						type="button"
						onclick={prevImage}
						aria-label="Previous image"
						class="pointer-events-auto w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-smooth shadow-2xl"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
					</button>
					<button 
						type="button"
						onclick={nextImage}
						aria-label="Next image"
						class="pointer-events-auto w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-smooth shadow-2xl"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
					</button>
				</div>
			{/if}
		</div>

		<!-- Footer Info -->
		<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none">
			<p class="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
				Portfolio Item {activeImageIndex + 1} of {allImages.length}
			</p>
			<h4 class="text-white text-lg font-black tracking-tighter uppercase">{property.title}</h4>
		</div>
	</div>
{/if}
