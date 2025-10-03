"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import ParallaxStars from "@/app/components/ui/ParallaxStars";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "juansebastianquinteroortiz@gmail.com",
    href: "mailto:juansebastianquinteroortiz@gmail.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Neiva, Colombia",
    href: "https://maps.google.com/?q=Neiva,Colombia",
  },
  {
    icon: Calendar,
    title: "Disponibilidad",
    description: "Lun - Vie, 8:00 AM - 6:00 PM",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/sebasquintero99",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/sebastianquintero",
    color: "hover:text-blue-600",
  },
  // {
  //   icon: Twitter,
  //   name: "Twitter",
  //   href: "https://twitter.com/sebastianquintero",
  //   color: "hover:text-blue-400",
  // },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:juansebastianquinteroortiz@gmail.com",
    color: "hover:text-red-500",
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

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: "Sebastián Quintero",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email enviado exitosamente:", result.text);
      toast.success("¡Mensaje enviado!", {
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      reset();
    } catch (error) {
      console.error("Error al enviar email:", error);
      toast.error("Error al enviar mensaje", {
        description: "Por favor, intenta de nuevo o contáctame directamente por email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-0 overflow-hidden">
      {/* Parallax Stars */}
      <ParallaxStars count={75} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Contacto
          </span> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hablemos sobre tu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea increíble? ¿Necesitas ayuda con tu proyecto?
            Me encantaría escuchar sobre él y explorar cómo puedo ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre *</label>
                      <Input
                        {...register("name")}
                        placeholder="Tu nombre completo"
                        className="border-secondary/20 focus:border-primary"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="tu.email@ejemplo.com"
                        className="border-secondary/20 focus:border-primary"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Asunto *</label>
                    <Input
                      {...register("subject")}
                      placeholder="¿De qué quieres hablar?"
                      className="border-secondary/20 focus:border-primary"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje *</label>
                    <Textarea
                      {...register("message")}
                      placeholder="Cuéntame sobre tu proyecto, ideas o cualquier cosa en la que pueda ayudarte..."
                      rows={6}
                      className="border-secondary/20 focus:border-primary resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  variants={itemVariants}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (info.href === "#") {
                      e.preventDefault();
                      toast.info("Funcionalidad en proceso", {
                        description: "Estamos trabajando en esta función. ¡Pronto estará disponible!",
                      });
                    }
                  }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors group"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Sígueme en redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-all duration-200 ${social.color} group`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            {/* <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6"
            >
              <h3 className="font-semibold mb-2">⚡ Tiempo de respuesta</h3>
              <p className="text-sm text-muted-foreground">
                Generalmente respondo en menos de 24 horas. 
                Para proyectos urgentes, no dudes en llamarme directamente.
              </p>
            </motion.div> */}

            {/* Availability
            <motion.div
              variants={itemVariants}
              className="bg-green-500/10 rounded-lg p-6 border border-green-500/20"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h3 className="font-semibold text-green-600">Disponible para proyectos</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Actualmente acepto nuevos proyectos freelance y oportunidades de colaboración.
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}