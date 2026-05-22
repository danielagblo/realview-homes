<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let isSubmitting = $state(false);
</script>

<svelte:head>
	<title>Contact Us | RealView Homes</title>
	<meta name="description" content="Reach out to RealView Homes for premium architectural planning, luxury construction, and property consultations in Ghana." />
</svelte:head>

<div class="pt-24 lg:pt-32 pb-20 bg-brand-cream min-h-screen">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
			<div>
				<span class="text-brand-maroon font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
				<h1 class="text-5xl font-black text-brand-black mb-8">Contact Us</h1>
				{#if form?.success}
					<div class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl mb-8 font-bold">
						Message sent successfully! We will get back to you shortly.
					</div>
				{/if}
				{#if form?.message && !form?.success}
					<div class="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl mb-8 font-bold">
						{form.message}
					</div>
				{/if}
				<p class="text-brand-black/60 text-lg mb-12">
					Have questions about a property? Want to schedule a viewing? 
					Our team is here to help you.
				</p>

				<div class="space-y-8">
					<div class="flex items-start gap-6">
						<div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-maroon">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h4 class="font-bold text-brand-black">Our Office</h4>
							<p class="text-brand-black/60 text-sm">48 Ezra Rd. Community 17, Lashibi</p>
						</div>
					</div>

					<div class="flex items-start gap-6">
						<div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-maroon">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h4 class="font-bold text-brand-black">Email Us</h4>
							<p class="text-brand-black/60 text-sm">arealviewhomesgh@gmail.com</p>
						</div>
					</div>

					<div class="flex items-start gap-6">
						<div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-maroon">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h4 class="font-bold text-brand-black">Call Us</h4>
							<p class="text-brand-black/60 text-sm">0243314827 / 0261258246</p>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl">
				<form 
					method="POST" 
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							isSubmitting = false;
							update();
						};
					}} 
					class="space-y-6"
				>
					<div>
						<label for="name" class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
						<input 
							type="text" 
							id="name" 
							name="name"
							placeholder="John Doe"
							class="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-brand-maroon focus:ring-0 transition-smooth outline-none"
							required
						/>
					</div>
					<div>
						<label for="email" class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
						<input 
							type="email" 
							id="email" 
							name="email"
							placeholder="john@example.com"
							class="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-brand-maroon focus:ring-0 transition-smooth outline-none"
							required
						/>
					</div>
					<div>
						<label for="phone" class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Contact Number</label>
						<input 
							type="tel" 
							id="phone" 
							name="phone"
							placeholder="+233 24 000 0000"
							class="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-brand-maroon focus:ring-0 transition-smooth outline-none"
							required
						/>
					</div>
					<div>
						<label for="message" class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
						<textarea 
							id="message" 
							name="message"
							placeholder="Tell us what you're looking for..."
							rows="5"
							class="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-brand-maroon focus:ring-0 transition-smooth outline-none resize-none"
							required
						></textarea>
					</div>
					
					<button 
						type="submit" 
						class="w-full bg-brand-maroon text-white py-4 rounded-xl font-bold shadow-xl shadow-brand-maroon/20 hover:bg-brand-black transition-smooth disabled:opacity-50"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
		</div>
	</div>
</div>
