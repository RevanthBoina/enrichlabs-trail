import { useEffect, useState, useRef } from "react";
import { Plus, Shuffle, ArrowUp, Paperclip, Sparkles, Send, Loader2 } from "lucide-react";

const prompts = [
  "Launch a full-funnel campaign for our new product line",
  "Write 10 social posts about AI automation",
  "Create email sequence for product launch",
  "Analyze competitors and suggest strategy",
  "Draft blog post about marketing automation",
];

const aiResponses = [
  "Creating campaign strategy...",
  "Researching competitors...",
  "Drafting content...",
  "Setting up automation...",
  "Optimizing for performance...",
];

const attachments = [
  { icon: "📄", label: "brief.pdf" },
  { icon: "🎨", label: "assets.zip" },
  { icon: "📊", label: "data.csv" },
];

export function SimulatedPromptBar() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isThinking, setIsThinking] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [showAttachments, setShowAttachments] = useState(false);
  const [thinkingDots, setThinkingDots] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentPrompt = prompts[currentPromptIndex];
    
    // Typing animation
    let charIndex = 0;
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentPrompt.length) {
        setDisplayText(currentPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Thinking animation
        setTimeout(() => {
          setIsThinking(true);
          const dotsInterval = setInterval(() => {
            setThinkingDots((prev) => (prev + 1) % 4);
          }, 400);
          
          // Response animation
          setTimeout(() => {
            clearInterval(dotsInterval);
            setIsThinking(false);
            setIsResponding(true);
            
            // Show response then clear and move to next
            setTimeout(() => {
              setShowResponse(true);
              setTimeout(() => {
                setShowResponse(false);
                setIsResponding(false);
                setDisplayText("");
                
                // Move to next prompt
                setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
              }, 3000);
            }, 500);
          }, 2000);
        }, 800);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentPromptIndex]);

  return (
    <div className="relative">
      {/* Main prompt container */}
      <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-5 shadow-2xl border border-white/20 overflow-hidden">
        {/* AI thinking indicator */}
        {isThinking && (
          <div className="flex items-center gap-2 mb-3 text-brand-soft animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              AI is thinking{".".repeat(thinkingDots)}
            </span>
          </div>
        )}

        {/* Response stream */}
        {isResponding && !showResponse && (
          <div className="mb-4 p-3 rounded-xl bg-brand/10 border border-brand/20 animate-fade-in">
            <div className="flex items-center gap-2 text-brand-soft">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{aiResponses[currentPromptIndex]}</span>
            </div>
          </div>
        )}

        {/* Show response */}
        {showResponse && (
          <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-brand/20 to-teal/20 border border-brand/30 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white mb-2">Campaign Created</div>
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lime" />
                    <span>Blog post drafted (1,240 words)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lime" />
                    <span>10 social posts generated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lime" />
                    <span>Email sequence configured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    <span>Launching campaign...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Input row */}
        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={displayText}
            readOnly
            placeholder="What would you like to create?"
            className="flex-1 bg-transparent text-[oklch(0.25_0.05_285)] placeholder:text-[oklch(0.6_0.03_285)] outline-none text-base py-2"
          />
          
          {/* Cursor blink */}
          {isTyping && (
            <span className="w-0.5 h-5 bg-brand animate-pulse" />
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              className="grid place-items-center w-9 h-9 rounded-full bg-[oklch(0.95_0.02_285)] text-[oklch(0.4_0.05_285)] hover:bg-[oklch(0.9_0.03_285)] transition-all hover:scale-105"
              onMouseEnter={() => setShowAttachments(true)}
              onMouseLeave={() => setTimeout(() => setShowAttachments(false), 200)}
            >
              <Plus className="w-5 h-5" />
            </button>
            
            <button className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-[oklch(0.4_0.1_290)] hover:bg-[oklch(0.95_0.05_290)] transition-all">
              <Shuffle className="w-4 h-4" /> 
              <span className="hidden sm:inline">Briefs</span>
            </button>

            {/* Attachment preview */}
            {showAttachments && (
              <div className="absolute bottom-full left-0 mb-2 p-3 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in">
                <div className="text-xs text-gray-500 mb-2">Attach</div>
                <div className="flex gap-2">
                  {attachments.map((att, i) => (
                    <div key={i} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-xs">
                      <span>{att.icon}</span>
                      <span className="text-gray-600">{att.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit button with animation */}
          <button className="relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white btn-lift neon-border group overflow-hidden">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand via-lime to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <span className="relative flex items-center gap-2">
              <span className="group-hover:tracking-wide transition-all">Launch</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
            </span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
            </div>
          </button>
        </div>

        {/* Character count animation */}
        <div className="absolute right-20 bottom-4 text-xs text-white/40">
          {displayText.length}/500
        </div>
      </div>

      {/* Floating action indicator */}
      <div className="absolute -top-3 -right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-brand/20 backdrop-blur-sm border border-brand/30 animate-pulse">
        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
        <span className="text-[10px] font-medium text-brand-soft">AI Active</span>
      </div>

      <style>{`
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

export default SimulatedPromptBar;
