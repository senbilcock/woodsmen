"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";

/* ── Step data ────────────────────────────────────────────────────── */

/* Palatability is auto-derived from species choice (DSS1 Table).
   Index in SPECIES_OPTIONS → palatability score */
const PALATABILITY_BY_SPECIES: number[] = [
  1, // Redwoods/cypresses/cedars/spruces — highly palatable (moot, as species score=0 → total=0)
  1, // Radiata, ponderosa, Lawsons cypress — highly palatable
  2, // Muricata, maritime, larches — moderately palatable
  4, // Corsican pine, mountain pine — very low palatability (Corsican is least palatable conifer)
  3, // Douglas-fir, Scots pine — low palatability
  2, // Lodgepole/contorta — moderately palatable
];

const PALATABILITY_LABELS: Record<number, string> = {
  1: "Highly palatable — sheep readily eat these seedlings",
  2: "Moderately palatable — livestock will browse but less eagerly",
  3: "Low palatability — livestock tend to avoid these seedlings",
  4: "Very low palatability — hardest to control by grazing",
};

const STEPS = [
  {
    id: "species",
    question: "What are you planting?",
    why: "Different conifer species produce seeds that spread at very different rates. Some have light, winged seeds that travel kilometres in the wind. Others have heavier seeds that stay close. This is the single biggest factor in wilding spread risk.",
    options: [
      { label: "Redwoods, cypresses, cedars or spruces", desc: "Very low spreading risk", score: 0 },
      { label: "Radiata pine, ponderosa pine or Lawsons cypress", desc: "Low spreading vigour", score: 1 },
      { label: "Muricata pine, maritime pine or larches", desc: "Moderate spreading vigour", score: 2 },
      { label: "Corsican pine or mountain pine", desc: "High spreading vigour with light, winged seeds", score: 3 },
      { label: "Douglas-fir or Scots pine", desc: "Very high spreading vigour. Score lower if your site is moist with no late-summer drought", score: 4 },
      { label: "Lodgepole pine (contorta)", desc: "Extremely high risk. Unwanted organism under the Biosecurity Act", score: 5 },
    ],
  },
  {
    id: "siting",
    question: "How windy is the planting site?",
    why: "Wind is how conifer seeds travel long distances. Seeds released from exposed hilltops can be carried kilometres downwind. Trees in sheltered valleys produce seeds that mostly fall nearby.",
    options: [
      { label: "Well sheltered", desc: "Valley bottoms or slopes facing away from the wind", score: 0 },
      { label: "Partially exposed", desc: "Flat land with some shelter from nearby hills", score: 1 },
      { label: "Lee slope with eddy gusts", desc: "Behind a ridge where turbulent gusts occur", score: 2 },
      { label: "Fully exposed flat land", desc: "Open valleys, plateaus or terraces with no wind protection", score: 3 },
      { label: "Elevated take-off site", desc: "Ridge-tops, steep slopes or wind channels facing the wind", score: 4 },
    ],
  },
  {
    id: "grazing",
    question: "Is the land downwind being grazed?",
    why: "This is about the land up to 2 km downwind that will receive seeds. Intensive grazing prevents seedlings from establishing. No grazing means seedlings grow unchecked into mature trees.",
    options: [
      { label: "Intensive grazing on developed pasture", desc: "Well-maintained farmland with regular stock rotation", score: 0 },
      { label: "Regular mob stocking with sheep", desc: "Periodic intensive grazing that controls most seedlings", score: 1 },
      { label: "Semi-improved or occasional mob stocking", desc: "Some grazing but not enough to catch all seedlings", score: 2 },
      { label: "Extensive grazing only", desc: "Light, infrequent grazing", score: 3 },
      { label: "No grazing at all", desc: "No livestock to control seedlings", score: 4 },
    ],
  },
  {
    id: "vegetation",
    question: "What's growing on the downwind land?",
    why: "Existing vegetation competes with seedlings for light and space. Dense forest or thick pasture makes it hard for wildings to establish. Open, bare ground is ideal for seedling growth.",
    options: [
      { label: "Dense forest or thick developed pasture", desc: "Very little bare ground available", score: 0 },
      { label: "Dense native bush, shrubland or tussock", desc: "Continuous vegetation with minimal gaps", score: 1 },
      { label: "Forest or grassland with a few gaps", desc: "Mostly covered but some openings", score: 2 },
      { label: "Open forest or scattered vegetation", desc: "Many gaps with bare or disturbed ground", score: 3 },
      { label: "Open ground, slips or sparse low vegetation", desc: "Lots of bare soil — ideal for seedling establishment", score: 4 },
    ],
  },
];

