import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUp,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

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
    { icon: Mail, href: "mailto:sheikhjunaid732000@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`${
        theme === "light" ? "gradient-hero" : "gradient"
      }  text-white`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className={`${
                theme === "light" ? "text-white" : "gradient-text"
              } text-2xl font-bold`}
            >
              Sheikh Junaid
            </h3>
            <p className="text-white/80 leading-relaxed">
              Full Stack Developer passionate about creating amazing digital
              experiences. Let's work together to bring your ideas to life.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-smooth hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className={`${
                theme === "light" ? "text-white" : "gradient-text"
              } text-lg font-semibold`}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-smooth inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className={`${
                theme === "light" ? "text-white" : "gradient-text"
              } text-lg font-semibold`}
            >
              Get In Touch
            </h4>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sheikhjunaid732000@gmail.com"
                  className="hover:text-white transition-smooth"
                >
                  sheikhjunaid732000@gmail.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Indore, India
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+91 9754682432"
                  className="hover:text-white transition-smooth"
                >
                  +91 9754682432
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sheikh Junaid. All rights reserved.
          </p>

          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-white/40 text-primary hover:bg-white hover:text-primary transition-smooth mt-4 md:mt-0"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
