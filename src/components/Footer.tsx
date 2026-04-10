import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl text-white">Woodsmen</span>
            <p className="text-stone-400 text-sm mt-2 leading-relaxed">
              Outdoor Community Gym
              <br />
              Queenstown, New Zealand
            </p>
            <p className="text-stone-500 text-xs mt-4">
              Getting fit by doing real work that restores the land.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm mb-1">Get Started</h4>
            <FooterLink href="/#how-it-works">How It Works</FooterLink>
            <FooterLink href="/#sessions">Sessions</FooterLink>
            <FooterLink href="/#join">Free Intro Session</FooterLink>
            <FooterLink href="/membership">Membership & Pricing</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm mb-1">Learn More</h4>
            <FooterLink href="/#proof">Results & Stories</FooterLink>
            <FooterLink href="/#why">The Mission</FooterLink>
            <FooterLink href="/#faq">FAQ</FooterLink>
            <FooterLink href="/open-a-chapter">Open a Chapter</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm mb-1">Connect</h4>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="mailto:hello@woodsmen.nz">hello@woodsmen.nz</FooterLink>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; 2026 Woodsmen Outdoor Community Gym. Queenstown, NZ.
          </p>
          <p className="text-stone-500 text-xs">
            All equipment provided. No experience needed.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-stone-400 text-sm hover:text-white transition-colors">
      {children}
    </Link>
  );
}
