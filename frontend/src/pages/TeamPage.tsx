import { motion } from "framer-motion";
import { Plus, Star, Building2, Mail, MoreHorizontal, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import InfoTooltip from "@/components/InfoTooltip";

const roleConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  "Lead Partner": { label: "Primary Coordinator", variant: "default" },
  Resident: { label: "Resident", variant: "secondary" },
  "Financial Partner": { label: "Financial Partner", variant: "outline" },
};

const members = [
  {
    name: "Taylor",
    role: "Lead Partner",
    badge: "Primary Coordinator",
    initials: "TA",
    color: "hsl(172, 66%, 30%)",
    contribution: "$24,000",
    monthly: "$800/mo",
    tooltip: "Coordinates team decisions, manages partnership agreements, and oversees property selection.",
  },
  {
    name: "Owen",
    role: "Co-Owner",
    badge: "Resident",
    initials: "OW",
    color: "hsl(190, 90%, 50%)",
    contribution: "$18,500",
    monthly: "$620/mo",
    tooltip: "Will live in the property and contributes to mortgage and upkeep.",
  },
  {
    name: "Rocky",
    role: "Co-Owner",
    badge: "Financial Partner",
    initials: "RO",
    color: "hsl(38, 92%, 50%)",
    contribution: "$16,200",
    monthly: "$540/mo",
    tooltip: "Invests financially without residing in the property. Shares in equity growth.",
  },
  {
    name: "Cole",
    role: "Co-Owner",
    badge: "Resident",
    initials: "CO",
    color: "hsl(280, 65%, 60%)",
    contribution: "$12,800",
    monthly: "$425/mo",
    tooltip: "Will live in the property and contributes to mortgage and upkeep.",
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team</h1>
              <p className="mt-1 text-muted-foreground">
                Manage your co-ownership group · Adjust your team anytime
              </p>
            </div>
            <Button className="gap-2 rounded-xl">
              <UserPlus className="h-4 w-4" /> Invite Member
            </Button>
          </div>
        </AnimatedSection>

        {/* Flexibility note */}
        <AnimatedSection delay={0.05} className="mt-4">
          <div className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-2.5 text-sm text-muted-foreground">
            <span className="text-primary">✦</span>
            Your team size is flexible — add or remove members as your partnership evolves. Exit options are always available.
          </div>
        </AnimatedSection>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center hover-lift"
                whileHover={{ borderColor: member.color }}
              >
                <button className="absolute right-3 top-3 rounded-lg p-1.5 text-muted-foreground opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100">
                  <MoreHorizontal className="h-4 w-4" />
                </button>

                <motion.div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold"
                  style={{ backgroundColor: member.color, color: "white" }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {member.initials}
                </motion.div>

                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <Badge
                    variant={roleConfig[member.badge]?.variant || "secondary"}
                    className="text-[10px]"
                  >
                    {member.badge}
                  </Badge>
                  <InfoTooltip content={member.tooltip} />
                </div>

                <div className="mt-4 rounded-xl bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">Total Contributed</p>
                  <p className="font-display text-lg font-bold text-foreground">{member.contribution}</p>
                  <p className="text-xs text-muted-foreground">{member.monthly}</p>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <Mail className="h-3.5 w-3.5" /> Message
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}

          {/* Empty slot — invite CTA */}
          <AnimatedSection delay={0.5}>
            <motion.button
              className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-card/50 p-6 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Plus className="h-6 w-6" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground">Add a Co-Owner</p>
              <p className="text-xs text-muted-foreground">
                Grow your team — there's no fixed limit
              </p>
            </motion.button>
          </AnimatedSection>
        </div>

        {/* Actions */}
        <AnimatedSection delay={0.6} className="mt-8">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2 rounded-xl">
              <Star className="h-4 w-4" /> Manage Partnership
              <span className="text-xs text-muted-foreground">— Review terms & roles</span>
            </Button>
            <Button variant="outline" className="gap-2 rounded-xl">
              <Building2 className="h-4 w-4" /> Propose House
              <span className="text-xs text-muted-foreground">— Suggest a property to the team</span>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TeamPage;
