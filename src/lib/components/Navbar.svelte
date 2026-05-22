<script lang="ts">
	let { scrolled = false, isHome = true } = $props();
	let mobileMenuOpen = $state(false);
</script>

<svelte:body class:overflow-hidden={mobileMenuOpen} />

<nav class="fixed top-0 w-full z-50 transition-smooth 
	{isHome 
		? (scrolled ? 'glass py-3 shadow-sm text-brand-black' : 'bg-transparent py-5 text-white') 
		: 'glass py-3 shadow-sm text-brand-black'}">
	<div class="container mx-auto px-6 flex justify-between items-center">
		<a href="/" class="flex items-center gap-3 group z-50">
			<!-- Logo without white wrapper for a cleaner look -->
			<img src="/RVC.png" alt="RealView Homes Logo" class="h-9 w-auto" />
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center gap-8 font-medium text-sm">
			<a href="/" class="hover:text-brand-maroon transition-smooth">Home</a>
			<a href="/properties" class="hover:text-brand-maroon transition-smooth">Properties</a>
			<a href="/services" class="hover:text-brand-maroon transition-smooth">Services</a>
			<a href="/about" class="hover:text-brand-maroon transition-smooth">About Us</a>
			<a href="/contact" class="hover:text-brand-maroon transition-smooth">Contact</a>
		</div>

		<!-- Action Button / Hamburger Toggle -->
		<div class="flex items-center gap-3">
			<a href="/properties" class="hidden sm:inline-block bg-brand-maroon text-white px-5 py-2 rounded-full text-xs font-semibold shadow-md hover:bg-brand-black transition-smooth">
				Book a Viewing
			</a>

			<!-- Mobile Menu Button -->
			<button 
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				class="md:hidden p-2 rounded-xl transition-smooth focus:outline-none cursor-pointer z-50 
					{isHome && !scrolled && !mobileMenuOpen 
						? 'text-white hover:bg-white/10' 
						: 'text-brand-black hover:bg-brand-cream/50'}"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="w-6 h-6 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div 
		class="md:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 pt-32 animate-fade-in"
	>
		<div class="flex flex-col gap-8">
			<span class="text-brand-black/25 font-bold uppercase tracking-widest text-[10px] block border-b border-brand-black/5 pb-2">Navigation</span>
			<div class="flex flex-col gap-6">
				<a href="/" onclick={() => mobileMenuOpen = false} class="text-4xl font-black text-brand-black hover:text-brand-maroon transition-smooth">Home</a>
				<a href="/properties" onclick={() => mobileMenuOpen = false} class="text-4xl font-black text-brand-black hover:text-brand-maroon transition-smooth">Properties</a>
				<a href="/services" onclick={() => mobileMenuOpen = false} class="text-4xl font-black text-brand-black hover:text-brand-maroon transition-smooth">Services</a>
				<a href="/about" onclick={() => mobileMenuOpen = false} class="text-4xl font-black text-brand-black hover:text-brand-maroon transition-smooth">About Us</a>
				<a href="/contact" onclick={() => mobileMenuOpen = false} class="text-4xl font-black text-brand-black hover:text-brand-maroon transition-smooth">Contact</a>
			</div>
		</div>
		
		<div class="flex flex-col gap-6">
			<a href="/properties" onclick={() => mobileMenuOpen = false} class="w-full bg-brand-maroon text-white text-center py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-brand-maroon/20 hover:bg-brand-black transition-smooth">
				Book a Viewing
			</a>
			
			<div class="text-center text-[10px] text-brand-black/35 font-medium tracking-wide">
				© 2026 RealView Homes. GHIREB Certified Broker.
			</div>
		</div>
	</div>
{/if}
