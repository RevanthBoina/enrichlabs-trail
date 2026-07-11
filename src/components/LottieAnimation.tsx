import { useEffect, useRef } from "react";

// Pre-built animation data for different types of animations
type AnimationType = 
  | "ecommerce" 
  | "marketing" 
  | "security" 
  | "dashboard" 
  | "automation" 
  | "analytics" 
  | "money";

interface LottieAnimationProps {
  type: AnimationType;
  className?: string;
  size?: number;
}

// CSS-based animations that mimic Lottie but don't require JSON files
const animationStyles: Record<AnimationType, React.CSSProperties> = {
  ecommerce: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
  marketing: {
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
  security: {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
  dashboard: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
  },
  automation: {
    background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
  analytics: {
    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
  money: {
    background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  },
};

// SVG Icons for each animation type
function AnimationIcon({ type, size = 120 }: { type: AnimationType; size?: number }) {
  const icons: Record<AnimationType, React.ReactNode> = {
    ecommerce: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
        <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M50 25 L50 75 M35 40 L50 55 L65 35" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    marketing: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="20" y="50" width="15" height="30" rx="2" fill="white" opacity="0.8">
          <animate attributeName="height" values="30;40;30" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="50;40;50" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="42" y="35" width="15" height="45" rx="2" fill="white" opacity="0.9">
          <animate attributeName="height" values="45;30;45" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="35;50;35" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="65" y="45" width="15" height="35" rx="2" fill="white" opacity="0.7">
          <animate attributeName="height" values="35;50;35" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="45;30;45" dur="1.5s" repeatCount="indefinite" />
        </rect>
      </svg>
    ),
    security: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M50 10 L85 25 V50 C85 70 70 85 50 90 C30 85 15 70 15 50 V25 L50 10Z" 
          stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M50 20 L75 32 V50 C75 65 63 77 50 82 C37 77 25 65 25 50 V32 L50 20Z" 
          stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M40 50 L47 57 L62 42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dasharray" values="0,100;40,100" dur="0.8s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    dashboard: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="8" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <rect x="22" y="22" width="25" height="20" rx="3" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="52" y="22" width="25" height="20" rx="3" fill="white" opacity="0.4" />
        <rect x="22" y="47" width="55" height="8" rx="2" fill="white" opacity="0.5" />
        <rect x="22" y="60" width="40" height="8" rx="2" fill="white" opacity="0.3" />
        <circle cx="70" cy="63" r="6" fill="white" opacity="0.7">
          <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    automation: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="70" cy="30" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="50" cy="70" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M40 35 L60 60 M60 35 L40 60" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        <circle cx="30" cy="30" r="5" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="30" r="5" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="70" r="5" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    analytics: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="55" width="18" height="30" rx="3" fill="white" opacity="0.5">
          <animate attributeName="height" values="30;40;30" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="55;45;55" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="41" y="40" width="18" height="45" rx="3" fill="white" opacity="0.7">
          <animate attributeName="height" values="45;30;45" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="40;55;40" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="67" y="25" width="18" height="60" rx="3" fill="white" opacity="0.9">
          <animate attributeName="height" values="60;45;60" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="25;40;25" dur="1.8s" repeatCount="indefinite" />
        </rect>
      </svg>
    ),
    money: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
        <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <text x="50" y="58" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">$</text>
        <circle cx="50" cy="50" r="35" fill="white" opacity="0">
          <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.1;0" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  };

  return <>{icons[type]}</>;
}

// Floating animation container
export function LottieAnimation({ type, className = "", size = 120 }: LottieAnimationProps) {
  const reduced = useReducedMotion();
  const style = animationStyles[type];

  if (reduced) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width: size, height: size, ...style }}
      >
        <AnimationIcon type={type} size={size * 0.6} />
      </div>
    );
  }

  return (
    <div 
      className={`lottie-wrapper ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      <style>{`
        .lottie-wrapper {
          animation: float 6s ease-in-out infinite;
        }
        .lottie-wrapper svg {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lottie-wrapper, .lottie-wrapper svg {
            animation: none;
          }
        }
      `}</style>
      <AnimationIcon type={type} size={size * 0.6} />
    </div>
  );
}

// Custom hook for reduced motion detection
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);
  
  return reduced;
}

export default LottieAnimation;
