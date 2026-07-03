import Link from "next/link";

export type LegalSection = {
  heading: string;
  body: string | string[];
};

export default function LegalLayout({
  title,
  effectiveDate,
  intro,
  sections,
  contactNote,
}: {
  title: string;
  effectiveDate?: string;
  intro?: string;
  sections: LegalSection[];
  contactNote?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.15em] text-nmf-mute hover:text-nmf-red"
      >
        ← Back to home
      </Link>

      <div className="tag-rule mt-6">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
          Next Mission Fitness LLC
        </span>
      </div>

      <h1 className="font-display mt-4 text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
        {title}
      </h1>
      {effectiveDate && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-nmf-mute">
          Effective Date: {effectiveDate}
        </p>
      )}
      {intro && <p className="mt-6 text-nmf-off">{intro}</p>}

      <div className="mt-10 space-y-9">
        {sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-nmf-white">
              {i + 1}. {s.heading}
            </h2>
            {Array.isArray(s.body) ? (
              <ul className="mt-3 space-y-2">
                {s.body.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-nmf-off">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-nmf-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-nmf-off">{s.body}</p>
            )}
          </section>
        ))}
      </div>

      {contactNote && (
        <div className="mt-12 border-t border-nmf-steel-light pt-8 text-sm leading-relaxed text-nmf-off">
          {contactNote}
        </div>
      )}

      <p className="mt-12 font-mono text-xs uppercase tracking-[0.1em] text-nmf-mute">
        © {new Date().getFullYear()} Next Mission Fitness LLC. All Rights Reserved.
      </p>
    </div>
  );
}
