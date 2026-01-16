"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import ParallaxStars from "@/app/components/ui/ParallaxStars";
import Image from "next/image";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Portal Web Inmobiliario - León Aguilera",
    description: "Portal inmobiliario empresarial con catálogo dinámico de proyectos, filtros avanzados, mapas interactivos con geocodificación, chatbot para captura de leads y sistema completo de seguridad web.",
    image: "/leonaguilera.png",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Leaflet", "Cloudflare R2", "Playwright"],
    features: [
      "Catálogo dinámico con filtros avanzados",
      "Mapas interactivos con geocodificación automática",
      "Chatbot conversacional para captura de leads",
      "Formularios con reCAPTCHA v3 y rate limiting",
      "Testing E2E con Playwright",
      "Optimización con Sharp y CDN Cloudflare R2"
    ],
    liveUrl: "https://leonaguilera.com",
    githubUrl: "https://github.com/SebasQuintero99/portal-inmobiliario",
    status: "Completado",
    category: "Full-Stack"
  },
  {
    title: "Sistema de Evaluación de Desempeño - APP-TH",
    description: "Aplicación completa para gestión de evaluaciones de desempeño laboral 360° con 25 criterios en 7 categorías, dashboard analítico, sistema de roles y auditoría automatizada.",
    image: "/appth.png",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "React Hook Form", "Zod", "Supabase", "PostgreSQL", "Docker"],
    features: [
      "Evaluaciones 360° bidireccionales",
      "Dashboard analítico con estadísticas",
      "Sistema de roles con Row Level Security",
      "Carga masiva de usuarios vía CSV",
      "Sistema de auditoría con triggers",
      "Flujo de firmas digitales",
      "Containerizado con Docker"
    ],
    liveUrl: "https://empleados.leonaguilera.com",
    githubUrl: "https://github.com/SebasQuintero99/app-evaluacion-desempeno",
    status: "Completado",
    category: "Full-Stack"
  },
  {
    title: "MiAbogada - Sistema Legal",
    description: "Sistema web completo para gestión de citas legales con integración a Google Calendar, panel administrativo dinámico y notificaciones automáticas por email.",
    image: "/miAbogada.png",
    technologies: ["React", "Vite", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
    features: [
      "Sistema de citas inteligente",
      "Integración Google Calendar",
      "Panel admin con dashboard",
      "Emails automáticos profesionales"
    ],
    liveUrl: "https://github.com/SebasQuintero99/LandingPageMiAbogada",
    githubUrl: "https://github.com/SebasQuintero99/LandingPageMiAbogada",
    status: "En desarrollo",
    category: "Full-Stack"
  },
  {
    title: "Sistema de Gestión de Permisos",
    description: "Aplicación empresarial para gestión de solicitudes de permisos laborales con flujo de aprobación jerárquico y firmas digitales.",
    image: "/permisosForm.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "JWT"],
    features: [
      "Flujo de aprobación jerárquico",
      "Firmas digitales",
      "Generación de PDFs",
      "Notificaciones en tiempo real"
    ],
    liveUrl: "https://github.com/SebasQuintero99/APP-GESTION-PERMISOS",
    githubUrl: "https://github.com/SebasQuintero99/APP-GESTION-PERMISOS",
    status: "En desarrollo",
    category: "Full-Stack"
  },
  {
    title: "Los Peligrosos - Torneo Golf",
    description: "Sistema web completo para gestión de torneos del Club Los Peligrosos Neiva con liquidaciones automáticas, códigos QR y exportación PDF/Excel.",
    image: "/golf2.png",
    technologies: ["React 19", "Node.js", "Express", "PostgreSQL", "Sequelize", "Tailwind CSS", "Vite"],
    features: [
      "CRUD de torneos y jugadores",
      "Sistema de liquidación automática",
      "Generación QR y exportación",
      "Autenticación JWT con roles"
    ],
    liveUrl: "https://lospeligrososgolf.com/",
    githubUrl: "https://github.com/SebasQuintero99/losPeligrosos-app",
    status: "Completado",
    category: "Full-Stack"
  },
  {
    title: "Consulta Procesos - Bot Telegram",
    description: "Bot de Telegram para gestión de procesos legales con base de datos MySQL, permitiendo registro y consulta de abogados, plataformas y procesos.",
    image: "/botTelegrma.png",
    technologies: ["Node.js", "Telegraf", "MySQL", "JavaScript"],
    features: [
      "Interfaz conversacional Telegram",
      "Gestión de procesos legales",
      "Registro de abogados y plataformas",
      "Arquitectura modular"
    ],
    liveUrl: "https://github.com/SebasQuintero99/CONSULTA-PROCESOS",
    githubUrl: "https://github.com/SebasQuintero99/CONSULTA-PROCESOS",
    status: "Completado",
    category: "Backend"
  },
  {
    title: "Sistema de Gestión Académica",
    description: "Plataforma completa para gestión académica con control de acceso basado en roles, gestión de programas, asignaturas, docentes y horarios con validación de conflictos.",
    image: "/laboratorios.png",
    technologies: ["Node.js", "Express", "MySQL", "EJS", "JWT", "JavaScript"],
    features: [
      "Autenticación JWT con roles",
      "Gestión de horarios y laboratorios",
      "Validación de conflictos automática",
      "Dashboard dinámico por permisos"
    ],
    liveUrl: "https://uscolaboratorios.site/login",
    githubUrl: "https://github.com/SebasQuintero99/DISCOTECA",
    status: "Completado",
    category: "Full-Stack"
  },
  {
    title: "Portafolio Web Profesional",
    description: "Portafolio moderno y responsive con Next.js 15, modo oscuro/claro, animaciones suaves con Framer Motion y formulario de contacto integrado.",
    image: "/portafolio.png",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    features: [
      "Diseño totalmente responsive",
      "Modo oscuro/claro",
      "Animaciones fluidas",
      "Formulario con EmailJS"
    ],
    liveUrl: "https://www.sebastianquintero.dev/",
    githubUrl: "https://github.com/SebasQuintero99/PORTAFOLIO",
    status: "Completado",
    category: "Frontend"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
  category: string;
}

const ProjectCard = ({ project, onImageClick }: { project: Project; onImageClick: () => void }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/90 text-white border-green-500";
      case "En desarrollo":
        return "bg-yellow-500/90 text-white border-yellow-500";
      case "Planificado":
        return "bg-blue-500/90 text-white border-blue-500";
      default:
        return "bg-gray-500/90 text-white border-gray-500";
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group h-full"
      whileHover={{
        y: -8,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 }
      }}
    >
      <Card className="h-full overflow-hidden border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 flex flex-col">
        {/* Image Section */}
        <div
          className="relative h-56 w-full overflow-hidden bg-muted cursor-pointer"
          onClick={onImageClick}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10 gap-2">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-background/90 text-foreground border border-border shadow-lg backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-5 flex-1 flex flex-col gap-4">
          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-md font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Features */}
          <div className="space-y-1.5 flex-1">
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.slice(0, 3).map((feature: string) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2 border-t border-border/50">
            {project.title === "Sistema de Gestión Académica" ? (
              <Button
                variant="default"
                size="sm"
                className="flex-1 group/btn h-9"
                onClick={() => toast.info('Repositorio Privado', {
                  description: 'El código fuente no está disponible públicamente por contener información sensible del proyecto.',
                  duration: 5000,
                })}
              >
                <Github className="w-3.5 h-3.5 mr-2" />
                GitHub
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="flex-1 group/btn h-9"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-3.5 h-3.5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl.includes('github.com') ? (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 h-9 cursor-not-allowed opacity-60"
                disabled
              >
                <span className="text-xs">🚀 Pronto disponible</span>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group/btn h-9"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                  Ver más
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-12 lg:py-16 bg-secondary/5 overflow-hidden">
      {/* Parallax Stars */}
      <ParallaxStars count={65} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Proyectos
          </span> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mis últimos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              trabajos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aquí tienes una selección de proyectos que he desarrollado recientemente.
            Cada uno representa diferentes desafíos técnicos y soluciones creativas que he implementado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <div className="min-h-screen flex items-center justify-center p-4 py-16 sm:py-20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative max-w-5xl w-full bg-background rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-3 z-20 p-2 bg-background hover:bg-muted rounded-full border border-border shadow-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Image Container */}
                  <div className="relative w-full h-[45vh] sm:h-[50vh] bg-muted rounded-t-xl overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 border-t border-border space-y-4 sm:space-y-6">
                  {/* Header with badges */}
                  <div className="space-y-3">
                    <div className="flex gap-2 flex-wrap">
                      <span className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg border ${
                        selectedProject.status === "Completado"
                          ? "bg-green-500/90 text-white border-green-500"
                          : selectedProject.status === "En desarrollo"
                          ? "bg-yellow-500/90 text-white border-yellow-500"
                          : "bg-blue-500/90 text-white border-blue-500"
                      }`}>
                        {selectedProject.status}
                      </span>
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-background/90 text-foreground border border-border shadow-lg">
                        {selectedProject.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{selectedProject.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-muted-foreground uppercase tracking-wide">Tecnologías</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs sm:text-sm rounded-md font-medium transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-muted-foreground uppercase tracking-wide">Características principales</h4>
                    <ul className="grid gap-2 text-xs sm:text-sm">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 text-sm sm:text-base">✓</span>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    {selectedProject.title === "Sistema de Gestión Académica" ? (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 group/btn text-xs sm:text-sm"
                        onClick={() => toast.info('Repositorio Privado', {
                          description: 'El código fuente no está disponible públicamente por contener información sensible del proyecto.',
                          duration: 5000,
                        })}
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Ver en GitHub
                      </Button>
                    ) : (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 group/btn text-xs sm:text-sm"
                        asChild
                      >
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Ver en GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.liveUrl.includes('github.com') ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-not-allowed opacity-60 text-xs sm:text-sm"
                        disabled
                      >
                        <span>🚀 Pronto</span>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn text-xs sm:text-sm"
                        asChild
                      >
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                          Ver proyecto
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevos desafíos y colaboraciones. 
              Si tienes una idea que quieras convertir en realidad, hablemos.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
            >
              Iniciar proyecto
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}