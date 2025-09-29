"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
  className,
  once = true,
}: FadeInProps) {
  const getInitialState = () => {
    const baseState = { opacity: 0 };
    switch (direction) {
      case "up":
        return { ...baseState, y: distance };
      case "down":
        return { ...baseState, y: -distance };
      case "left":
        return { ...baseState, x: distance };
      case "right":
        return { ...baseState, x: -distance };
      default:
        return { ...baseState, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut" as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}