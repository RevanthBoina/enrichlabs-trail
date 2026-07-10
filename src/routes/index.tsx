import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Plus, Shuffle, Sparkles, Menu, Play, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const templateThumbs = [
  { title: "Business Model Canvas", tone: "bg-[oklch(0.85_0.08_80)] text-[oklch(0.2_0.1_60)]" },
  { title: "The Editorial", tone: "bg-[oklch(0.25_0.1_260)] text-white" },
  { title: "Short Film Festival", tone: "bg-[oklch(0.3_0.15_20)] text-[oklch(0.9_0.1_80)]" },
  { title: "Creative Brief", tone: "bg-[oklch(0.55_0.2_25)] text-white" },
  { title: "Sales Pitch", tone: "bg-[oklch(0.9_0.05_320)] text-[oklch(0.3_0.1_320)]" },
  { title: "Marketing Proposal", tone: "bg-[oklch(0.35_0.15_290)] text-[oklch(0.9_0.1_320)]" },
  { title: "Series B Pitch Deck", tone: "bg-[oklch(0.25_0.05_260)] text-[oklch(0.85_0.1_80)]" },
  { title: "Newbie Partnership", tone: "bg-[oklch(0.5_0.2_15)] text-white" },
  { title: "The Bloom Template", tone: "bg-[oklch(0.4_0.15_340)] text-[oklch(0.95_0.05_60)]" },
  { title: "Strategic Planning", tone: "bg-[oklch(0.75_0.15_80)] text-[oklch(0.25_0.1_260)]" },
  { title: "Match", tone: "bg-[oklch(0.65_0.2_25)] text-white" },
  { title: "Onboarding", tone: "bg-[oklch(0.9_0.03_260)] text-[oklch(0.3_0.1_260)]" },
];

const logos = ["synthesia", "Pentagram", "Kolo", "perplexity", "THRIVE GLOBAL", "CLEVELAND BROWNS", "Linear"];

const features = [
  { title: "Make stunning slides", body: "Your audience sees hundreds of presentations. Use Pitch's powerful editor to stand out with sleek slides enhanced by high-res video, animations, and custom fonts." },
  { title: "Pitch like a pro", body: "Import customer data, generate personalized decks in bulk, share content in custom deal rooms, and track visitor engagement so you know when to follow up." },
  { title: "Showcase your brand", body: "When your team is pitching at scale, consistency can fall apart fast. Pitch keeps everyone aligned with shared templates, a brand library, and AI that adapts to your workflow." },
  { title: "Stay in control", body: "With every team presentation in a single cloud-based workspace, you can easily organize workflows and stay on top of your shared content and collateral." },
];

const steps = [
  { n: "01", title: "Create", tagline: "Intuitive slide creation", body: "Start from a blank canvas or template — or use AI to generate on-brand slides in seconds. Keep full design control over every detail." },
  { n: "02", title: "Collaborate", tagline: "Remove team bottlenecks", body: "The best presentations are made together. Live co-editing, slide assignments, and comments mean your team moves faster and smarter." },
  { n: "03", title: "Deliver", tagline: "Present unforgettable slides", body: "Grab attention with interactive embeds and animations, share via live links and custom deal rooms, and track engagement." },
];

