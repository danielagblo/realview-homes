<script lang="ts">
	import { page } from '$app/stores';

	let { scrolled = false, isHome = true } = $props();
	let mobileMenuOpen = $state(false);
</script>

<svelte:body class:overflow-hidden={mobileMenuOpen} />

<nav
	class="transition-smooth fixed top-0 z-50 w-full
	{isHome
		? scrolled
			? 'glass py-3 text-brand-black shadow-sm'
			: 'bg-transparent py-5 text-white'
		: 'glass py-3 text-brand-black shadow-sm'}"
>
	<div class="container mx-auto flex items-center justify-between px-6">
		<a href="/" class="group z-50 flex items-center gap-3">
			<img src="/RVC.png" alt="RealView Homes Logo" class="h-9 w-auto" />
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center gap-8 text-sm font-medium md:flex">
			<a
				href="/"
				class="transition-smooth group relative {$page.url.pathname === '/'
					? 'text-brand-maroon'
					: 'hover:text-brand-maroon'}"
			>
				Home
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-maroon transition-transform duration-300 {$page
						.url.pathname === '/'
						? 'scale-x-100'
						: 'scale-x-0 group-hover:scale-x-100'}"
				></span>
			</a>
			<a
				href="/about"
				class="transition-smooth group relative {$page.url.pathname === '/about'
					? 'text-brand-maroon'
					: 'hover:text-brand-maroon'}"
			>
				About Us
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-maroon transition-transform duration-300 {$page
						.url.pathname === '/about'
						? 'scale-x-100'
						: 'scale-x-0 group-hover:scale-x-100'}"
				></span>
			</a>
			<a
				href="/properties"
				class="transition-smooth group relative {$page.url.pathname === '/properties'
					? 'text-brand-maroon'
					: 'hover:text-brand-maroon'}"
			>
				Properties
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-maroon transition-transform duration-300 {$page
						.url.pathname === '/properties'
						? 'scale-x-100'
						: 'scale-x-0 group-hover:scale-x-100'}"
				></span>
			</a>
			<a
				href="/services"
				class="transition-smooth group relative {$page.url.pathname === '/services'
					? 'text-brand-maroon'
					: 'hover:text-brand-maroon'}"
			>
				Services
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-maroon transition-transform duration-300 {$page
						.url.pathname === '/services'
						? 'scale-x-100'
						: 'scale-x-0 group-hover:scale-x-100'}"
				></span>
			</a>
			<a
				href="/contact"
				class="transition-smooth group relative {$page.url.pathname === '/contact'
					? 'text-brand-maroon'
					: 'hover:text-brand-maroon'}"
			>
				Contact
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-maroon transition-transform duration-300 {$page
						.url.pathname === '/contact'
						? 'scale-x-100'
						: 'scale-x-0 group-hover:scale-x-100'}"
				></span>
			</a>
		</div>

		<!-- Action Button / Hamburger Toggle -->
		<div class="flex items-center gap-3">
			<a
				href="/properties"
				class="transition-smooth hidden rounded-full bg-brand-maroon px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-brand-black sm:inline-block"
			>
				Book a Viewing
			</a>

			<!-- Mobile Menu Button -->
			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="transition-smooth z-50 cursor-pointer rounded-xl p-2 focus:outline-none md:hidden
					{isHome && !scrolled && !mobileMenuOpen
					? 'text-white hover:bg-white/10'
					: 'text-brand-black hover:bg-brand-cream/50'}"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg
						class="animate-scale-in h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div
		class="animate-fade-in fixed inset-0 z-40 flex flex-col justify-between bg-white/98 p-8 pt-32 backdrop-blur-2xl md:hidden"
	>
		<div class="flex flex-col gap-8">
			<span
				class="block border-b border-brand-black/5 pb-2 text-[10px] font-bold tracking-widest text-brand-black/25 uppercase"
				>Navigation</span
			>
			<div class="flex flex-col gap-6">
				<a
					href="/"
					onclick={() => (mobileMenuOpen = false)}
					class="transition-smooth text-4xl font-black {$page.url.pathname === '/'
						? 'text-brand-maroon'
						: 'text-brand-black hover:text-brand-maroon'}">Home</a
				>
				<a
					href="/about"
					onclick={() => (mobileMenuOpen = false)}
					class="transition-smooth text-4xl font-black {$page.url.pathname === '/about'
						? 'text-brand-maroon'
						: 'text-brand-black hover:text-brand-maroon'}">About Us</a
				>
				<a
					href="/properties"
					onclick={() => (mobileMenuOpen = false)}
					class="transition-smooth text-4xl font-black {$page.url.pathname === '/properties'
						? 'text-brand-maroon'
						: 'text-brand-black hover:text-brand-maroon'}">Properties</a
				>
				<a
					href="/services"
					onclick={() => (mobileMenuOpen = false)}
					class="transition-smooth text-4xl font-black {$page.url.pathname === '/services'
						? 'text-brand-maroon'
						: 'text-brand-black hover:text-brand-maroon'}">Services</a
				>
				<a
					href="/contact"
					onclick={() => (mobileMenuOpen = false)}
					class="transition-smooth text-4xl font-black {$page.url.pathname === '/contact'
						? 'text-brand-maroon'
						: 'text-brand-black hover:text-brand-maroon'}">Contact</a
				>
			</div>
		</div>

		<div class="flex flex-col gap-6">
			<a
				href="/properties"
				onclick={() => (mobileMenuOpen = false)}
				class="transition-smooth w-full rounded-full bg-brand-maroon py-4 text-center text-xs font-bold tracking-widest text-white uppercase shadow-xl shadow-brand-maroon/20 hover:bg-brand-black"
			>
				Book a Viewing
			</a>

			<div class="text-center text-[10px] font-medium tracking-wide text-brand-black/35">
				© 2026 RealView Homes. GHIREB Certified Broker.
			</div>
		</div>
	</div>
{/if}
