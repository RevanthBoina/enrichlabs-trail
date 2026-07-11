import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Zap, RefreshCw, Clock, TrendingUp, ArrowRight, Activity } from "lucide-react";
import { IntegrationIcon } from "./IntegrationIcon";

interface WorkflowStep {
  id: string;
  type: "trigger" | "action" | "ai" | "condition" | "complete";
  label: string;
  description?: string;
  duration?: number;
  status?: "pending" | "running" | "complete" | "error";
}

interface WorkflowPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  workflow: {
    name: string;
    from: { slug: string; label: string };
    to: { slug: string; label: string };
    steps: WorkflowStep[];
    analytics: {
      executions: number;
      successRate: number;
      avgDuration: string;
      lastRun: string;
    };
  } | null;
}

export function WorkflowPreview({ isOpen, onClose, workflow }: WorkflowPreviewProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [executions, setExecutions] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Animate workflow execution when panel opens
  useEffect(() => {
    if (!isOpen || !workflow) return;

    setExecutions(workflow.analytics.executions);
    setSuccessRate(workflow.analytics.successRate);
    setActiveStep(0);

    // Step through the workflow
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= workflow.steps.length - 1) {
          // Increment executions and success rate occasionally
          setExecutions((e) => e + 1);
          if (Math.random() > 0.1) {
            setSuccessRate((s) => Math.min(99.9, s + 0.1));
          }
          return 0;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(stepInterval);
  }, [isOpen, workflow]);

  const stepColors = {
    trigger: "bg-brand/20 border-brand text-brand-soft",
    action: "bg-teal/20 border-teal text-teal",
    ai: "bg-lime/20 border-lime text-lime",
    condition: "bg-yellow-500/20 border-yellow-500 text-yellow-400",
    complete: "bg-lime/20 border-lime text-lime",
    pending: "bg-white/5 border-white/20 text-white/40",
    running: "bg-brand/20 border-brand text-brand-soft",
    error: "bg-red-500/20 border-red-500 text-red-400",
  };

  const stepIcons = {
    trigger: <ArrowRight className="w-3.5 h-3.5" />,
    action: <Zap className="w-3.5 h-3.5" />,
    ai: <Activity className="w-3.5 h-3.5" />,
    condition: <RefreshCw className="w-3.5 h-3.5" />,
    complete: <Check className="w-3.5 h-3.5" />,
  };

  if (!workflow) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] z-50"
        >
          <div className="bg-[oklch(0.15_0.02_285)]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{workflow.name}</h3>
                  <p className="text-xs text-white/50">Active workflow</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Workflow path */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <IntegrationIcon slug={workflow.from.slug} size={18} />
                  <span className="text-sm text-white/80">{workflow.from.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-soft" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 border border-brand/30">
                  <Zap className="w-3 h-3 text-brand-soft" />
                  <span className="text-sm text-brand-soft">Enrich</span>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-soft" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <IntegrationIcon slug={workflow.to.slug} size={18} />
                  <span className="text-sm text-white/80">{workflow.to.label}</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {workflow.steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`
                      flex items-center gap-3 p-3 rounded-xl border transition-all duration-300
                      ${stepColors[step.status || (index < activeStep ? "complete" : index === activeStep ? "running" : "pending")]}
                      ${index === activeStep ? "border-current shadow-lg" : ""}
                    `}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      {stepIcons[step.type]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{step.label}</span>
                        {index === activeStep && (
                          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                        )}
                      </div>
                      {step.description && (
                        <p className="text-xs text-white/50 mt-0.5">{step.description}</p>
                      )}
                    </div>
                    {step.duration && (
                      <span className="text-xs text-white/40">{step.duration}ms</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="grid grid-cols-4 gap-px bg-white/5 border-t border-white/10">
              {[
                {
                  label: "Executions",
                  value: executions.toLocaleString(),
                  icon: <Activity className="w-3.5 h-3.5" />,
                },
                {
                  label: "Success",
                  value: `${successRate.toFixed(1)}%`,
                  icon: <Check className="w-3.5 h-3.5" />,
                },
                {
                  label: "Avg Time",
                  value: workflow.analytics.avgDuration,
                  icon: <Clock className="w-3.5 h-3.5" />,
                },
                {
                  label: "Last Run",
                  value: workflow.analytics.lastRun,
                  icon: <TrendingUp className="w-3.5 h-3.5" />,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 p-3 bg-[oklch(0.15_0.02_285)]"
                >
                  <div className="text-brand-soft">{stat.icon}</div>
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WorkflowPreview;
