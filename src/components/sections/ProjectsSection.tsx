"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Análisis Predictivo de Ventas",
      description: "Desarrollo de un modelo de machine learning para predecir ventas mensuales con una precisión del 92%. Incluye análisis de seasonalidad y factores externos.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Streamlit"],
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-600",
      links: {
        github: "https://github.com/tu-username/sales-prediction",
        demo: "https://tu-demo.streamlit.app/"
      },
      image: "/api/placeholder/400/250"
    },
    {
      title: "Sistema de Recomendación",
      description: "Implementación de un sistema de recomendación híbrido que combina filtrado colaborativo y basado en contenido para una plataforma e-commerce.",
      tech: ["Python", "TensorFlow", "PostgreSQL", "FastAPI", "Docker"],
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-600",
      links: {
        github: "https://github.com/tu-username/recommendation-system",
        demo: "https://tu-api.herokuapp.com/docs"
      },
      image: "/api/placeholder/400/250"
    },
    {
      title: "Dashboard de Análisis de Datos",
      description: "Dashboard interactivo para visualización y análisis de datos de negocio en tiempo real. Incluye métricas KPI y alertas automatizadas.",
      tech: ["Python", "Plotly", "Dash", "Redis", "AWS", "PostgreSQL"],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-green-500/10 text-green-600",
      links: {
        github: "https://github.com/tu-username/analytics-dashboard",
        demo: "https://tu-dashboard.herokuapp.com/"
      },
      image: "/api/placeholder/400/250"
    },
    {
      title: "Procesamiento de Big Data",
      description: "Pipeline de procesamiento de datos masivos para análisis de sentimientos en redes sociales usando Apache Spark y técnicas de NLP.",
      tech: ["Python", "PySpark", "Kafka", "NLTK", "Docker", "AWS EMR"],
      icon: <Database className="h-6 w-6" />,
      color: "bg-orange-500/10 text-orange-600",
      links: {
        github: "https://github.com/tu-username/big-data-pipeline",
      },
      image: "/api/placeholder/400/250"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en ciencia de datos, 
            machine learning y desarrollo de soluciones end-to-end
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg ${project.color}`}>
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" asChild>
                        <a 
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Quieres ver más proyectos?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/tu-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Ver todos en GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}