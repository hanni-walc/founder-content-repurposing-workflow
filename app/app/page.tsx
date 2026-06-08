import { buildHistorySnapshot, sampleExports, sampleProjects } from '../../lib/product';
import { withBasePath } from "@/lib/site-path";

const history = buildHistorySnapshot(sampleExports, sampleProjects);

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Turn one source into a complete content pack.</h1>
        <p className="lead">Work from source to publishable assets without leaving the workflow behind.</p>
        <div className="row">
          <a className="button" href={withBasePath('/app/sources')}>Add source</a>
          <a className="ghost" href={withBasePath('/app/exports')}>View exports</a>
        </div>
      </section>

      <section className="stats">
        <div className="stat"><strong>{history.totalExports}</strong><span className="muted">exports</span></div>
        <div className="stat"><strong>{history.topChannel}</strong><span className="muted">top channel</span></div>
        <div className="stat"><strong>{sampleProjects.length}</strong><span className="muted">projects</span></div>
        <div className="stat"><strong>{sampleProjects.filter((project) => project.exportReady).length}</strong><span className="muted">ready to export</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>{history.nextAction}</h2>
        </article>
        <article className="card">
          <p className="kicker">What this replaces</p>
          <ul className="list">
            <li>Manual paste-and-edit loops</li>
            <li>Content ideas trapped in notes</li>
            <li>Random drafts with no workflow</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
