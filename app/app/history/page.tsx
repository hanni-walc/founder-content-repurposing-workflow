import { buildHistorySnapshot, sampleExports, sampleProjects } from '../../../lib/product';

const history = buildHistorySnapshot(sampleExports, sampleProjects);

export default function HistoryPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">History</p>
        <h1>Track what got exported and what comes next.</h1>
        <p className="lead">The history view keeps the workflow honest about what has already been shipped.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Snapshot</p>
          <h2>{history.topChannel}</h2>
          <p className="muted">{history.nextAction}</p>
        </article>
        <article className="card">
          <p className="kicker">Totals</p>
          <h2>{history.totalExports} exports</h2>
          <p className="muted">Keep the queue moving one source at a time.</p>
        </article>
      </section>
    </main>
  );
}
