import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Plus, Shuffle, Sparkles, Menu, Check } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IntegrationIcon, integrationColors } from "@/components/IntegrationIcon";
import { CustomCursor } from "@/components/CustomCursor";
import { LottieAnimation } from "@/components/LottieAnimation";

import helenaImg from "@/assets/agent-helena.jpg";
import samImg from "@/assets/agent-sam.jpg";
import kaiImg from "@/assets/agent-kai.jpg";
import angelaImg from "@/assets/agent-angela.jpg";
import heroDash from "@/assets/hero-dashboard.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import enrichMark from "@/assets/enrich-mark.png.asset.json";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Utility hooks ---------- */

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = () => setReduced(mq.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);
  return reduced;
}

// Shared IntersectionObserver for all Reveal components - reduces overhead from multiple observers
const sharedRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        sharedRevealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

/* Scroll-reveal with optional char splitting via IntersectionObserver at 15% visibility */
function Reveal({
  children,
  delay = 0,
  className = "",
  from = "up",
  splitChars = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left";
  splitChars?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Use shared observer instead of creating a new one per component
    sharedRevealObserver.observe(el);
    return () => sharedRevealObserver.unobserve(el);
  }, []);

  const base = from === "left" ? "reveal-from-left" : "reveal-on-scroll";

  // If splitChars is true, split text content into spans with staggered delays
  if (splitChars && typeof children === "string" && !reduced) {
    const chars = children.split("");
    return (
      <div ref={ref} className={`${base} ${className}`}>
        {chars.map((char, i) => (
          <span
            key={i}
            className="reveal-on-scroll inline-block"
            style={{ transitionDelay: `${delay + i * 20}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`${base} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Magnetic tilt for cards — max ~7deg, spring-ish return via CSS transition */
function useTilt(max = 7) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
      });
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);
  return ref;
}

/* ---------- STEP 3: Layered atmospheric background component ---------- */
function AtmosphericBackground({ 
  gridRef, 
  gradientRef, 
  particlesRef 
}: { 
  gridRef?: React.RefObject<HTMLDivElement | null>;
  gradientRef?: React.RefObject<HTMLDivElement | null>;
  particlesRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const particlesId = useRef(`particles-${Math.random().toString(36).substr(2, 9)}`);
  // Store only this component's ScrollTriggers
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const cb = () => setIsMobile(mq.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: isMobile ? 15 : 40, density: { enable: true, area: 900 } },
      color: { value: ["#a855f7", "#2DD4BF"] },
      size: { value: { min: 1, max: 2.5 } },
      opacity: { value: 0.4 },
      move: { 
        enable: true, 
        speed: 0.3, 
        direction: "none", 
        random: true 
      },
      links: { 
        enable: !isMobile,
        distance: 120, 
        color: "#a855f7", 
        opacity: 0.15 
      }
    }
  };

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Set up parallax effects for decorative layers (STEP 7)
  useEffect(() => {
    if (reduced) return;
    scrollTriggersRef.current = []; // Reset on each run

    // Grid layer parallax - slowest
    if (gridRef?.current) {
      const trigger = ScrollTrigger.create({
        trigger: gridRef.current.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(gridRef.current, { yPercent: self.progress * 15 });
        }
      });
      scrollTriggersRef.current.push(trigger);
    }

    // Gradient blob parallax - faster
    if (gradientRef?.current) {
      const trigger = ScrollTrigger.create({
        trigger: gradientRef.current.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(gradientRef.current, { yPercent: self.progress * 30 });
        }
      });
      scrollTriggersRef.current.push(trigger);
    }

    return () => {
      // Only kill this component's triggers, not all ScrollTriggers
      scrollTriggersRef.current.forEach(t => t.kill());
      scrollTriggersRef.current = [];
    };
  }, [reduced, gridRef, gradientRef]);

  return (
    <>
      {/* Grid layer */}
      <div 
        ref={gridRef}
        className="absolute inset-0 parallax-grid pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />
      
      {/* Gradient layer */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 parallax-gradient pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(168,85,247,0.25), transparent 50%), 
            radial-gradient(circle at 80% 70%, rgba(45,212,191,0.12), transparent 50%)
          `
        }}
      />
      
      {/* Particle layer */}
      {!reduced && (
        <div ref={particlesRef} className="absolute inset-0 parallax-particles pointer-events-none">
          <Particles
            id={particlesId.current}
            init={particlesInit}
            options={particlesOptions}
            className="w-full h-full"
          />
        </div>
      )}
    </>
  );
}

/* Word-split scale animation for hero headline - settling into place effect */
function AnimatedHeadline({ 
  text, 
  delay = 0, 
  isHero = false,
  glow = false
}: { 
  text: string; 
  delay?: number;
  isHero?: boolean;
  glow?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced || !isHero) {
    // Simple static display for non-hero or reduced motion
    return <span className={glow ? "text-glow" : ""}>{text}</span>;
  }

  const words = text.split(" ");
  return (
    <span className="word-split-container">
      {words.map((word, i) => (
        <span 
          key={i} 
          className={`word ${glow ? "text-glow" : ""}`}
          style={{ animationDelay: `${delay + i * 80}ms` }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

/* Count-up when scrolled into view. Preserves suffix like "+", "/7", "H+". */
function CountUp({ target, className = "" }: { target: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState<string>(() => target.replace(/[0-9,]/g, (m) => (m === "," ? "" : "0")));
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setDisplay(target);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        const match = target.match(/^([\d,]+)(.*)$/) || target.match(/^(\d+)(\/\d+)$/);
        if (!match) {
          setDisplay(target);
          return;
        }
        const numStr = match[1].replace(/,/g, "");
        const end = parseInt(numStr, 10);
        const suffix = target.slice(match[1].length);
        const duration = 1400;
        const start = performance.now();
        const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
        let rafId: number;
        let mounted = true;
        const tick = (now: number) => {
          if (!mounted) return;
          const t = Math.min(1, (now - start) / duration);
          const v = Math.round(end * easeOutExpo(t));
          const withCommas = v.toLocaleString();
          setDisplay(`${withCommas}${suffix}`);
          if (t < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return () => {
          mounted = false;
          cancelAnimationFrame(rafId);
        };
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, reduced]);

  return <div ref={ref} className={className}>{display}</div>;
}

/* ---------- Data ---------- */

const agentThumbs = [
  { title: "Helena — Digital Marketer", tone: "bg-[oklch(0.85_0.08_80)] text-[oklch(0.2_0.1_60)]" },
  { title: "Sam — SEO / GEO Manager", tone: "bg-[oklch(0.25_0.1_260)] text-white" },
  { title: "Kai — Social Listening", tone: "bg-[oklch(0.3_0.15_20)] text-[oklch(0.9_0.1_80)]" },
  { title: "Angela — Email Marketer", tone: "bg-[oklch(0.55_0.2_25)] text-white" },
  { title: "Content & SEO", tone: "bg-[oklch(0.9_0.05_320)] text-[oklch(0.3_0.1_320)]" },
  { title: "Ad Management", tone: "bg-[oklch(0.35_0.15_290)] text-[oklch(0.9_0.1_320)]" },
  { title: "Automated Research", tone: "bg-[oklch(0.25_0.05_260)] text-[oklch(0.85_0.1_80)]" },
  { title: "Email Campaigns", tone: "bg-[oklch(0.5_0.2_15)] text-white" },
  { title: "Social Listening", tone: "bg-[oklch(0.4_0.15_340)] text-[oklch(0.95_0.05_60)]" },
  { title: "Analytics & Reporting", tone: "bg-[oklch(0.75_0.15_80)] text-[oklch(0.25_0.1_260)]" },
  { title: "Brand & Knowledge", tone: "bg-[oklch(0.65_0.2_25)] text-white" },
  { title: "Automation Builder", tone: "bg-[oklch(0.9_0.03_260)] text-[oklch(0.3_0.1_260)]" },
];

const features = [
  { title: "Ship campaigns end to end", body: "Your team is buried in briefs and dashboards. Enrich agents research, write, publish, and optimize across every channel — so campaigns actually ship, on time, on brand.", animation: "ecommerce" as const },
  { title: "Grow like a pro", body: "Enrich agents plan keywords, generate content, launch ads, and send emails on autopilot. Personalize at scale, run experiments in bulk, and know exactly what's working.", animation: "marketing" as const },
  { title: "Protect your brand", body: "Every agent learns your voice, guidelines, and offers from a central knowledge base. Stay consistent across blogs, ads, email, and social — without micromanaging every asset.", animation: "security" as const },
  { title: "Stay in control", body: "One workspace for every campaign, agent, and metric. Approve work, edit outputs, and track ROI in real time — with humans in the loop wherever it matters.", animation: "dashboard" as const },
];

const steps = [
  { n: "01", title: "Gather", tagline: "Continuous research", body: "Kai listens across social, search, and communities. Sam tracks keywords and competitors. Your agents surface opportunities before your team even opens a dashboard.", animation: "marketing" as const },
  { n: "02", title: "Execute", tagline: "Autonomous execution", body: "Helena writes blogs, ads, and landing pages. Angela drafts and sends email campaigns. Everything ships to your CMS, ad accounts, and ESP — with your review when you want it.", animation: "automation" as const },
  { n: "03", title: "Analyze", tagline: "Insights that loop back", body: "Live dashboards track ROI, traffic, and revenue across channels. Results feed straight back into the next brief, so every campaign compounds on the last.", animation: "analytics" as const },
];

const agents = [
  { name: "Helena", role: "AI Digital Marketer", status: "Writing a blog post…", img: helenaImg },
  { name: "Sam", role: "AI SEO / GEO Manager", status: "Optimizing campaign…", img: samImg },
  { name: "Kai", role: "AI Social Listening", status: "Responding on Reddit…", img: kaiImg },
  { name: "Angela", role: "AI Email Marketer", status: "Crafting email campaign…", img: angelaImg },
];

const testimonials = [
  { quote: "Enrich has doubled our content output without expanding the team. It's like hiring a full marketing pod overnight.", name: "Jane Doe", role: "Marketing Director" },
  { quote: "Our campaigns run themselves. Enrich feels like our entire marketing department — at a fraction of the cost.", name: "John Smith", role: "CEO" },
  { quote: "Helena writes better first drafts than most agencies we've hired. We just review, tweak, and ship.", name: "Priya Natarajan", role: "Head of Growth" },
  { quote: "The moment we plugged in our brand voice, every output started sounding like us. That was the unlock.", name: "Marco Álvarez", role: "VP Marketing" },
  { quote: "This is what an AI marketing team should feel like.", name: "Sara Chen", role: "Founder" },
];

/* ---------- Sections ---------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = ["Agents", "Solutions", "Resources", "Pricing", "Blog"];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? "bg-background/80 border-border shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]" : "bg-background/40 border-transparent"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <a href="#" className="flex items-center gap-2 font-black text-lg">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-brand shadow-glow">
            {/* STEP 8: Teal icon hover on logo icon */}
            <Sparkles className="w-4 h-4 text-white icon-hover" />
          </span>
          Enrich Labs
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {items.map((i) => (
            <a key={i} href="#" className="px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-medium transition btn-lift">
            Login <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="inline-flex items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.2_0.05_285)] hover:brightness-95 transition btn-lift">
            Get Started
          </a>
          {/* STEP 8: Teal icon hover on menu button */}
          <button className="md:hidden p-2 icon-hover" onClick={() => setOpen(!open)} aria-label="Menu"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-2">
          {items.map((i) => <a key={i} href="#" className="py-2 text-sm">{i}</a>)}
        </div>
      )}
    </header>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-brand-soft text-[oklch(0.2_0.05_285)] text-sm">
      <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center gap-2 text-center">
        <span className="font-semibold">Introducing Helena 2.0:</span>
        <span className="hidden sm:inline">A smarter AI marketer that writes, publishes, and optimizes autonomously.</span>
        <a href="#" className="inline-flex items-center gap-1 font-semibold underline underline-offset-2">
          See what's new <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* Animated gradient mesh backdrop — soft orbs drifting behind hero/stats with scroll-linked parallax */
function MeshBackdrop({ intensity = 1 }: { intensity?: number }) {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked parallax for orbs - different multipliers for depth
  useEffect(() => {
    if (reduced) return;
    
    const onScroll = () => {
      const y = window.scrollY;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.15}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${y * 0.1}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${y * 0.2}px)`;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={orb1Ref}
        className="absolute -top-24 -left-24 w-[55%] h-[70%] rounded-full blur-3xl animate-mesh"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.55) 0%, transparent 70%)", opacity: 0.9 * intensity }}
      />
      <div
        ref={orb2Ref}
        className="absolute top-1/3 -right-32 w-[55%] h-[70%] rounded-full blur-3xl animate-mesh-2"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.2 320 / 0.5) 0%, transparent 70%)", opacity: 0.85 * intensity, animationDelay: "-6s" }}
      />
      <div
        ref={orb3Ref}
        className="absolute bottom-0 left-1/3 w-[45%] h-[55%] rounded-full blur-3xl animate-mesh"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.25 285 / 0.45) 0%, transparent 70%)", opacity: 0.8 * intensity, animationDelay: "-10s" }}
      />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
    </div>
  );
}

