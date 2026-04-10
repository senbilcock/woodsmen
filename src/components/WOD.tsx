"use client";

export function WOD() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-black-card border border-gray-dark rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-amber text-black px-6 py-3 font-bold uppercase tracking-wider text-sm">
        THE FELL
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-display text-3xl tracking-wide text-white mb-6">
          Pine Ridge — Highview Terrace
        </h3>

        <div className="flex flex-col gap-6">
          <WODBlock label="Warm-up">
            <p>800m trail jog</p>
            <p>2 rounds: 10 air squats, 10 push-ups, 10 ring rows</p>
          </WODBlock>

          <WODBlock label="Work" highlight>
            <p className="font-bold">For time, in teams of 3:</p>
            <p>Fell 6 pines (hand saw, rotating every 2 minutes)</p>
            <p>Process into 1.2m logs</p>
            <p>Carry all logs to collection point (200m)</p>
          </WODBlock>

          <WODBlock label="Finisher">
            <p>Max distance farmer&apos;s carry (2 logs) in 4 minutes</p>
          </WODBlock>
        </div>

        <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-dark text-sm text-gray">
          <span>Duration: ~75 min</span>
          <span>Equipment: Provided</span>
          <span>Scaleable: Yes</span>
          <span className="ml-auto text-gray-light">{dateStr}</span>
        </div>
      </div>
    </div>
  );
}

function WODBlock({
  label,
  highlight,
  children,
}: {
  label: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded px-5 py-4 ${highlight ? "bg-amber/10 border border-amber/30" : "bg-black-light"}`}
    >
      <span
        className={`text-xs font-bold uppercase tracking-widest ${highlight ? "text-amber" : "text-gray"}`}
      >
        {label}
      </span>
      <div className="mt-2 text-gray-light leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}
