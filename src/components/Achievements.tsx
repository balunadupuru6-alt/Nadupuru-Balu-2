import React from 'react';
import { Sparkles, Target, Rocket, Code2 } from 'lucide-react';

const MILESTONES = [
  {
    category: 'Academic Foundation',
    badge: 'Achieved',
    badgeType: 'achieved',
    title: 'B.Tech CSE (AI) Academic Admission & Foundation',
    meta: 'Computer Science & Engineering (AI) • Joy University, Year 1',
    desc: 'Secured admission to B.Tech Computer Science and Engineering (Artificial Intelligence) at Joy University, building a rigorous foundation in computational theory, algorithms, discrete mathematics, and software design principles.',
    icon: Sparkles,
  },
  {
    category: 'Technical Competence',
    badge: 'Achieved',
    badgeType: 'achieved',
    title: 'Python Scripting & Core Web Foundations',
    meta: 'Algorithmic & Markup Mastery • Python 3 Core',
    desc: 'Attained strong hands-on proficiency in Python programming, conditional logic, modular functions, exception handling, and clean responsive HTML5 & CSS3 layout design.',
    icon: Code2,
  },
  {
    category: 'Mastery Target',
    badge: 'Active Pursuit',
    badgeType: 'pursuit',
    title: 'Programming Expertise & Systems Mastery',
    meta: 'Elite Technical Craftsmanship • Aspiring AI Expert',
    desc: 'Deepening algorithmic problem-solving, advanced Python systems engineering, clean software architecture, and AI model orchestration to achieve true programming expertise.',
    icon: Target,
  },
  {
    category: 'North Star Goal',
    badge: 'Active Pursuit',
    badgeType: 'pursuit',
    title: 'Founding My Own AI & Tech Startup',
    meta: 'Entrepreneurial Vision & Scalable Products • Tech Founder',
    desc: 'Actively designing, validating, and building proprietary intelligent software products with the ambitious goal of launching my own high-impact technology startup.',
    icon: Rocket,
  },
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#7c3aed] dark:text-[#8b5cf6] bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/10 border border-[#7c3aed]/20 dark:border-[#8b5cf6]/20">
            <span>ACHIEVEMENTS AND CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            Milestones <span className="gradient-text">unlocked</span>
          </h2>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            const isAchieved = item.badgeType === 'achieved';
            return (
              <div
                key={idx}
                className="glass-panel p-7 rounded-3xl flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isAchieved
                          ? 'text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border border-[#0284c7]/25 dark:border-[#22d3ee]/25'
                          : 'text-[#7c3aed] dark:text-[#8b5cf6] bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/10 border border-[#7c3aed]/25 dark:border-[#8b5cf6]/25'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isAchieved ? 'bg-[#0284c7] dark:bg-[#22d3ee]' : 'bg-[#7c3aed] dark:bg-[#8b5cf6] animate-pulse'
                        }`}
                      />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 border ${
                        isAchieved
                          ? 'bg-[#0284c7]/10 border-[#0284c7]/20 text-[#0284c7] dark:text-[#22d3ee]'
                          : 'bg-[#7c3aed]/10 border-[#7c3aed]/20 text-[#7c3aed] dark:text-[#8b5cf6]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)] font-heading group-hover:text-[#2563eb] dark:group-hover:text-[#22d3ee] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">
                        {item.meta}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Quote Box */}
        <div className="glass-panel p-8 rounded-3xl text-center space-y-2 border border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-[#2563eb]/5 via-white/[0.02] to-[#7c3aed]/5">
          <div className="text-lg sm:text-2xl font-bold text-[var(--text)] font-heading tracking-wide">
            “Continuous Progress • Rigorous Fundamentals • Shipped Solutions”
          </div>
          <div className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl mx-auto">
            Every milestone represents committed dedication in coursework, hands-on software development, and
            real-world AI applications.
          </div>
        </div>
      </div>
    </section>
  );
};
