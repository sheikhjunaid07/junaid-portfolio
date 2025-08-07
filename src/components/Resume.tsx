import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      school: "Medi-Caps Institute of Technology and Management, Indore",
      year: "2020 - 2022",
      description: "Specialized in Software Engineering and Web Development",
    },
    {
      degree: "Bachelor of Science (Computers)",
      school: "Pandit Jawaharlal Nehru Govt. College, Nepanagar",
      year: "2017 - 2020",
      description: "Intensive program focused on modern web technologies",
    },
  ];

  const experience = [
    {
      title: "MERN Stack Intern",
      company: "Ypsilon IT Solutions Pvt Ltd, Indore",
      year: "January 2025 - Present",
      description:
        "Learned MERN Stack, JavaScript, Node, Express, React, and software development processes while writing clean code under senior guidance.",
    },
    {
      title: "Flutter Intern",
      company: "Alphawizz Technologies, Indore",
      year: "May 2022 - July 2023",
      description:
        "Created UI screens in Flutter, collaborated with seniors, used Firebase for backend, and ensured user-friendly designs in applications",
    },
  ];

  const certifications = [
    "Ypsilon IT Solutions (Internship)",
    "MERN Stack Development (Universal Informatics)",
    "Flutter Development (Internship)",
    "JAVA Training (Code Mantra)",
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Resume
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="w-6 h-6 text-primary" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium">{item.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium">{item.school}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="gradient-card shadow-medium border-0 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/10"
                >
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
