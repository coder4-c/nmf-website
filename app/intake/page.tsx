"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Field, Pill, SectionHeading, inputClass } from "@/components/FormFields";

const goalOptions = [
  "Fat loss",
  "Muscle gain",
  "Lower body toning",
  "Core strength",
  "Mobility",
  "General health",
  "Conditioning",
  "Strength",
];

const trainingLevels = ["Beginner", "Intermediate", "Advanced", "Returning after break"];
const activityStatuses = ["Currently active", "Never trained consistently"];
const yesNo = ["Yes", "No"];
const yesNoUnsure = ["Yes", "No", "Unsure"];
const contactMethods = ["Text", "Email", "Phone"];

const initialState = {
  fullName: "",
  dob: "",
  phone: "",
  email: "",
  contactMethod: "",
  startDate: "",

  goals: [] as string[],
  goalOther: "",
  primaryGoalText: "",
  targetMeasurement: "",
  timeline: "",

  height: "",
  currentWeight: "",
  waist: "",
  hip: "",
  progressPhotos: "",

  trainingLevel: "",
  activityStatus: "",
  daysAvailable: "",
  preferredDays: "",
  sessionLength: "",
  equipment: "",

  injuries: "",
  medicalConditions: "",
  medications: "",
  movementsToAvoid: "",
  doctorClearance: "",

  foodsAvoid: "",
  allergies: "",
  proteins: "",
  carbs: "",
  vegetables: "",
  mealsPerDay: "",
  eatingSchedule: "",

  sleep: "",
  water: "",
  stressLevel: "5",
  checkInDay: "",
  biggestObstacle: "",

  agree: false,
  signatureName: "",
  signatureDate: "",
};

type FormState = typeof initialState;

