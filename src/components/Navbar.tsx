"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-gray-dark bg-black text-gray text-xs py-2">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <span>Queenstown, New Zealand</span>
          <div className="flex gap-5">
            <Link href="/#join" className="hover:text-white transition-colors">
              Sign Up
            </Link>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-dark">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="font-display text-[28px] tracking-wider text-white no-underline"
          >
            WOODSMEN
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/#about">Getting Started</NavLink>
            <NavLink href="/#sessions">Sessions</NavLink>
            <NavLink href="/#wod">Work of the Day</NavLink>
            <NavLink href="/#why">The Mission</NavLink>
            <NavLink href="/membership">Membership</NavLink>
            <NavLink href="/open-a-chapter">Open a Chapter</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#join"
              className="hidden sm:inline-flex items-center justify-center bg-amber text-black font-bold text-[13px] uppercase tracking-wider px-6 py-2.5 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all"
            >
              Join Woodsmen
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded transition-all ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-black-light border-t border-gray-dark px-6 py-6 flex flex-col gap-4">
            <MobileLink href="/#about" onClick={() => setOpen(false)}>
              Getting Started
            </MobileLink>
            <MobileLink href="/#sessions" onClick={() => setOpen(false)}>
              Sessions
            </MobileLink>
            <MobileLink href="/#wod" onClick={() => setOpen(false)}>
              Work of the Day
            </MobileLink>
            <MobileLink href="/#why" onClick={() => setOpen(false)}>
              The Mission
            </MobileLink>
            <MobileLink href="/membership" onClick={() => setOpen(false)}>
              Membership
            </MobileLink>
            <MobileLink href="/open-a-chapter" onClick={() => setOpen(false)}>
              Open a Chapter
            </MobileLink>
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-amber text-black font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-amber-hover transition-all"
            >
              Join Woodsmen
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-gray-light uppercase tracking-wider hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-semibold text-gray-light uppercase tracking-wider hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
