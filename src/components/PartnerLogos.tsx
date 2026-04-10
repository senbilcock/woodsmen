export function DOCLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* DOC shield icon */}
      <path d="M4 2C4 2 4 30 4 34C4 40 10 46 18 46C26 46 32 40 32 34V2H4Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M18 38C22 38 26 34 26 28C26 22 22 16 18 16C14 16 10 20 10 26C10 30 12 34 14 36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Text */}
      <text x="40" y="16" fill="currentColor" fontSize="12" fontFamily="system-ui" fontWeight="600">Department of</text>
      <text x="40" y="32" fill="currentColor" fontSize="14" fontFamily="system-ui" fontWeight="700">Conservation</text>
      <text x="40" y="46" fill="currentColor" fontSize="10" fontFamily="system-ui" fontStyle="italic" opacity="0.7">Te Papa Atawhai</text>
    </svg>
  );
}

export function QLDCLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Simplified QLDC mountain mark */}
      <path d="M0 0V28L18 10L24 16L26 14L38 26V0H0Z" fill="currentColor" opacity="0.9" />
      <path d="M0 20V28H38V16L26 4L24 6.5L18 0L0 20Z" fill="currentColor" opacity="0.6" />
      {/* Text */}
      <text x="46" y="16" fill="currentColor" fontSize="11" fontFamily="system-ui" fontWeight="700" letterSpacing="0.5">QUEENSTOWN LAKES</text>
      <text x="46" y="30" fill="currentColor" fontSize="11" fontFamily="system-ui" fontWeight="700" letterSpacing="0.5">DISTRICT COUNCIL</text>
    </svg>
  );
}
