"use client";

import { useState } from "react";

export function SignupForm({
  showPlan = false,
  successMessage = "You're in. We'll be in touch.",
}: {
  showPlan?: boolean;
  successMessage?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green/20 border border-green rounded px-6 py-4 text-green-light font-semibold text-lg animate-fade-in">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="flex-1 bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-amber transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="flex-1 bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-amber transition-colors"
        />
      </div>
      {showPlan && (
        <select
          name="plan"
          required
          defaultValue=""
          className="bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
        >
          <option value="" disabled>
            Choose your plan
          </option>
          <option value="dropin">Drop-In ($25/session)</option>
          <option value="limited">Limited — 3x/week ($35/wk)</option>
          <option value="unlimited">Unlimited ($50/wk)</option>
          <option value="community">Community ($20/wk)</option>
        </select>
      )}
      <button
        type="submit"
        className="bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all cursor-pointer"
      >
        {showPlan ? "Sign Me Up" : "Count Me In"}
      </button>
    </form>
  );
}
