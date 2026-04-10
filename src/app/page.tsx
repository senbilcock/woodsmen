import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/HeroCarousel";
import { WOD } from "@/components/WOD";
import { FAQ } from "@/components/FAQ";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Social Proof Strip */}
      <section className="bg-night-light border-y border-night-border py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-14 text-sand-muted/60 text-sm">
          <span><strong className="text-sand font-display text-2xl tracking-tight">100%</strong> outdoor</span>
          <span><strong className="text-sand font-display text-2xl tracking-tight">All</strong> ages &amp; levels</span>
          <span><strong className="text-sand font-display text-2xl tracking-tight">0</strong> machines or chainsaws</span>
          <span>Partnered with <strong className="text-sand">DOC</strong> &amp; <strong className="text-sand">QLDC</strong></span>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Here&apos;s How It Works</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.8rem)] tracking-tight text-sand text-center mt-2">
            You Show Up. We Hand You an Axe.<br className="hidden md:block" /> You Leave Fitter and Part of a&nbsp;Crew.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <StepCard num="01" image="/images/axe.jpg" title="We Work the Land" desc="Invasive wilding pines are NZ's #1 ecological threat. Our sessions are structured workouts that clear them — all by hand. No chainsaws, no trucks. Just quiet, purposeful work." />
            <StepCard num="02" image="/images/firewood.jpg" title="You Get Brutally Fit" desc="Axe swings build explosive power. Log carries build raw strength. Every 75-minute session is coached, scaled, and designed to push you." />
            <StepCard num="03" image="/images/community.jpg" title="You Find Your People" desc="The people you sweat alongside become your crew. All ages, all backgrounds. On Fridays we plant natives and share a meal." />
          </div>

          <div className="text-center mt-12">
            <Link href="#join" className="inline-flex items-center justify-center bg-ember text-night font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-ember-light transition-all">
              Try Your First Session
            </Link>
            <p className="text-sand-muted/40 text-sm mt-3">Free with your QLDC Alpine Gym membership.</p>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section id="sessions" className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Weekly Programme</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.8rem)] tracking-tight text-sand text-center mt-2">
            Five Sessions. One Mission. Something for Every&nbsp;Body.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            <SessionCard day="Mon" name="The Fell" type="Strength & Skill" desc="Axe and hand-saw work — no chainsaws. Technique drills, partner felling, quiet log processing." image="/images/axe.jpg" />
            <SessionCard day="Tue" name="AxeFit" type="HIIT & Power" desc="Chopping circuits, splitting rounds, timed efforts. CrossFit meets a woodshed." image="/images/firewood.jpg" />
            <SessionCard day="Thu" name="Firewood Carry" type="Cardio & Strength" desc="Loaded carries, log shuttles, sled drags, team relays through bush." image="/images/carry.jpg" />
            <SessionCard day="Fri" name="Social Planting" type="Community" desc="Plant native seedlings, build erosion barriers, then kai and a yarn." image="/images/planting.jpg" />
          </div>

          <div className="mt-14">
            <WOD />
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section id="why" className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Tag left>Why We Exist</Tag>
              <h2 className="font-display text-[clamp(1.6rem,4vw,2.8rem)] tracking-tight text-sand mt-2">
                Two Problems.<br />One Solution.
              </h2>
              <div className="mt-8 space-y-6">
                <Problem num="01" title="Wilding pines are smothering NZ" desc="Invasive conifers spreading across high country — choking tussock, draining waterways, displacing native species. The country's biggest ecological threat." />
                <Problem num="02" title="Community is disappearing" desc="People are lonelier than ever. Working hard alongside others — all ages, all walks of life — is becoming rare and valuable." />
              </div>
              <div className="mt-8 bg-forest/10 border border-forest/20 rounded-lg p-5">
                <p className="text-forest font-semibold text-sm">Woodsmen fixes both.</p>
                <p className="text-sand-muted text-sm mt-1">Get fit doing meaningful outdoor work. Build community doing it together. Train hard enough and you might end up competing in Timbersports.</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src="/images/mountain.jpg" alt="NZ high country" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Clubrooms */}
      <section className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image src="/images/forest.jpg" alt="Forest trail" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <Tag left>Earned, Not Given</Tag>
              <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand mt-2">
                The Clubrooms: A Third Space You Unlock by Felling Your Own&nbsp;Tree
              </h2>
              <div className="mt-6 space-y-4 text-sand-muted text-[15px] leading-relaxed">
                <p>Not home, not work — the place in between. A fire, a kettle, no screens. But you don&apos;t just walk in.</p>
                <p><strong className="text-sand">To access the Clubrooms, you have to fell your own tree.</strong> A rite of passage. Your leaders train you, guide you, get you there. Most earn their key within weeks.</p>
                <p>Out back: a native plant nursery — growing the trees we plant on Fridays. Seed to soil, the full cycle.</p>
              </div>
              <blockquote className="border-l-2 border-ember pl-4 mt-8 italic text-sand-muted/60 text-sm">
                &ldquo;The best part of CrossFit was the community. Woodsmen takes that same energy and puts it to work — literally.&rdquo;
                <cite className="block mt-2 not-italic text-sand-muted/40 text-xs">— Ben, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Free with Alpine Gym */}
      <section className="py-14 bg-ember">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-tight text-night">
            Free With Your QLDC Alpine Gym Membership
          </h2>
          <p className="text-night/70 mt-3 max-w-lg mx-auto">
            No separate fees. No sign-up hassle. If you&apos;re an Alpine Gym member, Woodsmen sessions are included. Just show up.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/membership" className="inline-flex items-center justify-center bg-night text-sand font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-night-light transition-all">
              Learn More
            </Link>
            <Link href="#join" className="inline-flex items-center justify-center bg-night/20 text-night font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded border border-night/30 hover:bg-night/30 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Tag>Still Have Questions?</Tag>
            <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
              Here Are the Answers Everyone Asks
            </h2>
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.8rem)] tracking-tight text-sand">
            Ready to Pick Up an Axe?
          </h2>
          <p className="text-sand-muted text-lg max-w-lg mx-auto mt-4">
            Drop your details and we&apos;ll get you into your first session. Free with your Alpine Gym membership.
          </p>
          <div className="mt-10">
            <SignupForm buttonText="Count Me In" />
          </div>
          <p className="text-sand-muted/30 text-xs mt-4">No spam. Just session details.</p>

          {/* Future pacing */}
          <div className="mt-12 bg-night-card border border-night-border rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="font-display text-sm tracking-[0.14em] uppercase text-ember mb-5">What Happens Next</h3>
            <div className="grid grid-cols-3 gap-4">
              <FutureStep num="1" title="We email you" desc="Session time, location, what to wear." />
              <FutureStep num="2" title="You show up" desc="Leader meets you, safety brief, gear provided." />
              <FutureStep num="3" title="You're crew" desc="Work hard, meet people, wonder why gyms have walls." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function Tag({ children, left }: { children: React.ReactNode; left?: boolean }) {
  return (
    <p className={`text-ember font-display text-xs tracking-[0.14em] uppercase ${left ? "" : "text-center"}`}>
      {children}
    </p>
  );
}