function getRiskLevel(score: number) {
  if (score === 0) return {
    level: "no-risk" as const,
    label: "No Risk",
    color: "text-forest",
    bg: "bg-forest/15",
    border: "border-forest/30",
    description: "The risk of wilding spread is negligible for this combination of site and receiving area.",
    advice: "While the overall risk is very low, it's still good practice to monitor for unexpected seedling establishment, especially near exposed ridgelines.",
  };
  if (score < 8) return {
    level: "low" as const,
    label: "Low Risk",
    color: "text-forest",
    bg: "bg-forest/15",
    border: "border-forest/30",
    description: "Low risk of wilding spread. Some seeds may establish downwind, but conditions make widespread invasion unlikely.",
    advice: "Monitor the downwind area and remove any outlier seedlings before they reach cone-bearing age (typically 10-15 years). Early removal is much easier and cheaper than dealing with established wildings.",
  };
  if (score < 12) return {
    level: "moderate" as const,
    label: "Moderate Risk",
    color: "text-ember",
    bg: "bg-ember/15",
    border: "border-ember/30",
    description: "Meaningful risk of wilding spread. Without management, scattered conifers are likely to establish downwind over time.",
    advice: "Consider a different species with lower spreading vigour, a more sheltered site, or improving grazing management downwind. A wilding management plan should be part of your planting proposal.",
  };
  return {
    level: "high" as const,
    label: "High Risk",
    color: "text-red-400",
    bg: "bg-red-400/15",
    border: "border-red-400/30",
    description: "High risk of wilding invasion. Without intervention, significant wilding establishment is likely.",
    advice: "Strongly consider a different species, a more sheltered location, or changes to downwind land management. If you proceed, a binding commitment to ongoing wilding removal will be necessary. Resource consent conditions may apply.",
  };
}

/* ── Main component ───────────────────────────────────────────────── */

