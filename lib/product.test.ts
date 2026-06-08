import { describe, expect, it } from 'vitest';
import {
  buildContentPack,
  buildHistorySnapshot,
  buildVoiceProfile,
  sampleExports,
  sampleProjects,
  sampleSources,
  sampleVoices,
} from './product';

describe('buildContentPack', () => {
  it('turns one source into a usable repurposing pack', () => {
    const pack = buildContentPack(sampleSources[0], sampleVoices[0]);

    expect(pack.title).toContain('LinkedIn');
    expect(pack.assets.length).toBeGreaterThan(0);
    expect(pack.exportReady).toBe(true);
  });
});

describe('buildVoiceProfile', () => {
  it('captures the founder voice in practical editing language', () => {
    const voice = buildVoiceProfile(sampleVoices[0]);

    expect(voice.name).toContain('Founder');
    expect(voice.editRules[0]).toContain('short');
  });
});

describe('buildHistorySnapshot', () => {
  it('summarizes exported content with a clear next action', () => {
    const snapshot = buildHistorySnapshot(sampleExports, sampleProjects);

    expect(snapshot.totalExports).toBeGreaterThan(0);
    expect(snapshot.nextAction).toContain('repurpose');
    expect(snapshot.topChannel).toBeTruthy();
  });
});
