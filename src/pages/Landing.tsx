import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/house-hero.jpg";

const features = [
  {
    icon: Building2,
    title: "Shared Ownership",
    desc: "Split property costs fairly among co-owners with transparent agreements.",
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Invite partners, track contributions, and manage roles effortlessly.",
  },
  {
    icon: Shield,
    title: "Secure Contracts",
    desc: "Digital co-ownership agreements with built-in legal frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Track Equity",
    desc: "Real-time dashboards showing your equity growth and property value.",
  },
];

const stats = [
  { value: "$2.4B+", label: "Property Value Managed" },
  { value: "12,000+", label: "Co-Owners" },
  { value: "3,200+", label: "Properties" },
];

const Landing = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container relative z-10 flex flex-col items-center gap-8 py-24 text-center lg:py-32">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              Now in public beta
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Co-own property,{" "}
              <span className="gradient-text">build equity together</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              Permashare makes shared property ownership simple, transparent, and
              collaborative. Pool resources, split costs, and grow wealth as a team.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/dashboard">
                  <Button size="lg" className="gap-2 rounded-xl px-6">
                    Get Started Free <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/property">
                  <Button variant="outline" size="lg" className="rounded-xl px-6">
                    Explore Properties
                  </Button>
                </Link>
              </div>
              <p className="max-w-md text-xs text-muted-foreground">
                Track shared ownership, align financial goals, and build equity together — with full transparency and flexibility.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-8 w-full max-w-4xl">
            <motion.div
              className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-border"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={heroImage}
                alt="Modern home at sunset"
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Everything you need for shared ownership
            </h2>
            <p className="mt-4 text-muted-foreground">
              From finding partners to managing equity — we handle the complexity so you can focus on building wealth.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover-lift"
                  whileHover={{ borderColor: "hsl(172, 66%, 30%)" }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <AnimatedSection className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Ready to co-own your future?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of co-owners building equity together.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="mt-8 gap-2 rounded-xl px-8">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            No commitment required · Flexible ownership · Exit anytime
          </p>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <span className="font-display text-xs font-bold text-primary-foreground">P</span>
            </div>
            <span className="font-display text-sm font-semibold text-foreground">Permashare</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Permashare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
