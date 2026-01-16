import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function About() {
  const tags = [
    'react/react-native',
    'typescript',
    'frontend development',
    'ui/ux',
    'web applications',
    'mobile applications'
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-[#D6B4FC] mb-12">
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
    frontend developer focused on building thoughtful, accessible and reliable web and mobile experiences.
  </p>

  <p>
    i approach every problem as a system to be understood before it’s built — clarifying requirements, mapping flows
    and breaking ideas into small, testable pieces. i mostly work with{' '}
    <span className="text-[#D6B4FC]">react</span>, exploring{' '}
    <span className="text-[#D6B4FC]">frontend architecture</span> through projects i design and build from scratch —{' '}
    <span className="text-[#D6B4FC]">component libraries</span>,{' '}
    <span className="text-[#D6B4FC]">design systems</span>,{' '}
    <span className="text-[#D6B4FC]">responsive layouts</span> and performance-aware interfaces that reveal how things
    actually work under the hood.
  </p>

  <p>
    i value clarity over cleverness: readable code, descriptive naming, small focused functions and deliberate
    abstractions. when something breaks, i treat debugging like an experiment — isolating variables, forming
    hypotheses and validating them until the root cause is obvious.
  </p>

  <p>
    i grow by shipping small, well-scoped projects, seeking feedback early, reading production-grade code and
    continuously refining my process through testing, documentation and iteration.
  </p>

  <p className="pt-4">
    <span className="text-[#D6B4FC]">currently:</span> exploring modern frontend frameworks, scalable design systems and web performance optimization.
  </p>

  <p className="pt-4">
    you can find my resume{' '}
    <a
      href="\assets\Rosemond_Ampomah_Software_Developer__CV.pdf"
      className="text-[#D6B4FC] hover:underline cursor-pointer"
    >
      here
    </a>
    .
  </p>
</div>


      {/* Social Icons */}
      <div className="flex gap-6 pt-8">
        <a
          href="https://github.com/rosemond-kay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#D6B4FC] transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitter.com/_ewura_abena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#D6B4FC] transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://linkedin.com/in/rosemondampomah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#808080] hover:text-[#D6B4FC] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:amprosemond@gmail.com"
          className="text-[#808080] hover:text-[#D6B4FC] transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
