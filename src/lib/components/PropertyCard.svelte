<script lang="ts">
	interface Property {
		id: number;
		title: string;
		price: number;
		location: string;
		beds: number;
		baths: number;
		sqft: number;
		imageUrl: string;
		type: string;
		currency?: string;
	}

	let { property } = $props<{ property: Property }>();

	const formatPrice = (price: number) => {
		const curr = property.currency || 'GHS';
		return new Intl.NumberFormat(curr === 'USD' ? 'en-US' : 'en-GH', {
			style: 'currency',
			currency: curr,
			maximumFractionDigits: 0
		}).format(price);
	};
</script>

<div class="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-black/5 hover:shadow-2xl hover:shadow-brand-maroon/10 transition-smooth border border-brand-black/5">
	<div class="relative h-64 overflow-hidden">
		<img 
			src={property.imageUrl} 
			alt={property.title} 
			class="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
		/>
		<div class="absolute top-4 left-4 flex gap-2">
			<span class="bg-brand-maroon text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
				For {property.type}
			</span>
		</div>
		<div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
			<span class="text-lg font-black text-brand-maroon">{formatPrice(property.price)}</span>
		</div>
	</div>

	<div class="p-6">
		<div class="flex justify-between items-start mb-2">
			<h3 class="text-xl font-bold text-brand-black group-hover:text-brand-maroon transition-smooth">
				{property.title}
			</h3>
		</div>
		<p class="text-sm text-brand-black/60 mb-6 flex items-center gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			{property.location}
		</p>

		<div class="grid grid-cols-3 gap-4 border-t border-brand-black/5 pt-6">
			<div class="flex flex-col items-center gap-1">
				<div class="w-4 h-4 text-brand-maroon/60">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
				</div>
				<span class="text-[9px] text-brand-black/40 uppercase font-bold tracking-widest">Beds</span>
				<span class="text-xs font-bold">{property.beds}</span>
			</div>
			<div class="flex flex-col items-center gap-1 border-x border-brand-black/5">
				<div class="w-4 h-4 text-brand-maroon/60">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
				</div>
				<span class="text-[9px] text-brand-black/40 uppercase font-bold tracking-widest">Baths</span>
				<span class="text-xs font-bold">{property.baths}</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<div class="w-4 h-4 text-brand-maroon/60">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
				</div>
				<span class="text-[9px] text-brand-black/40 uppercase font-bold tracking-widest">Sqft</span>
				<span class="text-xs font-bold">{property.sqft}</span>
			</div>
		</div>

		<a 
			href="/properties/{property.id}" 
			class="mt-6 w-full flex items-center justify-center gap-2 bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand-maroon transition-smooth"
		>
			View Details
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
	</div>
</div>
