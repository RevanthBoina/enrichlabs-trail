import { useEffect, useRef, useState, Suspense } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Animation type definitions matching the user's requirements
type AnimationType =
  "ecommerce" | "marketing" | "security" | "dashboard" | "automation" | "analytics";

interface LottieAnimationProps {
  type: AnimationType;
  className?: string;
  size?: number;
  url?: string; // Optional URL to load from
}

// CSS-based animations as primary fallback
const animationStyles: Record<AnimationType, React.CSSProperties> = {
  ecommerce: {
    background: "linear-gradient(135deg, oklch(0.7 0.15 290) 0%, oklch(0.6 0.2 300) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  marketing: {
    background: "linear-gradient(135deg, oklch(0.65 0.18 310) 0%, oklch(0.55 0.2 330) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  security: {
    background: "linear-gradient(135deg, oklch(0.65 0.15 250) 0%, oklch(0.6 0.2 270) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  dashboard: {
    background: "linear-gradient(135deg, oklch(0.6 0.18 280) 0%, oklch(0.55 0.22 295) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  automation: {
    background: "linear-gradient(135deg, oklch(0.65 0.15 160) 0%, oklch(0.6 0.2 180) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  analytics: {
    background: "linear-gradient(135deg, oklch(0.7 0.15 85) 0%, oklch(0.6 0.2 70) 100%)",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
};

// Enhanced SVG animations for each type
function AnimationIcon({ type, size = 120 }: { type: AnimationType; size?: number }) {
  const icons: Record<AnimationType, React.ReactNode> = {
    ecommerce: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="ecommerce-icon">
        {/* Shopping cart */}
        <g transform="translate(20, 40)">
          <path
            d="M5 5h4l8 25h25l8-20H18"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,200;150,200;150,200"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="30" cy="38" r="5" fill="white" opacity="0.9">
            <animate attributeName="cy" values="38;36;38" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="38" r="5" fill="white" opacity="0.9">
            <animate attributeName="cy" values="36;38;36" dur="1s" repeatCount="indefinite" />
          </circle>
          {/* Floating package */}
          <rect x="35" y="-15" width="25" height="20" rx="3" fill="white" opacity="0.7">
            <animate attributeName="y" values="-15;-25;-15" dur="2s" repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              values="0.7;0.9;0.7"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <path
            d="M35 -5 L47.5 -15 L60 -5"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M35 -5 L47.5 -15 L60 -5;M35 -15 L47.5 -25 L60 -15;M35 -5 L47.5 -15 L60 -5"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        {/* Background circles */}
        <circle cx="95" cy="25" r="15" stroke="white" strokeWidth="2" fill="none" opacity="0.2">
          <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="95" r="10" stroke="white" strokeWidth="2" fill="none" opacity="0.15">
          <animate
            attributeName="opacity"
            values="0.15;0.3;0.15"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    ),
    marketing: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="marketing-icon">
        {/* Megaphone */}
        <g transform="translate(15, 35)">
          <path d="M5 20 L5 10 L40 5 L40 35 L5 30 Z" fill="white" opacity="0.8">
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
          <rect x="40" y="8" width="30" height="24" rx="2" fill="white" opacity="0.6" />
          {/* Sound waves */}
          <path d="M75 15 Q85 20 75 25" stroke="white" strokeWidth="2" fill="none" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M82 10 Q95 20 82 30" stroke="white" strokeWidth="2" fill="none" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="0.8s"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </path>
          <path d="M89 5 Q105 20 89 35" stroke="white" strokeWidth="2" fill="none" opacity="0.2">
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="0.8s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </path>
        </g>
        {/* Growth arrow */}
        <path
          d="M20 85 L50 55 L70 70 L95 40"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,100;100,100"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="95" cy="40" r="5" fill="white" opacity="0.8">
          <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    security: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="security-icon">
        {/* Shield */}
        <path
          d="M60 10 L100 25 V55 C100 80 80 100 60 110 C40 100 20 80 20 55 V25 L60 10Z"
          fill="white"
          opacity="0.15"
        />
        <path
          d="M60 20 L90 32 V55 C90 75 75 90 60 98 C45 90 30 75 30 55 V32 L60 20Z"
          stroke="white"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        >
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Checkmark */}
        <path
          d="M45 55 L55 65 L75 45"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,50;50,0"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
        {/* Lock icon */}
        <rect x="52" y="62" width="16" height="14" rx="2" fill="white" opacity="0.7" />
        <path
          d="M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.9"
        >
          <animate
            attributeName="d"
            values="M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62;M55 62 V55 C55 52 57 50 60 50 C63 50 65 52 65 55 V62;M55 62 V55 C55 50 58 48 60 48 C62 48 65 50 65 55 V62"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        {/* Orbiting dots */}
        <circle cx="60" cy="10" r="4" fill="white" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="100" cy="60" r="3" fill="white" opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="90 60 60"
            to="450 60 60"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    ),
    dashboard: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="dashboard-icon">
        {/* Monitor frame */}
        <rect
          x="10"
          y="15"
          width="100"
          height="70"
          rx="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <rect x="15" y="20" width="90" height="55" rx="3" fill="white" opacity="0.1" />
        {/* Dashboard elements */}
        <rect x="20" y="25" width="35" height="20" rx="2" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="60" y="25" width="40" height="20" rx="2" fill="white" opacity="0.3" />
        {/* Chart */}
        <path
          d="M20 65 L40 55 L60 60 L80 45 L100 50"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,200;200,0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="40" cy="55" r="3" fill="white" opacity="0.9">
          <animate attributeName="cy" values="55;52;55" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="45" r="3" fill="white" opacity="0.9">
          <animate
            attributeName="cy"
            values="45;42;45"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        {/* Monitor stand */}
        <rect x="45" y="85" width="30" height="5" rx="2" fill="white" opacity="0.4" />
        <rect x="35" y="90" width="50" height="8" rx="3" fill="white" opacity="0.3" />
      </svg>
    ),
    automation: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="automation-icon">
        {/* Gear 1 */}
        <g transform="translate(25, 25)">
          <path
            d="M25 5 L28 12 L35 8 L33 15 L40 15 L35 20 L42 25 L35 27 L40 35 L32 33 L30 40 L25 35 L18 38 L22 30 L15 27 L22 23 L18 15 L25 18 Z"
            fill="white"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 22"
              to="360 25 22"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="25" cy="22" r="8" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        </g>
        {/* Gear 2 */}
        <g transform="translate(55, 45)">
          <path
            d="M20 4 L22 10 L28 7 L26 12 L32 12 L28 16 L34 20 L28 21 L32 27 L25 26 L23 32 L20 27 L14 29 L18 23 L12 21 L18 18 L14 12 L20 14 Z"
            fill="white"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 20 18"
              to="0 20 18"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="20" cy="18" r="6" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
        </g>
        {/* Connecting line */}
        <path d="M55 45 Q70 50 55 60" stroke="white" strokeWidth="2" fill="none" opacity="0.4">
          <animate
            attributeName="stroke-dasharray"
            values="0,20;20,0"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        {/* Lightning bolt */}
        <path d="M75 35 L65 55 L72 55 L62 75 L80 50 L73 50 L85 35 Z" fill="white" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.5;0.9"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
        {/* Dots flowing */}
        <circle r="3" fill="white" opacity="0.7">
          <animateMotion dur="2s" repeatCount="indefinite" path="M0 60 L60 60" />
        </circle>
        <circle r="3" fill="white" opacity="0.7">
          <animateMotion dur="2s" repeatCount="indefinite" path="M0 60 L60 60" begin="0.5s" />
        </circle>
        <circle r="3" fill="white" opacity="0.7">
          <animateMotion dur="2s" repeatCount="indefinite" path="M0 60 L60 60" begin="1s" />
        </circle>
      </svg>
    ),
    analytics: (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="analytics-icon">
        {/* Bar chart */}
        <rect x="15" y="65" width="18" height="35" rx="3" fill="white" opacity="0.6">
          <animate attributeName="height" values="35;45;35" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="65;55;65" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="45" width="18" height="55" rx="3" fill="white" opacity="0.7">
          <animate attributeName="height" values="55;40;55" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="45;60;45" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="65" y="35" width="18" height="65" rx="3" fill="white" opacity="0.8">
          <animate attributeName="height" values="65;50;65" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y" values="35;50;35" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="90" y="20" width="18" height="80" rx="3" fill="white" opacity="0.9">
          <animate attributeName="height" values="80;60;80" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="20;40;20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        {/* Trend line */}
        <path
          d="M24 50 L49 35 L74 40 L99 20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,100;100,0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        {/* Arrow up */}
        <path d="M100 15 L105 25 L102 25 L102 35 L98 35 L98 25 L95 25 Z" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
  };

  return <>{icons[type]}</>;
}

