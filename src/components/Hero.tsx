import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sheikhjunaid07",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sheikh-junaid-76a2a31",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_sheikhjunaid07_/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/sheikh.junaid.0717",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center text-white relative z-10">
        <div
          className={`mb-8 flex justify-center ${
            isVisible ? "animate-bounce-in" : "opacity-0"
          }`}
        >
          <div className="relative group">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-large border-4 border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:border-white/40"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
            <div className="absolute -inset-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>

        <div
          className={`${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          } delay-300`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-white drop-shadow-lg relative">
              Sheikh Junaid
              <span className="absolute -inset-1 bg-white/20 blur-lg rounded-lg opacity-30"></span>
            </span>
          </h1>
        </div>

        <div
          className={`${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          } delay-500`}
        >
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating amazing digital
            experiences
          </p>
        </div>

        <div
          className={`flex justify-center gap-4 mb-8 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          } delay-700`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
              aria-label={social.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isVisible ? "animate-fade-in" : "opacity-0"
          } delay-1000`}
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-primary hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
            isVisible ? "animate-bounce" : "opacity-0"
          } delay-1500`}
        >
          <ChevronDown
            className="w-8 h-8 text-white/60 cursor-pointer hover:text-white transition-colors duration-300"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
