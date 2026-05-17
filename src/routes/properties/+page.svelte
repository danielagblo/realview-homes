<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const properties = $derived(data.properties);
	const searchParams = $derived(data.searchParams);
</script>

<svelte:head>
	<title>Exclusive Property Portfolio | RealView Homes</title>
	<meta name="description" content="Explore our curated collection of luxury residential properties, prime lands, and premium architectural developments across Ghana." />
</svelte:head>

<div class="pt-32 pb-20 bg-brand-cream min-h-screen">
	<div class="container mx-auto px-6">
		<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
			<div>
				<h1 class="text-5xl font-black text-brand-black mb-4">Our Properties</h1>
				<p class="text-brand-black/60 max-w-xl">
					Discover excellence in every corner. Browse our curated selection of premium Ghanaian real estate.
				</p>
			</div>

			<!-- Search & Filter Controls -->
			<form method="GET" class="flex flex-wrap gap-4 bg-white p-2 rounded-3xl shadow-xl shadow-brand-black/5 border border-brand-black/5 items-center">
				<div class="flex-1 min-w-[200px] relative">
					<input 
						type="text" 
						name="search" 
						placeholder="Search properties..." 
						value={searchParams.search}
						class="w-full pl-12 pr-4 py-3 bg-brand-cream/50 rounded-2xl outline-none focus:bg-white focus:ring-2 ring-brand-maroon/20 transition-smooth border-none"
					/>
					<svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
				</div>
				
				<div class="relative group px-4">
					<select name="location" class="bg-transparent text-sm font-bold text-brand-black outline-none appearance-none cursor-pointer pr-8 border-none focus:ring-0 py-2">
						<option value="">All Locations</option>
						{#each data.locations as loc}
							<option value={loc} selected={searchParams.location === loc}>{loc}</option>
						{/each}
					</select>
					<svg class="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-black/20 pointer-events-none group-hover:text-brand-maroon transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg>
				</div>

				<div class="relative group px-4 border-l border-brand-black/5">
					<select name="maxPrice" class="bg-transparent text-sm font-bold text-brand-black outline-none appearance-none cursor-pointer pr-8 border-none focus:ring-0 py-2">
						<option value="">Any Price</option>
						{#each data.priceBuckets as bucket}
							<option value={bucket.value} selected={searchParams.maxPrice === String(bucket.value)}>{bucket.label}</option>
						{/each}
					</select>
					<svg class="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-black/20 pointer-events-none group-hover:text-brand-maroon transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg>
				</div>

				<button type="submit" class="bg-brand-black text-white px-8 py-3 rounded-2xl font-bold hover:bg-brand-maroon transition-smooth">
					Filter
				</button>
			</form>
		</div>

		{#if properties.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{#each properties as property}
					<PropertyCard {property} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-20 bg-white rounded-[3rem] shadow-xl border border-brand-black/5">
				<div class="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
					<svg class="w-10 h-10 text-brand-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
				</div>
				<h3 class="text-2xl font-black text-brand-black mb-2">No properties match your search</h3>
				<p class="text-brand-black/60 mb-8">Try adjusting your filters or searching for something else.</p>
				<a href="/properties" class="inline-block bg-brand-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-maroon transition-smooth">
					Reset All Filters
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Hide default arrow for all browsers */
	select {
		appearance: none !important;
		-webkit-appearance: none !important;
		-moz-appearance: none !important;
		background-image: none !important;
	}
	select::-ms-expand {
		display: none !important;
	}
</style>
