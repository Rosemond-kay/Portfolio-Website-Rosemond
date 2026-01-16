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
      title: "Software Developer Intern",
      company: "Digiits Agency",
      period: "October 2025 - Present",
      duration: "- ongoing",
      description: "Assisted in developing client websites and learning modern web development practices. Participated in code reviews and team meetings.",
      technologies: ["React", "TypeScript", "API Integration", "Tailwind CSS", "React Native"]
    },
    {
      title: "Edtech Enthusiast",
      company: "Brilliant Maths and Science Education",
      period: "September 2022 - August 2025",
      duration: "3 years",
      description: "Integrated digital tools and e-learning platforms to enhance engagement, accessibility and assessment efficiency in hybrid classroom settings.",
      technologies: ["Requirements Gathering", "Data Analytics", "Stakeholder Engagement", "Project Delivery", "Project Management"]
    },
    {
      title: "Business Analyst",
      company: "Stanbic Bank Ghana",
      period: "November 2021 - Saptember 2022",
      duration: "11 months",
      description: "Supported enhancements to QA workflows, contributing to more efficient software deployments while maintaining compliance and quality standards.",
      technologies: ["Project management", "Agile Methodology", "Business Analysis", "Databases", "Data Analytics"]
    },
    {
      title: "IT Support Intern",
      company: "Ghana Broadcasting Corporation",
      period: "June 2019 - August 2019",
      duration: "3 months",
      description: "Reduced security vulnerabilities by 50% through implementation of cybersecurity protocols and system hardening.",
      technologies: ["Cybersecurity", "Computer Networking", "Troubleshooting", "Computer Hardware"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl text-[#D6B4FC]">
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
            <h2 className="text-xl text-[#D6B4FC] mb-2">
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
