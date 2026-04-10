import { ChapterForm } from "./ChapterForm";

export const metadata = {
  title: "Open a Woodsmen Chapter | Woodsmen Outdoor Community Gym",
  description: "Run your own Woodsmen outdoor community gym. Own your chapter, lead your community, restore your land.",
};

export default function OpenAChapterPage() {
  return (
    <>
      {/* Page Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/70 via-black/70 to-amber-950/40" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">Become a Chapter Leader</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wide text-white">
            OPEN A<br />WOODSMEN CHAPTER
          </h1>
          <p className="text-gray-light text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            Run your own Woodsmen outdoor community gym. Own your chapter, lead your community, restore your land.
          </p>
          <a href="#apply" className="inline-flex items-center justify-center bg-amber text-black font-bold text-[15px] uppercase tracking-wider px-9 py-4 rounded hover:bg-amber-hover hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(232,145,58,0.3)] transition-all mt-8">
            Apply Now
          </a>
        </div>
      </header>

      {/* The Model */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="The Model" title="NOT A FRANCHISE. A MOVEMENT." />
          <p className="text-gray-light text-center text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Every Woodsmen Chapter is independently owned and operated. You run your sessions, set your pricing, hire your leaders, and build your community your way. We give you the brand, the programming, the training, and the network — you bring the grit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ModelCard num="01" title="Your Chapter, Your Rules" desc="You own the operation. Choose your location — a pine-infested hillside, council land, private property with permission. Set your own schedule, pricing, and session types. We're not a franchise — we're a network of independently run chapters united by a shared mission." />
            <ModelCard num="02" title="Woodsmen Brand & Programming" desc="Use the Woodsmen name, logo, and materials. Get access to Woodsmen Session Programming (WSP) — tested workout structures built around forestry, carries, and land restoration. Optional, not mandatory." />
            <ModelCard num="03" title="Leader Training & Certification" desc="All session leaders must hold a Woodsmen Leader Certificate. The course covers safety, axe/saw technique, session programming, scaling for all fitness levels, ecological restoration principles, and first aid." />
            <ModelCard num="04" title="Community & Support Network" desc="Join a network of Chapter Leaders across NZ and beyond. Share programming, swap ideas, solve problems together. Access the Woodsmen Playbook, marketing templates, and operational guides." />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="What You Get" title="CHAPTER BENEFITS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <BenefitItem title="Woodsmen Brand License" desc="Legal use of the Woodsmen name, logo, and all promotional materials for your chapter." />
            <BenefitItem title="Session Programming (WSP)" desc="Access to Woodsmen Session Programming — structured sessions updated weekly. Use them as-is or adapt to your environment." />
            <BenefitItem title="Leader Certification" desc="Training pathway for you and your session leaders. Safety, technique, programming, and ecological knowledge." />
            <BenefitItem title="The Woodsmen Playbook" desc="Operations manual covering everything from insurance and land access to session planning and member management." />
            <BenefitItem title="Marketing Toolkit" desc="Ready-to-use social media templates, posters, email sequences, and launch guides to get members through the door." />
            <BenefitItem title="Chapter Leader Network" desc="Private community of Woodsmen Chapter Leaders. Monthly roundtables, shared learnings, and mentorship from established chapters." />
            <BenefitItem title="Listing on Woodsmen.com" desc="Your chapter listed on the Woodsmen website with location, schedule, and contact info for people to find you." />
            <BenefitItem title="Ecological Partnership Support" desc="Guidance on partnering with local councils, DOC, and landowners. Templates for land access agreements and restoration reporting." />
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Investment" title="WHAT IT COSTS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <CostCard label="One-Time" price="$500" period="Application fee" desc="Covers your application review, onboarding, and initial Playbook access. Non-refundable but credited toward your first year if approved." />
            <CostCard label="Annual" price="$1,500" suffix="/yr" period="Chapter license fee" desc="Full brand license, programming access, network membership, and ongoing support. Payable monthly ($125/mo) or annually." highlight />
            <CostCard label="Per Leader" price="$300" period="Leader certification" desc="Covers the Woodsmen Leader Certificate course. 2-day intensive covering safety, technique, programming, scaling, and ecological restoration." />
          </div>
          <div className="bg-black-light border border-gray-dark rounded-lg p-6 mt-8 max-w-2xl mx-auto text-center">
            <p className="text-white font-bold">No revenue share. No franchise fees. No royalties.</p>
            <p className="text-gray-light mt-1">You keep 100% of your membership revenue. The annual license is your only ongoing cost to Woodsmen HQ.</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-black-card py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Requirements" title="WHAT YOU NEED" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ReqItem num="01" title="A Location with Wilding Pines" desc="Access to land with invasive pines to clear — council land, DOC land with permission, or private property. Mobile chapters welcome." />
            <ReqItem num="02" title="Certified Leader(s)" desc="At least one Woodsmen Certified Leader must be present at every session. You (the Chapter Owner) must be certified." />
            <ReqItem num="03" title="Insurance" desc="Public liability insurance covering outdoor fitness and forestry activities. We'll guide you to providers who understand what we do." />
            <ReqItem num="04" title="Basic Equipment" desc="Hand saws, axes, gloves, first aid kit, and safety gear. No expensive gym equipment needed. Detailed list in the Playbook." />
            <ReqItem num="05" title="Council/Landowner Agreement" desc="Written permission to operate on the land you're using. We provide agreement templates and can help you approach councils and DOC." />
            <ReqItem num="06" title="Commitment to the Mission" desc="This isn't just a gym. You need to care about ecological restoration and genuine community building. If you're in it just for the money, this isn't for you." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader tag="Process" title="HOW TO OPEN A CHAPTER" />
          <div className="max-w-3xl mx-auto mt-12 flex flex-col gap-0">
            <ProcessStep num="1" title="Apply" desc="Fill in the application below. Tell us about yourself, your location, your access to land, and why you want to lead a Woodsmen Chapter. Application fee: $500." />
            <ProcessStep num="2" title="Interview & Approval" desc="We'll have a conversation about your vision, assess your proposed location, and make sure we're aligned on values and mission. Not everyone gets approved — and that's intentional." />
            <ProcessStep num="3" title="Get Certified" desc="Complete the Woodsmen Leader Certificate — a 2-day intensive course. Safety protocols, axe/saw technique, session programming, scaling, and ecological restoration practices." />
            <ProcessStep num="4" title="Set Up" desc="Secure your land access, get insurance, acquire equipment, and build your launch plan. The Playbook walks you through every step." />
            <ProcessStep num="5" title="Launch" desc="Open your treeline. Start running sessions, building your crew, and clearing pines. Welcome to the network." last />
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="bg-gradient-to-br from-green-950/30 via-black to-amber-950/20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-white mb-4">
            READY TO LEAD?
          </h2>
          <p className="text-gray-light text-lg max-w-xl mx-auto mb-10">
            Applications are open for new Woodsmen Chapters across New Zealand. Got land with pines and a fire in your gut? Let&apos;s talk.
          </p>
          <ChapterForm />
          <p className="text-gray text-sm mt-4">We review applications within 2 weeks. We&apos;ll be in touch.</p>
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

function ModelCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-black-card border border-gray-dark rounded-lg p-6 md:p-8">
      <span className="font-display text-4xl text-amber">{num}</span>
      <h3 className="font-display text-2xl tracking-wide text-white mt-2">{title}</h3>
      <p className="text-gray-light mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-green text-lg mt-0.5 shrink-0">&#10003;</span>
      <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-gray-light text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CostCard({ label, price, suffix, period, desc, highlight }: { label: string; price: string; suffix?: string; period: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg overflow-hidden ${highlight ? "border-2 border-amber" : "border border-gray-dark"}`}>
      <div className={`p-6 text-center ${highlight ? "bg-amber/10" : "bg-black-card"}`}>
        <span className="text-gray text-xs font-bold uppercase tracking-widest">{label}</span>
        <div className="mt-2">
          <span className="font-display text-5xl tracking-wide text-white">{price}</span>
          {suffix && <span className="text-gray-light text-lg">{suffix}</span>}
        </div>
        <span className="text-gray text-sm block mt-1">{period}</span>
      </div>
      <div className="bg-black-light p-6">
        <p className="text-gray-light text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ReqItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-black-light border border-gray-dark rounded-lg p-6">
      <span className="text-amber font-display text-2xl">{num}</span>
      <h4 className="text-white font-bold mt-2">{title}</h4>
      <p className="text-gray-light text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessStep({ num, title, desc, last }: { num: string; title: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-amber text-black font-display text-xl flex items-center justify-center shrink-0">
          {num}
        </div>
        {!last && <div className="w-px flex-1 bg-gray-dark mt-2" />}
      </div>
      <div className={`pb-8 ${last ? "" : ""}`}>
        <h3 className="font-display text-xl tracking-wide text-white">{title}</h3>
        <p className="text-gray-light text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
