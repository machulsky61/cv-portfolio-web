"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function ExperienceSection() {
  const education = [
    {
      title: "Master in Data Science (Artificial Intelligence)",
      institution: "University of Buenos Aires",
      period: "2023 - 2025",
      location: "Buenos Aires, Argentina",
      description: "Advanced graduate program focusing on AI, machine learning, and statistical modeling with emphasis on practical applications.",
      highlights: ["AI & ML specialization", "Statistical modeling", "Research methodology"]
    },
    {
      title: "Bachelor in Data Science",
      institution: "University of Buenos Aires",
      period: "2020 - 2023",
      location: "Buenos Aires, Argentina",
      description: "Comprehensive undergraduate program combining Mathematics, Computing, and Statistics for data-driven problem solving.",
      highlights: ["Mathematics foundation", "Computer Science", "Statistical analysis"]
    },
    {
      title: "English Proficiency (FCE B2)",
      institution: "Cambridge English",
      period: "Certified",
      location: "International",
      description: "Cambridge First Certificate in English demonstrating upper-intermediate English proficiency for professional contexts.",
      highlights: ["Business English", "Technical communication", "Academic writing"]
    }
  ];

  const experience = [
    {
      title: "Data Scientist",
      company: "NETV S.A.",
      period: "August 2024 - Present",
      location: "Remote",
      description: "Leading ML projects and architecting production-grade AI systems including semantic search RAG systems and computer vision models.",
      achievements: [
        "Architected and deployed production-grade semantic search Agentic RAG system using Gemini LLM",
        "Developed PyTorch-based computer vision model for melanoma detection (80% recall)",
        "Optimized large-scale SQL pipelines, reducing report generation time by over 95%",
        "Led data sub-team through mentorship, code reviews, and daily standups"
      ],
      tech: ["Python", "PyTorch", "Gemini LLM", "RAG", "AWS", "Docker", "Flask", "PostgreSQL"]
    },
    {
      title: "Freelance ML & Data Developer",
      company: "LAS MERCEDES",
      period: "March 2025 - Present",
      location: "Remote",
      description: "Designed and built custom automated system to reconcile and analyze 500+ monthly POS transactions with secure backend API.",
      achievements: [
        "Built end-to-end automated reconciliation system for 500+ monthly transactions",
        "Developed secure backend API with Flask and full CRUD functionality",
        "Generated automated reports and dashboards delivering key business insights"
      ],
      tech: ["Python", "Flask", "AWS", "PostgreSQL", "Pandas", "Scikit-learn"]
    },
    {
      title: "Data Analyst & Data Developer",
      company: "RUSSO SEGUROS",
      period: "November 2023 - May 2025",
      location: "Buenos Aires, Argentina",
      description: "Automated data ingestion processes and maintained PostgreSQL databases for insurance policy and payment data analysis.",
      achievements: [
        "Automated insurance policy and payment data ingestion using Python and Selenium",
        "Maintained and optimized PostgreSQL databases ensuring data integrity and performance",
        "Built automated reports for financial and operational analysis with key KPIs",
        "Implemented predictive models for business trend forecasting"
      ],
      tech: ["Python", "PostgreSQL", "Pandas", "Selenium", "Matplotlib", "Seaborn"]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic and professional journey in the world of data science
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
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 gap-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground leading-tight">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:text-right text-sm text-muted-foreground shrink-0">
                          <div className="flex items-center gap-1 lg:justify-end">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1 lg:justify-end">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Key Achievements:
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
              <h3 className="text-2xl font-bold">Education & Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start mb-3 gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-foreground leading-tight pr-4">{edu.title}</h4>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col lg:text-right text-sm text-muted-foreground shrink-0 lg:min-w-[140px]">
                          <div className="flex items-center gap-1 lg:justify-end">
                            <Calendar className="h-3 w-3 shrink-0" />
                            <span className="whitespace-nowrap">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1 lg:justify-end">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="whitespace-nowrap">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <div>
                        <h5 className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          Highlights:
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