import Image from "next/image";
import { ChapterForm } from "./ChapterForm";

export const metadata = {
  title: "Open a Woodsmen Chapter | Woodsmen Outdoor Community Gym",
  description: "Run your own Woodsmen chapter. Own it, lead it, build community, restore land.",
};

export default function OpenAChapterPage() {
  return (
    <>
      <header className="relative py-32 md:py-40 overflow-hidden">
        <Image src="/images/mountain.jpg" alt="Mountain landscape" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/65 to-night/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-ember font-display text-xs tracking-[0.14em] uppercase mb-4">Become a Chapter Leader</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight text-sand max-w-lg">
            Open a Woodsmen Chapter.
          </h1>
          <p className="text-sand-muted text-lg mt-4 max-w-lg">Not a franchise. A network of independently owned outdoor gyms united by one mission.</p>
          <a href="#apply" className="inline-flex items-center justify-center bg-ember text-night font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-ember-light transition-all mt-8">
            Apply Now
          </a>
        </div>
      </header>

      {/* Model */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>The Model</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">
            You Own 100%. We Give You Brand, Training, and&nbsp;Network.
          </h2>
          <p className="text-sand-muted text-center max-w-xl mx-auto mt-4">Set your own pricing, schedule, and session types. Keep every dollar of membership revenue. No royalties, no revenue share.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <Card num="01" title="Your Chapter, Your Rules" desc="Choose your location, set your prices, hire your leaders. We're a network of independents, not a franchise." />
            <Card num="02" title="Brand & Programming" desc="Use the Woodsmen name and logo. Access tested session programming built around forestry, carries, and restoration." />
            <Card num="03" title="Leader Certification" desc="2-day intensive: safety, axe/saw technique, programming, scaling, ecology, first aid. All leaders must be certified." />
            <Card num="04" title="Support Network" desc="Chapter Leader community, monthly roundtables, mentorship, Playbook, marketing templates." />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>What You Get</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">Chapter Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-12 max-w-3xl mx-auto">
            <Benefit title="Brand License" desc="Legal use of name, logo, and all materials." />
            <Benefit title="Session Programming" desc="Structured sessions updated weekly." />
            <Benefit title="Leader Certification" desc="Training pathway for you and your leaders." />
            <Benefit title="The Playbook" desc="Full ops manual — insurance to member management." />
            <Benefit title="Marketing Toolkit" desc="Social templates, posters, email sequences." />
            <Benefit title="Chapter Network" desc="Monthly roundtables, mentorship, shared learnings." />
            <Benefit title="Website Listing" desc="Your chapter on Woodsmen.com." />
            <Benefit title="Ecological Support" desc="Council/DOC templates and partnership guidance." />
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Investment</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">No Revenue Share. No Royalties.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <CostCard label="One-Time" price="$500" period="Application fee" desc="Review, onboarding, Playbook access. Credited to first year if approved." />
            <CostCard label="Annual" price="$1,500" suffix="/yr" period="Chapter license" desc="Full brand license, programming, network, support. $125/mo if monthly." highlight />
            <CostCard label="Per Leader" price="$300" period="Certification" desc="2-day intensive. Recertification every 3 years." />
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-28 bg-night-light">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>Requirements</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">What You Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            <Req num="01" title="Land with Wilding Pines" desc="Council, DOC, or private land. Mobile chapters welcome." />
            <Req num="02" title="Certified Leader(s)" desc="At least one per session. You must be certified." />
            <Req num="03" title="Insurance" desc="Public liability for outdoor fitness and forestry." />
            <Req num="04" title="Basic Equipment" desc="Hand saws, axes, gloves, first aid, safety gear." />
            <Req num="05" title="Land Agreement" desc="Written permission. We provide templates." />
            <Req num="06" title="Commitment" desc="Care about ecology and community. Not just money." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-night">
        <div className="max-w-6xl mx-auto px-6">
          <Tag>5-Step Process</Tag>
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-sand text-center mt-2">Application to First Session in Weeks</h2>
          <div className="max-w-2xl mx-auto mt-12">
            <Step num="1" title="Apply" desc="Fill in the form. $500 application fee." />
            <Step num="2" title="Interview" desc="We talk vision, assess location, align on values." />
            <Step num="3" title="Get Certified" desc="2-day Woodsmen Leader Certificate." />
            <Step num="4" title="Set Up" desc="Land access, insurance, equipment, launch plan." />
            <Step num="5" title="Launch" desc="Open your treeline. Welcome to the network." last />
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 md:py-28 bg-ember">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] tracking-tight text-night">
            Got Land with Pines and a Fire in Your Gut?
          </h2>
          <p className="text-night/60 max-w-lg mx-auto mt-3">Applications open for new chapters across New Zealand.</p>
          <div className="mt-10">
            <ChapterForm />
          </div>
          <p className="text-night/40 text-xs mt-4">We review within 2 weeks.</p>
        </div>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <p className="text-ember font-display text-xs tracking-[0.14em] uppercase text-center">{children}</p>;
}
function Card({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-night-card border border-night-border rounded-lg p-6">
      <span className="font-display text-2xl text-ember">{num}</span>
      <h3 className="font-display text-base tracking-tight text-sand mt-2">{title}</h3>
      <p className="text-sand-muted text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-forest text-sm mt-0.5 shrink-0">&#10003;</span>
      <div>
        <h4 className="text-sand font-semibold text-sm">{title}</h4>
        <p className="text-sand-muted text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
function CostCard({ label, price, suffix, period, desc, highlight }: { label: string; price: string; suffix?: string; period: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg overflow-hidden ${highlight ? "ring-2 ring-ember" : "border border-night-border"}`}>
      <div className={`p-5 text-center ${highlight ? "bg-ember/10" : "bg-night-card"}`}>
        <span className="text-sand-muted/40 text-[10px] font-display tracking-[0.14em] uppercase">{label}</span>
        <div className="mt-1"><span className="font-display text-3xl text-sand">{price}</span>{suffix && <span className="text-sand-muted">{suffix}</span>}</div>
        <span className="text-sand-muted/40 text-xs">{period}</span>
      </div>
      <div className="bg-night-light p-5"><p className="text-sand-muted text-sm leading-relaxed">{desc}</p></div>
    </div>
  );
}
function Req({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-night-card border border-night-border rounded-lg p-5">
      <span className="text-ember font-display text-lg">{num}</span>
      <h4 className="text-sand font-semibold text-sm mt-1">{title}</h4>
      <p className="text-sand-muted text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}
function Step({ num, title, desc, last }: { num: string; title: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-ember text-night font-display text-sm flex items-center justify-center shrink-0">{num}</div>
        {!last && <div className="w-px flex-1 bg-night-border mt-1" />}
      </div>
      <div className="pb-7">
        <h3 className="font-display text-base tracking-tight text-sand">{title}</h3>
        <p className="text-sand-muted text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
