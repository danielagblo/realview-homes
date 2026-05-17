<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const formatDate = (date: Date | string | null) => {
		if (!date) return 'N/A';
		return new Date(date).toLocaleDateString('en-GH', {
			day: 'numeric',
			month: 'short'
		});
	};
</script>

<svelte:head>
	<title>Admin Dashboard | RealView Homes</title>
</svelte:head>

<div class="space-y-12 pb-20">
	<!-- Welcome Header -->
	<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
		<div>
			<h2 class="text-4xl font-display font-black text-brand-black tracking-tight italic">Excellence Hub</h2>
			<p class="text-brand-black/40 font-medium mt-1">Operational overview for RealView Homes Portfolio.</p>
		</div>
		<div class="flex items-center gap-3">
			<a href="/admin/properties/new" class="bg-brand-black text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-brand-maroon transition-smooth">New Listing</a>
			<div class="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-black/5 flex items-center justify-center text-brand-maroon font-black shadow-sm">
				A
			</div>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each data.stats as stat}
			<div class="bg-white p-6 rounded-4xl border border-brand-black/5 shadow-sm group hover:shadow-xl hover:shadow-brand-black/5 transition-smooth">
				<div class="flex justify-between items-start mb-4">
					<div class="w-12 h-12 {stat.color} text-white rounded-2xl flex items-center justify-center text-xl shadow-lg">
						{stat.icon}
					</div>
					<div class="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+12%</div>
				</div>
				<div>
					<p class="text-[10px] font-black text-brand-black/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
					<p class="text-3xl font-black text-brand-black">{stat.value}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<!-- Recent Activity Table -->
		<div class="lg:col-span-2 bg-white rounded-4xl shadow-xl shadow-brand-black/5 border border-brand-black/5 overflow-hidden">
			<div class="px-8 py-6 border-b border-brand-black/5 flex justify-between items-center bg-brand-cream/30">
				<h3 class="font-black text-brand-black text-xs uppercase tracking-widest">Recent Engagements</h3>
				<a href="/admin/bookings" class="text-[10px] font-black text-brand-maroon uppercase tracking-widest hover:tracking-[0.2em] transition-all">View All</a>
			</div>
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<tbody class="divide-y divide-brand-black/5">
						{#each data.recentBookings as booking}
							<tr class="group hover:bg-brand-cream/10 transition-smooth">
								<td class="px-8 py-5">
									<div class="flex items-center gap-4">
										<div class="w-10 h-10 rounded-xl bg-brand-maroon/5 flex items-center justify-center text-brand-maroon font-black text-xs">
											{booking.name.charAt(0).toUpperCase()}
										</div>
										<div>
											<p class="font-bold text-brand-black text-sm">{booking.name}</p>
											<p class="text-[10px] text-brand-black/30 font-medium tracking-tight">{booking.email}</p>
										</div>
									</div>
								</td>
								<td class="px-8 py-5">
									<p class="text-[10px] font-bold text-brand-black/40 uppercase tracking-tighter truncate max-w-[150px]">{booking.propertyTitle || 'Consultation'}</p>
								</td>
								<td class="px-8 py-5">
									<p class="text-[10px] font-black text-brand-black/30">{formatDate(booking.createdAt)}</p>
								</td>
								<td class="px-8 py-5">
									<span class="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border
										{booking.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
										{booking.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
										{booking.status === 'cancelled' ? 'bg-rose-50 text-rose-600 border-rose-100' : ''}
									">
										{booking.status}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<!-- Quick Actions / Performance -->
		<div class="space-y-6">
			<div class="bg-brand-black p-8 rounded-4xl text-white shadow-2xl shadow-brand-black/20">
				<h3 class="font-black text-xs uppercase tracking-widest mb-6 text-white/50">Performance Target</h3>
				<div class="space-y-6">
					<div>
						<div class="flex justify-between text-[10px] font-black uppercase mb-2">
							<span>Monthly Goal</span>
							<span>85%</span>
						</div>
						<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
							<div class="h-full bg-brand-maroon w-[85%] rounded-full shadow-[0_0_10px_rgba(182,14,35,0.5)]"></div>
						</div>
					</div>
					<p class="text-xs text-white/40 leading-relaxed font-medium italic">"Architecture should speak of its time and place, but yearn for timelessness."</p>
				</div>
			</div>

			<div class="bg-brand-cream/50 p-8 rounded-4xl border border-brand-black/5">
				<h3 class="font-black text-xs uppercase tracking-widest mb-6 text-brand-black/30">System Status</h3>
				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
						<span class="text-xs font-bold text-brand-black/60">S3 Cloud Storage Active</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
						<span class="text-xs font-bold text-brand-black/60">SMS Gateway Ready</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
						<span class="text-xs font-bold text-brand-black/60">Database Synchronized</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
