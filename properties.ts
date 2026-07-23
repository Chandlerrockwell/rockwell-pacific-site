"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { href: "/residents", label: "Residents" },
  { href: "/owners", label: "Owners" },
  { href: "/#properties", label: "Properties" },
  { href: "/#vacancies", label: "Vacancies" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const PORTAL_URL = "https://rockwellpmgllc.appfolio.com/connect";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 reveal">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + company name — enlarged so the brand leads the page.
            The mark sits in a light "bone" tile so it stays legible over
            the dark hero photo. */}
        <a href="/" className="flex items-center gap-4 md:gap-5 group">
          <Image
            src="/logo/logo-square.png"
            alt="Rockwell Pacific Management"
            width={96}
            height={96}
            className="rounded-sm w-[72px] h-[72px] md:w-[88px] md:h-[88px] shadow-lg shadow-ink/30"
            priority
          />
          <div className="block">
            <div className="font-serif text-[21px] md:text-[26px] tracking-[0.18em] text-bone leading-none">
              ROCKWELL PACIFIC
            </div>
            <div className="text-[11px] md:text-[13px] tracking-[0.34em] text-bone/75 mt-1.5">
              MANAGEMENT
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-9 text-[13px] tracking-wide text-bone/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-pacific-mist transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Two clear tenant actions, always visible at the top */}
        <div className="flex items-center gap-3">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block whitespace-nowrap text-[12px] tracking-[0.15em] uppercase border border-bone/50 text-bone px-5 py-2.5 hover:bg-bone hover:text-ink transition-colors"
          >
            Maintenance
          </a>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block whitespace-nowrap text-[12px] tracking-[0.15em] uppercase bg-bone text-ink px-5 py-2.5 hover:bg-pacific hover:text-bone transition-colors"
          >
            Pay Rent
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] border border-bone/40 text-bone"
          >
            <span className={`block w-5 h-px bg-bone transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-bone transition-transform ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden mt-4 mx-[-1.5rem] px-6 py-8 bg-ink border-t border-bone/10 shadow-2xl">
          <div className="flex flex-col gap-6 text-[15px] tracking-wide text-bone/90">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-pacific-mist transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[12px] tracking-[0.15em] uppercase bg-bone text-ink px-5 py-3.5"
            >
              Pay Rent
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[12px] tracking-[0.15em] uppercase border border-bone/50 text-bone px-5 py-3.5"
            >
              Request Maintenance
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
