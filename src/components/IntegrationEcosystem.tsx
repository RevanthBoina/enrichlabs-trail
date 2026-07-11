import { useEffect, useRef, useState, useMemo } from "react";
import { IntegrationIcon } from "./IntegrationIcon";
import { ArrowRight, Check, RefreshCw, Zap, Activity, Clock } from "lucide-react";

// All integrations organized by category
const allIntegrations = [
  // Communication
  { label: "Slack", slug: "slack", category: "communication" },
  { label: "Microsoft Teams", slug: "teams", category: "communication" },
  { label: "Discord", slug: "discord", category: "communication" },
  { label: "Intercom", slug: "intercom", category: "communication" },

  // Productivity
  { label: "Notion", slug: "notion", category: "productivity" },
  { label: "Google Workspace", slug: "googleworkspace", category: "productivity" },
  { label: "Gmail", slug: "gmail", category: "productivity" },
  { label: "Google Drive", slug: "googledrive", category: "productivity" },
  { label: "Airtable", slug: "airtable", category: "productivity" },
  { label: "Calendly", slug: "calendly", category: "productivity" },

  // CRM & Sales
  { label: "HubSpot", slug: "hubspot", category: "crm" },
  { label: "Salesforce", slug: "salesforce", category: "crm" },
  { label: "Pipedrive", slug: "pipedrive", category: "crm" },

  // Marketing
  { label: "Mailchimp", slug: "mailchimp", category: "marketing" },
  { label: "Klaviyo", slug: "klaviyo", category: "marketing" },
  { label: "Meta", slug: "meta", category: "marketing" },
  { label: "LinkedIn", slug: "linkedin", category: "marketing" },
  { label: "X", slug: "x", category: "marketing" },
  { label: "Instagram", slug: "instagram", category: "marketing" },
  { label: "Reddit", slug: "reddit", category: "marketing" },

  // E-commerce
  { label: "Shopify", slug: "shopify", category: "ecommerce" },
  { label: "Stripe", slug: "stripe", category: "ecommerce" },
  { label: "WordPress", slug: "wordpress", category: "ecommerce" },
  { label: "Webflow", slug: "webflow", category: "ecommerce" },

  // Automation
  { label: "Zapier", slug: "zapier", category: "automation" },
  { label: "Make", slug: "make", category: "automation" },
  { label: "n8n", slug: "n8n", category: "automation" },

  // Development
  { label: "GitHub", slug: "github", category: "development" },
  { label: "Jira", slug: "jira", category: "development" },
  { label: "Linear", slug: "linear", category: "development" },
  { label: "Figma", slug: "figma", category: "development" },
  { label: "Google Ads", slug: "googleads", category: "marketing" },

  // Custom
  { label: "API / Webhook", slug: "api", category: "custom" },
];

// Generate orbital positions
function generateOrbitalPositions(
  count: number,
  centerX: number,
  centerY: number,
  minRadius: number,
  maxRadius: number,
) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = minRadius + (maxRadius - minRadius) * (Math.random() * 0.5 + 0.5);
    positions.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      angle,
      radius,
      speed: 0.1 + Math.random() * 0.2,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return positions;
}

