export type Source = {
  id: string;
  title: string;
  type: 'article' | 'video' | 'thread' | 'newsletter';
  topic: string;
  length: string;
};

export type VoicePreset = {
  id: string;
  name: string;
  tone: string;
  audience: string;
  styleNotes: string[];
};

export type ProjectPack = {
  id: string;
  title: string;
  channel: string;
  assets: string[];
  exportReady: boolean;
};

export type ExportJob = {
  id: string;
  channel: string;
  status: 'queued' | 'editing' | 'published';
  title: string;
};

export type HistorySnapshot = {
  totalExports: number;
  topChannel: string;
  nextAction: string;
};

export type VoiceProfile = {
  name: string;
  editRules: string[];
  doNot: string[];
};

export const TITLE = 'Founder Content Repurposing Workflow';
export const PROMISE = 'Turn one source into a multi-channel content pack that is actually usable.';
export const BUYER = 'founders, solo marketers, agencies';
export const PAIN = 'One long-form idea takes too long to turn into publish-ready content.';
export const PRICING = 'Credits plus monthly subscription.';
export const WEDGE = 'Workflow-first editing and brand voice presets instead of generic AI output.';
export const DEPLOY = 'Vercel, Postgres, background worker for generation jobs, Stripe billing, object storage for assets.';
export const MVP = ['Paste source text or URL', 'Generate platform-specific drafts', 'Edit with reusable templates', 'Queue exports', 'Brand voice presets', 'Mobile editing support'];
export const SCREENS = ['Source paste/import', 'Content editor', 'Brand voice settings', 'Asset queue', 'Publishing export', 'History dashboard'];
export const ROUTES = ['/', '/login', '/app', '/app/sources', '/app/projects', '/app/voices', '/app/exports', '/app/history'];
export const LAUNCH = ['Focus on one clear workflow first', 'Keep output quality high, not just volume', 'Avoid trying to be a generic AI content app'];
export const V2 = ['Social scheduling', 'Repurpose from video transcripts', 'Team review', 'Performance analytics'];

export const sampleSources: Source[] = [
  { id: 'src-1', title: 'How we shipped the product beta', type: 'article', topic: 'product launch', length: '1,400 words' },
  { id: 'src-2', title: 'Founder talk on customer support', type: 'video', topic: 'customer support', length: '18 min' },
  { id: 'src-3', title: 'Thread: lessons from the first 10 customers', type: 'thread', topic: 'founder lessons', length: '14 posts' },
];

export const sampleVoices: VoicePreset[] = [
  { id: 'voice-1', name: 'Founder direct', tone: 'clear and confident', audience: 'buyers and prospects', styleNotes: ['short sentences', 'specific examples', 'no hype'] },
  { id: 'voice-2', name: 'Builder helpful', tone: 'warm and practical', audience: 'operators', styleNotes: ['explain the how', 'show the process', 'keep it grounded'] },
];

export const sampleProjects: ProjectPack[] = [
  { id: 'proj-1', title: 'Launch week repurpose pack', channel: 'LinkedIn + X + newsletter', assets: ['hook ideas', 'outline', 'email draft'], exportReady: true },
  { id: 'proj-2', title: 'Customer story bundle', channel: 'LinkedIn + blog + short thread', assets: ['story arc', 'quote cards', 'CTA'], exportReady: false },
];

export const sampleExports: ExportJob[] = [
  { id: 'exp-1', channel: 'LinkedIn', status: 'published', title: 'We shipped the beta in 14 days' },
  { id: 'exp-2', channel: 'X', status: 'editing', title: 'Three lessons from the first 10 customers' },
  { id: 'exp-3', channel: 'Newsletter', status: 'queued', title: 'What we learned from support tickets' },
];

export function buildVoiceProfile(voice: VoicePreset): VoiceProfile {
  return {
    name: voice.name,
    editRules: [
      'Keep it short and direct.',
      `Keep it ${voice.tone}.`,
      'Use short, direct sentences.',
      'Cut anything that sounds generic.',
    ],
    doNot: ['No filler intros', 'No vague growth speak', 'No generic AI tone'],
  };
}

export function buildContentPack(source: Source, voice: VoicePreset): ProjectPack {
  return {
    id: `${source.id}-${voice.id}`,
    title: `${source.title} → LinkedIn / X / newsletter pack`,
    channel: source.type === 'video' ? 'video clip + thread + newsletter' : 'LinkedIn + X + newsletter',
    assets: ['hook', 'outline', 'post draft', 'newsletter teaser'],
    exportReady: true,
  };
}

export function buildHistorySnapshot(exports: ExportJob[], projects: ProjectPack[]): HistorySnapshot {
  const totalExports = exports.length;
  const channelCounts = exports.reduce<Record<string, number>>((acc, entry) => {
    acc[entry.channel] = (acc[entry.channel] ?? 0) + 1;
    return acc;
  }, {});
  const topChannel = Object.entries(channelCounts).sort((left, right) => right[1] - left[1])[0]?.[0] ?? 'LinkedIn';

  return {
    totalExports,
    topChannel,
    nextAction: projects.some((project) => !project.exportReady)
      ? 'repurpose the next project and export the draft pack.'
      : 'pick the next source and repurpose it into one more content pack.',
  };
}

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
  stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Vercel'],
};
