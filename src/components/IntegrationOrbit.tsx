import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, RefreshCw, Activity, Check, Clock, TrendingUp } from "lucide-react";
import { IntegrationNode } from "./IntegrationNode";
import { ConnectionLine } from "./ConnectionLine";
import { WorkflowPreview } from "./WorkflowPreview";

// Integration definitions
const ALL_INTEGRATIONS = [
  // Ring 1 - Inner (closest to hub)
  { slug: "slack", label: "Slack", ring: 1 },
  { slug: "gmail", label: "Gmail", ring: 1 },
  { slug: "notion", label: "Notion", ring: 1 },
  { slug: "hubspot", label: "HubSpot", ring: 1 },
  { slug: "shopify", label: "Shopify", ring: 1 },
  { slug: "googleworkspace", label: "Google Workspace", ring: 1 },
  { slug: "salesforce", label: "Salesforce", ring: 1 },
  { slug: "linkedin", label: "LinkedIn", ring: 1 },
  // Ring 2 - Middle
  { slug: "meta", label: "Meta", ring: 2 },
  { slug: "instagram", label: "Instagram", ring: 2 },
  { slug: "x", label: "X", ring: 2 },
  { slug: "mailchimp", label: "Mailchimp", ring: 2 },
  { slug: "klaviyo", label: "Klaviyo", ring: 2 },
  { slug: "airtable", label: "Airtable", ring: 2 },
  { slug: "calendly", label: "Calendly", ring: 2 },
  { slug: "webflow", label: "Webflow", ring: 2 },
  // Ring 3 - Outer
  { slug: "zapier", label: "Zapier", ring: 3 },
  { slug: "make", label: "Make", ring: 3 },
  { slug: "n8n", label: "n8n", ring: 3 },
  { slug: "github", label: "GitHub", ring: 3 },
  { slug: "discord", label: "Discord", ring: 3 },
  { slug: "intercom", label: "Intercom", ring: 3 },
  { slug: "wordpress", label: "WordPress", ring: 3 },
  { slug: "api", label: "Custom API", ring: 3 },
];

// Predefined workflows for demonstration
const WORKFLOWS = [
  {
    name: "Email to CRM Sync",
    from: { slug: "gmail", label: "Gmail" },
    to: { slug: "hubspot", label: "HubSpot" },
    steps: [
      {
        id: "1",
        type: "trigger" as const,
        label: "New email received",
        description: "Gmail webhook triggered",
      },
      {
        id: "2",
        type: "ai" as const,
        label: "AI extracts lead data",
        description: "NLP processing email content",
      },
      {
        id: "3",
        type: "action" as const,
        label: "Create/update CRM record",
        description: "Sync to HubSpot",
      },
      {
        id: "4",
        type: "complete" as const,
        label: "Notification sent",
        description: "Slack confirmation",
      },
    ],
    analytics: { executions: 1247, successRate: 98.2, avgDuration: "1.2s", lastRun: "Just now" },
  },
  {
    name: "Social to Analytics",
    from: { slug: "linkedin", label: "LinkedIn" },
    to: { slug: "googledrive", label: "Google Sheets" },
    steps: [
      {
        id: "1",
        type: "trigger" as const,
        label: "Post engagement detected",
        description: "Likes, comments, shares",
      },
      {
        id: "2",
        type: "ai" as const,
        label: "Sentiment analysis",
        description: "Analyze engagement quality",
      },
      {
        id: "3",
        type: "action" as const,
        label: "Log to spreadsheet",
        description: "Update analytics dashboard",
      },
      {
        id: "4",
        type: "condition" as const,
        label: "High engagement?",
        description: "Sentiment > 80%",
      },
      {
        id: "5",
        type: "complete" as const,
        label: "Alert team",
        description: "Slack notification",
      },
    ],
    analytics: { executions: 3891, successRate: 97.8, avgDuration: "2.4s", lastRun: "5m ago" },
  },
  {
    name: "E-commerce Automation",
    from: { slug: "shopify", label: "Shopify" },
    to: { slug: "klaviyo", label: "Klaviyo" },
    steps: [
      {
        id: "1",
        type: "trigger" as const,
        label: "New order created",
        description: "Purchase event",
      },
      { id: "2", type: "ai" as const, label: "Customer segmentation", description: "RFM analysis" },
      {
        id: "3",
        type: "action" as const,
        label: "Trigger email sequence",
        description: "Welcome series",
      },
      {
        id: "4",
        type: "condition" as const,
        label: "High-value order?",
        description: "Order > $100",
      },
      {
        id: "5",
        type: "complete" as const,
        label: "Upsell campaign",
        description: "Premium sequence",
      },
    ],
    analytics: { executions: 2156, successRate: 99.1, avgDuration: "0.8s", lastRun: "2m ago" },
  },
  {
    name: "Content Pipeline",
    from: { slug: "notion", label: "Notion" },
    to: { slug: "wordpress", label: "WordPress" },
    steps: [
      {
        id: "1",
        type: "trigger" as const,
        label: "Content approved",
        description: "Editorial workflow",
      },
      { id: "2", type: "ai" as const, label: "Format for web", description: "SEO optimization" },
      {
        id: "3",
        type: "action" as const,
        label: "Publish to WordPress",
        description: "API integration",
      },
      {
        id: "4",
        type: "complete" as const,
        label: "Social broadcast",
        description: "LinkedIn + X",
      },
    ],
    analytics: { executions: 842, successRate: 96.5, avgDuration: "3.1s", lastRun: "12m ago" },
  },
  {
    name: "Support Automation",
    from: { slug: "intercom", label: "Intercom" },
    to: { slug: "salesforce", label: "Salesforce" },
    steps: [
      {
        id: "1",
        type: "trigger" as const,
        label: "New conversation",
        description: "Customer support ticket",
      },
      { id: "2", type: "ai" as const, label: "Classify intent", description: "Route to team" },
      {
        id: "3",
        type: "action" as const,
        label: "Create Salesforce case",
        description: "Sync ticket",
      },
      {
        id: "4",
        type: "complete" as const,
        label: "Auto-response",
        description: "Customer notified",
      },
    ],
    analytics: { executions: 5623, successRate: 99.4, avgDuration: "0.5s", lastRun: "Just now" },
  },
];

