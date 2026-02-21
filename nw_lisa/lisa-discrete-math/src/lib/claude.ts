// ---------------------------------------------------------------------------
// Anthropic API client configuration
// ---------------------------------------------------------------------------

import Anthropic from '@anthropic-ai/sdk';

/**
 * Shared Anthropic client instance.
 * The API key is read from the ANTHROPIC_API_KEY environment variable at
 * runtime. In Next.js this should be set in `.env.local` (never committed).
 */
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

/**
 * Model used for interactive chat (TA and Instructor modes).
 * Claude Sonnet provides the best balance of quality and speed for
 * conversational tutoring.
 */
export const CHAT_MODEL = 'claude-sonnet-4-20250514';

/**
 * Model used for automated grading of free-response answers.
 * Claude Haiku is fast and cost-effective for structured evaluation tasks.
 */
export const GRADING_MODEL = 'claude-haiku-4-5-20251001';