/* Mobile-only lightweight animated background (no video) */
function MobileHeroCanvas() {
  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-glow bg-[oklch(0.14_0.05_285)]">
      <img src={heroDash} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      <div
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-3xl animate-orb"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.25 295 / 0.7) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full blur-3xl animate-orb"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.2 320 / 0.6) 0%, transparent 70%)", animationDelay: "-5s" }}
      />
      <div
        className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full blur-3xl animate-orb"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 260 / 0.55) 0%, transparent 70%)", animationDelay: "-9s" }}
      />
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 text-xs font-semibold border border-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        Agents working
      </div>
    </div>
  );
}

function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not mounted yet
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const cb = () => setIsMobile(mq.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  // Show video on desktop unless reduced motion is preferred
  const showVideo = !isMobile && mounted && !reduced;
  // Show atmospheric background only when NOT showing video (mobile or reduced motion)
  const showAtmospheric = !showVideo;

  // Integration icons for trust bar
  const integrationIcons = [
    { slug: "shopify", label: "Shopify" },
    { slug: "instagram", label: "Instagram" },
    { slug: "reddit", label: "Reddit" },
    { slug: "whatsapp", label: "WhatsApp" },
    { slug: "linkedin", label: "LinkedIn" },
    { slug: "slack", label: "Slack" },
    { slug: "googleads", label: "Google Ads" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* STEP 3: Layered atmospheric background — only render when video is NOT showing */}
      {showAtmospheric && <AtmosphericBackground gridRef={gridRef} gradientRef={gradientRef} particlesRef={particlesRef} />}
      
      {/* Full-bleed video background on desktop */}
      {showVideo && (
        <>
          <div className="absolute inset-0 z-0">
            <video
              src={heroVideo.url}
              poster={heroDash}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Enrich Labs AI marketing dashboard in motion"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark gradient scrim for text legibility */}
          <div 
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  oklch(0.15 0.03 285 / 0.85) 0%,
                  oklch(0.15 0.03 285 / 0.7) 30%,
                  oklch(0.15 0.03 285 / 0.6) 60%,
                  oklch(0.15 0.03 285 / 0.8) 100%
                )
              `
            }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-16 text-center">
        {/* Hero headline with word-split scale animation */}
        <h1 className="font-black tracking-tight text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
          <AnimatedHeadline text="AI marketers" isHero />{" "}
          <AnimatedHeadline text="that ship." isHero delay={80} glow />
        </h1>

        <div className="mt-16 mx-auto max-w-2xl animate-reveal" style={{ animationDelay: "150ms" }}>
          <div className="rounded-2xl bg-white p-4 shadow-glow text-left">
            <input
              type="text"
              defaultValue="Launch a full-funnel campaign for our new product line"
              className="w-full bg-transparent text-[oklch(0.3_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
            />
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="grid place-items-center w-8 h-8 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.3_0.05_285)] hover:bg-[oklch(0.9_0.03_285)]">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)]">
                  <Shuffle className="w-4 h-4" /> Briefs
                </button>
              </div>
              {/* STEP 4: Neon border on primary CTA */}
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white btn-lift neon-border">
                Launch <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="mt-8 text-lg text-white/90">
            From brief to launch, Enrich agents run your marketing 24/7 — autonomously.
          </p>
        </div>

        {/* Hero product visual — canvas on mobile only */}
        {isMobile === true && (
          <Reveal delay={200} className="mt-16">
            <div className="mx-auto max-w-5xl">
              <MobileHeroCanvas />
            </div>
          </Reveal>
        )}
      </div>

      {/* Integration icons marquee */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {integrationIcons.map((icon, i) => (
              <Reveal key={icon.slug} delay={i * 60}>
                <div 
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm"
                  aria-label={icon.label}
                >
                  <IntegrationIcon slug={icon.slug} size={28} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentsMarquee() {
  const reduced = useReducedMotion();
  const row1 = agentThumbs.slice(0, 6);
  const row2 = agentThumbs.slice(6, 12);
  const Card = ({ t }: { t: (typeof agentThumbs)[number] }) => (
    <div className={`shrink-0 w-[280px] sm:w-[340px] aspect-video rounded-2xl ${t.tone} p-6 flex flex-col justify-between shadow-lg snap-start`}>
      <div className="text-xs font-bold tracking-widest opacity-70">AGENT</div>
      <div className="text-2xl font-black tracking-tight">{t.title}</div>
    </div>
  );
  return (
    <section className="py-28 md:py-32 bg-background">
      <Reveal>
        <div className="mx-auto max-w-4xl px-6 mb-14 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-[0.28em] text-brand-soft">WHY ENRICH</p>
          {/* Section title with character splitting and underline */}
          <h2 className="section-title mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.02] text-balance">
            <Reveal className="inline">A complete marketing operating system</Reveal>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything your team needs to plan, execute, and analyze campaigns — powered by AI specialists that actually do the work.
          </p>
        </div>
      </Reveal>

      {reduced ? (
        /* Static grid fallback for prefers-reduced-motion */
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {agentThumbs.map((t) => <Card key={t.title} t={t} />)}
        </div>
      ) : (
        <>
          {/* Mobile: swipeable snap carousel with peeking next card */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 pb-2 w-max pr-[20%]">
              {agentThumbs.map((t) => <Card key={t.title} t={t} />)}
            </div>
          </div>

          {/* Desktop: two-row marquee, pauses on hover */}
          <div className="hidden md:block space-y-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-6 animate-marquee-left marquee-track">
              {[...row1, ...row1].map((t, idx) => <Card key={`r1-${idx}`} t={t} />)}
            </div>
            <div className="flex w-max gap-6 animate-marquee-right marquee-track">
              {[...row2, ...row2].map((t, idx) => <Card key={`r2-${idx}`} t={t} />)}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function FeatureCard({ f, i }: { f: (typeof features)[number]; i: number }) {
  const tiltRef = useTilt(6);
  return (
    <Reveal delay={(i % 2) * 80}>
      <div ref={tiltRef} className="tilt-card group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-brand/50 transition-colors h-full">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand/20 text-brand-soft">
            <Check className="w-4 h-4" />
          </span>
          <span>0{i + 1}</span>
        </div>
        <h3 className="mt-6 text-3xl md:text-4xl font-black tracking-tight">{f.title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">{f.body}</p>
        <div className="mt-8 aspect-[16/10] rounded-2xl overflow-hidden border border-border flex items-center justify-center">
          <LottieAnimation type={f.animation} size={180} />
        </div>
      </div>
    </Reveal>
  );
}

function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-6">
        {features.map((f, i) => (
          <div 
            key={f.title} 
            className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
          >
            <FeatureCard f={f} i={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "24/7", label: "Autonomous execution across content, ads, email, and social." },
    { value: "10H+", label: "On average, marketing teams save over 10 hours every week." },
    { value: "∞", label: "Scales with your team — from startup to enterprise." },
  ];
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-stats divider-top-angled" style={{ boxShadow: 'var(--border-glow-stats)' }}>
      <MeshBackdrop intensity={0.7} />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">THE PAYOFF</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-4xl">
            Marketing is more than a cost center. With Enrich, it's your compounding growth engine.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <div className="border-t border-white/20 pt-6">
                {/* Amber accent with glow on stat numbers */}
                <CountUp target={s.value} className="text-6xl md:text-7xl font-black tracking-tight text-accent-amber text-glow" />
                <p className="mt-4 text-muted-foreground max-w-xs">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* HOW IT WORKS — enhanced scroll-driven stepper with modern motion */
function HowTo() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Scroll-driven activation using IntersectionObserver
  useEffect(() => {
    if (reduced) {
      setActive(0);
      return;
    }

    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    }, observerOptions);

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section className="relative py-28 md:py-32 bg-background overflow-hidden">
      {/* Layered atmospheric background */}
      <AtmosphericBackground gridRef={gridRef} gradientRef={gradientRef} particlesRef={particlesRef} />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.28em] text-brand-soft">HOW IT WORKS</p>
            <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance">
              <Reveal className="inline">Your autonomous marketing workflow</Reveal>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enrich specialists work together in real time — research feeds content, content fuels campaigns, and insights inform the next brief.
            </p>
          </div>
        </Reveal>

        {/* Split layout: left stepper + right sticky preview */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Stepper */}
          <div className="space-y-16 md:space-y-[50vh] md:pt-[25vh] md:pb-[25vh]">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.n}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="group relative transition-all duration-500 ease-out"
                  style={{ 
                    opacity: isActive ? 1 : 0.35,
                    transform: isActive ? "translateX(0)" : "translateX(-8px)"
                  }}
                >
                  {/* Active indicator bar */}
                  <div 
                    className="absolute -left-4 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-out"
                    style={{
                      background: isActive 
                        ? "linear-gradient(180deg, var(--brand) 0%, var(--brand-soft) 100%)" 
                        : "transparent",
                      boxShadow: isActive ? "0 0 20px oklch(0.65 0.22 295 / 0.6)" : "none",
                    }}
                  />
                  
                  {/* Mobile preview */}
                  <div className="md:hidden mb-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-brand/40 via-brand-deep to-background shadow-glow">
                    <img src={s.img} alt={`${s.title} — ${s.tagline}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold border border-white/20">
                      Step {s.n} · {s.title}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    {/* Step indicator dot with glow */}
                    <div className="relative mt-3 md:mt-4 shrink-0">
                      <span
                        className="inline-block rounded-full transition-all duration-500"
                        style={{
                          width: isActive ? 14 : 10,
                          height: isActive ? 14 : 10,
                          background: isActive ? "var(--brand)" : "var(--muted-foreground)",
                          boxShadow: isActive 
                            ? "0 0 0 4px oklch(0.65 0.22 295 / 0.2), 0 0 24px oklch(0.65 0.22 295 / 0.5)" 
                            : "none",
                        }}
                      />
                      {/* Pulse ring for active state */}
                      {isActive && (
                        <span 
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{ 
                            background: "var(--brand)",
                            animationDuration: "2s"
                          }}
                        />
                      )}
                    </div>
                    
                    <div className="min-w-0">
                      <span className="text-xs text-muted-foreground font-mono tracking-widest">({s.n})</span>
                      <h3
                        className="mt-2 font-black tracking-tight leading-[0.95] transition-all duration-500"
                        style={{
                          fontSize: "clamp(2rem, 5vw, 3.5rem)",
                          color: isActive ? "var(--brand-soft)" : "var(--foreground)",
                          textShadow: isActive ? "0 0 30px oklch(0.65 0.22 295 / 0.4)" : "none",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p 
                        className="mt-3 font-semibold text-base md:text-lg transition-all duration-500"
                        style={{ 
                          color: isActive ? "var(--brand-soft)" : "var(--muted-foreground)",
                          opacity: isActive ? 1 : 0.7
                        }}
                      >
                        {s.tagline}
                      </p>
                      <p 
                        className="mt-2 leading-relaxed max-w-md text-[0.95rem] md:text-base transition-all duration-500"
                        style={{ 
                          color: isActive ? "var(--muted-foreground)" : "var(--muted-foreground)",
                          opacity: isActive ? 1 : 0.5
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Visual Preview */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              {/* Modern card with glass effect */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Outer glow ring */}
                <div 
                  className="absolute -inset-1 rounded-[1.4rem] transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.72 0.2 300 / 0.4), oklch(0.65 0.22 295 / 0.2), oklch(0.75 0.14 190 / 0.3))",
                    opacity: 0.6,
                    filter: "blur(1px)",
                  }}
                />
                
                {/* Main card */}
                <div className="relative aspect-[4/5] max-h-[75vh] rounded-[1.2rem] bg-gradient-to-br from-brand/30 via-brand-deep/80 to-background border border-border/50 overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)]">
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 transition-all duration-1000 ease-out"
                    style={{
                      background: active === 0 
                        ? "radial-gradient(ellipse at 30% 40%, oklch(0.65 0.22 295 / 0.3) 0%, transparent 60%)"
                        : active === 1
                        ? "radial-gradient(ellipse at 70% 30%, oklch(0.72 0.2 300 / 0.3) 0%, transparent 60%)"
                        : "radial-gradient(ellipse at 50% 60%, oklch(0.75 0.14 190 / 0.3) 0%, transparent 60%)",
                    }}
                  />
                  
                  {/* Image transitions with cross-fade and slide */}
                  {steps.map((s, i) => (
                    <div
                      key={s.n}
                      className="absolute inset-0 transition-all duration-700 ease-out"
                      style={{
                        opacity: i === active ? 1 : 0,
                        transform: i === active 
                          ? "translateY(0) scale(1)" 
                          : i > active 
                            ? "translateY(20px) scale(1.02)" 
                            : "translateY(-20px) scale(1.02)",
                        pointerEvents: i === active ? "auto" : "none",
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LottieAnimation type={s.animation} size={280} />
                      </div>
                    </div>
                  ))}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
                  
                  {/* Top indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-md px-3 py-1.5 text-xs font-semibold border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                      Step {steps[active].n}
                    </div>
                    <div className="text-xs font-semibold text-white/80 backdrop-blur-md px-3 py-1.5 rounded-full bg-black/20 border border-white/10">
                      {steps[active].title}
                    </div>
                  </div>
                  
                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="backdrop-blur-md bg-black/30 rounded-2xl p-4 border border-white/10">
                      <h4 className="font-bold text-lg text-white">{steps[active].title}</h4>
                      <p className="text-sm text-white/70 mt-1">{steps[active].tagline}</p>
                    </div>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className="h-1.5 rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: i === active ? 32 : 8,
                          background: i === active 
                            ? "linear-gradient(90deg, var(--brand), var(--brand-soft))" 
                            : "rgba(255,255,255,0.3)",
                          boxShadow: i === active 
                            ? "0 0 12px oklch(0.65 0.22 295 / 0.6)" 
                            : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ a, i }: { a: (typeof agents)[number]; i: number }) {
  const tiltRef = useTilt(7);
  return (
    <Reveal delay={i * 80}>
      {/* STEP 6: Agent card with hover glow */}
      <div ref={tiltRef} className="agent-card tilt-card group rounded-3xl overflow-hidden border border-border bg-card hover:border-brand/50 transition-colors">
        <div className="aspect-square overflow-hidden">
          <img src={a.img} alt={`${a.name} — ${a.role}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <div className="text-xl font-black">{a.name}</div>
          <div className="text-sm text-muted-foreground">{a.role}</div>
          <div className="mt-4 flex items-center gap-2 text-xs text-brand-soft">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            {a.status}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function MeetTeam() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.28em] text-brand-soft">MEET YOUR TEAM</p>
          {/* Section title with character splitting */}
          <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance max-w-3xl">
            <Reveal className="inline">Four specialists. One relentless team.</Reveal>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {agents.map((a, i) => (
            <div 
              key={a.name} 
              className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <AgentCard a={a} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          {/* Section title with character splitting */}
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-3xl">
            <Reveal className="inline">Loved by marketing teams that mean growth.</Reveal>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80} from="left">
              <figure className="relative rounded-3xl border border-border bg-card p-8 pl-10 flex flex-col justify-between min-h-[280px] h-full">
                <span aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-brand-soft via-brand to-brand-deep" />
                <blockquote className="text-lg italic leading-relaxed font-medium text-foreground/95" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 not-italic">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const vhMid = window.innerHeight / 2;
      const raw = (vhMid - mid) / (window.innerHeight);
      setP(Math.max(-1, Math.min(1, raw)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const chips = [
    { label: "Intercom", slug: "intercom", x: "10%", y: "62%", size: 64, depth: 40, delay: 0 },
    { label: "Notion", slug: "notion", x: "22%", y: "34%", size: 56, depth: 60, delay: 0.6 },
    { label: "HubSpot", slug: "hubspot", x: "78%", y: "38%", size: 60, depth: -50, delay: 1.1 },
    { label: "Figma", slug: "figma", x: "90%", y: "68%", size: 68, depth: -70, delay: 0.3 },
    { label: "Linear", slug: "linear", x: "6%", y: "22%", size: 48, depth: 30, delay: 0.9 },
    { label: "Zapier", slug: "zapier", x: "92%", y: "18%", size: 52, depth: -30, delay: 1.4 },
    { label: "Pipedrive", slug: "pipedrive", x: "72%", y: "82%", size: 56, depth: -20, delay: 1.8 },
    { label: "Google Ads", slug: "googleads", x: "16%", y: "84%", size: 52, depth: 20, delay: 2.2 },
  ];

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden py-28 md:py-36 divider-top-angled divider-bottom-angled"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 40%, oklch(0.9 0.06 300) 0%, oklch(0.94 0.03 300) 55%, oklch(0.97 0.01 285) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-4xl px-6 text-center text-[oklch(0.2_0.05_285)]">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-md px-4 py-2 text-sm text-[oklch(0.25_0.05_285)]" style={{ background: "transparent", boxShadow: "inset 0 0 0 1px oklch(0.55 0.22 295 / 0.35)" }}>
            <span>API coming soon</span>
            <a href="#" className="inline-flex items-center gap-1 font-bold text-[oklch(0.35_0.2_290)]">
              Register your interest <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-10 font-black tracking-tight leading-[1.02] text-balance text-4xl sm:text-5xl md:text-6xl">
            Weave Enrich into your<br className="hidden sm:block" /> existing workflow
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-6xl mt-16 md:mt-20 h-[380px] md:h-[440px] px-6">
        {chips.map((c) => (
          <div
            key={c.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{
              left: c.x,
              top: c.y,
              animationDelay: `${c.delay}s`,
              transform: `translate(-50%, calc(-50% + ${p * c.depth}px))`,
              transition: "transform 200ms linear",
            }}
            aria-label={c.label}
          >
            <div
              className="grid place-items-center rounded-full shadow-[0_20px_40px_-15px_rgba(50,20,80,0.35)] ring-1 ring-black/5 bg-white"
              style={{
                width: c.size,
                height: c.size,
              }}
            >
              <IntegrationIcon slug={c.slug} size={c.size * 0.5} />
            </div>
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, calc(-50% + ${p * -20}px))`, transition: "transform 200ms linear" }}
        >
          <div className="relative rounded-full bg-gradient-brand px-10 md:px-14 py-5 md:py-6 shadow-glow flex items-center gap-4">
            <img src={enrichMark.url} alt="Enrich mark" className="w-9 h-9 md:w-11 md:h-11 rounded-md object-cover" />
            <span className="text-white text-2xl md:text-3xl font-black tracking-tight">Enrich</span>
          </div>
        </div>
      </div>

      <div className="relative text-center mt-8">
        <a href="#" className="inline-flex items-center gap-1.5 font-bold text-[oklch(0.2_0.05_285)]">
          Explore integrations <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-cta divider-top-angled">
      <MeshBackdrop intensity={0.6} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance">
            Meet your new marketing team.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of teams growing faster with autonomous AI marketers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {/* Primary CTA - lime accent for action */}
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-accent-warm px-6 py-3 font-semibold text-[oklch(0.2_0.05_285)] btn-lift neon-border">
              Get Started — It's Free <ArrowRight className="w-4 h-4" />
            </a>
            {/* Secondary button - teal for less emphasis */}
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 font-semibold transition btn-lift neon-border-teal">
              Book a Demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const cols = {
    Agents: ["Helena — Digital Marketer", "Sam — SEO / GEO Manager", "Kai — Social Listening", "Angela — Email Marketer", "All agents"],
    Solutions: ["Startups & SMBs", "Digital Agencies", "E-commerce Brands", "Global Enterprises", "Marketing Teams"],
    Resources: ["Blog", "Case Studies", "Help Center", "Docs", "Changelog"],
    Company: ["About", "Careers", "Press", "Legal", "Contact"],
  };
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-black text-xl">
              <span className="grid place-items-center w-8 h-8 rounded-md bg-gradient-brand">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              Enrich Labs
            </div>
            <p className="mt-4 text-sm text-muted-foreground">The AI marketing operating system for modern teams.</p>
          </div>
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <div className="text-sm font-semibold mb-4">{title}</div>
              <ul className="space-y-2">
                {items.map((i) => (
                  <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Enrich Labs, Inc.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground">
        <AnnouncementBar />
        <Nav />
        <Hero />
        <AgentsMarquee />
        <Features />
        <Stats />
        <HowTo />
        <MeetTeam />
        <Testimonials />
        <Integrations />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
