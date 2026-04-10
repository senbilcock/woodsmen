import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const anthropic = new Anthropic();

function getResearchContent(): string {
  const filePath = join(process.cwd(), "research", "wilding-pines.md");
  return readFileSync(filePath, "utf-8");
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const researchContent = getResearchContent();

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-6-20250514",
    max_tokens: 1024,
    system: `You are a knowledgeable assistant for the Woodsmen project — an outdoor community gym in Queenstown, NZ that clears invasive wilding pines as exercise.

Answer questions about wilding pines in New Zealand using the research document below. Be concise, conversational, and helpful. If someone asks something not covered in the research, say so honestly.

Format responses with short paragraphs. Use bullet points for lists. Keep answers under 300 words unless the question demands more detail.

<research>
${researchContent}
</research>`,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
