import Link from "next/link";
import Image from "next/image";
import { SignupForm } from "@/components/SignupForm";

export const metadata = {
  title: "Membership | Woodsmen Outdoor Community Gym",
  description: "Free with your QLDC Alpine Gym membership. Sessions, programme, and how to join.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden">
        <Image src="/images/carry.jpg" alt="Log carry" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/65 to-night/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-4">Membership</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight text-sand max-w-lg">
            Free. Because Your Workout Pays for Itself.
          </h1>
          <p className="text-sand-muted text-lg mt-4 max-w-lg">
            The council would pay contractors to clear wilding pines. You do that work as your workout. So it costs you nothing.
          </p>
        </div>
      </header>

      {/* Why It's Free */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>How It Works</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
            A Gym That Pays for Itself
          </h2>
          <p className="text-sand-muted text-center max-w-2xl mx-auto mt-4 leading-relaxed">
            Wilding pine removal is funded conservation work. QLDC would pay contractors to do it. At Woodsmen, you do that work as your workout — and the value of the removal funds the programme. That&apos;s why sessions are free with your Alpine Gym membership.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12 max-w-3xl mx-auto">
            <div className="bg-night-card border border-night-border rounded-lg p-5 text-center">
              <span className="text-ember font-display text-3xl">1</span>
              <p className="text-sand text-sm font-semibold mt-2">You work</p>
              <p className="text-sand-muted/60 text-xs mt-1">Fell pines, haul logs, plant natives</p>
            </div>
            <div className="bg-night-card border border-night-border rounded-lg p-5 text-center">
              <span className="text-ember font-display text-3xl">2</span>
              <p className="text-sand text-sm font-semibold mt-2">Land is restored</p>
              <p className="text-sand-muted/60 text-xs mt-1">Invasive pines cleared, natives planted</p>
            </div>
            <div className="bg-night-card border border-night-border rounded-lg p-5 text-center">
              <span className="text-ember font-display text-3xl">3</span>
              <p className="text-sand text-sm font-semibold mt-2">Council saves</p>
              <p className="text-sand-muted/60 text-xs mt-1">No need to hire contractors</p>
            </div>
            <div className="bg-night-card border border-ember/30 rounded-lg p-5 text-center">
              <span className="text-ember font-display text-3xl">4</span>
              <p className="text-sand text-sm font-semibold mt-2">You get fit free</p>
              <p className="text-sand-muted/60 text-xs mt-1">The savings fund your sessions</p>
            </div>
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <h3 className="font-display text-base tracking-tight text-sand text-center mb-6">How to Join</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <JoinStep num="1" title="Get Alpine Gym Membership" desc="Sign up at QLDC Alpine Gym. Woodsmen is included." />
              <JoinStep num="2" title="Register for Sessions" desc="Drop your details and we'll book you in." />
              <JoinStep num="3" title="Show Up" desc="Sturdy boots, water bottle. We provide everything else." />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Programme */}
      <section className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Weekly Programme</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
            The Woodsmen Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <DayCard day="Monday" name="The Fell" type="Strength / Skill" desc="Axe and hand-saw work. Technique drills, partner felling, log processing." />
            <DayCard day="Tuesday" name="AxeFit" type="Conditioning / Power" desc="Chopping circuits, splitting rounds, timed efforts. High-intensity axe conditioning." />
            <DayCard day="Wednesday" name="Rest" type="Active Recovery" desc="No session. Trail walk, mobility, or rest. Good Woodsmen know when to rest the axe." />
            <DayCard day="Thursday" name="Firewood Carry" type="Cardio / Strength" desc="Loaded carries, log shuttles, sled drags, team relays through uneven terrain." />
            <DayCard day="Friday" name="Social Planting" type="Community" desc="Plant natives, build erosion barriers, then gather for kai and a yarn." highlight />
            <DayCard day="Saturday" name="Open Session" type="Mixed" desc="Rotating focus — big fell, team challenge, Timbersports skills, or community event." />
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>75-Minute Sessions</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
            Every Session Follows the Same Proven Structure
          </h2>
          <div className="max-w-2xl mx-auto mt-12 space-y-0">
            <TimelineStep time="0–10 min" title="Briefing & Warm-Up" desc="Safety briefing, tool check, trail jog, dynamic warm-up." />
            <TimelineStep time="10–20 min" title="Skill & Technique" desc="Axe technique, saw efficiency, carry mechanics. Leaders demo, you practice." />
            <TimelineStep time="20–60 min" title="The Work" desc="Main session. Trees to fell, logs to move, area to clear. Timed, measured, team-based." highlight />
            <TimelineStep time="60–70 min" title="Finisher" desc="Short, sharp effort. Max-distance carry, timed chop, or team challenge." />
            <TimelineStep time="70–75 min" title="Cool-Down & Debrief" desc="Stretch, debrief, talk about what's next. Fridays — stay for food." last />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Your First Session</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
            Here&apos;s Exactly What Happens When You Show Up
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 max-w-4xl mx-auto">
            <ExpectStep num="1" title="Show Up" desc="Sturdy boots, clothes you can move in, water bottle. We provide everything else." />
            <ExpectStep num="2" title="Get Briefed" desc="Your leader covers safety, technique, and the plan for the session." />
            <ExpectStep num="3" title="Work Hard" desc="Scaled to your level. You'll work alongside people of all abilities." />
            <ExpectStep num="4" title="Belong" desc="Stick around. Grab a coffee. The people you sweat with become your crew." />
          </div>
        </div>
      </section>

      {/* Clubrooms */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6 max-w-3xl text-center">
          <Tag>Unlock</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand mt-2">
            The Clubrooms
          </h2>
          <div className="mt-6 space-y-4 text-sand-muted leading-relaxed">
            <p>Every member can access the Woodsmen Clubrooms — our third space with a fire, a kettle, and a native plant nursery out back.</p>
            <p><strong className="text-sand">But there&apos;s one catch: you have to fell your own tree first.</strong> It&apos;s a rite of passage. Most earn their key within the first few weeks.</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand">
            Ready to Join the Crew?
          </h2>
          <p className="text-sand-muted max-w-lg mx-auto mt-4">
            Drop your details and we&apos;ll get you into your first session.
          </p>
          <div className="mt-10">
            <SignupForm buttonText="Sign Me Up" />
          </div>
        </div>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <p className="text-ember font-display text-xs tracking-[0.14em] uppercase text-center">{children}</p>;
}

function JoinStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ember/15 text-ember font-display text-lg">{num}</span>
      <h3 className="font-display text-base tracking-tight text-sand mt-3">{title}</h3>
      <p className="text-sand-muted text-sm mt-1.5">{desc}</p>
    </div>
  );
}

