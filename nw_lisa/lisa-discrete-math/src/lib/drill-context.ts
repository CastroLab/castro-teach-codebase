'use client'

import { create } from 'zustand'

interface DrillContextQuestion {
  id: string
  question: string
  type: string
}

interface DrillContextState {
  drillId: string | null
  drillTitle: string | null
  subunitId: string | null
  questions: DrillContextQuestion[]
  currentQuestionIndex: number
  currentQuestion: DrillContextQuestion | null
  setDrillContext: (ctx: {
    drillId: string
    drillTitle: string
    subunitId: string
    questions: DrillContextQuestion[]
  }) => void
  setCurrentQuestion: (index: number, question: DrillContextQuestion) => void
  clearContext: () => void
}

export const useDrillContextStore = create<DrillContextState>((set) => ({
  drillId: null,
  drillTitle: null,
  subunitId: null,
  questions: [],
  currentQuestionIndex: 0,
  currentQuestion: null,
  setDrillContext: (ctx) =>
    set({
      drillId: ctx.drillId,
      drillTitle: ctx.drillTitle,
      subunitId: ctx.subunitId,
      questions: ctx.questions,
      currentQuestionIndex: 0,
      currentQuestion: ctx.questions[0] ?? null,
    }),
  setCurrentQuestion: (index, question) =>
    set({
      currentQuestionIndex: index,
      currentQuestion: question,
    }),
  clearContext: () =>
    set({
      drillId: null,
      drillTitle: null,
      subunitId: null,
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: null,
    }),
}))
