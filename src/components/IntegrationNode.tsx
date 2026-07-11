import { useState, useEffect, useRef } from "react";
import { IntegrationIcon } from "./IntegrationIcon";
import { Check, RefreshCw, Clock, Zap } from "lucide-react";

interface IntegrationNodeProps {
  slug: string;
  label: string;
  position: { x: number; y: number };
  ring: number;
  angle: number;
  isActive: boolean;
  isHighlighted: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  lastSync?: string;
  connectionStatus?: "connected" | "syncing" | "error";
}

export function IntegrationNode({
  slug,
  label,
  position,
  ring,
  isActive,
  isHighlighted,
  isDimmed,
  onHover,
  onLeave,
  onClick,
  lastSync = "2m ago",
  connectionStatus = "connected",
}: IntegrationNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [floatingOffset, setFloatingOffset] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [scalePulse, setScalePulse] = useState(1);
  const animationRef = useRef<number>();

  // Floating animation - unique per node based on ring and angle
  useEffect(() => {
    const startTime = performance.now();
    const floatDuration = 4000 + ring * 500;
    const rotateDuration = 6000 + ring * 1000;
    const scaleDuration = 3000 + ring * 500;
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      
      // Floating: ±6px translateY
      const floatProgress = (elapsed % floatDuration) / floatDuration;
      const floatY = Math.sin(floatProgress * Math.PI * 2) * 6;
      setFloatingOffset(floatY);
      
      // Micro rotation: ±3°
      const rotateProgress = (elapsed % rotateDuration) / rotateDuration;
      const rot = Math.sin(rotateProgress * Math.PI * 2) * 3;
      setRotationOffset(rot);
      
      // Breathing scale: 0.98-1.02
      const scaleProgress = (elapsed % scaleDuration) / scaleDuration;
      const scale = 0.98 + (Math.sin(scaleProgress * Math.PI * 2) + 1) * 0.02;
      setScalePulse(scale);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ring]);

  const statusColors = {
    connected: "bg-lime",
    syncing: "bg-brand animate-pulse",
    error: "bg-red-500",
  };

  const statusIcons = {
    connected: <Check className="w-2.5 h-2.5" />,
    syncing: <RefreshCw className="w-2.5 h-2.5 animate-spin" />,
    error: <span className="w-2.5 h-2.5">!</span>,
  };

  return (
    <div
      className="absolute cursor-pointer transition-all duration-300"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: `
          translate(-50%, -50%) 
          translateY(${floatingOffset}px) 
          rotate(${rotationOffset}deg) 
          scale(${isHovered ? 1.08 : scalePulse})
        `,
        opacity: isDimmed ? 0.25 : 1,
        zIndex: isHighlighted ? 30 : isHovered ? 20 : 10,
        willChange: "transform, opacity",
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onLeave();
      }}
      onClick={onClick}
    >
      {/* Glow effect when active or hovered */}
      {(isActive || isHighlighted || isHovered) && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: isActive || isHighlighted 
              ? "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
            transform: "scale(2)",
            filter: "blur(12px)",
            animation: "glow-pulse 2s ease-in-out infinite",
          }}
        />
      )}
      
      {/* Main icon container */}
      <div
        className={`
          relative flex items-center justify-center rounded-full
          bg-[oklch(0.2_0.02_285)] border border-white/10
          shadow-lg transition-all duration-300
          ${isHovered ? "shadow-xl border-white/20" : ""}
        `}
        style={{
          width: 52,
          height: 52,
        }}
      >
        <IntegrationIcon slug={slug} size={26} />
        
        {/* Status indicator */}
        <div
          className={`
            absolute -top-1 -right-1 w-4 h-4 rounded-full 
            flex items-center justify-center text-white
            ${statusColors[connectionStatus]}
          `}
        >
          {statusIcons[connectionStatus]}
        </div>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 p-3 rounded-xl bg-[oklch(0.2_0.02_285)]/95 backdrop-blur-xl border border-white/10 shadow-xl animate-fade-in"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <IntegrationIcon slug={slug} size={20} />
            <span className="font-semibold text-white text-sm">{label}</span>
          </div>
          
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-white/50">Status</span>
              <span className="flex items-center gap-1 text-lime">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                {connectionStatus === "connected" ? "Connected" : connectionStatus === "syncing" ? "Syncing" : "Error"}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-white/50">Last sync</span>
              <span className="flex items-center gap-1 text-white/70">
                <Clock className="w-3 h-3" />
                {lastSync}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-white/50">Workflows</span>
              <span className="text-brand-soft">3 active</span>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -50%) translateY(8px); }
          to { opacity: 1; transform: translate(-50%, -50%) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default IntegrationNode;
