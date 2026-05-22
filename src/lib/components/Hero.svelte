<script lang="ts">
	let { locations = [], priceBuckets = [] } = $props<{ 
		locations?: string[], 
		priceBuckets?: { label: string, value: number }[] 
	}>();
</script>

<section class="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">
	<!-- Background Immersive Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
			alt="Luxury Real Estate" 
			class="w-full h-full object-cover scale-110 animate-subtle-zoom opacity-60"
		/>
		<div class="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/20 to-transparent"></div>
	</div>

	<!-- Main Content: Center Aligned -->
	<div class="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
		<div class="inline-flex items-center gap-4 mb-4 md:mb-6 animate-fade-in">
			<span class="h-px w-8 md:w-12 bg-brand-maroon"></span>
			<span class="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-maroon">The Future of Living</span>
			<span class="h-px w-8 md:w-12 bg-brand-maroon"></span>
		</div>

		<h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-none mb-6 md:mb-10 animate-title-reveal">
			ELEGANCE <br/>
			<span class="italic text-brand-maroon font-serif lowercase tracking-normal">redefined.</span>
		</h1>

		<p class="text-base md:text-lg text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style="animation-delay: 0.5s;">
			Discover the most exclusive properties in Ghana. <br/>
			Tailored excellence for those who demand the extraordinary.
		</p>

		<!-- Sleek CTA Buttons -->
		<div class="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style="animation-delay: 0.8s;">
			<a href="/properties" class="bg-brand-maroon text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-brand-black transition-smooth shadow-xl shadow-brand-maroon/20">
				Explore Properties
			</a>
			<a href="/contact" class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-brand-maroon hover:border-brand-maroon transition-smooth">
				Contact an Expert
			</a>
		</div>
	</div>

	<!-- Bottom Corner Accents (Moved to corners to avoid overlap) -->
	<div class="absolute bottom-8 left-12 hidden lg:block animate-fade-in z-20" style="animation-delay: 1.2s;">
		<span class="text-white/20 font-bold text-[8px] uppercase tracking-[0.4em]">Premium Locations • Secure Investments</span>
	</div>
	<div class="absolute bottom-8 right-12 hidden lg:block animate-fade-in z-20" style="animation-delay: 1.2s;">
		<div class="flex gap-8 text-white/20 font-bold text-[8px] uppercase tracking-[0.4em]">
			<span>Sales</span>
			<span>Rentals</span>
			<span>Developments</span>
		</div>
	</div>
</section>

<style>
	@keyframes subtle-zoom {
		from { transform: scale(1.1); }
		to { transform: scale(1.2); }
	}
	@keyframes title-reveal {
		from { opacity: 0; transform: translateY(60px) skewY(5deg); }
		to { opacity: 1; transform: translateY(0) skewY(0); }
	}
	@keyframes slide-up {
		from { opacity: 0; transform: translateY(40px); }
		to { opacity: 1; transform: translateY(0); }
	}
	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	.animate-subtle-zoom { animation: subtle-zoom 30s ease-out infinite alternate; }
	.animate-title-reveal { animation: title-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
	.animate-slide-up { animation: slide-up 1s ease-out forwards; opacity: 0; }
	.animate-fade-in { animation: fade-in 1.5s ease-out forwards; opacity: 0; }

	/* Hide default arrow for all browsers */
	select {
		appearance: none !important;
		-webkit-appearance: none !important;
		-moz-appearance: none !important;
		background-image: none !important;
		border: none !important;
		box-shadow: none !important;
	}
	select::-ms-expand {
		display: none !important;
	}
</style>
