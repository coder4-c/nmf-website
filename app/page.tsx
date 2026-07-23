import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const positioning = ["Veteran-Owned", "Mission-Driven", "Results-Focused"];

const experienceSteps = [
  "Start Your Mission",
  "Consultation",
  "Intake",
  "Recommendation",
  "Enrollment",
  "Payment",
  "Mission Kit",
  "Coaching",
  "Results",
];

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

const missionKit = [
  "Mission Binder",
  "Welcome Letter",
  "Journal",
  "Shaker Bottle",
  "Resistance Bands",
  "Tape Measure",
  "Challenge Coin",
  "Progress Tracking Materials",
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

export default function Home() {
  return (
    <>
      {/* HERO - full-screen, ambient glow, no watermark risk (built, not filmed) */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-nmf-steel-light">
        <div className="hero-slash pointer-events-none absolute inset-y-0 right-0 w-full bg-nmf-red/[0.07] sm:w-3/4" />
        <div
          className="ambient-glow pointer-events-none -right-24 -top-32 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px]"
          aria-hidden="true"
        />
        <div
          className="ambient-glow pointer-events-none -bottom-40 -left-32 h-[300px] w-[300px] opacity-60"
          style={{ animationDelay: "3s" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 sm:block md:-right-16 lg:right-0">
          <Image
            src="/brand/nmf-mark-transparent.png"
            alt=""
            width={856}
            height={207}
            className="mark-drift h-auto w-[480px] opacity-[0.14] md:w-[620px] lg:w-[760px]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <div className="tag-rule max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-nmf-red whitespace-normal break-words">
              {positioning.join(" · ")}
            </span>
          </div>

          <h1 className="font-display text-balance mt-6 max-w-3xl text-6xl font-black uppercase leading-[0.95] tracking-tight text-nmf-white sm:text-7xl md:text-8xl">
            Stronger <span className="text-nmf-red">today.</span>
            <br />
            Better tomorrow.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nmf-off">
            Structured fitness and nutrition coaching that helps you build a
            stronger body, healthier habits, and measurable results
            through customized programming, accountability, and disciplined
            progression.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="cut-br bg-nmf-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-white transition-all hover:-translate-y-0.5 hover:bg-nmf-red-dim hover:shadow-[0_16px_40px_-12px_rgba(222,6,22,0.45)] block w-full sm:inline-block sm:w-auto text-center"
            >
              Start Your Mission
            </Link>
            <Link
              href="/services"
              className="cut-br border border-nmf-steel-light px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-off transition-all hover:-translate-y-0.5 hover:border-nmf-red hover:text-nmf-red block w-full sm:inline-block sm:w-auto text-center"
            >
              See Coaching Options
            </Link>
          </div>
        </div>

        <a
          href="#how-it-works"
          className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 text-nmf-mute transition-colors hover:text-nmf-red"
          aria-label="Scroll to learn how coaching works"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* HOW IT WORKS - genuinely sequential, numbering earns its place */}
      <section id="how-it-works" className="border-b border-nmf-steel-light bg-nmf-steel/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="tag-rule">
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
                The Client Experience
              </span>
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold uppercase tracking-tight text-nmf-white sm:text-4xl">
              One mission, nine clear steps
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ol className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-4">
              {experienceSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="flex items-center gap-2 border border-nmf-steel-light bg-nmf-black px-3.5 py-2 transition-colors hover:border-nmf-red">
                    <span className="font-mono text-[11px] text-nmf-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-nmf-off">
                      {step}
                    </span>
                  </span>
                  {i < experienceSteps.length - 1 && (
                    <span aria-hidden className="text-nmf-mute">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS - not sequential, plain grid */}
      <section id="focus-areas" className="border-b border-nmf-steel-light">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="tag-rule">
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
                Coaching Focus
              </span>
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold uppercase tracking-tight text-nmf-white sm:text-4xl">
              Whatever the goal, the plan is built around you
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {focusAreas.map((area, i) => (
              <Reveal key={area} delay={i * 60}>
                <div className="hover-lift cut-br-sm border border-nmf-steel-light bg-nmf-steel px-5 py-6 text-center hover:border-nmf-red">
                  <span className="font-display text-base font-bold uppercase tracking-wide text-nmf-white">
                    {area}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER / WHY NMF */}
      <section id="founder" className="border-b border-nmf-steel-light bg-nmf-steel/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[280px_1fr]">
          <Reveal>
            <span className="font-display block text-7xl font-black text-nmf-red">30</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-nmf-mute">
              Years of Military Service
            </span>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className="tag-rule">
                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
                  Why Next Mission Fitness
                </span>
              </div>
              <h2 className="font-display mt-4 text-3xl font-bold uppercase tracking-tight text-nmf-white sm:text-4xl">
                Built on discipline. Led by experience.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-nmf-off">
                Next Mission Fitness was founded by Kevin Edmondson, a retired
                U.S. Army Sergeant Major, on the discipline, structure, and
                commitment developed through military service. That same
                standard shapes every program: real transformation takes more
                than a generic workout and meal plan, so every client gets
                programming built around their goals, lifestyle, experience
                level, and available resources.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    t: "Structured Programming",
                    d: "Plans built around your goals, lifestyle, and resources - not a template.",
                  },
                  {
                    t: "Real Accountability",
                    d: "Regular check-ins keep the plan honest and adjust it as life happens.",
                  },
                  {
                    t: "Measurable Progression",
                    d: "Disciplined, tracked progress toward sustainable results, not short-term fixes.",
                  },
                ].map((item) => (
                  <div key={item.t} className="border-t-2 border-nmf-red pt-3">
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-nmf-white">
                      {item.t}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-nmf-mute">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION KIT */}
      <section id="mission-kit" className="border-b border-nmf-steel-light">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="tag-rule">
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
                Every Enrollment Includes
              </span>
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold uppercase tracking-tight text-nmf-white sm:text-4xl">
              The Mission Kit
            </h2>
            <p className="mt-4 max-w-2xl text-nmf-off">
              A physical kit to keep you tracking, accountable, and equipped
              from day one.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-nmf-steel-light sm:grid-cols-4">
              {missionKit.map((item) => (
                <div
                  key={item}
                  className="bg-nmf-black px-4 py-8 text-center transition-colors duration-300 hover:bg-nmf-steel"
                >
                  <span className="text-sm font-medium text-nmf-off">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="border-b border-nmf-steel-light bg-nmf-steel/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="tag-rule">
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
                Coaching Formats
              </span>
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold uppercase tracking-tight text-nmf-white sm:text-4xl">
              Train the way that fits your life
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <div className="hover-lift cut-br border border-nmf-steel-light bg-nmf-black p-7">
                  <p className="font-display text-xl font-bold uppercase tracking-wide text-nmf-white">
                    {f.name}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-nmf-mute">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div
          className="ambient-glow pointer-events-none left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          aria-hidden="true"
        />
        <Reveal className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-balance text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
            Your next mission starts with one step.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-nmf-mute">
            Coaching programs start as low as $125. A short consultation comes
            first, so your plan and pricing fit you.
          </p>
          <Link
            href="/apply"
            className="cut-br mt-8 inline-block bg-nmf-red px-9 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-white transition-all hover:-translate-y-0.5 hover:bg-nmf-red-dim hover:shadow-[0_16px_40px_-12px_rgba(222,6,22,0.45)] w-full sm:w-auto text-center"
          >
            Start Your Mission
          </Link>
        </Reveal>
      </section>
    </>
  );
}