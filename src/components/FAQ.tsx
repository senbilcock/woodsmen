"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I'm not fit at all. Can I really do this?",
    a: "Absolutely. Every session is scaled to your level. We've had 65-year-olds and complete beginners work alongside athletes. Your leaders will adapt everything so you work hard but never get left behind.",
  },
  {
    q: "Is it safe? I've never used an axe before.",
    a: "Safety is our foundation. All equipment is provided and every session starts with a full safety briefing. You'll learn proper technique before touching any tool. We carry first aid and all leaders are certified.",
  },
  {
    q: "What do I need to bring?",
    a: "Sturdy boots or trail shoes, clothes you can move and sweat in, and a water bottle. We provide gloves, tools, safety gear — everything else. Just dress for the weather. We're outside rain or shine.",
  },
  {
    q: "Are we actually making a difference to the environment?",
    a: "Yes — measurably. We work in coordination with local councils and DOC. Wilding pine removal is real, funded conservation work. Every session has direct, measurable environmental impact.",
  },
  {
    q: "How much does it cost?",
    a: "Drop-ins are $25/session. Weekly plans range from $20/wk (Community) to $50/wk (Unlimited). Founding members lock in discounted rates for life. No lock-in contracts, cancel anytime.",
  },
  {
    q: "What happens at my first session?",
    a: "You show up, we brief you on safety and technique, you work alongside the crew at your own level, then you stick around for a coffee. Most people are hooked by the end of session one.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-stone-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none group"
          >
            <span className="text-stone-800 font-semibold text-base pr-4 group-hover:text-forest-dark transition-colors">
              {faq.q}
            </span>
            <span
              className={`text-ember text-xl font-light transition-transform shrink-0 ${openIndex === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-5" : "max-h-0"}`}
          >
            <p className="text-stone-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
