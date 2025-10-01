"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="lg:overflow-hidden">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group mx-auto mb-8 lg:mb-0 lg:float-left lg:mr-10 lg:mt-2"
            style={{
              shapeOutside: 'circle(50%)',
              clipPath: 'circle(50%)'
            }}
          >
            <div className="relative w-64 h-64 lg:w-[280px] lg:h-[280px] flex-shrink-0">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full animate-spin-slow"
                   style={{ animationDuration: '3s' }}
              />
              <div className="absolute inset-1 bg-background rounded-full" />

              {/* Image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background">
                <img
                  src="/profile.jpg"
                  alt="Sebastián Quintero"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content - wraps around the floated image */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                👋 ¡Hola! Soy
              </span>
            </motion.div> */}

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Sebastián Quintero
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6 leading-relaxed"
            >
              Frontend Developer especializado en{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span> y{" "}
              <span className="text-primary font-semibold">TypeScript</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground/80 mb-10 leading-relaxed"
            >
              Transformo ideas en experiencias digitales excepcionales.
              Apasionado por crear interfaces intuitivas y código limpio que impacte positivamente a los usuarios.
              Mi enfoque está en crear productos que no solo se vean bien, sino que también ofrezcan una experiencia de usuario excepcional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 clear-both lg:clear-none"
            >
              <Button
                onClick={handleScrollToContact}
                size="lg"
                className="group relative overflow-hidden px-8 py-6 text-lg font-medium"
              >
                <span className="relative z-10">Hablemos</span>
                <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleScrollToAbout}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-medium"
              >
                Conoce más sobre mí
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center space-x-6"
            >
              <a
                href="https://github.com/sebasquintero99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200 group"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/https://www.linkedin.com/in/juan-sebastian-quintero-ortiz-659004296/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:juansebastianquinteroortiz@gmail.com"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200 group"
              >
                <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Desliza hacia abajo</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}