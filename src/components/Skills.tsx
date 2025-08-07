import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Cloud } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Tailwind CSS", "CSS", "JavaScript", "HTML5"],
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB"],
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Git", "VS Code", "Postman", "Trello"],
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    // {
    //   title: "Cloud & DevOps",
    //   icon: Cloud,
    //   skills: [
    //     "AWS",
    //     "Azure",
    //     "Google Cloud",
    //     "Kubernetes",
    //     "CI/CD",
    //     "Linux",
    //     "Nginx",
    //     "Jenkins",
    //   ],
    //   color: "bg-orange-500",
    //   hoverColor: "hover:bg-orange-600",
    // },
  ];

  return (
    <section id="skills" className="py-20 px-4" ref={skillsRef}>
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 gradient-text ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`gradient-card shadow-medium border-0 transition-all duration-700 hover:shadow-large cursor-pointer ${
                isVisible ? "animate-scale-in" : "opacity-0"
              } ${hoveredCard === index ? "scale-105" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div
                    className={`p-2 rounded-lg ${category.color} ${
                      category.hoverColor
                    } transition-all duration-300 ${
                      hoveredCard === index ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`transition-all duration-300 ${
                      hoveredCard === index ? "text-primary" : ""
                    }`}
                  >
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-pointer transform"
                      style={{
                        animationDelay: `${skillIndex * 0.1 + index * 0.2}s`,
                        animation: isVisible
                          ? `fade-in 0.6s ease-out forwards`
                          : "none",
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <Card
          className={`gradient-card shadow-medium border-0 mt-8 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          } delay-1000`}
        >
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Additional Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-center text-xl">
              {[
                {
                  title: "Soft Skills",
                  description:
                    "Adaptability, Team Oriented, Problem Solving, Reader",
                },
                {
                  title: "Languages",
                  description: "English (Native), Hindi",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="space-y-2 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.3 + 1.2}s` }}
                >
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
