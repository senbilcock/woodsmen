"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

/* ── Scoring data from DSS1 (Scion, June 2012) ─────────────────────── */

const SPECIES_OPTIONS = [
  { label: "Redwoods, Leyland cypresses, cedars & spruces", score: 0, hint: "Very low risk -- no need to proceed further" },
  { label: "Radiata pine, ponderosa pine, Lawsons cypress", score: 1, hint: "" },
  { label: "Muricata pine, maritime pine, larches", score: 2, hint: "" },
  { label: "Corsican pine, mountain/dwarf mountain pine", score: 3, hint: "" },
  { label: "Douglas-fir, Scots pine", score: 4, hint: "Score 1 in moist/warm areas with no late-summer drought" },
  { label: "Lodgepole/contorta pine", score: 5, hint: "Unwanted organism under the Biosecurity Act" },
];

const PALATABILITY_OPTIONS = [
  { label: "Radiata, maritime & ponderosa pine", score: 1 },
  { label: "Lodgepole, muricata pine & European larch", score: 2 },
  { label: "Scots pine, mountain/dwarf mountain pine & Douglas-fir", score: 3 },
  { label: "Corsican pine", score: 4 },
];

const SITING_OPTIONS = [
  { label: "Well sheltered from prevalent and strong winds", score: 0, desc: "Valley bottoms, bases of slopes perpendicular to wind" },
  { label: "Flat sites, partially exposed to strong winds", score: 1, desc: "Partial protection from hills within ~1 km" },
  { label: "Lee slopes where strong eddy gusts are likely", score: 2, desc: "Behind ridges/hills exposed to strong winds" },
  { label: "Flat sites, fully exposed to strong/prevalent winds", score: 3, desc: "Open river valleys, plateaus, no obstructions" },
  { label: "Elevated take-off sites or sloping land fully exposed", score: 4, desc: "Ridge-tops, channels, slopes >10\u00b0 facing the wind" },
];

const GRAZING_OPTIONS = [
  { label: "Intensive grazing on developed pasture", score: 0, hint: "Total score becomes 0 (no risk)" },
  { label: "Regular mob stocking with sheep", score: 1, hint: "" },
  { label: "Semi-improved grazing / occasional mob stocking", score: 2, hint: "" },
  { label: "Extensive grazing only", score: 3, hint: "" },
  { label: "No grazing", score: 4, hint: "" },
];

const VEGETATION_OPTIONS = [
  { label: "Plantation forest or developed pasture (intensive grazing)", score: 0, hint: "Total score becomes 0 (no risk)" },
  { label: "Dense native forest, shrubland, tussock or grassland", score: 1, hint: "Continuous and dense vegetation cover" },
  { label: "Forest, shrubland, tussock or grassland with few gaps", score: 2, hint: "" },
  { label: "Open forest / scattered patches of dense vegetation", score: 3, hint: "Many gaps in ground cover" },
  { label: "Open slips, rockland, light low-stature vegetation", score: 4, hint: "Bare ground and mineral soil available" },
];

function getRiskLevel(score: number): { label: string; color: string; bg: string; description: string } {
  if (score === 0) return { label: "No Risk", color: "text-forest", bg: "bg-forest/20 border-forest/30", description: "No risk of wilding spread for this combination of site and receiving area. However, note the need to test long-distance spread risk from exposed sites." };
  if (score < 8) return { label: "Low Risk", color: "text-forest", bg: "bg-forest/20 border-forest/30", description: "Low risk of wilding spread. Monitor and manage fringe spread. Remove outlier trees before coning age." };
  if (score < 12) return { label: "Moderate Risk", color: "text-ember", bg: "bg-ember/20 border-ember/30", description: "Moderate risk. Consider a different species choice or siting, or modify downwind land management to reduce the score." };
  return { label: "High Risk", color: "text-red-400", bg: "bg-red-400/20 border-red-400/30", description: "High risk of wilding spread. A change of species, siting, or downwind land management can significantly lower risk. A commitment to wilding removal should be made." };
}

