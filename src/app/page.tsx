import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WOD } from "@/components/WOD";
import { FAQ } from "@/components/FAQ";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Promo Strip */}
      <section className="bg-black-light border-y border-gray-dark py-6">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PromoItem icon="&#9650;" title="No. 1 Threat" desc="Wilding pines are NZ's biggest ecological crisis" />
          <PromoItem icon="&#9670;" title="100% Outdoors" desc="Every session. Rain, sun, frost, wind." />
          <PromoItem icon="&#9679;" title="All Welcome" desc="Every age, background, and fitness level" />
        </div>
      </section>

      {/* Getting Started */}
      <section id="about" className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Getting Started" title="WHAT IS WOODSMEN?" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              span="lg:col-span-1 lg:row-span-2"
              gradient="from-emerald-900/60 to-black/80"
              label="The Concept"
              title="The Workout Is The Work"
              desc="Forget treadmills and dumbbells. At Woodsmen, you get fit by doing real, purposeful outdoor labour — hauling logs, swinging axes, clearing invasive pines, and carrying heavy loads through the bush."
              cta={{ label: "See Sessions", href: "#sessions" }}
            />
            <FeatureCard
              gradient="from-amber-900/60 to-black/80"
              label="For Everyone"
              title="No Experience Needed"
              desc="18 or 68. First timer or veteran athlete. We scale every session so everyone works hard and no one gets left behind."
            />
            <FeatureCard
              gradient="from-green-900/60 to-black/80"
              label="Give Back"
              title="Ecological Restoration"
              desc="Every session leaves the land better. We clear wilding pines that are choking native bush, draining waterways, and destroying tussock lands."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/60 via-black/70 to-emerald-950/40" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-wide text-white">
            ENHANCE YOUR LIFE<br />IN & OUT OF THE GYM
          </h2>
          <p className="text-gray-light text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Functional strength. Mental toughness. Real mates. A body that can do hard things in the real world. Train with axes, compete in Timbersports, or build the skills to become a professional arborist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#join" className="inline-flex items-center justify-center bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all">
              Start Your Journey
            </Link>
            <Link href="#wod" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all">
              See a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section id="sessions" className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="What to Expect" title="SESSION TYPES" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <SessionCard day="MON" name="The Fell" desc="Felling day. Axe and hand-saw work to bring down wilding pines. Rotating technique drills, partner felling, and log processing. Raw, full-body power." tags={["Strength", "Skill", "Technique"]} />
            <SessionCard day="TUE" name="AxeFit" desc="High-intensity axe-based conditioning. Chopping circuits, splitting rounds, overhead work, and timed efforts. Think CrossFit met a woodshed." tags={["HIIT", "Chopping", "Splitting"]} />
            <SessionCard day="THU" name="Firewood Carry" desc="Loaded carries, log shuttles, sled drags, and team relays through uneven terrain. Build a back and legs that don't quit. Cardio meets raw strength." tags={["Cardio", "Strength", "Teamwork"]} />
            <SessionCard day="FRI" name="Social Planting" desc="Plant native seedlings in cleared areas, build erosion barriers, do light trail work — then gather for kai and a yarn. Where community is forged." tags={["Restoration", "Social", "Community"]} />
          </div>
          <div className="text-center mt-10">
            <Link href="/membership" className="inline-flex items-center justify-center bg-amber text-black font-bold text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all">
              See Full Programme & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Work of the Day */}
      <section id="wod" className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Work of the Day" title="TODAY'S SESSION" />
          <div className="mt-12">
            <WOD />
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section id="why" className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="The Mission" title="WHY WOODSMEN EXISTS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <MissionCard tag="The Problem" title="Wilding Pines Are Taking Over" desc="Invasive conifers are spreading across NZ's high country at an alarming rate — smothering tussock, draining waterways, and displacing native species. It's one of the biggest ecological threats the country faces." gradient="from-red-950/40 to-black/60" />
            <MissionCard tag="The Problem" title="Community Is Disappearing" desc="People are lonelier than ever. We scroll instead of talking. We isolate instead of gathering. Working hard alongside others — all ages, all walks of life — is becoming rare." gradient="from-blue-950/40 to-black/60" />
            <MissionCard tag="The Solution" title="Woodsmen Fixes Both" desc="Get fit doing meaningful outdoor work. Build community doing it together. Every pine we fell is a workout and an act of ecological restoration. Train hard enough and you might end up competing in Timbersports." gradient="from-green-950/40 to-black/60" />
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-2">Community</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-white mb-6">FIND YOUR CREW</h2>
              <p className="text-gray-light text-lg leading-relaxed mb-8">
                Woodsmen isn&apos;t just a gym — it&apos;s the people you grab a coffee with after hauling logs in the rain. It&apos;s the 60-year-old who pushes you harder than you thought possible. It&apos;s knowing your neighbours by name.
              </p>

              <div className="bg-black-light border border-gray-dark rounded-lg p-6 md:p-8 mb-8">
                <h3 className="font-display text-2xl tracking-wide text-white mb-4">The Clubrooms — Earned, Not Given</h3>
                <div className="space-y-4 text-gray-light leading-relaxed">
                  <p>The Woodsmen Clubrooms is your third space — not home, not work, but the place in between. A fire, a kettle, no screens, and people who get it. But you don&apos;t just walk in. You earn it.</p>
                  <p><strong className="text-white">To access the Clubrooms, you have to fell your own tree.</strong> It&apos;s a rite of passage. Your leaders will train you, guide you, and get you there — but until that pine hits the ground, the Clubrooms stays locked. Most people get there within their first few weeks. Some on day one.</p>
                  <p>Out back, we run a native plant nursery — growing the very trees we plant on Fridays. From seed to soil, the full cycle happens here.</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-amber pl-6 italic text-gray-light text-lg">
                &ldquo;The best part of CrossFit was the community. Woodsmen takes that same energy and puts it to work — literally.&rdquo;
                <cite className="block mt-2 text-sm not-italic text-gray">— Ben, Founder</cite>
              </blockquote>

              <div className="mt-8">
                <Link href="#join" className="inline-flex items-center justify-center bg-amber text-black font-bold text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all">
                  Join the Community
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <StatCard value="100%" label="Outdoor sessions" />
              <StatCard value="0" label="Mirrors or machines" />
              <StatCard value="All" label="Ages & fitness levels" />
              <StatCard value="∞" label="Pines to fell" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="FAQ" title="COMMON QUESTIONS" />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="bg-gradient-to-br from-amber-950/30 via-black to-green-950/20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-white mb-4">
            READY TO PICK UP AN AXE?
          </h2>
          <p className="text-gray-light text-lg max-w-xl mx-auto mb-10">
            We&apos;re launching soon. Drop your details and be first to know when sessions start.
          </p>
          <SignupForm />
          <p className="text-gray text-sm mt-4">No spam. Just launch updates and session info.</p>
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

function PromoItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-amber text-xl mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
      <div>
        <strong className="text-white text-sm">{title}</strong>
        <p className="text-gray text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  span,
  gradient,
  label,
  title,
  desc,
  cta,
}: {
  span?: string;
  gradient: string;
  label: string;
  title: string;
  desc: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className={`relative rounded-lg overflow-hidden min-h-[280px] flex flex-col justify-end p-6 md:p-8 ${span ?? ""}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative z-10">
        <span className="text-amber text-xs font-bold uppercase tracking-widest">{label}</span>
        <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mt-2">{title}</h3>
        <p className="text-gray-light mt-3 leading-relaxed">{desc}</p>
        {cta && (
          <Link href={cta.href} className="inline-flex items-center justify-center bg-amber text-black font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded hover:bg-amber-hover transition-all mt-4">
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}

function SessionCard({ day, name, desc, tags }: { day: string; name: string; desc: string; tags: string[] }) {
  return (
    <div className="bg-black-card border border-gray-dark rounded-lg p-6 flex flex-col hover:border-amber/30 transition-colors">
      <span className="text-amber font-display text-lg tracking-wider">{day}</span>
      <h3 className="font-display text-2xl tracking-wide text-white mt-1">{name}</h3>
      <p className="text-gray-light text-sm mt-3 leading-relaxed flex-1">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((t) => (
          <span key={t} className="text-xs font-semibold text-gray bg-gray-dark px-2.5 py-1 rounded">{t}</span>
        ))}
      </div>
    </div>
  );
}

function MissionCard({ tag, title, desc, gradient }: { tag: string; title: string; desc: string; gradient: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative z-10 p-6 md:p-8">
        <span className="text-amber text-xs font-bold uppercase tracking-widest">{tag}</span>
        <h3 className="font-display text-2xl tracking-wide text-white mt-2">{title}</h3>
        <p className="text-gray-light mt-3 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-black-light border border-gray-dark rounded-lg p-6 text-center">
      <span className="font-display text-4xl tracking-wide text-amber">{value}</span>
      <span className="block text-gray text-sm mt-1">{label}</span>
    </div>
  );
}
