import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Coaching Agreement | Next Mission Fitness",
};

const sections: LegalSection[] = [
  {
    heading: "Parties",
    body: "This Coaching Agreement is between Next Mission Fitness LLC and the client enrolling in coaching services. The public-facing brand may be referred to as Next Mission Fitness.",
  },
  {
    heading: "Coaching Services",
    body: "Depending on the package selected, coaching services may include fitness programming, nutrition guidance, check-ins, accountability support, progress review, plan adjustments, educational resources, in-person coaching, online coaching, hybrid coaching, and client portal access.",
  },
  {
    heading: "Consultation and Enrollment",
    body: "Next Mission Fitness LLC uses a consultation-first model. A consultation may be required before recommending a service, accepting a client, or providing final pricing. Coaching programs may start as low as $125, but final pricing depends on the selected service and level of support.",
  },
  {
    heading: "Client Responsibilities",
    body: [
      "Provide complete and accurate intake information",
      "Disclose injuries, medical conditions, limitations, medications, allergies, and concerns",
      "Communicate pain, discomfort, schedule issues, food issues, or barriers to adherence",
      "Complete check-ins when required",
      "Use safe exercise technique and appropriate resistance",
      "Stop exercise immediately if abnormal symptoms occur",
      "Seek medical clearance when appropriate",
    ],
  },
  {
    heading: "Coach Responsibilities",
    body: [
      "Provide coaching services according to the selected package",
      "Create or adjust plans based on available client information",
      "Review check-ins when included in the package",
      "Provide reasonable guidance, accountability, and education",
      "Communicate within the response expectations of the selected package",
    ],
  },
  {
    heading: "Communication Expectations",
    body: "Communication methods may include email, text, client portal, video call, phone call, or other approved channels. Response times may vary based on the coaching package selected, business hours, and availability.",
  },
  {
    heading: "Check-Ins and Progress Tracking",
    body: "Clients may be asked to submit weight, measurements, progress photos, training feedback, nutrition adherence, sleep, energy, stress, and other information. These details help guide coaching recommendations and plan adjustments.",
  },
  {
    heading: "Plan Adjustments",
    body: "Plan adjustments may be provided based on progress, feedback, adherence, availability, equipment, recovery, and client goals. Adjustment frequency depends on the selected coaching package.",
  },
  {
    heading: "Payments",
    body: "Clients agree to pay all fees associated with the selected service. Payments may be made online through Stripe or another approved processor. Recurring services may require automatic payments. Missed or failed payments may result in suspended services or portal access.",
  },
  {
    heading: "Cancellations and Refunds",
    body: "Cancellation, refund, and rescheduling terms should be confirmed in the selected package, invoice, payment page, or written enrollment communication. Delivered plans, completed consultations, digital products, and coaching already performed may be non-refundable unless otherwise stated in writing.",
  },
  {
    heading: "Health and Safety",
    body: "Coaching is not medical care. Clients should consult a qualified healthcare provider before starting when appropriate. Clients assume responsibility for their own participation, health decisions, exercise environment, and safety.",
  },
  {
    heading: "No Guaranteed Results",
    body: "Next Mission Fitness LLC will provide coaching, structure, accountability, and guidance, but results are not guaranteed. Client results depend on many individual factors including consistency, effort, recovery, nutrition adherence, lifestyle, genetics, and medical considerations.",
  },
  {
    heading: "Confidentiality",
    body: "Next Mission Fitness LLC will use reasonable care to protect client information. Client information may be used to provide services, process payments, maintain records, and support business operations. Public use of testimonials or progress photos requires appropriate permission.",
  },
  {
    heading: "Intellectual Property",
    body: "All plans, guides, forms, templates, videos, check-in systems, and resources are owned by Next Mission Fitness LLC. Materials are for the client's personal use only and may not be copied, sold, distributed, or shared without written permission.",
  },
  {
    heading: "Termination",
    body: "Next Mission Fitness LLC may terminate or suspend services for nonpayment, unsafe behavior, harassment, dishonesty, misuse of materials, portal misuse, or violation of this agreement. Clients may request cancellation according to the terms of their selected package.",
  },
  {
    heading: "Agreement Acknowledgment",
    body: "By enrolling, paying, signing, or participating in services, the client acknowledges understanding of this Coaching Agreement, the Disclaimer, and any package-specific terms provided by Next Mission Fitness LLC.",
  },
];

export default function CoachingAgreementPage() {
  return (
    <LegalLayout
      title="Coaching Agreement"
      effectiveDate="June 19, 2026"
      sections={sections}
      contactNote={
        <>
          <div className="cut-br border border-nmf-steel-light bg-nmf-steel p-6">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-nmf-white">
              17. Signature
            </p>
            <p className="mt-2 text-sm text-nmf-mute">
              This page is provided for review before enrollment. Client and
              representative signatures are collected electronically as part
              of the enrollment and payment process, not on this page.
            </p>
          </div>
          <p className="mt-8 font-display text-sm font-bold uppercase tracking-wide text-nmf-white">
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
