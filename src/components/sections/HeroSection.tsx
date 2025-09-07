"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Joaquín Machulsky
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Data Scientist
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Recién graduado apasionado por transformar datos en insights valiosos 
            y construir soluciones innovadoras con machine learning
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="font-semibold">
            <Mail className="mr-2 h-4 w-4" />
            Contáctame
          </Button>
          <Button variant="outline" size="lg" className="font-semibold">
            <Download className="mr-2 h-4 w-4" />
            Descargar CV
          </Button>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a
            href="https://github.com/tu-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-all duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/tu-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-all duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}