// Status messages for the hub
const STATUS_MESSAGES = ["Processing", "Routing", "Executing", "Syncing", "Analyzing"];

interface IntegrationOrbitProps {
  mouseOffset?: { x: number; y: number };
}

export function IntegrationOrbit({ mouseOffset = { x: 0, y: 0 } }: IntegrationOrbitProps) {
  const [rotation, setRotation] = useState({ ring1: 0, ring2: 0, ring3: 0 });
  const [activeWorkflow, setActiveWorkflow] = useState<(typeof WORKFLOWS)[0] | null>(null);
  const [highlightedNodes, setHighlightedNodes] = useState<string[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState(0);
  const [isWorkflowPanelOpen, setIsWorkflowPanelOpen] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }>
  >([]);
  const [isInViewport, setIsInViewport] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const workflowTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const lastWorkflowIndex = useRef(-1);

  // Viewport visibility detection - pause animations when out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Generate initial particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.1 + 0.02,
    }));
    setParticles(initialParticles);
  }, []);

  // Orbital rotation animation - pauses when out of viewport
  useEffect(() => {
    if (!isInViewport) {
      // Cancel animation when out of viewport
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
      return;
    }

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;

      setRotation({
        ring1: elapsed * (360 / 25), // 25s per rotation
        ring2: elapsed * (360 / 40) * -1, // 40s, reverse
        ring3: elapsed * (360 / 60), // 60s
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [isInViewport]);

  // Status message cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusMessage((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-demonstrate workflows every 5-7 seconds - pauses when out of viewport
  useEffect(() => {
    if (!isInViewport) {
      // Clear workflow when out of viewport
      setHighlightedNodes([]);
      setActiveWorkflow(null);
      if (workflowTimerRef.current) {
        clearInterval(workflowTimerRef.current);
        workflowTimerRef.current = undefined;
      }
      return;
    }

    const runWorkflow = () => {
      // Pick a different workflow than the last one
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * WORKFLOWS.length);
      } while (nextIndex === lastWorkflowIndex.current && WORKFLOWS.length > 1);

      lastWorkflowIndex.current = nextIndex;
      const workflow = WORKFLOWS[nextIndex];

      // Highlight involved nodes
      setHighlightedNodes([workflow.from.slug, "enrich", workflow.to.slug]);
      setActiveWorkflow(workflow);

      // Clear after 4 seconds
      setTimeout(() => {
        setHighlightedNodes([]);
        setActiveWorkflow(null);
      }, 4000);
    };

    // Initial run
    const initialTimeout = setTimeout(runWorkflow, 2000);

    // Regular interval
    workflowTimerRef.current = setInterval(
      () => {
        runWorkflow();
      },
      5000 + Math.random() * 2000,
    );

    return () => {
      clearTimeout(initialTimeout);
      if (workflowTimerRef.current) {
        clearInterval(workflowTimerRef.current);
        workflowTimerRef.current = undefined;
      }
    };
  }, [isInViewport]);

  // Calculate node positions
  const nodePositions = useMemo(() => {
    const positions: Record<string, { x: number; y: number }> = {};

    const ringRadii = { 1: 120, 2: 200, 3: 280 };

    ALL_INTEGRATIONS.forEach((integration, index) => {
      const ringIntegrations = ALL_INTEGRATIONS.filter((i) => i.ring === integration.ring);
      const ringIndex = ringIntegrations.findIndex((i) => i.slug === integration.slug);
      const count = ringIntegrations.length;

      // Calculate base angle
      const angleStep = (Math.PI * 2) / count;
      const baseAngle = ringIndex * angleStep;

      // Add ring rotation
      const rotationAngle =
        rotation[`ring${integration.ring}` as keyof typeof rotation] * (Math.PI / 180);
      const angle = baseAngle + rotationAngle;

      const radius = ringRadii[integration.ring as keyof typeof ringRadii];

      positions[integration.slug] = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });

    return positions;
  }, [rotation]);

  // Connection lines for active workflow
  const connectionLines = useMemo(() => {
    if (!activeWorkflow) return [];

    const fromPos = nodePositions[activeWorkflow.from.slug];
    const toPos = nodePositions[activeWorkflow.to.slug];
    const hubPos = { x: 0, y: 0 };

    return [
      { from: fromPos, to: hubPos, id: "from-hub" },
      { from: hubPos, to: toPos, id: "hub-to" },
    ];
  }, [activeWorkflow, nodePositions]);

  const handleNodeClick = useCallback((slug: string) => {
    // Find a workflow that includes this integration
    const workflow = WORKFLOWS.find((w) => w.from.slug === slug || w.to.slug === slug);
    if (workflow) {
      setHighlightedNodes([workflow.from.slug, "enrich", workflow.to.slug]);
      setActiveWorkflow(workflow);
      setIsWorkflowPanelOpen(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.5) 0%, transparent 50%)",
          }}
        />

        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-brand-soft"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animation: `float-particle ${20 / particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.5}s`,
            }}
          />
        ))}

        {/* Concentric rings behind hub */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-brand/10"
            style={{
              width: 80 + i * 60,
              height: 80 + i * 60,
              transform: "translate(-50%, -50%)",
              animation: `expand-ring ${8 + i * 2}s ease-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Central Hub */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ willChange: "transform" }}
      >
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            width: 100,
            height: 100,
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            animation: "hub-pulse 3s ease-in-out infinite",
          }}
        />

        {/* Hub container */}
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-brand shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>

          {/* Status text */}
          <div className="mt-3 text-center">
            <div className="text-xs font-medium text-brand-soft">
              {STATUS_MESSAGES[statusMessage]}
            </div>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-lime"
                  style={{
                    animation: `dot-pulse 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connection lines */}
      {connectionLines.map((line) => (
        <ConnectionLine
          key={line.id}
          from={line.from}
          to={line.to}
          isActive={true}
          isHighlighted={true}
        />
      ))}

      {/* Integration nodes */}
      {ALL_INTEGRATIONS.map((integration) => {
        const position = nodePositions[integration.slug];
        const isHighlighted = highlightedNodes.includes(integration.slug);
        const isDimmed = highlightedNodes.length > 0 && !isHighlighted;

        return (
          <IntegrationNode
            key={integration.slug}
            slug={integration.slug}
            label={integration.label}
            position={position}
            ring={integration.ring}
            angle={0}
            isActive={isHighlighted}
            isHighlighted={isHighlighted}
            isDimmed={isDimmed}
            onHover={() => setHoveredNode(integration.slug)}
            onLeave={() => setHoveredNode(null)}
            onClick={() => handleNodeClick(integration.slug)}
            lastSync={`${Math.floor(Math.random() * 5) + 1}m ago`}
            connectionStatus={Math.random() > 0.1 ? "connected" : "syncing"}
          />
        );
      })}

      {/* Workflow Preview Panel */}
      <WorkflowPreview
        isOpen={isWorkflowPanelOpen}
        onClose={() => setIsWorkflowPanelOpen(false)}
        workflow={activeWorkflow}
      />

      {/* Animated status cards at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {[
          {
            icon: <RefreshCw className="w-3.5 h-3.5" />,
            label: "Workflows",
            value: "24 Active",
            color: "brand",
          },
          {
            icon: <Check className="w-3.5 h-3.5" />,
            label: "API",
            value: "Connected",
            color: "lime",
          },
          {
            icon: <Activity className="w-3.5 h-3.5" />,
            label: "Queue",
            value: "3 items",
            color: "teal",
          },
          {
            icon: <Clock className="w-3.5 h-3.5" />,
            label: "Response",
            value: "0.3s",
            color: "white/60",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[oklch(0.15_0.02_285)]/80 backdrop-blur-sm border border-white/10"
          >
            <span className={`text-${stat.color}`}>{stat.icon}</span>
            <div className="text-xs">
              <div className="text-white/40">{stat.label}</div>
              <div
                className={`font-medium ${stat.color === "lime" ? "text-lime" : stat.color === "brand" ? "text-brand-soft" : stat.color === "teal" ? "text-teal" : "text-white"}`}
              >
                {stat.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          25% { transform: translate(10px, -20px); opacity: 0.2; }
          50% { transform: translate(-5px, 10px); opacity: 0.15; }
          75% { transform: translate(15px, 5px); opacity: 0.1; }
        }
        @keyframes hub-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }
        @keyframes expand-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default IntegrationOrbit;
