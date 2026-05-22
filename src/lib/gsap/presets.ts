import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ============================================
// Reusable GSAP Animation Presets
// ============================================
// Use these presets in section components for consistent
// scroll-triggered animations throughout the portfolio.

/**
 * Fade up reveal — the most common scroll animation.
 * Fades in and slides up from a given offset.
 */
export function fadeUpReveal(
  element: gsap.TweenTarget,
  options?: {
    trigger?: string | Element;
    y?: number;
    delay?: number;
    duration?: number;
    start?: string;
  }
) {
  return gsap.from(element, {
    y: options?.y ?? 60,
    opacity: 0,
    duration: options?.duration ?? 1,
    delay: options?.delay ?? 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: (options?.trigger as Element) ?? (element as Element),
      start: options?.start ?? 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Stagger children — reveal multiple elements one after another.
 */
export function staggerReveal(
  elements: gsap.TweenTarget,
  options?: {
    trigger?: string | Element;
    stagger?: number;
    y?: number;
    duration?: number;
    start?: string;
  }
) {
  return gsap.from(elements, {
    y: options?.y ?? 40,
    opacity: 0,
    duration: options?.duration ?? 0.8,
    stagger: options?.stagger ?? 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: (options?.trigger as Element) ?? (elements as Element),
      start: options?.start ?? 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Parallax movement — subtle y-axis shift on scroll.
 */
export function parallax(
  element: gsap.TweenTarget,
  options?: {
    trigger?: string | Element;
    y?: number;
    start?: string;
    end?: string;
  }
) {
  return gsap.to(element, {
    y: options?.y ?? -50,
    ease: 'none',
    scrollTrigger: {
      trigger: (options?.trigger as Element) ?? (element as Element),
      start: options?.start ?? 'top bottom',
      end: options?.end ?? 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Text line reveal — clip-path reveal for headline text.
 */
export function textLineReveal(
  element: gsap.TweenTarget,
  options?: {
    trigger?: string | Element;
    delay?: number;
    duration?: number;
  }
) {
  return gsap.from(element, {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0,
    duration: options?.duration ?? 1.2,
    delay: options?.delay ?? 0,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: (options?.trigger as Element) ?? (element as Element),
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Kill all ScrollTrigger instances — useful for cleanup.
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
