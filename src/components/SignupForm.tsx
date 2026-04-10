"use client";

import { useState } from "react";

export function SignupForm({
  showPlan = false,
  successMessage = "You're in! Check your email for session details.",
  buttonText = "Reserve My Spot",
}: {
  showPlan?: boolean;
  successMessage?: string;
  buttonText?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-forest/10 border border-forest/30 rounded-xl px-6 py-5 text-forest-dark font-semibold text-lg text-center">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="flex-1 bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="flex-1 bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
        />
      </div>
      {showPlan && (
        <select
          name="plan"
          required
          defaultValue=""
          className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
        >
          <option value="" disabled>Choose your plan</option>
          <option value="dropin">Drop-In ($25/session)</option>
          <option value="limited">Limited — 3x/week ($35/wk)</option>
          <option value="unlimited">Unlimited ($50/wk) — Most Popular</option>
          <option value="community">Community ($20/wk)</option>
        </select>
      )}
      <button
        type="submit"
        className="bg-ember text-white font-semibold text-base px-8 py-4 rounded-lg hover:bg-ember-dark transition-all shadow-md hover:shadow-lg cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}
