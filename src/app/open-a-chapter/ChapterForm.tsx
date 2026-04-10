"use client";

import { useState } from "react";

export function ChapterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-5 text-white font-semibold text-lg">
        Application received. We&apos;ll be in touch within 2 weeks.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="name" placeholder="Your name" required className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
        <input type="email" name="email" placeholder="Your email" required className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="location" placeholder="Proposed location" required className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
        <input type="text" name="land" placeholder="Land access type" required className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
      </div>
      <textarea name="why" placeholder="Why do you want to open a Woodsmen Chapter?" rows={3} required className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-y" />
      <button type="submit" className="bg-white text-forest-dark font-semibold text-base px-8 py-4 rounded-lg hover:bg-stone-100 transition-all shadow-md cursor-pointer">
        Submit Application
      </button>
    </form>
  );
}
