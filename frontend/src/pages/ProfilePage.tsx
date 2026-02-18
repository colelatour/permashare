import { motion } from "framer-motion";
import { User, Settings, Bell, Shield, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ProgressBar from "@/components/ProgressBar";

const menuItems = [
  { icon: User, label: "Personal Information" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Bell, label: "Notifications" },
  { icon: Shield, label: "Security & Privacy" },
  { icon: Settings, label: "Preferences" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="mt-1 text-muted-foreground">Manage your account settings</p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <motion.div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground"
                whileHover={{ scale: 1.05 }}
              >
                TA
              </motion.div>
              <h2 className="mt-4 font-display text-xl font-bold text-foreground">Taylor Anderson</h2>
              <p className="text-sm text-muted-foreground">Lead Partner</p>
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Active Member
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-muted/50 p-3">
                  <p className="font-display text-xl font-bold text-foreground">30%</p>
                  <p className="text-xs text-muted-foreground">Ownership</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-3">
                  <p className="font-display text-xl font-bold text-foreground">$24K</p>
                  <p className="text-xs text-muted-foreground">Contributed</p>
                </div>
              </div>

              <Button variant="outline" className="mt-6 w-full gap-2 rounded-xl">
                Edit Profile
              </Button>
            </div>
          </AnimatedSection>

          {/* Settings */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                  Account Settings
                </h2>
                <div className="space-y-1">
                  {menuItems.map((item, i) => (
                    <motion.button
                      key={i}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                        <item.icon className="h-4 w-4" />
                      </div>
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                  Your Savings Progress
                </h2>
                <ProgressBar label="Personal Contribution" current={24000} goal={29100} color="bg-primary" />
              </div>

              <Button variant="ghost" className="w-full gap-2 text-destructive hover:text-destructive">
                <LogOut className="h-4 w-4" /> Sign Out
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
