<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	let { data, form } = $props<{ data: PageData, form: ActionData }>();
	const property = $derived(data.property);
	const existingGallery = $derived(data.gallery);
	let isSubmitting = $state(false);

	let coverPreview = $state<string | null>(null);
	let newGalleryPreviews = $state<string[]>([]);

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
			newGalleryPreviews = [];
			Array.from(files).forEach(file => {
				const reader = new FileReader();
				reader.onload = (e) => {
					newGalleryPreviews.push(e.target?.result as string);
				};
				reader.readAsDataURL(file);
			});
		} else {
			newGalleryPreviews = [];
		}
	};
	let imageIdToDelete = $state<number | null>(null);
	let deleteFormElement = $state<HTMLFormElement | null>(null);

	const handleDeleteImage = (id: number) => {
		if (confirm('Delete this gallery photo?')) {
			imageIdToDelete = id;
			queueMicrotask(() => {
				deleteFormElement?.requestSubmit();
			});
		}
	};
</script>

<svelte:head>
	<title>Edit {property.title} | RealView Homes</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-10 pb-20">
	<div class="flex items-center gap-6">
		<a href="/admin/properties" class="w-12 h-12 flex items-center justify-center bg-white border border-brand-black/5 rounded-2xl shadow-sm hover:bg-brand-black hover:text-white transition-smooth" aria-label="Back to properties list">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
		</a>
		<div>
			<h2 class="text-4xl font-display font-black text-brand-black tracking-tight">Edit Portfolio Item</h2>
			<p class="text-brand-black/40 font-medium mt-1">Refine details for <span class="text-brand-maroon">{property.title}</span></p>
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
			action="?/update"
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
			<input type="hidden" name="currentImageUrl" value={property.imageUrl} />

			<div class="md:col-span-2">
				<label for="title" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Property Title</label>
				<input type="text" id="title" name="title" value={property.title} class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold text-brand-black" required />
			</div>

			<div class="md:col-span-2">
				<label for="description" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Detailed Description</label>
				<textarea id="description" name="description" rows="5" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-medium text-brand-black/70 resize-none" required>{property.description}</textarea>
			</div>

			<div>
				<label for="price" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Valuation (GHS)</label>
				<input type="number" id="price" name="price" value={property.price} class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-black text-brand-maroon" required />
			</div>

			<div>
				<label for="location" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Geographic Location</label>
				<input type="text" id="location" name="location" value={property.location} class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold text-brand-black" required />
			</div>

			<div class="grid grid-cols-3 md:col-span-1 gap-4">
				<div>
					<label for="beds" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Beds</label>
					<input type="number" id="beds" name="beds" value={property.beds} class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
				<div>
					<label for="baths" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Baths</label>
					<input type="number" id="baths" name="baths" value={property.baths} class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
				<div>
					<label for="sqft" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-2 text-center">Sq Ft</label>
					<input type="number" id="sqft" name="sqft" value={property.sqft} class="w-full px-4 py-4 rounded-xl bg-brand-cream/30 border border-brand-black/5 text-center font-bold" required />
				</div>
			</div>

			<div>
				<label for="type" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Listing Category</label>
				<select id="type" name="type" class="w-full px-6 py-5 rounded-2xl bg-brand-cream/30 border border-brand-black/5 focus:border-brand-maroon focus:bg-white outline-none transition-smooth font-bold appearance-none cursor-pointer">
					<option value="sale" selected={property.type === 'sale'}>Sale</option>
					<option value="rental" selected={property.type === 'rental'}>Rental</option>
				</select>
			</div>

			<div class="md:col-span-2">
				<label for="coverImage" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Update Cover Photo</label>
				<div class="relative group">
					<input 
						type="file" 
						id="coverImage" 
						name="imageFile" 
						accept="image/*"
						onchange={handleCoverChange}
						class="hidden" 
					/>
					<label 
						for="coverImage" 
						class="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-brand-black/5 rounded-4xl cursor-pointer hover:border-brand-maroon hover:bg-brand-cream/20 transition-smooth overflow-hidden shadow-inner bg-brand-cream/10"
					>
						{#if coverPreview}
							<img src={coverPreview} alt="New Preview" class="w-full h-full object-cover" />
						{:else}
							<div class="relative w-full h-full flex items-center justify-center group">
								<img src={property.imageUrl} alt="Current Cover" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-smooth" />
								<div class="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/10 group-hover:bg-brand-black/20 transition-smooth">
									<svg class="w-12 h-12 mb-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
									<p class="text-white font-black uppercase tracking-widest drop-shadow-md">Click to Replace Cover</p>
								</div>
							</div>
						{/if}
					</label>
				</div>
			</div>

			<div class="md:col-span-2 space-y-6">
				<div>
					<span class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-4">Current Gallery</span>
					{#if existingGallery.length > 0}
						<div class="grid grid-cols-3 md:grid-cols-6 gap-4">
							{#each existingGallery as img}
								<div class="aspect-square rounded-2xl overflow-hidden border border-brand-black/5 shadow-sm group relative">
									<img src={img.url} alt="Gallery item" class="w-full h-full object-cover" />
									<div class="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-smooth">
										<button 
											type="button" 
											onclick={() => handleDeleteImage(img.id)}
											class="bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-full shadow-lg transition-smooth transform hover:scale-110 cursor-pointer"
											title="Delete image"
										>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button>
									</div>
								</div>
							{/each}
						</div>
					{:else}
						<p class="text-xs font-medium text-brand-black/20 italic">No gallery images added yet.</p>
					{/if}
				</div>

				<div>
					<label for="galleryImages" class="block text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3 cursor-pointer">Add to Gallery</label>
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
							{#if newGalleryPreviews.length > 0}
								<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
									{#each newGalleryPreviews as preview}
										<div class="aspect-square rounded-2xl overflow-hidden border border-brand-black/5 shadow-sm">
											<img src={preview} alt="New Gallery Preview" class="w-full h-full object-cover" />
										</div>
									{/each}
									<div class="aspect-square rounded-2xl border-2 border-dashed border-brand-black/10 flex items-center justify-center text-brand-black/20 group-hover:text-brand-maroon transition-smooth">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
									</div>
								</div>
							{:else}
								<div class="flex flex-col items-center justify-center pt-5 pb-6">
									<svg class="w-8 h-8 mb-4 text-brand-black/20 group-hover:text-brand-maroon transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
									<p class="mb-2 text-sm text-brand-black/40 font-medium"><span class="font-bold text-brand-black">Add More Photos</span></p>
									<p class="text-[10px] text-brand-black/30 font-black uppercase tracking-widest italic">Select new files to expand the collection</p>
								</div>
							{/if}
						</label>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-4 bg-brand-cream/30 p-6 rounded-2xl border border-brand-black/5">
				<input type="checkbox" name="isFeatured" id="isFeatured" checked={property.isFeatured} class="w-6 h-6 rounded-lg border-brand-black/10 text-brand-maroon focus:ring-brand-maroon transition-smooth cursor-pointer" />
				<label for="isFeatured" class="text-sm font-black text-brand-black tracking-tight cursor-pointer">Highlight this property on homepage</label>
			</div>

			<div class="md:col-span-2 pt-10">
				<button 
					type="submit" 
					class="w-full bg-brand-black text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-brand-black/20 hover:bg-brand-maroon transition-smooth disabled:opacity-50"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Syncing Gallery Updates...' : 'Commit Portfolio Updates'}
				</button>
			</div>
		</form>
	</div>
</div>

<form 
	action="?/deleteImage" 
	method="POST" 
	use:enhance={() => {
		return async ({ update }) => {
			update();
		};
	}}
	bind:this={deleteFormElement}
	class="hidden"
>
	<input type="hidden" name="imageId" value={imageIdToDelete} />
</form>
