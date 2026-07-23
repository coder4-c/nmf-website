import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Next Mission Fitness",
  description:
    "Online, in-person, and hybrid fitness and nutrition coaching. Consultation-first - programs start as low as $125.",
};

const focusAreas = [
  "Fat Loss",
  "Muscle Gain",
  "Lower Body Toning",
  "Core Strength",
  "Mobility",
  "General Health",
  "Conditioning",
  "Strength",
];

const formats = [
  {
    name: "Online Coaching",
    desc: "Custom programming and nutrition guidance delivered remotely, with structured check-ins wherever you're training.",
  },
  {
    name: "In-Person Coaching",
    desc: "Hands-on coaching in San Antonio, TX with direct supervision, form correction, and face-to-face accountability.",
  },
  {
    name: "Hybrid Coaching",
    desc: "A blend of in-person sessions and remote programming for clients who want structure on both sides of the gym door.",
  },
];

const included = [
  "Fitness programming",
  "Nutrition guidance",
  "Regular check-ins",
  "Accountability support",
  "Progress review",
  "Plan adjustments",
  "Educational resources",
  "The Mission Kit",
];

const faqs = [
  {
    q: "How much does coaching cost?",
    a: "Coaching programs start as low as $125. Final pricing depends on the service and level of support you need, and is confirmed after a short consultation - not before.",
  },
  {
    q: "Do I have to talk to someone before signing up?",
    a: "Yes. Next Mission Fitness uses a consultation-first model, so a short conversation happens before a service is recommended, a client is accepted, or final pricing is given.",
  },
  {
    q: "Is this medical advice?",
    a: "No. Coaching is educational and accountability-based. It is not medical advice, diagnosis, or treatment. You should consult a qualified healthcare provider before starting any exercise or nutrition program, especially with an existing medical condition.",
  },
  {
    q: "What formats are available?",
    a: "Online, in-person (San Antonio, TX), and hybrid coaching, depending on what fits your schedule and goals.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="tag-rule">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
          Services
        </span>
      </div>
      <h1 className="font-display mt-5 max-w-2xl text-5xl font-black uppercase tracking-tight text-nmf-white sm:text-6xl">
        Coaching built around your mission
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-nmf-off">
        Every program starts with a consultation, not a price tag - so the
        plan actually fits your goals, lifestyle, and experience level.
      </p>

      {/* Formats */}
      <section className="mt-14 grid gap-5 sm:grid-cols-3">
        {formats.map((f) => (
          <div key={f.name} className="cut-br border border-nmf-steel-light bg-nmf-steel p-7">
            <p className="font-display text-xl font-bold uppercase tracking-wide text-nmf-white">
              {f.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-nmf-mute">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Focus areas */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-nmf-white">
          Coaching Focus
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              key={area}
              className="cut-br-sm border border-nmf-steel-light px-5 py-6 text-center"
            >
              <span className="font-display text-base font-bold uppercase tracking-wide text-nmf-white">
                {area}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What's included + pricing note */}
      <section className="mt-16 grid gap-10 border-t border-nmf-steel-light pt-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-nmf-white">
            What&rsquo;s Included
          </h2>
          <ul className="mt-5 space-y-2.5">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-nmf-off">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-nmf-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="cut-br border border-nmf-red/40 bg-nmf-red/[0.06] p-7">
          <p className="font-display text-lg font-bold uppercase tracking-wide text-nmf-white">
            Pricing
          </p>
          <p className="mt-3 text-3xl font-black text-nmf-red">Starting at $125</p>
          <p className="mt-3 text-sm leading-relaxed text-nmf-mute">
            Final pricing depends on the selected service and level of
            support. A consultation comes first - no full pricing list is
            published, so your recommendation is built for you.
          </p>
          <Link
            href="/apply"
            className="cut-br mt-6 inline-block bg-nmf-red px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-nmf-white transition-colors hover:bg-nmf-red-dim"
          >
            Start Your Mission
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 border-t border-nmf-steel-light pt-12">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-nmf-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-nmf-steel-light border-y border-nmf-steel-light">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold uppercase tracking-wide text-nmf-white">
                {f.q}
                <span className="ml-4 shrink-0 font-mono text-nmf-red group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-nmf-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
