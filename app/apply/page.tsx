"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Field, Pill, inputClass } from "@/components/FormFields";

const goals = [
  "Fat loss",
  "Muscle gain",
  "Lower body toning",
  "Core strength",
  "Mobility",
  "General health",
  "Conditioning",
  "Strength",
];

const formats = ["Online", "In-person (San Antonio, TX)", "Hybrid", "Not sure yet"];
const contactMethods = ["Text", "Email", "Phone"];

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    goal: "",
    format: "",
    contactMethod: "",
    notes: "",
    agree: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="tag-rule">
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
            Application Received
          </span>
        </div>
        <h1 className="font-display mt-5 text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
          Mission received.
        </h1>
        <p className="mt-4 text-nmf-off">
          Thanks, {form.fullName.split(" ")[0] || "there"}. Next Mission
          Fitness will reach out to schedule your consultation using the
          contact method you selected.
        </p>
        <Link
          href="/"
          className="cut-br mt-8 inline-block border border-nmf-steel-light px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-nmf-off hover:border-nmf-red hover:text-nmf-red"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="tag-rule">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
          Step 1 of 9 - Start Your Mission
        </span>
      </div>
      <h1 className="font-display mt-5 text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
        Apply for Coaching
      </h1>
      <p className="mt-4 text-nmf-off">
        A few quick questions so we can schedule your consultation. Full
        pricing and program details come after that conversation.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input
              required
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Phone Number">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Preferred Contact Method">
            <div className="flex flex-wrap gap-2 pt-1">
              {contactMethods.map((m) => (
                <Pill
                  key={m}
                  label={m}
                  active={form.contactMethod === m}
                  onClick={() => update("contactMethod", m)}
                />
              ))}
            </div>
          </Field>
        </div>

        <Field label="Primary Goal">
          <div className="flex flex-wrap gap-2 pt-1">
            {goals.map((g) => (
              <Pill
                key={g}
                label={g}
                active={form.goal === g}
                onClick={() => update("goal", g)}
              />
            ))}
          </div>
        </Field>

        <Field label="Preferred Coaching Format">
          <div className="flex flex-wrap gap-2 pt-1">
            {formats.map((f) => (
              <Pill
                key={f}
                label={f}
                active={form.format === f}
                onClick={() => update("format", f)}
              />
            ))}
          </div>
        </Field>

        <Field label="Anything else we should know?">
          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={inputClass}
          />
        </Field>

        <label className="flex items-start gap-3 text-sm text-nmf-mute">
          <input
            required
            type="checkbox"
            checked={form.agree}
            onChange={(e) => update("agree", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-nmf-red)]"
          />
          <span>
            I understand Next Mission Fitness uses a consultation-first
            model and that coaching is not medical care. See the{" "}
            <Link href="/disclaimer" className="text-nmf-red hover:underline">
              Disclaimer
            </Link>
            .
          </span>
        </label>

        {status === "error" && (
          <p className="text-sm text-nmf-red">
            Something went wrong sending that. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="cut-br bg-nmf-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-white transition-colors hover:bg-nmf-red-dim disabled:cursor-not-allowed disabled:opacity-60 enabled:cursor-pointer w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}