const testimonials = [
  { quote: "Our work is highly visual and motion-driven. We know our presentations will always look polished and play flawlessly.", name: "Tara Dabir", role: "Director of New Business Development", company: "Pentagram" },
  { quote: "I'm a very happy customer and love the fact that Pitch continuously gets better. It's really hard to imagine going back to Keynote or Google Slides!", name: "Edwin Khodabakchian", role: "CEO", company: "Perplexity" },
  { quote: "Everyone kind of realized super quickly how much better everything became once we switched to Pitch.", name: "Lucas Löf", role: "UX Lead", company: "Kolo" },
  { quote: "If more than one person on the team is producing decks, the consistency problem just gets worse over time. Easily solved with Pitch.", name: "Jelle van Schaick", role: "Head of Marketing", company: "Linear" },
  { quote: "This is what product delight looks like.", name: "Vlad Zely", role: "Head of Product Design", company: "Synthesia" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const items = ["Product", "Use Cases", "Templates", "Resources", "Pricing"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 font-black text-lg">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-brand shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          Pitch
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {items.map((i) => (
            <a key={i} href="#" className="px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-medium transition">
            Log in <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="inline-flex items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-[oklch(0.2_0.05_285)] hover:brightness-95 transition">
            Sign up
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
        <span className="font-semibold">Introducing Pitch Agent:</span>
        <span className="hidden sm:inline">Generate on-brand presentations in seconds with AI.</span>
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
      {/* floating template thumbs behind */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-8 -left-10 w-64 h-40 rounded-2xl bg-[oklch(0.85_0.08_80)] rotate-[-8deg]" />
        <div className="absolute top-24 right-8 w-72 h-44 rounded-2xl bg-[oklch(0.3_0.15_20)] rotate-[6deg]" />
        <div className="absolute bottom-20 left-12 w-56 h-36 rounded-2xl bg-[oklch(0.55_0.2_25)] rotate-[10deg]" />
        <div className="absolute bottom-8 right-16 w-64 h-40 rounded-2xl bg-[oklch(0.4_0.15_340)] rotate-[-12deg]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 h-48 rounded-2xl bg-[oklch(0.25_0.1_260)] rotate-[4deg]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-32 text-center">
        <h1 className="font-black tracking-tight text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
          Create slides<br />that win.
        </h1>

        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-4 shadow-glow text-left">
            <input
              type="text"
              defaultValue="Generate a sales presentation for a digital marketplace"
              className="w-full bg-transparent text-[oklch(0.3_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
            />
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="grid place-items-center w-8 h-8 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.3_0.05_285)] hover:bg-[oklch(0.9_0.03_285)]">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)]">
                  <Shuffle className="w-4 h-4" /> Prompts
                </button>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white">
                Generate <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="mt-8 text-lg text-foreground/85">
            From prompt to presentation, <span className="font-semibold">4M+ teams</span> create and deliver winning slides together in Pitch.
          </p>
        </div>
      </div>

      {/* logos */}
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
  const row1 = templateThumbs.slice(0, 6);
  const row2 = templateThumbs.slice(6, 12);
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">WHY PITCH</p>
        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance">
          Pitch is your presentation workspace
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          From first slide to final delivery, Pitch is where teams create presentations that actually land.
        </p>
      </div>

      <div className="space-y-6 overflow-hidden">
        {[row1, row2].map((row, i) => (
          <div key={i} className="flex gap-6 px-6" style={{ transform: i === 1 ? "translateX(-40px)" : undefined }}>
            {row.concat(row).map((t, idx) => (
              <div key={idx} className={`shrink-0 w-[280px] sm:w-[340px] aspect-video rounded-2xl ${t.tone} p-6 flex flex-col justify-between shadow-lg`}>
                <div className="text-xs font-bold tracking-widest opacity-70">TEMPLATE</div>
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
    { value: "4M+", label: "Professional teams choose Pitch to build, deliver, and win." },
    { value: "150+", label: "Templates designed by experts to get you started." },
    { value: "5H+", label: "On average, users save over 5 hours every week." },
  ];
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">THE PAYOFF</p>
        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance max-w-4xl">
          Presentations are more than an asset. With Pitch, they're your new competitive advantage.
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
          <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">HOW TO</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance">
            From first draft to closed deal, and beyond
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The best presentations aren't made by just one person. In Pitch, your whole team works together to create sleek, effective slides.
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
          Loved by the world's most creative teams.
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
          Start winning with better slides.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Join millions of teams building beautiful, on-brand presentations in Pitch.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-[oklch(0.2_0.05_285)]">
            Sign up free <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 font-semibold transition">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = {
    Product: ["Features", "Templates", "Pricing", "What's new", "Integrations"],
    "Use cases": ["Sales", "Marketing", "Startups", "Agencies", "Education"],
    Resources: ["Blog", "Help center", "Community", "Careers", "Press"],
    Company: ["About", "Customers", "Partners", "Legal", "Contact"],
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
              Pitch
            </div>
            <p className="mt-4 text-sm text-muted-foreground">The presentation workspace for modern teams.</p>
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
          <div>© {new Date().getFullYear()} Pitch Software GmbH</div>
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
