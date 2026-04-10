"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Queenstown's First Outdoor Community Gym",
    title: "THE GYM IS\nTHE FOREST",
    sub: "We clear invasive wilding pines. We get brutally fit doing it. We build community that matters.",
    ctas: [
      { label: "Get Involved", href: "/#join", primary: true },
      { label: "Learn More", href: "/#about", primary: false },
    ],
    gradient: "from-emerald-950/80 via-black/60 to-black/80",
  },
  {
    tag: "Fight NZ's #1 Ecological Threat",
    title: "CHOP WOOD.\nBUILD COMMUNITY.",
    sub: "Wilding pines are smothering our high country. Every session is a workout and an act of restoration.",
    ctas: [
      { label: "The Mission", href: "/#why", primary: true },
      { label: "Today's Work", href: "/#wod", primary: false },
    ],
    gradient: "from-amber-950/80 via-black/60 to-black/80",
  },
  {
    tag: "All Ages. All Fitness Levels. All Welcome.",
    title: "STRONGER\nTOGETHER",
    sub: "Real connection. Real work. Real people. The kind of community you've been missing.",
    ctas: [
      { label: "Join Us", href: "/#join", primary: true },
      { label: "Our Community", href: "/#community", primary: false },
    ],
    gradient: "from-green-950/80 via-black/60 to-black/80",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <header className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {/* Background gradient placeholder */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
          />
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
                {slide.tag}
              </p>
              <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-wide text-white whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-gray-light text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
                {slide.sub}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {slide.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.primary
                        ? "inline-flex items-center justify-center bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all"
                        : "inline-flex items-center justify-center bg-transparent text-white font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all"
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-amber scale-110" : "bg-white/30 hover:bg-white/60"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 text-gray text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray to-transparent" />
      </div>
    </header>
  );
}
