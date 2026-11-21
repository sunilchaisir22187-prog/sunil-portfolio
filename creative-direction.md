# The Human Variable — creative direction

**Many worlds. One evolving story.**

The portfolio introduces an emerging marketing professional through the experiences that shaped his judgment. Cinematic technology provides a visual metaphor; Sunil’s actual life and contributions provide the substance. Visitors can follow the story or go straight to work, outcomes, and contact.

## Visual system

| Token | Value | Purpose |
| --- | --- | --- |
| Obsidian | `#0B0C10` | Main cinematic canvas |
| Paper Ivory | `#F2EDE4` | Reading sections and primary light text |
| Signal Red | `#F04438` | Primary actions, progress, selected emphasis |
| Pale Mint | `#B6E4C2` | Discovery and restrained supporting accents |
| Chrome Silver | `#A9B0B8` | Metadata and metallic material |
| Dusty Violet | `#9388BA` | Rare surreal accent |

Space Grotesk sets headings and interface text. Instrument Serif adds a few intimate phrases. IBM Plex Mono carries dates, categories, and location captions. Use responsive type scales, readable body copy of at least 16px, and generous space around dense factual information. Avoid generic skill bars and repetitive card layouts.

Dark chapters should occupy most of the experience, interrupted by ivory editorial spreads. Chrome stays concentrated in a single sculptural motif. A recurring red signal links origin, recording, evidence, and contact. Neither element serves as a personal logo. Sunil’s name remains readable ordinary text.

## Eight-chapter storyboard

| Chapter | Narrative and suggested copy | Visitor task |
| --- | --- | --- |
| Prologue | “Many worlds. One evolving story.” Introduce Sunil Singh Chaisir, PGDM candidate at IMI Kolkata, with marketing, content, and consumer understanding in view. | Enter the story or explore work immediately. |
| Origin | “I learned to adapt before I learned to market.” An Army-family upbringing connects Uttarakhand, Maharashtra, Uttarakhand, Uttar Pradesh, Assam, Punjab, Delhi, and Kolkata without invented dates. | Understand the source of adaptability and curiosity. |
| Becoming | Connect B.Com studies at Shaheed Bhagat Singh College (Evening), University of Delhi, with the current PGDM in Marketing and Analytics at IMI Kolkata. | See how learning becomes practical direction. |
| Experiments | Show content strategy, SEO, consumer research, partnerships, visual storytelling, and coordination through concrete work. Use “Learn. Apply. Improve. Repeat.” as the operating philosophy. | Recognize capabilities within thirty seconds. |
| The Archive | Present Nirmala Home Kitchen, MUSO, and SABERA as distinct editorial case studies. State the context, precise role, execution, outcome, and learning. | Inspect work and personal contribution. |
| The Signal | Present supported results with dates and attribution. Nirmala is a brand snapshot; MUSO is a team outcome; SABERA is a contributed commercial outcome. | Assess evidence without inflated claims. |
| Beyond the Screen | SMART videography, Robin Hood Army volunteering, food, friendship, and ordinary human moments. “Some of the most useful lessons happen away from a screen.” | Discover values and personality. |
| The Next Dimension | “The next chapter is still being written.” Invite internships, live projects, early-career opportunities, and thoughtful collaboration. Entrepreneurship remains an aspiration. | Contact Sunil through supplied professional links. |

Every case page should stand alone for a recruiter arriving directly. Story and Work navigation use the same content, with no mandatory introduction or separate duplicate site.

## Selected photograph map

The supplied `WhatsApp Image 2026-11-22 at 00.09.37.pdf` contains fourteen real JPEG photographs. Five are selected to give each image a distinct narrative purpose; the remaining images are deliberately unselected.

| PDF page | Selected asset | Placement | Composition |
| --- | --- | --- | --- |
| 1 | `portrait-seated.webp` | Prologue / hero | Sunil in a suit on the red chair with the IMI Kolkata backdrop; responsive portrait framing keeps his face and upper body clear. |
| 5 | `presentation.webp` | Becoming / communication | Sunil presenting on stage beside a finance slide; retain the presentation context without inferring an award or event name. |
| 4 | `smart-sunil.webp` | Creative work / SMART | Show the complete red Sunil videography poster, preserving its supplied typography, camera, and original composition. |
| 10 | `community-teaching.webp` | Robin Hood Army / volunteering | Sunil reviewing notebooks with children; retain the shared activity and avoid invented names, outcomes, or impact counts. |
| 3 | `friends.webp` | Beyond the Screen / personal interlude | Four friends in traditional clothing; include all four people in a warm personal moment. |

