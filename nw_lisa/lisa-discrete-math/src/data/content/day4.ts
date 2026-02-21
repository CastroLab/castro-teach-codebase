// Day 4 Content: Exam-Level Problems
// Logic Mastery, Number Systems Mastery, Sets Mastery, Combinatorics Mastery

import type { ContentPage } from './index';

export const day4Content: ContentPage[] = [
  // ═══════════════════════════════════════════════════════════
  // d4u1s1 — Complex Equivalence Proofs
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u1s1',
    title: 'Complex Equivalence Proofs',
    subtitle: 'Multi-step algebraic proofs using named laws',
    blocks: [
      {
        type: 'text',
        content:
          'At the exam level, you will be asked to prove equivalences that require multiple steps. The strategy is always the same: start with one side, apply named laws one at a time, and transform it into the other side.',
      },
      {
        type: 'definition',
        title: 'Laws Reference Card',
        content:
          '| Law | $\\wedge$ form | $\\vee$ form |\n|:---:|:---:|:---:|\n| Identity | $p \\wedge T \\equiv p$ | $p \\vee F \\equiv p$ |\n| Domination | $p \\wedge F \\equiv F$ | $p \\vee T \\equiv T$ |\n| Idempotent | $p \\wedge p \\equiv p$ | $p \\vee p \\equiv p$ |\n| Complement | $p \\wedge \\neg p \\equiv F$ | $p \\vee \\neg p \\equiv T$ |\n| Double Neg. | $\\neg(\\neg p) \\equiv p$ | -- |\n| Commutative | $p \\wedge q \\equiv q \\wedge p$ | $p \\vee q \\equiv q \\vee p$ |\n| Associative | $(p \\wedge q) \\wedge r \\equiv p \\wedge (q \\wedge r)$ | $(p \\vee q) \\vee r \\equiv p \\vee (q \\vee r)$ |\n| Distributive | $p \\wedge (q \\vee r) \\equiv (p \\wedge q) \\vee (p \\wedge r)$ | $p \\vee (q \\wedge r) \\equiv (p \\vee q) \\wedge (p \\vee r)$ |\n| Absorption | $p \\wedge (p \\vee q) \\equiv p$ | $p \\vee (p \\wedge q) \\equiv p$ |\n| De Morgan\'s | $\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$ | $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$ |\n| Material Imp. | $p \\to q \\equiv \\neg p \\vee q$ | -- |',
      },
      {
        type: 'example',
        title: 'Worked proof: $(p \\to q) \\wedge (p \\to r) \\equiv p \\to (q \\wedge r)$',
        content:
          'Starting with the left side:\n\n$(p \\to q) \\wedge (p \\to r)$\n$\\equiv (\\neg p \\vee q) \\wedge (\\neg p \\vee r)$ (Material Implication, twice)\n$\\equiv \\neg p \\vee (q \\wedge r)$ (Distributive Law, factoring $\\neg p$)\n$\\equiv p \\to (q \\wedge r)$ (Material Implication, in reverse)\n\nDone in 3 steps!',
      },
      {
        type: 'warning',
        title: 'Common proof pitfall',
        content:
          'Do NOT start with the full equivalence and manipulate both sides simultaneously. Start with ONE side and transform it into the other. Each line should follow from the previous by exactly one named law.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d4u2s1 — Mixed Base Problems
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u2s1',
    title: 'Mixed Base Problems',
    subtitle: 'Converting between arbitrary bases',
    blocks: [
      {
        type: 'text',
        content:
          'To convert from base $a$ to base $b$ when neither is 10:\n\n1. Convert from base $a$ to decimal (using positional notation).\n2. Convert from decimal to base $b$ (using repeated division).\n\nFor power-of-2 bases (2, 4, 8, 16), you can often go through binary more efficiently.',
      },
      {
        type: 'example',
        title: 'Base 5 to Base 3',
        content:
          'Convert $213_5$ to base 3.\n\nStep 1: $213_5 = 2 \\cdot 25 + 1 \\cdot 5 + 3 = 58_{10}$.\n\nStep 2: $58 \\div 3 = 19$ R $1$; $19 \\div 3 = 6$ R $1$; $6 \\div 3 = 2$ R $0$; $2 \\div 3 = 0$ R $2$.\n\nReading bottom to top: $2011_3$.\n\nCheck: $2 \\cdot 27 + 0 \\cdot 9 + 1 \\cdot 3 + 1 = 58$. Correct.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d4u3s3 — Three-Set Inclusion-Exclusion
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u3s3',
    title: 'Three-Set Inclusion-Exclusion',
    subtitle: 'The full formula for three overlapping sets',
    blocks: [
      {
        type: 'theorem',
        title: 'Inclusion-Exclusion for Three Sets',
        content:
          '$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$\n\nPattern: add singles, subtract pairs, add back the triple. This alternating sign pattern continues for more sets.',
      },
      {
        type: 'example',
        title: 'Survey problem',
        content:
          '200 students surveyed: 120 use Instagram, 95 use TikTok, 80 use Twitter, 50 use I and T, 35 use I and W, 30 use T and W, 15 use all three.\n\n$$|I \\cup T \\cup W| = 120 + 95 + 80 - 50 - 35 - 30 + 15 = 195$$\n\nStudents using none: $200 - 195 = 5$.',
      },
      {
        type: 'text',
        content:
          'To find "exactly one set":\n\nOnly $A = |A| - |A \\cap B| - |A \\cap C| + |A \\cap B \\cap C|$.\n\nThis subtracts those in any pairwise overlap but adds back those in all three (who were subtracted twice).',
      },
      {
        type: 'warning',
        title: 'Sign pattern',
        content:
          'Remember the alternating signs: $+$ singles, $-$ pairs, $+$ triples. A common mistake is forgetting to add back $|A \\cap B \\cap C|$.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d4u4s1 — SET Card Game Counting
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u4s1',
    title: 'SET Card Game Counting',
    subtitle: 'Combinatorics meets a real game',
    blocks: [
      {
        type: 'text',
        content:
          'In the SET card game, each card has 4 attributes, each with 3 possible values:\n- Color: red, green, purple\n- Shape: diamond, squiggle, oval\n- Number: 1, 2, 3\n- Shading: solid, striped, open',
      },
      {
        type: 'theorem',
        title: 'Total Cards',
        content:
          'Total cards in the deck: $3^4 = 81$.\n\nEach card corresponds to a unique 4-tuple from $\\{0, 1, 2\\}^4$.',
      },
      {
        type: 'definition',
        title: 'Valid SET',
        content:
          'Three cards form a valid SET if, for EACH attribute, the three values are either all the same or all different.\n\nExample: (red, diamond, 1, solid), (green, diamond, 2, striped), (purple, diamond, 3, open) is a valid SET because:\n- Colors: all different\n- Shapes: all same (diamond)\n- Numbers: all different\n- Shadings: all different',
      },
      {
        type: 'text',
        content:
          'Counting all possible 3-card selections: $\\binom{81}{3} = 85{,}320$.\n\nOf these, exactly $1{,}080$ are valid SETs. The proof involves choosing any 2 cards (which uniquely determines the third card needed for a valid SET), giving $\\binom{81}{2} / 1 = 3{,}240$ ordered pairs. Since each SET has $\\binom{3}{2} = 3$ such pairs, the number of SETs is $3{,}240 / 3 = 1{,}080$.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d4u4s2 — Advanced Combinations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u4s2',
    title: 'Advanced Combinations',
    subtitle: 'Committee problems and complementary counting',
    blocks: [
      {
        type: 'text',
        content:
          'Many exam problems require combining the multiplication principle with combinations. The key pattern: break the selection into independent stages, use the appropriate formula at each stage, then multiply.',
      },
      {
        type: 'example',
        title: 'Committee with constraints',
        content:
          'A committee of 5 from 6 men and 7 women must include exactly 3 women.\n\nStage 1: Choose 3 women from 7: $\\binom{7}{3} = 35$.\nStage 2: Choose 2 men from 6: $\\binom{6}{2} = 15$.\nTotal: $35 \\times 15 = 525$.',
      },
      {
        type: 'theorem',
        title: 'Complementary Counting',
        content:
          'When "at least one" or "at least $k$" appears:\n$$|\\text{at least 1}| = |\\text{total}| - |\\text{none}|$$\n\nThis is usually much easier than adding up all the cases of 1, 2, 3, etc.',
      },
      {
        type: 'example',
        title: 'At least 1 woman',
        content:
          'Committee of 5 from 6 men and 7 women, at least 1 woman.\n\nTotal: $\\binom{13}{5} = 1{,}287$.\nAll men: $\\binom{6}{5} = 6$.\nAt least 1 woman: $1{,}287 - 6 = 1{,}281$.',
      },
      {
        type: 'warning',
        title: 'P vs C check at every stage!',
        content:
          'When solving multi-stage problems, apply the P vs C decision at EACH stage independently. Choosing committee members is a combination (unordered). Assigning roles is a permutation (ordered). Be vigilant!',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d4u4s3 — Cross-Topic Problems
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd4u4s3',
    title: 'Cross-Topic Problems',
    subtitle: 'Connecting logic, sets, numbers, and counting',
    blocks: [
      {
        type: 'text',
        content:
          'Exam questions often combine multiple topics. The key is to identify which tools are needed and apply them in sequence.',
      },
      {
        type: 'example',
        title: 'Counting + Sets: Poker hands',
        content:
          'How many 5-card hands have exactly one pair?\n\n1. Choose the paired rank: $\\binom{13}{1} = 13$ (combination — choosing which rank).\n2. Choose 2 suits for the pair: $\\binom{4}{2} = 6$ (combination — choosing which suits).\n3. Choose 3 different ranks for singles: $\\binom{12}{3} = 220$ (combination — which ranks).\n4. Choose 1 suit for each single: $4^3 = 64$ (multiplication principle).\n\nTotal: $13 \\times 6 \\times 220 \\times 64 = 1{,}098{,}240$.',
      },
      {
        type: 'example',
        title: 'Logic + Counting: Passwords with constraints',
        content:
          'How many 4-character passwords use uppercase letters (26) for the first 2 and digits (10) for the last 2, with at least one vowel (A, E, I, O, U)?\n\nTotal passwords: $26^2 \\times 10^2 = 67{,}600$.\nPasswords with NO vowel: $21^2 \\times 10^2 = 44{,}100$.\nAt least one vowel: $67{,}600 - 44{,}100 = 23{,}500$.\n\nThis uses complementary counting (logic of negation applied to counting).',
      },
      {
        type: 'warning',
        title: 'Exam strategy for cross-topic problems',
        content:
          '1. Read the entire problem first.\n2. Identify which topics are involved.\n3. Break into stages or use complementary counting.\n4. At each stage, ask: P or C? Multiplication or addition?\n5. Show your work clearly — partial credit is available for correct methodology.',
      },
    ],
  },
];
