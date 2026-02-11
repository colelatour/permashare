import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, Building2, Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    label: "Create Your Team",
    desc: "Invite co-owners and define your partnership.",
    icon: Users,
    link: "/team",
    done: true,
  },
  {
    id: 2,
    label: "Set Financial Goals",
    desc: "Define your deposit target and savings plan.",
    icon: Target,
    link: "/dashboard",
    done: true,
  },
  {
    id: 3,
    label: "Add a Property",
    desc: "Find or link a property to track together.",
    icon: Building2,
    link: "/property",
    done: false,
  },
];

const OnboardingTracker = () => {
  const [dismissed, setDismissed] = useState(false);
  const completedCount = steps.filter((s) => s.done).length;

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Dismiss onboarding"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Getting Started
          </h3>
          <span className="ml-auto text-xs text-muted-foreground">
            {completedCount}/{steps.length} complete
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(completedCount / steps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={step.link}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                  step.done
                    ? "bg-muted/30"
                    : "bg-primary/5 hover:bg-primary/10"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    step.done
                      ? "bg-success text-success-foreground"
                      : "border-2 border-primary/30 text-primary"
                  }`}
                >
                  {step.done ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-medium ${
                      step.done
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
                {!step.done && (
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnboardingTracker;
