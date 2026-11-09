import test from 'node:test';
import assert from 'node:assert/strict';
import { computeResultCard } from './resultCard';

test('computeResultCard correctly calculates grade A+ for high scores', () => {
  const result = computeResultCard('Balu Nadupuru', '26JOYCS042', {
    'm-math': 94,
    'm-ai': 96,
    'm-py': 91,
    'm-ds': 88,
    'm-eng': 85,
  });

  assert.equal(result.studentName, 'Balu Nadupuru');
  assert.equal(result.rollNumber, '26JOYCS042');
  assert.equal(result.totalMarks, 454);
  assert.equal(result.maxMarks, 500);
  assert.equal(result.percentage, 90.8);
  assert.equal(result.isPassed, true);
  assert.equal(result.grade, 'A+');
});

test('computeResultCard flags FAIL if any subject is below 35', () => {
  const result = computeResultCard('Test Student', '123', {
    'm-math': 100,
    'm-ai': 100,
    'm-py': 100,
    'm-ds': 100,
    'm-eng': 30, // below 35 pass threshold
  });

  assert.equal(result.isPassed, false);
  assert.equal(result.grade, 'F');
});

test('computeResultCard clamps scores between 0 and 100', () => {
  const result = computeResultCard('Boundary Student', '999', {
    'm-math': 150, // clamped to 100
    'm-ai': -20,  // clamped to 0
    'm-py': 50,
    'm-ds': 50,
    'm-eng': 50,
  });

  assert.equal(result.subjectScores.find((s) => s.id === 'm-math')?.score, 100);
  assert.equal(result.subjectScores.find((s) => s.id === 'm-ai')?.score, 0);
  assert.equal(result.isPassed, false); // m-ai is 0 < 35
});
