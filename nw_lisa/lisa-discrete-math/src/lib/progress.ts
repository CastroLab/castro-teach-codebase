// ---------------------------------------------------------------------------
// Progress tracking store (zustand + localStorage persistence)
// ---------------------------------------------------------------------------
// NOTE: This file exports a React hook (`useProgressStore`) and must only be
// imported from client components ("use client").
// ---------------------------------------------------------------------------

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DrillProgress {
  completed: boolean;
  score: number;
  total: number;
  answers: Record<string, string>;
}

export interface TestProgress {
  completed: boolean;
  score: number;
  totalPoints: number;
  answers: Record<string, string>;
}

export interface ProgressState {
  drills: Record<string, DrillProgress>;
  tests: Record<string, TestProgress>;
  completedSubunits: string[];

  // Actions
  completeDrill: (
    drillId: string,
    score: number,
    total: number,
    answers: Record<string, string>,
  ) => void;
  completeTest: (
    testId: string,
    score: number,
    totalPoints: number,
    answers: Record<string, string>,
  ) => void;
  markSubunitComplete: (subunitId: string) => void;
  /** Returns a number between 0 and 1 representing fraction of subunits completed. */
  getUnitProgress: (unitSubunitIds: string[]) => number;
  /** Returns a number between 0 and 1 representing fraction of subunits completed for a given day. */
  getDayProgress: (daySubunitIds: string[]) => number;
  resetProgress: () => void;
}

// ---------------------------------------------------------------------------
// Initial / empty state (reused by resetProgress)
// ---------------------------------------------------------------------------

const INITIAL_STATE = {
  drills: {} as Record<string, DrillProgress>,
  tests: {} as Record<string, TestProgress>,
  completedSubunits: [] as string[],
};

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      // ------------------------------------------------------------------
      // completeDrill
      // ------------------------------------------------------------------
      completeDrill: (drillId, score, total, answers) =>
        set((state) => ({
          drills: {
            ...state.drills,
            [drillId]: { completed: true, score, total, answers },
          },
        })),

      // ------------------------------------------------------------------
      // completeTest
      // ------------------------------------------------------------------
      completeTest: (testId, score, totalPoints, answers) =>
        set((state) => ({
          tests: {
            ...state.tests,
            [testId]: { completed: true, score, totalPoints, answers },
          },
        })),

      // ------------------------------------------------------------------
      // markSubunitComplete
      // ------------------------------------------------------------------
      markSubunitComplete: (subunitId) =>
        set((state) => ({
          completedSubunits: state.completedSubunits.includes(subunitId)
            ? state.completedSubunits
            : [...state.completedSubunits, subunitId],
        })),

      // ------------------------------------------------------------------
      // getUnitProgress — proportion of a unit's subunits that are complete
      // ------------------------------------------------------------------
      getUnitProgress: (unitSubunitIds) => {
        if (unitSubunitIds.length === 0) return 0;
        const { completedSubunits } = get();
        const done = unitSubunitIds.filter((id) =>
          completedSubunits.includes(id),
        ).length;
        return done / unitSubunitIds.length;
      },

      // ------------------------------------------------------------------
      // getDayProgress — proportion of a day's subunits that are complete
      // ------------------------------------------------------------------
      getDayProgress: (daySubunitIds) => {
        if (daySubunitIds.length === 0) return 0;
        const { completedSubunits } = get();
        const done = daySubunitIds.filter((id) =>
          completedSubunits.includes(id),
        ).length;
        return done / daySubunitIds.length;
      },

      // ------------------------------------------------------------------
      // resetProgress — wipe everything and start fresh
      // ------------------------------------------------------------------
      resetProgress: () => set(INITIAL_STATE),
    }),
    {
      name: 'lisa-discrete-math-progress', // localStorage key
    },
  ),
);
