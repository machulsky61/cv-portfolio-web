"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "joaquin.machulsky@email.com",
      href: "mailto:joaquin.machulsky@email.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Teléfono",
      value: "+54 9 11 1234-5678",
      href: "tel:+5491112345678",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      href: "https://maps.google.com/?q=Buenos+Aires,Argentina",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/joaquin-machulsky",
      href: "https://linkedin.com/in/joaquin-machulsky",
      color: "bg-blue-600/10 text-blue-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¡Conectemos!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades, colaboraciones o simplemente 
            una charla sobre ciencia de datos. ¡No dudes en contactarme!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactInfo.map((info) => (
            <motion.div key={info.label} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`p-3 rounded-lg ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Buscas un Data Scientist?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estoy disponible para oportunidades full-time, proyectos freelance, 
                colaboraciones en investigación o mentorías. Mi experiencia incluye 
                machine learning, análisis predictivo, visualización de datos y desarrollo end-to-end.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="font-semibold" asChild>
                  <a href="mailto:joaquin.machulsky@email.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/tu-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-accent hover:scale-110 transition-all duration-300 group"
          >
            <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/joaquin-machulsky"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-accent hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:joaquin.machulsky@email.com"
            className="p-4 rounded-full border border-border hover:bg-accent hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            Construido con ❤️ usando Next.js, TypeScript y Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            © 2024 Joaquín Machulsky. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}