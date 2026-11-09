import React from 'react';
import { GraduationCap, FolderGit2, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#7c3aed] dark:text-[#8b5cf6] bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/10 border border-[#7c3aed]/20 dark:border-[#8b5cf6]/20">
              <span>ABOUT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
              Curious first. <span className="gradient-text">Builder always.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                I’m interested in learning new things and gaining knowledge, and I like turning what I learn
                into something people can click, type into and use.
              </p>
              <p>
                I want to sharpen my technical and communication skills, and grow step by step into an expert in
                Artificial Intelligence.
              </p>
            </div>
          </div>

          {/* Right Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* Card 1 */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/40">
              <div className="p-3 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--text)] font-heading">1st year</div>
                <div className="text-sm text-[var(--text-muted)] mt-0.5">B.Tech CSE (AI), Joy University</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/40 sm:ml-4">
              <div className="p-3 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed]">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--text)] font-heading">2 projects</div>
                <div className="text-sm text-[var(--text-muted)] mt-0.5">Built with HTML, CSS and Python</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0284c7]/40">
              <div className="p-3 rounded-xl bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7]">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--text)] font-heading">AI focus</div>
                <div className="text-sm text-[var(--text-muted)] mt-0.5">Learning generative AI basics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
