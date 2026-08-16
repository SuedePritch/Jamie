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
// Candid, supplied already cropped to 4:5 (1600x2000) so it needs no
// further crop — it fills the frame exactly as composed.
import aboutCandid from '../assets/photos-studio/about-candid.webp';
// Arrived as a rotated 2.2:1 panorama; rotated upright and cropped to 4:5
// from the top, which keeps both faces in frame.
import puppy from '../assets/photos-studio/puppy.webp';

export const photos = {
  /*
   * Hero: the close headshot. Direct eye contact and a clear face at small
   * sizes, which is what a candidate's hero needs to do first.
   */
  hero: {
    src: studioHeadshot,
    alt: 'Portrait of Jamie Scrimger, seated indoors in a light green blazer and white shirt, looking at the camera.',
  },

  /*
   * About: two candids, deliberately less formal than the hero. The studio
   * headshot does the first-impression work up top; these sit alongside the
   * personal history, where relaxed photos suit the copy better.
   */
  about: [
    {
      src: aboutCandid,
      alt: 'Jamie Scrimger outdoors in a ball cap and patterned shirt, a cruise ship docked at the waterfront behind her.',
    },
    {
      src: puppy,
      alt: 'Jamie Scrimger holding a springer spaniel puppy, both looking towards the camera.',
    },
  ],

} as const;
