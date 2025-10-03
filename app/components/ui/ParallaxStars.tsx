"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  // Generar estrellas aleatorias
  const stars: Star[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    speed: Math.random() * 100 + 50, // Velocidad de parallax
    delay: Math.random() * 2,
  }));

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => {
        // Diferentes capas de profundidad con diferentes velocidades de parallax
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, star.speed]
        );

        return (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: [0, 1.2, 1],
              opacity: [0, star.opacity * 1.5, star.opacity],
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
              className="absolute inset-0 rounded-full bg-primary blur-sm"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          </motion.div>
        );
      })}

      {/* Estrellas fugaces ocasionales */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
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
            repeatDelay: 8 + i * 5,
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}
