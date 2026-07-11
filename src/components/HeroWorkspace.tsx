import { useEffect, useRef, useState, useCallback } from "react";
import { IntegrationIcon } from "./IntegrationIcon";
import { Zap, Check, RefreshCw, Activity, Clock, TrendingUp, Users, Eye, MessageSquare, Send, Paperclip, Sparkles } from "lucide-react";

// Integration icons with positions for orbital animation
const integrations = [
  { slug: "shopify", label: "Shopify", angle: 0, radius: 180, depth: 0 },
  { slug: "instagram", label: "Instagram", angle: 40, radius: 200, depth: -20 },
  { slug: "reddit", label: "Reddit", angle: 80, radius: 170, depth: 30 },
  { slug: "whatsapp", label: "WhatsApp", angle: 120, radius: 190, depth: -40 },
  { slug: "linkedin", label: "LinkedIn", angle: 160, radius: 175, depth: 20 },
  { slug: "slack", label: "Slack", angle: 200, radius: 185, depth: -30 },
  { slug: "hubspot", label: "HubSpot", angle: 240, radius: 178, depth: 40 },
  { slug: "notion", label: "Notion", angle: 280, radius: 195, depth: -25 },
  { slug: "salesforce", label: "Salesforce", angle: 320, radius: 172, depth: 35 },
  { slug: "mailchimp", label: "Mailchimp", angle: 360, radius: 188, depth: -15 },
  { slug: "klaviyo", label: "Klaviyo", angle: 25, radius: 210, depth: 10 },
  { slug: "stripe", label: "Stripe", angle: 65, radius: 215, depth: -35 },
  { slug: "meta", label: "Meta", angle: 145, radius: 208, depth: 25 },
  { slug: "zapier", label: "Zapier", angle: 185, radius: 212, depth: -45 },
  { slug: "make", label: "Make", angle: 225, radius: 205, depth: 15 },
  { slug: "n8n", label: "n8n", angle: 265, radius: 218, depth: -20 },
  { slug: "wordpress", label: "WordPress", angle: 305, radius: 202, depth: 30 },
  { slug: "github", label: "GitHub", angle: 345, radius: 192, depth: -10 },
];

// Sample prompts for simulation
const samplePrompts = [
  "Launch a full-funnel campaign for our new product line",
  "Write a blog post about AI marketing automation",
  "Create social media content for product launch",
  "Set up email sequence for abandoned carts",
  "Analyze competitor strategies and create report",
];

// Animated KPI Counter
function KPICounter({ value, label, prefix = "", suffix = "", decimals = 0 }: { value: number; label: string; prefix?: string; suffix?: string; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const targetRef = useRef(value);
  const animationRef = useRef<number>();

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;
      setDisplayValue(current);
      targetRef.current = current;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-2xl font-black text-white">
        {prefix}{displayValue.toFixed(decimals)}{suffix}
      </div>
      <div className="text-xs text-white/60 mt-1">{label}</div>
    </div>
  );
}

// Animated Progress Ring
function ProgressRing({ progress, size = 60, stroke = 4, color = "#10B981" }: { progress: number; size?: number; stroke?: number; color?: string }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    const startProgress = animatedProgress;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAnimatedProgress(startProgress + (progress - startProgress) * eased);

      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [progress]);

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - animatedProgress / 100)}
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
      />
    </svg>
  );
}

// Animated Line Chart
function AnimatedChart({ data, width = 200, height = 80 }: { data: number[]; width?: number; height?: number }) {
  const [pathD, setPathD] = useState("");
  const [fillPathD, setFillPathD] = useState("");

  useEffect(() => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const padding = 5;
    const w = width - padding * 2;
    const h = height - padding * 2;

    const points = data.map((v, i) => ({
      x: padding + (i / (data.length - 1)) * w,
      y: padding + h - ((v - min) / range) * h,
    }));

    const linePath = points.reduce((acc, p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cp1x = prev.x + (p.x - prev.x) / 3;
      const cp1y = prev.y;
      const cp2x = p.x - (p.x - prev.x) / 3;
      const cp2y = p.y;
      return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p.x} ${p.y}`;
    }, "");

    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`;

    setPathD(linePath);
    setFillPathD(areaPath);
  }, [data, width, height]);

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPathD} fill="url(#chartGradient)" />
      <path d={pathD} stroke="#A855F7" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Notification Badge
