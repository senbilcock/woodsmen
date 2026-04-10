import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wilding Pine Research — Woodsmen",
  description:
    "Comprehensive research on the wilding pine problem in New Zealand. Species, impacts, control methods, legislation, and scientific studies.",
};

interface Section {
  id: string;
  title: string;
  content: string;
}

function parseMarkdown(md: string): { intro: string; sections: Section[] } {
  const lines = md.split("\n");
  const sections: Section[] = [];
  let intro = "";
  let currentSection: Section | null = null;
  let inIntro = true;

  for (const line of lines) {
    if (line.startsWith("## ") && !line.startsWith("## Source")) {
      inIntro = false;
      if (currentSection) sections.push(currentSection);
      const title = line.replace("## ", "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+$/, "");
      currentSection = { id, title, content: "" };
    } else if (currentSection) {
      currentSection.content += line + "\n";
    } else if (inIntro) {
      intro += line + "\n";
    }
  }
  if (currentSection) sections.push(currentSection);

  return { intro, sections };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  function flushTable() {
    if (tableRows.length < 2) return;
    const headers = tableRows[0]
      .split("|")
      .filter(Boolean)
      .map((h) => h.trim());
    const rows = tableRows.slice(2).map((r) =>
      r
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim())
    );
    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-3 py-2 border-b-2 border-forest/20 text-forest-dark font-semibold bg-stone-100"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-stone-200">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-stone-600">
                    {formatInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  }

  function flushList() {
    if (listItems.length === 0) return;
    elements.push(
      <ul
        key={`list-${elements.length}`}
        className="list-disc list-outside ml-5 my-3 space-y-1.5"
      >
        {listItems.map((item, i) => (
          <li key={i} className="text-stone-600 text-sm leading-relaxed">
            {formatInline(item)}
          </li>
        ))}
      </ul>
    );
    listItems = [];
    inList = false;
  }

  function formatInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const italicMatch = remaining.match(/\*(.+?)\*/);
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

      const matches = [
        boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
        italicMatch && (!boldMatch || italicMatch.index! < boldMatch.index!)
          ? { type: "italic", index: italicMatch.index!, match: italicMatch }
          : null,
        linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      ]
        .filter(Boolean)
        .sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;
      if (first.index > 0) {
        parts.push(remaining.slice(0, first.index));
      }

      if (first.type === "bold") {
        parts.push(
          <strong key={key++} className="text-stone-800 font-semibold">
            {first.match[1]}
          </strong>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "italic") {
        parts.push(
          <em key={key++} className="text-stone-500 italic">
            {first.match[1]}
          </em>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "link") {
        parts.push(
          <a
            key={key++}
            href={first.match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest hover:text-forest-dark underline underline-offset-2"
          >
            {first.match[1]}
          </a>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      }
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("|")) {
      if (inList) flushList();
      inTable = true;
      tableRows.push(trimmed);
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    } else if (inList && trimmed === "") {
      flushList();
      continue;
    } else if (inList) {
      flushList();
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg font-bold text-stone-800 mt-8 mb-2"
        >
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-base font-bold text-forest-dark mt-4 mb-1">
          {trimmed.replace("#### ", "")}
        </h4>
      );
    } else if (trimmed.startsWith("*Sources:") || trimmed.startsWith("*Source")) {
      elements.push(
        <p key={`src-${i}`} className="text-xs text-stone-400 mt-4 italic">
          {formatInline(trimmed.replace(/^\*/, "").replace(/\*$/, ""))}
        </p>
      );
    } else if (trimmed === "---") {
      // skip dividers
    } else if (trimmed === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-[15px] text-stone-600 leading-relaxed mb-3">
          {formatInline(trimmed)}
        </p>
      );
    }
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return elements;
}

export default function ResearchPage() {
  const filePath = join(process.cwd(), "research", "wilding-pines.md");
  const md = readFileSync(filePath, "utf-8");
  const { sections } = parseMarkdown(md);

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="bg-forest-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-ember-light text-sm font-semibold uppercase tracking-widest mb-3">
            Research
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
            Wilding Pines in New Zealand
          </h1>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            A comprehensive knowledge base on the wilding pine problem —
            species, environmental impacts, control methods, legislation, and
            the latest scientific research. Compiled from 23 verified sources.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar */}
        <nav className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
              Sections
            </p>
            <div className="space-y-0.5">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-stone-500 hover:text-forest-dark py-1.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile section nav */}
        <div className="lg:hidden w-full mb-8">
          <details className="border border-stone-200 rounded-xl bg-white shadow-sm">
            <summary className="px-4 py-3 text-sm font-semibold text-forest-dark cursor-pointer">
              Jump to section
            </summary>
            <div className="px-4 pb-3 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-stone-500 hover:text-forest-dark py-1.5 transition-colors"
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
              <h2 className="font-display text-2xl md:text-3xl text-stone-800 mb-4 pb-3 border-b border-stone-200">
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
            <h2 className="font-display text-2xl md:text-3xl text-stone-800 mb-4 pb-3 border-b border-stone-200">
              {section.title}
            </h2>
            <div>{renderContent(section.content)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
