<div align="center">

# MW Executive Representation & Advisory

**Your trusted representative in Sierra Leone.**

Executive representation · Business support · Strategic coordination · Advisory solutions

</div>

---

## Overview

This is the marketing website for **MW Executive Representation & Advisory**, a Freetown-based firm led by Founder & Principal Executive Representative Monique Williams. The firm represents individuals and organisations on matters requiring a trusted, on-the-ground presence in Sierra Leone — government liaison, corporate administration, project coordination, and client reporting.

The site is a fast, dependency-free static build: four pages, no framework, no build step. Open the HTML files directly or serve them with any static file server.

| | |
|---|---|
| **Type** | Marketing / brochure website |
| **Pages** | Home, About, Services, Contact |
| **Stack** | HTML5, CSS3, vanilla JavaScript |
| **Build step** | None |
| **Status** | Ready for review — see [Before Launch](#before-launch) |

## Table of Contents

- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Brand Collateral](#brand-collateral)
- [Before Launch](#before-launch)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, brand values, services overview, founder introduction, testimonial, call to action |
| About | `about.html` | Firm story and founder biography |
| Services | `services.html` | All six service lines in detail, plus the client engagement process |
| Contact | `contact.html` | Office details, embedded map, and an inquiry form |

## Tech Stack

No framework, no bundler, no `node_modules` — the entire site is hand-authored HTML/CSS/JS so it can be opened, edited, and hosted anywhere without tooling.

- **Markup:** semantic HTML5, one file per page, shared header/footer markup
- **Styling:** a single stylesheet (`css/style.css`) using CSS custom properties for the brand palette, CSS Grid/Flexbox for layout, and `clamp()` for fluid type
- **Behavior:** `js/main.js` handles the mobile nav toggle, active-link highlighting, and the contact form's AJAX submission
- **Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (headings) and [Montserrat](https://fonts.google.com/specimen/Montserrat) (body), loaded from Google Fonts
- **Icons:** hand-authored inline SVG (no icon library dependency)
- **Forms:** static-friendly, wired for [Formspree](https://formspree.io) (or any compatible POST endpoint)

## Project Structure

```
mw-executive-website/
├── index.html            Home
├── about.html             About
├── services.html           Services
├── contact.html           Contact (map + inquiry form)
├── css/
│   └── style.css          Shared stylesheet — colors, type, layout, components
├── js/
│   └── main.js             Mobile nav, active nav state, form submission
└── assets/
    ├── logo-mark.svg       "MW" monogram
    ├── logo-full.svg        Monogram + full wordmark lockup
    └── favicon.svg           Browser tab icon
```

## Getting Started

No install, no build. Clone and serve.

```bash
git clone https://github.com/mkk2026/mw-executive-website.git
cd mw-executive-website
python3 -m http.server 8080
```

Then open **http://localhost:8080**. Any static server works equally well (`npx serve`, VS Code's Live Server, etc.) — the only requirement is serving over `http://` rather than `file://`, so relative asset paths resolve consistently.

## Design System

| Token | Value | Usage |
|---|---|---|
| Bronze | `#B8874B` | Primary accent, links, icon strokes |
| Bronze Dark | `#8F6A38` | Hover states |
| Champagne | `#E8DFC8` | Tinted section backgrounds |
| Warm White | `#FAF7F2` | Base background |
| Charcoal | `#1A1A1A` | Header, footer, dark sections, body text |
| Slate | `#A4A4A4` | Secondary text, borders |

Headings use **Cormorant Garamond** (a serif chosen for an editorial, established feel); body copy and UI labels use **Montserrat**. Both are loaded via `<link>` in each page `<head>` — see [Before Launch](#before-launch) if self-hosting fonts is preferred over the Google Fonts CDN.

## Brand Collateral

Print-ready stationery templates live in [`brand/`](brand/), styled with the same palette and type as the site. Each is a self-contained HTML file — open it in a browser, fill in the bracketed `[placeholder]` text, then use **Print → Save as PDF** (a "Print / Save as PDF" button is included on-screen and hides itself automatically when printing).

| File | Purpose | Format |
|---|---|---|
| `brand/letterhead.html` | Official correspondence | A4 |
| `brand/invoice.html` | Client billing | A4 |
| `brand/receipt.html` | Payment confirmation, with a "Paid in Full" stamp | A4 |
| `brand/compliment-slip.html` | Short notes accompanying documents/deliveries | 210×99mm (DL) |
| `brand/email-signature.html` | Copy-paste signature block for Gmail/Outlook, with install steps included on the page | HTML email signature |

The email signature uses inline styles and a text-based "MW" mark (no external image) so it survives being pasted into Gmail/Outlook, which strip most external CSS and can drop hosted images. Once the site has a stable public URL, the mark can be swapped for a hosted logo image for higher fidelity.

## Before Launch

Two items need attention before this goes live:

1. **Contact form endpoint.** `contact.html` posts to a placeholder Formspree URL (`https://formspree.io/f/YOUR_FORM_ID`). Create a free form at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` with the real ID. Any static-form provider (Netlify Forms, Web3Forms, etc.) works — just update the form's `action` attribute.
2. **Confirm the office address.** The address on the site (`29B Kingharman Road, Freetown, Sierra Leone`) was transcribed from a partially-cropped brand mockup image — confirm the exact spelling and number before publishing.

Nice-to-haves for a future pass:

- Swap the placeholder portrait frames (`.portrait-frame` in `index.html` / `about.html`) for a real photo of Monique Williams
- Replace the `assets/logo-*.svg` files with a designer-traced vector if the original brand artwork becomes available (needed for print — business cards, letterhead)
- Add a real photo background to the homepage hero (`.hero` in `css/style.css`) in place of the current dark gradient

## Deployment

Static hosting, no server-side requirements:

| Host | Notes |
|---|---|
| **Netlify / Vercel** | Drag-and-drop the folder, or connect this repo for git-based deploys |
| **GitHub Pages** | Enable Pages on this repo, serving from the `main` branch root |
| **Traditional hosting** | Upload the folder via FTP/SFTP to `public_html` — no build step required |

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses CSS Grid, Flexbox, `clamp()`, and CSS custom properties throughout; no polyfills included.

## License

© 2026 MW Executive Representation & Advisory. All rights reserved. This repository contains client work; do not reuse the brand assets, copy, or design without permission.
