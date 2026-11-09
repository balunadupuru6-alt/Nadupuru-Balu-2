import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative selection:bg-[#2563eb]/25 selection:text-[#2563eb]">
      {/* Background ambient glowing blurred blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Blue Blob */}
        <div className="absolute top-[8%] left-[12%] w-[480px] h-[480px] rounded-full bg-[#2563eb]/10 dark:bg-[#2f6bff]/15 blur-[120px] blob-1" />
        {/* Purple Blob */}
        <div className="absolute top-[42%] right-[8%] w-[520px] h-[520px] rounded-full bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/15 blur-[140px] blob-2" />
        {/* Cyan Accent Blob */}
        <div className="absolute bottom-[8%] left-[22%] w-[420px] h-[420px] rounded-full bg-[#0284c7]/08 dark:bg-[#22d3ee]/10 blur-[130px] blob-1" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
