import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Next Mission Fitness",
};

const sections: LegalSection[] = [
  {
    heading: "General Disclaimer",
    body: "The information, coaching, fitness plans, nutrition guidance, resources, website content, client portal content, and educational materials provided by Next Mission Fitness LLC are for general educational and informational purposes only.",
  },
  {
    heading: "Not Medical Advice",
    body: "Next Mission Fitness LLC does not provide medical advice, medical diagnosis, treatment, physical therapy, rehabilitation, psychological counseling, or licensed healthcare services. Nothing provided by Next Mission Fitness LLC should be interpreted as medical advice or a substitute for advice from a qualified healthcare professional.",
  },
  {
    heading: "Consult a Healthcare Provider",
    body: "Clients should consult with a qualified healthcare provider before beginning any exercise, nutrition, supplement, weight loss, conditioning, or wellness program, especially if they have medical conditions, injuries, pregnancy, recent surgery, medications, cardiovascular concerns, kidney disease, diabetes, high blood pressure, pain, or any other health issue.",
  },
  {
    heading: "Assumption of Risk",
    body: "Participation in exercise, resistance training, cardiovascular activity, mobility work, nutrition changes, supplementation, body composition efforts, or any coaching-related activity involves inherent risk. Risks may include soreness, strains, sprains, falls, dehydration, dizziness, cardiovascular complications, injury, illness, or other adverse outcomes. Participation is voluntary and performed at the client's own risk.",
  },
  {
    heading: "Client Responsibility",
    body: "Clients are responsible for using proper exercise technique, selecting appropriate resistance, staying hydrated, resting when needed, communicating pain or concerns, following medical guidance, and stopping activity immediately if abnormal symptoms occur.",
  },
  {
    heading: "Nutrition Disclaimer",
    body: "Nutrition guidance is intended for general education and lifestyle support. Next Mission Fitness LLC does not diagnose, treat, or prescribe for medical conditions. Meal plans, macro targets, food suggestions, and supplement discussions should be reviewed by a qualified healthcare provider when appropriate.",
  },
  {
    heading: "Supplement Disclaimer",
    body: "Any supplement information is educational only. Clients are responsible for reviewing ingredients, allergies, medication interactions, health conditions, and physician recommendations before using any supplement.",
  },
  {
    heading: "No Guaranteed Results",
    body: "Results are not guaranteed. Progress depends on consistency, effort, adherence, genetics, sleep, recovery, stress, lifestyle, medical conditions, medications, and other individual factors.",
  },
  {
    heading: "Minors",
    body: "Teenage clients may participate only with parental or legal guardian approval. Parents or guardians are responsible for ensuring that participation is appropriate and that any needed medical clearance is obtained.",
  },
  {
    heading: "Online Coaching Limitations",
    body: "Online coaching does not allow the same direct supervision as in-person coaching. Clients participating remotely are responsible for exercising safely, maintaining an appropriate environment, and seeking assistance when needed.",
  },
  {
    heading: "Emergency Situations",
    body: "If a client experiences chest pain, severe shortness of breath, fainting, severe dizziness, sudden weakness, unusual pain, or other emergency symptoms, they should stop activity immediately and seek emergency medical assistance.",
  },
  {
    heading: "Contact",
    body: "Questions about this Disclaimer may be directed to Next Mission Fitness LLC using the details below.",
  },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      effectiveDate="June 19, 2026"
      sections={sections}
      contactNote={
        <>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-nmf-white">
            Next Mission Fitness LLC
          </p>
          <p className="mt-1">Website: www.nextmissionfit.com</p>
          <p>
            Email:{" "}
            <a href="mailto:info@nextmissionfit.com" className="text-nmf-red hover:underline">
              info@nextmissionfit.com
            </a>
          </p>
        </>
      }
    />
  );
}
