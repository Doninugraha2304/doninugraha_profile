import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "JavaScript"],
    backend: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis", "REST API"],
    tools: ["Docker", "Git", "GitHub", "AWS", "CI/CD", "Linux", "Vercel"]
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation",
      period: "2021 - Present",
      description: "Leading development of scalable web applications using React, Next.js, and Node.js. Building modern microservices architecture and implementing CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2018 - 2021",
      description: "Built and maintained enterprise-level applications with focus on performance optimization and user experience. Collaborated with cross-functional teams to deliver high-quality products."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat app with group messaging, file sharing, and notification system",
      tech: ["React", "Socket.io", "Express", "MongoDB"]
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform with kanban boards, time tracking, and team analytics",
      tech: ["Vue.js", "Python", "FastAPI", "Redis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Senior Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Doni Nugraha
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Crafting elegant solutions to complex problems with modern web technologies. 
            Based in Indonesia, building scalable applications that make a difference.
          </p>
          
          <div className="flex gap-4 justify-center mt-8">
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
          </div>
        </div>
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
