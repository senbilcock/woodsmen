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
      <div className="bg-green/20 border border-green rounded px-6 py-4 text-green-light font-semibold text-lg">
        Application received. We&apos;ll be in touch within 2 weeks.
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
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="location"
          placeholder="Proposed location (town/region)"
          required
          className="flex-1 bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-amber transition-colors"
        />
        <input
          type="text"
          name="land"
          placeholder="Land access (council, private, DOC)"
          required
          className="flex-1 bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-amber transition-colors"
        />
      </div>
      <textarea
        name="why"
        placeholder="Why do you want to open a Woodsmen Chapter? Tell us about yourself and your vision."
        rows={4}
        required
        className="bg-gray-dark border border-gray-dark rounded px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-amber transition-colors resize-y"
      />
      <button
        type="submit"
        className="bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all cursor-pointer"
      >
        Submit Application
      </button>
    </form>
  );
}
