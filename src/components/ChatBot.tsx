"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages([...newMessages, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantContent += decoder.decode(value, { stream: true });
        setMessages([
          ...newMessages,
          { role: "assistant", content: assistantContent },
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-ember hover:bg-ember-light text-night flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
        aria-label={open ? "Close chat" : "Ask about wilding pines"}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] max-w-[400px] h-[500px] max-h-[calc(100vh-140px)] bg-night-card border border-night-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-night-border bg-night-light flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-forest animate-pulse" />
            <div>
              <h3 className="text-sm font-bold text-sand leading-tight">
                Wilding Pine Assistant
              </h3>
              <p className="text-[11px] text-sand-muted/60">
                Ask me anything about wilding pines in NZ
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-night">
            {messages.length === 0 && (
              <div className="text-center text-sand-muted/60 text-sm py-8">
                <p className="mb-3">Hi! I can help you learn about:</p>
                <div className="space-y-1.5">
                  {[
                    "Wilding pine species in NZ",
                    "Environmental impacts",
                    "Control methods",
                    "Current research",
                    "How to get involved",
                  ].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        setInput(topic);
                        inputRef.current?.focus();
                      }}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-night-card hover:bg-night-light border border-night-border text-sand-muted hover:text-ember transition-colors cursor-pointer"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-ember text-night rounded-br-sm"
                      : "bg-night-card text-sand-muted border border-night-border rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                  {msg.role === "assistant" && msg.content === "" && loading && (
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-sand-muted/40 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-sand-muted/40 rounded-full animate-bounce [animation-delay:0.1s]" />
                      <span className="w-1.5 h-1.5 bg-sand-muted/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-3 border-t border-night-border bg-night-light flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about wilding pines..."
              disabled={loading}
              className="flex-1 bg-night border border-night-border rounded-lg px-3 py-2 text-sm text-sand placeholder:text-sand-muted/40 focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-ember hover:bg-ember-light text-night font-semibold text-sm px-4 py-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