export default function CalculatorPage() {
  const [speciesIdx, setSpeciesIdx] = useState<number | null>(null);
  const [palatabilityIdx, setPalatabilityIdx] = useState<number | null>(null);
  const [sitingIdx, setSitingIdx] = useState<number | null>(null);
  const [grazingIdx, setGrazingIdx] = useState<number | null>(null);
  const [vegetationIdx, setVegetationIdx] = useState<number | null>(null);

  const speciesScore = speciesIdx !== null ? SPECIES_OPTIONS[speciesIdx].score : null;
  const palatabilityScore = palatabilityIdx !== null ? PALATABILITY_OPTIONS[palatabilityIdx].score : null;
  const sitingScore = sitingIdx !== null ? SITING_OPTIONS[sitingIdx].score : null;
  const grazingScore = grazingIdx !== null ? GRAZING_OPTIONS[grazingIdx].score : null;
  const vegetationScore = vegetationIdx !== null ? VEGETATION_OPTIONS[vegetationIdx].score : null;

  const allAnswered = speciesScore !== null && palatabilityScore !== null && sitingScore !== null && grazingScore !== null && vegetationScore !== null;

  // Stop/go exceptions: if species growth = 0, or grazing = 0, or vegetation = 0, total = 0
  const hasZeroException = speciesScore === 0 || grazingScore === 0 || vegetationScore === 0;

  const rawTotal = allAnswered
    ? (speciesScore ?? 0) + (palatabilityScore ?? 0) + (sitingScore ?? 0) + (grazingScore ?? 0) + (vegetationScore ?? 0)
    : null;

  const totalScore = allAnswered ? (hasZeroException ? 0 : rawTotal) : null;
  const risk = totalScore !== null ? getRiskLevel(totalScore) : null;

  const stepsComplete = [speciesIdx, palatabilityIdx, sitingIdx, grazingIdx, vegetationIdx].filter((v) => v !== null).length;

  function reset() {
    setSpeciesIdx(null);
    setPalatabilityIdx(null);
    setSitingIdx(null);
    setGrazingIdx(null);
    setVegetationIdx(null);
  }

  return (
    <div className="min-h-screen bg-night pt-20">
      {/* Hero */}
      <section className="bg-night-light border-b border-night-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-1 text-ember text-sm font-medium mb-4 hover:gap-2 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Research
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-sand mb-4">
            Wilding Spread Risk Calculator
          </h1>
          <p className="text-sand-muted text-base max-w-2xl leading-relaxed">
            Assess the risk of wilding conifer spread from a proposed planting site.
            Based on the MPI/Scion Decision Support System (DSS1).
          </p>
          <p className="text-sand-muted/40 text-sm mt-3">
            5 indicators &middot; Score range 0&ndash;21 &middot; Source: Scion Research
          </p>
        </div>
      </section>

      {/* Progress bar */}
      <div className="sticky top-16 z-20 bg-night/90 backdrop-blur-sm border-b border-night-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-sand-muted font-display">{stepsComplete}/5 complete</span>
            <div className="w-32 h-1.5 bg-night-card rounded-full overflow-hidden">
              <div
                className="h-full bg-ember rounded-full transition-all duration-500"
                style={{ width: `${(stepsComplete / 5) * 100}%` }}
              />
            </div>
          </div>
          {stepsComplete > 0 && (
            <button
              onClick={reset}
              className="text-xs text-sand-muted/50 hover:text-ember transition-colors"
            >
              Reset all
            </button>
          )}
        </div>
      </div>

      {/* Calculator steps */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* 1. Species Growth */}
        <IndicatorCard
          step={1}
          title="Species Growth"
          subtitle="Spreading vigour"
          description="The species planted determines the risk through seed weight, wing size, cone production, and timing of seed release."
          scoreRange="0-5"
        >
          <RadioGroup
            options={SPECIES_OPTIONS.map((o) => ({ label: o.label, sublabel: o.hint }))}
            selected={speciesIdx}
            onSelect={setSpeciesIdx}
            scores={SPECIES_OPTIONS.map((o) => o.score)}
          />
        </IndicatorCard>

        {/* 2. Species Palatability */}
        <IndicatorCard
          step={2}
          title="Species Palatability"
          subtitle="Susceptibility to browsing"
          description="How easily livestock (especially sheep) can graze and control seedlings. More palatable species are easier to manage."
          scoreRange="1-4"
        >
          <RadioGroup
            options={PALATABILITY_OPTIONS.map((o) => ({ label: o.label, sublabel: "" }))}
            selected={palatabilityIdx}
            onSelect={setPalatabilityIdx}
            scores={PALATABILITY_OPTIONS.map((o) => o.score)}
          />
        </IndicatorCard>

        {/* 3. Siting */}
        <IndicatorCard
          step={3}
          title="Siting of New Planting"
          subtitle="Topographic position"
          description="The site's position relative to prevailing wind direction determines how far seed can travel. Exposed ridges and take-off sites carry the highest risk."
          scoreRange="0-4"
        >
          <RadioGroup
            options={SITING_OPTIONS.map((o) => ({ label: o.label, sublabel: o.desc }))}
            selected={sitingIdx}
            onSelect={setSitingIdx}
            scores={SITING_OPTIONS.map((o) => o.score)}
          />
        </IndicatorCard>

        {/* 4. Downwind Land Use */}
        <IndicatorCard
          step={4}
          title="Downwind Land Use"
          subtitle="Grazing regime"
          description="The grazing intensity on land downwind of the planting (within 2 km). Intensive grazing prevents wilding establishment."
          scoreRange="0-4"
          zeroNote="Scoring 0 here sets the total score to 0 (no risk for this area)."
        >
          <RadioGroup
            options={GRAZING_OPTIONS.map((o) => ({ label: o.label, sublabel: o.hint }))}
            selected={grazingIdx}
            onSelect={setGrazingIdx}
            scores={GRAZING_OPTIONS.map((o) => o.score)}
          />
        </IndicatorCard>

        {/* 5. Downwind Vegetation Cover */}
        <IndicatorCard
          step={5}
          title="Downwind Vegetation Cover"
          subtitle="Competition from existing vegetation"
          description="Dense, shade-providing vegetation reduces wilding survival. Open ground with bare soil provides establishment microsites."
          scoreRange="0-4"
          zeroNote="Scoring 0 here sets the total score to 0 (no risk for this area)."
        >
          <RadioGroup
            options={VEGETATION_OPTIONS.map((o) => ({ label: o.label, sublabel: o.hint }))}
            selected={vegetationIdx}
            onSelect={setVegetationIdx}
            scores={VEGETATION_OPTIONS.map((o) => o.score)}
          />
        </IndicatorCard>

        {/* Results */}
        {allAnswered && totalScore !== null && risk && (
          <div id="results" className="scroll-mt-24">
            <div className={`rounded-2xl border p-8 ${risk.bg}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`text-6xl font-display font-bold ${risk.color}`}>
                    {totalScore}
                  </div>
                  <div>
                    <div className={`text-lg font-display font-semibold ${risk.color}`}>
                      {risk.label}
                    </div>
                    <div className="text-sm text-sand-muted">out of 21 possible</div>
                  </div>
                </div>
              </div>

              <p className="text-sand-muted leading-relaxed mb-6">
                {risk.description}
              </p>

              {hasZeroException && (
                <div className="bg-night/40 rounded-xl p-4 mb-6">
                  <p className="text-sm text-sand-muted">
                    <span className="text-forest font-semibold">Zero exception applied:</span>{" "}
                    {speciesScore === 0 && "Species growth scored 0. "}
                    {grazingScore === 0 && "Downwind land use scored 0. "}
                    {vegetationScore === 0 && "Downwind vegetation cover scored 0. "}
                    The total score automatically becomes 0 for this combination.
                    {rawTotal !== null && rawTotal > 0 && (
                      <span className="text-sand-muted/50"> (Raw total before exception: {rawTotal})</span>
                    )}
                  </p>
                </div>
              )}

              {/* Score breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <ScoreChip label="Growth" score={speciesScore!} />
                <ScoreChip label="Palatability" score={palatabilityScore!} />
                <ScoreChip label="Siting" score={sitingScore!} />
                <ScoreChip label="Grazing" score={grazingScore!} />
                <ScoreChip label="Vegetation" score={vegetationScore!} />
              </div>
            </div>

            {/* Risk scale legend */}
            <div className="mt-6 rounded-xl border border-night-border bg-night-card p-6">
              <h3 className="font-display text-sm text-sand-muted/50 uppercase tracking-[0.14em] mb-4">
                Risk Scale
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-forest/60" />
                  <span className="text-sm text-sand-muted">0 = No risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-forest" />
                  <span className="text-sm text-sand-muted">1&ndash;7 = Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-ember" />
                  <span className="text-sm text-sand-muted">8&ndash;11 = Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-sm text-sand-muted">12&ndash;21 = High</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl bg-night-card border border-night-border text-sand text-sm font-semibold hover:border-ember/40 transition-colors"
              >
                Calculate Again
              </button>
              <Link
                href="/research/wilding-pines"
                className="px-6 py-3 rounded-xl bg-ember text-night text-sm font-semibold hover:bg-ember-light transition-colors"
              >
                Learn More About Wilding Pines
              </Link>
            </div>
          </div>
        )}

        {/* Source attribution */}
        <div className="border-t border-night-border pt-8 mt-8">
          <p className="text-xs text-sand-muted/40 leading-relaxed">
            Based on the Decision Support System &ldquo;Calculating Wilding Spread Risk From New
            Plantings&rdquo; (DSS1, version 07011, June 2012) by T.S.H. Paul, Scion Research.
            Published by the Ministry for Primary Industries. This calculator is for initial
            assessment only &mdash; multiple calculations may be needed for sites with different
            topography, species, or downwind conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function IndicatorCard({
  step,
  title,
  subtitle,
  description,
  scoreRange,
  zeroNote,
  children,
}: {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  scoreRange: string;
  zeroNote?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-night-border bg-night-card overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-ember/15 text-ember text-sm font-display font-bold">
              {step}
            </span>
            <div>
              <h2 className="font-display text-xl text-sand">{title}</h2>
              <p className="text-xs text-sand-muted/50 uppercase tracking-wider">{subtitle}</p>
            </div>
          </div>
          <span className="text-xs text-sand-muted/40 bg-night rounded-lg px-2.5 py-1 font-mono">
            {scoreRange} pts
          </span>
        </div>
        <p className="text-sm text-sand-muted/70 leading-relaxed mt-2">{description}</p>
        {zeroNote && (
          <p className="text-xs text-forest/70 mt-1">{zeroNote}</p>
        )}
      </div>
      <div className="px-6 pb-6">{children}</div>
    </div>
  );
}

function RadioGroup({
  options,
  selected,
  onSelect,
  scores,
}: {
  options: { label: string; sublabel: string }[];
  selected: number | null;
  onSelect: (idx: number) => void;
  scores: number[];
}) {
  return (
    <div className="space-y-2">
      {options.map((opt, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-start gap-3 group ${
              isSelected
                ? "border-ember/60 bg-ember/10"
                : "border-night-border hover:border-sand-muted/20 bg-night/40"
            }`}
          >
            <span
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                isSelected
                  ? "border-ember bg-ember"
                  : "border-sand-muted/30 group-hover:border-sand-muted/50"
              }`}
            >
              {isSelected && (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#0B0F0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-sm leading-snug ${isSelected ? "text-sand" : "text-sand-muted"}`}>
                  {opt.label}
                </span>
                <span
                  className={`flex-shrink-0 text-xs font-mono px-2 py-0.5 rounded ${
                    isSelected ? "bg-ember/20 text-ember" : "bg-night text-sand-muted/40"
                  }`}
                >
                  {scores[i]}
                </span>
              </div>
              {opt.sublabel && (
                <span className="text-xs text-sand-muted/40 mt-0.5 block">{opt.sublabel}</span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function ScoreChip({ label, score }: { label: string; score: number }) {
  return (
    <div className="bg-night/40 rounded-lg p-3 text-center">
      <div className="text-lg font-display font-bold text-sand">{score}</div>
      <div className="text-xs text-sand-muted/50">{label}</div>
    </div>
  );
}
