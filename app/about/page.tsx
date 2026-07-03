import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Next Mission Fitness",
  description:
    "Veteran-owned fitness and nutrition coaching built on discipline, structure, and accountability.",
};

const audience = [
  "Teens (with parental/guardian approval)",
  "Young adults",
  "Professionals",
  "Parents",
  "Military members & veterans",
  "First responders",
  "Adults over 50",
  "Seniors medically cleared for exercise",
  "Beginners through advanced trainees",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="tag-rule">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
          Veteran-Owned · Mission-Driven · Results-Focused
        </span>
      </div>
      <h1 className="font-display mt-5 text-5xl font-black uppercase tracking-tight text-nmf-white sm:text-6xl">
        About Us
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[220px_1fr]">
        <div>
          <span className="font-display block text-6xl font-black text-nmf-red">30</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-nmf-mute">
            Years of Military Service
          </span>
          <p className="mt-4 text-sm leading-relaxed text-nmf-mute">
            Founder Kevin Edmondson is a retired U.S. Army Sergeant Major.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-nmf-red">
              Mission Statement
            </h2>
            <p className="mt-3 leading-relaxed text-nmf-off">
              Next Mission Fitness exists to provide structured fitness and
              nutrition coaching that helps clients build stronger bodies,
              healthier habits, and measurable results through customized
              programming, accountability, and disciplined progression.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-nmf-red">
              Vision Statement
            </h2>
            <p className="mt-3 leading-relaxed text-nmf-off">
              Our vision is to become a trusted leader in transformation
              coaching by empowering individuals to take control of their
              health, elevate their confidence, and continuously improve
              through every phase of life.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-nmf-red">
              Our Story
            </h2>
            <div className="mt-3 space-y-4 leading-relaxed text-nmf-off">
              <p>
                Next Mission Fitness is a veteran owned fitness and nutrition
                coaching company built on the belief that real transformation
                requires more than generic workouts and meal plans. We
                provide personalized fitness and nutrition coaching designed
                around each client&rsquo;s goals, lifestyle, experience
                level, and available resources. Our approach combines
                structured training, intentional nutrition, accountability,
                and measurable progression to create sustainable results
                rather than short term fixes.
              </p>
              <p>
                Founded with the discipline, structure, and commitment
                developed through military service, Next Mission Fitness is
                dedicated to helping clients build stronger bodies, healthier
                habits, and greater confidence through every phase of their
                journey. Whether the goal is fat loss, muscle building, lower
                body toning, improved conditioning, or overall health, we
                provide customized plans, ongoing support, and practical
                strategies designed to fit real life.
              </p>
              <p className="font-display text-lg font-bold uppercase tracking-wide text-nmf-white">
                At Next Mission Fitness, the mission is simple: stronger
                today, better tomorrow.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="mt-16 border-t border-nmf-steel-light pt-12">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-nmf-white">
          Who We Serve
        </h2>
        <p className="mt-2 max-w-2xl text-nmf-mute">
          Coaching is built around the individual, not a single client type.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {audience.map((a) => (
            <span
              key={a}
              className="border border-nmf-steel-light px-3.5 py-2 font-mono text-xs uppercase tracking-[0.05em] text-nmf-off"
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-nmf-steel-light pt-10">
        <Link
          href="/apply"
          className="cut-br bg-nmf-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-white transition-colors hover:bg-nmf-red-dim"
        >
          Start Your Mission
        </Link>
        <Link
          href="/services"
          className="cut-br border border-nmf-steel-light px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-off transition-colors hover:border-nmf-red hover:text-nmf-red"
        >
          See Coaching Options
        </Link>
      </div>
    </div>
  );
}
