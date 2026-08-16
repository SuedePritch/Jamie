/**
 * Prefix a site-root-relative path with the configured `base`.
 *
 * The site is served from a subpath on GitHub Pages, so a bare "/about"
 * would resolve against the domain root and 404 in production while
 * working fine in `astro dev`. Always route internal paths through this.
 *
 * External URLs, anchors, and mailto/tel links are returned untouched so
 * this is safe to apply blindly.
 */
export function url(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rel}`;
}
