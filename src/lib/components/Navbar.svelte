<script lang="ts">
	let { scrolled = false, isHome = true } = $props();
</script>

<nav class="fixed top-0 w-full z-50 transition-smooth 
	{isHome 
		? (scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5') 
		: 'glass py-3 shadow-sm'}">
	<div class="container mx-auto px-6 flex justify-between items-center">
		<a href="/" class="flex items-center gap-3 group">
			<img src="/RVC.png" alt="RealView Homes Logo" class="h-12 w-auto group-hover:scale-105 transition-smooth" />
		</a>

		<div class="hidden md:flex items-center gap-8 font-medium text-sm">
			<a href="/" class="hover:text-brand-maroon transition-smooth">Home</a>
			<a href="/properties" class="hover:text-brand-maroon transition-smooth">Properties</a>
			<a href="/services" class="hover:text-brand-maroon transition-smooth">Services</a>
			<a href="/about" class="hover:text-brand-maroon transition-smooth">About Us</a>
			<a href="/contact" class="hover:text-brand-maroon transition-smooth">Contact</a>
		</div>

		<div class="flex items-center gap-4">
			<a href="/properties" class="bg-brand-maroon text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-xl shadow-brand-maroon/20 hover:bg-brand-black transition-smooth">
				Book a Viewing
			</a>
		</div>
	</div>
</nav>
