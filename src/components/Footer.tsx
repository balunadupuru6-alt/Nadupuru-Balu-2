import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 border-t border-slate-200 dark:border-white/10 text-xs text-[var(--text-muted)] bg-white/70 dark:bg-[#05060a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>© 2026 Balu Nadupuru</div>

        <div className="flex items-center gap-3 font-medium">
          <a
            href="https://github.com/balunadupuru6-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <a
            href="https://www.linkedin.com/in/nadupuru-balu-60159441a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=balunadupuru6@gmail.com&su=Hello%20Balu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text)] transition-colors"
          >
            Email
          </a>
        </div>

        <div>B.Tech CSE (AI) · Joy University</div>
      </div>
    </footer>
  );
};
