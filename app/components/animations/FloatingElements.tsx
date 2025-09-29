"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color?: string;
  duration?: number;
  amplitude?: number;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export function FloatingElement({
  className = "",
  size = "md",
  position = { top: "20%", left: "10%" },
  color = "bg-primary/10",
  duration = 20,
  amplitude = 30,
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${color} rounded-full blur-2xl ${className}`}
      style={position}
      animate={{
        x: [0, amplitude, 0, -amplitude / 2, 0],
        y: [0, -amplitude / 2, amplitude, 0, 0],
        scale: [1, 1.1, 0.9, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }}
    />
  );
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({ count = 5, className }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: (["sm", "md", "lg", "xl"] as const)[Math.floor(Math.random() * 4)],
    position: {
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    },
    color: [
      "bg-primary/5",
      "bg-secondary/5",
      "bg-accent/5",
      "bg-primary/10",
      "bg-secondary/10",
    ][Math.floor(Math.random() * 5)],
    duration: Math.random() * 20 + 15,
    amplitude: Math.random() * 40 + 20,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <FloatingElement
          key={element.id}
          size={element.size}
          position={element.position}
          color={element.color}
          duration={element.duration}
          amplitude={element.amplitude}
        />
      ))}
    </div>
  );
}