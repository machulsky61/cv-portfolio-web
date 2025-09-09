"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database } from "lucide-react";
import Image from "next/image";

interface ProjectLinks {
  github: string;
  demo?: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactElement;
  color: string;
  links: ProjectLinks;
  image: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "AI Agents Alignment: Scalable AI Safety via Debate",
      description: "Research exploring debate mechanisms for AI alignment. Implemented full simulation game (zero-sum) of a debate protocol using PyTorch, including computer vision models, turn-based strategies, and agent asymmetry capabilities.",
      tech: ["Python", "PyTorch", "Computer Vision", "Game Theory", "AI Safety"],
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-600",
      links: {
        github: "https://github.com/machulsky61/tesis",
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Semantic Search RAG System",
      description: "Production-grade semantic search Agentic RAG system using Gemini LLM and Google embeddings, enabling natural language queries for a 544-product catalog. Deployed on AWS with high availability.",
      tech: ["Python", "Gemini LLM", "RAG", "Google Embeddings", "AWS", "Vector Search"],
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-600",
      links: {
        github: "https://github.com/machulsky61",
      },
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Melanoma Detection Computer Vision Model",
      description: "PyTorch-based computer vision model for melanoma detection achieving 80% recall. Includes comprehensive model evaluation, validation techniques, and performance optimization.",
      tech: ["Python", "PyTorch", "Computer Vision", "OpenCV", "Medical Imaging"],
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-500/10 text-green-600",
      links: {
        github: "https://github.com/machulsky61",
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Dream Journal NLP Analysis",
      description: "Web scraping and NLP-based analysis of dream narratives, including sentiment analysis, coherence evaluation, and topic modeling. Investigated relationships between dreams and lottery numbers using statistical analysis.",
      tech: ["Python", "NLP", "Web Scraping", "Sentiment Analysis", "Topic Modeling"],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-orange-500/10 text-orange-600",
      links: {
        github: "https://github.com/machulsky61/Dream-Journal",
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects demonstrating my expertise in data science, 
            machine learning, and end-to-end AI solution development
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
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg ${project.color} backdrop-blur-sm`}>
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
                          Code
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
            Want to see more projects?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/machulsky61"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              View all on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}