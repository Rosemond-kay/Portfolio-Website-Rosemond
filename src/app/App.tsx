import { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'about' | 'experience' | 'projects'>('about');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a0a0a0] font-['JetBrains_Mono',monospace] p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setCurrentPage('about')}
            className={`text-base transition-colors ${
              currentPage === 'about' ? 'text-[#D6B4FC]' : 'text-[#808080] hover:text-[#D6B4FC]'
            }`}
          >
            about
          </button>
          <button
            onClick={() => setCurrentPage('experience')}
            className={`text-base transition-colors ${
              currentPage === 'experience' ? 'text-[#D6B4FC]' : 'text-[#808080] hover:text-[#D6B4FC]'
            }`}
          >
            experience
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`text-base transition-colors ${
              currentPage === 'projects' ? 'text-[#D6B4FC]' : 'text-[#808080] hover:text-[#D6B4FC]'
            }`}
          >
            projects
          </button>
        </nav>

        {/* Page Content */}
        <div className="animate-fadeIn">
          {currentPage === 'about' && <About />}
          {currentPage === 'experience' && <Experience />}
          {currentPage === 'projects' && <Projects />}
        </div>
      </div>
    </div>
  );
}
