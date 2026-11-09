import React from 'react';
import { Terminal, Layout, Users, Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  'PYTHON',
  'HTML',
  'CSS',
  'GEN AI',
  'TEAMWORK',
  'PYTHON',
  'HTML',
  'CSS',
  'GEN AI',
  'TEAMWORK',
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border border-[#0284c7]/20 dark:border-[#22d3ee]/20">
            <span>SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            Tools I <span className="gradient-text">work with</span>
          </h2>
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="relative w-full py-4 overflow-hidden border-y border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-6 mx-4 text-sm sm:text-base font-bold tracking-widest text-slate-700 dark:text-white/70 hover:text-[var(--text)] transition-colors"
              >
                <span>{item}</span>
                <span className="text-[#2563eb] dark:text-[#2f6bff]">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1: Programming Languages */}
          <div className="glass-panel p-7 rounded-2xl space-y-4 hover:border-[#2563eb]/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb]">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] font-heading">Programming languages</h3>
            </div>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <span className="font-semibold text-[var(--text)] text-sm">Python</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#2563eb]/10 dark:bg-[#2f6bff]/15 text-[#2563eb] dark:text-[#2f6bff] font-medium border border-[#2563eb]/25 dark:border-[#2f6bff]/30">
                  fundamentals
                </span>
              </div>
            </div>
          </div>

          {/* Category 2: Technical Skills */}
          <div className="glass-panel p-7 rounded-2xl space-y-4 hover:border-[#7c3aed]/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed]">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] font-heading">Technical skills</h3>
            </div>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[var(--text)] text-sm block">Web development</span>
                  <span className="text-xs text-[var(--text-muted)]">HTML · CSS</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-white/10 text-[var(--text)] font-medium border border-slate-300/80 dark:border-white/10">
                  Responsive
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <span className="font-semibold text-[var(--text)] text-sm">Basic generative AI</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/15 text-[#7c3aed] dark:text-[#8b5cf6] font-medium border border-[#7c3aed]/25 dark:border-[#8b5cf6]/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Foundations</span>
                </span>
              </div>
            </div>
          </div>

          {/* Category 3: Other skills */}
          <div className="glass-panel p-7 rounded-2xl space-y-4 hover:border-[#0284c7]/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] font-heading">Other skills</h3>
            </div>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <span className="font-semibold text-[var(--text)] text-sm">Teamwork</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#0284c7]/10 dark:bg-[#22d3ee]/15 text-[#0284c7] dark:text-[#22d3ee] font-medium border border-[#0284c7]/25 dark:border-[#22d3ee]/30">
                  Collaborative
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
