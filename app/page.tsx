"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const skills = {
    frontend: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3"],
    backend: ["Node.js", "Laravel", "PHP", "Express.js", "Prisma ORM", "REST API", "MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Docker", "Git", "GitHub", "VS Code", "Postman", "Composer", "npm/pnpm", "Vercel"]
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Government & Enterprise Projects",
      period: "2023 - Present",
      description: "Developing and deploying web solutions for government institutions. Built queue management systems (Next.js) and company profile websites (Laravel) for Immigration Offices. Successfully delivered projects at Immigration Office Bontang, Immigration Office Samarinda, and BPD Kaltim Sangata."
    },
    {
      title: "Web Developer",
      company: "Learning & Building",
      period: "2022 - 2023",
      description: "Intensive learning of full-stack web development with both modern JavaScript and PHP frameworks. Built multiple projects including queue management systems, company profiles, and web applications. Mastered React, Next.js, Laravel, Prisma ORM, and Docker."
    }
  ];

  const projects = [
    {
      title: "Queue Management System",
      description: "Enterprise queue management system deployed at multiple government institutions including Immigration Office Bontang, Immigration Office Samarinda, and BPD Kaltim Sangata. Features real-time queue tracking, digital display, and admin dashboard",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Prisma", "Docker", "Lucide"],
      images: ["/System_queue.png", "/Sytem_queue_pic_2.png", "/system_queue_3.png"]
    },
    {
      title: "Immigration Bontang Company Profile",
      description: "Official company profile website for Immigration Office Bontang. Features service information, news management, online forms, and admin panel for content management",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "PHP", "Blade"],
      images: []
    },
    {
      title: "Hackathon Winner - 2nd Place 🏆",
      description: "Won 2nd place in university-level hackathon competition across East Kalimantan. Developed innovative solution within limited timeframe, competing against top universities in the province",
      tech: ["JavaScript", "React", "Node.js", "Innovation", "Team Work"],
      images: ["/Hackaton_dockumentacion.jpeg", "/hackaton_gerade_2_profinsi kalimantan_timur.png"]
    },
    {
      title: "Portfolio Website",
      description: "Modern and minimalist portfolio website built with Next.js 14, featuring dark mode, responsive design, and smooth animations",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Full Stack Developer
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Doni Nugraha
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Building production-ready web applications for government and enterprise clients. 
            Based in Indonesia, specializing in Laravel, Next.js, and modern full-stack development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 justify-center mt-8"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:doninugraha2304@gmail.com">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/Doninugraha2304" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8 text-zinc-900 dark:text-zinc-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Tech Stack
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Tools & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Layers className="w-8 h-8 text-zinc-900 dark:text-zinc-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Experience
            </h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-zinc-900 dark:border-l-zinc-100">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-3">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <CheckCircle2 className="w-8 h-8 text-zinc-900 dark:text-zinc-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                {project.images && project.images.length > 0 && (
                  <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800">
                    {project.images.length === 1 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Carousel className="w-full h-full">
                        <CarouselContent>
                          {project.images.map((img, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative w-full aspect-video">
                                <Image
                                  src={img}
                                  alt={`${project.title} ${imgIndex + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    )}
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:doninugraha2304@gmail.com">
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/Doninugraha2304" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Doni Nugraha. Built with Next.js & Shadcn UI
          </p>
        </div>
      </footer>
    </div>
  );
}
