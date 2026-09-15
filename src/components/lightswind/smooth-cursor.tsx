import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export interface SmoothCursorProps {
  disabled?: boolean;
  glowEffect?: boolean;
  showTrail?: boolean;
  trailLength?: number;
}

export function SmoothCursor({ disabled = false }: SmoothCursorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (disabled) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const interactiveSelector = "a, button, [role='button'], input, textarea, select, .cursor-pointer";

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest(interactiveSelector)));
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY, disabled]);

  if (disabled || !isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 1 : 0.8,
          width: isHovering ? 28 : 18,
          height: isHovering ? 28 : 18,
          backgroundColor: isHovering ? "transparent" : "rgba(40, 40, 45, 0.9)",
          borderColor: isHovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)",
          borderWidth: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="pointer-events-none hidden md:block rounded-full shadow-[0_0_18px_rgba(0,0,0,0.18)]"
      />
    </>
  );
}

export default SmoothCursor;