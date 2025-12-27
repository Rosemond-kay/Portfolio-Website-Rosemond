import { Calendar, Clock } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "January 2023 - Present",
      duration: "1 year 11 months",
      description: "Leading frontend development for enterprise-scale web applications. Building reusable component libraries and establishing frontend architecture patterns.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "March 2021 - December 2022",
      duration: "1 year 9 months",
      description: "Developed responsive web applications for various clients. Collaborated with designers to implement pixel-perfect UI components and optimize user experiences.",
      technologies: ["React", "JavaScript", "CSS", "REST APIs", "Git"]
    },
    {
      title: "Junior Frontend Developer",
      company: "Startup Inc",
      period: "June 2019 - February 2021",
      duration: "1 year 8 months",
      description: "Built and maintained frontend features for a growing SaaS platform. Worked closely with the design team to create intuitive user interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Redux"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Web Solutions",
      period: "January 2019 - May 2019",
      duration: "5 months",
      description: "Assisted in developing client websites and learning modern web development practices. Participated in code reviews and team meetings.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl text-[#d4af37]">
          experience
        </h1>
      </div>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="border-b border-[#1a1a1a] pb-8 last:border-b-0"
          >
            <h2 className="text-xl text-[#d4af37] mb-2">
              {exp.title}
            </h2>
            
            <div className="flex items-center gap-4 mb-4 text-sm text-[#606060]">
              <span className="text-[#808080]">{exp.company}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{exp.duration}</span>
              </div>
            </div>

            <p className="text-[#808080] leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#606060] text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
