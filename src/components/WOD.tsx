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
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-forest text-white px-6 py-3 flex justify-between items-center">
        <span className="font-semibold text-sm tracking-wide">TODAY&apos;S WORK</span>
        <span className="text-white/70 text-sm">{dateStr}</span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl text-stone-800">
          The Fell — Pine Ridge, Highview Terrace
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <WODBlock label="Warm-up" borderColor="border-stone-200">
            <p>800m trail jog</p>
            <p>2 rounds: 10 air squats, 10 push-ups, 10 ring rows</p>
          </WODBlock>

          <WODBlock label="The Work" borderColor="border-ember/40" highlight>
            <p className="font-semibold text-stone-800">For time, in teams of 3:</p>
            <p>Fell 6 pines (hand saw, rotating)</p>
            <p>Process into 1.2m logs</p>
            <p>Carry all logs 200m to collection</p>
          </WODBlock>

          <WODBlock label="Finisher" borderColor="border-stone-200">
            <p>Max distance farmer&apos;s carry (2 logs) in 4 minutes</p>
          </WODBlock>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-stone-100 text-sm text-stone-500">
          <span>75 min</span>
          <span>Equipment provided</span>
          <span>All levels welcome</span>
        </div>
      </div>
    </div>
  );
}

function WODBlock({
  label,
  borderColor,
  highlight,
  children,
}: {
  label: string;
  borderColor: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl p-4 border ${borderColor} ${highlight ? "bg-ember/5" : "bg-stone-50"}`}>
      <span className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-ember" : "text-stone-400"}`}>
        {label}
      </span>
      <div className="mt-2 text-stone-600 text-sm leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}
