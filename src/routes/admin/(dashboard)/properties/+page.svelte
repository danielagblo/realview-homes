<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const formatPrice = (price: number, currency: string = 'GHS') => {
		return new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'en-GH', {
			style: 'currency',
			currency: currency,
			maximumFractionDigits: 0
		}).format(price);
	};

	const stats = $derived([
		{ label: 'Total Listings', value: data.properties.length, icon: '🏠' },
		{ label: 'Featured', value: data.properties.filter(p => p.isFeatured).length, icon: '⭐' },
		{ label: 'Available', value: data.properties.filter(p => p.status === 'available').length, icon: '✅' }
	]);
</script>

<svelte:head>
	<title>Property Inventory | RealView Homes</title>
</svelte:head>

<div class="space-y-10 pb-20">
	<!-- Header & Quick Actions -->
	<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
		<div>
			<h2 class="text-4xl font-display font-black text-brand-black tracking-tight">Inventory Management</h2>
			<p class="text-brand-black/40 font-medium mt-1">Refine and manage your premium real estate portfolio.</p>
		</div>
		<a 
			href="/admin/properties/new"
			class="bg-brand-black text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-brand-black/10 hover:bg-brand-maroon transition-smooth flex items-center gap-3 group"
		>
			<div class="bg-white/10 p-1 rounded-lg group-hover:bg-white/20 transition-smooth">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
				</svg>
			</div>
			<span>New Property</span>
		</a>
	</div>

	<!-- Quick Stats Grid -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each stats as stat}
			<div class="bg-white p-6 rounded-4xl border border-brand-black/5 shadow-sm flex items-center gap-6">
				<div class="text-3xl bg-brand-cream/50 w-16 h-16 rounded-2xl flex items-center justify-center">
					{stat.icon}
				</div>
				<div>
					<p class="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/30 mb-1">{stat.label}</p>
					<p class="text-2xl font-black text-brand-black">{stat.value}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Property Inventory Table -->
	<div class="bg-white rounded-4xl shadow-xl shadow-brand-black/5 border border-brand-black/5 overflow-hidden">
		<div class="overflow-x-auto">
			<table class="w-full text-left">
				<thead>
					<tr class="bg-brand-cream/30 border-b border-brand-black/5">
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Property Detail</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Location</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Valuation</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Status</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest text-right">Actions</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-brand-black/5">
					{#each data.properties as property}
						<tr class="group hover:bg-brand-cream/10 transition-smooth">
							<td class="px-8 py-6">
								<div class="flex items-center gap-5">
									<div class="w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0 border border-brand-black/5">
										<img src={property.imageUrl} alt={property.title} class="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
									</div>
									<div>
										<p class="font-bold text-brand-black leading-tight mb-1">{property.title}</p>
										<div class="flex items-center gap-2">
											{#if property.isFeatured}
												<span class="text-[8px] font-black uppercase bg-brand-maroon text-white px-2 py-0.5 rounded-full tracking-tighter">Featured</span>
											{/if}
											<span class="text-[10px] text-brand-black/30 font-bold uppercase">{property.type}</span>
										</div>
									</div>
								</div>
							</td>
							<td class="px-8 py-6">
								<p class="text-sm font-bold text-brand-black/60">{property.location}</p>
							</td>
							<td class="px-8 py-6">
								<p class="text-sm font-black text-brand-maroon">{formatPrice(property.price, property.currency)}</p>
							</td>
							<td class="px-8 py-6">
								<span class="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
									{property.status === 'available' 
										? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
										: 'bg-brand-black/5 text-brand-black/40 border-brand-black/5'}
								">
									{property.status}
								</span>
							</td>
							<td class="px-8 py-6">
								<div class="flex justify-end items-center gap-2">
									<a 
										href="/admin/properties/{property.id}" 
										class="w-10 h-10 rounded-xl flex items-center justify-center text-brand-black/30 hover:bg-brand-black hover:text-white transition-smooth"
										aria-label="Edit"
									>
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</a>
									<form 
										method="POST" 
										action="?/delete" 
										use:enhance={({ cancel }) => {
											if (!confirm('Permanently delete this property? All media files will also be wiped.')) {
												cancel();
											}
										}}
									>
										<input type="hidden" name="id" value={property.id} />
										<button 
											type="submit" 
											class="w-10 h-10 rounded-xl flex items-center justify-center text-brand-black/30 hover:bg-rose-600 hover:text-white transition-smooth"
											aria-label="Delete"
										>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button>
									</form>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
