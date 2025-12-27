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
    {
      title: "E-Commerce Dashboard",
      description: "a comprehensive admin dashboard for managing online stores. features real-time analytics, inventory management, and order tracking with a clean, intuitive interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/rosemondampomah/ecommerce-dashboard",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "collaborative task management application with drag-and-drop functionality. built to help teams organize projects, assign tasks, and track progress efficiently.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/rosemondampomah/task-manager",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "a beautiful weather application that provides detailed forecasts, interactive maps, and customizable widgets. designed with accessibility and performance in mind.",
      technologies: ["React", "OpenWeather API", "Styled Components"],
      githubUrl: "https://github.com/rosemondampomah/weather-app",
      liveUrl: "https://example.com"
    },
    {
      title: "Component Library",
      description: "reusable component library built from scratch following atomic design principles. includes comprehensive documentation and interactive playground.",
      technologies: ["React", "TypeScript", "Storybook", "CSS Modules"],
      githubUrl: "https://github.com/rosemondampomah/ui-components",
    },
    {
      title: "Portfolio Builder",
      description: "web app that allows users to create beautiful portfolio websites without coding. features customizable templates, drag-and-drop editor, and one-click deployment.",
      technologies: ["Vue.js", "Nuxt", "Firebase", "TailwindCSS"],
      githubUrl: "https://github.com/rosemondampomah/portfolio-builder",
      liveUrl: "https://example.com"
    },
    {
      title: "Blog Platform",
      description: "markdown-based blogging platform with syntax highlighting, tag system, and search functionality. optimized for developer content and technical writing.",
      technologies: ["Next.js", "MDX", "Vercel"],
      githubUrl: "https://github.com/rosemondampomah/dev-blog",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-[#d4af37] mb-12">
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
              <h2 className="text-xl text-[#d4af37]">{project.title}</h2>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#606060] hover:text-[#d4af37] transition-colors"
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
                className="inline-flex items-center gap-1 text-sm text-[#d4af37] hover:underline"
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
