"use client";

import { useState } from "react";
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
    question: "What tree species are you planting?",
    why: "Different conifer species produce seeds that spread at very different rates. Some species have light, winged seeds that travel long distances in the wind, while others have heavier seeds that stay close to the parent tree. This is the single biggest factor in wilding spread risk.",
    options: [
      { label: "Redwoods, cypresses, cedars or spruces", desc: "These species have very low spreading risk", score: 0 },
      { label: "Radiata pine, ponderosa pine or Lawsons cypress", desc: "Low spreading vigour", score: 1 },
      { label: "Muricata pine, maritime pine or larches", desc: "Moderate spreading vigour", score: 2 },
      { label: "Corsican pine or mountain pine", desc: "High spreading vigour with light, winged seeds", score: 3 },
      { label: "Douglas-fir or Scots pine", desc: "Very high spreading vigour. Score 1 instead if your site is moist with no late-summer drought", score: 4 },
      { label: "Lodgepole pine (contorta)", desc: "Extremely high risk. This is an unwanted organism under the Biosecurity Act", score: 5 },
    ],
  },
  {
    id: "siting",
    question: "How exposed is your planting site to the wind?",
    why: "Wind is the main way conifer seeds travel. Seeds released from exposed hilltops and ridges can be carried kilometres downwind. Trees in sheltered valleys produce seeds that mostly fall nearby. The topographic position of your planting site relative to prevailing winds is the second biggest risk factor after species choice.",
    options: [
      { label: "Well sheltered", desc: "Valley bottoms or slopes facing away from the prevailing wind", score: 0 },
      { label: "Partially exposed", desc: "Flat land with some shelter from nearby hills (within 1 km)", score: 1 },
      { label: "Lee slope with eddy gusts", desc: "Behind a ridge or hill where turbulent wind gusts occur", score: 2 },
      { label: "Fully exposed flat land", desc: "Open river valleys, plateaus or terraces with no wind protection", score: 3 },
      { label: "Elevated take-off site", desc: "Ridge-tops, steep slopes (>10\u00b0) or wind channels facing the prevailing wind", score: 4 },
    ],
  },
  {
    id: "grazing",
    question: "How is the land downwind being grazed?",
    why: "This question is about the land that will receive seeds from your planting -- the area up to 2 km downwind. Intensive grazing on developed pasture effectively prevents wilding seedlings from establishing. If the downwind land has no grazing, seedlings can grow unchecked into mature trees that produce their own seeds.",
    options: [
      { label: "Intensive grazing on developed pasture", desc: "Well-maintained farmland with regular stock rotation", score: 0 },
      { label: "Regular mob stocking with sheep", desc: "Periodic intensive grazing that controls most seedlings", score: 1 },
      { label: "Semi-improved grazing or occasional mob stocking", desc: "Some grazing but not enough to catch all seedlings", score: 2 },
      { label: "Extensive grazing only", desc: "Light, infrequent grazing -- many seedlings will survive", score: 3 },
      { label: "No grazing at all", desc: "No livestock to control seedling establishment", score: 4 },
    ],
  },
  {
    id: "vegetation",
    question: "What vegetation covers the downwind land?",
    why: "Existing vegetation competes with conifer seedlings for light, water and space. Dense forest or thick pasture makes it very hard for wilding seeds to germinate and survive. But open, bare ground with gaps in vegetation is ideal for seedling establishment -- seeds can reach mineral soil and get the sunlight they need to grow.",
    options: [
      { label: "Dense plantation forest or thick developed pasture", desc: "Very little bare ground -- seedlings can't establish here", score: 0 },
      { label: "Dense native forest, shrubland or tussock grassland", desc: "Continuous vegetation cover with minimal gaps", score: 1 },
      { label: "Forest, shrubland or grassland with a few gaps", desc: "Mostly covered but some openings where seedlings could grow", score: 2 },
      { label: "Open forest or scattered patches of vegetation", desc: "Many gaps with bare or disturbed ground", score: 3 },
      { label: "Open ground, slips, rockland or sparse low vegetation", desc: "Lots of bare soil and mineral ground -- ideal for seedling establishment", score: 4 },
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
    description: "For this combination of site and receiving area, the risk of wilding spread is negligible. Seeds from these trees are unlikely to establish in the downwind environment.",
    advice: "While the overall risk is very low, it's still good practice to monitor for any unexpected seedling establishment, especially near exposed ridgelines.",
  };
  if (score < 8) return {
    level: "low" as const,
    label: "Low Risk",
    color: "text-forest",
    bg: "bg-forest/15",
    border: "border-forest/30",
    description: "There is a low risk of wilding conifer spread from this planting. Some seeds may establish downwind, but the conditions make widespread invasion unlikely.",
    advice: "Monitor the downwind area regularly and remove any outlier seedlings before they reach cone-bearing age (typically 10-15 years). Early removal is much easier and cheaper than dealing with established wildings.",
  };
  if (score < 12) return {
    level: "moderate" as const,
    label: "Moderate Risk",
    color: "text-ember",
    bg: "bg-ember/15",
    border: "border-ember/30",
    description: "There is a meaningful risk of wilding spread. Without management, scattered conifers are likely to establish in the downwind area over time.",
    advice: "Consider changing your species to one with lower spreading vigour, or choosing a more sheltered planting site. Improving grazing management downwind can also reduce risk. A wilding management plan should be part of your planting proposal.",
  };
  return {
    level: "high" as const,
    label: "High Risk",
    color: "text-red-400",
    bg: "bg-red-400/15",
    border: "border-red-400/30",
    description: "This combination of species, site and downwind conditions creates a high risk of wilding conifer invasion. Without intervention, significant wilding establishment is likely.",
    advice: "Strongly consider a different species, a more sheltered planting location, or changes to downwind land management. If you proceed, a binding commitment to ongoing wilding removal will be necessary. Resource consent conditions may apply.",
  };
}

