"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function ExperienceSection() {
  const education = [
    {
      title: "Licenciatura en Ciencia de Datos",
      institution: "Universidad Nacional de Buenos Aires",
      period: "2020 - 2024",
      location: "Buenos Aires, Argentina",
      description: "Graduado con honores. Especialización en Machine Learning y Análisis Estadístico Avanzado.",
      highlights: ["Promedio: 9.2/10", "Tesis sobre Deep Learning", "Premio al mejor proyecto final"]
    },
    {
      title: "Certificación en AWS Machine Learning",
      institution: "Amazon Web Services",
      period: "2024",
      location: "Online",
      description: "Certificación profesional en implementación de soluciones de ML en la nube.",
      highlights: ["Machine Learning Engineer", "Sagemaker", "MLOps"]
    },
    {
      title: "Curso Avanzado de Python para Data Science",
      institution: "DataCamp",
      period: "2023",
      location: "Online",
      description: "Specialización intensiva en herramientas avanzadas de Python para análisis de datos.",
      highlights: ["Pandas avanzado", "Scikit-learn", "Visualización de datos"]
    }
  ];

  const experience = [
    {
      title: "Data Science Intern",
      company: "TechStart Solutions",
      period: "Jun 2024 - Sep 2024",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo de modelos predictivos para optimización de procesos de negocio y análisis de customer churn.",
      achievements: [
        "Mejoré la precisión del modelo de churn en un 15%",
        "Automaticé reportes que ahorraron 10 horas/semana",
        "Implementé dashboard interactivo con Streamlit"
      ],
      tech: ["Python", "Scikit-learn", "PostgreSQL", "Streamlit", "Git"]
    },
    {
      title: "Analista de Datos Jr.",
      company: "Marketing Analytics Corp",
      period: "Ene 2024 - May 2024",
      location: "Buenos Aires, Argentina",
      description: "Análisis de campañas de marketing digital y desarrollo de métricas de performance para clientes.",
      achievements: [
        "Desarrollé sistema de attribution modeling",
        "Reduje tiempo de reporting en 40%",
        "Creé 15+ dashboards para diferentes clientes"
      ],
      tech: ["Python", "SQL", "Tableau", "Google Analytics", "Excel"]
    },
    {
      title: "Investigación Académica",
      company: "Universidad Nacional de Buenos Aires",
      period: "Mar 2023 - Dic 2023",
      location: "Buenos Aires, Argentina",
      description: "Proyecto de investigación sobre aplicación de NLP en análisis de sentimientos en redes sociales.",
      achievements: [
        "Paper aceptado en conferencia nacional",
        "Desarrollé nuevo algoritmo de clasificación",
        "Mentoreé a 3 estudiantes junior"
      ],
      tech: ["Python", "NLTK", "spaCy", "TensorFlow", "Jupyter"]
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiencia & Educación</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria académica y profesional en el mundo de la ciencia de datos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experiencia Profesional</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:text-right text-sm text-muted-foreground mt-2 sm:mt-0">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Logros principales:
                        </h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Educación & Certificaciones</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{edu.title}</h4>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col sm:text-right text-sm text-muted-foreground mt-2 sm:mt-0">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <div>
                        <h5 className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          Destacados:
                        </h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}