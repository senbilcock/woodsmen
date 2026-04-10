import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/HeroCarousel";
import { WOD } from "@/components/WOD";
import { FAQ } from "@/components/FAQ";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <>
      {/* 1. HERO — CRO: Plain language, dual paths, risk removal */}
      <Hero />

      {/* 2. SOCIAL PROOF BAR — CRO: Trust signals near the top */}
      <section id="proof" className="bg-white border-y border-stone-200 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-stone-400 text-sm">
            <span className="flex items-center gap-2">
              <strong className="text-stone-800 text-2xl font-display">100%</strong> outdoor sessions
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-stone-800 text-2xl font-display">All</strong> ages &amp; levels
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-stone-800 text-2xl font-display">0</strong> machines needed
            </span>
            <span className="flex items-center gap-2">
              Partnered with <strong className="text-stone-800">DOC &amp; Council</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS — CRO: "Spoiler" headline, future pacing */}
      <section id="how-it-works" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Here&apos;s How It Works</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-stone-800 leading-tight">
              You Show Up. We Hand You an Axe. You Leave Fitter and Part of a Crew.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <StepCard
              num="1"
              image="/images/forest.jpg"
              title="We Work the Land"
              desc="Invasive wilding pines are NZ's #1 ecological threat. Our sessions are structured workouts that clear them — felling, chopping, hauling, carrying. Real work, real fitness."
            />
            <StepCard
              num="2"
              image="/images/axe.jpg"
              title="You Get Brutally Fit"
              desc="Axe swings build explosive power. Log carries build raw strength and cardio. Every 75-minute session is coached, scaled to your level, and designed to push you."
            />
            <StepCard
              num="3"
              image="/images/community.jpg"
              title="You Find Your People"
              desc="The people you sweat alongside become your crew. All ages, all backgrounds. On Fridays we plant natives and share a meal. This is where real community happens."
            />
          </div>

          {/* CRO: CTA after first objection resolved ("what is this?") */}
          <div className="text-center mt-12">
            <Link
              href="#join"
              className="inline-flex items-center justify-center bg-ember text-white font-semibold px-8 py-4 rounded-lg hover:bg-ember-dark transition-all shadow-md hover:shadow-lg"
            >
              Try Your First Session Free
            </Link>
            <p className="text-stone-400 text-sm mt-3">No commitment. No experience needed.</p>
          </div>
        </div>
      </section>

      {/* 4. SESSIONS — CRO: Concrete details build confidence */}
      <section id="sessions" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Weekly Programme</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-stone-800 leading-tight">
              Five Different Sessions. One Mission. Something for Every Body.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            <SessionCard
              day="Monday"
              name="The Fell"
              type="Strength & Skill"
              desc="Felling day. Axe and hand-saw work. Technique drills, partner felling, log processing."
              image="/images/axe.jpg"
            />
            <SessionCard
              day="Tuesday"
              name="AxeFit"
              type="HIIT & Power"
              desc="High-intensity chopping circuits, splitting rounds, and timed efforts. CrossFit meets a woodshed."
              image="/images/firewood.jpg"
            />
            <SessionCard
              day="Thursday"
              name="Firewood Carry"
              type="Cardio & Strength"
              desc="Loaded carries, log shuttles, sled drags, team relays through bush terrain."
              image="/images/carry.jpg"
            />
            <SessionCard
              day="Friday"
              name="Social Planting"
              type="Community & Restoration"
              desc="Plant native seedlings, build erosion barriers, then gather for kai and a yarn."
              image="/images/planting.jpg"
            />
          </div>

          {/* CRO: WOD — daily engagement hook */}
          <div className="mt-14">
            <WOD />
          </div>
        </div>
      </section>

      {/* 5. THE TWO PROBLEMS — CRO: Counter-objection "why does this exist?" */}
      <section id="why" className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ember font-semibold text-sm tracking-wide mb-3">Why We Exist</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-stone-800 leading-tight">
                Two Problems. One Solution. Every Pine We Fell Is a Workout and an Act&nbsp;of&nbsp;Restoration.
              </h2>
              <div className="mt-8 space-y-6">
                <ProblemBlock
                  num="1"
                  title="Wilding pines are smothering NZ"
                  desc="Invasive conifers are spreading across high country at alarming rates — choking tussock, draining waterways, displacing native species. It's the country's biggest ecological threat."
                />
                <ProblemBlock
                  num="2"
                  title="Community is disappearing"
                  desc="People are lonelier than ever. We scroll instead of talking. Working hard alongside others — all ages, all walks of life — is becoming rare and valuable."
                />
              </div>
              <div className="mt-8 bg-forest/10 border border-forest/20 rounded-xl p-5">
                <p className="text-forest-dark font-semibold">Woodsmen fixes both.</p>
                <p className="text-stone-600 mt-1">Get fit doing meaningful outdoor work. Build community doing it together. Train hard enough, and you might find yourself competing in Timbersports.</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/mountain.jpg" alt="NZ high country landscape" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE CLUBROOMS — CRO: Exclusivity/rite of passage as urgency */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image src="/images/forest.jpg" alt="Forest trail" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-ember font-semibold text-sm tracking-wide mb-3">Earned, Not Given</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
                The Clubrooms: A Third Space You Unlock by Felling Your Own Tree
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Not home, not work — the place in between. A fire, a kettle, no screens, and people who get it. But you don&apos;t just walk in.
                </p>
                <p>
                  <strong className="text-stone-800">To access the Clubrooms, you have to fell your own tree.</strong> It&apos;s a rite of passage. Your leaders train you, guide you, and get you there. Most people earn their key within the first few weeks.
                </p>
                <p>
                  Out back, a native plant nursery — growing the trees we plant on Fridays. Seed to soil, the full cycle happens here.
                </p>
              </div>
              <blockquote className="border-l-3 border-ember pl-5 mt-8 italic text-stone-500">
                &ldquo;The best part of CrossFit was the community. Woodsmen takes that same energy and puts it to work — literally.&rdquo;
                <cite className="block mt-2 not-italic text-sm text-stone-400">— Ben, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING PREVIEW — CRO: Sprinkled CTA with pricing anchor */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
            Founding Member Rates Are Open — They Won&apos;t Last
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            From $20/week. No lock-in contracts. No hidden fees. Early members lock in discounted rates for life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-white text-forest-dark font-semibold px-8 py-4 rounded-lg hover:bg-stone-100 transition-all shadow-md"
            >
              See All Plans & Pricing
            </Link>
            <Link
              href="#join"
              className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Book Free Intro Session
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ — CRO: Address remaining objections */}
      <section id="faq" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-ember font-semibold text-sm tracking-wide mb-3">Still Have Questions?</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
                Here Are the Answers to What Everyone Asks
              </h2>
            </div>
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA — CRO: Low-commitment ask + urgency */}
      <section id="join" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-stone-800 leading-tight">
            Your First Session Is Free. No Strings Attached.
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto mt-4 leading-relaxed">
            Show up, try it, and see if it&apos;s for you. We&apos;ll provide everything — just bring yourself and a water bottle.
          </p>
          <div className="mt-10">
            <SignupForm buttonText="Reserve My Free Session" />
          </div>
          <p className="text-stone-400 text-sm mt-4">
            No payment required. No spam. Just session details.
          </p>

          {/* CRO: Future pacing — what happens next */}
          <div className="mt-12 bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-left">
            <h3 className="font-display text-xl text-stone-800 text-center mb-6">What Happens After You Sign Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FuturePaceStep num="1" title="You get an email" desc="Session time, location, and what to wear. Usually within 24 hours." />
              <FuturePaceStep num="2" title="You show up" desc="Your leader meets you, gives you a safety brief, and hands you your gear." />
              <FuturePaceStep num="3" title="You're part of the crew" desc="Work hard, meet great people, and leave wondering why gyms have walls." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function StepCard({ num, image, title, desc }: { num: string; image: string; title: string; desc: string }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-ember text-white font-display text-xl flex items-center justify-center">
          {num}
        </div>
      </div>
      <h3 className="font-display text-xl text-stone-800">{title}</h3>
      <p className="text-stone-500 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function SessionCard({ day, name, type, desc, image }: { day: string; name: string; type: string; desc: string; image: string }) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">{day}</span>
          <h3 className="font-display text-xl text-white">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <span className="text-ember text-xs font-semibold uppercase tracking-wider">{type}</span>
        <p className="text-stone-500 text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ProblemBlock({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-ember/10 text-ember font-display text-lg flex items-center justify-center shrink-0 mt-0.5">
        {num}
      </div>
      <div>
        <h3 className="font-semibold text-stone-800">{title}</h3>
        <p className="text-stone-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FuturePaceStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-full bg-forest/10 text-forest font-display text-lg flex items-center justify-center mx-auto">
        {num}
      </div>
      <h4 className="font-semibold text-stone-800 mt-3 text-sm">{title}</h4>
      <p className="text-stone-500 text-sm mt-1">{desc}</p>
    </div>
  );
}
