"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <Image src="/images/hero.jpg" alt="Forest" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/65 to-night/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-night/60 backdrop-blur border border-night-border rounded-full px-4 py-1.5 mb-8">
            <LogoMark className="w-4 h-4 text-ember" />
            <span className="text-sand-muted text-xs tracking-wider uppercase">Queenstown&apos;s Outdoor Community Gym</span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1] tracking-tight text-sand">
            Get Fit Clearing<br />Invasive Pines.
          </h1>

          <p className="text-sand-muted text-lg md:text-xl mt-6 leading-relaxed max-w-lg">
            No gym. No machines. No chainsaws. Just axes, hand saws, and quiet outdoor work that restores NZ&apos;s high country — and gets you brutally fit.
          </p>

          {/* CRO: Dual paths */}
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="#join"
              className="inline-flex items-center justify-center bg-ember text-night font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-ember-light transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-sand/10 backdrop-blur text-sand font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded border border-sand/20 hover:bg-sand/15 transition-all"
            >
              How It Works
            </Link>
          </div>

          {/* CRO: Risk removal */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sand-muted/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" /> No experience needed
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" /> All equipment provided
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" /> Free with Alpine Gym membership
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-night to-transparent" />
    </header>
  );
}
