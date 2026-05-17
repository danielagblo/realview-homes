<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const stats = $derived([
		{ label: 'Total Inquiries', value: data.bookings.length, icon: '📩' },
		{ label: 'Pending', value: data.bookings.filter(b => b.status === 'pending').length, icon: '⏳' },
		{ label: 'Confirmed', value: data.bookings.filter(b => b.status === 'confirmed').length, icon: '📅' }
	]);

	const formatDate = (date: Date | string | null) => {
		if (!date) return 'N/A';
		return new Date(date).toLocaleDateString('en-GH', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>Client Consultations | RealView Homes</title>
</svelte:head>

<div class="space-y-10 pb-20">
	<!-- Header -->
	<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
		<div>
			<h2 class="text-4xl font-display font-black text-brand-black tracking-tight">Viewing Requests</h2>
			<p class="text-brand-black/40 font-medium mt-1">Manage client engagement and architectural consultations.</p>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each stats as stat}
			<div class="bg-white p-6 rounded-4xl border border-brand-black/5 shadow-sm flex items-center gap-6">
				<div class="text-3xl bg-brand-cream/50 w-16 h-16 rounded-2xl flex items-center justify-center">
					{stat.icon}
				</div>
				<div>
					<p class="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/30 mb-1">{stat.label}</p>
					<p class="text-2xl font-black text-brand-black">{stat.value}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Bookings Table -->
	<div class="bg-white rounded-4xl shadow-xl shadow-brand-black/5 border border-brand-black/5 overflow-hidden">
		<div class="overflow-x-auto">
			<table class="w-full text-left">
				<thead>
					<tr class="bg-brand-cream/30 border-b border-brand-black/5">
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Client Detail</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Property Interest</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Received Date</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest">Status</th>
						<th class="px-8 py-6 text-[10px] font-black text-brand-black/40 uppercase tracking-widest text-right">Actions</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-brand-black/5">
					{#each data.bookings as booking}
						<tr class="group hover:bg-brand-cream/10 transition-smooth">
							<td class="px-8 py-6">
								<div class="flex items-center gap-4">
									<div class="w-10 h-10 rounded-xl bg-brand-maroon/5 flex items-center justify-center text-brand-maroon font-black text-xs">
										{booking.name.charAt(0).toUpperCase()}
									</div>
									<div>
										<p class="font-bold text-brand-black leading-tight mb-0.5">{booking.name}</p>
										<p class="text-[10px] font-medium text-brand-black/30 tracking-tight">{booking.email}</p>
									</div>
								</div>
							</td>
							<td class="px-8 py-6">
								<p class="text-sm font-bold text-brand-black/60">{booking.propertyTitle || 'General Architecture'}</p>
								<p class="text-[10px] text-brand-black/30 font-medium">{booking.phone}</p>
							</td>
							<td class="px-8 py-6">
								<p class="text-sm font-medium text-brand-black/60">{formatDate(booking.createdAt)}</p>
							</td>
							<td class="px-8 py-6">
								<form method="POST" action="?/updateStatus" use:enhance>
									<input type="hidden" name="id" value={booking.id} />
									<select 
										name="status"
										onchange={(e) => e.currentTarget.form?.requestSubmit()}
										class="bg-transparent border-none text-[9px] font-black uppercase tracking-widest focus:ring-0 cursor-pointer rounded-full px-4 py-1.5 border
											{booking.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
											{booking.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
											{booking.status === 'cancelled' ? 'bg-rose-50 text-rose-600 border-rose-100' : ''}"
										value={booking.status}
									>
										<option value="pending">Pending</option>
										<option value="confirmed">Confirmed</option>
										<option value="cancelled">Cancelled</option>
									</select>
								</form>
							</td>
							<td class="px-8 py-6">
								<div class="flex justify-end items-center gap-2">
									<a 
										href="mailto:{booking.email}" 
										class="w-10 h-10 rounded-xl flex items-center justify-center text-brand-black/30 hover:bg-brand-black hover:text-white transition-smooth"
										aria-label="Contact client"
									>
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</a>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
