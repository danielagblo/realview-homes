<script lang="ts">
	import { page } from '$app/state';
	let { children } = $props();

	const isPath = (path: string) => {
		if (path === '/admin') return page.url.pathname === '/admin';
		return page.url.pathname.startsWith(path);
	};
</script>

<div class="min-h-screen bg-brand-cream/20 flex font-sans selection:bg-brand-maroon/10 selection:text-brand-maroon">
	<!-- Sidebar -->
	<aside class="w-72 bg-brand-black text-white p-8 hidden lg:flex flex-col sticky top-0 h-screen shadow-2xl shadow-brand-black/20 z-50 overflow-y-auto">
		<div class="flex items-center gap-4 mb-16">
			<div class="w-10 h-10 bg-brand-maroon flex items-center justify-center rounded-2xl shadow-lg shadow-brand-maroon/20">
				<img src="/RVC.png" alt="Logo" class="w-6 h-6 object-contain brightness-0 invert" />
			</div>
			<div>
				<span class="block text-sm font-black tracking-[0.3em] uppercase opacity-40">Architectural</span>
				<span class="block text-lg font-display font-black tracking-tight -mt-1 uppercase">Command</span>
			</div>
		</div>

		<nav class="flex-1 space-y-4">
			<a 
				href="/admin" 
				class="flex items-center gap-4 px-5 py-4 rounded-2xl transition-smooth group
					{isPath('/admin') && page.url.pathname === '/admin' ? 'bg-white/10 text-white shadow-inner' : 'text-white/40 hover:text-white hover:bg-white/5'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 {isPath('/admin') && page.url.pathname === '/admin' ? 'text-brand-maroon' : 'text-inherit group-hover:text-brand-maroon transition-smooth'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
				<span class="font-bold text-sm uppercase tracking-widest">Overview</span>
			</a>
			<a 
				href="/admin/properties" 
				class="flex items-center gap-4 px-5 py-4 rounded-2xl transition-smooth group
					{isPath('/admin/properties') ? 'bg-white/10 text-white shadow-inner' : 'text-white/40 hover:text-white hover:bg-white/5'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 {isPath('/admin/properties') ? 'text-brand-maroon' : 'text-inherit group-hover:text-brand-maroon transition-smooth'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
				</svg>
				<span class="font-bold text-sm uppercase tracking-widest">Inventory</span>
			</a>
			<a 
				href="/admin/bookings" 
				class="flex items-center gap-4 px-5 py-4 rounded-2xl transition-smooth group
					{isPath('/admin/bookings') ? 'bg-white/10 text-white shadow-inner' : 'text-white/40 hover:text-white hover:bg-white/5'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 {isPath('/admin/bookings') ? 'text-brand-maroon' : 'text-inherit group-hover:text-brand-maroon transition-smooth'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
				</svg>
				<span class="font-bold text-sm uppercase tracking-widest">Bookings</span>
			</a>
		</nav>

		<div class="mt-auto pt-8 border-t border-white/5 space-y-2">
			<a href="/" class="flex items-center gap-4 px-5 py-4 rounded-2xl text-white/30 hover:text-white hover:bg-white/5 transition-smooth group">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-smooth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				<span class="font-bold text-[10px] uppercase tracking-[0.2em]">Exit to Site</span>
			</a>
			<a href="/admin/logout" class="flex items-center gap-4 px-5 py-4 rounded-2xl text-rose-500/40 hover:text-rose-500 hover:bg-rose-500/5 transition-smooth group">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-smooth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
				</svg>
				<span class="font-bold text-[10px] uppercase tracking-[0.2em]">Sign Out</span>
			</a>
		</div>
	</aside>

	<!-- Main Content -->
	<div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
		<header class="h-24 bg-white/80 backdrop-blur-xl border-b border-brand-black/5 flex items-center justify-between px-10 sticky top-0 z-40">
			<div class="flex items-center gap-4 lg:hidden">
				<img src="/RVC.png" alt="Logo" class="h-8 w-auto" />
				<span class="font-display font-black tracking-tight text-brand-black">ADMIN</span>
			</div>
			<div class="hidden lg:block">
				<h1 class="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/20">System Node</h1>
				<p class="font-bold text-brand-black tracking-tight uppercase">RealView Primary Hub</p>
			</div>
			<div class="flex items-center gap-6">
				<div class="text-right hidden sm:block">
					<p class="text-xs font-black text-brand-black uppercase tracking-widest">Administrator</p>
					<p class="text-[10px] text-brand-black/30 font-bold uppercase tracking-tighter italic">Auth Level 10</p>
				</div>
				<div class="w-12 h-12 rounded-2xl bg-brand-maroon/10 flex items-center justify-center text-brand-maroon font-black shadow-inner border border-brand-maroon/20">
					A
				</div>
			</div>
		</header>

		<main class="flex-1 p-8 lg:p-12">
			{@render children()}
		</main>
	</div>
</div>
