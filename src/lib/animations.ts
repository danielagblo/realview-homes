/**
 * animations.ts
 * Shared GSAP + ScrollTrigger helpers used across all pages.
 * Import only in onMount / browser guards to avoid SSR issues.
 */

import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initGSAP() {
	if (!browser) return;
	gsap.registerPlugin(ScrollTrigger);
}

/** Fade up + in on scroll enter */
export function fadeUp(
	el: Element | Element[] | NodeListOf<Element> | string,
	opts: { delay?: number; duration?: number; y?: number; stagger?: number } = {}
) {
	const { delay = 0, duration = 0.85, y = 40, stagger = 0 } = opts;
	return gsap.fromTo(
		el,
		{ opacity: 0, y },
		{
			opacity: 1,
			y: 0,
			duration,
			delay,
			stagger,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: Array.isArray(el) ? (el as Element[])[0] : el,
				start: 'top 88%',
				once: true
			}
		}
	);
}

/** Fade in only */
export function fadeIn(
	el: Element | Element[] | NodeListOf<Element> | string,
	opts: { delay?: number; duration?: number; stagger?: number } = {}
) {
	const { delay = 0, duration = 0.9, stagger = 0 } = opts;
	return gsap.fromTo(
		el,
		{ opacity: 0 },
		{
			opacity: 1,
			duration,
			delay,
			stagger,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: Array.isArray(el) ? (el as Element[])[0] : el,
				start: 'top 88%',
				once: true
			}
		}
	);
}

/** Slide in from the left */
export function slideInLeft(
	el: Element | Element[] | string,
	opts: { delay?: number; duration?: number; x?: number; stagger?: number } = {}
) {
	const { delay = 0, duration = 0.9, x = -60, stagger = 0 } = opts;
	return gsap.fromTo(
		el,
		{ opacity: 0, x },
		{
			opacity: 1,
			x: 0,
			duration,
			delay,
			stagger,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: Array.isArray(el) ? (el as Element[])[0] : el,
				start: 'top 88%',
				once: true
			}
		}
	);
}

/** Slide in from the right */
export function slideInRight(
	el: Element | Element[] | string,
	opts: { delay?: number; duration?: number; x?: number; stagger?: number } = {}
) {
	const { delay = 0, duration = 0.9, x = 60, stagger = 0 } = opts;
	return gsap.fromTo(
		el,
		{ opacity: 0, x },
		{
			opacity: 1,
			x: 0,
			duration,
			delay,
			stagger,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: Array.isArray(el) ? (el as Element[])[0] : el,
				start: 'top 88%',
				once: true
			}
		}
	);
}

/** Staggered entrance for a list of children */
export function staggerIn(
	parent: Element | string,
	childSelector: string,
	opts: { stagger?: number; y?: number; delay?: number } = {}
) {
	const { stagger = 0.12, y = 32, delay = 0 } = opts;
	const parentEl =
		typeof parent === 'string' ? document.querySelector(parent) : parent;
	if (!parentEl) return;
	const children = parentEl.querySelectorAll(childSelector);
	return gsap.fromTo(
		children,
		{ opacity: 0, y },
		{
			opacity: 1,
			y: 0,
			duration: 0.75,
			delay,
			stagger,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: parentEl,
				start: 'top 85%',
				once: true
			}
		}
	);
}

/** Parallax vertical drift — element moves at a different rate than scroll */
export function parallax(
	el: Element | string,
	opts: { speed?: number; start?: string; end?: string } = {}
) {
	const isMobile = window.innerWidth < 768;
	if (isMobile) return; // skip on mobile for perf

	const { speed = -50, start = 'top bottom', end = 'bottom top' } = opts;
	return gsap.to(el, {
		y: speed,
		ease: 'none',
		scrollTrigger: {
			trigger: el,
			start,
			end,
			scrub: 1.2
		}
	});
}

/** Animated counter — counts from 0 to target value */
export function countUp(
	el: Element,
	opts: { target: number; suffix?: string; duration?: number } = { target: 0 }
) {
	const { target, suffix = '', duration = 1.8 } = opts;
	const obj = { val: 0 };
	return gsap.to(obj, {
		val: target,
		duration,
		ease: 'power2.out',
		onUpdate: () => {
			el.textContent = Math.round(obj.val) + suffix;
		},
		scrollTrigger: {
			trigger: el,
			start: 'top 85%',
			once: true
		}
	});
}

/** Scale + fade pop entrance — great for cards */
export function popIn(
	el: Element | Element[] | string,
	opts: { delay?: number; stagger?: number } = {}
) {
	const { delay = 0, stagger = 0.1 } = opts;
	return gsap.fromTo(
		el,
		{ opacity: 0, scale: 0.94, y: 20 },
		{
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 0.75,
			delay,
			stagger,
			ease: 'back.out(1.4)',
			scrollTrigger: {
				trigger: Array.isArray(el) ? (el as Element[])[0] : el,
				start: 'top 88%',
				once: true
			}
		}
	);
}

/** Horizontal line / bar reveal (scales from 0 to 1 on X axis) */
export function revealLine(el: Element | string, opts: { delay?: number } = {}) {
	return gsap.fromTo(
		el,
		{ scaleX: 0, transformOrigin: 'left center' },
		{
			scaleX: 1,
			duration: 0.9,
			delay: opts.delay ?? 0,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 90%',
				once: true
			}
		}
	);
}

/** Cleanup — call in onDestroy */
export function killAll() {
	ScrollTrigger.getAll().forEach((t) => t.kill());
	gsap.killTweensOf('*');
}
