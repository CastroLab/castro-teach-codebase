// ---------------------------------------------------------------------------
// Grading utilities — exact match, fuzzy (Claude), multiple-choice
// ---------------------------------------------------------------------------

import { anthropic, GRADING_MODEL } from './claude';

// ---------------------------------------------------------------------------
// LaTeX normalisation
// ---------------------------------------------------------------------------

/**
 * Normalise a LaTeX string so that semantically equivalent expressions can be
 * compared with a simple string equality check.
 *
 * Handles:
 * - whitespace collapsing & trimming
 * - common fraction forms: \frac{1}{2} -> 1/2
 * - curly-brace removal around single characters: {x} -> x
 * - \left / \right removal
 * - \cdot -> *
 * - \times -> *
 * - dollar-sign delimiters stripped
 * - lowercased
 */
export function normalizeLatex(latex: string): string {
  let s = latex;

  // Strip surrounding dollar-sign delimiters (inline & display)
  s = s.replace(/^\$\$|\$\$$/g, '');
  s = s.replace(/^\$|\$$/g, '');

  // Trim & collapse whitespace
  s = s.trim().replace(/\s+/g, ' ');

  // Remove \left and \right
  s = s.replace(/\\left/g, '');
  s = s.replace(/\\right/g, '');

  // \frac{a}{b} -> (a)/(b)
  s = s.replace(/\\frac\s*\{([^}]*)\}\s*\{([^}]*)\}/g, '($1)/($2)');

  // \cdot and \times -> *
  s = s.replace(/\\cdot/g, '*');
  s = s.replace(/\\times/g, '*');

  // Remove curly braces around single characters: {x} -> x
  s = s.replace(/\{([a-zA-Z0-9])\}/g, '$1');

  // Lowercase for case-insensitive comparison
  s = s.toLowerCase();

  // Final whitespace pass
  s = s.replace(/\s+/g, '').trim();

  return s;
}

// ---------------------------------------------------------------------------
// Exact-match grading
// ---------------------------------------------------------------------------

/**
 * Grade by exact match after normalisation.
 * Both values are trimmed, lowercased, whitespace-collapsed, and — if they
 * look like LaTeX — run through `normalizeLatex` before comparison.
 */
export function gradeExactMatch(
  userAnswer: string,
  correctAnswer: string,
): boolean {
  const normalize = (raw: string): string => {
    let s = raw.trim().toLowerCase();

    // Collapse whitespace
    s = s.replace(/\s+/g, ' ');

    // Remove spaces around common operators
    s = s.replace(/\s*([=+\-*/^<>])\s*/g, '$1');

    // If it contains any LaTeX commands, normalise as LaTeX too
    if (/\\[a-zA-Z]/.test(s) || /\$/.test(raw)) {
      s = normalizeLatex(s);
    }

    return s;
  };

  return normalize(userAnswer) === normalize(correctAnswer);
}

// ---------------------------------------------------------------------------
// Multiple-choice grading
// ---------------------------------------------------------------------------

/**
 * Compare a user's selected option against the correct one.
 * Accepts bare letters ("a", "B") as well as prefixed forms ("A)", "a.").
 */
export function gradeMultipleChoice(
  userAnswer: string,
  correctAnswer: string,
): boolean {
  const extract = (s: string): string =>
    s
      .trim()
      .replace(/^[(\s]*/, '')
      .replace(/[).\s]*$/, '')
      .toLowerCase()
      .charAt(0);

  return extract(userAnswer) === extract(correctAnswer);
}

// ---------------------------------------------------------------------------
// Fuzzy grading via Claude (free-response / proof-style answers)
// ---------------------------------------------------------------------------

export interface FuzzyGradeResult {
  correct: boolean;
  feedback: string;
}

/**
 * Use Claude Haiku to evaluate a free-response answer.
 *
 * The model receives the original question, the reference correct answer, and
 * the student's response. It returns a JSON object with `correct` (boolean)
 * and `feedback` (string).
 */
export async function gradeFuzzyWithClaude(
  question: string,
  correctAnswer: string,
  userAnswer: string,
): Promise<FuzzyGradeResult> {
  const systemPrompt = `You are a grading assistant for a Discrete Mathematics course (CS 5002).
Your job is to determine whether a student's answer is correct and provide brief feedback.

You MUST respond with valid JSON in exactly this format and nothing else:
{"correct": true or false, "feedback": "one or two sentences of feedback"}

Grading guidelines:
- Accept answers that are mathematically equivalent even if notation differs
- Accept correct reasoning even if the final form differs from the reference answer
- For proofs, check logical validity — the student does not need to match the
  reference proof word-for-word
- Be generous with minor notation differences but strict on mathematical correctness
- Keep feedback encouraging and constructive`;

  const userPrompt = `## Question
${question}

## Reference correct answer
${correctAnswer}

## Student's answer
${userAnswer}

Grade the student's answer. Respond ONLY with the JSON object.`;

  try {
    const message = await anthropic.messages.create({
      model: GRADING_MODEL,
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    });

    // Extract text from the response
    const text =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // Parse JSON from the response — be lenient about markdown fences
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        correct: false,
        feedback:
          'Unable to evaluate your answer automatically. Please review it with your TA.',
      };
    }

    const parsed = JSON.parse(jsonMatch[0]) as FuzzyGradeResult;

    return {
      correct: Boolean(parsed.correct),
      feedback: parsed.feedback ?? 'No feedback available.',
    };
  } catch (error) {
    console.error('Fuzzy grading error:', error);
    return {
      correct: false,
      feedback:
        'There was an error grading your answer. Please try again or ask your TA.',
    };
  }
}
