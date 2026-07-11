import { useEffect, useRef, useState, useCallback } from "react";
import { Zap, Check, RefreshCw, Activity, Clock, TrendingUp, Users, Eye, MessageSquare, Send, Sparkles, Menu, X, ChevronDown, Filter, MoreHorizontal } from "lucide-react";

// Campaign lifecycle states
const CAMPAIGN_STATES = [
  "Draft", "Planning", "AI Research", "Generating Assets", 
  "Awaiting Approval", "Scheduled", "Launching", "Live", 
  "Optimizing", "Completed"
];

// Realistic activity messages from AI specialists
const SPECIALIST_ACTIVITIES = {
  helena: [
    "Writing blog post on AI automation",
    "Updating editorial calendar",
    "Creating social media briefs",
    "Drafting email sequences",
    "Publishing content to CMS",
    "Generating product descriptions",
  ],
  sam: [
    "Scanning 847 keywords",
    "Updating SEO scores",
    "Monitoring SERP changes",
    "Detecting competitor moves",
    "Optimizing meta tags",
    "Improving authority score",
  ],
  kai: [
    "Monitoring social conversations",
    "Detecting trending topics",
    "Flagging brand mentions",
    "Analyzing sentiment",
    "Responding to engagement",
    "Tracking viral posts",
  ],
  angela: [
    "Launching email campaign",
    "Optimizing subject lines",
    "Monitoring open rates",
    "A/B testing variants",
    "Adjusting send times",
    "Reporting conversions",
  ],
};

const CAMPAIGN_NAMES = [
  "Q4 SaaS Launch", "Product Update Announcement", "Holiday Sale Prep",
  "Lead Nurture Flow", "Brand Awareness Push", "Competitor Analysis",
  "Social Media Blitz", "Email Re-engagement", "Webinar Promotion",
];

// Dashboard cursor simulation
function DashboardCursor({ position, visible }: { position: { x: number; y: number }; visible: boolean }) {
  if (!visible) return null;
  
  return (
    <div
      className="absolute pointer-events-none z-50 transition-all duration-300"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-2px, -2px)",
      }}
    >
      <div className="w-3 h-3 rounded-full bg-white/80 shadow-lg" />
    </div>
  );
}

