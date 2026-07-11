import { useEffect, useState, useRef } from "react";

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isActive: boolean;
  isHighlighted: boolean;
  progress?: number;
}

export function ConnectionLine({ from, to, isActive, isHighlighted, progress = 0 }: ConnectionLineProps) {
  const [dashOffset, setDashOffset] = useState(0);
  const [packetPosition, setPacketPosition] = useState(0);
  const animationRef = useRef<number>();

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Animate the dashed line when active
  useEffect(() => {
    if (!isActive) {
      setDashOffset(0);
      setPacketPosition(0);
      return;
    }

    const animate = (time: number) => {
      // Dash animation for "drawing" effect
      const dashCycle = (time % 2000) / 2000;
      setDashOffset(dashCycle * 20);

      // Packet position along the path (0 to 1)
      const packetCycle = (time % 3000) / 3000;
      setPacketPosition(packetCycle);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  if (!isActive && !isHighlighted) return null;

  return (
    <div
      className="absolute pointer-events-none transition-opacity duration-500"
      style={{
        left: from.x,
        top: from.y,
        width: length,
        height: 2,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
        opacity: isHighlighted ? 0.8 : isActive ? 1 : 0,
        willChange: "opacity",
      }}
    >
      {/* Base line - subtle glow when highlighted */}
      <div
        className="absolute inset-0"
        style={{
          background: isHighlighted
            ? "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)"
            : "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
        }}
      />

      {/* Animated dashed overlay */}
      {isActive && (
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              rgba(168,85,247,0.6) 0px,
              rgba(168,85,247,0.6) 8px,
              transparent 8px,
              transparent 20px
            )`,
            backgroundPositionX: -dashOffset,
            backgroundSize: "20px 2px",
          }}
        />
      )}

      {/* Glowing data packet */}
      {isActive && (
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            left: `${packetPosition * 100}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(168,85,247,1) 0%, rgba(168,85,247,0.5) 50%, transparent 100%)",
            boxShadow: "0 0 8px rgba(168,85,247,0.8), 0 0 16px rgba(168,85,247,0.4)",
            willChange: "transform, left",
          }}
        />
      )}

      {/* Secondary packet (offset) */}
      {isActive && (
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${((packetPosition - 0.3 + 1) % 1) * 100}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(45,212,191,0.8) 0%, rgba(45,212,191,0.3) 50%, transparent 100%)",
            boxShadow: "0 0 6px rgba(45,212,191,0.6)",
            willChange: "transform, left",
          }}
        />
      )}
    </div>
  );
}

export default ConnectionLine;
