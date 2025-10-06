"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import ParallaxStars from "@/app/components/ui/ParallaxStars";

const values = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.",
  },
  {
    icon: Palette,
    title: "Diseño Centrado en el Usuario",
    description: "Creo interfaces intuitivas que priorizan la experiencia del usuario por encima de todo.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizo cada detalle para garantizar aplicaciones rápidas y eficientes.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo, comunicándome efectivamente y adaptándome a diferentes metodologías.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 lg:py-16 bg-secondary/5 overflow-hidden">
      {/* Parallax Stars */}
      <ParallaxStars count={60} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Sobre mí
          </span> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transformando ideas en{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              realidad digital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador frontend apasionado por crear experiencias web excepcionales. 
            Con más de 1 años de experiencia, me especializo en tecnologías modernas como React, Next.js y TypeScript.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Mi Historia</h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Mi viaje en el desarrollo web comenzó con la curiosidad de entender cómo funcionan las cosas. 
                Lo que empezó como un hobby se convirtió en una pasión que me impulsa todos los días a aprender 
                y crear soluciones innovadoras.
              </p>
              <p className="leading-relaxed">
                Me enfoco en el desarrollo frontend porque creo firmemente que la tecnología debe ser accesible 
                y fácil de usar. Cada línea de código que escribo tiene el propósito de mejorar la vida de las 
                personas que interactúan con mis aplicaciones.
              </p>
              <p className="leading-relaxed">
                Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos 
                de código abierto, y compartiendo conocimientos con la comunidad de desarrolladores.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
          
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm gap-0 py-0">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">1+</div>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">7+</div>
              <p className="text-sm text-muted-foreground">Proyectos completados</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">10+</div>
              <p className="text-sm text-muted-foreground">Tecnologías dominadas</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Dedicación</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}