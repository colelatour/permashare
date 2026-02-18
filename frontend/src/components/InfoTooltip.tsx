import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoTooltipProps {
  content: string;
  className?: string;
}

const InfoTooltip = ({ content, className = "" }: InfoTooltipProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`inline-flex items-center justify-center rounded-full p-0.5 text-muted-foreground transition-colors hover:text-foreground ${className}`}
        aria-label="More info"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
    </TooltipTrigger>
    <TooltipContent className="max-w-[220px] text-xs">
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
);

export default InfoTooltip;
