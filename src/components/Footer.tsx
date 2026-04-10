import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black-light border-t border-gray-dark">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-[28px] tracking-wider text-white">
              WOODSMEN
            </span>
            <p className="text-gray mt-2 text-sm leading-relaxed">
              Outdoor Community Gym
              <br />
              Queenstown, New Zealand
            </p>
          </div>

          {/* Columns */}
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                Navigate
              </h4>
              <FooterLink href="/#about">Getting Started</FooterLink>
              <FooterLink href="/#sessions">Sessions</FooterLink>
              <FooterLink href="/#wod">Work of the Day</FooterLink>
              <FooterLink href="/#why">The Mission</FooterLink>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                Woodsmen
              </h4>
              <FooterLink href="/membership">Membership</FooterLink>
              <FooterLink href="/open-a-chapter">Open a Chapter</FooterLink>
              <FooterLink href="/#join">Join</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-dark mt-12 pt-8">
          <p className="text-gray text-xs">
            &copy; 2026 Woodsmen Outdoor Community Gym. Queenstown, NZ.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray text-sm hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
