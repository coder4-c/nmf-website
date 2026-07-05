"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/intake", label: "Intake Form" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nmf-steel-light bg-nmf-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/nmf-logo.png"
            alt="Next Mission Fitness"
            width={160}
            height={107}
            className="h-26 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-nmf-off transition-colors hover:text-nmf-red"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="cut-br-sm bg-nmf-red px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-nmf-white transition-colors hover:bg-nmf-red-dim"
          >
            Start Your Mission
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-nmf-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-nmf-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-nmf-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-nmf-steel-light px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm uppercase tracking-[0.1em] text-nmf-off"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="cut-br-sm mt-2 bg-nmf-red px-5 py-3 text-center font-mono text-sm font-semibold uppercase tracking-[0.1em] text-nmf-white"
          >
            Start Your Mission
          </Link>
        </nav>
      )}
    </header>
  );
}
