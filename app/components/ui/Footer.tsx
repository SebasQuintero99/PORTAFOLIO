"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-6 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground/60">
            <span>© 2025 Sebastián Quintero</span>
            <span>•</span>
            <span>Desarrollado con Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
