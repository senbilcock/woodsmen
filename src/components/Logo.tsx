export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist axe — clean, geometric, modern */}
      {/* Axe head */}
      <path
        d="M14 8L24 4L28 14L18 18L14 8Z"
        fill="currentColor"
      />
      {/* Axe blade curve */}
      <path
        d="M24 4C24 4 32 6 34 12C36 18 30 22 28 14L24 4Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Handle */}
      <path
        d="M17.5 16L8 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-7 h-7" />
      <span className="font-display text-[22px] tracking-[0.12em] uppercase">
        Woodsmen
      </span>
    </div>
  );
}