// Wrapper for Lottie animation from URL
function LottieFromUrl({ url, size }: { url: string; size: number }) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setError(true));
  }, [url]);

  if (error || !animationData) return null;

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      style={{ width: size, height: size }}
      loop
      autoplay
    />
  );
}

// Floating animation container
export function LottieAnimation({ type, className = "", size = 120, url }: LottieAnimationProps) {
  const reduced = useReducedMotion();
  const style = animationStyles[type];

  // Try to load from URL if provided
  if (url && !reduced) {
    return (
      <div className={`lottie-container ${className}`} style={{ width: size, height: size }}>
        <Suspense fallback={<AnimationIcon type={type} size={size} />}>
          <LottieFromUrl url={url} size={size} />
        </Suspense>
      </div>
    );
  }

  if (reduced) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ width: size, height: size, ...style }}
      >
        <AnimationIcon type={type} size={size * 0.8} />
      </div>
    );
  }

  return (
    <div className={`lottie-wrapper ${className}`} style={{ width: size, height: size, ...style }}>
      <style>{`
        .lottie-wrapper {
          animation: float 6s ease-in-out infinite;
        }
        .lottie-wrapper svg {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-12px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lottie-wrapper, .lottie-wrapper svg {
            animation: none;
          }
        }
      `}</style>
      <AnimationIcon type={type} size={size * 0.8} />
    </div>
  );
}

// Custom hook for reduced motion detection
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  return reduced;
}

export default LottieAnimation;
