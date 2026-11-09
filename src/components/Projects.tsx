import React, { useState } from 'react';
import { ArrowUpRight, Utensils, Award } from 'lucide-react';
import { RestaurantModal } from './RestaurantModal';
import { ResultCardModal } from './ResultCardModal';

export const Projects: React.FC = () => {
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [isResultCardOpen, setIsResultCardOpen] = useState(false);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#2563eb] dark:text-[#2f6bff] bg-[#2563eb]/10 dark:bg-[#2f6bff]/10 border border-[#2563eb]/20 dark:border-[#2f6bff]/20">
            <span>PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            Things I’ve <span className="gradient-text">built</span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 01 */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between group hover:border-[#2563eb]/50 transition-all duration-300 relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-300/80 dark:text-white/20 font-heading">
                  01
                </span>
                <div className="p-3 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20 group-hover:scale-110 transition-transform">
                  <Utensils className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text)] font-heading group-hover:text-[#2563eb] dark:group-hover:text-[#22d3ee] transition-colors">
                Restaurant Table Booking App
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                A web app where customers book a restaurant table by choosing a date, time slot and number of guests.
                It validates the details, stops a time slot from being overbooked, and lists upcoming bookings with a
                cancel option.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {['HTML', 'CSS', 'Python'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setIsRestaurantOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#1d4ed8] hover:to-[#6d28d9] transition-all shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Open live demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project 02 */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between group hover:border-[#7c3aed]/50 transition-all duration-300 relative overflow-hidden md:translate-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-300/80 dark:text-white/20 font-heading">
                  02
                </span>
                <div className="p-3 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text)] font-heading group-hover:text-[#7c3aed] transition-colors">
                Student Result Card Generator
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                A web app where a student’s name, roll number and marks in five subjects are entered to produce a
                result card. It shows the total, percentage, grade and pass or fail status, with a bar for each
                subject’s marks.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {['HTML', 'CSS', 'Python'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setIsResultCardOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#0284c7] hover:from-[#6d28d9] hover:to-[#0369a1] transition-all shadow-[0_4px_16px_rgba(124,58,237,0.25)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Open live demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <RestaurantModal isOpen={isRestaurantOpen} onClose={() => setIsRestaurantOpen(false)} />
      <ResultCardModal isOpen={isResultCardOpen} onClose={() => setIsResultCardOpen(false)} />
    </section>
  );
};
