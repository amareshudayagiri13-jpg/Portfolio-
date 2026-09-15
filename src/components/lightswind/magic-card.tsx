import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export type ShineDirection = "left" | "right" | "top" | "bottom";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  shineDirection?: ShineDirection;
}

const shineMap: Record<ShineDirection, { start: { x: number; y: number }; end: { x: number; y: number } }> = {
  left: { start: { x: -120, y: 0 }, end: { x: 120, y: 0 } },
  right: { start: { x: 120, y: 0 }, end: { x: -120, y: 0 } },
  top: { start: { x: 0, y: -110 }, end: { x: 0, y: 110 } },
  bottom: { start: { x: 0, y: 110 }, end: { x: 0, y: -110 } },
};

export function MagicCard({
  children,
  className,
  shineDirection = "left",
  ...props
}: MagicCardProps) {
  const { start, end } = shineMap[shineDirection];

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: [0, 0.95, 0] }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-y-0 left-[-18%] w-[38%] blur-md"
          initial={{ x: start.x, y: start.y, opacity: 0 }}
          whileHover={{ x: end.x, y: end.y, opacity: [0, 0.9, 0] }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.04) 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 w-full flex flex-col h-full justify-between">{children}</div>
    </div>
  );
}

export default MagicCard;