export default function CalculatorPage() {
  const TOTAL_STEPS = STEPS.length;
  const [step, setStep] = useState(1); // 1-4 = steps, 5 = results (no intro screen)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_STEPS).fill(null));
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentAnswer = step >= 1 && step <= TOTAL_STEPS ? answers[step - 1] : null;

  const advance = useCallback((nextStep: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  }, []);

  function selectOption(optionIdx: number) {
    // Clear any pending auto-advance
    if (timerRef.current) clearTimeout(timerRef.current);

    const next = [...answers];
    next[step - 1] = optionIdx;
    setAnswers(next);

    // Auto-advance after a short pause — feels snappy but gives visual feedback
    timerRef.current = setTimeout(() => {
      if (step < TOTAL_STEPS) {
        advance(step + 1);
      } else {
        advance(TOTAL_STEPS + 1);
      }
    }, 600);
  }

  function goBack() {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (step > 1) {
      advance(step - 1);
    }
  }

  function restart() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setAnswers(Array(TOTAL_STEPS).fill(null));
    setTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }

  // Calculate scores
  const stepScores = answers.map((ansIdx, stepIdx) =>
    ansIdx !== null ? STEPS[stepIdx].options[ansIdx].score : null
  );

  const speciesIdx = answers[0];
  const palatabilityScore = speciesIdx !== null ? PALATABILITY_BY_SPECIES[speciesIdx] : null;

  const allScores = [stepScores[0], palatabilityScore, stepScores[1], stepScores[2], stepScores[3]];
  const allAnswered = allScores.every((s) => s !== null);
  const hasZeroException = allScores[0] === 0 || allScores[3] === 0 || allScores[4] === 0;
  const rawTotal = allAnswered ? allScores.reduce((a, b) => (a ?? 0) + (b ?? 0), 0)! : null;
  const totalScore = allAnswered ? (hasZeroException ? 0 : rawTotal) : null;
  const risk = totalScore !== null ? getRiskLevel(totalScore) : null;

  return (
    <div className="min-h-screen bg-night pt-20">
      {/* Progress bar */}
      {step >= 1 && step <= TOTAL_STEPS && (
        <div className="bg-night-light border-b border-night-border">
          <div className="max-w-2xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-sand-muted/50 font-display uppercase tracking-wider">
                Question {step} of {TOTAL_STEPS}
              </span>
              {step > 1 && (
                <button onClick={restart} className="text-xs text-sand-muted/40 hover:text-ember transition-colors">
                  Start over
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
                <div key={s} className="flex-1">
                  <div className="h-1.5 rounded-full overflow-hidden bg-night-border">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        s < step ? "bg-forest w-full"
                        : s === step ? "bg-ember w-full"
                        : "w-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-2xl mx-auto px-6 transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}>

        {/* ── Step 1 gets extra context (replaces intro screen) ── */}
        {step === 1 && !transitioning && (
          <div className="py-12 md:py-16">
            {/* Back link */}
            <Link
              href="/research"
              className="inline-flex items-center gap-1 text-ember text-sm font-medium mb-6 hover:gap-2 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Research
            </Link>

            <h1 className="font-display text-3xl md:text-4xl text-sand mb-2 leading-tight">
              {STEPS[0].question}
            </h1>
            <p className="text-sand-muted/60 text-sm mb-1 leading-relaxed">
              Find out the wilding spread risk for your planting site. 4 quick questions, takes about a minute.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-sand-muted/30">Free</span>
              <span className="text-xs text-sand-muted/20">&middot;</span>
              <span className="text-xs text-sand-muted/30">No signup</span>
              <span className="text-xs text-sand-muted/20">&middot;</span>
              <span className="text-xs text-sand-muted/30">Based on Scion/MPI research</span>
            </div>

            {/* Why this matters */}
            <details className="mb-6 group">
              <summary className="text-sm text-ember cursor-pointer hover:text-ember-light transition-colors flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-open:rotate-90">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                Why does this matter?
              </summary>
              <p className="text-sm text-sand-muted/60 leading-relaxed mt-3 pl-5 border-l-2 border-night-border">
                {STEPS[0].why}
              </p>
            </details>

            {/* Options */}
            <div className="space-y-3">
              {STEPS[0].options.map((opt, i) => {
                const isSelected = currentAnswer === i;
                return (
                  <OptionCard
                    key={i}
                    label={opt.label}
                    desc={opt.desc}
                    isSelected={isSelected}
                    onClick={() => selectOption(i)}
                  />
                );
              })}
            </div>

            <p className="text-xs text-sand-muted/20 mt-6 text-center">
              Just pick one — we'll move to the next question automatically
            </p>
          </div>
        )}

        {/* ── Steps 2-4 ─────────────────────────────────────── */}
        {step >= 2 && step <= TOTAL_STEPS && !transitioning && (() => {
          const stepData = STEPS[step - 1];
          return (
            <div className="py-12 md:py-16">
              <h2 className="font-display text-2xl md:text-3xl text-sand mb-3 leading-snug">
                {stepData.question}
              </h2>

              <details className="mb-8 group">
                <summary className="text-sm text-ember cursor-pointer hover:text-ember-light transition-colors flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-open:rotate-90">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Why does this matter?
                </summary>
                <p className="text-sm text-sand-muted/60 leading-relaxed mt-3 pl-5 border-l-2 border-night-border">
                  {stepData.why}
                </p>
              </details>

              <div className="space-y-3">
                {stepData.options.map((opt, i) => {
                  const isSelected = currentAnswer === i;
                  return (
                    <OptionCard
                      key={i}
                      label={opt.label}
                      desc={opt.desc}
                      isSelected={isSelected}
                      onClick={() => selectOption(i)}
                    />
                  );
                })}
              </div>

              {/* Back button — no Continue needed, auto-advances */}
              <div className="mt-10 pt-6 border-t border-night-border">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm text-sand-muted hover:text-sand transition-colors px-4 py-2.5 rounded-lg hover:bg-night-card"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              </div>
            </div>
          );
        })()}

        {/* ── Results ───────────────────────────────────────── */}
        {step === TOTAL_STEPS + 1 && !transitioning && totalScore !== null && risk && (
          <div className="py-12 md:py-16" id="results">
            <h2 className="font-display text-2xl md:text-3xl text-sand mb-8">
              Your result
            </h2>

            {/* Big score */}
            <div className={`rounded-2xl border-2 ${risk.border} ${risk.bg} p-8 mb-8`}>
              <div className="flex items-center gap-6 mb-6">
                <div className={`text-7xl font-display font-bold ${risk.color}`}>
                  {totalScore}
                </div>
                <div>
                  <div className={`text-2xl font-display font-semibold ${risk.color}`}>
                    {risk.label}
                  </div>
                  <div className="text-sm text-sand-muted/60 mt-0.5">out of 21</div>
                </div>
              </div>

              <p className="text-sand-muted leading-relaxed mb-4">
                {risk.description}
              </p>

              <div className="bg-night/30 rounded-xl p-4">
                <p className="text-sm text-sand font-medium mb-1">What should you do?</p>
                <p className="text-sm text-sand-muted/70 leading-relaxed">
                  {risk.advice}
                </p>
              </div>
            </div>

            {/* Zero exception */}
            {hasZeroException && (
              <div className="rounded-xl border border-forest/30 bg-forest/10 p-5 mb-6">
                <p className="text-sm text-sand-muted leading-relaxed">
                  <span className="text-forest font-semibold">Good news: </span>
                  {allScores[0] === 0 && "Your chosen species has negligible spreading risk. "}
                  {allScores[3] === 0 && "The intensive grazing downwind will prevent seedling establishment. "}
                  {allScores[4] === 0 && "The dense vegetation downwind will prevent seedling establishment. "}
                  This automatically reduces the overall risk to zero.
                  {rawTotal !== null && rawTotal > 0 && (
                    <span className="text-sand-muted/40"> (Score before adjustment: {rawTotal})</span>
                  )}
                </p>
              </div>
            )}

            {/* Breakdown */}
            <details className="rounded-xl border border-night-border bg-night-card mb-8 group">
              <summary className="p-6 cursor-pointer flex items-center justify-between">
                <h3 className="font-display text-sm text-sand-muted/50 uppercase tracking-[0.14em]">
                  Score Breakdown
                </h3>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sand-muted/30 transition-transform group-open:rotate-90">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </summary>
              <div className="px-6 pb-6 space-y-3">
                {[
                  { label: "Species growth", value: allScores[0], detail: answers[0] !== null ? STEPS[0].options[answers[0]].label : "" },
                  { label: "Palatability", value: allScores[1], detail: palatabilityScore !== null ? PALATABILITY_LABELS[palatabilityScore] : "", auto: true },
                  { label: "Wind exposure", value: allScores[2], detail: answers[1] !== null ? STEPS[1].options[answers[1]].label : "" },
                  { label: "Downwind grazing", value: allScores[3], detail: answers[2] !== null ? STEPS[2].options[answers[2]].label : "" },
                  { label: "Downwind vegetation", value: allScores[4], detail: answers[3] !== null ? STEPS[3].options[answers[3]].label : "" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-sand-muted">
                      {row.label}
                      {row.auto && <span className="text-xs text-ember/60 ml-1.5">(auto)</span>}
                    </span>
                    <span className="text-sm font-display font-bold text-sand">
                      {row.value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 mt-1 border-t border-night-border">
                  <span className="text-sm font-display font-semibold text-sand">Total</span>
                  <span className={`text-lg font-display font-bold ${risk.color}`}>
                    {totalScore}
                  </span>
                </div>
              </div>
            </details>

            {/* Risk scale — collapsed */}
            <details className="rounded-xl border border-night-border bg-night-card mb-8 group">
              <summary className="p-6 cursor-pointer flex items-center justify-between">
                <h3 className="font-display text-sm text-sand-muted/50 uppercase tracking-[0.14em]">
                  Risk Scale
                </h3>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sand-muted/30 transition-transform group-open:rotate-90">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </summary>
              <div className="px-6 pb-6 space-y-2">
                {[
                  { range: "0", label: "No risk", color: "bg-forest/40" },
                  { range: "1-7", label: "Low risk", color: "bg-forest" },
                  { range: "8-11", label: "Moderate risk", color: "bg-ember" },
                  { range: "12-21", label: "High risk", color: "bg-red-400" },
                ].map((r) => (
                  <div key={r.range} className="flex items-center gap-3">
                    <div className={`w-8 h-2 rounded-full ${r.color}`} />
                    <span className="text-sm text-sand-muted">
                      <span className="font-mono text-sand-muted/50">{r.range}</span>
                      {" "}&mdash; {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </details>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={restart}
                className="flex-1 px-6 py-4 rounded-xl bg-night-card border border-night-border text-sand font-display font-semibold text-sm hover:border-ember/40 transition-colors text-center"
              >
                Calculate Again
              </button>
              <Link
                href="/research/wilding-pines"
                className="flex-1 px-6 py-4 rounded-xl bg-ember text-night font-display font-semibold text-sm hover:bg-ember-light transition-colors text-center"
              >
                Learn More About Wildings
              </Link>
            </div>

            <div className="border-t border-night-border pt-6">
              <p className="text-xs text-sand-muted/30 leading-relaxed">
                Based on the Scion/MPI Decision Support System (DSS1, 2012).
                Multiple calculations may be needed for sites with different topography, species, or downwind conditions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────── */

function OptionCard({
  label,
  desc,
  isSelected,
  onClick,
}: {
  label: string;
  desc: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
        isSelected
          ? "border-ember bg-ember/10 scale-[1.01]"
          : "border-night-border hover:border-sand-muted/20 bg-night-card"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected
              ? "border-ember bg-ember"
              : "border-sand-muted/25"
          }`}
        >
          {isSelected && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#0B0F0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <div className="flex-1">
          <span className={`text-base font-medium leading-snug block ${isSelected ? "text-sand" : "text-sand-muted"}`}>
            {label}
          </span>
          <span className="text-sm text-sand-muted/50 mt-1 block leading-relaxed">
            {desc}
          </span>
        </div>
      </div>
    </button>
  );
}
