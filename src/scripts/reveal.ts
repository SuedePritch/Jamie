/*
 * Scroll reveals.
 *
 * Ordering is deliberate and load-bearing: content is visible by default in
 * CSS, and we only add the class that hides it AFTER confirming the browser
 * can un-hide it again. A thrown error, a blocked script, or a browser
 * without IntersectionObserver therefore degrades to plain visible content
 * — never a blank page. On a campaign site that distinction is the
 * difference between "less fancy" and "broken".
 */
const REVEALED = 'is-visible';

export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // No observer support, or the visitor asked for no motion: leave
  // everything visible and do nothing at all.
  if (!('IntersectionObserver' in window) || reducedMotion.matches) return;

  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add(REVEALED);
        // One-shot: re-animating on every scroll-by reads as gimmicky.
        observer.unobserve(entry.target);
      }
    },
    // Trigger slightly before the element reaches the viewport edge so the
    // motion feels anticipatory rather than late.
    { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
  );

  for (const el of targets) {
    // Stagger children of a group so rows cascade instead of snapping in.
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  }

  // If the visitor flips reduced-motion mid-session, honour it immediately.
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    document.documentElement.classList.remove('reveal-ready');
    for (const el of targets) el.classList.add(REVEALED);
  });
}
