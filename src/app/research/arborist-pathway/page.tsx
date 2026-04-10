import Link from "next/link";

export const metadata = {
  title: "Arborist Qualification Pathway | Woodsmen Research",
  description: "The complete pathway from beginner to certified arborist in NZ — and how Woodsmen teaches you the skills for free.",
};

export default function ArboristPathwayPage() {
  return (
    <>
      <header className="relative py-32 md:py-40 overflow-hidden bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-4">Research / Skills</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-sand max-w-2xl">
            The Arborist Pathway: From First Axe Swing to National Qualification
          </h1>
          <p className="text-sand-muted text-lg mt-4 max-w-xl">
            Woodsmen teaches real arborist skills — rigging, climbing, felling, rope work — to NZQA national qualification levels. Free with your $15/week membership.
          </p>
        </div>
      </header>

      {/* Why This Matters */}
      <section className="py-16 md:py-24 bg-night">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl tracking-tight text-sand">Why Woodsmen Teaches Arborist Skills</h2>
          <div className="mt-6 space-y-4 text-sand-muted leading-relaxed">
            <p>Most gyms make you fit for nothing in particular. Woodsmen makes you fit for real work — and teaches you the skills to prove it.</p>
            <p>Every session at Woodsmen involves techniques that professional arborists use daily: felling cuts, rigging systems, rope work, climbing mechanics, hazard assessment. We don&apos;t outsource this training. Our leaders teach it directly, structured into the weekly programme.</p>
            <p>If you want to just get fit — great, you will. But if you want to pursue qualifications, the pathway is there. <strong className="text-sand">Free with your membership.</strong> No extra fees, no separate courses.</p>
          </div>
          <div className="mt-8 bg-ember/10 border border-ember/20 rounded-lg p-5">
            <p className="text-ember font-semibold text-sm">Think of it like CrossFit certifications.</p>
            <p className="text-sand-muted text-sm mt-1">The base sessions are for everyone. But if you want to be tested, go deeper, and earn recognised qualifications — it&apos;s all there for you. At no extra cost.</p>
          </div>
        </div>
      </section>

      {/* NZ Qualification Pathway */}
      <section className="py-16 md:py-24 bg-night-light">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-2">NZQA Pathway</p>
          <h2 className="font-display text-2xl tracking-tight text-sand">The National Qualification Levels</h2>
          <p className="text-sand-muted mt-4">New Zealand has a structured arborist qualification pathway through NZQA. Here&apos;s how Woodsmen maps to it.</p>

          <div className="mt-10 space-y-0">
            <QualLevel
              level="3"
              title="NZ Certificate in Horticulture (Arboriculture)"
              duration="~12 months"
              what="Foundation tree work — basic felling, pruning, climbing intro, safety, species ID. This is where most Woodsmen members naturally land within their first year."
              woodsmen="Weekly fell sessions teach felling technique. Seed missions teach species ID. Every session includes safety protocols. You'll cover most Level 3 content just by showing up consistently."
            />
            <QualLevel
              level="4"
              title="NZ Certificate in Horticulture Services (Arboriculture)"
              duration="~12-18 months"
              what="Advanced climbing, rigging systems, visual tree assessment, health diagnostics, complex felling. The standard professional qualification."
              woodsmen="Rigging and rope work are built into our felling sessions. Advanced members progress to complex multi-stem fells and rigging setups. Leaders run dedicated skill clinics."
            />
            <QualLevel
              level="6"
              title="NZ Diploma in Arboriculture"
              duration="~2 years"
              what="Management-level qualification. Tree risk assessment, project management, ecological planning, team leadership."
              woodsmen="Experienced members who want to lead sessions or open chapters. The Woodsmen Leader Certificate aligns with many Level 6 competencies."
              last
            />
          </div>

          <div className="mt-8 bg-night-card border border-night-border rounded-lg p-5">
            <p className="text-sand font-semibold text-sm">ISA Certified Arborist</p>
            <p className="text-sand-muted text-sm mt-1">Beyond NZQA, the International Society of Arboriculture (ISA) offers globally recognised certifications — including the Certified Tree Worker Climber Specialist. Woodsmen members can pursue ISA certification through the NZ Arboricultural Association.</p>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-16 md:py-24 bg-night">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-2">Skills You&apos;ll Learn</p>
          <h2 className="font-display text-2xl tracking-tight text-sand">What Woodsmen Teaches</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <SkillCard
              title="Felling & Directional Cuts"
              desc="Scarf cuts, back cuts, hinge wood, lean assessment. Safe, controlled felling by hand — the foundation of all tree work."
              sessions="The Fell (Mon)"
            />
            <SkillCard
              title="Rigging & Rope Systems"
              desc="Mechanical advantage, redirect systems, lowering techniques, knot craft. Control heavy loads safely using ropes."
              sessions="The Fell (Mon), AxeFit (Tue)"
              highlight
            />
            <SkillCard
              title="Climbing & Ascending"
              desc="Rope access, ascent techniques, work positioning, descent systems. Get into the canopy safely and work there."
              sessions="Skill clinics, advanced sessions"
              highlight
            />
            <SkillCard
              title="Arborist Knots"
              desc="Running bowline, clove hitch, blake&apos;s hitch, alpine butterfly, figure-8. The core knots every arborist must know — and every climber already recognises."
              sessions="Every session"
            />
            <SkillCard
              title="Hazard & Risk Assessment"
              desc="Reading lean, identifying hazards, escape routes, team communication, site safety. Every session starts with this."
              sessions="Every session (briefing)"
            />
            <SkillCard
              title="Species ID & Ecology"
              desc="Native vs invasive identification, growth patterns, ecological impact, restoration principles. Know what you&apos;re cutting and why."
              sessions="Seed Mission (Wed), Restore (Fri)"
            />
          </div>
        </div>
      </section>

      {/* Transferable Skills */}
      <section className="py-16 md:py-24 bg-night-light">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-2">Beyond Arboriculture</p>
          <h2 className="font-display text-2xl tracking-tight text-sand">Skills That Transfer to the Mountains</h2>
          <p className="text-sand-muted mt-4">The rope work, rigging, and climbing techniques used in arboriculture are directly transferable to alpine and adventure disciplines. In Queenstown, that matters.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <TransferCard title="Rock Climbing" desc="Rope management, knot systems, belay techniques, anchor building. Arborist rope work and climbing rope work share the same fundamentals." />
            <TransferCard title="Alpine & Ski Touring" desc="Fixed-line techniques, rappelling, crevasse rescue principles. The rigging skills translate directly to mountaineering rope work." />
            <TransferCard title="Search & Rescue" desc="Rope access, patient packaging, high-angle rescue. SAR teams value the exact rope skills arborists train." />
            <TransferCard title="Canyoning & Adventure" desc="Descending systems, anchor assessment, water crossings. Adventure guiding uses rigging concepts from tree work." />
          </div>

          <div className="mt-8 bg-forest/10 border border-forest/20 rounded-lg p-5">
            <p className="text-forest font-semibold text-sm">Come for the fitness. Stay for the skills.</p>
            <p className="text-sand-muted text-sm mt-1">Whether you want to become a professional arborist, improve your climbing ropecraft, or just learn to safely fell a tree — Woodsmen builds skills that matter beyond the gym.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-night">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-sand">Start Building Real Skills for $15/Week</h2>
          <p className="text-sand-muted mt-4">Every session teaches technique. The qualification pathway is free. All you have to do is show up.</p>
          <Link href="/#join" className="inline-flex items-center justify-center bg-ember text-night font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-ember-light transition-all mt-6">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

function QualLevel({ level, title, duration, what, woodsmen, last }: { level: string; title: string; duration: string; what: string; woodsmen: string; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-ember text-night font-display text-lg flex items-center justify-center shrink-0">{level}</div>
        {!last && <div className="w-px flex-1 bg-night-border mt-2" />}
      </div>
      <div className="pb-8">
        <h3 className="font-display text-base tracking-tight text-sand">{title}</h3>
        <span className="text-sand-muted/40 text-xs">{duration}</span>
        <p className="text-sand-muted text-sm mt-2 leading-relaxed">{what}</p>
        <div className="mt-3 bg-night-card border border-night-border rounded p-3">
          <span className="text-ember text-[10px] font-display tracking-[0.14em] uppercase">How Woodsmen covers this</span>
          <p className="text-sand-muted text-sm mt-1">{woodsmen}</p>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, desc, sessions, highlight }: { title: string; desc: string; sessions: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-5 ${highlight ? "bg-ember/10 border border-ember/20" : "bg-night-card border border-night-border"}`}>
      <h3 className="font-display text-base tracking-tight text-sand">{title}</h3>
      <p className="text-sand-muted text-sm mt-2 leading-relaxed">{desc}</p>
      <span className="text-sand-muted/40 text-xs mt-3 block">Taught in: {sessions}</span>
    </div>
  );
}

function TransferCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-night-card border border-night-border rounded-lg p-5">
      <h3 className="font-display text-base tracking-tight text-sand">{title}</h3>
      <p className="text-sand-muted text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