// Main Dashboard Widget
function DashboardWidget({ mouseOffset, promptTriggered }: { mouseOffset: { x: number; y: number }; promptTriggered: boolean }) {
  const [campaigns, setCampaigns] = useState<Array<{
    id: number;
    name: string;
    state: string;
    stateIndex: number;
    progress: number;
    priority: "high" | "medium" | "low";
    assigned: string[];
  }>>([]);
  const [activities, setActivities] = useState<Array<{ agent: string; message: string; time: string }>>([]);
  const [kpis, setKpis] = useState({
    leads: 2847 + Math.floor(Math.random() * 100),
    revenue: 45600 + Math.floor(Math.random() * 5000),
    impressions: 1245000,
    ctr: 2.4 + (Math.random() - 0.5) * 0.3,
    conversions: 342,
    roas: 3.2 + (Math.random() - 0.5) * 0.4,
  });
  const [chartData, setChartData] = useState([65, 72, 68, 78, 82, 75, 88, 92, 87, 95]);
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("campaigns");
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize campaigns
  useEffect(() => {
    const initial = CAMPAIGN_NAMES.slice(0, 4).map((name, i) => ({
      id: i + 1,
      name,
      state: CAMPAIGN_STATES[i * 2],
      stateIndex: i * 2,
      progress: (i * 2) * 10,
      priority: (["high", "medium", "low", "medium"] as const)[i],
      assigned: Object.keys(SPECIALIST_ACTIVITIES).slice(0, i + 1),
    }));
    setCampaigns(initial);
    
    // Initial activities
    setActivities([
      { agent: "Kai", message: "Identified 12 keyword opportunities", time: "Just now" },
      { agent: "Sam", message: "Improved SEO score by 18%", time: "2m ago" },
      { agent: "Helena", message: "Drafting Q4 content calendar", time: "5m ago" },
    ]);
  }, []);

  // Independent campaign state progression (8-15 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCampaigns(prev => prev.map(campaign => {
        if (campaign.stateIndex >= CAMPAIGN_STATES.length - 1) return campaign;
        
        // Random chance to progress
        if (Math.random() > 0.3) return campaign;
        
        const newIndex = campaign.stateIndex + 1;
        return {
          ...campaign,
          state: CAMPAIGN_STATES[newIndex],
          stateIndex: newIndex,
          progress: Math.min(100, campaign.progress + 12),
        };
      }));
    }, 8000 + Math.random() * 7000);
    
    return () => clearInterval(interval);
  }, []);

  // Independent activity updates (one at a time, every 6-12 seconds)
  useEffect(() => {
    const agents = Object.keys(SPECIALIST_ACTIVITIES);
    
    const interval = setInterval(() => {
      const agent = agents[Math.floor(Math.random() * agents.length)];
      const messages = SPECIALIST_ACTIVITIES[agent as keyof typeof SPECIALIST_ACTIVITIES];
      const message = messages[Math.floor(Math.random() * messages.length)];
      
      setActivities(prev => [
        { agent: agent.charAt(0).toUpperCase() + agent.slice(1), message, time: "Just now" },
        ...prev.slice(0, 4).map(a => ({ ...a, time: updateTime(a.time) })),
      ]);
    }, 6000 + Math.random() * 6000);
    
    return () => clearInterval(interval);
  }, []);

  // KPI fluctuations (every 4-8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setKpis(prev => ({
        ...prev,
        leads: prev.leads + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 200),
        ctr: Math.max(0.5, Math.min(5, prev.ctr + (Math.random() - 0.5) * 0.2)),
        roas: Math.max(1, Math.min(8, prev.roas + (Math.random() - 0.5) * 0.3)),
      }));
    }, 4000 + Math.random() * 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Chart data refresh (5-10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1)];
        const lastValue = newData[newData.length - 1];
        const change = (Math.random() - 0.3) * 8;
        newData.push(Math.max(50, Math.min(100, lastValue + change)));
        return newData;
      });
    }, 5000 + Math.random() * 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Simulate dashboard cursor (every 15-30 seconds)
  useEffect(() => {
    const moveCursor = () => {
      if (!containerRef.current) return;
      
      setCursorVisible(true);
      const rect = containerRef.current.getBoundingClientRect();
      
      // Move to random positions within dashboard
      const targetX = 50 + Math.random() * 400;
      const targetY = 80 + Math.random() * 280;
      
      // Animate cursor movement
      let currentX = cursorPos.x;
      let currentY = cursorPos.y;
      const animate = () => {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        setCursorPos({ x: currentX, y: currentY });
        
        if (Math.abs(targetX - currentX) > 2 || Math.abs(targetY - currentY) > 2) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => setCursorVisible(false), 2000);
        }
      };
      requestAnimationFrame(animate);
    };
    
    const interval = setInterval(moveCursor, 15000 + Math.random() * 15000);
    return () => clearInterval(interval);
  }, [cursorPos]);

  // Respond to prompt triggers
  useEffect(() => {
    if (promptTriggered) {
      // Trigger campaign progression
      setCampaigns(prev => prev.map((c, i) => 
        i === 0 ? { ...c, state: "Generating Assets", stateIndex: 3, progress: 40 } : c
      ));
      
      // Add activity
      setActivities(prev => [
        { agent: "Helena", message: "Creating LinkedIn campaign assets", time: "Just now" },
        ...prev.slice(0, 4),
      ]);
    }
  }, [promptTriggered]);

  // Very subtle parallax (3-8 pixels)
  const parallaxX = mouseOffset.x * 5;
  const parallaxY = mouseOffset.y * 5;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-2xl bg-[oklch(0.12_0.02_285)]/90 backdrop-blur-xl border border-white/10 overflow-hidden"
      style={{
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white/90">Enrich Dashboard</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span>Autonomous</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 py-2 border-b border-white/5">
        {["campaigns", "analytics", "workflows"].map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedTab === tab 
                ? "bg-brand/30 text-brand-soft" 
                : "text-white/50 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Leads", value: kpis.leads.toLocaleString(), trend: "+12%" },
            { label: "Revenue", value: `$${(kpis.revenue / 1000).toFixed(1)}K`, trend: "+8%" },
            { label: "CTR", value: `${kpis.ctr.toFixed(1)}%`, trend: kpis.ctr > 2.4 ? "+0.3%" : "-0.1%" },
            { label: "ROAS", value: `${kpis.roas.toFixed(1)}x`, trend: kpis.roas > 3.2 ? "+0.2" : "-0.1" },
          ].map((kpi, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase tracking-wide">{kpi.label}</div>
              <div className="text-sm font-bold text-white mt-0.5">{kpi.value}</div>
              <div className={`text-[10px] mt-1 ${kpi.trend.startsWith("+") ? "text-lime" : "text-red-400"}`}>
                {kpi.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/60">Active Campaigns</span>
            <button className="text-[10px] text-brand-soft hover:underline">View All</button>
          </div>
          {campaigns.slice(0, 3).map(campaign => (
            <div key={campaign.id} className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-white truncate">{campaign.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  campaign.state === "Live" ? "bg-lime/20 text-lime" :
                  campaign.state === "Optimizing" ? "bg-brand/20 text-brand-soft" :
                  "bg-white/10 text-white/60"
                }`}>
                  {campaign.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand to-lime rounded-full transition-all duration-1000"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
                <span className="text-[10px] text-white/40">{campaign.progress}%</span>
              </div>
              <div className="flex gap-1 mt-2">
                {campaign.assigned.map(agent => (
                  <span key={agent} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">
                    {agent.charAt(0).toUpperCase() + agent.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-3 h-3 text-brand-soft" />
            <span className="text-xs font-medium text-white/60">AI Activity</span>
          </div>
          <div className="space-y-2">
            {activities.map((activity, i) => (
              <div key={i} className={`flex items-start gap-2 text-[11px] ${i === 0 ? "text-white" : "text-white/70"}`}>
                <span className="font-medium text-brand-soft shrink-0">{activity.agent}:</span>
                <span className="flex-1">{activity.message}</span>
                <span className="text-white/30 shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Chart */}
        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/60">Performance Trend</span>
            <TrendingUp className="w-3 h-3 text-lime" />
          </div>
          <div className="flex items-end gap-1 h-12">
            {chartData.map((value, i) => (
              <div 
                key={i}
                className="flex-1 bg-gradient-to-t from-brand/50 to-brand-soft/50 rounded-t transition-all duration-500"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Cursor */}
      <DashboardCursor position={cursorPos} visible={cursorVisible} />
    </div>
  );
}

// Mobile Dashboard Widget
function MobileDashboardWidget({ mouseOffset }: { mouseOffset: { x: number; y: number } }) {
  const [optimizationScore, setOptimizationScore] = useState(78);
  const [openRate, setOpenRate] = useState(24.5);
  const [engagement, setEngagement] = useState(4.2);
  
  // Independent metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOptimizationScore(prev => Math.min(100, Math.max(50, prev + (Math.random() - 0.5) * 3)));
      setOpenRate(prev => Math.max(15, Math.min(40, prev + (Math.random() - 0.5) * 1)));
      setEngagement(prev => Math.max(1, Math.min(10, prev + (Math.random() - 0.5) * 0.5)));
    }, 7000 + Math.random() * 5000);
    
    return () => clearInterval(interval);
  }, []);

  const parallaxX = mouseOffset.x * 3;
  const parallaxY = mouseOffset.y * 3;

  return (
    <div
      className="relative rounded-2xl bg-[oklch(0.12_0.02_285)]/90 backdrop-blur-xl border border-white/10 overflow-hidden"
      style={{
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Phone frame */}
      <div className="p-3">
        <div className="bg-[oklch(0.15_0.02_285)] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-white">Quick Stats</span>
            <RefreshCw className="w-3 h-3 text-white/40 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          
          {/* Metric Cards */}
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase">Optimization</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg font-bold text-white">{optimizationScore.toFixed(0)}%</span>
                <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-lime rounded-full transition-all duration-1000"
                    style={{ width: `${optimizationScore}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase">Email Open Rate</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg font-bold text-white">{openRate.toFixed(1)}%</span>
                <TrendingUp className="w-4 h-4 text-lime" />
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase">Engagement</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg font-bold text-white">{engagement.toFixed(1)}%</span>
                <span className="text-[10px] text-lime">+0.8%</span>
              </div>
            </div>
          </div>
          
          {/* Mini Notification */}
          <div className="mt-4 bg-brand/20 rounded-lg p-2 border border-brand/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-brand-soft" />
              <span className="text-[10px] text-brand-soft">AI optimizing campaign...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main HeroWorkspace Component - Real SaaS simulation
export function HeroWorkspace({ mouseOffset }: { mouseOffset: { x: number; y: number } }) {
  const [promptTriggered, setPromptTriggered] = useState(false);
  
  // Trigger dashboard response when prompt simulates activity
  useEffect(() => {
    const interval = setInterval(() => {
      setPromptTriggered(true);
      setTimeout(() => setPromptTriggered(false), 500);
    }, 25000 + Math.random() * 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.1_0.02_285)] via-[oklch(0.12_0.02_290)] to-[oklch(0.1_0.02_280)]" />

      {/* Main desktop dashboard (left/center) */}
      <div 
        className="absolute left-[5%] top-[15%] w-[55%] h-[70%]"
      >
        <DashboardWidget mouseOffset={mouseOffset} promptTriggered={promptTriggered} />
      </div>

      {/* Mobile dashboard (right) */}
      <div 
        className="absolute right-[8%] top-[25%] w-[25%]"
      >
        <MobileDashboardWidget mouseOffset={mouseOffset} />
      </div>

      {/* Subtle glass reflections */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
          transform: `translate(${mouseOffset.x * 2}px, ${mouseOffset.y * 2}px)`,
          transition: "transform 1s ease-out",
        }}
      />

      {/* Minimal particles (only inside dashboards) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particles stay within dashboard areas */}
        <div className="absolute left-[5%] top-[15%] w-[55%] h-[70%]">
          <div className="absolute w-1 h-1 rounded-full bg-brand-soft/20" style={{ left: '20%', top: '30%', animation: 'particle-drift 15s ease-in-out infinite' }} />
          <div className="absolute w-0.5 h-0.5 rounded-full bg-brand-soft/15" style={{ left: '60%', top: '50%', animation: 'particle-drift 20s ease-in-out infinite 2s' }} />
          <div className="absolute w-1 h-1 rounded-full bg-brand-soft/10" style={{ left: '40%', top: '70%', animation: 'particle-drift 18s ease-in-out infinite 4s' }} />
        </div>
      </div>

      {/* CSS - minimal, functional animations only */}
      <style>{`
        @keyframes particle-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, -10px); opacity: 0.5; }
          50% { transform: translate(-5px, 5px); opacity: 0.3; }
          75% { transform: translate(8px, 8px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

function updateTime(time: string): string {
  if (time === "Just now") return "1m ago";
  const match = time.match(/(\d+)m ago/);
  if (match) {
    const mins = parseInt(match[1]) + 1;
    return mins >= 60 ? "1h ago" : `${mins}m ago`;
  }
  return time;
}

export default HeroWorkspace;
