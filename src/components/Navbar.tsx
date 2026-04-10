"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoMark } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Secondary nav — thin top bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-night border-b border-night-border transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-8 opacity-100"}`}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="text-sand-muted/40 text-[11px] tracking-wider">Queenstown, New Zealand</span>
          <div className="hidden sm:flex items-center gap-5">
            <SecLink href="/membership">Membership</SecLink>
            <SecLink href="/open-a-chapter">Open a Chapter</SecLink>
            <SecLink href="/research">Research</SecLink>
            <SecLink href="/calculator">Risk Calculator</SecLink>
            <SecLink href="#">Instagram</SecLink>
          </div>
        </div>
      </div>

      {/* Primary nav — clean, conversion-focused */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-night/95 backdrop-blur-md border-b border-night-border"
            : "top-8 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-sand hover:text-ember transition-colors">
            <LogoMark className="w-6 h-6" />
            <span className="font-display text-[18px] tracking-[0.14em] uppercase font-medium">
              Woodsmen
            </span>
          </Link>

          {/* Primary links — pages only, no anchors */}
          <div className="hidden md:flex items-center gap-7">
            <PrimaryLink href="/membership">Membership</PrimaryLink>
            <PrimaryLink href="/open-a-chapter">Open a Chapter</PrimaryLink>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/#join"
              className="hidden sm:inline-flex items-center justify-center bg-ember text-night font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:bg-ember-light transition-all"
            >
              Get Started Free
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
            >
              <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-night-light border-t border-night-border px-6 py-6 flex flex-col gap-4">
            <MobileLink href="/membership" onClick={() => setOpen(false)}>Membership</MobileLink>
            <MobileLink href="/open-a-chapter" onClick={() => setOpen(false)}>Open a Chapter</MobileLink>
            <MobileLink href="/research" onClick={() => setOpen(false)}>Research</MobileLink>
            <MobileLink href="/calculator" onClick={() => setOpen(false)}>Risk Calculator</MobileLink>
            <div className="border-t border-night-border pt-4 mt-2">
              <Link href="/#join" onClick={() => setOpen(false)} className="inline-flex items-center justify-center w-full bg-ember text-night font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded transition-all">
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function SecLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[11px] text-sand-muted/40 hover:text-sand-muted/70 transition-colors tracking-wider">
      {children}
    </Link>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[13px] font-medium text-sand-muted uppercase tracking-wider hover:text-sand transition-colors">
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-sm font-medium text-sand-muted uppercase tracking-wider hover:text-sand transition-colors">
      {children}
    </Link>
  );
}
