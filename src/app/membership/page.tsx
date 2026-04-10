import Link from "next/link";
import { SignupForm } from "@/components/SignupForm";

export const metadata = {
  title: "Membership | Woodsmen Outdoor Community Gym",
  description: "Join Woodsmen. Pick a plan, get outdoors, and start making a real difference. Weekly programmes, session structure, and pricing.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Page Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/70 via-black/70 to-emerald-950/40" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">Membership</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wide text-white">
            JOIN THE<br />CREW
          </h1>
          <p className="text-gray-light text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            Pick a plan that fits your life. Every membership gets you outdoors, part of the crew, and making a real difference.
          </p>
          <Link href="#plans" className="inline-flex items-center justify-center bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all mt-8">
            See Plans
          </Link>
        </div>
      </header>

      {/* Weekly Programme */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Weekly Programme" title="THE WOODSMEN WEEK" />
          <p className="text-gray-light text-center text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Every week follows a structured programme. Each day has a different focus so your body and mind get the variety they need — and the land gets consistent work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <DayCard day="Monday" name="THE FELL" type="Strength / Skill" desc="Felling day. Axe and hand-saw work to bring down wilding pines. Rotating technique drills, partner felling, and log processing. Raw, full-body power." tags={["Axe Work", "Saw Work", "Technique"]} />
            <DayCard day="Tuesday" name="AXEFIT" type="Conditioning / Power" desc="High-intensity axe-based conditioning. Chopping circuits, splitting rounds, overhead work, and timed efforts. Think CrossFit met a woodshed." tags={["HIIT", "Chopping", "Splitting"]} />
            <DayCard day="Wednesday" name="REST / ACTIVE RECOVERY" type="Recovery" desc="No programmed session. Optional trail walk, mobility work, or just let your body recover. Good Woodsmen know when to rest the axe." tags={["Recovery", "Mobility"]} />
            <DayCard day="Thursday" name="FIREWOOD CARRY" type="Cardio / Strength" desc="Loaded carries, log shuttles, sled drags, and team relays through uneven terrain. Build a back and legs that don't quit." tags={["Carries", "Endurance", "Teamwork"]} />
            <DayCard day="Friday" name="SOCIAL PLANTING" type="Community / Restoration" desc="Plant native seedlings in cleared areas, build erosion barriers, do light trail work — then gather for kai and a yarn. Where community is forged." tags={["Planting", "Social", "Restoration"]} highlight />
            <DayCard day="Saturday" name="OPEN SESSION" type="Mixed / Community" desc="Rotating focus — could be a big fell, a team challenge, a Timbersports skills workshop, or a community event. Check the Work of the Day each week." tags={["Varies", "All Levels"]} />
          </div>
        </div>
      </section>

      {/* Session Anatomy */}
      <section className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Session Structure" title="ANATOMY OF A SESSION" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            <AnatomyStep time="0–10 min" title="Briefing & Warm-Up" desc="Safety briefing, tool check, and dynamic warm-up. Trail jog, bodyweight movements, and mobility specific to the day's work." />
            <AnatomyStep time="10–20 min" title="Skill / Technique" desc="Focused skill work — axe technique, saw efficiency, carry mechanics, or planting method. Leaders demo, members practice." />
            <AnatomyStep time="20–60 min" title="The Work" desc="The main session. Structured work with clear goals — trees to fell, logs to move, area to clear. Timed, measured, or team-based." highlight />
            <AnatomyStep time="60–70 min" title="Finisher" desc="Short, sharp effort. Max-distance carry, timed chop, or team challenge. Optional but encouraged." />
            <AnatomyStep time="70–75 min" title="Cool-Down & Debrief" desc="Stretch, breathe, debrief. Talk about what we accomplished and what's coming next." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Pricing" title="MEMBERSHIP PLANS" />
          <p className="text-gray-light text-center text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Simple, honest pricing. No lock-in contracts. No hidden fees. Founding member rates available now — they won&apos;t last.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <PriceCard tier="Drop-In" price="$25" period="per session" features={["Single session access", "All equipment provided", "Full safety briefing", "Great for trying Woodsmen"]} />
            <PriceCard tier="Limited" price="$35" suffix="/wk" period="3 sessions per week" features={["3 sessions per week", "All equipment provided", "Session programming access", "Community events"]} />
            <PriceCard tier="Unlimited" price="$50" suffix="/wk" period="Unlimited sessions" popular features={["Unlimited sessions — every day", "All equipment provided", "Session programming access", "Priority community events", "Bring a mate free once a month"]} />
            <PriceCard tier="Community" price="$20" suffix="/wk" period="2 sessions per week" features={["2 sessions per week", "Lower-intensity options", "For seniors, rehab, or beginners", "Friday Social Planting included", "No timed efforts required"]} />
          </div>

          <div className="bg-black-light border border-amber/30 rounded-lg p-6 md:p-8 mt-12 max-w-2xl mx-auto text-center">
            <h4 className="font-display text-xl tracking-wide text-amber">Founding Member Rates</h4>
            <p className="text-gray-light mt-2 leading-relaxed">Sign up before launch and lock in founding rates for the life of your membership. These prices will go up once we&apos;re established.</p>
          </div>

          <div className="bg-black-light border border-gray-dark rounded-lg p-6 md:p-8 mt-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl tracking-wide text-white mb-3">Unlock The Clubrooms</h3>
            <p className="text-gray-light leading-relaxed">
              Every membership includes access to the Woodsmen Clubrooms — our third space with a fire, a kettle, and a native plant nursery out back. <strong className="text-white">But there&apos;s one catch: you have to fell your own tree first.</strong>
            </p>
            <p className="text-gray-light leading-relaxed mt-3">
              It&apos;s a rite of passage. Your leaders will train you, guide you, and get you ready. Most people earn their key within the first few weeks.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="First Session" title="WHAT TO EXPECT" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ExpectStep num="1" title="Show Up" desc="Wear sturdy boots or trail shoes, clothes you can move and sweat in. Bring a water bottle. We provide everything else." />
            <ExpectStep num="2" title="Get Briefed" desc="Your leader walks you through safety, technique basics, and what's happening that session. No prior experience needed." />
            <ExpectStep num="3" title="Work Hard" desc="The session is scaled to your level. You'll work alongside people of all abilities. It'll be hard, but you'll never be left behind." />
            <ExpectStep num="4" title="Belong" desc="Stick around. Talk to people. Grab a coffee. The people you sweat alongside become your crew." />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="bg-gradient-to-br from-amber-950/30 via-black to-green-950/20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-white mb-4">
            JOIN WOODSMEN
          </h2>
          <p className="text-gray-light text-lg max-w-xl mx-auto mb-10">
            Drop your details and we&apos;ll get you into your first session. Founding member rates locked in for early sign-ups.
          </p>
          <SignupForm showPlan successMessage="You're in. We'll send you session details soon." />
          <p className="text-gray text-sm mt-4">We&apos;ll confirm your spot and send session details. No payment taken until we launch.</p>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-2">{tag}</p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-white">{title}</h2>
    </div>
  );
}

