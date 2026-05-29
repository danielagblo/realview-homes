<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form } = $props<{ form: ActionData }>();
	let isSubmitting = $state(false);
	
	let coverPreview = $state<string | null>(null);
	let galleryPreviews = $state<string[]>([]);

	const handleCoverChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				coverPreview = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		} else {
			coverPreview = null;
		}
	};

	const handleGalleryChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const files = target.files;
		if (files) {
			galleryPreviews = [];
			Array.from(files).forEach(file => {
				const reader = new FileReader();
				reader.onload = (e) => {
					galleryPreviews.push(e.target?.result as string);
				};
				reader.readAsDataURL(file);
			});
		} else {
			galleryPreviews = [];
		}
	};
</script>

<svelte:head>
	<title>Add New Property | RealView Homes</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-10 pb-20">
	<div class="flex items-center gap-6">
		<a href="/admin/properties" class="w-12 h-12 flex items-center justify-center bg-white border border-brand-black/5 rounded-2xl shadow-sm hover:bg-brand-black hover:text-white transition-smooth" aria-label="Back to properties list">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
		</a>
		<div>
			<h2 class="text-4xl font-display font-black text-brand-black tracking-tight">New Inventory Item</h2>
			<p class="text-brand-black/40 font-medium mt-1">Add a new premium property with a full image gallery.</p>
		</div>
	</div>

	<div class="bg-white rounded-4xl shadow-2xl shadow-brand-black/5 border border-brand-black/5 p-8 md:p-12">
		{#if form?.message}
			<div class="mb-10 p-5 bg-rose-50 text-rose-600 rounded-3xl font-bold text-center border border-rose-100 animate-fade-in">
				{form.message}
			</div>
		{/if}

		<form 
			method="POST" 
			enctype="multipart/form-data"
			use:enhance={() => {
				isSubmitting = true;
				return async ({ update }) => {
					isSubmitting = false;
					update();
				};
			}}
			class="grid grid-cols-1 md:grid-cols-2 gap-10"
		>
			<div class="md:col-span-2">
				<label for="title" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Property Title</label>
				<input type="text" id="title" name="title" placeholder="Modern 4-Bedroom Villa" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold text-brand-black" required />
			</div>

			<div class="md:col-span-2">
				<label for="description" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Detailed Description</label>
				<textarea id="description" name="description" rows="5" placeholder="Detailed property description..." class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-medium text-brand-black/70 resize-none" required></textarea>
			</div>

			<div class="grid grid-cols-3 gap-4">
				<div class="col-span-1">
					<label for="currency" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Currency</label>
					<select id="currency" name="currency" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold appearance-none cursor-pointer">
						<option value="GHS" selected>GHS (GH¢)</option>
						<option value="USD">USD ($)</option>
					</select>
				</div>
				<div class="col-span-2">
					<label for="price" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Valuation</label>
					<input type="number" id="price" name="price" placeholder="1500000" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-black text-brand-maroon" required />
				</div>
			</div>

			<div>
				<label for="location" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Geographic Location</label>
				<input type="text" id="location" name="location" placeholder="East Legon, Accra" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold text-brand-black" required />
			</div>

			<div class="grid grid-cols-3 md:col-span-1 gap-4">
				<div>
					<label for="beds" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Beds</label>
					<input type="number" id="beds" name="beds" placeholder="4" class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
				<div>
					<label for="baths" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Baths</label>
					<input type="number" id="baths" name="baths" placeholder="3" class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
				<div>
					<label for="sqft" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Sq Ft</label>
					<input type="number" id="sqft" name="sqft" placeholder="3500" class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
			</div>

			<div>
				<label for="type" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Listing Category</label>
				<select id="type" name="type" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold appearance-none cursor-pointer">
					<option value="sale">Sale</option>
					<option value="rental">Rental</option>
				</select>
			</div>

			<div class="md:col-span-2">
				<label for="coverImage" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Main Cover Image</label>
				<div class="relative group">
					<input 
						type="file" 
						id="coverImage" 
						name="imageFile" 
						accept="image/*"
						onchange={handleCoverChange}
						class="hidden" 
						required 
					/>
					<label 
						for="coverImage" 
						class="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-brand-black/5 rounded-4xl cursor-pointer hover:border-brand-maroon hover:bg-brand-cream/20 transition-smooth overflow-hidden shadow-inner bg-brand-cream/10"
					>
						{#if coverPreview}
							<img src={coverPreview} alt="Cover Preview" class="w-full h-full object-cover" />
						{:else}
							<div class="flex flex-col items-center justify-center pt-5 pb-6">
								<svg class="w-12 h-12 mb-4 text-brand-black/20 group-hover:text-brand-maroon transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
								<p class="mb-2 text-sm text-brand-black/40 font-medium"><span class="font-bold text-brand-black">Upload Cover Photo</span></p>
								<p class="text-[10px] text-brand-black/30 font-black uppercase tracking-widest italic">This will be the primary image</p>
							</div>
						{/if}
					</label>
				</div>
			</div>

			<div class="md:col-span-2 space-y-4">
				<label for="galleryImages" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3 cursor-pointer">Gallery Collection</label>
				<div class="relative group">
					<input 
						type="file" 
						id="galleryImages" 
						name="galleryFiles" 
						accept="image/*"
						multiple
						onchange={handleGalleryChange}
						class="hidden" 
					/>
					<label 
						for="galleryImages" 
						class="flex flex-col items-center justify-center w-full min-h-48 border-2 border-dashed border-brand-black/5 rounded-4xl cursor-pointer hover:border-brand-maroon hover:bg-brand-cream/20 transition-smooth p-6 shadow-inner bg-brand-cream/10"
					>
						{#if galleryPreviews.length > 0}
							<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
								{#each galleryPreviews as preview}
									<div class="aspect-square rounded-2xl overflow-hidden border border-brand-black/5 shadow-sm">
										<img src={preview} alt="Gallery Preview" class="w-full h-full object-cover" />
									</div>
								{/each}
								<div class="aspect-square rounded-2xl border-2 border-dashed border-brand-black/10 flex items-center justify-center text-brand-black/20 group-hover:text-brand-maroon transition-smooth">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
								</div>
							</div>
						{:else}
							<div class="flex flex-col items-center justify-center pt-5 pb-6">
								<svg class="w-8 h-8 mb-4 text-brand-black/20 group-hover:text-brand-maroon transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
								<p class="mb-2 text-sm text-brand-black/40 font-medium"><span class="font-bold text-brand-black">Add Gallery Images</span></p>
								<p class="text-[10px] text-brand-black/30 font-black uppercase tracking-widest italic">Select multiple photos for the slide-show</p>
							</div>
						{/if}
					</label>
				</div>
			</div>

			<div class="flex items-center gap-4 bg-brand-cream/30 p-6 rounded-2xl border border-brand-black/5">
				<input type="checkbox" name="isFeatured" id="isFeatured" class="w-6 h-6 rounded-lg border-brand-black/10 text-brand-maroon focus:ring-brand-maroon transition-smooth cursor-pointer" />
				<label for="isFeatured" class="text-sm font-black text-brand-black tracking-tight cursor-pointer">Highlight this property on homepage</label>
			</div>

			<div class="md:col-span-2 pt-10">
				<button 
					type="submit" 
					class="w-full bg-brand-black text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-brand-black/20 hover:bg-brand-maroon transition-smooth disabled:opacity-50"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Syncing Gallery with Cloud...' : 'Publish Portfolio Item'}
				</button>
			</div>
		</form>
	</div>
</div>
