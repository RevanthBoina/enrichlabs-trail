import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Plus, Shuffle, Sparkles, Menu, Play, Check } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import helenaImg from "@/assets/agent-helena.jpg";
import samImg from "@/assets/agent-sam.jpg";
import kaiImg from "@/assets/agent-kai.jpg";
import angelaImg from "@/assets/agent-angela.jpg";
import heroDash from "@/assets/hero-dashboard.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import enrichMark from "@/assets/enrich-mark.png.asset.json";
import featContent from "@/assets/feature-content.jpg";
import featAds from "@/assets/feature-ads.jpg";
import featBrand from "@/assets/feature-brand.jpg";
import featAnalytics from "@/assets/feature-analytics.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* Scroll-reveal hook — adds .is-visible when element enters viewport */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

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

const logos = ["Acme Corp", "Shop&Save", "Northwind", "Lumen", "BrightPath", "Vanta Retail", "Kestrel"];

const features = [
  { title: "Ship campaigns end to end", body: "Your team is buried in briefs and dashboards. Enrich agents research, write, publish, and optimize across every channel — so campaigns actually ship, on time, on brand.", img: featContent },
  { title: "Grow like a pro", body: "Enrich agents plan keywords, generate content, launch ads, and send emails on autopilot. Personalize at scale, run experiments in bulk, and know exactly what's working.", img: featAds },
  { title: "Protect your brand", body: "Every agent learns your voice, guidelines, and offers from a central knowledge base. Stay consistent across blogs, ads, email, and social — without micromanaging every asset.", img: featBrand },
  { title: "Stay in control", body: "One workspace for every campaign, agent, and metric. Approve work, edit outputs, and track ROI in real time — with humans in the loop wherever it matters.", img: featAnalytics },
];

const steps = [
  { n: "01", title: "Gather", tagline: "Continuous research", body: "Kai listens across social, search, and communities. Sam tracks keywords and competitors. Your agents surface opportunities before your team even opens a dashboard.", img: kaiImg },
  { n: "02", title: "Execute", tagline: "Autonomous execution", body: "Helena writes blogs, ads, and landing pages. Angela drafts and sends email campaigns. Everything ships to your CMS, ad accounts, and ESP — with your review when you want it.", img: helenaImg },
  { n: "03", title: "Analyze", tagline: "Insights that loop back", body: "Live dashboards track ROI, traffic, and revenue across channels. Results feed straight back into the next brief, so every campaign compounds on the last.", img: featAnalytics },
];

const agents = [
  { name: "Helena", role: "AI Digital Marketer", status: "Writing a blog post…", img: helenaImg },
  { name: "Sam", role: "AI SEO / GEO Manager", status: "Optimizing campaign…", img: samImg },
  { name: "Kai", role: "AI Social Listening", status: "Responding on Reddit…", img: kaiImg },
  { name: "Angela", role: "AI Email Marketer", status: "Crafting email campaign…", img: angelaImg },
];

