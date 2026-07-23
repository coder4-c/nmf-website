import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/coaching-agreement", label: "Coaching Agreement" },
];

const siteLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/apply", label: "Start Your Mission" },
  { href: "/intake", label: "Intake Form" },
];

export default function Footer() {
  return (
    <footer className="border-t border-nmf-steel-light bg-nmf-black">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/brand/nmf-logo.png"
              alt="Next Mission Fitness"
              width={200}
              height={133}
              className="h-auto w-auto max-h-10 md:max-h-14"
            />
            <p className="mt-4 max-w-sm text-sm text-nmf-mute">
              Veteran-owned fitness and nutrition coaching. Structured
              programming, accountability, and disciplined progression -
              serving San Antonio, TX in person and clients nationwide online.
            </p>
            <div className="mt-5 flex gap-4 font-mono text-xs uppercase tracking-[0.15em]">
              <a
                href="https://www.facebook.com/share/1HPCU2ZVPh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nmf-off hover:text-nmf-red"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/nextmissionfitness?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nmf-off hover:text-nmf-red"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="tag-rule font-mono text-[11px] uppercase tracking-[0.2em] text-nmf-mute">
              <span className="shrink-0">Site</span>
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-nmf-off hover:text-nmf-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tag-rule font-mono text-[11px] uppercase tracking-[0.2em] text-nmf-mute">
              <span className="shrink-0">Legal</span>
            </p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-nmf-off hover:text-nmf-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-nmf-steel-light pt-6 text-xs text-nmf-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Next Mission Fitness LLC. All Rights Reserved.</p>
          <p>
            <a href="mailto:info@nextmissionfit.com" className="hover:text-nmf-red">
              info@nextmissionfit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
