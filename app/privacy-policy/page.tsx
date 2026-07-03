import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Mission Fitness",
};

const sections: LegalSection[] = [
  {
    heading: "Purpose",
    body: "Next Mission Fitness LLC respects your privacy and is committed to protecting the personal information you provide through our website, client portal, consultations, applications, coaching services, forms, email communications, payment systems, and related business operations. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices you have regarding your information.",
  },
  {
    heading: "Information We May Collect",
    body: "We may collect personal information you voluntarily provide, including your name, email address, phone number, age, height, weight, fitness goals, training history, nutrition preferences, medical considerations, injuries or limitations, progress photos, measurements, consultation responses, payment information, and communication preferences. We may also collect website usage data such as device type, browser type, pages visited, referral source, and general analytics information.",
  },
  {
    heading: "How We Use Information",
    body: "Next Mission Fitness LLC may use collected information to respond to inquiries, schedule consultations, evaluate coaching needs, create customized fitness and nutrition plans, provide coaching services, manage client accounts, process payments, send coaching updates, deliver resources, improve website performance, maintain client records, support business operations, and comply with applicable legal or administrative requirements.",
  },
  {
    heading: "Health and Fitness Information",
    body: "Information related to fitness goals, measurements, progress photos, nutrition preferences, injuries, medications, or medical considerations is used only to help provide appropriate coaching guidance and support. Next Mission Fitness LLC does not provide medical advice, diagnosis, treatment, physical therapy, or licensed healthcare services. Clients should consult a qualified healthcare provider before beginning any exercise or nutrition program when appropriate.",
  },
  {
    heading: "Payment Information",
    body: "Payments may be processed through third-party payment processors such as Stripe or other secure payment platforms. Next Mission Fitness LLC does not store full credit card numbers on its own systems. Payment processors may collect and store payment information according to their own privacy policies and security practices.",
  },
  {
    heading: "Client Portal Information",
    body: "If a client portal is used, client information may include login credentials, uploaded documents, workout plans, nutrition plans, check-in responses, progress photos, measurements, messages, appointment information, payment records, and coaching resources. Clients are responsible for keeping login credentials confidential and notifying Next Mission Fitness LLC if they suspect unauthorized access.",
  },
  {
    heading: "Email and Marketing Communications",
    body: "By submitting your information, you may receive emails, text messages, or other communications related to consultations, coaching services, resources, promotions, educational content, or business updates. You may unsubscribe from marketing emails at any time. Service-related messages may still be sent when necessary to provide coaching services, manage accounts, or complete business transactions.",
  },
  {
    heading: "Sharing of Information",
    body: "Next Mission Fitness LLC does not sell personal information. Information may be shared only when necessary with trusted service providers that support business operations, such as website hosting providers, email platforms, scheduling tools, payment processors, client portal providers, analytics services, or legal and accounting professionals. Information may also be disclosed if required by law, court order, legal process, or to protect the rights, safety, or property of Next Mission Fitness LLC, clients, or others.",
  },
  {
    heading: "Website Analytics and Cookies",
    body: "Our website may use cookies, pixels, analytics tools, or similar technologies to understand website traffic, improve user experience, measure marketing performance, and support advertising or retargeting efforts. Users may adjust browser settings to limit or block cookies, although some website features may not function properly.",
  },
  {
    heading: "Data Security",
    body: "Next Mission Fitness LLC uses reasonable administrative, technical, and organizational safeguards to protect personal information. However, no website, portal, email system, or electronic transmission is completely secure. By using our services, you acknowledge that information transmitted electronically carries inherent risk.",
  },
  {
    heading: "Data Retention",
    body: "We retain personal information for as long as reasonably necessary to provide services, maintain business records, comply with legal obligations, resolve disputes, process payments, support client history, and improve business operations. Information no longer needed may be deleted, archived, or anonymized when appropriate.",
  },
  {
    heading: "Client Rights and Choices",
    body: "Clients may request access to, correction of, or deletion of certain personal information by contacting Next Mission Fitness LLC. Some information may need to be retained for legal, financial, operational, or recordkeeping purposes. Requests will be reviewed and handled within a reasonable timeframe.",
  },
  {
    heading: "Minors",
    body: "Next Mission Fitness LLC may provide services to teenagers only with parental or legal guardian approval. Personal information from minors should be submitted only by a parent, legal guardian, or with proper consent. Parents or guardians may contact Next Mission Fitness LLC regarding information submitted for a minor client.",
  },
  {
    heading: "Third-Party Links",
    body: "The website may include links to third-party websites, social media platforms, payment processors, scheduling tools, or other services. Next Mission Fitness LLC is not responsible for the privacy practices, content, or security of third-party websites or platforms.",
  },
  {
    heading: "Updates to This Privacy Policy",
    body: "Next Mission Fitness LLC may update this Privacy Policy from time to time. Updated versions may be posted on the website with a revised effective date. Continued use of the website, portal, or services after updates means you accept the revised policy.",
  },
  {
    heading: "Contact Information",
    body: "Questions about this Privacy Policy may be directed to Next Mission Fitness LLC using the details below.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
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