const testimonials = [
  { quote: "Enrich has doubled our content output without expanding the team. It's like hiring a full marketing pod overnight.", name: "Jane Doe", role: "Marketing Director", company: "Acme Corp" },
  { quote: "Our campaigns run themselves. Enrich feels like our entire marketing department — at a fraction of the cost.", name: "John Smith", role: "CEO", company: "Shop&Save" },
  { quote: "Helena writes better first drafts than most agencies we've hired. We just review, tweak, and ship.", name: "Priya Natarajan", role: "Head of Growth", company: "Northwind" },
  { quote: "The moment we plugged in our brand voice, every output started sounding like us. That was the unlock.", name: "Marco Álvarez", role: "VP Marketing", company: "Lumen" },
  { quote: "This is what an AI marketing team should feel like.", name: "Sara Chen", role: "Founder", company: "BrightPath" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const items = ["Agents", "Solutions", "Resources", "Pricing", "Blog"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 font-black text-lg">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-brand shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          Enrich Labs
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {items.map((i) => (
            <a key={i} href="#" className="px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-medium transition">
            Login <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="inline-flex items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.2_0.05_285)] hover:brightness-95 transition">
            Get Started
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}><Menu className="w-5 h-5" /></button>
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-8 -left-10 w-64 h-40 rounded-2xl bg-[oklch(0.85_0.08_80)] rotate-[-8deg] animate-float" />
        <div className="absolute top-24 right-8 w-72 h-44 rounded-2xl bg-[oklch(0.3_0.15_20)] rotate-[6deg] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-12 w-56 h-36 rounded-2xl bg-[oklch(0.55_0.2_25)] rotate-[10deg] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-8 right-16 w-64 h-40 rounded-2xl bg-[oklch(0.4_0.15_340)] rotate-[-12deg] animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 h-48 rounded-2xl bg-[oklch(0.25_0.1_260)] rotate-[4deg] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <h1 className="font-black tracking-tight text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] animate-reveal">
          AI marketers<br />that ship.
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
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white">
                Launch <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="mt-8 text-lg text-foreground/85">
            From brief to launch, <span className="font-semibold">1,000+ companies</span> let Enrich agents run their marketing 24/7.
          </p>
        </div>

        {/* Hero product visual — autoplaying loop, muted */}
        <Reveal delay={200} className="mt-16">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 overflow-hidden shadow-glow bg-black">
            <video
              src={heroVideo.url}
              poster={heroDash}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Enrich Labs AI marketing dashboard in motion"
              className="w-full h-auto block"
            />
            {/* Cover bottom-right watermark from source video */}
            <div
              aria-hidden
              className="absolute bottom-0 right-0 pointer-events-none"
              style={{
                width: "9%",
                height: "12%",
                background:
                  "radial-gradient(ellipse at center, oklch(0.08 0.03 285) 55%, oklch(0.08 0.03 285 / 0.85) 78%, transparent 100%)",
              }}
            />
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {logos.map((l) => (
            <span key={l} className="text-lg font-bold tracking-wide text-white/70">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentsMarquee() {
  const row1 = agentThumbs.slice(0, 6);
  const row2 = agentThumbs.slice(6, 12);
  const Card = ({ t }: { t: (typeof agentThumbs)[number] }) => (
    <div className={`shrink-0 w-[280px] sm:w-[340px] aspect-video rounded-2xl ${t.tone} p-6 flex flex-col justify-between shadow-lg`}>
      <div className="text-xs font-bold tracking-widest opacity-70">AGENT</div>
      <div className="text-2xl font-black tracking-tight">{t.title}</div>
    </div>
  );
  return (
    <section className="py-28 md:py-32 bg-background">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
          <p className="text-sm font-bold tracking-[0.28em] text-brand-soft">WHY ENRICH</p>
          <h2 className="mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] text-balance">
            A complete marketing<br className="hidden sm:block" /> operating system
          </h2>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything your team needs to plan, execute, and analyze campaigns — powered by AI specialists that actually do the work.
          </p>
        </div>
      </Reveal>

      <div className="space-y-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee-left">
          {[...row1, ...row1].map((t, idx) => <Card key={`r1-${idx}`} t={t} />)}
        </div>
        <div className="flex w-max gap-6 animate-marquee-right">
          {[...row2, ...row2].map((t, idx) => <Card key={`r2-${idx}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 2) * 120}>
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-brand/50 transition h-full">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand/20 text-brand-soft">
                  <Check className="w-4 h-4" />
                </span>
                <span>0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl font-black tracking-tight">{f.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.body}</p>
              <div className="mt-8 aspect-[16/10] rounded-2xl overflow-hidden border border-border">
                <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "1,000+", label: "Companies trust Enrich agents to run and grow their marketing." },
    { value: "24/7", label: "Autonomous execution across content, ads, email, and social." },
    { value: "10H+", label: "On average, marketing teams save over 10 hours every week." },
  ];
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">THE PAYOFF</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-4xl">
            Marketing is more than a cost center. With Enrich, it's your compounding growth engine.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 120}>
              <div className="border-t border-white/20 pt-6">
                <div className="text-6xl md:text-7xl font-black tracking-tight">{s.value}</div>
                <p className="mt-4 text-muted-foreground max-w-xs">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* HOW IT WORKS — sticky scroll motion cloned from pitch.com "Why Pitch" section.
   Left column: stacked steps; the one closest to viewport center is "active".
   Right column: a sticky panel whose image cross-fades to the active step. */
function HowTo() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const pick = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      els.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };

    pick();
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        pick();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", pick);
    };
  }, []);

  return (
    <section className="py-28 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.28em] text-brand-soft">HOW IT WORKS</p>
            <h2 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance">
              Your autonomous<br className="hidden sm:block" /> marketing workflow
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enrich specialists work together in real time — research feeds content, content fuels campaigns, and insights inform the next brief.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* LEFT — scrolling step list */}
          <div className="space-y-16 md:space-y-[55vh] md:pt-[22vh] md:pb-[22vh]">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.n}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {/* Mobile: inline image per step. Desktop: hidden (sticky panel handles visuals). */}
                  <div className="md:hidden mb-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-brand/40 via-brand-deep to-background shadow-glow">
                    <img src={s.img} alt={`${s.title} — ${s.tagline}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold border border-white/20">
                      Step {s.n} · {s.title}
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5">
                    <span
                      className="mt-3 md:mt-4 inline-block rounded-full transition-all duration-700 shrink-0"
                      style={{
                        width: isActive ? 12 : 8,
                        height: isActive ? 12 : 8,
                        background: isActive ? "var(--brand)" : "var(--muted-foreground)",
                        boxShadow: isActive ? "0 0 0 5px oklch(0.65 0.22 295 / 0.18)" : "none",
                      }}
                    />
                    <div className="min-w-0">
                      <span className="text-xs text-muted-foreground font-mono tracking-widest">({s.n})</span>
                      <h3
                        className="mt-2 font-black tracking-tight leading-[0.95] transition-colors duration-700"
                        style={{
                          fontSize: "clamp(2rem, 5vw, 3.5rem)",
                          color: isActive ? "var(--brand-soft)" : "var(--foreground)",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-3 text-brand-soft/90 font-semibold text-base md:text-lg">{s.tagline}</p>
                      <p className="mt-2 text-muted-foreground leading-relaxed max-w-md text-[0.95rem] md:text-base">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — sticky visual that swaps on active (desktop only) */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] max-h-[75vh] rounded-3xl bg-gradient-to-br from-brand/50 via-brand-deep to-background border border-border shadow-glow overflow-hidden">
                {steps.map((s, i) => (
                  <img
                    key={s.n}
                    src={s.img}
                    alt={`${s.title} — ${s.tagline}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ease-out"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "scale(1)" : "scale(1.06)",
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 text-xs font-semibold border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  Step {steps[active].n} · {steps[active].title}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className="h-1 rounded-full transition-all duration-700"
                      style={{
                        flex: i === active ? 3 : 1,
                        background: i === active ? "var(--brand-soft)" : "oklch(1 0 0 / 0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetTeam() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.28em] text-brand-soft">MEET YOUR TEAM</p>
          <h2 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance max-w-3xl">
            Four specialists.<br />One relentless team.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a, i) => (
            <Reveal key={a.name} delay={i * 100}>
              <div className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-brand/50 transition">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-3xl">
            Loved by marketing teams that mean growth.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <figure className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between min-h-[280px] h-full">
                <div>
                  <div className="text-5xl font-black text-brand-soft leading-none">"</div>
                  <blockquote className="mt-3 text-lg leading-snug">{t.quote}</blockquote>
                </div>
                <figcaption className="mt-8">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 bg-gradient-hero">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance">
            Meet your new marketing team.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of teams growing faster with autonomous AI marketers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-[oklch(0.2_0.05_285)]">
              Get Started — It's Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 font-semibold transition">
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
      <CTA />
      <Footer />
    </main>
  );
}
{/* Play icon kept available for potential future placeholders */}
export const _iconRef = Play;
