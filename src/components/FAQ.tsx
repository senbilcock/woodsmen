"use client";

import { useState } from "react";

const faqs = [
  { q: "I'm not fit at all. Can I really do this?", a: "Every session is scaled to your level. We've had complete beginners and 65-year-olds work alongside athletes. You'll work hard but never get left behind." },
  { q: "Is it safe? I've never used an axe.", a: "Safety is foundational. All equipment provided, every session starts with a safety briefing. You learn technique before touching tools. All leaders are certified." },
  { q: "What do I need to bring?", a: "Sturdy boots, clothes you can move in, water bottle. We provide gloves, tools, safety gear — everything else. Dress for weather. We're outside rain or shine." },
  { q: "How much does it cost?", a: "$15/week. That's it. All sessions, all equipment, coached and structured. It's that cheap because your work has real value — the council would pay contractors to do what you do as your workout. The savings subsidise your membership." },
  { q: "Are we actually making a difference?", a: "Yes — measurably. We coordinate with local councils and DOC. Wilding pine removal is real, funded conservation work. Every session has direct environmental impact." },
  { q: "What happens at my first session?", a: "Show up, get briefed on safety and technique, work alongside the crew at your level, then stick around for a coffee. Most people are hooked by session one." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-night-border">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none group"
          >
            <span className="text-sand font-medium text-[15px] pr-4 group-hover:text-ember transition-colors">{faq.q}</span>
            <span className={`text-ember text-lg font-light transition-transform shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
            <p className="text-sand-muted text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
