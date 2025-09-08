"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Brain, 
  Cloud, 
  GitBranch,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-600",
      skills: ["Python", "SQL", "C++", "JavaScript", "HTML"]
    },
    {
      title: "AI/ML & LLMs",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Gemini LLM", "RAG Systems", "Semantic Search", "Embeddings", "PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP"]
    },
    {
      title: "Data & Backend",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-green-500/10 text-green-600",
      skills: ["Pandas", "NumPy", "OpenCV", "Flask", "SQLAlchemy", "Marshmallow", "Selenium", "SciPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-cyan-500/10 text-cyan-600",
      skills: ["AWS (EC2, S3, IAM, RDS)", "Elastic Beanstalk", "CodePipeline", "Docker", "Google Cloud APIs", "Postman"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Vector Search", "JSON-based storage"]
    },
    {
      title: "Tools & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-red-500/10 text-red-600",
      skills: ["Git", "GitHub", "React", "Material UI", "Jupyter", "VS Code"]
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

  const specialties = [
    {
      title: "LLM Operations",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Production-grade LLM systems and RAG architectures"
    },
    {
      title: "AI Agent Development",
      icon: <Cpu className="h-5 w-5" />,
      description: "Building scalable AI agents and debate mechanisms"
    },
    {
      title: "Computer Vision",
      icon: <Database className="h-5 w-5" />,
      description: "PyTorch-based models for medical imaging and detection"
    },
    {
      title: "Time Series Analysis",
      icon: <Cloud className="h-5 w-5" />,
      description: "Forecasting models for market analysis and trends"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks for tackling any data science challenge
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8">Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      {specialty.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{specialty.title}</h4>
                    <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}