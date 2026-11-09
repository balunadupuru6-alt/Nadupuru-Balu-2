import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const TYPING_WORDS = ['AI expert', 'web developer', 'Python programmer', 'lifelong learner'];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TYPING_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIndex];

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        timeout = setTimeout(() => {}, 350);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border border-[#0284c7]/20 dark:border-[#22d3ee]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO 2026</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.08]">
            <span className="block">Balu</span>
            <span className="gradient-text block">Nadupuru</span>
          </h1>

          <div className="flex items-center gap-2 text-xl sm:text-3xl font-semibold text-[var(--text)]">
            <span className="opacity-80">Aspiring</span>
            <span className="gradient-text-cyan font-bold">{displayText}</span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#0284c7] dark:bg-[#22d3ee] animate-pulse" aria-hidden="true" />
          </div>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
            I’m a computer science student who loves learning new things and turning them into working web apps.
            My goal is to become an expert in Artificial Intelligence.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm text-[var(--text)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284c7] dark:bg-[#22d3ee] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284c7] dark:bg-[#22d3ee]" />
            </span>
            <span>B.Tech CSE (Artificial Intelligence), 1st year · Joy University</span>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm sm:text-base text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#1d4ed8] hover:to-[#6d28d9] transition-all duration-300 shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_28px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get in touch</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Stage & Monogram & Orbiting Skills */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#2563eb]/20 via-[#7c3aed]/15 to-[#0284c7]/20 blur-3xl opacity-75 dark:opacity-60" />

            {/* Rotating Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-transparent p-[2px] bg-gradient-to-tr from-[#2563eb] via-[#7c3aed] to-[#0284c7] animate-spin-slow opacity-90 shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:shadow-[0_0_40px_rgba(47,107,255,0.3)]" />

            {/* Inner Glass Sphere */}
            <div className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full bg-white/85 dark:bg-[#070913]/90 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[inset_0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-inner">
              <span className="text-6xl sm:text-8xl font-black tracking-tight gradient-text">
                BN
              </span>
            </div>

            {/* Orbiting Floating Chips */}
            {/* Chip 1: Python (Top Right) */}
            <div className="absolute -top-1 right-2 sm:right-4 float-1 z-20">
              <div className="px-3.5 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>Python</span>
              </div>
            </div>

            {/* Chip 2: Gen AI (Top Left) */}
            <div className="absolute top-16 -left-3 sm:-left-6 float-2 z-20">
              <div className="px-3.5 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                <span>Gen AI</span>
              </div>
            </div>

            {/* Chip 3: CSS (Middle Right) */}
            <div className="absolute top-36 -right-3 sm:-right-6 float-2 z-20">
              <div className="px-3.5 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                <span>CSS</span>
              </div>
            </div>

            {/* Chip 4: HTML (Bottom Left) */}
            <div className="absolute bottom-2 left-2 sm:left-4 float-1 z-20">
              <div className="px-3.5 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>HTML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
