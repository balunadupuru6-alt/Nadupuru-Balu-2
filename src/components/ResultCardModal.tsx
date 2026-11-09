import React, { useState } from 'react';
import { X, ExternalLink, GraduationCap, Award, CheckCircle2, XCircle } from 'lucide-react';
import { computeResultCard, ResultCardComputation, DEFAULT_SUBJECTS } from '../utils/resultCard';

interface ResultCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResultCardModal: React.FC<ResultCardModalProps> = ({ isOpen, onClose }) => {
  const [studentName, setStudentName] = useState('Balu Nadupuru');
  const [rollNumber, setRollNumber] = useState('26JOYCS042');
  const [scores, setScores] = useState<Record<string, number>>({
    'm-math': 94,
    'm-ai': 96,
    'm-py': 91,
    'm-ds': 88,
    'm-eng': 85,
  });

  const [result, setResult] = useState<ResultCardComputation>(() =>
    computeResultCard('Balu Nadupuru', '26JOYCS042', {
      'm-math': 94,
      'm-ai': 96,
      'm-py': 91,
      'm-ds': 88,
      'm-eng': 85,
    })
  );

  if (!isOpen) return null;

  const handleScoreChange = (id: string, val: string) => {
    const num = val === '' ? 0 : parseInt(val, 10);
    setScores((prev) => ({
      ...prev,
      [id]: isNaN(num) ? 0 : Math.max(0, Math.min(100, num)),
    }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const computed = computeResultCard(studentName, rollNumber, scores);
    setResult(computed);
  };

  const handleLoadSample = () => {
    setStudentName('Balu Nadupuru');
    setRollNumber('26JOYCS042');
    const sampleScores = {
      'm-math': 98,
      'm-ai': 95,
      'm-py': 96,
      'm-ds': 92,
      'm-eng': 89,
    };
    setScores(sampleScores);
    setResult(computeResultCard('Balu Nadupuru', '26JOYCS042', sampleScores));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0b0e1c] border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#0284c7] dark:text-[#22d3ee] uppercase block">
              Interactive Live Demo
            </span>
            <h3 id="result-modal-title" className="text-xl sm:text-2xl font-bold text-[var(--text)] font-heading">
              Student Result Card Generator
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo"
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-slate-200 dark:hover:bg-white/15 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#7c3aed] dark:text-[#8b5cf6] bg-[#7c3aed]/10 dark:bg-[#8b5cf6]/10 border border-[#7c3aed]/25 dark:border-[#8b5cf6]/25">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] dark:bg-[#8b5cf6] animate-pulse" />
              <span>Live Interactive Simulation</span>
            </span>

            <a
              href="https://github.com/balunadupuru6-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
            >
              <span>GitHub @balunadupuru6-alt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Enter the student’s name, roll number, and marks across 5 subjects (0–100) to compute totals, grade,
            pass/fail status, and generate visual performance bars.
          </p>

          {/* Input Form */}
          <form onSubmit={handleGenerate} className="space-y-4 bg-slate-50/80 dark:bg-white/[0.02] p-5 rounded-2xl border border-slate-200/80 dark:border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="stud-name" className="text-xs font-medium text-[var(--text-muted)]">
                  Student Name
                </label>
                <input
                  id="stud-name"
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="stud-roll" className="text-xs font-medium text-[var(--text-muted)]">
                  Roll Number
                </label>
                <input
                  id="stud-roll"
                  type="text"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider block">
                Subject Marks (0 - 100)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DEFAULT_SUBJECTS.map((sub) => (
                  <div key={sub.id} className="space-y-1">
                    <label htmlFor={sub.id} className="text-xs text-[var(--text-muted)] flex justify-between">
                      <span>{sub.name}</span>
                      <span className="text-[var(--text)] font-mono font-semibold">{scores[sub.id] || 0}</span>
                    </label>
                    <input
                      id={sub.id}
                      type="number"
                      min="0"
                      max="100"
                      value={scores[sub.id] !== undefined ? scores[sub.id] : ''}
                      onChange={(e) => handleScoreChange(sub.id, e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#1d4ed8] hover:to-[#6d28d9] transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Generate Result Card ↗
              </button>
              <button
                type="button"
                onClick={handleLoadSample}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300/80 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 transition-colors cursor-pointer"
              >
                Load Sample Marks
              </button>
            </div>
          </form>

          {/* Generated Result Card Display */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-5">
            {/* Result Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[var(--text)] font-heading">
                  {result.studentName}
                </div>
                <div className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#22d3ee]" />
                  <span>
                    Roll No: <strong className="text-[var(--text)]">{result.rollNumber}</strong> · Joy University
                  </span>
                </div>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  result.isPassed
                    ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30'
                    : 'text-rose-700 dark:text-rose-300 bg-rose-500/15 border border-rose-500/30'
                }`}
              >
                {result.isPassed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                )}
                <span>● Status: {result.isPassed ? 'PASS' : 'FAIL'}</span>
              </div>
            </div>

            {/* Subject Progress Bars */}
            <div className="space-y-3">
              {result.subjectScores.map((s) => (
                <div key={s.id} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text)] font-medium">{s.name}</span>
                    <span className="text-[#0284c7] dark:text-[#22d3ee] font-bold font-mono">{s.score}/100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] transition-all duration-500 ease-out"
                      style={{ width: `${s.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Result Summary Grid */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="text-base sm:text-xl font-bold text-[var(--text)] font-heading">
                  {result.totalMarks}/{result.maxMarks}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Total Marks</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="text-base sm:text-xl font-bold text-[var(--text)] font-heading">
                  {result.percentage.toFixed(1)}%
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Percentage</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="text-base sm:text-xl font-bold text-[#0284c7] dark:text-[#22d3ee] font-heading flex items-center justify-center gap-1">
                  <Award className="w-4 h-4 text-[#0284c7] dark:text-[#22d3ee]" />
                  <span>{result.grade}</span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Overall Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
