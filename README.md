# Securikey — Isle of Man Locksmith Website

A modern, fast marketing website for **Securikey**, a family-run locksmith and security specialist business serving the entire Isle of Man. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

Live site: [securikey.im](https://securikey.im)

## Features

- **Single-page marketing site** with sections for services, gallery, about/team, mobile workshops, in-store services, testimonials, FAQ and statistics.
- **Get a Quote page** (`/quote/`) with a validated contact form (React Hook Form + Zod) that posts to a serverless API route.
- **SEO-optimised**: rich `LocalBusiness` JSON-LD structured data (reviews, service catalogue, opening hours, service areas), dynamic `sitemap.xml` and `robots.txt`, per-page Open Graph/Twitter metadata, and an [`llms.txt`](https://llmstxt.org/) file to help AI answer engines (ChatGPT, Perplexity, Claude) accurately describe the business.
- **Animated UI** using Framer Motion for scroll-triggered reveals and micro-interactions.
- Fully responsive, accessible markup (semantic sections, `aria-label`s, native `<details>` FAQ accordion).

## Tech Stack

| Layer      | Technology                                    |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router) |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS                                   |
| Animation  | Framer Motion                                  |
| Forms      | React Hook Form + Zod                          |
| Icons      | Lucide React                                   |
| Carousel   | Embla Carousel                                 |
| Deployment | Netlify (`@netlify/plugin-nextjs`)             |

## Project Structure

```
app/
  layout.tsx        # Root layout, global metadata, JSON-LD schema
  page.tsx           # Homepage — composes all section components
  quote/page.tsx      # Get a Quote page
  api/contact/         # Serverless route handling quote form submissions
  robots.ts / sitemap.ts

components/
  navigation/        # Header, mobile menu
  sections/          # Hero, Services, About, Gallery, FAQ, Testimonials, etc.
  quote/QuoteForm.tsx  # Quote form logic + validation
  ui/                # Shared primitives (Button, Container, SectionHeader...)

lib/
  data.ts            # Site content: services, team, testimonials, FAQs, etc.
  schema.ts          # Zod validation schema for the quote form
  utils.ts           # Shared helpers (e.g. `cn` classname merge)

public/
  gallery/, on-the-go/, favicon/  # Static image assets
  llms.txt                        # AI-crawler-friendly business summary
```

Most editable site content (services, team bios, testimonials, FAQs, opening hours, contact details) lives in a single file: `lib/data.ts`.

## Getting Started

### Prerequisites

- Node.js 18.17+ (recommended: latest LTS)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) (or the next available port).

### Build & Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Environment Variables

None are required to run the project locally. The quote form's API route (`app/api/contact/route.ts`) currently validates submissions and logs them server-side as a placeholder — it does **not** yet send an email. Before going live, integrate an email provider (e.g. Resend, SendGrid, Nodemailer) in that route and add any resulting API keys to a local `.env` file (already excluded via `.gitignore`).

## Deployment

This project is configured for **Netlify** via `netlify.toml`, using the official `@netlify/plugin-nextjs` plugin for full Next.js SSR/API route support.

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## SEO & AI Discoverability

- **Structured data**: `app/layout.tsx` renders a comprehensive `Locksmith`/`LocalBusiness` schema (service catalogue, area served, opening hours, aggregate rating, reviews).
- **FAQ schema**: `components/sections/FAQ.tsx` renders a visible FAQ accordion with matching `FAQPage` JSON-LD.
- **`public/llms.txt`**: a clean, structured summary of the business for AI answer engines to cite accurately.
- **`app/sitemap.ts` / `app/robots.ts`**: dynamically generated sitemap and robots rules (all crawlers, including AI bots, are currently allowed).

## License

Private/proprietary — all rights reserved by Securikey.
