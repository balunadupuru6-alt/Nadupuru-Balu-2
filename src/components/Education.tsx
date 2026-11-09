import React from 'react';
import { GraduationCap, CheckCircle2, Compass } from 'lucide-react';

const TIMELINE_DATA = [
  {
    status: 'NOW',
    statusColor: 'text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border-[#0284c7]/25 dark:border-[#22d3ee]/25',
    title: 'B.Tech, Computer Science and Engineering (AI)',
    institution: 'Joy University, 1st year',
    description:
      'Pursuing core foundations in data structures, algorithms, discrete mathematics, and artificial intelligence engineering.',
    isCurrent: true,
  },
  {
    status: 'COMPLETED',
    statusColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    title: 'Intermediate',
    institution: 'Pre-university studies',
    description: 'Specialized in Mathematics, Physics, and Chemistry (MPC) with rigorous focus on problem solving.',
    isCurrent: false,
  },
  {
    status: 'COMPLETED',
    statusColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    title: '10th',
    institution: 'Secondary school',
    description: 'Completed foundational schooling with excellence in sciences and analytical reasoning.',
    isCurrent: false,
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border border-[#0284c7]/20 dark:border-[#22d3ee]/20">
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            My journey <span className="gradient-text">so far</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#2563eb] before:via-[#7c3aed] before:to-slate-300 dark:before:to-white/10">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Node dot */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-4 w-6 h-6 rounded-full flex items-center justify-center border transition-transform duration-300 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-white dark:bg-[#0b0e1c] border-[#0284c7] dark:border-[#22d3ee] text-[#0284c7] dark:text-[#22d3ee] shadow-sm dark:shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                    : 'bg-white dark:bg-[#0b0e1c] border-emerald-500 text-emerald-500'
                }`}
              >
                {item.isCurrent ? (
                  <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-3 group-hover:border-slate-300 dark:group-hover:border-white/25 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${item.statusColor}`}>
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#8b5cf6]" />
                    <span>Academic Journey</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] font-heading">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#0284c7] dark:text-[#22d3ee] mt-1">
                    {item.institution}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
