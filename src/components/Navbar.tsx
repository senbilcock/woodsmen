"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl text-forest-dark tracking-tight">
            Woodsmen
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/#how-it-works" scrolled={scrolled}>How It Works</NavLink>
          <NavLink href="/#sessions" scrolled={scrolled}>Sessions</NavLink>
          <NavLink href="/#proof" scrolled={scrolled}>Results</NavLink>
          <NavLink href="/membership" scrolled={scrolled}>Membership</NavLink>
          <NavLink href="/open-a-chapter" scrolled={scrolled}>Open a Chapter</NavLink>
          <NavLink href="/research" scrolled={scrolled}>Research</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#join"
            className="hidden sm:inline-flex items-center justify-center bg-ember text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-ember-dark transition-all shadow-sm hover:shadow-md"
          >
            Join Free Intro Session
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-stone-700" : "bg-white"} ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-stone-700" : "bg-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-stone-700" : "bg-white"} ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 flex flex-col gap-4 shadow-lg">
          <MobileLink href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</MobileLink>
          <MobileLink href="/#sessions" onClick={() => setOpen(false)}>Sessions</MobileLink>
          <MobileLink href="/#proof" onClick={() => setOpen(false)}>Results</MobileLink>
          <MobileLink href="/membership" onClick={() => setOpen(false)}>Membership</MobileLink>
          <MobileLink href="/open-a-chapter" onClick={() => setOpen(false)}>Open a Chapter</MobileLink>
          <MobileLink href="/research" onClick={() => setOpen(false)}>Research</MobileLink>
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-ember text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-ember-dark transition-all"
          >
            Join Free Intro Session
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        scrolled ? "text-stone-600 hover:text-forest-dark" : "text-white/80 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-medium text-stone-700 hover:text-forest-dark transition-colors"
    >
      {children}
    </Link>
  );
}
