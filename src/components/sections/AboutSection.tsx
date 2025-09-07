"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, BookOpen } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soy un científico de datos recién graduado con una pasión innata por 
            descubrir patrones ocultos en los datos y crear soluciones que impacten positivamente.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mi Historia</h3>
                <p className="text-muted-foreground">
                  Desde que descubrí el mundo de los datos durante mis estudios universitarios, 
                  me he dedicado a dominar las herramientas y técnicas que me permiten 
                  extraer valor de la información.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mi Enfoque</h3>
                <p className="text-muted-foreground">
                  Me especializo en transformar datos complejos en insights accionables, 
                  combinando rigor científico con creatividad para resolver problemas 
                  del mundo real.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Aprendizaje Continuo</h3>
                <p className="text-muted-foreground">
                  El campo de la ciencia de datos evoluciona constantemente, y me mantengo 
                  actualizado con las últimas tecnologías, algoritmos y mejores prácticas 
                  de la industria.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">¿Qué me motiva?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creo firmemente que los datos tienen el poder de mejorar vidas y transformar industrias. 
                Mi objetivo es ser parte de esa transformación, aplicando machine learning y análisis 
                avanzado para crear soluciones innovadoras que generen un impacto real y medible. 
                Busco constantemente oportunidades para crecer profesionalmente mientras contribuyo 
                al éxito de equipos dinámicos y proyectos desafiantes.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}