function StepCard({ num, image, title, desc }: { num: string; image: string; title: string; desc: string }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
        <span className="absolute top-3 left-3 font-display text-xs tracking-[0.14em] text-ember">{num}</span>
      </div>
      <h3 className="font-display text-lg tracking-tight text-sand">{title}</h3>
      <p className="text-sand-muted text-sm mt-1.5 leading-relaxed">{desc}</p>
    </div>
  );
}

function SessionCard({ day, name, type, desc, image }: { day: string; name: string; type: string; desc: string; image: string }) {
  return (
    <div className="bg-night-card border border-night-border rounded-lg overflow-hidden hover:border-ember/30 transition-colors group">
      <div className="relative h-36">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-ember font-display text-[10px] tracking-[0.14em] uppercase">{day}</span>
          <h3 className="font-display text-lg tracking-tight text-sand">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <span className="text-ember/60 text-[10px] font-display tracking-[0.14em] uppercase">{type}</span>
        <p className="text-sand-muted text-sm mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Problem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <span className="font-display text-xs tracking-[0.14em] text-ember mt-1 shrink-0">{num}</span>
      <div>
        <h3 className="font-display text-base tracking-tight text-sand">{title}</h3>
        <p className="text-sand-muted text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FutureStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-ember/15 text-ember font-display text-sm">{num}</span>
      <h4 className="font-display text-xs tracking-tight text-sand mt-2">{title}</h4>
      <p className="text-sand-muted/50 text-xs mt-1">{desc}</p>
    </div>
  );
}
