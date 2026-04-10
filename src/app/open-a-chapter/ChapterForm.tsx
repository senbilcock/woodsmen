"use client";

import { useState } from "react";

export function ChapterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-forest/20 border border-forest/30 rounded px-6 py-4 text-forest font-semibold text-lg text-center">
        Application received. We&apos;ll be in touch within 2 weeks.
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-3 max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="name" placeholder="Your name" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
        <input type="email" name="email" placeholder="Your email" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="location" placeholder="Proposed location" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
        <input type="text" name="land" placeholder="Land access type" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
      </div>
      <textarea name="why" placeholder="Why do you want to open a Woodsmen Chapter?" rows={3} required className="bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors resize-y text-sm" />
      <button type="submit" className="bg-ember text-night font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded hover:bg-ember-light transition-all cursor-pointer">
        Submit Application
      </button>
    </form>
  );
}
