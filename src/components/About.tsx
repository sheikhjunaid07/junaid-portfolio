import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4" ref={aboutRef}>
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 gradient-text ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          About Me
        </h2>

        <Card
          className={`gradient-card shadow-medium border-0 transform transition-all duration-700 ${
            isVisible
              ? "animate-scale-in translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div
                className={`${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                } delay-300`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Hello! I'm <span className="gradient-text">Developer</span> by
                  Profession and <span className="gradient-text">Reader</span>{" "}
                  by Heart.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a full-stack developer with a passion for creating
                  innovative solutions and beautiful user experiences. With
                  expertise in modern web technologies, I enjoy turning complex
                  problems into simple, elegant designs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When I'm not coding, you can find me to reading books,
                  exploring new things, and improving my skills.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105 transform cursor-default">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">
                      Month Experience
                    </div>
                    {/* <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div> */}
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105 transform cursor-default">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`space-y-4 ${
                  isVisible ? "animate-slide-in-right" : "opacity-0"
                } delay-500`}
              >
                {[
                  {
                    title: "Problem Solving",
                    description:
                      "I love tackling complex challenges and finding elegant solutions.",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Always staying up-to-date with the latest technologies and best practices.",
                  },
                  {
                    title: "Team Collaboration",
                    description:
                      "Working with teams and create amazing products.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h4 className="font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
