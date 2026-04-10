"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to be fit to start?",
    a: "No. Every session is scaleable. We'll meet you where you're at and help you progress. Some of our best sessions come from complete beginners who bring nothing but willingness.",
  },
  {
    q: "Is it safe? Do I need my own axe?",
    a: "Safety is foundational. All equipment is provided and every session starts with a safety briefing. You'll learn proper technique before you touch a tool. We carry first aid and have trained session leaders.",
  },
  {
    q: "What do I wear / bring?",
    a: "Sturdy boots or trail shoes, clothes you can move and sweat in, and a water bottle. We provide gloves, tools, and everything else. Dress for the weather — we're outside rain or shine.",
  },
  {
    q: "What about the wilding pines — are we actually making a difference?",
    a: "Yes. We work in coordination with local councils and DOC. Wilding pine removal is real, funded conservation work. We're not playing at it — every session has measurable environmental impact on the land we work.",
  },
  {
    q: "How much does it cost?",
    a: "Drop-ins are $25/session. Weekly plans start at $20/wk for the Community tier and go up to $50/wk for Unlimited. Founding member rates are available now — they won't last.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-gray-dark">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
          >
            <span className="text-white font-semibold text-base pr-4">
              {faq.q}
            </span>
            <span
              className={`text-amber text-2xl transition-transform ${openIndex === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-5" : "max-h-0"}`}
          >
            <p className="text-gray-light leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
