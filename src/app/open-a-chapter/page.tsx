import Image from "next/image";
import { ChapterForm } from "./ChapterForm";

export const metadata = {
  title: "Open a Woodsmen Chapter | Woodsmen Outdoor Community Gym",
  description: "Run your own Woodsmen outdoor community gym. Own it, lead it, build community, restore land. Not a franchise — a movement.",
};

export default function OpenAChapterPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden">
        <Image src="/images/mountain.jpg" alt="Mountain landscape" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-ember-light font-semibold text-sm tracking-wide mb-4">Become a Chapter Leader</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white max-w-lg">
            Own a Woodsmen Chapter. Lead a Community. Restore Your Land.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-lg">
            Not a franchise. A network of independently owned outdoor gyms united by one mission.
          </p>
          <a href="#apply" className="inline-flex items-center justify-center bg-ember text-white font-semibold px-8 py-4 rounded-lg hover:bg-ember-dark transition-all shadow-md hover:shadow-lg mt-8">
            Apply Now
          </a>
        </div>
      </header>

      {/* The Model */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">The Model</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              You Own 100% of Your Chapter. We Give You the Brand, Training, and Network.
            </h2>
            <p className="text-stone-500 mt-4 leading-relaxed">
              Set your own pricing, schedule, and session types. Keep every dollar of membership revenue. No royalties, no revenue share — just an annual license fee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModelCard num="01" title="Your Chapter, Your Rules" desc="Choose your location, set your prices, hire your leaders. We're a network of independents, not a franchise." />
            <ModelCard num="02" title="Brand & Programming" desc="Use the Woodsmen name and logo. Access tested session programming (WSP) built around forestry, carries, and restoration." />
            <ModelCard num="03" title="Leader Certification" desc="2-day intensive: safety, axe/saw technique, programming, scaling, ecology, first aid. All leaders must be certified." />
            <ModelCard num="04" title="Support Network" desc="Chapter Leader community, monthly roundtables, mentorship, Playbook, marketing templates — independent but never alone." />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">What You Get</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              Everything You Need to Launch and Run a Successful Chapter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl mx-auto">
            <BenefitItem title="Woodsmen Brand License" desc="Legal use of name, logo, and all materials." />
            <BenefitItem title="Session Programming" desc="Structured sessions updated weekly. Use or adapt." />
            <BenefitItem title="Leader Certification" desc="Training pathway for you and your leaders." />
            <BenefitItem title="The Woodsmen Playbook" desc="Full ops manual — insurance to member management." />
            <BenefitItem title="Marketing Toolkit" desc="Social templates, posters, email sequences, launch guides." />
            <BenefitItem title="Chapter Leader Network" desc="Monthly roundtables, shared learnings, mentorship." />
            <BenefitItem title="Website Listing" desc="Your chapter on Woodsmen.com with location and schedule." />
            <BenefitItem title="Ecological Partnership Support" desc="Council/DOC templates and partnership guidance." />
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Investment</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              No Revenue Share. No Royalties. Keep 100% of Your Membership Income.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <CostCard label="One-Time" price="$500" period="Application fee" desc="Review, onboarding, Playbook access. Credited to first year if approved." />
            <CostCard label="Annual" price="$1,500" suffix="/yr" period="Chapter license" desc="Full brand license, programming, network, support. $125/mo if monthly." highlight />
            <CostCard label="Per Leader" price="$300" period="Certification" desc="2-day intensive course. Recertification every 3 years." />
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">Requirements</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              What You Need to Get Started
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <ReqItem num="01" title="Land with Wilding Pines" desc="Council, DOC, or private land with invasive pines. Mobile chapters welcome." />
            <ReqItem num="02" title="Certified Leader(s)" desc="At least one per session. You must be certified as Chapter Owner." />
            <ReqItem num="03" title="Insurance" desc="Public liability for outdoor fitness and forestry. We guide you to providers." />
            <ReqItem num="04" title="Basic Equipment" desc="Hand saws, axes, gloves, first aid, safety gear. No expensive gym kit." />
            <ReqItem num="05" title="Land Agreement" desc="Written permission to operate. We provide templates." />
            <ReqItem num="06" title="Commitment" desc="Care about ecology and community. If you're in it just for money, this isn't for you." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-ember font-semibold text-sm tracking-wide mb-3">5-Step Process</p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-stone-800 leading-tight">
              From Application to First Session in Weeks, Not Months
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <ProcessStep num="1" title="Apply" desc="Fill in the form. Tell us about you, your location, and your vision. $500 application fee." />
            <ProcessStep num="2" title="Interview" desc="We talk about your vision, assess the location, align on values. Not everyone is approved." />
            <ProcessStep num="3" title="Get Certified" desc="2-day Woodsmen Leader Certificate. Safety, technique, programming, ecology." />
            <ProcessStep num="4" title="Set Up" desc="Land access, insurance, equipment, launch plan. The Playbook walks you through it all." />
            <ProcessStep num="5" title="Launch" desc="Open your treeline. Start sessions, build your crew, clear pines. Welcome to the network." last />
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 md:py-28 bg-forest text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
            Got Land with Pines and a Fire in Your Gut?
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mt-4">
            Applications open for new chapters across New Zealand.
          </p>
          <div className="mt-10">
            <ChapterForm />
          </div>
          <p className="text-white/50 text-sm mt-4">We review applications within 2 weeks.</p>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function ModelCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
      <span className="font-display text-3xl text-ember">{num}</span>
      <h3 className="font-display text-xl text-stone-800 mt-2">{title}</h3>
      <p className="text-stone-500 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-forest shrink-0 mt-0.5"><path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <div>
        <h4 className="font-semibold text-stone-800 text-sm">{title}</h4>
        <p className="text-stone-500 text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function CostCard({ label, price, suffix, period, desc, highlight }: { label: string; price: string; suffix?: string; period: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${highlight ? "ring-2 ring-ember shadow-lg" : "border border-stone-200"}`}>
      <div className={`p-6 text-center ${highlight ? "bg-ember/5" : "bg-white"}`}>
        <span className="text-stone-400 text-xs font-semibold uppercase tracking-wider">{label}</span>
        <div className="mt-1">
          <span className="font-display text-4xl text-stone-800">{price}</span>
          {suffix && <span className="text-stone-400">{suffix}</span>}
        </div>
        <span className="text-stone-400 text-sm">{period}</span>
      </div>
      <div className="bg-stone-50 p-5">
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ReqItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5">
      <span className="text-ember font-display text-xl">{num}</span>
      <h4 className="font-semibold text-stone-800 mt-1">{title}</h4>
      <p className="text-stone-500 text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessStep({ num, title, desc, last }: { num: string; title: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-ember text-white font-display text-xl flex items-center justify-center shrink-0">{num}</div>
        {!last && <div className="w-0.5 flex-1 bg-stone-200 mt-2" />}
      </div>
      <div className="pb-8">
        <h3 className="font-semibold text-stone-800">{title}</h3>
        <p className="text-stone-500 text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
