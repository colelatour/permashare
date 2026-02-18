import { cn } from "@/lib/utils";

interface HealthBadgeProps {
  status: "on-track" | "caution" | "behind";
  label?: string;
  className?: string;
}

const config = {
  "on-track": {
    text: "On Track",
    bg: "bg-success/10",
    color: "text-success",
    dot: "bg-success",
  },
  caution: {
    text: "Caution",
    bg: "bg-warning/10",
    color: "text-warning",
    dot: "bg-warning",
  },
  behind: {
    text: "Behind Target",
    bg: "bg-destructive/10",
    color: "text-destructive",
    dot: "bg-destructive",
  },
};

const HealthBadge = ({ status, label, className }: HealthBadgeProps) => {
  const c = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        c.bg,
        c.color,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
      {label || c.text}
    </span>
  );
};

export default HealthBadge;
