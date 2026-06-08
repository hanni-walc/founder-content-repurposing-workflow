export const TITLE = "Founder Content Repurposing Workflow";
export const PROMISE = "Turn one source into a multi-channel content pack that is actually usable.";
export const BUYER = "founders, solo marketers, agencies";
export const PAIN = "One long-form idea takes too long to turn into publish-ready content.";
export const PRICING = "Credits plus monthly subscription.";
export const WEDGE = "Workflow-first editing and brand voice presets instead of generic AI output.";
export const DEPLOY = "Vercel, Postgres, background worker for generation jobs, Stripe billing, object storage for assets.";
export const MVP = [
  "Paste source text or URL",
  "Generate platform-specific drafts",
  "Edit with reusable templates",
  "Queue exports",
  "Brand voice presets",
  "Mobile editing support"
];
export const SCREENS = [
  "Source paste/import",
  "Content editor",
  "Brand voice settings",
  "Asset queue",
  "Publishing export",
  "History dashboard"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/sources",
  "/app/projects",
  "/app/voices",
  "/app/exports",
  "/app/history"
];
export const LAUNCH = [
  "Focus on one clear workflow first",
  "Keep output quality high, not just volume",
  "Avoid trying to be a generic AI content app"
];
export const V2 = [
  "Social scheduling",
  "Repurpose from video transcripts",
  "Team review",
  "Performance analytics"
];
export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
