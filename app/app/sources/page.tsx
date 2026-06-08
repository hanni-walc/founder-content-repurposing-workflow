import { sampleSources } from '../../../lib/product';

export default function SourcesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Sources</p>
        <h1>Paste a source and start a pack.</h1>
        <p className="lead">Each source can become a thread, a newsletter, and a LinkedIn post without rewriting from scratch.</p>
      </section>

      <section className="grid cols-2">
        {sampleSources.map((source) => (
          <article key={source.id} className="card">
            <p className="kicker">{source.type}</p>
            <h2>{source.title}</h2>
            <p className="muted">{source.topic} · {source.length}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
