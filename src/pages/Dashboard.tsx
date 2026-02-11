import { motion } from "framer-motion";
import { Home, TrendingUp, Wallet, Target, ArrowUpRight, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import OwnershipRing from "@/components/OwnershipRing";
import ActivityFeed from "@/components/ActivityFeed";
import ProgressBar from "@/components/ProgressBar";
import OnboardingTracker from "@/components/OnboardingTracker";
import HealthBadge from "@/components/HealthBadge";
import InfoTooltip from "@/components/InfoTooltip";

const ownershipData = [
  { name: "Taylor", percentage: 30, color: "hsl(172, 66%, 30%)" },
  { name: "Owen", percentage: 25, color: "hsl(190, 90%, 50%)" },
  { name: "Rocky", percentage: 25, color: "hsl(38, 92%, 50%)" },
  { name: "Cole", percentage: 20, color: "hsl(280, 65%, 60%)" },
];

const metrics = [
  { label: "Property Value", value: "$485,000", change: "+2.3%", icon: Home, positive: true, health: "on-track" as const, tip: "Estimated market value based on comparable properties in your area." },
  { label: "Your Equity", value: "$36,750", change: "+$2,400", icon: TrendingUp, positive: true, health: "on-track" as const, tip: "Your ownership share of the property's total equity, growing with each contribution." },
  { label: "Monthly Payment", value: "$1,240", change: "Due in 12d", icon: Wallet, positive: false, health: "caution" as const, tip: "Your share of the monthly mortgage and expenses. Set up auto-pay to stay on track." },
  { label: "Deposit Goal", value: "68%", change: "$32,400 left", icon: Target, positive: true, health: "on-track" as const, tip: "Progress toward your collective deposit target of $97,000." },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-1 text-muted-foreground">Track your co-ownership progress</p>
          </div>
        </AnimatedSection>

        {/* Onboarding */}
        <AnimatedSection className="mb-6">
          <OnboardingTracker />
        </AnimatedSection>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                className="rounded-2xl border border-border bg-card p-5 hover-lift"
                whileHover={{ borderColor: "hsl(172, 66%, 30%)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" />
                  </div>
                  {m.positive && (
                    <span className="flex items-center gap-0.5 text-xs font-medium text-success">
                      <ArrowUpRight className="h-3 w-3" /> {m.change}
                    </span>
                  )}
                  {!m.positive && (
                    <span className="text-xs text-muted-foreground">{m.change}</span>
                  )}
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-foreground">{m.value}</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                  <InfoTooltip content={m.tip} />
                </div>
                <div className="mt-2">
                  <HealthBadge status={m.health} />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Ownership Ring */}
          <AnimatedSection delay={0.1} className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Ownership Breakdown
                </h2>
                <InfoTooltip content="Ownership percentages are flexible and can be adjusted as your partnership evolves." />
              </div>
              <div className="flex flex-col items-center gap-6">
                <OwnershipRing shares={ownershipData} size={180} />
                <div className="grid w-full grid-cols-2 gap-3">
                  {ownershipData.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="text-sm text-foreground">{s.name}</span>
                      <span className="ml-auto text-sm font-medium text-muted-foreground">{s.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Flexible ownership structure · Adjust your team anytime
              </p>
            </div>
          </AnimatedSection>

          {/* Activity Feed */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                Recent Activity
              </h2>
              <ActivityFeed />
            </div>
          </AnimatedSection>
        </div>

        {/* Progress */}
        <AnimatedSection delay={0.3} className="mt-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-2">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Savings Progress
              </h2>
              <InfoTooltip content="Track your team's collective savings toward homeownership. All contributions are transparently logged." />
            </div>
            <div className="space-y-6">
              <div>
                <ProgressBar label="Deposit Goal" current={65600} goal={97000} color="bg-primary" />
                <p className="mt-1 text-xs text-success">Your deposit goal is 68% funded — strong progress.</p>
              </div>
              <div>
                <ProgressBar label="Legal & Closing Costs" current={4200} goal={8500} color="bg-accent" />
                <p className="mt-1 text-xs text-warning">49% funded — consider increasing monthly contributions.</p>
              </div>
              <div>
                <ProgressBar label="Emergency Fund" current={3100} goal={10000} color="bg-warning" />
                <p className="mt-1 text-xs text-muted-foreground">31% funded — building steadily.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Dashboard;
