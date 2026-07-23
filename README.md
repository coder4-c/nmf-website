# Next Mission Fitness - Website

Built from `Next_Mission_Fitness_LLC_Master_WRD.docx` (the requirements doc),
the brand statement, logo, and all five legal/intake documents you uploaded.
Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's built (Phase 1 - public site + funnel)

- **Home** (`/`) - hero, client-experience steps, coaching focus areas,
  founder section, Mission Kit, coaching formats
- **About** (`/about`) - mission, vision, story, who we serve
- **Services** (`/services`) - formats, pricing note, sourced FAQ
- **Apply** (`/apply`) - short "Start Your Mission" application form
- **Intake** (`/intake`) - full client intake form, every field from
  `Next_Mission_Fitness_Editable_Intake_Form.docx`
- **Legal pages** - Privacy Policy, Terms of Service, Disclaimer, Coaching
  Agreement, reproduced verbatim from your uploaded documents
- Brand colors sampled directly from `NMF_Logo_Black.PNG`: black `#000000`,
  red `#DE0616`. Fonts: Big Shoulders Display (headlines), Inter (body),
  IBM Plex Mono (labels/eyebrows). Design tokens live in `app/globals.css`.

Both forms POST to stub API routes (`app/api/apply`, `app/api/intake`) that
validate and `console.log` the payload - see the next section.

## What's intentionally NOT built yet

The requirements doc describes a much bigger platform. These need real
backend/product decisions before they can be built, so they're left as
clean next steps rather than guessed at:

- **Email delivery / CRM** - the two form routes log to console only. Wire
  up Resend/SendGrid + a CRM (or write to MongoDB, same as your e-commerce
  project) before launch.
- **Stripe payments** - no checkout is wired up yet.
- **Client portal** - login, dashboard, workout/nutrition plans, progress
  tracking. This needs auth (NextAuth or similar) and a database.
- **Blog** - no CMS connected.
- **Calendly integration** - the consultation step is currently just the
  Apply form.
- **The Transformation Playbook** (lead magnet PDF) - content doesn't exist
  yet, so no download link was added.
- **Results / testimonials** - no client photos or quotes were supplied, so
  none were invented. Add a section once you have real ones.
- **Founder photo** - the founder section is intentionally text/quote-led
  (no stock photo standing in for Kevin Edmondson). Drop a real photo into
  `public/brand/` and reference it in `app/page.tsx` and `app/about/page.tsx`
  once available.
- **Cookie Policy** - referenced in the requirements doc but no source
  document was uploaded.

## Project structure

```
app/
  page.tsx                  Home
  about/page.tsx
  services/page.tsx
  apply/page.tsx             application form
  intake/page.tsx            full intake form
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  disclaimer/page.tsx
  coaching-agreement/page.tsx
  api/apply/route.ts         stub endpoint
  api/intake/route.ts        stub endpoint
  layout.tsx                 fonts, Nav, Footer
  globals.css                design tokens + "cut" motif
components/
  Nav.tsx
  Footer.tsx
  LegalLayout.tsx             shared layout for the 4 legal pages
  FormFields.tsx              shared inputs for apply/intake
public/brand/
  nmf-logo.png
  nmf-logo-animated.mp4
```
