"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos, gestión de inventario y panel administrativo.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Autenticación de usuarios",
      "Sistema de pagos integrado",
      "Panel de administración",
      "Responsive design"
    ],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/sebastianquintero/ecommerce",
    status: "Completado",
    category: "Full-Stack"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real, notificaciones y sincronización entre dispositivos.",
    image: "/images/project2.jpg",
    technologies: ["React", "Firebase", "Framer Motion", "Zustand"],
    features: [
      "Drag & drop interface",
      "Colaboración en tiempo real",
      "Notificaciones push",
      "Sincronización offline"
    ],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/sebastianquintero/task-manager",
    status: "Completado",
    category: "Frontend"
  },
  {
    title: "Portfolio Website",
    description: "Sitio web corporativo moderno con CMS personalizado, optimización SEO, animaciones fluidas y diseño responsive.",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "Sanity CMS", "GSAP", "Tailwind CSS"],
    features: [
      "CMS personalizado",
      "Optimización SEO",
      "Animaciones GSAP",
      "Performance optimizada"
    ],
    liveUrl: "https://corporate-website.com",
    githubUrl: "https://github.com/sebastianquintero/corporate-site",
    status: "Completado",
    category: "Frontend"
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard meteorológico interactivo con gráficos en tiempo real, pronósticos extendidos y geolocalización automática.",
    image: "/images/project4.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
    features: [
      "Datos en tiempo real",
      "Gráficos interactivos",
      "Geolocalización",
      "Pronósticos extendidos"
    ],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/sebastianquintero/weather-dashboard",
    status: "En desarrollo",
    category: "Frontend"
  },
  {
    title: "Social Media Analytics",
    description: "Plataforma de análisis de redes sociales con métricas avanzadas, reportes automatizados y visualizaciones interactivas.",
    image: "/images/project5.jpg",
    technologies: ["Next.js", "D3.js", "Node.js", "MongoDB", "JWT"],
    features: [
      "Análisis de métricas",
      "Reportes automatizados",
      "Visualizaciones D3.js",
      "Autenticación JWT"
    ],
    liveUrl: "https://social-analytics.com",
    githubUrl: "https://github.com/sebastianquintero/social-analytics",
    status: "En desarrollo",
    category: "Full-Stack"
  },
  {
    title: "Learning Platform",
    description: "Plataforma educativa con cursos interactivos, sistema de progreso, certificaciones y comunidad de estudiantes.",
    image: "/images/project6.jpg",
    technologies: ["Next.js", "Prisma", "NextAuth", "Stripe", "Socket.io"],
    features: [
      "Cursos interactivos",
      "Sistema de progreso",
      "Certificaciones",
      "Chat en tiempo real"
    ],
    liveUrl: "https://learning-platform.com",
    githubUrl: "https://github.com/sebastianquintero/learning-platform",
    status: "Planificado",
    category: "Full-Stack"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

const ProjectCard = ({ project }: { project: Project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/20 text-green-600";
      case "En desarrollo":
        return "bg-yellow-500/20 text-yellow-600";
      case "Planificado":
        return "bg-blue-500/20 text-blue-600";
      default:
        return "bg-gray-500/20 text-gray-600";
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 bg-background/50 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500">
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          {/* Placeholder for project image */}
          <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
            <Eye className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
              {project.category}
            </span>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Características principales:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-4">
            <Button
              variant="default"
              size="sm"
              className="flex-1 group/btn"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                Ver Demo
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group/btn"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Código
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Proyectos
          </span>
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

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