import Link from "next/link";
import type { Metadata } from "next";
import { getTopics } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research — Woodsmen",
  description:
    "Peer-reviewed research on wilding pines, outdoor exercise, cold-weather training, and community health. The science behind Woodsmen.",
};

const TOPIC_META: Record<string, { tagline: string; icon: string }> = {
  "wilding-pines": {
    tagline: "NZ's biggest ecological threat — and what we're doing about it",
    icon: "🌲",
  },
  "outdoor-exercise": {
    tagline: "Why exercising outside beats any indoor gym, backed by science",
    icon: "🏔",
  },
  "community-health": {
    tagline: "The loneliness epidemic and why working together matters",
    icon: "🤝",
  },
};

export default function ResearchIndex() {
  const topics = getTopics();

  return (
    <div className="min-h-screen bg-night pt-20">
      {/* Hero */}
      <section className="bg-night-light border-b border-night-border py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-ember text-sm font-display uppercase tracking-[0.14em] mb-3">
            Research
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-sand mb-4">
            The Science Behind Woodsmen
          </h1>
          <p className="text-sand-muted text-base max-w-2xl leading-relaxed">
            Peer-reviewed studies, government data, and university research that
            underpin everything we do. Every claim on this site traces back to a
            verified source.
          </p>
        </div>
      </section>

      {/* Topic Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const meta = TOPIC_META[topic.slug];
            return (
              <Link
                key={topic.slug}
                href={`/research/${topic.slug}`}
                className="group bg-night-card border border-night-border rounded-lg p-6 hover:border-ember/30 transition-colors"
              >
                <span className="text-3xl">{meta?.icon ?? "📄"}</span>
                <h2 className="font-display text-xl tracking-tight text-sand mt-4 group-hover:text-ember transition-colors">
                  {topic.title}
                </h2>
                <p className="text-sand-muted/60 text-sm mt-2 leading-relaxed">
                  {meta?.tagline ?? topic.description}
                </p>
                <div className="flex gap-4 mt-4 text-xs text-sand-muted/40">
                  <span>{topic.sourceCount} sources</span>
                  <span>{topic.sectionCount} sections</span>
                </div>
                <span className="inline-flex items-center gap-1 text-ember text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Read research
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
