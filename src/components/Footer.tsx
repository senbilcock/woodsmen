import Link from "next/link";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-night border-t border-night-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 text-sand">
              <LogoMark className="w-5 h-5" />
              <span className="font-display text-[16px] tracking-[0.14em] uppercase font-medium">Woodsmen</span>
            </div>
            <p className="text-sand-muted text-sm mt-3 leading-relaxed">
              Outdoor Community Gym<br />Queenstown, New Zealand
            </p>
            <p className="text-sand-muted/50 text-xs mt-4">
              $15/week. All sessions. All equipment.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sand font-display text-xs tracking-[0.14em] uppercase mb-1">Get Started</h4>
            <FooterLink href="/#how-it-works">How It Works</FooterLink>
            <FooterLink href="/#sessions">Sessions</FooterLink>
            <FooterLink href="/#join">Join Woodsmen</FooterLink>
            <FooterLink href="/membership">Membership</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sand font-display text-xs tracking-[0.14em] uppercase mb-1">Learn More</h4>
            <FooterLink href="/#why">The Mission</FooterLink>
            <FooterLink href="/#faq">FAQ</FooterLink>
            <FooterLink href="/open-a-chapter">Open a Chapter</FooterLink>
            <FooterLink href="/research">Research</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sand font-display text-xs tracking-[0.14em] uppercase mb-1">Connect</h4>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="mailto:hello@woodsmen.nz">hello@woodsmen.nz</FooterLink>
          </div>
        </div>

        <div className="border-t border-night-border mt-12 pt-8">
          <p className="text-sand-muted/40 text-xs">
            &copy; 2026 Woodsmen Outdoor Community Gym. Queenstown, NZ.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sand-muted text-sm hover:text-ember transition-colors">
      {children}
    </Link>
  );
}
