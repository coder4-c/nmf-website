import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Next Mission Fitness",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing the website, submitting information, scheduling a consultation, using the client portal, purchasing services, or participating in coaching provided by Next Mission Fitness LLC, you agree to these Terms of Service.",
  },
  {
    heading: "Business Identity",
    body: "Next Mission Fitness LLC is the legal business entity. The public-facing brand may be referred to as Next Mission Fitness.",
  },
  {
    heading: "Services Provided",
    body: "Customized fitness programming, customized nutrition guidance, accountability coaching, online coaching, in-person coaching, hybrid coaching, consultations, client resources, progress tracking, and client portal access when available.",
  },
  {
    heading: "Consultation-First Model",
    body: "Next Mission Fitness LLC may require a consultation before recommending a coaching service or accepting a client. Coaching programs may start as low as $125.",
  },
  {
    heading: "No Medical Services",
    body: "Services are educational and coaching-based only and do not constitute medical advice, diagnosis, treatment, rehabilitation, or healthcare services.",
  },
  {
    heading: "Client Responsibility",
    body: "Clients are responsible for providing accurate information and disclosing relevant injuries, limitations, medications, allergies, and medical concerns.",
  },
  {
    heading: "Results Disclaimer",
    body: "Results are not guaranteed and vary based on consistency, effort, adherence, genetics, recovery, lifestyle, and other individual factors.",
  },
  {
    heading: "Payments and Billing",
    body: "Payments may be processed through Stripe or another approved payment processor. Clients agree to pay all fees associated with selected services.",
  },
  {
    heading: "Refunds, Cancellations, and Rescheduling",
    body: "Refund, cancellation, and rescheduling terms should be stated in the specific service agreement, checkout page, invoice, or written communication provided at enrollment. Unless otherwise stated in writing, services already performed or provided, completed consultations, delivered plans, digital products, coaching services, coaching materials, and resources are non-refundable.",
  },
  {
    heading: "Client Portal Use",
    body: "Clients are responsible for maintaining the confidentiality of login credentials and may not share portal access.",
  },
  {
    heading: "Intellectual Property",
    body: "All plans, guides, forms, videos, graphics, templates, and resources are owned by Next Mission Fitness LLC and are for personal client use only.",
  },
  {
    heading: "Social Media and Testimonials",
    body: "Client testimonials, transformation stories, or progress photos will only be used publicly with appropriate permission.",
  },
  {
    heading: "Website and Portal Availability",
    body: "Next Mission Fitness LLC does not guarantee uninterrupted website or portal access.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Next Mission Fitness LLC is not liable for injuries, damages, losses, health outcomes, lack of results, business interruptions, data loss, or third-party platform issues.",
  },
  {
    heading: "Changes to Terms",
    body: "Next Mission Fitness LLC may update these Terms of Service at any time.",
  },
  {
    heading: "Contact",
    body: "Questions about these Terms of Service may be directed to Next Mission Fitness LLC using the details below.",
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
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