function DayCard({ day, name, type, desc, tags, highlight }: { day: string; name: string; type: string; desc: string; tags: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-6 flex flex-col ${highlight ? "bg-amber/10 border border-amber/30" : "bg-black-card border border-gray-dark"}`}>
      <span className="text-amber text-xs font-bold uppercase tracking-widest">{day}</span>
      <h3 className="font-display text-2xl tracking-wide text-white mt-1">{name}</h3>
      <span className="text-gray text-xs font-semibold uppercase tracking-wider mt-1">{type}</span>
      <p className="text-gray-light text-sm mt-3 leading-relaxed flex-1">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((t) => <span key={t} className="text-xs font-semibold text-gray bg-gray-dark px-2.5 py-1 rounded">{t}</span>)}
      </div>
    </div>
  );
}

function AnatomyStep({ time, title, desc, highlight }: { time: string; title: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-5 ${highlight ? "bg-amber/10 border border-amber/30" : "bg-black-light border border-gray-dark"}`}>
      <span className={`text-xs font-bold uppercase tracking-widest ${highlight ? "text-amber" : "text-gray"}`}>{time}</span>
      <h3 className="font-display text-xl tracking-wide text-white mt-2">{title}</h3>
      <p className="text-gray-light text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({ tier, price, suffix, period, features, popular }: { tier: string; price: string; suffix?: string; period: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`rounded-lg overflow-hidden flex flex-col ${popular ? "border-2 border-amber relative" : "border border-gray-dark"}`}>
      {popular && (
        <div className="bg-amber text-black text-xs font-bold uppercase tracking-wider text-center py-1.5">Most Popular</div>
      )}
      <div className="bg-black-card p-6 text-center">
        <span className="text-gray text-sm font-semibold uppercase tracking-wider">{tier}</span>
        <div className="mt-2">
          <span className="font-display text-5xl tracking-wide text-white">{price}</span>
          {suffix && <span className="text-gray-light text-lg">{suffix}</span>}
        </div>
        <span className="text-gray text-sm mt-1 block">{period}</span>
      </div>
      <div className="bg-black-light p-6 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-gray-light text-sm">
              <span className="text-green mt-0.5">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
        <Link
          href="#join"
          className={`mt-6 inline-flex items-center justify-center font-bold text-sm uppercase tracking-wider px-6 py-3 rounded transition-all ${popular ? "bg-amber text-black hover:bg-amber-hover" : "bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/5"}`}
        >
          {tier === "Drop-In" ? "Drop In" : `Join ${tier}`}
        </Link>
      </div>
    </div>
  );
}

function ExpectStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-black-light border border-gray-dark rounded-lg p-6">
      <span className="font-display text-4xl text-amber">{num}</span>
      <h3 className="font-display text-xl tracking-wide text-white mt-2">{title}</h3>
      <p className="text-gray-light text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
