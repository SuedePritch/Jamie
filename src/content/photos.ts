/*
 * Photography.
 *
 * Imported from src/assets (NOT public/) so Astro processes them: each is
 * re-encoded to AVIF/WebP at several widths, with dimensions baked into the
 * markup. Files in public/ ship byte-for-byte and would send multi-megabyte
 * originals to phones.
 *
 * Sources are stored as WebP. The studio originals arrived as ~6MB JPEGs
 * rotated 90° (portrait pixels written to a landscape frame); they were
 * rotated upright and re-encoded, taking 6.9MB down to 1.9MB in the repo.
 *
 * Alt text describes what is actually in each frame, for someone who
 * cannot see it.
 */

// Studio session — seated indoors, blazer, fireplace behind.
import studioHeadshot from '../assets/photos-studio/1000029826.webp';
import studioSeatedHands from '../assets/photos-studio/1000029827.webp';

export const photos = {
  /*
   * Hero: the close headshot. Direct eye contact and a clear face at small
   * sizes, which is what a candidate's hero needs to do first.
   */
  hero: {
    src: studioHeadshot,
    alt: 'Portrait of Jamie Scrimger, seated indoors in a light green blazer and white shirt, looking at the camera.',
  },

  // About: seated, hands clasped — relaxed and conversational.
  about: {
    src: studioSeatedHands,
    alt: 'Jamie Scrimger seated in a wooden chair, hands clasped, in front of a fireplace and stacked firewood.',
  },

} as const;
