"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 90, color: "from-gray-800 to-gray-600" },
      { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-400" },
      { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
      { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-blue-600" },
    ],
  },
  {
    title: "Herramientas & Frameworks",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, color: "from-red-500 to-pink-500" },
      { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" },
      { name: "Framer Motion", level: 85, color: "from-pink-500 to-violet-500" },
      { name: "Vite", level: 82, color: "from-violet-500 to-purple-600" },
      { name: "ESLint", level: 78, color: "from-indigo-500 to-purple-500" },
      { name: "Prettier", level: 85, color: "from-gray-700 to-gray-500" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "💾",
    skills: [
      { name: "Node.js", level: 75, color: "from-green-600 to-green-400" },
      { name: "MongoDB", level: 70, color: "from-green-500 to-teal-500" },
      { name: "PostgreSQL", level: 68, color: "from-blue-700 to-blue-500" },
      { name: "API REST", level: 80, color: "from-orange-500 to-red-400" },
      { name: "GraphQL", level: 65, color: "from-pink-500 to-rose-500" },
      { name: "Firebase", level: 72, color: "from-yellow-500 to-orange-600" },
    ],
  },
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

const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Tecnologías que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              domino
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A lo largo de mi carrera, he trabajado con diversas tecnologías y herramientas. 
            Aquí tienes un vistazo a mis competencias técnicas y el nivel de experiencia en cada una.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        index={skillIndex} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Otras competencias</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Metodologías Ágiles",
              "Scrum",
              "UI/UX Design",
              "Responsive Design",
              "Performance Optimization",
              "SEO",
              "Testing",
              "Docker",
              "CI/CD",
              "Web Accessibility",
              "PWA",
              "Micro-frontends"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-secondary/20 hover:bg-secondary/30 rounded-full text-sm font-medium transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🚀 Actualmente aprendiendo</h3>
            <p className="text-muted-foreground mb-6">
              La tecnología evoluciona constantemente, y yo evoluciono con ella. 
              Siempre estoy explorando nuevas herramientas y metodologías.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Three.js", "React Native", "Rust", "WebAssembly", "AI/ML Integration"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}