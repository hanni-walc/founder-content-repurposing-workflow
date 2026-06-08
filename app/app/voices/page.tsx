import { buildVoiceProfile, sampleVoices } from '../../../lib/product';

const voice = buildVoiceProfile(sampleVoices[0]);

export default function VoicesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Brand voices</p>
        <h1>Keep output sounding like the founder, not a tool.</h1>
        <p className="lead">Voice presets make editing fast while keeping the final content grounded and specific.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Preset</p>
          <h2>{voice.name}</h2>
          <ul className="list">{voice.editRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">Avoid</p>
          <ul className="list">{voice.doNot.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>
    </main>
  );
}
