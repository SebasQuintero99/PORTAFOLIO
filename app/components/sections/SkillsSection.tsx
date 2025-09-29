"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Users, 
  MessageCircle, 
  Target, 
  Zap,
  Heart,
  Lightbulb
} from "lucide-react";
import {
  // Frontend
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  // Tools & Development
  FaGitAlt,
  FaGithub,
  FaFigma,
  // Backend & Databases
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Sass/SCSS", icon: FaSass, color: "#CC6699" },
    ],
  },
  {
    category: "Herramientas & Desarrollo",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    ],
  },
  {
    category: "Librerías & Frameworks",
    skills: [
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Zustand", icon: TbDatabase, color: "#443E38" },
      { name: "React Hook Form", icon: FaReact, color: "#EC5990" },
      { name: "Zod", icon: Code2, color: "#3E67B1" },
      { name: "Shadcn/ui", icon: Palette, color: "#000000" },
      { name: "Lucide Icons", icon: Zap, color: "#F56565" },
      { name: "Chart.js", icon: FaDatabase, color: "#FF6384" },
      { name: "Three.js", icon: Code2, color: "#000000" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "API REST", icon: TbApi, color: "#FF6B35" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
];

const softSkills = [
  {
    icon: Code2,
    title: "Pensamiento Lógico",
    description: "Capacidad para resolver problemas complejos de manera estructurada y eficiente.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Diseño Centrado en UX",
    description: "Enfoque en crear interfaces intuitivas que prioricen la experiencia del usuario.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva con equipos multidisciplinarios y metodologías ágiles.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: MessageCircle,
    title: "Comunicación Efectiva",
    description: "Habilidad para explicar conceptos técnicos de manera clara y comprensible.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "Orientación a Resultados",
    description: "Enfoque en entregar soluciones de calidad dentro de los plazos establecidos.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Adaptabilidad",
    description: "Capacidad para aprender nuevas tecnologías y adaptarse a cambios rápidamente.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Pasión por la Calidad",
    description: "Compromiso con escribir código limpio y mantener altos estándares de desarrollo.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento Creativo",
    description: "Innovación en la búsqueda de soluciones creativas para desafíos técnicos.",
    color: "from-cyan-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Habilidades
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stack tecnológico &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              soft skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mi toolkit técnico y las habilidades blandas que me permiten crear soluciones excepcionales 
            y colaborar efectivamente en equipos multidisciplinarios.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-12"
          >
            Stack Técnico
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-center mb-6 group-hover:text-primary transition-colors">
                      {category.category}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/10 transition-all duration-200 cursor-default group/skill border border-transparent hover:border-primary/20"
                          >
                            <div className="mb-3 group-hover/skill:scale-110 transition-transform duration-200">
                              <IconComponent 
                                size={32}
                                style={{ color: skill.color }}
                                className="filter group-hover/skill:drop-shadow-lg transition-all duration-200"
                              />
                            </div>
                            <span className="text-xs font-medium text-center group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-12"
          >
            Habilidades Blandas
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {softSkills.map((skill) => (
              <motion.div key={skill.title} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                          <skill.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {skill.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Aprendizaje Continuo</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              La tecnología evoluciona constantemente, y yo evoluciono con ella. 
              Siempre estoy explorando nuevas herramientas y metodologías para mantenerme a la vanguardia.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Three.js", 
                "React Native", 
                "Rust", 
                "WebAssembly", 
                "AI/ML Integration",
                "Web3",
                "Docker"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-full text-sm font-medium text-primary transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}