Image preparation uses resizing and WebP compression only; faces, bodies, and physical appearance are unchanged. Variants include 480px and 800px widths and larger widths up to 1200px where appropriate, with a 1600px option for the friends image. `lib/imageAssets.json` records actual dimensions and available sources. A static `<picture>` source set surrounds the Next Image fallback, so the static deployment selects suitable files without an image server. The hero is eager; below-fold images are lazy. Dimensions are reserved to prevent layout shifts.

SMART artwork is supplied creative work, not a new personal identity mark. The friendship photo is personal context rather than Nirmala campaign evidence. Original typographic case artwork remains illustrative art direction, with factual claims supported by the supplied profile. Do not create fictional childhood or professional images.

## Motion and interaction choreography

The planned system gives GSAP responsibility for the cinematic hero, scroll reveals, and journey progression. Use scoped `useGSAP()` contexts and responsive `gsap.matchMedia()` conditions. Contexts, ScrollTriggers, observers, listeners, and ticker callbacks must be removed on unmount.

- **Hero:** one short, coordinated text and object entrance; meaningful text renders immediately. No fake percentages, artificial waiting period, or blocking loader.
- **Journey:** scrolling reveals places and educational context in a readable sequence. Desktop may add controlled depth; mobile remains a native vertical narrative. Fast and reverse scrolling must preserve understanding.
- **Archive:** clear project links with restrained perspective, image movement, or expansion. Focus and touch provide the same access as hover.
- **Chrome object:** defer the Three.js / React Three Fiber scene until critical content has rendered; cap pixel ratio and suspend offscreen or hidden-tab rendering. A static treatment remains usable without WebGL. Shader effects, if used, affect the decorative material only.
- **Navigation:** Motion owns menu state transitions on separate elements from GSAP. Keep direct Story, Work, and Contact access, visible focus, accurate disclosure state, and comfortable tap targets.
- **Scrolling:** use one Lenis instance only on suitable desktop conditions, connected to ScrollTrigger through one GSAP ticker. Reduced-motion and touch layouts use native scrolling.

Hover transitions should usually take 0.2–0.35 seconds; content reveals 0.5–0.9 seconds. Avoid constant background motion, scroll traps, forced audio, and duplicated libraries. Anime.js is unnecessary if GSAP already owns all requested typography effects.

## Responsive and accessible behavior

On desktop, asymmetric typography, the chrome object, and editorial columns create depth. On mobile, stack in reading order, shorten oversized display lines, preserve image dimensions, and replace pointer-dependent composition with explicit links. Do not hide factual content behind an animation or hover.

Respect `prefers-reduced-motion` throughout. Keep semantic landmarks, logical headings, skip navigation, meaningful alternative text, strong contrast, visible keyboard focus, and readable content without JavaScript. Canvas decoration should be hidden from assistive technology. No interaction should require WebGL.

## Content boundaries and asset preparation

1. Retain the supplied photo PDF and the selected JPEG originals as sources. Keep responsive WebP derivatives and their dimension metadata in sync when changing any image or crop. Review portrait framing, poster legibility, mobile composition, source selection, and loading behavior before release.
2. Obtain project screenshots, actual deliverables, and selected video files before presenting visual evidence. Until then, typographic case art is illustrative navigation rather than a fabricated result.
3. Supply a résumé before offering a download. Do not substitute a generated résumé without review.
4. Resolve contradictory Robin Hood Army numbers before adding impact counts. Verified activities may remain visible.
5. Confirm Marquee Equity / Petuk Ji titles and dates before listing formal employment.
6. Add direct LinkedIn article URLs when available; use only the supplied profile link in the meantime.

Keep visible content, case-study metadata, JSON-LD, sitemap, robots rules, `/llms.txt`, and `/profile.md` consistent. AI-readable documents are factual aids and carry no promise of indexing or ranking. Report build, browser, and performance findings only after actual measurement.
