// Day 2 Drills: Deepening
// Logic Depth, Numbers Depth, Sets Operations, Counting Formulas

import type { DrillSet } from './index';

export const day2Drills: DrillSet[] = [
  // ═══════════════════════════════════════════════════════════
  // D2 U1 S1 — Conditionals & Biconditionals
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u1s1',
    title: 'Conditionals & Biconditionals',
    subunitId: 'd2u1s1',
    questions: [
      {
        id: 'd2u1s1-q1',
        type: 'truth-table',
        question:
          'Complete the truth table for $p \\to q$ (if $p$ then $q$).',
        correctAnswer: 'T, F, T, T',
        explanation:
          'The conditional $p \\to q$ is false ONLY when $p$ is true and $q$ is false. In all other cases it is true. This is the most important thing to memorize: "a true hypothesis with a false conclusion is the only way to make an implication false."',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: 'p \\to q',
        correctTableValues: [['T'], ['F'], ['T'], ['T']],
      },
      {
        id: 'd2u1s1-q2',
        type: 'truth-table',
        question:
          'Complete the truth table for $p \\leftrightarrow q$ (biconditional).',
        correctAnswer: 'T, F, F, T',
        explanation:
          '$p \\leftrightarrow q$ is true when $p$ and $q$ have the SAME truth value (both true or both false). It is equivalent to $(p \\to q) \\land (q \\to p)$.',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: 'p \\leftrightarrow q',
        correctTableValues: [['T'], ['F'], ['F'], ['T']],
      },
      {
        id: 'd2u1s1-q3',
        type: 'free-response',
        question:
          'Translate into logical notation: "You can ride the roller coaster if and only if you are at least 48 inches tall." Let $r$ = "You can ride" and $t$ = "You are at least 48 inches tall."',
        correctAnswer: '$r \\leftrightarrow t$',
        explanation:
          '"If and only if" signals a biconditional. $r \\leftrightarrow t$ means both: if you can ride then you are tall enough, AND if you are tall enough then you can ride.',
        difficulty: 1,
      },
      {
        id: 'd2u1s1-q4',
        type: 'multiple-choice',
        question:
          'The statement "If it rains, then the ground is wet" ($p \\to q$) is false when:',
        options: [
          'It rains and the ground is wet',
          'It rains and the ground is not wet',
          'It does not rain and the ground is wet',
          'It does not rain and the ground is not wet',
        ],
        correctAnswer: 'It rains and the ground is not wet',
        explanation:
          '$p \\to q$ is false only in the row where $p = T$ and $q = F$. If it rains ($p$ true) but the ground is not wet ($q$ false), the implication is violated.',
        difficulty: 1,
      },
      {
        id: 'd2u1s1-q5',
        type: 'free-response',
        question:
          'Show that $p \\to q \\equiv \\neg p \\lor q$ by comparing their truth tables.',
        correctAnswer:
          'Both have the truth table: T, F, T, T (for rows TT, TF, FT, FF).',
        explanation:
          '$p \\to q$: T,F,T,T. $\\neg p \\lor q$: (F∨T)=T, (F∨F)=F, (T∨T)=T, (T∨F)=T. Both columns match, confirming $p \\to q \\equiv \\neg p \\lor q$. This is one of the most important equivalences in logic.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U1 S2 — Converse / Inverse / Contrapositive
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u1s2',
    title: 'Converse / Inverse / Contrapositive',
    subunitId: 'd2u1s2',
    questions: [
      {
        id: 'd2u1s2-q1',
        type: 'free-response',
        question:
          'Given $p \\to q$: "If it snows, then school is canceled." Write the converse, inverse, and contrapositive.',
        correctAnswer:
          'Converse: $q \\to p$ = "If school is canceled, then it snows." Inverse: $\\neg p \\to \\neg q$ = "If it does not snow, then school is not canceled." Contrapositive: $\\neg q \\to \\neg p$ = "If school is not canceled, then it does not snow."',
        explanation:
          'For $p \\to q$: Converse swaps: $q \\to p$. Inverse negates both: $\\neg p \\to \\neg q$. Contrapositive swaps AND negates: $\\neg q \\to \\neg p$. KEY FACT: The original and contrapositive are logically equivalent. The converse and inverse are equivalent to each other but NOT to the original.',
        difficulty: 1,
      },
      {
        id: 'd2u1s2-q2',
        type: 'multiple-choice',
        question:
          'Which of the following is logically equivalent to $p \\to q$?',
        options: [
          'Converse: $q \\to p$',
          'Inverse: $\\neg p \\to \\neg q$',
          'Contrapositive: $\\neg q \\to \\neg p$',
          'Biconditional: $p \\leftrightarrow q$',
        ],
        correctAnswer: 'Contrapositive: $\\neg q \\to \\neg p$',
        explanation:
          'The contrapositive $\\neg q \\to \\neg p$ is always logically equivalent to $p \\to q$. You can verify this with truth tables: both yield T, F, T, T.',
        difficulty: 1,
      },
      {
        id: 'd2u1s2-q3',
        type: 'free-response',
        question:
          'Write the contrapositive of: "If $n^2$ is even, then $n$ is even."',
        correctAnswer:
          '"If $n$ is not even (i.e., $n$ is odd), then $n^2$ is not even (i.e., $n^2$ is odd)."',
        explanation:
          'Contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$. Here $p$: "$n^2$ is even", $q$: "$n$ is even". Contrapositive: "If $n$ is odd, then $n^2$ is odd." This contrapositive is actually easier to prove directly.',
        difficulty: 2,
      },
      {
        id: 'd2u1s2-q4',
        type: 'multiple-choice',
        question:
          'The converse of $p \\to q$ is equivalent to which of the following?',
        options: [
          'The original: $p \\to q$',
          'The inverse: $\\neg p \\to \\neg q$',
          'The contrapositive: $\\neg q \\to \\neg p$',
          'None of the above',
        ],
        correctAnswer: 'The inverse: $\\neg p \\to \\neg q$',
        explanation:
          'The converse ($q \\to p$) and inverse ($\\neg p \\to \\neg q$) are contrapositives of each other, and therefore logically equivalent. But they are NOT equivalent to the original implication.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U1 S3 — Logical Equivalence Proofs
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u1s3',
    title: 'Logical Equivalence Proofs',
    subunitId: 'd2u1s3',
    questions: [
      {
        id: 'd2u1s3-q1',
        type: 'free-response',
        question:
          'Prove algebraically: $\\neg(p \\to q) \\equiv p \\land \\neg q$.',
        correctAnswer:
          '$\\neg(p \\to q) \\equiv \\neg(\\neg p \\lor q) \\equiv p \\land \\neg q$',
        explanation:
          'Step 1: Replace $p \\to q$ with its equivalent $\\neg p \\lor q$ (conditional equivalence). Step 2: Apply De Morgan\'s Law: $\\neg(\\neg p \\lor q) \\equiv \\neg(\\neg p) \\land \\neg q \\equiv p \\land \\neg q$. The negation of "if p then q" is "p and not q."',
        difficulty: 2,
      },
      {
        id: 'd2u1s3-q2',
        type: 'free-response',
        question:
          'Prove: $p \\lor (p \\land q) \\equiv p$ (Absorption Law).',
        correctAnswer:
          '$p \\lor (p \\land q) \\equiv (p \\land T) \\lor (p \\land q) \\equiv p \\land (T \\lor q) \\equiv p \\land T \\equiv p$',
        explanation:
          'Step 1: Identity law: $p \\equiv p \\land T$. Step 2: Factor out $p$ (distributive): $p \\land (T \\lor q)$. Step 3: Domination law: $T \\lor q \\equiv T$. Step 4: Identity law: $p \\land T \\equiv p$. Alternatively, you can verify with a truth table.',
        difficulty: 2,
      },
      {
        id: 'd2u1s3-q3',
        type: 'multiple-choice',
        question:
          'Which law states $p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$?',
        options: [
          'Commutative Law',
          'Associative Law',
          'Distributive Law',
          "De Morgan's Law",
        ],
        correctAnswer: 'Distributive Law',
        explanation:
          'The distributive law lets you "distribute" AND over OR (or OR over AND). $p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$. This is analogous to $a(b+c) = ab + ac$ in algebra.',
        difficulty: 1,
      },
      {
        id: 'd2u1s3-q4',
        type: 'free-response',
        question:
          'Prove: $(p \\to q) \\land (p \\to r) \\equiv p \\to (q \\land r)$.',
        correctAnswer:
          '$(p \\to q) \\land (p \\to r) \\equiv (\\neg p \\lor q) \\land (\\neg p \\lor r) \\equiv \\neg p \\lor (q \\land r) \\equiv p \\to (q \\land r)$',
        explanation:
          'Step 1: Replace conditionals: $(\\neg p \\lor q) \\land (\\neg p \\lor r)$. Step 2: Distributive law (factor out $\\neg p$): $\\neg p \\lor (q \\land r)$. Step 3: Rewrite as conditional: $p \\to (q \\land r)$.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U2 S1 — Two's Complement
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u2s1',
    title: "Two's Complement",
    subunitId: 'd2u2s1',
    questions: [
      {
        id: 'd2u2s1-q1',
        type: 'conversion',
        question:
          "Represent $-5$ in 8-bit two's complement.",
        correctAnswer: '$11111011_2$',
        explanation:
          "Step 1: Write $+5$ in binary: $00000101$. Step 2: Flip all bits: $11111010$. Step 3: Add 1: $11111011$. So $-5$ in 8-bit two's complement is $11111011_2$. Check: $11111011 = -128 + 64 + 32 + 16 + 8 + 0 + 2 + 1 = -128 + 123 = -5$. ✓",
        hint: "Two's complement: flip all bits, then add 1.",
        difficulty: 1,
      },
      {
        id: 'd2u2s1-q2',
        type: 'conversion',
        question:
          "What decimal value does the 8-bit two's complement number $10000000_2$ represent?",
        correctAnswer: '$-128$',
        explanation:
          "In 8-bit two's complement, $10000000_2$ is the most negative representable value: $-2^7 = -128$. The range of 8-bit two's complement is $[-128, 127]$.",
        difficulty: 2,
      },
      {
        id: 'd2u2s1-q3',
        type: 'conversion',
        question:
          "What decimal value does the 8-bit two's complement number $11100101_2$ represent?",
        correctAnswer: '$-27$',
        explanation:
          "The MSB is 1, so this is negative. Method: $-128 + 64 + 32 + 0 + 0 + 4 + 0 + 1 = -128 + 101 = -27$. Alternative: flip bits to get $00011010$, add 1 to get $00011011 = 27$, so the value is $-27$.",
        difficulty: 2,
      },
      {
        id: 'd2u2s1-q4',
        type: 'free-response',
        question:
          "What is the range of values representable in $n$-bit two's complement?",
        correctAnswer: '$-2^{n-1}$ to $2^{n-1} - 1$',
        explanation:
          "With $n$ bits in two's complement: the most negative value is $-2^{n-1}$ (only the sign bit set) and the most positive is $2^{n-1} - 1$ (sign bit 0, all other bits 1). For 8 bits: $[-128, 127]$. For 16 bits: $[-32768, 32767]$.",
        difficulty: 2,
      },
      {
        id: 'd2u2s1-q5',
        type: 'conversion',
        question:
          "Represent $-1$ in 8-bit two's complement.",
        correctAnswer: '$11111111_2$',
        explanation:
          "$+1 = 00000001$. Flip: $11111110$. Add 1: $11111111$. So $-1$ is all 1's in two's complement. Check: $-128+64+32+16+8+4+2+1 = -128+127 = -1$. ✓",
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U2 S2 — Modular Arithmetic
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u2s2',
    title: 'Modular Arithmetic',
    subunitId: 'd2u2s2',
    questions: [
      {
        id: 'd2u2s2-q1',
        type: 'free-response',
        question: 'Compute $17 \\mod 5$.',
        correctAnswer: '$2$',
        explanation:
          '$17 = 3 \\times 5 + 2$, so $17 \\mod 5 = 2$. The mod operation returns the remainder after integer division.',
        difficulty: 1,
      },
      {
        id: 'd2u2s2-q2',
        type: 'free-response',
        question: 'Compute $-3 \\mod 7$.',
        correctAnswer: '$4$',
        explanation:
          '$-3 = (-1) \\times 7 + 4$, so $-3 \\mod 7 = 4$. For negative numbers, add the modulus until you get a non-negative remainder: $-3 + 7 = 4$.',
        hint: 'For negative numbers, add the modulus to get a non-negative result.',
        difficulty: 2,
      },
      {
        id: 'd2u2s2-q3',
        type: 'free-response',
        question:
          'Is $38 \\equiv 14 \\pmod{12}$? Explain.',
        correctAnswer: 'Yes, because $38 - 14 = 24$ and $12 \\mid 24$.',
        explanation:
          '$a \\equiv b \\pmod{n}$ means $n \\mid (a - b)$. Here $38 - 14 = 24$ and $12 \\mid 24$ (since $24 = 2 \\times 12$). So yes, $38 \\equiv 14 \\pmod{12}$. Equivalently, $38 \\mod 12 = 2$ and $14 \\mod 12 = 2$.',
        difficulty: 1,
      },
      {
        id: 'd2u2s2-q4',
        type: 'free-response',
        question: 'Find the value of $(7 \\times 8) \\mod 10$.',
        correctAnswer: '$6$',
        explanation:
          '$7 \\times 8 = 56$. $56 \\mod 10 = 6$. Alternatively, $(7 \\mod 10)(8 \\mod 10) \\mod 10 = 56 \\mod 10 = 6$. Modular arithmetic preserves multiplication.',
        difficulty: 1,
      },
      {
        id: 'd2u2s2-q5',
        type: 'free-response',
        question:
          'Compute $2^{10} \\mod 7$.',
        correctAnswer: '$2$',
        explanation:
          '$2^1 = 2$, $2^2 = 4$, $2^3 = 8 \\equiv 1 \\pmod{7}$. Since $2^3 \\equiv 1$, we have $2^{10} = (2^3)^3 \\cdot 2^1 \\equiv 1^3 \\cdot 2 = 2 \\pmod{7}$.',
        hint: 'Look for a pattern in powers of 2 mod 7.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U2 S3 — Binary Arithmetic & Caesar Cipher
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u2s3',
    title: 'Binary Arithmetic & Caesar Cipher',
    subunitId: 'd2u2s3',
    questions: [
      {
        id: 'd2u2s3-q1',
        type: 'free-response',
        question: 'Add in binary: $1011_2 + 1101_2$.',
        correctAnswer: '$11000_2$',
        explanation:
          'Column by column from right: $1+1=10$ (write 0, carry 1). $1+0+1=10$ (write 0, carry 1). $0+1+1=10$ (write 0, carry 1). $1+1+1=11$ (write 1, carry 1). Final carry: 1. Result: $11000_2 = 24_{10}$. Check: $11 + 13 = 24$. ✓',
        difficulty: 2,
      },
      {
        id: 'd2u2s3-q2',
        type: 'free-response',
        question:
          'Using a Caesar cipher with shift $k = 3$, encrypt the letter "W". Use the mapping A=0, B=1, ..., Z=25.',
        correctAnswer: 'Z',
        explanation:
          '$W = 22$. Encrypt: $(22 + 3) \\mod 26 = 25 \\mod 26 = 25 = Z$. The Caesar cipher shifts each letter forward by $k$ positions, wrapping around with mod 26.',
        difficulty: 1,
      },
      {
        id: 'd2u2s3-q3',
        type: 'free-response',
        question:
          'Using a Caesar cipher with shift $k = 3$, decrypt the letter "D".',
        correctAnswer: 'A',
        explanation:
          '$D = 3$. Decrypt: $(3 - 3) \\mod 26 = 0 \\mod 26 = 0 = A$. To decrypt, subtract the shift key (and apply mod 26 to handle wrap-around).',
        difficulty: 1,
      },
      {
        id: 'd2u2s3-q4',
        type: 'free-response',
        question:
          'Subtract in binary: $10010_2 - 01101_2$ using two\'s complement addition.',
        correctAnswer: '$00101_2 = 5_{10}$',
        explanation:
          "Instead of subtracting, add the two's complement of the subtrahend. Two's complement of $01101$: flip to $10010$, add 1 to get $10011$. Now add: $10010 + 10011 = 100101$. Discard the overflow bit: $00101_2 = 5$. Check: $18 - 13 = 5$. ✓",
        difficulty: 3,
      },
      {
        id: 'd2u2s3-q5',
        type: 'free-response',
        question:
          'Encrypt "HELLO" with a Caesar cipher shift of $k=7$.',
        correctAnswer: 'OLSSV',
        explanation:
          'H(7)+7=14(O), E(4)+7=11(L), L(11)+7=18(S), L(11)+7=18(S), O(14)+7=21(V). Result: OLSSV.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U3 S1 — Cartesian Products
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u3s1',
    title: 'Cartesian Products',
    subunitId: 'd2u3s1',
    questions: [
      {
        id: 'd2u3s1-q1',
        type: 'set-operation',
        question:
          'Let $A = \\{1, 2\\}$ and $B = \\{a, b, c\\}$. List all elements of $A \\times B$.',
        correctAnswer:
          '$\\{(1,a), (1,b), (1,c), (2,a), (2,b), (2,c)\\}$',
        explanation:
          '$A \\times B$ is the set of all ordered pairs $(x, y)$ where $x \\in A$ and $y \\in B$. There are $|A| \\times |B| = 2 \\times 3 = 6$ pairs.',
        difficulty: 1,
      },
      {
        id: 'd2u3s1-q2',
        type: 'free-response',
        question:
          'If $|A| = 4$ and $|B| = 5$, what is $|A \\times B|$?',
        correctAnswer: '$4 \\times 5 = 20$',
        explanation:
          '$|A \\times B| = |A| \\cdot |B|$. Each element of $A$ pairs with every element of $B$, giving $4 \\times 5 = 20$ ordered pairs.',
        difficulty: 1,
      },
      {
        id: 'd2u3s1-q3',
        type: 'multiple-choice',
        question:
          'Is $A \\times B = B \\times A$ in general?',
        options: [
          'Yes, always',
          'No, unless $A = B$',
          'No, unless $A = B$ or at least one is empty',
          'Only when both are finite',
        ],
        correctAnswer: 'No, unless $A = B$ or at least one is empty',
        explanation:
          'In general $A \\times B \\neq B \\times A$ because the ordered pairs differ: $(a, b) \\neq (b, a)$ when $a \\neq b$. The exceptions are when $A = B$ (same pairs either way) or one set is empty (both products are empty).',
        difficulty: 2,
      },
      {
        id: 'd2u3s1-q4',
        type: 'set-operation',
        question:
          'Let $A = \\{0, 1\\}$. List all elements of $A \\times A$ (also written $A^2$).',
        correctAnswer: '$\\{(0,0), (0,1), (1,0), (1,1)\\}$',
        explanation:
          '$A \\times A = \\{(0,0), (0,1), (1,0), (1,1)\\}$. Note $|A^2| = 2^2 = 4$. For binary strings: $A^n$ gives all binary strings of length $n$.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U3 S2 — Chained Set Operations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u3s2',
    title: 'Chained Set Operations',
    subunitId: 'd2u3s2',
    questions: [
      {
        id: 'd2u3s2-q1',
        type: 'set-operation',
        question:
          'Let $U = \\{1,...,8\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$, $C = \\{5,6,7,8\\}$. Find $(A \\cup B) \\cap C$.',
        correctAnswer: '$\\{5, 6\\}$',
        explanation:
          'Step 1: $A \\cup B = \\{1,2,3,4,5,6\\}$. Step 2: $(A \\cup B) \\cap C = \\{1,2,3,4,5,6\\} \\cap \\{5,6,7,8\\} = \\{5,6\\}$.',
        difficulty: 1,
      },
      {
        id: 'd2u3s2-q2',
        type: 'set-operation',
        question:
          'Using the same sets, find $\\overline{A} \\cap (B \\cup C)$.',
        correctAnswer: '$\\{5, 6, 7, 8\\}$',
        explanation:
          'Step 1: $\\overline{A} = \\{5,6,7,8\\}$. Step 2: $B \\cup C = \\{3,4,5,6,7,8\\}$. Step 3: $\\overline{A} \\cap (B \\cup C) = \\{5,6,7,8\\} \\cap \\{3,4,5,6,7,8\\} = \\{5,6,7,8\\}$.',
        difficulty: 2,
      },
      {
        id: 'd2u3s2-q3',
        type: 'set-operation',
        question:
          'Using the same sets, find $(A \\cap B) \\cup (B \\cap C)$.',
        correctAnswer: '$\\{3, 4, 5, 6\\}$',
        explanation:
          'Step 1: $A \\cap B = \\{3,4\\}$. Step 2: $B \\cap C = \\{5,6\\}$. Step 3: $\\{3,4\\} \\cup \\{5,6\\} = \\{3,4,5,6\\}$.',
        difficulty: 2,
      },
      {
        id: 'd2u3s2-q4',
        type: 'set-operation',
        question:
          'Using the same sets, find $A \\setminus (B \\cap C)$.',
        correctAnswer: '$\\{1, 2, 3, 4\\}$',
        explanation:
          'Step 1: $B \\cap C = \\{5,6\\}$. Step 2: $A \\setminus \\{5,6\\} = \\{1,2,3,4\\}$ (remove from $A$ any elements in $\\{5,6\\}$; none of those are in $A$, so $A$ is unchanged).',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U3 S3 — Inclusion-Exclusion Principle
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u3s3',
    title: 'Inclusion-Exclusion Principle',
    subunitId: 'd2u3s3',
    questions: [
      {
        id: 'd2u3s3-q1',
        type: 'free-response',
        question:
          'In a class of students, 20 like math, 15 like science, and 8 like both. How many like math or science?',
        correctAnswer: '$20 + 15 - 8 = 27$',
        explanation:
          'By inclusion-exclusion: $|M \\cup S| = |M| + |S| - |M \\cap S| = 20 + 15 - 8 = 27$. We subtract the intersection to avoid double-counting students who like both.',
        difficulty: 1,
      },
      {
        id: 'd2u3s3-q2',
        type: 'free-response',
        question:
          'A survey of 100 people found that 60 drink coffee, 40 drink tea, and every person drinks at least one. How many drink both?',
        correctAnswer: '$60 + 40 - 100 = 0$... wait: $|C \\cup T| = 100$, so $100 = 60 + 40 - |C \\cap T|$, giving $|C \\cap T| = 0$.',
        explanation:
          'Since everyone drinks at least one, $|C \\cup T| = 100$. By inclusion-exclusion: $100 = 60 + 40 - |C \\cap T|$, so $|C \\cap T| = 0$. No one drinks both.',
        hint: 'Use inclusion-exclusion in reverse: solve for the intersection.',
        difficulty: 2,
      },
      {
        id: 'd2u3s3-q3',
        type: 'free-response',
        question:
          'Of 50 students, 30 study French, 25 study Spanish, and 10 study both. How many study neither?',
        correctAnswer: '$50 - (30 + 25 - 10) = 50 - 45 = 5$',
        explanation:
          'Students studying at least one language: $|F \\cup S| = 30 + 25 - 10 = 45$. Students studying neither: $50 - 45 = 5$.',
        difficulty: 2,
      },
      {
        id: 'd2u3s3-q4',
        type: 'free-response',
        question:
          'State the inclusion-exclusion formula for $|A \\cup B|$.',
        correctAnswer: '$|A \\cup B| = |A| + |B| - |A \\cap B|$',
        explanation:
          'When you add $|A|$ and $|B|$, elements in both sets get counted twice. Subtracting $|A \\cap B|$ corrects for this double-counting.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U4 S1 — P vs C Framework Reinforcement
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u4s1',
    title: 'P vs C Framework Reinforcement',
    subunitId: 'd2u4s1',
    questions: [
      {
        id: 'd2u4s1-q1',
        type: 'matching',
        question:
          'For each, state P (permutation) or C (combination) and compute:\n\n(a) How many ways to choose a starting lineup of 5 from a basketball team of 12?\n(b) How many ways can 8 runners finish 1st, 2nd, and 3rd?\n(c) How many different 4-card hands from a standard 52-card deck?\n(d) In how many ways can you assign offices (room A, B, C) to 3 of 10 employees?',
        correctAnswer:
          '(a) C: $C(12,5) = 792$. (b) P: $P(8,3) = 336$. (c) C: $C(52,4) = 270{,}725$. (d) P: $P(10,3) = 720$.',
        explanation:
          '**(a) C** — A lineup is a group; no positions specified. $C(12,5) = 792$. **(b) P** — 1st/2nd/3rd are distinct rankings. $P(8,3) = 8 \\times 7 \\times 6 = 336$. **(c) C** — A hand of cards; order irrelevant. $C(52,4) = 270{,}725$. **(d) P** — Offices are distinct; assigning Alice to room A and Bob to room B differs from Alice to B and Bob to A. $P(10,3) = 720$.',
        difficulty: 2,
      },
      {
        id: 'd2u4s1-q2',
        type: 'multiple-choice',
        question:
          'Choosing a PIN code of 4 distinct digits from 0-9. Permutation or combination?',
        options: ['Permutation', 'Combination'],
        correctAnswer: 'Permutation',
        explanation:
          'A PIN code 1234 is different from 4321 — the order of digits matters. This is $P(10, 4) = 5{,}040$.',
        difficulty: 1,
      },
      {
        id: 'd2u4s1-q3',
        type: 'multiple-choice',
        question:
          'Selecting 3 novels to bring on vacation from a shelf of 15. Permutation or combination?',
        options: ['Permutation', 'Combination'],
        correctAnswer: 'Combination',
        explanation:
          'You are choosing WHICH books, not arranging them. The group {A, B, C} is the same no matter the order you picked them. $C(15, 3) = 455$.',
        difficulty: 1,
      },
      {
        id: 'd2u4s1-q4',
        type: 'free-response',
        question:
          'A license plate has 3 letters followed by 4 digits (repetition allowed). How many plates are possible? Is this a permutation, combination, or neither?',
        correctAnswer:
          '$26^3 \\times 10^4 = 175{,}760{,}000$. This is neither a simple permutation nor combination — it is the multiplication principle with repetition.',
        explanation:
          'Each position is independent with repetition allowed. 3 letters: $26^3$. 4 digits: $10^4$. By the multiplication principle: $26^3 \\times 10^4 = 175{,}760{,}000$. This is not P or C because we allow repetition and have different types of characters.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U4 S2 — Pascal's Triangle & Binomial Coefficients
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u4s2',
    title: "Pascal's Triangle & Binomial Coefficients",
    subunitId: 'd2u4s2',
    questions: [
      {
        id: 'd2u4s2-q1',
        type: 'free-response',
        question:
          "Write out the first 6 rows of Pascal's triangle (rows 0 through 5).",
        correctAnswer:
          'Row 0: 1. Row 1: 1 1. Row 2: 1 2 1. Row 3: 1 3 3 1. Row 4: 1 4 6 4 1. Row 5: 1 5 10 10 5 1.',
        explanation:
          "Each entry is the sum of the two entries directly above it: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. The edges are always 1. Pascal's triangle row $n$ gives the binomial coefficients for $(a+b)^n$.",
        difficulty: 1,
      },
      {
        id: 'd2u4s2-q2',
        type: 'free-response',
        question:
          'Use the binomial theorem to expand $(x + y)^3$.',
        correctAnswer:
          '$x^3 + 3x^2y + 3xy^2 + y^3$',
        explanation:
          '$(x+y)^3 = \\binom{3}{0}x^3 + \\binom{3}{1}x^2y + \\binom{3}{2}xy^2 + \\binom{3}{3}y^3 = x^3 + 3x^2y + 3xy^2 + y^3$. The coefficients 1, 3, 3, 1 are row 3 of Pascal\'s triangle.',
        difficulty: 1,
      },
      {
        id: 'd2u4s2-q3',
        type: 'free-response',
        question:
          'Verify that $\\binom{5}{2} = \\binom{4}{1} + \\binom{4}{2}$.',
        correctAnswer:
          '$\\binom{5}{2} = 10$. $\\binom{4}{1} + \\binom{4}{2} = 4 + 6 = 10$. ✓',
        explanation:
          "This is Pascal's identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. Each entry in Pascal's triangle is the sum of the two entries above it. Combinatorial proof: to choose $r$ items from $n$, either include item $n$ (choose remaining $r-1$ from $n-1$) or exclude it (choose all $r$ from $n-1$).",
        difficulty: 2,
      },
      {
        id: 'd2u4s2-q4',
        type: 'free-response',
        question:
          'What is the coefficient of $x^4 y^6$ in the expansion of $(x + y)^{10}$?',
        correctAnswer: '$\\binom{10}{4} = 210$',
        explanation:
          'In $(x+y)^{10}$, the term with $x^4 y^6$ has coefficient $\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = 210$. Equivalently, $\\binom{10}{6} = 210$ (symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$).',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D2 U4 S3 — Inclusion-Exclusion for Counting
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d2u4s3',
    title: 'Inclusion-Exclusion for Counting',
    subunitId: 'd2u4s3',
    questions: [
      {
        id: 'd2u4s3-q1',
        type: 'free-response',
        question:
          'How many integers from 1 to 100 are divisible by 2 or 3?',
        correctAnswer:
          '$|A \\cup B| = 50 + 33 - 16 = 67$',
        explanation:
          'Let $A$ = multiples of 2, $B$ = multiples of 3. $|A| = \\lfloor 100/2 \\rfloor = 50$. $|B| = \\lfloor 100/3 \\rfloor = 33$. $|A \\cap B|$ = multiples of 6: $\\lfloor 100/6 \\rfloor = 16$. By inclusion-exclusion: $50 + 33 - 16 = 67$.',
        difficulty: 2,
      },
      {
        id: 'd2u4s3-q2',
        type: 'free-response',
        question:
          'How many integers from 1 to 100 are divisible by neither 2 nor 3?',
        correctAnswer: '$100 - 67 = 33$',
        explanation:
          'From the previous problem, 67 integers are divisible by 2 or 3. Those divisible by neither: $100 - 67 = 33$.',
        difficulty: 2,
      },
      {
        id: 'd2u4s3-q3',
        type: 'free-response',
        question:
          'In a group of 40 students, 25 play basketball, 20 play soccer, and 8 play both. How many play at least one sport? How many play neither?',
        correctAnswer:
          'At least one: $25 + 20 - 8 = 37$. Neither: $40 - 37 = 3$.',
        explanation:
          'By inclusion-exclusion: $|B \\cup S| = 25 + 20 - 8 = 37$. Neither: $40 - 37 = 3$ students play no sport.',
        difficulty: 1,
      },
      {
        id: 'd2u4s3-q4',
        type: 'free-response',
        question:
          'How many 3-letter strings using $\\{A, B, C, D, E\\}$ contain at least one A? (Repetition allowed.)',
        correctAnswer: '$5^3 - 4^3 = 125 - 64 = 61$',
        explanation:
          'Total 3-letter strings: $5^3 = 125$. Strings with NO A (using only $\\{B,C,D,E\\}$): $4^3 = 64$. By complementary counting: strings with at least one A = $125 - 64 = 61$.',
        hint: 'Use complementary counting: total minus those with no A.',
        difficulty: 2,
      },
    ],
  },
];
