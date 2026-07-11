import { useEffect, useRef } from "react";

interface StepConnectorProps {
  steps: Array<{ n: string }>;
  activeStep: number;
}

export function StepConnector({ steps, activeStep }: StepConnectorProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const path = pathRef.current;
    if (!path || reduced) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Animate as each step becomes active
    const draw = () => {
      const progress = Math.min((activeStep + 1) / steps.length, 1);
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };

    draw();
  }, [activeStep, steps.length, reduced]);

  return (
    <svg
      className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        ref={pathRef}
        d="M 10 15 Q 50 15 50 50 Q 50 85 90 85"
        stroke="oklch(0.65 0.22 295 / 0.4)"
        strokeWidth="0.3"
        strokeLinecap="round"
        fill="none"
        style={{
          transition: "stroke-dashoffset 1.2s ease-out",
        }}
      />
    </svg>
  );
}
