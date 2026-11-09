export interface SubjectScore {
  id: string;
  name: string;
  score: number;
}

export interface ResultCardComputation {
  studentName: string;
  rollNumber: string;
  totalMarks: number;
  maxMarks: number;
  percentage: number;
  isPassed: boolean;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  subjectScores: SubjectScore[];
}

export const DEFAULT_SUBJECTS = [
  { id: 'm-math', name: 'Mathematics & Logic' },
  { id: 'm-ai', name: 'AI Foundations' },
  { id: 'm-py', name: 'Python Programming' },
  { id: 'm-ds', name: 'Data Structures' },
  { id: 'm-eng', name: 'English & Communication' },
];

export function computeResultCard(
  studentName: string,
  rollNumber: string,
  rawScores: Record<string, number | string>
): ResultCardComputation {
  let total = 0;
  let anyFailed = false;
  const subjectScores: SubjectScore[] = [];

  for (const sub of DEFAULT_SUBJECTS) {
    const raw = rawScores[sub.id];
    let score = typeof raw === 'number' ? raw : parseInt(String(raw || '0'), 10);
    if (isNaN(score)) score = 0;
    score = Math.max(0, Math.min(100, score));

    if (score < 35) {
      anyFailed = true;
    }

    total += score;
    subjectScores.push({
      id: sub.id,
      name: sub.name,
      score,
    });
  }

  const maxMarks = DEFAULT_SUBJECTS.length * 100;
  const percentage = (total / maxMarks) * 100;
  const isPassed = !anyFailed && percentage >= 40;

  let grade: ResultCardComputation['grade'] = 'F';
  if (isPassed) {
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else grade = 'D';
  }

  return {
    studentName: studentName.trim() || 'Student',
    rollNumber: rollNumber.trim() || 'N/A',
    totalMarks: total,
    maxMarks,
    percentage: Math.round(percentage * 10) / 10,
    isPassed,
    grade,
    subjectScores,
  };
}
