import { BUYER, LAUNCH, PROMISE, V2, WEDGE, buildContentPack, buildHistorySnapshot, buildVoiceProfile, sampleExports, sampleProjects, sampleSources, sampleVoices } from '../lib/product';
import { withBasePath } from "@/lib/site-path";

const pack = buildContentPack(sampleSources[0], sampleVoices[0]);
const voice = buildVoiceProfile(sampleVoices[0]);
const history = buildHistorySnapshot(sampleExports, sampleProjects);

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Founder Content Repurposing Workflow</p>
        <h1>{PROMISE}</h1>
        <p className="lead">{WEDGE} Built for {BUYER} who want one source turned into a clean multi-channel pack fast.</p>
        <div className="row">
          <a className="button" href={withBasePath('/app')}>Open dashboard</a>
          <a className="ghost" href={withBasePath('/app/projects')}>Preview project pack</a>
        </div>
      </section>

      <section className="grid cols-3">
        <article className="card"><p className="kicker">Exports</p><h2>{history.totalExports}</h2><p className="muted">Top channel: {history.topChannel}</p></article>
        <article className="card"><p className="kicker">Export ready</p><h2>{pack.exportReady ? 'yes' : 'no'}</h2><p className="muted">{pack.title}</p></article>
        <article className="card"><p className="kicker">Voice</p><h2>{voice.name}</h2><p className="muted">{voice.editRules[0]}</p></article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Final artifact</p>
          <h2>{pack.title}</h2>
          <p className="muted">Channel: {pack.channel}</p>
          <div>{pack.assets.map((asset) => <span key={asset} className="pill">{asset}</span>)}</div>
        </article>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>{history.nextAction}</h2>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Launch checklist</p>
          <ul className="list">{LAUNCH.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">What ships in v2</p>
          <div>{V2.map((item) => <span key={item} className="pill">{item}</span>)}</div>
        </article>
      </section>
    </main>
  );
}
