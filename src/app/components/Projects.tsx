import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    // {
    //   title: "A Personal Expense Tracker CLI Tool",
    //   description: "a command-line interface (cli) tool that helps users track their personal expenses and manage their budget effectively. features include adding expenses, categorizing them and generating monthly reports.",
    //   technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Vite", "Node.js", "Express", "MongoDB"],
    //   githubUrl: "https://github.com/Rosemond-kay",
    //   liveUrl: "https://example.com"
    // },
    {
      title: "Minimalist Personal Portfolio Website",
      description: "a sleek and modern personal portfolio website designed to showcase projects, skills, and experience. features a responsive design, minimal features and easy navigation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Rosemond-kay/Portfolio-Website-Rosemond",
      liveUrl: "https://rosemond-ampomah.vercel.app/"
    },
    {
      title: "WASSCE Results Aggregate Calculator",
      description: "a desktop application that allows university admission officers to calculate a candidate's aggregate scores for the west african senior school certificate examination (wassce) based on their subject grades. features a user-friendly interface and instant results display.",
      technologies: ["React", "TensorFlow", "Image Preprocessing", "OCR", "CSS"],
      githubUrl: "https://github.com/Rosemond-kay/Custom-Exam-Results-OCR",
      liveUrl: "https://example.com"
    },
    {
      title: "MindMama - An AI-powered mobile app for mothers to manage their chores and tasks",
      description: "mobile app that leverages ai to help mothers organize and manage their daily chores and tasks efficiently. features voice recognition, smart reminders and personalized recipes.",
      technologies: ["React Native", "TypeScript", "Expo", "Tailwind CSS"],
      githubUrl: "https://github.com/kenza-borja/MindMama/tree/main/frontend",
    },
    {
      title: "TaskFlow - A Task Management App",
      description: "a task management application designed to help users organize and prioritize their daily tasks effectively. features include task creation, an admin dashboard, deadlines and progress tracking.",
      technologies: ["React js", "TypeScript", "Supabase", "TailwindCSS"],
      githubUrl: "https://github.com/rosemondampomah/portfolio-builder",
      liveUrl: "https://taskflow-management-app.vercel.app/"
    },
    {
      title: "RoseBinge - A Movie Search Platform",
      description: "responsive movie search and discovery platform built with react and tailwind css, featuring dynamic data integration from the omdbapi.",
      technologies: ["react", "omdbapi", "vercel"],
      githubUrl: "https://github.com/rosemond-kay/ALX-Capstone-Project",
      liveUrl: "https://rosebinge-movies.vercel.app/"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-[#D6B4FC] mb-12">
        projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#1a1a1a] p-6 rounded-lg hover:border-[#2a2a2a] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl text-[#D6B4FC]">{project.title}</h2>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#606060] hover:text-[#D6B4FC] transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[#808080] text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#1a1a1a] text-[#606060] text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#D6B4FC] hover:underline"
              >
                live link
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
