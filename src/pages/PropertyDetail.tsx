import { motion } from "framer-motion";
import { MapPin, DollarSign, TrendingUp, Percent, Calendar, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import OwnershipRing from "@/components/OwnershipRing";
import HealthBadge from "@/components/HealthBadge";
import InfoTooltip from "@/components/InfoTooltip";
import propertySample from "@/assets/property-sample.jpg";

const ownershipData = [
  { name: "Taylor", percentage: 30, color: "hsl(172, 66%, 30%)" },
  { name: "Owen", percentage: 25, color: "hsl(190, 90%, 50%)" },
  { name: "Rocky", percentage: 25, color: "hsl(38, 92%, 50%)" },
  { name: "Cole", percentage: 20, color: "hsl(280, 65%, 60%)" },
];

const details = [
  { icon: DollarSign, label: "Current Salary Pool", value: "$18,200/mo", health: "on-track" as const, tip: "Combined monthly income of all co-owners used to assess affordability." },
  { icon: TrendingUp, label: "Deposit Goal", value: "$97,000", health: "on-track" as const, tip: "Total deposit needed. Your team is at 68% — strong progress toward this target." },
  { icon: Percent, label: "Mortgage Rate", value: "5.25%", health: "caution" as const, tip: "Current estimated mortgage interest rate. Rates fluctuate — lock in when ready." },
  { icon: DollarSign, label: "House Value", value: "$485,000", health: "on-track" as const, tip: "Estimated property market value based on recent comparable sales." },
];

const milestones = [
  { date: "Jan 2026", event: "Partnership formed", done: true },
  { date: "Mar 2026", event: "Savings plan started", done: true },
  { date: "Jul 2026", event: "50% deposit reached", done: true },
  { date: "Nov 2026", event: "Pre-approval secured", done: false },
  { date: "Feb 2027", event: "Target closing date", done: false },
];

const PropertyDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-foreground">Property Details</h1>
          <p className="mt-1 text-muted-foreground">Edit property details & financials</p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Property Image & Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <motion.div
                className="relative aspect-video overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={propertySample}
                  alt="Property"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-card/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  1234 Oakwood Drive, Austin TX
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 p-6">
                {details.map((d, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl bg-muted/50 p-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <d.icon className="h-4 w-4" />
                      <span className="text-xs">{d.label}</span>
                      <InfoTooltip content={d.tip} />
                    </div>
                    <p className="mt-1 font-display text-xl font-bold text-foreground">{d.value}</p>
                    <div className="mt-1">
                      <HealthBadge status={d.health} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            {/* Ownership */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Ownership Split
                  </h2>
                  <InfoTooltip content="Ownership shares are adjustable. Partners can renegotiate percentages as contributions change." />
                </div>
                <div className="flex justify-center">
                  <OwnershipRing shares={ownershipData} size={160} />
                </div>
                <div className="mt-4 space-y-2">
                  {ownershipData.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="text-foreground">{s.name}</span>
                      <span className="ml-auto font-medium text-muted-foreground">{s.percentage}%</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Flexible ownership · Exit options available
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  Milestones
                </h2>
                <div className="relative space-y-4 pl-6">
                  <div className="absolute left-2.5 top-1 bottom-1 w-px bg-border" />
                  {milestones.map((m, i) => (
                    <motion.div
                      key={i}
                      className="relative flex items-start gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div
                        className={`absolute -left-6 top-1 h-3 w-3 rounded-full border-2 ${
                          m.done
                            ? "border-primary bg-primary"
                            : "border-muted-foreground bg-card"
                        }`}
                      />
                      <div>
                        <p className={`text-sm font-medium ${m.done ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.event}
                        </p>
                        <p className="text-xs text-muted-foreground">{m.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Actions */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col gap-3">
                <Button className="w-full gap-2 rounded-xl">
                  <FileText className="h-4 w-4" /> View Contract
                </Button>
                <p className="text-center text-xs text-muted-foreground">Review your co-ownership agreement and terms</p>
                <Button variant="outline" className="w-full gap-2 rounded-xl">
                  <ExternalLink className="h-4 w-4" /> Property Listing
                </Button>
                <p className="text-center text-xs text-muted-foreground">See the original listing with photos and specs</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
