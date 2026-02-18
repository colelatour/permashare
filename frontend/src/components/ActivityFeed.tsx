import { motion } from "framer-motion";
import { TrendingUp, Users, FileText, DollarSign } from "lucide-react";

const activities = [
  { icon: DollarSign, text: "Taylor contributed $2,400 toward deposit", time: "2h ago", color: "text-success" },
  { icon: FileText, text: "New co-ownership agreement draft uploaded", time: "5h ago", color: "text-primary" },
  { icon: Users, text: "Cole joined the partnership", time: "1d ago", color: "text-accent" },
  { icon: TrendingUp, text: "Property value increased by 2.3%", time: "3d ago", color: "text-warning" },
  { icon: DollarSign, text: "Owen contributed $1,800 toward deposit", time: "5d ago", color: "text-success" },
];

const ActivityFeed = () => {
  return (
    <div className="space-y-1">
      {activities.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
        >
          <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted ${item.color}`}>
            <item.icon className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-foreground">{item.text}</p>
            <p className="text-xs text-muted-foreground">{item.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ActivityFeed;
