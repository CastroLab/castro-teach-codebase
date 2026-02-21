// Day 4 Drills: Mastery
// Advanced Logic, Number Systems Depth, Complex Sets, Hard Counting

import type { DrillSet } from './index';

export const day4Drills: DrillSet[] = [
  // ═══════════════════════════════════════════════════════════
  // D4 U1 S1 — Complex Equivalence Proofs
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u1s1',
    title: 'Complex Equivalence Proofs',
    subunitId: 'd4u1s1',
    questions: [
      {
        id: 'd4u1s1-q1',
        type: 'free-response',
        question:
          'Prove algebraically: $(p \\to q) \\lor (p \\to r) \\equiv p \\to (q \\lor r)$.',
        correctAnswer:
          '$(p \\to q) \\lor (p \\to r) \\equiv (\\neg p \\lor q) \\lor (\\neg p \\lor r) \\equiv \\neg p \\lor q \\lor \\neg p \\lor r \\equiv \\neg p \\lor (q \\lor r) \\equiv p \\to (q \\lor r)$',
        explanation:
          'Step 1: Replace conditionals with $\\neg p \\lor q$ and $\\neg p \\lor r$. Step 2: By associativity/commutativity of $\\lor$: $\\neg p \\lor q \\lor \\neg p \\lor r$. Step 3: Idempotent law ($\\neg p \\lor \\neg p \\equiv \\neg p$): $\\neg p \\lor q \\lor r$. Step 4: Rewrite as conditional: $p \\to (q \\lor r)$.',
        difficulty: 3,
      },
      {
        id: 'd4u1s1-q2',
        type: 'free-response',
        question:
          'Prove: $\\neg(p \\leftrightarrow q) \\equiv p \\oplus q$ (negation of biconditional is XOR).',
        correctAnswer:
          '$p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p) \\equiv (\\neg p \\lor q) \\land (\\neg q \\lor p)$. Negating: $\\neg((\\neg p \\lor q) \\land (\\neg q \\lor p)) \\equiv (p \\land \\neg q) \\lor (q \\land \\neg p) \\equiv p \\oplus q$.',
        explanation:
          'The biconditional is true when $p$ and $q$ agree. Its negation is true when they disagree — which is exactly XOR. The De Morgan step gives two cases: $p$ true and $q$ false, or $q$ true and $p$ false.',
        difficulty: 3,
      },
      {
        id: 'd4u1s1-q3',
        type: 'free-response',
        question:
          'Simplify to a single connective: $(p \\land q) \\lor (p \\land \\neg q) \\lor (\\neg p \\land q)$.',
        correctAnswer: '$p \\lor q$',
        explanation:
          'Factor: $(p \\land q) \\lor (p \\land \\neg q) = p \\land (q \\lor \\neg q) = p \\land T = p$ (by distributive, complement, and identity laws). So the expression becomes $p \\lor (\\neg p \\land q)$. Distribute: $(p \\lor \\neg p) \\land (p \\lor q) = T \\land (p \\lor q) = p \\lor q$.',
        hint: 'Try factoring $p$ from the first two terms.',
        difficulty: 3,
      },
      {
        id: 'd4u1s1-q4',
        type: 'multiple-choice',
        question:
          'Which of the following is a tautology?',
        options: [
          '$p \\to q$',
          '$p \\lor \\neg p$',
          '$p \\land \\neg p$',
          '$p \\oplus q$',
        ],
        correctAnswer: '$p \\lor \\neg p$',
        explanation:
          '$p \\lor \\neg p$ is the Law of the Excluded Middle — it is always true regardless of $p$. $p \\land \\neg p$ is a contradiction (always false). The others depend on the values of $p$ and $q$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U1 S2 — Advanced Conditional Reasoning
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u1s2',
    title: 'Advanced Conditional Reasoning',
    subunitId: 'd4u1s2',
    questions: [
      {
        id: 'd4u1s2-q1',
        type: 'free-response',
        question:
          'Given: "If it rains, then the game is canceled. The game was not canceled." What can you conclude, and what rule of inference is this?',
        correctAnswer:
          'Conclusion: It did not rain. This is Modus Tollens: from $p \\to q$ and $\\neg q$, conclude $\\neg p$.',
        explanation:
          'Modus Tollens: $p \\to q$, $\\neg q$, therefore $\\neg p$. Since the game was not canceled ($\\neg q$) and rain implies cancellation ($p \\to q$), it must not have rained ($\\neg p$). This works because the contrapositive $\\neg q \\to \\neg p$ is equivalent to $p \\to q$.',
        difficulty: 2,
      },
      {
        id: 'd4u1s2-q2',
        type: 'free-response',
        question:
          'Given: (1) $p \\to q$, (2) $q \\to r$, (3) $\\neg r$. Derive $\\neg p$ step by step.',
        correctAnswer:
          'Step 1: From (2) $q \\to r$ and (3) $\\neg r$, by Modus Tollens: $\\neg q$. Step 2: From (1) $p \\to q$ and $\\neg q$, by Modus Tollens: $\\neg p$.',
        explanation:
          'This chains two applications of Modus Tollens. Alternatively, from (1) and (2) by Hypothetical Syllogism: $p \\to r$. Then from $p \\to r$ and $\\neg r$ by Modus Tollens: $\\neg p$.',
        difficulty: 2,
      },
      {
        id: 'd4u1s2-q3',
        type: 'multiple-choice',
        question:
          'From $p \\to q$ and $p$, we can conclude $q$. This rule is:',
        options: [
          'Modus Tollens',
          'Modus Ponens',
          'Hypothetical Syllogism',
          'Disjunctive Syllogism',
        ],
        correctAnswer: 'Modus Ponens',
        explanation:
          'Modus Ponens: from $p \\to q$ and $p$, conclude $q$. This is the most fundamental rule of inference. "If it rains, the ground is wet. It rains. Therefore, the ground is wet."',
        difficulty: 2,
      },
      {
        id: 'd4u1s2-q4',
        type: 'free-response',
        question:
          'Identify the logical fallacy: "If you study, you will pass. You passed. Therefore, you studied."',
        correctAnswer:
          'This is the fallacy of Affirming the Consequent. From $p \\to q$ and $q$, you cannot conclude $p$.',
        explanation:
          'From $p \\to q$ and $q$, we CANNOT conclude $p$. The converse $q \\to p$ is not equivalent to $p \\to q$. You might have passed for other reasons (the teacher curved, you were lucky, etc.). Valid reasoning would require Modus Ponens ($p$) or Modus Tollens ($\\neg q$).',
        difficulty: 3,
      },
      {
        id: 'd4u1s2-q5',
        type: 'free-response',
        question:
          'Given: (1) $p \\lor q$, (2) $\\neg p$. What can you conclude, and what rule is this?',
        correctAnswer:
          'Conclusion: $q$. This is Disjunctive Syllogism: from $p \\lor q$ and $\\neg p$, conclude $q$.',
        explanation:
          'Disjunctive Syllogism: if one disjunct is false, the other must be true (since the disjunction is true). From $p \\lor q$ and $\\neg p$: since $p$ is false, $q$ must be true for $p \\lor q$ to hold.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U1 S3 — Logic Speed Drills
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u1s3',
    title: 'Logic Speed Drills',
    subunitId: 'd4u1s3',
    questions: [
      {
        id: 'd4u1s3-q1',
        type: 'free-response',
        question:
          'Quick: What is the truth value of $T \\to F$?',
        correctAnswer: '$F$',
        explanation:
          'A conditional is false only when the hypothesis is true and the conclusion is false. $T \\to F = F$.',
        difficulty: 2,
      },
      {
        id: 'd4u1s3-q2',
        type: 'free-response',
        question:
          'Quick: What is the contrapositive of $\\neg q \\to p$?',
        correctAnswer: '$\\neg p \\to q$',
        explanation:
          'Contrapositive of $A \\to B$ is $\\neg B \\to \\neg A$. Here $A = \\neg q$, $B = p$. So contrapositive: $\\neg p \\to \\neg(\\neg q) = \\neg p \\to q$.',
        difficulty: 2,
      },
      {
        id: 'd4u1s3-q3',
        type: 'free-response',
        question:
          'Quick: Simplify $\\neg(\\neg p)$.',
        correctAnswer: '$p$',
        explanation:
          'Double negation law: $\\neg(\\neg p) \\equiv p$. Negating a negation returns the original.',
        difficulty: 2,
      },
      {
        id: 'd4u1s3-q4',
        type: 'free-response',
        question:
          'Quick: What is $p \\land T$?',
        correctAnswer: '$p$',
        explanation:
          'Identity law: $p \\land T \\equiv p$. AND-ing with True leaves $p$ unchanged.',
        difficulty: 2,
      },
      {
        id: 'd4u1s3-q5',
        type: 'free-response',
        question:
          'Quick: Negate $\\exists x \\, \\forall y \\, P(x, y)$.',
        correctAnswer: '$\\forall x \\, \\exists y \\, \\neg P(x, y)$',
        explanation:
          'Flip each quantifier and negate the predicate: $\\neg(\\exists x \\, \\forall y \\, P(x,y)) \\equiv \\forall x \\, \\exists y \\, \\neg P(x,y)$.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U2 S1 — Mixed Base Problems
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u2s1',
    title: 'Mixed Base Problems',
    subunitId: 'd4u2s1',
    questions: [
      {
        id: 'd4u2s1-q1',
        type: 'conversion',
        question:
          'Convert $\\text{1A3}_{16}$ to decimal.',
        correctAnswer: '$1 \\times 256 + 10 \\times 16 + 3 \\times 1 = 256 + 160 + 3 = 419_{10}$',
        explanation:
          '$\\text{1A3}_{16}$: $1 \\times 16^2 + A \\times 16^1 + 3 \\times 16^0 = 256 + 160 + 3 = 419$. Remember A = 10 in hex.',
        difficulty: 2,
      },
      {
        id: 'd4u2s1-q2',
        type: 'conversion',
        question:
          'Convert $100_{10}$ to base 5.',
        correctAnswer: '$400_5$',
        explanation:
          '$100 \\div 5 = 20$ R $0$. $20 \\div 5 = 4$ R $0$. $4 \\div 5 = 0$ R $4$. Reading remainders bottom-to-top: $400_5$. Check: $4 \\times 25 + 0 \\times 5 + 0 = 100$.',
        difficulty: 2,
      },
      {
        id: 'd4u2s1-q3',
        type: 'conversion',
        question:
          'Convert $110101_2$ directly to octal (base 8) without going through decimal.',
        correctAnswer: '$65_8$',
        explanation:
          'Group binary digits in threes from right: $110 \\, 101$. $110_2 = 6_8$. $101_2 = 5_8$. Result: $65_8$. This works because $8 = 2^3$, so each octal digit corresponds to exactly 3 binary digits.',
        hint: 'Group binary digits in threes from the right.',
        difficulty: 2,
      },
      {
        id: 'd4u2s1-q4',
        type: 'free-response',
        question:
          'What is the largest 3-digit number in base 7? Express it in decimal.',
        correctAnswer:
          '$666_7 = 6 \\times 49 + 6 \\times 7 + 6 \\times 1 = 294 + 42 + 6 = 342_{10}$',
        explanation:
          'The largest digit in base 7 is 6. The largest 3-digit base-7 number is $666_7 = 7^3 - 1 = 343 - 1 = 342$. In general, the largest $d$-digit number in base $b$ is $b^d - 1$.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U2 S2 — Two's Complement Edge Cases
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u2s2',
    title: "Two's Complement Edge Cases",
    subunitId: 'd4u2s2',
    questions: [
      {
        id: 'd4u2s2-q1',
        type: 'free-response',
        question:
          "In 8-bit two's complement, what happens when you compute $01111111_2 + 00000001_2$ ($127 + 1$)?",
        correctAnswer:
          '$10000000_2 = -128$. This is an overflow.',
        explanation:
          "$01111111 + 00000001 = 10000000$. In unsigned binary, this would be $128$, but in 8-bit two's complement, $10000000 = -128$. Adding 1 to the maximum positive value wraps around to the minimum negative value. This is called arithmetic overflow.",
        difficulty: 3,
      },
      {
        id: 'd4u2s2-q2',
        type: 'conversion',
        question:
          "Represent $-128$ in 8-bit two's complement.",
        correctAnswer: '$10000000_2$',
        explanation:
          "$-128 = -2^7$ is the minimum value in 8-bit two's complement. It is represented as $10000000_2$ (only the sign bit set). Note: you CANNOT represent $+128$ in 8-bit two's complement (max positive is $127$). Also note: negating $-128$ using the flip-and-add-1 method gives $10000000 \\to 01111111 + 1 = 10000000 = -128$, which reveals that $-128$ is its own negation in 8 bits.",
        difficulty: 3,
      },
      {
        id: 'd4u2s2-q3',
        type: 'free-response',
        question:
          "Compute $(-3) + (-5)$ in 8-bit two's complement. Show the binary addition.",
        correctAnswer:
          '$11111101 + 11111011 = 11111000_2 = -8$',
        explanation:
          "$-3 = 11111101_2$ and $-5 = 11111011_2$. Adding: $11111101 + 11111011 = 111111000$. Discard the 9th bit (carry out): $11111000_2$. Convert: $-128 + 64 + 32 + 16 + 8 = -128 + 120 = -8$. Check: $(-3) + (-5) = -8$.",
        difficulty: 3,
      },
      {
        id: 'd4u2s2-q4',
        type: 'multiple-choice',
        question:
          "In $n$-bit two's complement, the range is $[-2^{n-1}, \\, 2^{n-1} - 1]$. Why is there one more negative value than positive?",
        options: [
          'Because the sign bit takes up one position',
          'Because zero is counted as positive, leaving one extra negative pattern',
          'Because zero uses one of the non-negative bit patterns, so there is one more negative pattern than positive',
          'Because binary cannot represent odd numbers of values',
        ],
        correctAnswer:
          'Because zero uses one of the non-negative bit patterns, so there is one more negative pattern than positive',
        explanation:
          "With $n$ bits, there are $2^n$ patterns. The sign bit splits them: $2^{n-1}$ patterns with MSB=0 (non-negative: $0$ through $2^{n-1}-1$) and $2^{n-1}$ with MSB=1 (negative: $-1$ through $-2^{n-1}$). Zero takes a non-negative slot, so there's one more negative value than positive.",
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U2 S3 — Full Cipher Encode/Decode
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u2s3',
    title: 'Full Cipher Encode/Decode',
    subunitId: 'd4u2s3',
    questions: [
      {
        id: 'd4u2s3-q1',
        type: 'free-response',
        question:
          'Decrypt "KHOOR" using a Caesar cipher with shift $k = 3$.',
        correctAnswer: 'HELLO',
        explanation:
          'Decrypt each letter by subtracting 3: K(10)$-3$=7(H), H(7)$-3$=4(E), O(14)$-3$=11(L), O(14)$-3$=11(L), R(17)$-3$=14(O). Result: HELLO.',
        difficulty: 2,
      },
      {
        id: 'd4u2s3-q2',
        type: 'free-response',
        question:
          'An affine cipher encrypts as $E(x) = (ax + b) \\mod 26$. With $a = 5$ and $b = 8$, encrypt the letter "C".',
        correctAnswer: 'S (value 18)',
        explanation:
          '$C = 2$ (A=0, B=1, C=2). $E(2) = (5 \\times 2 + 8) \\mod 26 = 18 \\mod 26 = 18$. Position 18 = S. The affine cipher generalizes Caesar by including a multiplication step. For decryption, you need the modular inverse of $a$ modulo 26.',
        difficulty: 3,
      },
      {
        id: 'd4u2s3-q3',
        type: 'free-response',
        question:
          'Encrypt "MATH" using a Caesar cipher with shift $k = 10$.',
        correctAnswer: 'WKDR',
        explanation:
          'M(12)+10=22(W), A(0)+10=10(K), T(19)+10=29 mod 26=3(D), H(7)+10=17(R). Result: WKDR.',
        difficulty: 2,
      },
      {
        id: 'd4u2s3-q4',
        type: 'free-response',
        question:
          'How many distinct Caesar ciphers are there on the 26-letter English alphabet, including the identity (shift 0)?',
        correctAnswer: '$26$',
        explanation:
          'The shift $k$ can be $0, 1, 2, \\ldots, 25$ (mod 26). A shift of 26 is the same as shift 0, so there are exactly 26 distinct Caesar ciphers. Shift 0 is the identity (no encryption).',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U3 S1 — Data Mining with Sets
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u3s1',
    title: 'Data Mining with Sets',
    subunitId: 'd4u3s1',
    questions: [
      {
        id: 'd4u3s1-q1',
        type: 'set-operation',
        question:
          'A database has users grouped by interest: $\\text{Sports} = \\{A, B, C, D, E\\}$, $\\text{Music} = \\{C, D, F, G\\}$, $\\text{Gaming} = \\{B, D, G, H\\}$. Find users interested in BOTH Sports and Music but NOT Gaming.',
        correctAnswer: '$\\{C\\}$',
        explanation:
          'Step 1: Sports $\\cap$ Music $= \\{C, D\\}$. Step 2: Remove Gaming members: $\\{C, D\\} \\setminus \\{B, D, G, H\\} = \\{C\\}$. In set notation: $(\\text{Sports} \\cap \\text{Music}) \\setminus \\text{Gaming} = \\{C\\}$.',
        difficulty: 2,
      },
      {
        id: 'd4u3s1-q2',
        type: 'set-operation',
        question:
          'Using the same sets, find users interested in at least two of the three categories.',
        correctAnswer: '$\\{B, C, D, G\\}$',
        explanation:
          'Find each pairwise intersection: S $\\cap$ M $= \\{C, D\\}$, S $\\cap$ G $= \\{B, D\\}$, M $\\cap$ G $= \\{D, G\\}$. Union of pairwise intersections: $\\{B, C, D, G\\}$. These are users appearing in at least 2 groups.',
        difficulty: 3,
      },
      {
        id: 'd4u3s1-q3',
        type: 'free-response',
        question:
          'Using the same sets, how many users are interested in exactly one category? (Assume the universal set is $\\{A, B, C, D, E, F, G, H\\}$.)',
        correctAnswer: '$4$ (the users $A, E, F, H$)',
        explanation:
          'Users in exactly one category are those in the universal set minus those in at least two. Users in at least two: $\\{B, C, D, G\\}$ (4 users). Total users in at least one: $\\{A,B,C,D,E,F,G,H\\}$ (8 users). Users in exactly one: $8 - 4 = 4$, namely $\\{A, E, F, H\\}$.',
        difficulty: 3,
      },
      {
        id: 'd4u3s1-q4',
        type: 'set-operation',
        question:
          'Find the symmetric difference: $\\text{Sports} \\triangle \\text{Music}$ (elements in one but not both).',
        correctAnswer: '$\\{A, B, E, F, G\\}$',
        explanation:
          '$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$. Sports $\\setminus$ Music $= \\{A, B, E\\}$. Music $\\setminus$ Sports $= \\{F, G\\}$. Symmetric difference: $\\{A, B, E, F, G\\}$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U3 S2 — Complex Operation Chains
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u3s2',
    title: 'Complex Operation Chains',
    subunitId: 'd4u3s2',
    questions: [
      {
        id: 'd4u3s2-q1',
        type: 'set-operation',
        question:
          'Let $U = \\{1,...,10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{3,4,5,6,7\\}$. Compute $(\\overline{A} \\cup B) \\cap (A \\cup \\overline{B})$.',
        correctAnswer: '$\\{3, 4, 5, 6, 7, 8, 9, 10\\} \\cap \\{1, 2, 3, 4, 5, 8, 9, 10\\} = \\{3, 4, 5, 8, 9, 10\\}$',
        explanation:
          '$\\overline{A} = \\{6,7,8,9,10\\}$. $\\overline{A} \\cup B = \\{3,4,5,6,7,8,9,10\\}$. $\\overline{B} = \\{1,2,8,9,10\\}$. $A \\cup \\overline{B} = \\{1,2,3,4,5,8,9,10\\}$. Intersection: $\\{3,4,5,8,9,10\\}$.',
        difficulty: 3,
      },
      {
        id: 'd4u3s2-q2',
        type: 'set-operation',
        question:
          'Let $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$, $C = \\{3,4,5\\}$. Compute $(A \\triangle B) \\triangle C$ (chained symmetric difference).',
        correctAnswer: '$\\{1, 3, 5\\}$',
        explanation:
          'Step 1: $A \\triangle B = \\{1, 4\\}$ (elements in one but not both). Step 2: $\\{1, 4\\} \\triangle C = \\{1, 4\\} \\triangle \\{3, 4, 5\\} = \\{1, 3, 5\\}$ (4 cancels since it appears in both). The chained symmetric difference contains elements appearing in an ODD number of the original sets.',
        difficulty: 3,
      },
      {
        id: 'd4u3s2-q3',
        type: 'free-response',
        question:
          'Prove the set identity: $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$. (Hint: use element-chasing or equivalently express using complements.)',
        correctAnswer:
          '$A \\setminus (B \\cup C) = A \\cap \\overline{(B \\cup C)} = A \\cap (\\overline{B} \\cap \\overline{C}) = (A \\cap \\overline{B}) \\cap (A \\cap \\overline{C}) = (A \\setminus B) \\cap (A \\setminus C)$.',
        explanation:
          'Key steps: (1) $A \\setminus X = A \\cap \\overline{X}$. (2) De Morgan\'s: $\\overline{B \\cup C} = \\overline{B} \\cap \\overline{C}$. (3) Associativity/commutativity to regroup. This is a "generalized De Morgan" for set difference.',
        difficulty: 3,
      },
      {
        id: 'd4u3s2-q4',
        type: 'set-operation',
        question:
          'Let $A = \\{1,2\\}$ and $B = \\{x, y\\}$. List all elements of $(A \\times B) \\cup (B \\times A)$.',
        correctAnswer:
          '$\\{(1,x), (1,y), (2,x), (2,y), (x,1), (x,2), (y,1), (y,2)\\}$',
        explanation:
          '$A \\times B = \\{(1,x),(1,y),(2,x),(2,y)\\}$. $B \\times A = \\{(x,1),(x,2),(y,1),(y,2)\\}$. Since $(1,x) \\neq (x,1)$ (ordered pairs), the union has all 8 elements. $|A \\times B \\cup B \\times A| = 8$ because no pair appears in both.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U3 S3 — Three-Set Inclusion-Exclusion
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u3s3',
    title: 'Three-Set Inclusion-Exclusion',
    subunitId: 'd4u3s3',
    questions: [
      {
        id: 'd4u3s3-q1',
        type: 'free-response',
        question:
          'State the inclusion-exclusion formula for three sets: $|A \\cup B \\cup C|$.',
        correctAnswer:
          '$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$',
        explanation:
          'For three sets, add individual sizes, subtract pairwise intersections (to fix double-counting), and add back the triple intersection (which was subtracted too many times). The pattern alternates: add singles, subtract pairs, add triples.',
        difficulty: 2,
      },
      {
        id: 'd4u3s3-q2',
        type: 'free-response',
        question:
          'In a class of 80 students: 45 take Math, 35 take Physics, 30 take Chemistry, 15 take Math and Physics, 10 take Math and Chemistry, 12 take Physics and Chemistry, and 5 take all three. How many take at least one subject?',
        correctAnswer:
          '$45 + 35 + 30 - 15 - 10 - 12 + 5 = 78$',
        explanation:
          'By three-set inclusion-exclusion: $|M \\cup P \\cup C| = 45 + 35 + 30 - 15 - 10 - 12 + 5 = 78$. So $80 - 78 = 2$ students take none of these subjects.',
        difficulty: 2,
      },
      {
        id: 'd4u3s3-q3',
        type: 'free-response',
        question:
          'Using the data from Q2, how many students take exactly one subject?',
        correctAnswer: '$78 - 2(15 + 10 + 12 - 3 \\times 5) + (15 + 10 + 12 - 3 \\times 5)$... Let me compute directly: Exactly one = $|A| + |B| + |C| - 2|A \\cap B| - 2|A \\cap C| - 2|B \\cap C| + 3|A \\cap B \\cap C| = 45 + 35 + 30 - 30 - 20 - 24 + 15 = 51$.',
        explanation:
          'Exactly one = Total in each set minus those in 2+ sets. Using the formula: $|A| + |B| + |C| - 2|A \\cap B| - 2|A \\cap C| - 2|B \\cap C| + 3|A \\cap B \\cap C| = 45 + 35 + 30 - 30 - 20 - 24 + 15 = 51$. We subtract pairwise overlaps twice (once to remove from each set) and add triple overlap back three times.',
        difficulty: 3,
      },
      {
        id: 'd4u3s3-q4',
        type: 'free-response',
        question:
          'How many integers from 1 to 60 are divisible by 2, 3, or 5?',
        correctAnswer:
          '$|A \\cup B \\cup C| = 30 + 20 + 12 - 10 - 6 - 4 + 2 = 44$',
        explanation:
          'Let $A$ = multiples of 2, $B$ = multiples of 3, $C$ = multiples of 5. $|A| = 30$, $|B| = 20$, $|C| = 12$. $|A \\cap B|$ (mult. of 6) $= 10$. $|A \\cap C|$ (mult. of 10) $= 6$. $|B \\cap C|$ (mult. of 15) $= 4$. $|A \\cap B \\cap C|$ (mult. of 30) $= 2$. By inclusion-exclusion: $30 + 20 + 12 - 10 - 6 - 4 + 2 = 44$.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U4 S1 — SET Card Game Counting
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u4s1',
    title: 'SET Card Game Counting',
    subunitId: 'd4u4s1',
    questions: [
      {
        id: 'd4u4s1-q1',
        type: 'free-response',
        question:
          'In the SET card game, each card has 4 attributes, each with 3 possible values. How many cards are in the deck?',
        correctAnswer: '$3^4 = 81$ cards',
        explanation:
          'Each card has: number (1,2,3), shape (diamond, oval, squiggle), color (red, green, purple), shading (solid, striped, open). By the multiplication principle: $3 \\times 3 \\times 3 \\times 3 = 81$ cards.',
        difficulty: 2,
      },
      {
        id: 'd4u4s1-q2',
        type: 'free-response',
        question:
          'In SET, a valid "set" of 3 cards requires that for each attribute, the three cards are either all the same or all different. Given two cards, how many cards complete a valid set?',
        correctAnswer: 'Exactly $1$ card.',
        explanation:
          'For each attribute, given two values from the first two cards, the third is uniquely determined: if the two are the same, the third must match; if the two differ, the third must be the remaining value. Since each of the 4 attributes determines the third value uniquely, exactly 1 card completes any pair into a valid set.',
        difficulty: 3,
      },
      {
        id: 'd4u4s1-q3',
        type: 'free-response',
        question:
          'How many different groups of 3 cards can be chosen from the 81-card SET deck?',
        correctAnswer: '$\\binom{81}{3} = \\frac{81 \\times 80 \\times 79}{6} = 85{,}320$',
        explanation:
          'We choose 3 cards from 81 where order does not matter: $\\binom{81}{3} = \\frac{81!}{3! \\times 78!} = \\frac{81 \\times 80 \\times 79}{6} = 85{,}320$. Not all of these are valid sets; the total number of valid sets in SET is $1{,}080$.',
        difficulty: 2,
      },
      {
        id: 'd4u4s1-q4',
        type: 'free-response',
        question:
          'How many valid sets exist in the SET deck? (Hint: there are $\\binom{81}{2} = 3{,}240$ pairs, and each pair determines exactly 1 completing card. Each valid set contains $\\binom{3}{2} = 3$ pairs.)',
        correctAnswer:
          '$\\frac{3{,}240 \\times 1}{3} = 1{,}080$ valid sets.',
        explanation:
          'There are $\\binom{81}{2} = 3{,}240$ pairs of cards. Each pair uniquely determines a third card to form a valid set. But each valid set of 3 cards is counted 3 times (once for each of the $\\binom{3}{2} = 3$ pairs within it). So the number of valid sets is $\\frac{3{,}240}{3} = 1{,}080$.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U4 S2 — Advanced Combinations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u4s2',
    title: 'Advanced Combinations',
    subunitId: 'd4u4s2',
    questions: [
      {
        id: 'd4u4s2-q1',
        type: 'free-response',
        question:
          'A committee of 5 is to be formed from 6 men and 4 women. How many committees have at least 2 women?',
        correctAnswer:
          '$\\binom{4}{2}\\binom{6}{3} + \\binom{4}{3}\\binom{6}{2} + \\binom{4}{4}\\binom{6}{1} = 120 + 60 + 6 = 186$',
        explanation:
          'At least 2 women means 2, 3, or 4 women. (a) 2 women, 3 men: $\\binom{4}{2}\\binom{6}{3} = 6 \\times 20 = 120$. (b) 3 women, 2 men: $\\binom{4}{3}\\binom{6}{2} = 4 \\times 15 = 60$. (c) 4 women, 1 man: $\\binom{4}{4}\\binom{6}{1} = 1 \\times 6 = 6$. Total: $186$.',
        difficulty: 2,
      },
      {
        id: 'd4u4s2-q2',
        type: 'free-response',
        question:
          'How many ways can you arrange the letters in "MISSISSIPPI"?',
        correctAnswer:
          '$\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = 34{,}650$',
        explanation:
          'MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2). The multinomial coefficient is $\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39{,}916{,}800}{1 \\cdot 24 \\cdot 24 \\cdot 2} = \\frac{39{,}916{,}800}{1{,}152} = 34{,}650$.',
        difficulty: 3,
      },
      {
        id: 'd4u4s2-q3',
        type: 'free-response',
        question:
          'A standard 52-card deck has 4 suits of 13 cards each. How many 5-card poker hands contain exactly one pair (two cards of one rank and three cards of three other distinct ranks)?',
        correctAnswer:
          '$\\binom{13}{1}\\binom{4}{2}\\binom{12}{3}\\binom{4}{1}^3 = 13 \\times 6 \\times 220 \\times 64 = 1{,}098{,}240$',
        explanation:
          'Step 1: Choose the rank of the pair: $\\binom{13}{1} = 13$. Step 2: Choose 2 suits for the pair: $\\binom{4}{2} = 6$. Step 3: Choose 3 other ranks from remaining 12: $\\binom{12}{3} = 220$. Step 4: Choose 1 suit for each: $\\binom{4}{1}^3 = 64$. Total: $13 \\times 6 \\times 220 \\times 64 = 1{,}098{,}240$.',
        difficulty: 3,
      },
      {
        id: 'd4u4s2-q4',
        type: 'free-response',
        question:
          'Prove the Vandermonde identity: $\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k}\\binom{n}{r-k}$. Give a combinatorial argument.',
        correctAnswer:
          'Consider choosing $r$ items from a group of $m + n$ people ($m$ in group A, $n$ in group B). We can choose $k$ from group A and $r - k$ from group B, for any $k = 0, 1, \\ldots, r$.',
        explanation:
          'The left side counts ways to choose $r$ items from $m + n$ objects. The right side partitions by how many come from each group: choose $k$ from the first $m$ objects ($\\binom{m}{k}$) and $r-k$ from the next $n$ objects ($\\binom{n}{r-k}$), summing over all valid $k$. Both sides count the same thing.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D4 U4 S3 — Cross-Topic Problems (Combinatorics + Number Theory)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d4u4s3',
    title: 'Cross-Topic Problems (Combinatorics + Number Theory)',
    subunitId: 'd4u4s3',
    questions: [
      {
        id: 'd4u4s3-q1',
        type: 'free-response',
        question:
          'How many divisors of $720$ are even? (Hint: $720 = 2^4 \\times 3^2 \\times 5$.)',
        correctAnswer: '$4 \\times 3 \\times 2 = 24$ even divisors.',
        explanation:
          'An even divisor of $720 = 2^4 \\times 3^2 \\times 5$ must include at least one factor of 2. The exponent of 2 ranges from 1 to 4 (4 choices), the exponent of 3 from 0 to 2 (3 choices), and the exponent of 5 from 0 to 1 (2 choices). Total: $4 \\times 3 \\times 2 = 24$. (Total divisors: $5 \\times 3 \\times 2 = 30$. Odd divisors: $30 - 24 = 6$.)',
        difficulty: 3,
      },
      {
        id: 'd4u4s3-q2',
        type: 'free-response',
        question:
          'How many 4-digit numbers (1000-9999) have digits that sum to 10?',
        correctAnswer:
          'This requires stars and bars with constraints. The answer is $\\binom{12}{3} - 4\\binom{3}{3} - \\ldots$. Using inclusion-exclusion on the constraint $1 \\leq d_1 \\leq 9$ and $0 \\leq d_2, d_3, d_4 \\leq 9$: the answer is $219$.',
        explanation:
          'Let $d_1 + d_2 + d_3 + d_4 = 10$ with $1 \\leq d_1 \\leq 9$, $0 \\leq d_i \\leq 9$ for $i \\geq 2$. Substitute $e_1 = d_1 - 1$: $e_1 + d_2 + d_3 + d_4 = 9$ with $0 \\leq e_1 \\leq 8$, $0 \\leq d_i \\leq 9$. Without upper bounds: $\\binom{12}{3} = 220$. Subtract cases where some variable exceeds 9 (or 8 for $e_1$): only $e_1 = 9$ is possible (giving $d_2+d_3+d_4 = 0$, one solution). No $d_i$ can exceed 9 since they sum to 9. So: $220 - 1 = 219$.',
        difficulty: 3,
      },
      {
        id: 'd4u4s3-q3',
        type: 'free-response',
        question:
          'How many binary strings of length 12 have an equal number of 0s and 1s AND start with a 1?',
        correctAnswer: '$\\binom{11}{5} = 462$',
        explanation:
          'Equal 0s and 1s means six 1s and six 0s. The first position is fixed as 1, so we need to place the remaining five 1s among the remaining 11 positions: $\\binom{11}{5} = 462$.',
        difficulty: 3,
      },
      {
        id: 'd4u4s3-q4',
        type: 'free-response',
        question:
          'How many positive integers $\\leq 1000$ are coprime to 30? (Hint: $30 = 2 \\times 3 \\times 5$.)',
        correctAnswer:
          '$1000 \\times (1 - \\frac{1}{2})(1 - \\frac{1}{3})(1 - \\frac{1}{5}) = 1000 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{4}{5} = 1000 \\times \\frac{8}{30} \\approx 266.67$. By inclusion-exclusion exactly: $1000 - 500 - 333 - 200 + 166 + 100 + 66 - 33 = 266$.',
        explanation:
          'A number coprime to 30 is not divisible by 2, 3, or 5. By inclusion-exclusion: numbers divisible by 2 or 3 or 5 = $500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$. Coprime count: $1000 - 734 = 266$. This is related to Euler\'s totient function.',
        difficulty: 3,
      },
    ],
  },
];
