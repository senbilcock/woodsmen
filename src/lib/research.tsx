import { readFileSync, readdirSync } from "fs";
import { join } from "path";

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface ResearchTopic {
  slug: string;
  title: string;
  description: string;
  sourceCount: number;
  sectionCount: number;
}

const RESEARCH_DIR = join(process.cwd(), "research");

export function getTopics(): ResearchTopic[] {
  const files = readdirSync(RESEARCH_DIR).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const slug = file.replace(".md", "");
    const md = readFileSync(join(RESEARCH_DIR, file), "utf-8");
    const titleMatch = md.match(/^# (.+)/m);
    const descMatch = md.match(/^> (.+)/m);
    const sourceRows = md.match(/^\| \d/gm);
    const { sections } = parseMarkdown(md);
    return {
      slug,
      title: titleMatch ? titleMatch[1].replace(/ - Research Document$/, "") : slug,
      description: descMatch ? descMatch[1] : "",
      sourceCount: sourceRows ? sourceRows.length : 0,
      sectionCount: sections.length,
    };
  });
}

export interface SourceEntry {
  num: number;
  name: string;
  url: string;
}

export function getTopicContent(slug: string): { md: string; sections: Section[]; sources: Map<number, SourceEntry> } {
  const filePath = join(RESEARCH_DIR, `${slug}.md`);
  const md = readFileSync(filePath, "utf-8");
  const { sections } = parseMarkdown(md);
  const sources = parseSources(md);
  return { md, sections, sources };
}

function parseSources(md: string): Map<number, SourceEntry> {
  const sources = new Map<number, SourceEntry>();
  const rows = md.match(/^\| (\d+) \| (.+?) \| (.+?) \|$/gm);
  if (!rows) return sources;
  for (const row of rows) {
    const match = row.match(/^\| (\d+) \| (.+?) \| (.+?) \|$/);
    if (match) {
      const num = parseInt(match[1], 10);
      sources.set(num, { num, name: match[2].trim(), url: match[3].trim() });
    }
  }
  return sources;
}

export function parseMarkdown(md: string): { intro: string; sections: Section[] } {
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

export function renderContent(content: string, sources?: Map<number, SourceEntry>) {
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
                  className="text-left px-3 py-2 border-b-2 border-forest/30 text-forest font-semibold bg-night-card"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-night-border">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-sand-muted">
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
          <li key={i} className="text-sand-muted text-sm leading-relaxed">
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
          <strong key={key++} className="text-sand font-semibold">
            {first.match[1]}
          </strong>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "italic") {
        parts.push(
          <em key={key++} className="text-sand-muted/60 italic">
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
            className="text-ember hover:text-ember-light underline underline-offset-2"
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
          className="text-lg font-bold text-sand mt-8 mb-2"
        >
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-base font-bold text-ember mt-4 mb-1">
          {trimmed.replace("#### ", "")}
        </h4>
      );
    } else if (trimmed.startsWith("*Sources:") || trimmed.startsWith("*Source")) {
      const refNums = [...trimmed.matchAll(/\[(\d+)\]/g)].map((m) => parseInt(m[1], 10));
      elements.push(
        <div key={`src-${i}`} className="flex flex-wrap items-center gap-1.5 mt-3 mb-1">
          {refNums.map((num) => {
            const source = sources?.get(num);
            if (source) {
              return (
                <a
                  key={num}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={source.name}
                  className="inline-flex items-center gap-1 text-[11px] text-ember/70 hover:text-ember bg-ember/10 hover:bg-ember/20 rounded-full px-2 py-0.5 transition-colors"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                  {source.name.replace(/ - .+$/, "").replace(/ \(.+\)$/, "")}
                </a>
              );
            }
            return (
              <span key={num} className="text-[11px] text-sand-muted/30">[{num}]</span>
            );
          })}
        </div>
      );
    } else if (trimmed === "---") {
      // skip dividers
    } else if (trimmed === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-[15px] text-sand-muted leading-relaxed mb-3">
          {formatInline(trimmed)}
        </p>
      );
    }
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return elements;
}
