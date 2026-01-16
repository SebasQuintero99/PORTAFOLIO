"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
}

interface ParallaxStarsProps {
  count?: number;
  className?: string;
}

export default function ParallaxStars({ count = 80, className = "" }: ParallaxStarsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Generar estrellas aleatorias una sola vez con useMemo
  const stars: Star[] = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 100 + 50,
      delay: Math.random() * 2,
    })),
    [count]
  );

  // Generar estrellas fugaces una sola vez con useMemo
  const shootingStars = useMemo(() =>
    [1, 2, 3].map((i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50,
      repeatDelay: 8 + i * 5,
    })),
    []
  );

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-primary/60 dark:bg-primary"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          initial={{ scale: 0, opacity: 0, y: 0 }}
          whileInView={{
            scale: [0, 1.2, 1],
            opacity: [0, star.opacity * 1.5, star.opacity],
            y: [0, star.speed],
          }}
          viewport={{ once: false }}
          transition={{
            duration: 1.5,
            delay: star.delay,
            ease: "easeOut"
          }}
        >
          {/* Efecto de brillo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/40 dark:bg-primary blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Estrellas fugaces ocasionales */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 bg-primary/70 dark:bg-primary rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0, scaleX: 1 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 200],
            y: [0, 100],
            scaleX: [1, 20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 dark:from-primary to-transparent blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}
