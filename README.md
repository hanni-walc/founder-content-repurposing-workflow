# Founder Content Repurposing Workflow

Repo: `founder-content-repurposing-workflow`

## One-line pitch
Turn one source into a multi-channel content pack that is actually usable.

## Buyer
founders, solo marketers, agencies

## Pain
One long-form idea takes too long to turn into publish-ready content.

## Monetization
Credits plus monthly subscription.

## Differentiator
Workflow-first editing and brand voice presets instead of generic AI output.

## What ships in v1
- Paste source text or URL
- Generate platform-specific drafts
- Edit with reusable templates
- Queue exports
- Brand voice presets
- Mobile editing support

## Screens
- Source paste/import
- Content editor
- Brand voice settings
- Asset queue
- Publishing export
- History dashboard

## Routes
- `/`
- `/login`
- `/app`
- `/app/sources`
- `/app/projects`
- `/app/voices`
- `/app/exports`
- `/app/history`

## Deployment
Vercel, Postgres, background worker for generation jobs, Stripe billing, object storage for assets.

## Launch checklist
- Focus on one clear workflow first
- Keep output quality high, not just volume
- Avoid trying to be a generic AI content app

## v2
- Social scheduling
- Repurpose from video transcripts
- Team review
- Performance analytics

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
