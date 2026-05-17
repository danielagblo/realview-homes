<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let isLoading = $state(false);
</script>

<svelte:head>
	<title>Admin Portal Login | RealView Homes</title>
</svelte:head>

<div class="min-h-screen bg-brand-black flex relative overflow-hidden font-sans">
	<!-- Decorative Background Elements -->
	<div class="absolute top-0 right-0 w-1/2 h-full bg-brand-maroon/5 -skew-x-12 translate-x-1/4"></div>
	<div class="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-maroon/10 rounded-full blur-3xl"></div>

	<div class="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
		<div class="w-full max-w-xl">
			<!-- Logo Section -->
			<div class="flex flex-col items-center mb-12 animate-fade-in">
				<div class="w-20 h-20 bg-brand-maroon flex items-center justify-center rounded-[2.5rem] shadow-2xl shadow-brand-maroon/40 mb-8 group hover:scale-105 transition-smooth">
					<img src="/RVC.png" alt="Logo" class="w-10 h-10 object-contain brightness-0 invert" />
				</div>
				<h1 class="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-2">Architectural Access</h1>
				<p class="text-4xl font-display font-black text-white tracking-tighter uppercase italic">Secure Node Login</p>
			</div>

			<!-- Login Card -->
			<div class="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 shadow-2xl shadow-black/50 animate-slide-up">
				{#if form?.message}
					<div class="mb-8 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-widest rounded-2xl animate-fade-in text-center">
						{form.message}
					</div>
				{/if}

				<form 
					method="POST" 
					use:enhance={() => {
						isLoading = true;
						return async ({ update }) => {
							isLoading = false;
							update();
						};
					}} 
					class="space-y-8"
				>
					<div class="space-y-6">
						<div>
							<label for="email" class="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">System Identity</label>
							<div class="relative group">
								<input 
									type="email" 
									id="email" 
									name="email"
									placeholder="admin@realview.com"
									class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white font-bold outline-none focus:border-brand-maroon focus:bg-white/10 transition-smooth"
									required
								/>
								<div class="absolute inset-0 rounded-2xl border border-brand-maroon/0 group-focus-within:border-brand-maroon/50 transition-smooth pointer-events-none"></div>
							</div>
						</div>
						
						<div>
							<label for="password" class="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">Security Key</label>
							<div class="relative group">
								<input 
									type="password" 
									id="password" 
									name="password"
									placeholder="••••••••••••"
									class="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white font-bold outline-none focus:border-brand-maroon focus:bg-white/10 transition-smooth"
									required
								/>
								<div class="absolute inset-0 rounded-2xl border border-brand-maroon/0 group-focus-within:border-brand-maroon/50 transition-smooth pointer-events-none"></div>
							</div>
						</div>
					</div>
					
					<button 
						type="submit" 
						class="w-full bg-brand-maroon text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-maroon/20 hover:bg-white hover:text-brand-black hover:scale-[1.02] transition-smooth disabled:opacity-50 mt-10"
						disabled={isLoading}
					>
						{isLoading ? 'Decrypting Access...' : 'Authorize Entry'}
					</button>
				</form>
			</div>

			<div class="flex justify-between items-center mt-12 px-8">
				<a href="/" class="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-brand-maroon transition-smooth flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					Back to Site
				</a>
				<span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/10 italic">Ver 2.4.0-Stable</span>
			</div>
		</div>
	</div>

	<!-- Side Detail (Desktop only) -->
	<div class="hidden lg:flex w-1/3 bg-brand-maroon items-center justify-center p-20 relative overflow-hidden">
		<div class="absolute inset-0 bg-black/10"></div>
		<div class="relative z-10 text-center">
			<h2 class="text-7xl font-display font-black text-white/20 uppercase leading-none mb-4 select-none">REAL<br/>VIEW</h2>
			<div class="h-1 w-20 bg-white/30 mx-auto"></div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #121212;
	}
</style>
