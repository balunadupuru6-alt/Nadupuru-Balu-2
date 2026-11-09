import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [quickMsg, setQuickMsg] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const emailAddress = 'balunadupuru6@gmail.com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Hello%20Balu`;
  const linkedinUrl = 'https://www.linkedin.com/in/nadupuru-balu-60159441a';
  const githubUrl = 'https://github.com/balunadupuru6-alt';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.name.trim() || !quickMsg.message.trim()) {
      setSentStatus('Please provide your name and message.');
      return;
    }

    const subject = encodeURIComponent(`Message from ${quickMsg.name} via Portfolio`);
    const body = encodeURIComponent(
      `From: ${quickMsg.name} (${quickMsg.email || 'No email provided'})\n\nMessage:\n${quickMsg.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, '_blank');
    setSentStatus('Thank you! Opening your email composer with the drafted message...');
    setQuickMsg({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-4xl w-full mx-auto">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl text-center space-y-8 relative overflow-hidden">
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#2563eb]/15 via-[#7c3aed]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow & Title */}
          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0284c7] dark:text-[#22d3ee] block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] font-heading">
              Let’s build something <span className="gradient-text">intelligent</span>.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Have an idea, a question or an opportunity? I’d love to hear from you.
            </p>
          </div>

          {/* Primary Email Link + Copy Chip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#1d4ed8] hover:to-[#6d28d9] transition-all duration-300 shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_28px_rgba(124,58,237,0.4)] hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>{emailAddress}</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Action Icon Buttons */}
          <div className="flex items-center justify-center gap-4 relative z-10 pt-2">
            {/* Gmail compose button */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email to Balu Nadupuru via Gmail"
              className="w-12 h-12 rounded-full glass-panel text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[#2563eb] hover:bg-[#2563eb]/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Balu Nadupuru LinkedIn Profile"
              className="w-12 h-12 rounded-full glass-panel text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[#0284c7] hover:bg-[#0284c7]/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Balu Nadupuru GitHub Profile"
              className="w-12 h-12 rounded-full glass-panel text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Message Box */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 text-left relative z-10 max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#22d3ee]" />
                <span>Quick Note to Balu</span>
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">Direct mail composer</span>
            </div>

            <form onSubmit={handleQuickSend} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={quickMsg.name}
                  onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--text)] placeholder-slate-400 dark:placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#2563eb]"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={quickMsg.email}
                  onChange={(e) => setQuickMsg({ ...quickMsg, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--text)] placeholder-slate-400 dark:placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              <textarea
                rows={3}
                placeholder="What would you like to discuss or build together?"
                value={quickMsg.message}
                onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--text)] placeholder-slate-400 dark:placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#2563eb] resize-none"
                required
              />

              <div className="flex items-center justify-between">
                {sentStatus ? (
                  <span className="text-xs text-[#2563eb] dark:text-[#22d3ee] font-medium">{sentStatus}</span>
                ) : (
                  <span className="text-[11px] text-[var(--text-muted)]">Opens Gmail with your message</span>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-[var(--text)] bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
