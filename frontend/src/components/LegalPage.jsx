import useMeta from '../hooks/useMeta.js';

/** Shared layout for Privacy Policy and Terms. Sections: [{ heading, paragraphs?, items? }] */
export default function LegalPage({ title, description, updated, sections }) {
  useMeta(title, description);
  return (
    <article className="container-x max-w-3xl py-16 sm:py-24">
      <h1 className="text-4xl leading-tight sm:text-5xl">{title}</h1>
      <p className="para mt-4 text-base text-brand-green/80">Last updated: {updated}</p>
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.heading} aria-labelledby={`h-${s.heading.replace(/\W+/g, '-').toLowerCase()}`}>
            <h2 id={`h-${s.heading.replace(/\W+/g, '-').toLowerCase()}`} className="text-xl sm:text-2xl">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="para mt-3 text-base leading-relaxed text-brand-green/90 sm:text-lg">{p}</p>
            ))}
            {s.items && (
              <ul className="para mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-brand-green/90 sm:text-lg">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
