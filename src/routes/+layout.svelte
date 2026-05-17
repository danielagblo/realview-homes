<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import './layout.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let scrolled = $state(false);
	let isHome = $derived(page.url.pathname === '/');
	let isAdmin = $derived(page.url.pathname.startsWith('/admin'));

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head><link rel="icon" href="/RVC.png" /></svelte:head>

{#if !isAdmin}
	<Navbar {scrolled} {isHome} />
{/if}

<main>
	{@render children()}
</main>

{#if !isAdmin}
	<WhatsAppButton />
	<Footer />
{/if}
