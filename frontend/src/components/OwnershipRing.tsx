import { motion } from "framer-motion";

interface OwnershipRingProps {
  shares: { name: string; percentage: number; color: string }[];
  size?: number;
}

const OwnershipRing = ({ shares, size = 200 }: OwnershipRingProps) => {
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercent = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        {shares.map((share, i) => {
          const offset = circumference * (1 - share.percentage / 100);
          const rotation = (cumulativePercent / 100) * 360;
          cumulativePercent += share.percentage;

          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={share.color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transformOrigin: "center", rotate: `${rotation}deg` }}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-display font-bold text-foreground">
          {shares.length}
        </span>
        <span className="text-xs text-muted-foreground">Co-Owners</span>
      </div>
    </div>
  );
};

export default OwnershipRing;
