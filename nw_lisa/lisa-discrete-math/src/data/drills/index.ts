// Lisa's Discrete Math — Drill Question Bank
// Central types and aggregated exports for all drill data

export type QuestionType =
  | 'multiple-choice'
  | 'free-response'
  | 'truth-table'
  | 'conversion'
  | 'set-operation'
  | 'matching';

export interface DrillQuestion {
  id: string;
  type: QuestionType;
  question: string; // Can contain LaTeX using $...$ for inline and $$...$$ for display
  options?: string[]; // For multiple-choice
  correctAnswer: string; // LaTeX or plain text
  explanation: string; // Detailed explanation with LaTeX
  hint?: string; // Optional hint
  difficulty: 1 | 2 | 3; // 1=easy, 2=medium, 3=hard
  // Truth table specific fields
  variables?: string[]; // e.g. ['p', 'q']
  expression?: string; // LaTeX expression for the truth table header
  correctTableValues?: string[][]; // e.g. [['F'], ['T'], ['F'], ['F']] — one row per input combo
}

export interface DrillSet {
  id: string;
  title: string;
  subunitId: string;
  questions: DrillQuestion[];
}

// Re-export all day drill sets
export { day1Drills } from './day1';
export { day2Drills } from './day2';
export { day3Drills } from './day3';
export { day4Drills } from './day4';
export { day5Drills } from './day5';

// Aggregated lookup helpers
import { day1Drills } from './day1';
import { day2Drills } from './day2';
import { day3Drills } from './day3';
import { day4Drills } from './day4';
import { day5Drills } from './day5';

export const allDrills: DrillSet[] = [
  ...day1Drills,
  ...day2Drills,
  ...day3Drills,
  ...day4Drills,
  ...day5Drills,
];

/** Look up a drill set by its ID (e.g., 'drill-d1u1s1') */
export function getDrillSetById(id: string): DrillSet | undefined {
  return allDrills.find((d) => d.id === id);
}

/** Get all drill sets for a given subunit */
export function getDrillsBySubunit(subunitId: string): DrillSet[] {
  return allDrills.filter((d) => d.subunitId === subunitId);
}
