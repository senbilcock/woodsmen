import Link from "next/link";
import Image from "next/image";
import { SignupForm } from "@/components/SignupForm";

export const metadata = {
  title: "Membership & Pricing | Woodsmen Outdoor Community Gym",
  description: "Join Woodsmen. Simple pricing from $20/week. No lock-in contracts. Founding member rates available now.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden">
        <Image src="/images/carry.jpg" alt="Log carry" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-ember-light font-semibold text-sm tracking-wide mb-4">Membership</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white max-w-lg">
            Simple Pricing. No Lock-In. Cancel Anytime.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-lg">
            Every plan includes all equipment, coached sessions, and access to the Woodsmen community.
          </p>
        </div>
      </header>

      {/* Pricing — CRO: Lead with the offer */}
      <section id="plans" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              Founding Members Lock In These Rates for Life
            </h2>
            <p className="text-stone-500 mt-3">Sign up before launch and these prices are yours forever. They will go up.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <PriceCard tier="Drop-In" price="$25" period="per session" features={["Single session access", "All equipment provided", "Full safety briefing", "Perfect for trying it out"]} />
            <PriceCard tier="Limited" price="$35" suffix="/wk" period="3 sessions per week" features={["3 sessions per week", "All equipment provided", "Session programming", "Community events"]} />
            <PriceCard tier="Unlimited" price="$50" suffix="/wk" period="All sessions" popular features={["Every session, every day", "All equipment provided", "Priority community events", "Bring a mate free monthly", "Best value per session"]} />
            <PriceCard tier="Community" price="$20" suffix="/wk" period="2 sessions per week" features={["2 sessions per week", "Lower-intensity options", "Seniors, rehab, beginners", "Friday Planting included", "No timed efforts required"]} />
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-10 max-w-xl mx-auto text-center">
            <p className="font-semibold text-stone-800">No hidden fees. No joining fee. No lock-in contract.</p>
            <p className="text-stone-500 text-sm mt-1">Pay weekly. Cancel anytime with one email.</p>
          </div>
        </div>
      </section>

      {/* Weekly Programme */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Weekly Programme</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              Every Day Has a Different Focus — So Your Body Gets Variety and the Land Gets Consistent Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <DayCard day="Monday" name="The Fell" type="Strength / Skill" desc="Axe and hand-saw work. Technique drills, partner felling, log processing." />
            <DayCard day="Tuesday" name="AxeFit" type="Conditioning / Power" desc="Chopping circuits, splitting rounds, timed efforts. High-intensity axe conditioning." />
            <DayCard day="Wednesday" name="Rest" type="Active Recovery" desc="No session. Trail walk, mobility work, or rest. Good Woodsmen know when to rest the axe." />
            <DayCard day="Thursday" name="Firewood Carry" type="Cardio / Strength" desc="Loaded carries, log shuttles, sled drags, team relays through uneven terrain." />
            <DayCard day="Friday" name="Social Planting" type="Community" desc="Plant natives, build erosion barriers, then gather for kai and a yarn." highlight />
            <DayCard day="Saturday" name="Open Session" type="Mixed" desc="Rotating focus — big fell, team challenge, Timbersports skills, or community event." />
          </div>
        </div>
      </section>

      {/* Session Anatomy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">75-Minute Sessions</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              Every Session Follows the Same Proven Structure
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            <AnatomyStep time="0–10 min" title="Briefing & Warm-Up" desc="Safety briefing, tool check, trail jog, dynamic warm-up." first />
            <AnatomyStep time="10–20 min" title="Skill & Technique" desc="Axe technique, saw efficiency, carry mechanics. Leaders demo, you practice." />
            <AnatomyStep time="20–60 min" title="The Work" desc="The main session. Trees to fell, logs to move, area to clear. Timed, measured, team-based." highlight />
            <AnatomyStep time="60–70 min" title="Finisher" desc="Short, sharp effort. Max-distance carry, timed chop, or team challenge." />
            <AnatomyStep time="70–75 min" title="Cool-Down & Debrief" desc="Stretch, debrief, talk about what's next. On Fridays — stay for food." last />
          </div>
        </div>
      </section>

      {/* What to expect — CRO: Future pacing for new members */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Your First Session</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              Here&apos;s Exactly What Happens When You Show Up
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <ExpectStep num="1" title="Show Up" desc="Sturdy boots, clothes you can move in, water bottle. We provide everything else." />
            <ExpectStep num="2" title="Get Briefed" desc="Your leader covers safety, technique, and the plan for the session." />
            <ExpectStep num="3" title="Work Hard" desc="Scaled to your level. You'll work alongside people of all abilities." />
            <ExpectStep num="4" title="Belong" desc="Stick around. Grab a coffee. The people you sweat with become your crew." />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 md:py-28 bg-forest text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
            Ready? Your First Session Is on Us.
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mt-4">
            Sign up and we&apos;ll get you booked in. No payment until you&apos;re ready to commit.
          </p>
          <div className="mt-10">
            <SignupForm showPlan successMessage="You're in! We'll send session details shortly." buttonText="Sign Me Up" />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function PriceCard({ tier, price, suffix, period, features, popular }: { tier: string; price: string; suffix?: string; period: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col ${popular ? "ring-2 ring-ember shadow-lg relative" : "border border-stone-200"}`}>
      {popular && (
        <div className="bg-ember text-white text-xs font-semibold uppercase tracking-wider text-center py-1.5">Most Popular</div>
      )}
      <div className="bg-white p-6 text-center">
        <span className="text-stone-500 text-sm font-medium">{tier}</span>
        <div className="mt-1">
          <span className="font-display text-4xl text-stone-800">{price}</span>
          {suffix && <span className="text-stone-400">{suffix}</span>}
        </div>
        <span className="text-stone-400 text-sm">{period}</span>
      </div>
      <div className="bg-stone-50 p-6 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-stone-600 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-forest shrink-0 mt-0.5"><path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {f}
            </li>
          ))}
        </ul>
        <Link
          href="#join"
          className={`mt-5 inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-lg transition-all ${popular ? "bg-ember text-white hover:bg-ember-dark shadow-sm" : "bg-white text-stone-700 border border-stone-200 hover:border-stone-400"}`}
        >
          {tier === "Drop-In" ? "Drop In" : `Choose ${tier}`}
        </Link>
      </div>
    </div>
  );
}

function DayCard({ day, name, type, desc, highlight }: { day: string; name: string; type: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${highlight ? "bg-forest/5 border border-forest/20" : "bg-white border border-stone-200"}`}>
      <span className="text-ember text-xs font-semibold uppercase tracking-wider">{day}</span>
      <h3 className="font-display text-xl text-stone-800 mt-1">{name}</h3>
      <span className="text-stone-400 text-xs font-medium uppercase tracking-wider">{type}</span>
      <p className="text-stone-500 text-sm mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}

function AnatomyStep({ time, title, desc, highlight, first, last }: { time: string; title: string; desc: string; highlight?: boolean; first?: boolean; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full shrink-0 ${highlight ? "bg-ember" : "bg-stone-300"}`} />
        {!last && <div className="w-0.5 flex-1 bg-stone-200" />}
      </div>
      <div className={`pb-8 ${first ? "" : ""}`}>
        <span className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-ember" : "text-stone-400"}`}>{time}</span>
        <h3 className="font-semibold text-stone-800 mt-1">{title}</h3>
        <p className="text-stone-500 text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ExpectStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-ember/10 text-ember font-display text-2xl flex items-center justify-center mx-auto">{num}</div>
      <h3 className="font-semibold text-stone-800 mt-4">{title}</h3>
      <p className="text-stone-500 text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
