"use client";

import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Forest landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* CRO: Plain language — immediately say what it is */}
          <p className="text-ember-light font-semibold text-sm tracking-wide mb-4">
            Queenstown&apos;s First Outdoor Community Gym
          </p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white">
            Get Fit Clearing Invasive Pines. Build Community Doing&nbsp;It.
          </h1>

          <p className="text-white/80 text-lg md:text-xl mt-6 leading-relaxed max-w-lg">
            No gym. No machines. Just axes, hand saws, and real outdoor work that restores New Zealand&apos;s high country — and gets you brutally fit.
          </p>

          {/* CRO: Dual paths — ready vs needs more info */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#join"
              className="inline-flex items-center justify-center bg-ember text-white font-semibold text-base px-8 py-4 rounded-lg hover:bg-ember-dark transition-all shadow-md hover:shadow-lg"
            >
              Book Free Intro Session
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-semibold text-base px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              See How It Works
            </Link>
          </div>

          {/* CRO: Risk removal — address biggest objection immediately */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Check /> No experience needed
            </span>
            <span className="flex items-center gap-1.5">
              <Check /> All equipment provided
            </span>
            <span className="flex items-center gap-1.5">
              <Check /> All fitness levels welcome
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-forest-light shrink-0">
      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
