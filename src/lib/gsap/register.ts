'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ============================================
// GSAP Plugin Registration
// ============================================
// Call this once at app mount (e.g., in a client layout or provider)
// to ensure all GSAP plugins are available globally.

let isRegistered = false;

export function registerGSAP() {
  if (isRegistered) return;

  gsap.registerPlugin(ScrollTrigger);

  // Set GSAP defaults for cinematic feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 1,
  });

  isRegistered = true;
}