function NotificationBadge({ type, delay }: { type: "new" | "update" | "complete"; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const messages = {
    new: ["New lead detected", "Campaign approved", "Content drafted"],
    update: ["Syncing data...", "Processing...", "Optimizing..."],
    complete: ["Published!", "Delivered!", "Complete!"],
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
      setText(messages[type][Math.floor(Math.random() * messages[type].length)]);
      const hideTimer = setTimeout(() => setVisible(false), 2500);
      return () => clearTimeout(hideTimer);
    }, delay);
    return () => clearTimeout(showTimer);
  }, [type, delay]);

  if (!visible) return null;

  return (
    <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-brand text-white text-xs font-medium animate-fade-in shadow-lg">
      {text}
    </div>
  );
}

// Campaign Card
function CampaignCard({ title, status, progress, delay }: { title: string; status: "draft" | "running" | "complete"; progress: number; delay: number }) {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const statusTimer = setTimeout(() => {
      if (currentStatus === "draft") {
        setTimeout(() => setCurrentStatus("running"), 1000);
      } else if (currentStatus === "running" && progress >= 100) {
        setTimeout(() => setCurrentStatus("complete"), 500);
      }
    }, delay);
    return () => clearTimeout(statusTimer);
  }, []);

  useEffect(() => {
    const duration = 3000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setCurrentProgress(progress * eased);

      if (p < 1) requestAnimationFrame(animate);
    };

    const startTimer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [progress, delay]);

  const statusColors = {
    draft: "bg-white/20 text-white/60",
    running: "bg-brand/30 text-brand-soft",
    complete: "bg-lime/30 text-lime",
  };

  const statusIcons = {
    draft: <Clock className="w-3 h-3" />,
    running: <RefreshCw className="w-3 h-3 animate-spin" />,
    complete: <Check className="w-3 h-3" />,
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white truncate">{title}</span>
        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${statusColors[currentStatus]}`}>
          {statusIcons[currentStatus]}
          {currentStatus}
        </span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand to-lime rounded-full transition-all duration-300"
          style={{ width: `${Math.min(currentProgress, 100)}%` }}
        />
      </div>
    </div>
  );
}

// AI Recommendation Card
function AIRecommendation({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    const slideTimer = setTimeout(() => setSlideIn(true), delay + 100);
    const hideTimer = setTimeout(() => {
      setSlideIn(false);
      setTimeout(() => setVisible(false), 300);
    }, delay + 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`bg-gradient-to-br from-brand/20 to-teal/20 backdrop-blur-md rounded-xl p-4 border border-brand/30 transform transition-all duration-500 ${slideIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-brand-soft" />
        <span className="text-xs font-semibold text-brand-soft">AI Recommendation</span>
      </div>
      <p className="text-sm text-white/90">Increase Instagram posting frequency by 2x during peak engagement hours (2-4 PM)</p>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 text-xs bg-brand/30 hover:bg-brand/40 rounded-full text-white transition-colors">Apply</button>
        <button className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-full text-white/70 transition-colors">Dismiss</button>
      </div>
    </div>
  );
}

// Data Stream Particle
function DataStreamParticle({ startX, startY, endX, endY, delay }: { startX: number; startY: number; endX: number; endY: number; delay: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000 + Math.random() * 1000;
    const startTime = performance.now() + delay;

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      const elapsed = currentTime - startTime;
      const p = elapsed / duration;
      if (p < 1) {
        setProgress(p);
        requestAnimationFrame(animate);
      } else {
        setProgress(0);
        setTimeout(() => requestAnimationFrame(animate), 500);
      }
    };

    requestAnimationFrame(animate);
  }, [delay]);

  const x = startX + (endX - startX) * progress;
  const y = startY + (endY - startY) * progress;

  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full bg-brand-soft shadow-[0_0_8px_rgba(168,85,247,0.8)]"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        opacity: 0.5 + progress * 0.5,
      }}
    />
  );
}

