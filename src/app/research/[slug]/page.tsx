import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTopics, getTopicContent, renderContent } from "@/lib/research";

export function generateStaticParams() {
  return getTopics().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const topics = getTopics();
    const topic = topics.find((t) => t.slug === slug);
    return {
      title: topic ? `${topic.title} — Woodsmen Research` : "Research — Woodsmen",
      description: topic?.description ?? "",
    };
  });
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topics = getTopics();
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) notFound();

  let data;
  try {
    data = getTopicContent(slug);
  } catch {
    notFound();
  }

  const { sections } = data;

  return (
    <div className="min-h-screen bg-night pt-20">
      {/* Hero */}
      <section className="bg-night-light border-b border-night-border py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-1 text-ember text-sm font-medium mb-4 hover:gap-2 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Research
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-sand mb-4">
            {topic.title}
          </h1>
          <p className="text-sand-muted text-base max-w-2xl leading-relaxed">
            {topic.description}
          </p>
          <p className="text-sand-muted/40 text-sm mt-3">
            {topic.sourceCount} verified sources &middot; {topic.sectionCount} sections
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar */}
        <nav className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs font-display text-sand-muted/50 uppercase tracking-[0.14em] mb-4">
              Sections
            </p>
            <div className="space-y-0.5">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-sand-muted/60 hover:text-ember py-1.5 px-3 rounded-lg hover:bg-night-light transition-colors"
                >
                  {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile section nav */}
        <div className="lg:hidden w-full mb-8">
          <details className="border border-night-border rounded-xl bg-night-card">
            <summary className="px-4 py-3 text-sm font-semibold text-ember cursor-pointer">
              Jump to section
            </summary>
            <div className="px-4 pb-3 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-sand-muted/60 hover:text-ember py-1.5 transition-colors"
                >
                  {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </details>
        </div>

        {/* Main content — desktop */}
        <div className="hidden lg:block flex-1 min-w-0">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-14 scroll-mt-24"
            >
              <h2 className="font-display text-2xl md:text-3xl text-sand mb-4 pb-3 border-b border-night-border">
                {section.title}
              </h2>
              <div>{renderContent(section.content)}</div>
            </section>
          ))}
        </div>
      </div>

      {/* Mobile main content */}
      <div className="lg:hidden max-w-6xl mx-auto px-6 pb-12">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-14 scroll-mt-24"
          >
            <h2 className="font-display text-2xl md:text-3xl text-sand mb-4 pb-3 border-b border-night-border">
              {section.title}
            </h2>
            <div>{renderContent(section.content)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
