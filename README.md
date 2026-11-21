# The Human Variable

Sunil Singh Chaisir’s personal portfolio: an editorial journey through marketing, creative work, consumer research, and community involvement. Built with Next.js App Router, TypeScript, and SCSS.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open the address printed by Next.js. To check and build:

```sh
npm run typecheck
npm run build
```

The hosting configuration targets a static export in `out/`. When building a Git checkout, the build also produces `/downloads/sunil-portfolio-source.zip` from the exact current tracked revision. Commit source changes before building a release; ZIP contents intentionally exclude dependencies and local state. Keep `.openai/hosting.json`’s existing project ID when updating the same Site. Never commit credentials, runtime tokens, or local environment files.

## Content and design

- The homepage follows eight connected chapters, with direct access to work and contact.
- Three case studies cover Nirmala Home Kitchen, GAPPU Music / MUSO, and SABERA.
- The approved fonts are Space Grotesk, Instrument Serif, and IBM Plex Mono.
- The palette uses Obsidian `#0B0C10`, Paper Ivory `#F2EDE4`, Signal Red `#F04438`, Pale Mint `#B6E4C2`, Chrome Silver `#A9B0B8`, and occasional Dusty Violet `#9388BA`.
- GSAP owns narrative motion; Lenis is reserved for suitable desktop conditions. Motion owns navigation state transitions. The chrome object is a decorative, deferred Three.js / React Three Fiber enhancement with a static fallback.
- No logo, monogram, initials symbol, or name-based wordmark is permitted. Sunil’s name is ordinary portfolio text.

See [creative direction and asset map](docs/creative-direction.md) for the storyboard, imagery plan, motion rules, and factual boundaries.

## Editing facts

Maintain project facts in `lib/content.ts` and keep visible copy, case pages, structured data, `/llms.txt`, and `/profile.md` consistent. The source is Sunil’s supplied professional profile, dated November 2026; platform figures have not been independently audited.

Nirmala figures describe the family-led brand’s collaborative results. MUSO figures describe the student team’s work. SABERA figures describe outcomes Sunil contributed to; sponsorship and registration revenue remain separate. Do not turn these into sole-attribution claims or live counters.

## Asset status and remaining inputs

The supplied fourteen-page photo PDF provides the original images. Five photographs are selected for the website: the seated portrait, presentation, Sunil’s SMART videography poster, community teaching, and friends in traditional clothing. This is a deliberate editorial selection; the other photographs are outside the chosen layout. See the creative-direction document for placement and source-page mapping.

The selected JPEGs are resized and compressed into responsive WebP variants without changing anyone’s appearance. `lib/imageAssets.json` records actual dimensions and generated variants. Static `<picture>` sources provide responsive selection with a Next Image fallback; the hero portrait is eager and below-fold photography is lazy. Original typographic case artwork remains navigation and art direction, not documentary project evidence.

Also pending:

- A supplied résumé file before enabling a résumé download.
- Childhood images and dated early-location details, if desired.
- Direct research article URLs; the supplied LinkedIn profile can be linked in the meantime.
- Confirmation of conflicting Robin Hood Army counts. The narrative can include verified activities while omitting counts.
- Confirmed titles and dates for Marquee Equity and Petuk Ji before presenting them as formal employment.

Do not generate substitute people, childhood scenes, work evidence, testimonials, or project outcomes to fill these gaps.

## Verification

After the photograph update, TypeScript checking and the Next.js production build passed. Static validation checked seven exported HTML documents for broken local links, missing anchor targets, missing referenced scripts/styles, one H1 per document, and the presence of sitemap, robots, and Markdown discovery files; no errors were found. Media checks verified exactly five server-rendered photographs, all fifteen responsive files, accurate intrinsic dimensions and width descriptors, descriptive alt text, eager/high-priority hero loading, and lazy below-fold loading. No errors were found.

A native deployment screenshot was previously inspected for desktop composition. Interactive desktop/mobile browser verification remains unverified: the managed Sites preview relay timed out, and the cloud browser tool returned a sandbox initialization error. No Lighthouse score or field Core Web Vitals result was measured. Review the updated portrait composition, poster legibility, mobile crops, lazy loading, and performance in the next available browser QA pass.

The static export uses Next Image with `unoptimized: true`, because there is no Next image server in this deployment. Responsive WebP derivatives are prepared locally instead. Anime.js is omitted because GSAP already owns all typography animation. No unnecessary duplicate animation engine is installed.
