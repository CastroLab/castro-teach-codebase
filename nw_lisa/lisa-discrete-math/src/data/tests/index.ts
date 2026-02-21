export interface TestPart {
  id: string;
  question: string;
  pointValue: number;
  correctAnswer: string;
  solution: string;
}

export interface UnitTest {
  id: string;
  title: string;
  unitId: string;
  timeMinutes: number;
  parts: TestPart[];
  totalPoints: number;
}

// Import and re-export all tests
import { day1Tests } from './day1';
import { day2Tests } from './day2';
import { day3Tests } from './day3';
import { day4Tests } from './day4';
import { day5Tests } from './day5';

export const allTests: UnitTest[] = [...day1Tests, ...day2Tests, ...day3Tests, ...day4Tests, ...day5Tests];

export function getUnitTest(testId: string): UnitTest | undefined {
  return allTests.find(t => t.id === testId);
}
