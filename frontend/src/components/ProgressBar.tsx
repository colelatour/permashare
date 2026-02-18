import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  current: number;
  goal: number;
  color?: string;
}

const ProgressBar = ({ label, current, goal, color = "bg-primary" }: ProgressBarProps) => {
  const percent = Math.min((current / goal) * 100, 100);
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">
          ${current.toLocaleString()} / ${goal.toLocaleString()}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs text-muted-foreground text-right">{percent.toFixed(0)}% complete</p>
    </div>
  );
};

export default ProgressBar;
