import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: project1Image,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project1",
      featured: true
    },
    {
      title: "Social Media App",
      description: "A responsive social media application with real-time messaging, post sharing, and user profiles. Features include likes, comments, and notifications.",
      image: project2Image,
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project2",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations, responsive design, and contact form. Showcases creative design and development skills.",
      image: project3Image,
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project3",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`gradient-card shadow-medium border-0 transition-smooth hover:shadow-large hover:-translate-y-2 group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;