import { useEffect, useState, useRef } from "react";
import { Plus, Shuffle, ArrowUp, Sparkles } from "lucide-react";

const prompts = [
  "Launch a LinkedIn campaign for SaaS founders",
  "Generate 30-day SEO roadmap",
  "Analyze competitor content strategy",
  "Create Google Ads campaign",
  "Optimize landing page conversions",
  "Prepare weekly marketing report",
  "Build email nurture sequence",
  "Monitor brand mentions",
];

export function SimulatedPromptBar() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isThinking, setIsThinking] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [thinkingDots, setThinkingDots] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Typing cycle
  useEffect(() => {
    const currentPrompt = prompts[currentPromptIndex];
    let charIndex = 0;
    setIsTyping(true);
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= currentPrompt.length) {
        setDisplayText(currentPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Start thinking
        setTimeout(() => {
          setIsThinking(true);
          const dotsInterval = setInterval(() => {
            setThinkingDots((prev) => (prev + 1) % 4);
          }, 300);

          // Clear and restart after thinking
          setTimeout(() => {
            clearInterval(dotsInterval);
            setIsThinking(false);
            setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
          }, 2500);
        }, 1500);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [currentPromptIndex]);

  return (
    <div className="relative">
      <div className="rounded-2xl bg-white p-4 shadow-glow text-left">
        {/* Input row with subtle indicator */}
        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={displayText}
            readOnly
            className="flex-1 bg-transparent text-[oklch(0.3_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
          />

          {/* Subtle typing cursor */}
          {isTyping && <span className="w-0.5 h-4 bg-brand/60" />}

          {/* Thinking indicator */}
          {isThinking && (
            <div className="flex items-center gap-1.5 text-brand-soft/70">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs">{".".repeat(thinkingDots)}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="grid place-items-center w-8 h-8 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.4_0.05_285)] hover:bg-[oklch(0.9_0.03_285)] transition-colors">
              <Plus className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)] transition-colors">
              <Shuffle className="w-4 h-4" />
              <span className="hidden sm:inline">Briefs</span>
            </button>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white btn-lift neon-border">
            Launch <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimulatedPromptBar;
