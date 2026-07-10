import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Plus, Shuffle, Sparkles, Menu, Play, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

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
  { title: "Ship campaigns end to end", body: "Your team is buried in briefs and dashboards. Enrich agents research, write, publish, and optimize across every channel — so campaigns actually ship, on time, on brand." },
  { title: "Grow like a pro", body: "Enrich agents plan keywords, generate content, launch ads, and send emails on autopilot. Personalize at scale, run experiments in bulk, and know exactly what's working." },
  { title: "Protect your brand", body: "Every agent learns your voice, guidelines, and offers from a central knowledge base. Stay consistent across blogs, ads, email, and social — without micromanaging every asset." },
  { title: "Stay in control", body: "One workspace for every campaign, agent, and metric. Approve work, edit outputs, and track ROI in real time — with humans in the loop wherever it matters." },
];

const steps = [
  { n: "01", title: "Gather", tagline: "Continuous research", body: "Kai listens across social, search, and communities. Sam tracks keywords and competitors. Your agents surface opportunities before your team even opens a dashboard." },
  { n: "02", title: "Execute", tagline: "Autonomous execution", body: "Helena writes blogs, ads, and landing pages. Angela drafts and sends email campaigns. Everything ships to your CMS, ad accounts, and ESP — with your review when you want it." },
  { n: "03", title: "Analyze", tagline: "Insights that loop back", body: "Live dashboards track ROI, traffic, and revenue across channels. Results feed straight back into the next brief, so every campaign compounds on the last." },
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
        <div className="absolute -top-8 -left-10 w-64 h-40 rounded-2xl bg-[oklch(0.85_0.08_80)] rotate-[-8deg]" />
        <div className="absolute top-24 right-8 w-72 h-44 rounded-2xl bg-[oklch(0.3_0.15_20)] rotate-[6deg]" />
        <div className="absolute bottom-20 left-12 w-56 h-36 rounded-2xl bg-[oklch(0.55_0.2_25)] rotate-[10deg]" />
        <div className="absolute bottom-8 right-16 w-64 h-40 rounded-2xl bg-[oklch(0.4_0.15_340)] rotate-[-12deg]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 h-48 rounded-2xl bg-[oklch(0.25_0.1_260)] rotate-[4deg]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-32 text-center">
        <h1 className="font-black tracking-tight text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
          AI marketers<br />that ship.
        </h1>

        <div className="mt-16 mx-auto max-w-2xl">
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

function TemplatesMarquee() {
  const row1 = agentThumbs.slice(0, 6);
  const row2 = agentThumbs.slice(6, 12);
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">WHY ENRICH</p>
        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance">
          A complete marketing operating system
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything your team needs to plan, execute, and analyze campaigns — powered by AI specialists that actually do the work.
        </p>
      </div>

      <div className="space-y-6 overflow-hidden">
        {[row1, row2].map((row, i) => (
          <div key={i} className="flex gap-6 px-6" style={{ transform: i === 1 ? "translateX(-40px)" : undefined }}>
            {row.concat(row).map((t, idx) => (
              <div key={idx} className={`shrink-0 w-[280px] sm:w-[340px] aspect-video rounded-2xl ${t.tone} p-6 flex flex-col justify-between shadow-lg`}>
                <div className="text-xs font-bold tracking-widest opacity-70">AGENT</div>
                <div className="text-2xl font-black tracking-tight">{t.title}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-brand/50 transition">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand/20 text-brand-soft">
                <Check className="w-4 h-4" />
              </span>
              <span>0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-3xl md:text-4xl font-black tracking-tight">{f.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.body}</p>
            <div className="mt-8 aspect-[16/10] rounded-2xl bg-gradient-to-br from-brand/40 via-brand-deep to-background/60 border border-border grid place-items-center text-white/60 text-sm">
              <div className="w-4/5 h-4/5 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                <Play className="w-8 h-8" />
              </div>
            </div>
          </div>
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
        <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">THE PAYOFF</p>
        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-4xl">
          Marketing is more than a cost center. With Enrich, it's your compounding growth engine.
        </h2>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="border-t border-white/20 pt-6">
              <div className="text-6xl md:text-7xl font-black tracking-tight">{s.value}</div>
              <p className="mt-4 text-muted-foreground max-w-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowTo() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">HOW IT WORKS</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance">
            Your autonomous marketing workflow
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Enrich specialists work together in real time — research feeds content, content fuels campaigns, and insights inform the next brief.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {steps.map((s, i) => (
            <div key={s.n} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <span className="text-sm text-muted-foreground font-mono">({s.n})</span>
                <h3 className="mt-3 text-5xl md:text-6xl font-black tracking-tight">{s.title}</h3>
                <p className="mt-6 text-brand-soft font-semibold text-lg">{s.tagline}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{s.body}</p>
              </div>
              <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-brand/50 via-brand-deep to-background border border-border shadow-glow overflow-hidden">
                <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-2 p-3">
                  {Array.from({ length: 6 }).map((_, k) => (
                    <div key={k} className="rounded-lg bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-3xl">
          Loved by marketing teams that mean growth.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="text-5xl font-black text-brand-soft leading-none">"</div>
                <blockquote className="mt-3 text-lg leading-snug">{t.quote}</blockquote>
              </div>
              <figcaption className="mt-8">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
              </figcaption>
            </figure>
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
      <TemplatesMarquee />
      <Features />
      <Stats />
      <HowTo />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
