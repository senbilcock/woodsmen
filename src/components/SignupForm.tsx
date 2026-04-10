"use client";

import { useState } from "react";

export function SignupForm({
  successMessage = "You're in. Check your email for session details.",
  buttonText = "Reserve My Spot",
}: {
  successMessage?: string;
  buttonText?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-forest/20 border border-forest/30 rounded px-6 py-4 text-forest font-semibold text-lg text-center">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-3 max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="name" placeholder="Your name" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
        <input type="email" name="email" placeholder="Your email" required className="flex-1 bg-night-card border border-night-border rounded px-4 py-3 text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember transition-colors text-sm" />
      </div>
      <button type="submit" className="bg-ember text-night font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded hover:bg-ember-light transition-all cursor-pointer">
        {buttonText}
      </button>
    </form>
  );
}
