import { buildContentPack, sampleSources, sampleVoices } from '../../../lib/product';

const pack = buildContentPack(sampleSources[0], sampleVoices[0]);

export default function ProjectsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Projects</p>
        <h1>One source, one repurposing pack.</h1>
        <p className="lead">The final artifact is a ready-to-edit multi-channel pack you can publish with minimal cleanup.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Pack</p>
          <h2>{pack.title}</h2>
          <p className="muted">Channel: {pack.channel}</p>
        </article>
        <article className="card">
          <p className="kicker">Assets</p>
          <div>{pack.assets.map((asset) => <span key={asset} className="pill">{asset}</span>)}</div>
        </article>
      </section>
    </main>
  );
}
