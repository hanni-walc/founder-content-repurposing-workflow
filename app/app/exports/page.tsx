import { sampleExports, sampleProjects } from '../../../lib/product';

export default function ExportsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Exports</p>
        <h1>Queue the final publish-ready assets.</h1>
        <p className="lead">See which drafts are published, editing, or ready for the next export cycle.</p>
      </section>

      <section className="card">
        <table className="table">
          <thead>
            <tr><th>Title</th><th>Channel</th><th>Status</th></tr>
          </thead>
          <tbody>
            {sampleExports.map((item) => (
              <tr key={item.id}>
                <td><strong>{item.title}</strong></td>
                <td>{item.channel}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <p className="kicker">Projects ready to export</p>
        <div>{sampleProjects.map((project) => <span key={project.id} className="pill">{project.title}</span>)}</div>
      </section>
    </main>
  );
}
