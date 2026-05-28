<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const properties = $derived(data.properties);
	const searchParams = $derived(data.searchParams);
</script>

<svelte:head>
	<title>Exclusive Property Portfolio | RealView Homes</title>
	<meta
		name="description"
		content="Explore our curated collection of luxury residential properties, prime lands, and premium architectural developments across Ghana."
	/>
</svelte:head>

<div class="min-h-screen bg-brand-cream pt-24 pb-20 lg:pt-32">
	<div class="container mx-auto px-6">
		<div class="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
			<div>
				<h1 class="mb-4 text-2xl font-black text-brand-black sm:text-5xl">Our Properties</h1>
				<p class="max-w-xl text-sm text-brand-black/60">
					Discover excellence in every corner. Browse our curated selection of premium Ghanaian real
					estate.
				</p>
			</div>
		</div>

		{#if properties.length > 0}
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				{#each properties as property}
					<PropertyCard {property} />
				{/each}
			</div>
		{:else}
			<div class="rounded-[3rem] py-20 text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream"
				>
					<svg
						class="h-10 w-10 text-brand-black/20"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</div>
				<h3 class="mb-2 text-xl font-medium text-brand-black">No properties</h3>
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
