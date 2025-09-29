"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
  className?: string;
  once?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "left",
  distance = 50,
  className,
  once = true,
  stagger = false,
  staggerDelay = 0.1,
}: SlideInProps) {
  const getInitialState = () => {
    const baseState = { opacity: 0 };
    switch (direction) {
      case "left":
        return { ...baseState, x: -distance };
      case "right":
        return { ...baseState, x: distance };
      case "up":
        return { ...baseState, y: -distance };
      case "down":
        return { ...baseState, y: distance };
      default:
        return { ...baseState, x: -distance };
    }
  };

  const getAnimateState = () => ({
    opacity: 1,
    x: 0,
    y: 0,
  });

  const getTransition = () => ({
    duration,
    delay: stagger ? 0 : delay,
    ease: "easeOut",
  });

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once }}
      transition={getTransition()}
      className={className}
    >
      {children}
    </motion.div>
  );
}