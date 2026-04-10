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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/95 backdrop-blur-md border-b border-night-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 text-sand hover:text-ember transition-colors">
          <LogoMark className="w-6 h-6" />
          <span className="font-display text-[18px] tracking-[0.14em] uppercase font-medium">
            Woodsmen
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <NavLink href="/#sessions">Sessions</NavLink>
          <NavLink href="/#why">The Mission</NavLink>
          <NavLink href="/membership">Membership</NavLink>
          <NavLink href="/open-a-chapter">Open a Chapter</NavLink>
          <NavLink href="/research">Research</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#join"
            className="hidden sm:inline-flex items-center justify-center bg-ember text-night font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:bg-ember-light transition-all"
          >
            Get Started
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-sand rounded transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-night-light border-t border-night-border px-6 py-6 flex flex-col gap-4">
          <MobileLink href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</MobileLink>
          <MobileLink href="/#sessions" onClick={() => setOpen(false)}>Sessions</MobileLink>
          <MobileLink href="/#why" onClick={() => setOpen(false)}>The Mission</MobileLink>
          <MobileLink href="/membership" onClick={() => setOpen(false)}>Membership</MobileLink>
          <MobileLink href="/open-a-chapter" onClick={() => setOpen(false)}>Open a Chapter</MobileLink>
          <MobileLink href="/research" onClick={() => setOpen(false)}>Research</MobileLink>
          <Link href="/#join" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center bg-ember text-night font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded transition-all">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
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