// Animated connection line component
function ConnectionLine({
  from,
  to,
  progress,
  isActive,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  progress: number;
  isActive: boolean;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: from.x,
        top: from.y,
        width: length,
        height: 2,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
      }}
    >
      {/* Base line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Animated data packet */}
      {isActive && (
        <div
          className="absolute w-2 h-2 rounded-full bg-brand-soft shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          style={{
            left: `${progress * 100}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}

// Integration chip with hover effects
function IntegrationChip({
  integration,
  position,
  isActive,
  onHover,
  onLeave,
}: {
  integration: (typeof allIntegrations)[0];
  position: { x: number; y: number };
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const size = 52;

  return (
    <div
      className="absolute cursor-pointer transition-all duration-300"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
        zIndex: isHovered ? 50 : isActive ? 40 : 20,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onLeave();
      }}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
          transform: "scale(1.5)",
          filter: "blur(8px)",
        }}
      />

      {/* Icon container */}
      <div
        className={`
          relative rounded-full bg-white shadow-lg transition-all duration-300
          flex items-center justify-center
          ${isHovered ? "shadow-[0_10px_40px_-10px_rgba(168,85,247,0.5)] ring-2 ring-brand-soft" : ""}
        `}
        style={{
          width: size,
          height: size,
        }}
      >
        <IntegrationIcon slug={integration.slug} size={size * 0.5} />

        {/* Activity indicator */}
        {(isActive || isHovered) && (
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-lime animate-pulse" />
        )}
      </div>

      {/* Label tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg bg-[oklch(0.2_0.05_285)] text-white text-xs font-medium whitespace-nowrap
          transition-all duration-300 pointer-events-none
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
      >
        {integration.label}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[oklch(0.2_0.05_285)] rotate-45" />
      </div>
    </div>
  );
}

// Central Enrich Hub
function EnrichHub({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <div
        className={`absolute rounded-full transition-all duration-1000 ${isActive ? "opacity-100" : "opacity-30"}`}
        style={{
          width: 160,
          height: 160,
          background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          animation: "pulse-ring 3s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full transition-all duration-1000 delay-300"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          animation: "pulse-ring 4s ease-in-out infinite 0.5s",
        }}
      />

      {/* Main hub */}
      <div
        className={`
          relative rounded-full bg-gradient-brand px-8 py-5 shadow-glow
          flex items-center gap-4 transition-all duration-500
          ${isActive ? "scale-100" : "scale-90"}
        `}
      >
        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="text-white text-2xl font-black tracking-tight">Enrich</span>

        {/* Processing indicator */}
        {isActive && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-lime animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Ambient background particles
function AmbientParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-soft/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// Orbital rings
function OrbitalRings() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[1, 2, 3].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full border border-brand-soft/10"
          style={{
            width: `${120 + ring * 120}px`,
            height: `${120 + ring * 120}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            animation: `orbit-${ring} ${20 + ring * 10}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Main IntegrationEcosystem component
export function IntegrationEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [connectionProgress, setConnectionProgress] = useState(0);

  // Orbital positions for integrations
  const orbitalPositions = useMemo(() => {
    const centerX = 50; // percentage
    const centerY = 50;
    const minRadius = 18;
    const maxRadius = 42;

    return allIntegrations.slice(0, 28).map((integration, i) => {
      const angle = (i / 28) * Math.PI * 2 - Math.PI / 2;
      const radius = minRadius + ((maxRadius - minRadius) * ((i % 4) + 1)) / 4;
      return {
        integration,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        orbitalRadius: radius,
        angle,
      };
    });
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cycle through active integrations
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitalPositions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, orbitalPositions.length]);

  // Animate connection progress - pauses when out of viewport
  useEffect(() => {
    if (!isVisible) return;

    let frameId: number;
    const animate = () => {
      setConnectionProgress((prev) => (prev + 0.01) % 1);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible]);

  const activeIntegration = orbitalPositions[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Ambient effects */}
      <AmbientParticles />
      <OrbitalRings />

      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 opacity-30 transition-opacity duration-1000 ${
          isVisible ? "opacity-30" : "opacity-0"
        }`}
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(45,212,191,0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 30%, rgba(251,113,133,0.1) 0%, transparent 40%)
          `,
          animation: "ambient-shift 10s ease-in-out infinite",
        }}
      />

      {/* Connection lines */}
      {isVisible && activeIntegration && (
        <>
          {orbitalPositions.slice(0, 8).map((pos, i) => (
            <ConnectionLine
              key={`${activeIndex}-${i}`}
              from={{ x: 50, y: 50 }}
              to={{ x: pos.x, y: pos.y }}
              progress={connectionProgress}
              isActive={i === activeIndex % 8}
            />
          ))}
        </>
      )}

      {/* Integration chips */}
      {orbitalPositions.map((pos, i) => (
        <IntegrationChip
          key={pos.integration.slug}
          integration={pos.integration}
          position={{ x: pos.x, y: pos.y }}
          isActive={i === activeIndex}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}

      {/* Central hub */}
      <div
        className={`absolute left-1/2 top-1/2 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <EnrichHub isActive={isVisible} />
      </div>

      {/* Active integration info */}
      {hoveredIndex !== null && orbitalPositions[hoveredIndex] && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-[oklch(0.2_0.05_285)]/90 backdrop-blur-sm text-white text-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="font-medium">{orbitalPositions[hoveredIndex].integration.label}</span>
            <span className="text-white/50">•</span>
            <span className="text-brand-soft flex items-center gap-1">
              <Check className="w-3 h-3" /> Connected
            </span>
          </div>
        </div>
      )}

      {/* Activity feed */}
      {isVisible && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {[
            { icon: Zap, text: "AI processing", color: "text-brand" },
            { icon: RefreshCw, text: "Syncing data", color: "text-teal" },
            { icon: Activity, text: "Workflow active", color: "text-lime" },
            { icon: Clock, text: "2s avg response", color: "text-white/60" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <item.icon className={`w-3 h-3 ${item.color}`} />
              <span className="text-white/80">{item.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.6; }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
        }
        @keyframes ambient-shift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.4; }
        }
        @keyframes orbit-1 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-2 {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes orbit-3 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default IntegrationEcosystem;