// Integration Orbiter
function IntegrationOrbiter({ integration, mouseOffset }: { integration: typeof integrations[0]; mouseOffset: { x: number; y: number } }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState(false);
  const angleRef = useRef(integration.angle);
  const timeRef = useRef(performance.now());

  useEffect(() => {
    const animate = () => {
      const now = performance.now();
      const elapsed = (now - timeRef.current) / 1000;
      const angle = (angleRef.current + elapsed * 10 + 360) % 360;
      const rad = (angle * Math.PI) / 180;

      const baseX = Math.cos(rad) * integration.radius;
      const baseY = Math.sin(rad) * integration.radius;

      // Add mouse parallax
      const parallaxX = mouseOffset.x * (integration.depth / 50);
      const parallaxY = mouseOffset.y * (integration.depth / 50);

      // Add floating motion
      const floatX = Math.sin(elapsed * 0.5 + integration.angle) * 10;
      const floatY = Math.cos(elapsed * 0.3 + integration.angle) * 10;

      setPosition({
        x: baseX + parallaxX + floatX,
        y: baseY + parallaxY + floatY,
      });

      requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => requestAnimationFrame(animate), integration.angle * 10);
    return () => clearTimeout(timer);
  }, [integration, mouseOffset]);

  // Random glow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(true);
      setTimeout(() => setGlow(false), 500 + Math.random() * 1000);
    }, 5000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 ${glow ? "z-20" : "z-10"}`}
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: `translate(-50%, -50%) rotate(${Math.sin(position.x * 0.1) * 5}deg)`,
      }}
    >
      <div
        className={`grid place-items-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 ${glow ? "shadow-[0_0_30px_rgba(168,85,247,0.6)] ring-2 ring-brand-soft" : "shadow-lg"}`}
        style={{
          width: 44,
          height: 44,
        }}
      >
        <IntegrationIcon slug={integration.slug} size={22} />
      </div>
    </div>
  );
}

// Connection Line
function ConnectionLine({ from, to, progress }: { from: { x: number; y: number }; to: { x: number; y: number }; progress: number }) {
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
        height: 1,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
      }}
    >
      <div className="w-full h-px bg-gradient-to-r from-brand/30 via-brand/50 to-brand/30" />
      <div
        className="absolute w-2 h-2 rounded-full bg-brand-soft shadow-[0_0_10px_rgba(168,85,247,0.8)]"
        style={{
          left: `${progress * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

// Workflow Timeline Node
function WorkflowNode({ label, type, position, delay }: { label: string; type: "agent" | "action" | "checkpoint"; position: { x: number; y: number }; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setInterval(() => {
        setPulse(true);
        setTimeout(() => setPulse(false), 600);
      }, 3000 + Math.random() * 2000);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const colors = {
    agent: "bg-brand/40 border-brand",
    action: "bg-teal/40 border-teal",
    checkpoint: "bg-lime/40 border-lime",
  };

  const icons = {
    agent: <Users className="w-3 h-3" />,
    action: <Zap className="w-3 h-3" />,
    checkpoint: <Check className="w-3 h-3" />,
  };

  if (!visible) return null;

  return (
    <div
      className={`absolute flex items-center gap-1.5 px-2 py-1 rounded-full border ${colors[type]} transition-all duration-500 ${pulse ? "scale-110 shadow-lg" : "scale-100"}`}
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {icons[type]}
      <span className="text-[10px] font-medium text-white/80 whitespace-nowrap">{label}</span>
    </div>
  );
}

// Main HeroWorkspace Component
export function HeroWorkspace({ mouseOffset }: { mouseOffset: { x: number; y: number } }) {
  const [chartData, setChartData] = useState([20, 35, 28, 45, 38, 52, 48, 65, 58, 72, 68, 85]);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [kpis, setKpis] = useState({ leads: 0, revenue: 0, engagement: 0 });

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newData = [...prev.slice(1)];
        const lastValue = newData[newData.length - 1];
        const change = (Math.random() - 0.3) * 15;
        newData.push(Math.max(10, Math.min(95, lastValue + change)));
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate KPIs
  useEffect(() => {
    const interval = setInterval(() => {
      setKpis((prev) => ({
        leads: prev.leads + Math.floor(Math.random() * 3),
        revenue: prev.revenue + Math.floor(Math.random() * 50),
        engagement: Math.min(100, prev.engagement + Math.random() * 2),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animate connection progress
  useEffect(() => {
    const animate = () => {
      setConnectionProgress((prev) => (prev + 0.005) % 1);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Calculate integration positions for connection lines
  const hubCenter = { x: 0, y: 0 };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.02_285)] via-[oklch(0.15_0.03_290)] to-[oklch(0.12_0.02_280)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `perspective(500px) rotateX(60deg) translateY(${mouseOffset.y * 0.5}px) translateX(${mouseOffset.x * 0.5}px)`,
            transformOrigin: "center top",
          }}
        />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-teal/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-lime/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Main Dashboard Area */}
      <div
        className="absolute inset-0 transition-transform duration-300"
        style={{
          transform: `translateX(${mouseOffset.x * 0.3}px) translateY(${mouseOffset.y * 0.3}px)`,
        }}
      >
        {/* Central Dashboard Panel */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          style={{
            transform: `translate(-50%, -50%) translateX(${mouseOffset.x * 0.5}px) translateY(${mouseOffset.y * 0.5}px)`,
          }}
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">Marketing Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Live
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-4 gap-4">
            {/* KPIs */}
            <KPICounter value={kpis.leads} label="New Leads" suffix="+" />
            <KPICounter value={kpis.revenue} label="Revenue" prefix="$" />
            <KPICounter value={kpis.engagement} label="Engagement" suffix="%" />
            <KPICounter value={72} label="Sentiment" suffix="%" />

            {/* Chart */}
            <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/60">Campaign Performance</span>
                <TrendingUp className="w-4 h-4 text-lime" />
              </div>
              <AnimatedChart data={chartData} width={250} height={80} />
            </div>

            {/* Progress Rings */}
            <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-around">
                <div className="relative">
                  <ProgressRing progress={kpis.engagement} size={50} />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    {kpis.engagement.toFixed(0)}%
                  </div>
                </div>
                <div className="relative">
                  <ProgressRing progress={85} size={50} color="#10B981" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    85%
                  </div>
                </div>
                <div className="relative">
                  <ProgressRing progress={68} size={50} color="#06B6D4" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    68%
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Cards */}
            <div className="col-span-2 space-y-2">
              <CampaignCard title="Summer Sale" status="running" progress={75} delay={0} />
              <CampaignCard title="Product Launch" status="draft" progress={0} delay={2000} />
            </div>

            {/* Activity Feed */}
            <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-brand-soft" />
                <span className="text-xs text-white/60">Recent Activity</span>
              </div>
              <div className="space-y-2">
                {[
                  { icon: Users, text: "New subscriber", time: "2m" },
                  { icon: MessageSquare, text: "Reply posted", time: "5m" },
                  { icon: Eye, text: "Post reached 1K", time: "12m" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <item.icon className="w-3 h-3" />
                    <span>{item.text}</span>
                    <span className="ml-auto text-white/40">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notification Badges */}
          <NotificationBadge type="new" delay={3000} />
          <NotificationBadge type="update" delay={5000} />
          <NotificationBadge type="complete" delay={7000} />
        </div>

        {/* AI Recommendation */}
        <AIRecommendation delay={4000} />

        {/* Workflow Timeline */}
        <WorkflowNode label="Helena" type="agent" position={{ x: -280, y: -120 }} delay={1000} />
        <WorkflowNode label="Drafting..." type="action" position={{ x: -150, y: -80 }} delay={1500} />
        <WorkflowNode label="Approved" type="checkpoint" position={{ x: 0, y: -40 }} delay={2000} />
        <WorkflowNode label="Sam" type="agent" position={{ x: 150, y: -60 }} delay={2500} />
        <WorkflowNode label="Publishing..." type="action" position={{ x: 280, y: -100 }} delay={3000} />

        {/* Floating Data Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <DataStreamParticle
            key={i}
            startX={30 + Math.random() * 40}
            startY={30 + Math.random() * 40}
            endX={50 + Math.random() * 40}
            endY={50 + Math.random() * 40}
            delay={i * 500}
          />
        ))}
      </div>

      {/* Integration Orbiters */}
      <div
        className="absolute inset-0 transition-transform duration-300"
        style={{
          transform: `translateX(${mouseOffset.x * 0.15}px) translateY(${mouseOffset.y * 0.15}px)`,
        }}
      >
        {integrations.map((integration) => (
          <IntegrationOrbiter key={integration.slug} integration={integration} mouseOffset={mouseOffset} />
        ))}

        {/* Central Hub Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full bg-gradient-brand shadow-[0_0_60px_rgba(168,85,247,0.5)] animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[360px] h-[360px] rounded-full border border-brand/20 animate-spin" style={{ animationDuration: "60s" }} />
          <div className="absolute inset-4 w-[440px] h-[440px] rounded-full border border-teal/10 animate-spin" style={{ animationDuration: "80s", animationDirection: "reverse" }} />
          <div className="absolute inset-8 w-[520px] h-[520px] rounded-full border border-lime/5 animate-spin" style={{ animationDuration: "100s" }} />
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
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

      {/* Light Sweep Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(168,85,247,0.3) 50%, transparent 60%)",
          animation: "light-sweep 8s ease-in-out infinite",
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.6; }
        }
        @keyframes light-sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
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

export default HeroWorkspace;
