# Mercedarian Spine Specialist Clinic homepage plan

## Scope

A single, production-ready homepage for Mercedarian Spine Specialist Clinic. The page uses only the verified clinic name, description and phone number from the supplied brief and the public clinic page. No doctors, qualifications, outcomes, address, opening hours, testimonials or unsupported diagnoses are introduced.

## Design direction

Three possible directions were considered: **clinical editorial minimalism** (0.76), **quiet coastal wellness** (0.08), and **high-contrast sports medicine** (0.06). The selected direction is clinical editorial minimalism.

- **Design movement:** editorial healthcare design with a restrained Swiss grid, warm paper surfaces and an assertive red cross/spine signal.
- **Core principles:** calm authority, direct enquiry paths, generous breathing room and content that explains without overpromising.
- **Color philosophy:** the original logo's red cross and warm gold spine anchor the system. Deep ink and muted sage-green neutrals add clinical contrast without competing with the mark.
- **Layout paradigm:** an asymmetric, image-led opening followed by offset editorial bands rather than a repeated centered card grid.
- **Signature elements:** fine rule lines, a small red cross motif and numbered journey steps with a vertical spine-like connector.
- **Interaction philosophy:** every interactive control has a clear focus state and leads to a real anchor, phone call or WhatsApp enquiry.
- **Animation:** no heavy animation library; only native smooth scrolling and restrained hover transitions.
- **Typography system:** Manrope for headings and Inter for body copy, with uppercase micro-labels for navigation and section context.
- **Brand essence:** focused spine and joint attention for people looking for a clear next step; calm, attentive, professional.
- **Brand voice:** plain, reassuring and specific. Example lines: “A better path to movement starts with a clear conversation.” and “Reach out to discuss your concerns and enquire about an appointment.”
- **Wordmark & logo:** the supplied clinic logo is used as-is inside the header and footer, with a text wordmark beside it for legibility.
- **Signature brand color:** the logo red, used as the primary action color and as a signal for focus areas.

## Implementation structure

- `app/layout.tsx`: global metadata, fonts and document shell.
- `app/page.tsx`: the homepage route, semantic sections and verified clinic content.
- `app/components/mobile-nav.tsx`: the only client component, providing accessible mobile navigation state.
- `app/globals.css`: responsive visual system, layout, focus states and reduced-motion behavior.
- `public/images/clinic-logo.jpg`: the original logo supplied in the repository.
- `public/images/spine-consultation.jpg`: a non-graphic Pexels consultation photograph used only because no clinic photography was present in the repository.
- `public/manus-routes.json`: the declared single-page route manifest.

## Delivery constraints

The project is delivered to the existing GitHub repository's `main` branch only. It is not deployed to Vercel and it does not create additional pages.
