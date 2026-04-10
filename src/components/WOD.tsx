"use client";

export function WOD() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-NZ", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="bg-night-card border border-night-border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-6 py-3 border-b border-night-border">
        <span className="font-display text-xs tracking-[0.14em] uppercase text-ember">Today&apos;s Work</span>
        <span className="text-sand-muted/50 text-xs">{dateStr}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl tracking-tight text-sand">The Fell — Pine Ridge, Highview Terrace</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <Block label="Warm-up">
            <p>800m trail jog</p>
            <p>2 rounds: 10 squats, 10 push-ups, 10 ring rows</p>
          </Block>
          <Block label="The Work" highlight>
            <p className="font-semibold text-sand">For time, teams of 3:</p>
            <p>Fell 6 pines (hand saw, rotating)</p>
            <p>Process into 1.2m logs</p>
            <p>Carry all logs 200m</p>
          </Block>
          <Block label="Finisher">
            <p>Max distance farmer&apos;s carry (2 logs) — 4 min</p>
          </Block>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 pt-4 border-t border-night-border text-xs text-sand-muted/50">
          <span>75 min</span><span>Equipment provided</span><span>All levels</span>
        </div>
      </div>
    </div>
  );
}

function Block({ label, highlight, children }: { label: string; highlight?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded px-4 py-3 ${highlight ? "bg-ember/10 border border-ember/20" : "bg-night-light border border-night-border"}`}>
      <span className={`text-[10px] font-display tracking-[0.14em] uppercase ${highlight ? "text-ember" : "text-sand-muted/50"}`}>{label}</span>
      <div className="mt-1.5 text-sand-muted text-sm leading-relaxed space-y-0.5">{children}</div>
    </div>
  );
}