/* ── Main component ───────────────────────────────────────────────── */

export default function CalculatorPage() {
  const TOTAL_STEPS = STEPS.length; // 4 user-facing steps
  const [step, setStep] = useState(0); // 0=intro, 1-4=steps, 5=results
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_STEPS).fill(null));

  const currentAnswer = step >= 1 && step <= TOTAL_STEPS ? answers[step - 1] : null;

  function selectOption(optionIdx: number) {
    const next = [...answers];
    next[step - 1] = optionIdx;
    setAnswers(next);
  }

  function goNext() {
    if (step === 0) {
      setStep(1);
    } else if (step <= TOTAL_STEPS && currentAnswer !== null) {
      setStep(step + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setStep(0);
    setAnswers(Array(TOTAL_STEPS).fill(null));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Calculate scores — answers[0]=species, answers[1]=siting, answers[2]=grazing, answers[3]=vegetation
  const stepScores = answers.map((ansIdx, stepIdx) =>
    ansIdx !== null ? STEPS[stepIdx].options[ansIdx].score : null
  );

  // Palatability is auto-derived from species choice
  const speciesIdx = answers[0];
  const palatabilityScore = speciesIdx !== null ? PALATABILITY_BY_SPECIES[speciesIdx] : null;

  // All 5 DSS scores: species, palatability (auto), siting, grazing, vegetation
  const allScores = [stepScores[0], palatabilityScore, stepScores[1], stepScores[2], stepScores[3]];
  const allAnswered = allScores.every((s) => s !== null);
  const hasZeroException = allScores[0] === 0 || allScores[3] === 0 || allScores[4] === 0;
  const rawTotal = allAnswered ? allScores.reduce((a, b) => (a ?? 0) + (b ?? 0), 0)! : null;
  const totalScore = allAnswered ? (hasZeroException ? 0 : rawTotal) : null;
  const risk = totalScore !== null ? getRiskLevel(totalScore) : null;

  return (
    <div className="min-h-screen bg-night pt-20">
      {/* Top bar with progress */}
      {step > 0 && step <= TOTAL_STEPS && (
        <div className="bg-night-light border-b border-night-border">
          <div className="max-w-2xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-sand-muted/50 font-display uppercase tracking-wider">
                Step {step} of {TOTAL_STEPS}
              </span>
              <button onClick={restart} className="text-xs text-sand-muted/40 hover:text-ember transition-colors">
                Start over
              </button>
            </div>
            {/* Step dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-night-border">
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

      <div className="max-w-2xl mx-auto px-6">

        {/* ── Intro screen ──────────────────────────────────── */}
        {step === 0 && (
          <div className="py-16 md:py-24">
            <Link
              href="/research"
              className="inline-flex items-center gap-1 text-ember text-sm font-medium mb-8 hover:gap-2 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Research
            </Link>

            <h1 className="font-display text-4xl md:text-5xl text-sand mb-6 leading-tight">
              Wilding Spread<br />Risk Calculator
            </h1>

            <p className="text-sand-muted text-lg leading-relaxed mb-8 max-w-xl">
              Planning to plant conifers? This tool helps you understand the risk of
              wilding pine spread from your planting site. Answer 4 simple questions
              and get a risk assessment in under 2 minutes.
            </p>

            <div className="space-y-4 mb-10">
              <InfoBlock
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l3-3 3 3M15 12l3-3 3 3" /><path d="M6 9V4M18 9V4" /></svg>
                }
                title="What are wilding pines?"
                text="Wilding conifers are self-seeded exotic trees that spread from plantations into native landscapes. They can displace native vegetation, reduce water yield and change the character of the land."
              />
              <InfoBlock
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                }
                title="Why does this matter?"
                text="Regional councils may require a risk assessment before granting consent for new conifer plantings. Understanding the risk early helps you choose the right species and site to avoid problems."
              />
              <InfoBlock
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                }
                title="How does it work?"
                text="You'll answer 4 questions about your tree species, planting site, and the land downwind. The calculator automatically works out some factors (like how palatable your species is to livestock) and gives you an overall risk rating based on research by Scion and MPI."
              />
            </div>

            <button
              onClick={goNext}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-ember text-night font-display font-semibold text-base tracking-wide hover:bg-ember-light transition-colors"
            >
              Start Assessment
            </button>

            <p className="text-xs text-sand-muted/30 mt-4">
              Based on the Scion/MPI Decision Support System (DSS1, 2012)
            </p>
          </div>
        )}

        {/* ── Question steps 1-5 ────────────────────────────── */}
        {step >= 1 && step <= TOTAL_STEPS && (() => {
          const stepData = STEPS[step - 1];
          return (
            <div className="py-12 md:py-16">
              <h2 className="font-display text-2xl md:text-3xl text-sand mb-3 leading-snug">
                {stepData.question}
              </h2>

              {/* Why this matters — educational */}
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

              {/* Options */}
              <div className="space-y-3">
                {stepData.options.map((opt, i) => {
                  const isSelected = currentAnswer === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-ember bg-ember/10"
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
                            {opt.label}
                          </span>
                          <span className="text-sm text-sand-muted/50 mt-1 block leading-relaxed">
                            {opt.desc}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-night-border">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm text-sand-muted hover:text-sand transition-colors px-4 py-2.5 rounded-lg hover:bg-night-card"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <button
                  onClick={goNext}
                  disabled={currentAnswer === null}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm tracking-wide transition-all ${
                    currentAnswer !== null
                      ? "bg-ember text-night hover:bg-ember-light"
                      : "bg-night-card text-sand-muted/30 cursor-not-allowed"
                  }`}
                >
                  {step === TOTAL_STEPS ? "See Results" : "Continue"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })()}

        {/* ── Results screen ────────────────────────────────── */}
        {step === TOTAL_STEPS + 1 && totalScore !== null && risk && (
          <div className="py-12 md:py-16" id="results">
            <h2 className="font-display text-2xl md:text-3xl text-sand mb-2">
              Your Risk Assessment
            </h2>
            <p className="text-sm text-sand-muted/50 mb-8">
              Based on 5 risk indicators (4 from your answers + palatability auto-calculated)
            </p>

            {/* Big score display */}
            <div className={`rounded-2xl border-2 ${risk.border} ${risk.bg} p-8 mb-8`}>
              <div className="flex items-center gap-6 mb-6">
                <div className={`text-7xl font-display font-bold ${risk.color}`}>
                  {totalScore}
                </div>
                <div>
                  <div className={`text-2xl font-display font-semibold ${risk.color}`}>
                    {risk.label}
                  </div>
                  <div className="text-sm text-sand-muted/60 mt-0.5">out of 21 possible</div>
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

            {/* Zero exception note */}
            {hasZeroException && (
              <div className="rounded-xl border border-forest/30 bg-forest/10 p-5 mb-6">
                <p className="text-sm text-sand-muted leading-relaxed">
                  <span className="text-forest font-semibold">Good news: </span>
                  {allScores[0] === 0 && "Your chosen species has negligible spreading risk. "}
                  {allScores[3] === 0 && "The intensive grazing downwind will prevent seedling establishment. "}
                  {allScores[4] === 0 && "The dense vegetation downwind will prevent seedling establishment. "}
                  This automatically reduces the overall risk to zero for this combination.
                  {rawTotal !== null && rawTotal > 0 && (
                    <span className="text-sand-muted/40"> (Score before this adjustment: {rawTotal})</span>
                  )}
                </p>
              </div>
            )}

            {/* Score breakdown */}
            <div className="rounded-xl border border-night-border bg-night-card p-6 mb-8">
              <h3 className="font-display text-sm text-sand-muted/50 uppercase tracking-[0.14em] mb-4">
                Your Score Breakdown
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Species growth", value: allScores[0], detail: answers[0] !== null ? STEPS[0].options[answers[0]].label : "" },
                  { label: "Palatability to livestock", value: allScores[1], detail: palatabilityScore !== null ? PALATABILITY_LABELS[palatabilityScore] : "", auto: true },
                  { label: "Site wind exposure", value: allScores[2], detail: answers[1] !== null ? STEPS[1].options[answers[1]].label : "" },
                  { label: "Downwind grazing", value: allScores[3], detail: answers[2] !== null ? STEPS[2].options[answers[2]].label : "" },
                  { label: "Downwind vegetation", value: allScores[4], detail: answers[3] !== null ? STEPS[3].options[answers[3]].label : "" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-night flex items-center justify-center text-xs text-sand-muted/50 font-display">
                        {i + 1}
                      </span>
                      <span className="text-sm text-sand-muted">
                        {row.label}
                        {row.auto && <span className="text-xs text-ember/60 ml-1.5">(auto)</span>}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-sand-muted/40 max-w-[180px] truncate text-right">
                        {row.detail}
                      </span>
                      <span className="text-sm font-display font-bold text-sand w-6 text-right">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 mt-1 border-t border-night-border">
                  <span className="text-sm font-display font-semibold text-sand">Total</span>
                  <span className={`text-lg font-display font-bold ${risk.color}`}>
                    {totalScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Risk scale */}
            <div className="rounded-xl border border-night-border bg-night-card p-6 mb-8">
              <h3 className="font-display text-sm text-sand-muted/50 uppercase tracking-[0.14em] mb-4">
                Risk Scale
              </h3>
              <div className="space-y-2">
                {[
                  { range: "0", label: "No risk", color: "bg-forest/40" },
                  { range: "1 -- 7", label: "Low risk", color: "bg-forest" },
                  { range: "8 -- 11", label: "Moderate risk", color: "bg-ember" },
                  { range: "12 -- 21", label: "High risk", color: "bg-red-400" },
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
            </div>

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

            {/* Source */}
            <div className="border-t border-night-border pt-6">
              <p className="text-xs text-sand-muted/30 leading-relaxed">
                Based on the Decision Support System &ldquo;Calculating Wilding Spread Risk From New
                Plantings&rdquo; (DSS1, version 07011, June 2012) by T.S.H. Paul, Scion Research.
                Published by the Ministry for Primary Industries. This is an initial assessment
                tool &mdash; multiple calculations may be needed for sites with different topography,
                species, or downwind conditions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────── */

function InfoBlock({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-night-card border border-night-border">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ember/10 flex items-center justify-center text-ember">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold text-sand mb-1">{title}</h3>
        <p className="text-sm text-sand-muted/60 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
