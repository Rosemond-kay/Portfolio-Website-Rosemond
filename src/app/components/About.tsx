import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function About() {
  const tags = [
    'react',
    'typescript',
    'frontend development',
    'ui/ux',
    'web applications'
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-[#d4af37] mb-12">
        hi, i'm rosemond.
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-4 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#808080] text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bio */}
      <div className="space-y-6 text-[#808080] leading-relaxed">
        <p>
          frontend developer passionate about creating beautiful, accessible web experiences.
        </p>

        <p>
          i learn by building from first principles, diving deep into the details and refining until things just work. 
          i mostly work with <span className="text-[#d4af37]">react</span>, exploring{' '}
          <span className="text-[#d4af37]">frontend architecture</span> through projects i build entirely from scratch —{' '}
          <span className="text-[#d4af37]">component libraries</span>,{' '}
          <span className="text-[#d4af37]">design systems</span>,{' '}
          <span className="text-[#d4af37]">responsive layouts</span> and other
          things that help me understand what's actually going on under the hood.
        </p>

        <p className="pt-4">
          <span className="text-[#d4af37]">currently:</span> exploring modern frontend frameworks, design systems and web performance optimization.
        </p>

        <p className="pt-4">
          you can find my resume{' '}
          <a 
            href="#" 
            className="text-[#d4af37] hover:underline cursor-pointer"
          >
            here
          </a>
          .
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 pt-8">
        <a
          href="https://github.com/rosemondampomah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#d4af37] transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitter.com/rosemondampomah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#d4af37] transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://linkedin.com/in/rosemondampomah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#d4af37] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:rosemond@example.com"
          className="text-[#808080] hover:text-[#d4af37] transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