function DayCard({ day, name, type, desc, highlight }: { day: string; name: string; type: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-5 ${highlight ? "bg-ember/10 border border-ember/20" : "bg-night-card border border-night-border"}`}>
      <span className="text-ember font-display text-[10px] tracking-[0.14em] uppercase">{day}</span>
      <h3 className="font-display text-lg tracking-tight text-sand mt-0.5">{name}</h3>
      <span className="text-sand-muted/40 text-[10px] font-display tracking-[0.14em] uppercase">{type}</span>
      <p className="text-sand-muted text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function TimelineStep({ time, title, desc, highlight, last }: { time: string; title: string; desc: string; highlight?: boolean; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${highlight ? "bg-ember" : "bg-night-border"}`} />
        {!last && <div className="w-px flex-1 bg-night-border" />}
      </div>
      <div className="pb-7">
        <span className={`text-[10px] font-display tracking-[0.14em] uppercase ${highlight ? "text-ember" : "text-sand-muted/40"}`}>{time}</span>
        <h3 className="font-display text-base tracking-tight text-sand mt-1">{title}</h3>
        <p className="text-sand-muted text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ExpectStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ember/10 text-ember font-display text-lg">{num}</span>
      <h3 className="font-display text-sm tracking-tight text-sand mt-3">{title}</h3>
      <p className="text-sand-muted text-sm mt-1.5">{desc}</p>
    </div>
  );
}