export default function IntakePage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleGoal(goal: string) {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(goal) ? f.goals.filter((g) => g !== goal) : [...f.goals, goal],
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/intake", {
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
            Intake Received
          </span>
        </div>
        <h1 className="font-display mt-5 text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
          You&rsquo;re locked in, {form.fullName.split(" ")[0] || "there"}.
        </h1>
        <p className="mt-4 text-nmf-off">
          Your intake has been submitted. Next Mission Fitness will review it
          and follow up to confirm your plan.
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
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="tag-rule">
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-nmf-red">
          Client Intake Form
        </span>
      </div>
      <h1 className="font-display mt-5 text-4xl font-black uppercase tracking-tight text-nmf-white sm:text-5xl">
        Tell Us Everything
      </h1>
      <p className="mt-4 max-w-xl text-nmf-off">
        The more we know, the better your plan. This takes about 10 minutes —
        already enrolled clients complete this after their consultation.
      </p>

      <form onSubmit={handleSubmit}>
        <SectionHeading index={1} title="Client Information" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input required className={inputClass} value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)} />
          </Field>
          <Field label="Date of Birth">
            <input type="date" className={inputClass} value={form.dob}
              onChange={(e) => update("dob", e.target.value)} />
          </Field>
          <Field label="Phone Number">
            <input type="tel" className={inputClass} value={form.phone}
              onChange={(e) => update("phone", e.target.value)} />
          </Field>
          <Field label="Email" required>
            <input required type="email" className={inputClass} value={form.email}
              onChange={(e) => update("email", e.target.value)} />
          </Field>
          <Field label="Start Date">
            <input type="date" className={inputClass} value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)} />
          </Field>
          <Field label="Preferred Contact Method">
            <div className="flex flex-wrap gap-2 pt-1">
              {contactMethods.map((m) => (
                <Pill key={m} label={m} active={form.contactMethod === m}
                  onClick={() => update("contactMethod", m)} />
              ))}
            </div>
          </Field>
        </div>

        <SectionHeading index={2} title="Fitness Goal" />
        <Field label="Goals" hint="select all that apply">
          <div className="flex flex-wrap gap-2 pt-1">
            {goalOptions.map((g) => (
              <Pill key={g} label={g} active={form.goals.includes(g)} onClick={() => toggleGoal(g)} />
            ))}
          </div>
        </Field>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <Field label="Other goal">
            <input className={inputClass} value={form.goalOther}
              onChange={(e) => update("goalOther", e.target.value)} />
          </Field>
          <Field label="Target weight or measurement">
            <input className={inputClass} value={form.targetMeasurement}
              onChange={(e) => update("targetMeasurement", e.target.value)} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Primary goal in your own words">
            <textarea rows={3} className={inputClass} value={form.primaryGoalText}
              onChange={(e) => update("primaryGoalText", e.target.value)} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Timeline or event date">
            <input className={inputClass} value={form.timeline}
              onChange={(e) => update("timeline", e.target.value)} />
          </Field>
        </div>

        <SectionHeading index={3} title="Current Stats" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Height"><input className={inputClass} value={form.height}
            onChange={(e) => update("height", e.target.value)} /></Field>
          <Field label="Current weight"><input className={inputClass} value={form.currentWeight}
            onChange={(e) => update("currentWeight", e.target.value)} /></Field>
          <Field label="Waist measurement"><input className={inputClass} value={form.waist}
            onChange={(e) => update("waist", e.target.value)} /></Field>
          <Field label="Hip measurement"><input className={inputClass} value={form.hip}
            onChange={(e) => update("hip", e.target.value)} /></Field>
        </div>
        <div className="mt-5">
          <Field label="Progress photos submitted">
            <div className="flex gap-2 pt-1">
              {yesNo.map((v) => (
                <Pill key={v} label={v} active={form.progressPhotos === v}
                  onClick={() => update("progressPhotos", v)} />
              ))}
            </div>
          </Field>
        </div>

        <SectionHeading index={4} title="Training Background" />
        <Field label="Experience level">
          <div className="flex flex-wrap gap-2 pt-1">
            {trainingLevels.map((v) => (
              <Pill key={v} label={v} active={form.trainingLevel === v}
                onClick={() => update("trainingLevel", v)} />
            ))}
          </div>
        </Field>
        <div className="mt-5">
          <Field label="Current activity">
            <div className="flex flex-wrap gap-2 pt-1">
              {activityStatuses.map((v) => (
                <Pill key={v} label={v} active={form.activityStatus === v}
                  onClick={() => update("activityStatus", v)} />
              ))}
            </div>
          </Field>
        </div>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <Field label="Days available to train"><input className={inputClass} value={form.daysAvailable}
            onChange={(e) => update("daysAvailable", e.target.value)} /></Field>
          <Field label="Preferred workout days"><input className={inputClass} value={form.preferredDays}
            onChange={(e) => update("preferredDays", e.target.value)} /></Field>
          <Field label="Session length available"><input className={inputClass} value={form.sessionLength}
            onChange={(e) => update("sessionLength", e.target.value)} /></Field>
          <Field label="Equipment available"><input className={inputClass} value={form.equipment}
            onChange={(e) => update("equipment", e.target.value)} /></Field>
        </div>

        <SectionHeading index={5} title="Health and Limitations" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Injuries or pain areas">
            <textarea rows={2} className={inputClass} value={form.injuries}
              onChange={(e) => update("injuries", e.target.value)} />
          </Field>
          <Field label="Medical conditions to consider">
            <textarea rows={2} className={inputClass} value={form.medicalConditions}
              onChange={(e) => update("medicalConditions", e.target.value)} />
          </Field>
          <Field label="Medications affecting training or appetite">
            <textarea rows={2} className={inputClass} value={form.medications}
              onChange={(e) => update("medications", e.target.value)} />
          </Field>
          <Field label="Movements to avoid">
            <textarea rows={2} className={inputClass} value={form.movementsToAvoid}
              onChange={(e) => update("movementsToAvoid", e.target.value)} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Doctor clearance needed">
            <div className="flex gap-2 pt-1">
              {yesNoUnsure.map((v) => (
                <Pill key={v} label={v} active={form.doctorClearance === v}
                  onClick={() => update("doctorClearance", v)} />
              ))}
            </div>
          </Field>
        </div>

        <SectionHeading index={6} title="Nutrition Preferences" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Foods you do not eat">
            <textarea rows={2} className={inputClass} value={form.foodsAvoid}
              onChange={(e) => update("foodsAvoid", e.target.value)} />
          </Field>
          <Field label="Food allergies"><input className={inputClass} value={form.allergies}
            onChange={(e) => update("allergies", e.target.value)} /></Field>
          <Field label="Favorite proteins"><input className={inputClass} value={form.proteins}
            onChange={(e) => update("proteins", e.target.value)} /></Field>
          <Field label="Favorite carbs"><input className={inputClass} value={form.carbs}
            onChange={(e) => update("carbs", e.target.value)} /></Field>
          <Field label="Favorite vegetables"><input className={inputClass} value={form.vegetables}
            onChange={(e) => update("vegetables", e.target.value)} /></Field>
          <Field label="Meals per day preferred"><input className={inputClass} value={form.mealsPerDay}
            onChange={(e) => update("mealsPerDay", e.target.value)} /></Field>
        </div>
        <div className="mt-5">
          <Field label="Eating schedule">
            <input className={inputClass} value={form.eatingSchedule}
              onChange={(e) => update("eatingSchedule", e.target.value)} />
          </Field>
        </div>

        <SectionHeading index={7} title="Lifestyle and Accountability" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Average sleep per night"><input className={inputClass} value={form.sleep}
            onChange={(e) => update("sleep", e.target.value)} /></Field>
          <Field label="Water intake per day"><input className={inputClass} value={form.water}
            onChange={(e) => update("water", e.target.value)} /></Field>
          <Field label="Weekly check-in day"><input className={inputClass} value={form.checkInDay}
            onChange={(e) => update("checkInDay", e.target.value)} /></Field>
          <Field label={`Stress level: ${form.stressLevel} / 10`}>
            <input type="range" min={1} max={10} value={form.stressLevel} className="w-full accent-[var(--color-nmf-red)]"
              onChange={(e) => update("stressLevel", e.target.value)} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Biggest obstacle right now">
            <textarea rows={3} className={inputClass} value={form.biggestObstacle}
              onChange={(e) => update("biggestObstacle", e.target.value)} />
          </Field>
        </div>

        <SectionHeading index={8} title="Client Agreement" />
        <div className="cut-br border border-nmf-steel-light bg-nmf-steel p-6">
          <p className="text-sm leading-relaxed text-nmf-off">
            I understand this plan is for general fitness and nutrition
            coaching and is not medical treatment. I agree to communicate
            pain, medical concerns, food issues, and schedule changes so the
            plan can be adjusted safely.
          </p>
          <label className="mt-4 flex items-start gap-3 text-sm text-nmf-off">
            <input
              required
              type="checkbox"
              checked={form.agree}
              onChange={(e) => update("agree", e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-nmf-red)]"
            />
            <span>
              I agree to the above, the{" "}
              <Link href="/coaching-agreement" className="text-nmf-red hover:underline">
                Coaching Agreement
              </Link>{" "}
              and{" "}
              <Link href="/disclaimer" className="text-nmf-red hover:underline">
                Disclaimer
              </Link>
              . *
            </span>
          </label>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <Field label="Client Signature (type full name)" required>
              <input required className={inputClass} value={form.signatureName}
                onChange={(e) => update("signatureName", e.target.value)} />
            </Field>
            <Field label="Date">
              <input type="date" className={inputClass} value={form.signatureDate}
                onChange={(e) => update("signatureDate", e.target.value)} />
            </Field>
          </div>
        </div>

        {status === "error" && (
          <p className="mt-6 text-sm text-nmf-red">
            Something went wrong sending that. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="cut-br mt-10 bg-nmf-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-nmf-white transition-colors hover:bg-nmf-red-dim disabled:cursor-not-allowed disabled:opacity-60 enabled:cursor-pointer"
        >
          {status === "submitting" ? "Submitting..." : "Submit Intake Form"}
        </button>
      </form>
    </div>
  );
}
