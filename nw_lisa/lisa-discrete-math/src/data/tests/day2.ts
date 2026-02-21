// Day 2 Unit Tests: Deepening
// Logic Depth, Numbers Depth, Sets Operations, Counting Formulas

import type { UnitTest } from './index';

export const day2Tests: UnitTest[] = [
  // ═══════════════════════════════════════════════════════════
  // TEST: Logic Depth (d2u1)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d2u1',
    title: 'Logic Depth',
    unitId: 'd2u1',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d2u1-p1',
        question:
          'Construct the truth table for $(p \\to q) \\wedge (q \\to p)$. What single connective is this equivalent to?',
        pointValue: 5,
        correctAnswer:
          'Output: T, F, F, T. This is equivalent to $p \\leftrightarrow q$ (biconditional).',
        solution:
          '| $p$ | $q$ | $p \\to q$ | $q \\to p$ | $(p \\to q) \\wedge (q \\to p)$ |\n|-----|-----|-----------|-----------|-------------------------------|\n|  T  |  T  |     T     |     T     |              T                |\n|  T  |  F  |     F     |     T     |              F                |\n|  F  |  T  |     T     |     F     |              F                |\n|  F  |  F  |     T     |     T     |              T                |\n\nThe output column (T, F, F, T) matches the truth table for $p \\leftrightarrow q$.\n\nThis makes intuitive sense: $p \\leftrightarrow q$ means "$p$ if and only if $q$", which is exactly "$p$ implies $q$" AND "$q$ implies $p$".',
      },
      {
        id: 'test-d2u1-p2',
        question:
          'Given the statement "If it is raining, then the ground is wet" ($p \\to q$), write:\n(a) The converse\n(b) The inverse\n(c) The contrapositive\n(d) Which of these is logically equivalent to the original?',
        pointValue: 5,
        correctAnswer:
          '(a) $q \\to p$ (b) $\\neg p \\to \\neg q$ (c) $\\neg q \\to \\neg p$ (d) The contrapositive.',
        solution:
          'Original: $p \\to q$ — "If it is raining, then the ground is wet."\n\n(a) Converse: $q \\to p$ — "If the ground is wet, then it is raining." (NOT equivalent to original — the ground could be wet from a sprinkler.)\n\n(b) Inverse: $\\neg p \\to \\neg q$ — "If it is not raining, then the ground is not wet." (NOT equivalent to original — same issue, other water sources.)\n\n(c) Contrapositive: $\\neg q \\to \\neg p$ — "If the ground is not wet, then it is not raining." This IS logically equivalent to the original.\n\n(d) The contrapositive ($\\neg q \\to \\neg p$) is the only one logically equivalent to $p \\to q$. You can verify this by truth table: both have the column T, F, T, T.\n\nNote: The converse and inverse are equivalent to EACH OTHER (each is the contrapositive of the other).',
      },
      {
        id: 'test-d2u1-p3',
        question:
          'Prove using logical equivalences (not truth tables) that:\n$$p \\to q \\equiv \\neg p \\vee q$$\nCite the law or identity used at each step.',
        pointValue: 5,
        correctAnswer: '$p \\to q \\equiv \\neg p \\vee q$',
        solution:
          'This is actually the definition of the conditional in terms of basic connectives, but we can verify it from the material implication equivalence:\n\nBy the material implication law:\n$$p \\to q \\equiv \\neg p \\vee q$$\n\nThis is one of the fundamental equivalences to memorize. It says: "if $p$ then $q$" is the same as "either $p$ is false, or $q$ is true."\n\nIf we want to verify with truth tables:\n| $p$ | $q$ | $p \\to q$ | $\\neg p$ | $\\neg p \\vee q$ |\n|-----|-----|-----------|----------|----------------|\n|  T  |  T  |     T     |    F     |       T        |\n|  T  |  F  |     F     |    F     |       F        |\n|  F  |  T  |     T     |    T     |       T        |\n|  F  |  F  |     T     |    T     |       T        |\n\nColumns match, confirming the equivalence.',
      },
      {
        id: 'test-d2u1-p4',
        question:
          'Prove using logical equivalences that:\n$$\\neg(p \\to q) \\equiv p \\wedge \\neg q$$\nCite the identity used at each step.',
        pointValue: 5,
        correctAnswer: '$\\neg(p \\to q) \\equiv p \\wedge \\neg q$',
        solution:
          'Step 1: Replace $\\to$ with its definition.\n$$\\neg(p \\to q) \\equiv \\neg(\\neg p \\vee q) \\quad \\text{(Material Implication)}$$\n\nStep 2: Apply De Morgan\'s Law.\n$$\\equiv \\neg(\\neg p) \\wedge \\neg q \\quad \\text{(De Morgan\'s Law)}$$\n\nStep 3: Simplify the double negation.\n$$\\equiv p \\wedge \\neg q \\quad \\text{(Double Negation Law)}$$\n\nInterpretation: The negation of "if $p$ then $q$" is "$p$ is true AND $q$ is false." The only way an implication fails is when the hypothesis holds but the conclusion does not.',
      },
      {
        id: 'test-d2u1-p5',
        question:
          'Determine whether the following is a tautology, contradiction, or contingency:\n$$[(p \\to q) \\wedge p] \\to q$$\nJustify your answer with a truth table.',
        pointValue: 5,
        correctAnswer: 'This is a tautology (always true).',
        solution:
          '| $p$ | $q$ | $p \\to q$ | $(p \\to q) \\wedge p$ | $[(p \\to q) \\wedge p] \\to q$ |\n|-----|-----|-----------|---------------------|-----------------------------|\n|  T  |  T  |     T     |          T          |              T              |\n|  T  |  F  |     F     |          F          |              T              |\n|  F  |  T  |     T     |          F          |              T              |\n|  F  |  F  |     T     |          F          |              T              |\n\nThe final column is all T, so this is a tautology.\n\nThis is the rule of Modus Ponens: if you know $p \\to q$ and you know $p$, then you can conclude $q$. It is one of the most fundamental rules of inference in logic.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Numbers Depth (d2u2)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d2u2',
    title: 'Numbers Depth',
    unitId: 'd2u2',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d2u2-p1',
        question:
          "Represent the following decimal numbers in 8-bit two's complement binary:\n(a) $+45$\n(b) $-45$\n(c) $-1$",
        pointValue: 6,
        correctAnswer:
          '(a) $00101101$ (b) $11010011$ (c) $11111111$',
        solution:
          "(a) $+45$: Convert 45 to binary: $45 = 32+8+4+1 = 101101_2$. Pad to 8 bits: $00101101$. The leading 0 indicates positive.\n\n(b) $-45$: Start with $+45 = 00101101$. To find two's complement:\nStep 1 — Flip all bits: $11010010$.\nStep 2 — Add 1: $11010010 + 1 = 11010011$.\nSo $-45$ in 8-bit two's complement is $11010011$.\nVerify: $11010011$ has leading 1 (negative). Flip: $00101100$. Add 1: $00101101 = 45$. Correct.\n\n(c) $-1$: Start with $+1 = 00000001$. Flip: $11111110$. Add 1: $11111111$.\nSo $-1$ is $11111111$ in two's complement. This is always all 1s regardless of bit width.",
      },
      {
        id: 'test-d2u2-p2',
        question:
          'Compute the following in modular arithmetic:\n(a) $27 \\mod 5$\n(b) $-3 \\mod 7$\n(c) $(17 \\times 23) \\mod 10$',
        pointValue: 6,
        correctAnswer: '(a) $2$ (b) $4$ (c) $1$',
        solution:
          '(a) $27 \\div 5 = 5$ remainder $2$, so $27 \\mod 5 = 2$.\nAlternatively: $27 = 5 \\times 5 + 2$.\n\n(b) $-3 \\mod 7$: We need a non-negative remainder. $-3 = 7 \\times (-1) + 4$, so $-3 \\mod 7 = 4$.\nAlternatively: $-3 \\equiv -3 + 7 = 4 \\pmod{7}$.\n\n(c) We can use the property $(a \\times b) \\mod n = [(a \\mod n) \\times (b \\mod n)] \\mod n$.\n$17 \\mod 10 = 7$ and $23 \\mod 10 = 3$.\n$(7 \\times 3) \\mod 10 = 21 \\mod 10 = 1$.\nVerify: $17 \\times 23 = 391$, and $391 \\mod 10 = 1$. Correct.',
      },
      {
        id: 'test-d2u2-p3',
        question:
          'Add the following 8-bit binary numbers. Show your work.\n$01010011 + 00101100$',
        pointValue: 4,
        correctAnswer: '$01111111$ (which is $127_{10}$)',
        solution:
          'Binary addition, column by column from right to left:\n\n```\n  01010011   (83)\n+ 00101100   (44)\n----------\n  01111111   (127)\n```\n\nColumn-by-column (right to left):\n$1+0=1$, $1+0=1$, $0+1=1$, $0+1=1$, $1+1=10$ (write 0, carry 1), $0+0+1=1$, $1+1=10$ (write 0, carry 1), $0+0+1=1$.\n\nWait, let me redo carefully:\nPositions (right to left): $1+0=1$, $1+0=1$, $0+1=1$, $0+1=1$, $0+1=1$, $1+0=1$, $0+1=1$, $0+0=0$.\n\nResult: $01111111_2 = 127_{10}$.\nCheck: $83 + 44 = 127$. Correct.',
      },
      {
        id: 'test-d2u2-p4',
        question:
          'Using the Caesar cipher with a shift of $k = 3$ and the alphabet A=0, B=1, ..., Z=25:\n(a) Encrypt the letter "W" (position 22).\n(b) Decrypt the letter "F" (position 5).',
        pointValue: 4,
        correctAnswer: '(a) $Z$ (b) $C$',
        solution:
          'Caesar cipher encryption: $E(x) = (x + k) \\mod 26$.\nCaesar cipher decryption: $D(y) = (y - k) \\mod 26$.\n\n(a) Encrypt "W" (position 22) with $k=3$:\n$E(22) = (22 + 3) \\mod 26 = 25 \\mod 26 = 25 = Z$.\n\n(b) Decrypt "F" (position 5) with $k=3$:\n$D(5) = (5 - 3) \\mod 26 = 2 \\mod 26 = 2 = C$.',
      },
      {
        id: 'test-d2u2-p5',
        question:
          "What is the range of values representable in 8-bit two's complement? What happens if you try to compute $01111111 + 00000001$ in this system?",
        pointValue: 4,
        correctAnswer:
          'Range: $-128$ to $+127$. Adding gives $10000000 = -128$, which is overflow.',
        solution:
          "The range of $n$-bit two's complement is $[-2^{n-1}, 2^{n-1}-1]$.\nFor 8 bits: $[-2^7, 2^7 - 1] = [-128, 127]$.\n\n$01111111_2 = +127$ (the largest positive 8-bit two's complement value).\n$00000001_2 = +1$.\nAdding: $01111111 + 00000001 = 10000000$.\n\nIn two's complement, $10000000 = -128$ (not $+128$).\n\nThis is arithmetic overflow: we tried to compute $127 + 1 = 128$, but 128 exceeds the maximum representable positive value. The result wraps around to the most negative value.\n\nHow to detect overflow: when adding two positive numbers and getting a negative result (or two negatives giving positive), overflow has occurred.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Sets Operations (d2u3)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d2u3',
    title: 'Sets Operations',
    unitId: 'd2u3',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d2u3-p1',
        question:
          'Let $A = \\{1, 2, 3\\}$ and $B = \\{x, y\\}$. List all elements of $A \\times B$ (Cartesian product).',
        pointValue: 4,
        correctAnswer:
          '$A \\times B = \\{(1,x), (1,y), (2,x), (2,y), (3,x), (3,y)\\}$',
        solution:
          'The Cartesian product $A \\times B$ is the set of all ordered pairs $(a, b)$ where $a \\in A$ and $b \\in B$.\n\n$A \\times B = \\{(1,x), (1,y), (2,x), (2,y), (3,x), (3,y)\\}$.\n\n$|A \\times B| = |A| \\times |B| = 3 \\times 2 = 6$. This matches our enumeration.\n\nNote: Order matters in Cartesian products: $A \\times B \\neq B \\times A$ in general. Here $B \\times A$ would contain pairs like $(x, 1)$ instead of $(1, x)$.',
      },
      {
        id: 'test-d2u3-p2',
        question:
          'Let $U = \\{1,2,...,10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{3,4,5,6,7\\}$. Evaluate step by step:\n$$(\\overline{A} \\cup B) \\cap (A \\setminus B)$$',
        pointValue: 5,
        correctAnswer: '$\\emptyset$',
        solution:
          'Step 1: $\\overline{A} = U \\setminus A = \\{6,7,8,9,10\\}$.\n\nStep 2: $\\overline{A} \\cup B = \\{6,7,8,9,10\\} \\cup \\{3,4,5,6,7\\} = \\{3,4,5,6,7,8,9,10\\}$.\n\nStep 3: $A \\setminus B = \\{1,2,3,4,5\\} \\setminus \\{3,4,5,6,7\\} = \\{1,2\\}$.\n\nStep 4: $(\\overline{A} \\cup B) \\cap (A \\setminus B) = \\{3,4,5,6,7,8,9,10\\} \\cap \\{1,2\\} = \\emptyset$.\n\nThe sets have no elements in common. This makes sense: $A \\setminus B$ contains elements only in $A$ (specifically $\\{1,2\\}$), while $\\overline{A} \\cup B$ contains everything EXCEPT elements only in $A$.',
      },
      {
        id: 'test-d2u3-p3',
        question:
          'In a class of 40 students, 25 are taking math, 18 are taking physics, and 8 are taking both. How many students are taking:\n(a) Math or physics (or both)?\n(b) Neither math nor physics?',
        pointValue: 5,
        correctAnswer: '(a) 35 (b) 5',
        solution:
          'Let $M$ = students taking math, $P$ = students taking physics.\n$|M| = 25$, $|P| = 18$, $|M \\cap P| = 8$.\n\n(a) By the inclusion-exclusion principle:\n$$|M \\cup P| = |M| + |P| - |M \\cap P| = 25 + 18 - 8 = 35$$\n\nWe subtract $|M \\cap P|$ because students in both classes were counted twice (once in $|M|$ and once in $|P|$).\n\n(b) Students taking neither = total $-$ students taking at least one.\n$$40 - |M \\cup P| = 40 - 35 = 5$$',
      },
      {
        id: 'test-d2u3-p4',
        question:
          'If $|A| = 5$ and $|B| = 3$, what is $|A \\times B|$? What is $|\\mathcal{P}(A \\times B)|$?',
        pointValue: 5,
        correctAnswer: '$|A \\times B| = 15$ and $|\\mathcal{P}(A \\times B)| = 2^{15} = 32{,}768$.',
        solution:
          '$|A \\times B| = |A| \\times |B| = 5 \\times 3 = 15$.\n\nThe Cartesian product contains 15 ordered pairs.\n\n$|\\mathcal{P}(A \\times B)| = 2^{|A \\times B|} = 2^{15} = 32{,}768$.\n\nThe power set of a set with 15 elements has $2^{15}$ subsets. Each of these subsets is a relation from $A$ to $B$ (a set of ordered pairs), which connects to the study of relations in discrete math.',
      },
      {
        id: 'test-d2u3-p5',
        question:
          'Prove using set identities that $A \\cap (A \\cup B) = A$ for any sets $A, B$.',
        pointValue: 5,
        correctAnswer: '$A \\cap (A \\cup B) = A$ (Absorption Law)',
        solution:
          'This is the Absorption Law. Here is a proof using subset containment.\n\nWe show $A \\cap (A \\cup B) \\subseteq A$ and $A \\subseteq A \\cap (A \\cup B)$.\n\n($\\subseteq$): If $x \\in A \\cap (A \\cup B)$, then $x \\in A$ and $x \\in A \\cup B$. In particular, $x \\in A$.\n\n($\\supseteq$): If $x \\in A$, then certainly $x \\in A \\cup B$ (since $x$ is in $A$). Therefore $x \\in A$ and $x \\in A \\cup B$, which means $x \\in A \\cap (A \\cup B)$.\n\nSince containment goes both ways, $A \\cap (A \\cup B) = A$.\n\nAlternatively, using identities:\n$A \\cap (A \\cup B) = (A \\cup \\emptyset) \\cap (A \\cup B) = A \\cup (\\emptyset \\cap B) = A \\cup \\emptyset = A$\n(using Identity Law, Distributive Law, and Domination/Identity Law).',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Counting Formulas (d2u4)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d2u4',
    title: 'Counting Formulas',
    unitId: 'd2u4',
    timeMinutes: 18,
    totalPoints: 27,
    parts: [
      {
        id: 'test-d2u4-p1',
        question:
          'For each scenario, decide permutation (P) or combination (C), then compute the answer.\n\n(a) Choosing a starting lineup of 5 players from a basketball team of 12 (positions are interchangeable).\n(b) Arranging 4 different books on a shelf from a collection of 9.\n(c) Selecting 3 desserts from a menu of 7 to share at the table.',
        pointValue: 6,
        correctAnswer:
          '(a) C: $\\binom{12}{5} = 792$ (b) P: $P(9,4) = 3024$ (c) C: $\\binom{7}{3} = 35$',
        solution:
          '(a) **P vs C Decision:** "Would rearranging the selection give a DIFFERENT result?" No — the same 5 players on the court is the same lineup. Use combination:\n$\\binom{12}{5} = \\frac{12!}{5! \\cdot 7!} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = \\frac{95{,}040}{120} = 792$.\n\n(b) **P vs C Decision:** "Would rearranging give a DIFFERENT result?" Yes — different orderings on the shelf are visually different arrangements. Use permutation:\n$P(9,4) = 9 \\times 8 \\times 7 \\times 6 = 3{,}024$.\n\n(c) **P vs C Decision:** "Would rearranging give a DIFFERENT result?" No — the same 3 desserts on the table is the same selection. Use combination:\n$\\binom{7}{3} = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{6} = 35$.',
      },
      {
        id: 'test-d2u4-p2',
        question:
          "Write the first 6 rows (rows 0 through 5) of Pascal's Triangle. Then use it to find $\\binom{5}{2}$.",
        pointValue: 5,
        correctAnswer:
          'Row 0: 1; Row 1: 1 1; Row 2: 1 2 1; Row 3: 1 3 3 1; Row 4: 1 4 6 4 1; Row 5: 1 5 10 10 5 1. $\\binom{5}{2} = 10$.',
        solution:
          "Pascal's Triangle:\n```\nRow 0:           1\nRow 1:          1  1\nRow 2:        1  2  1\nRow 3:       1  3  3  1\nRow 4:      1  4  6  4  1\nRow 5:     1  5 10 10  5  1\n```\n\nEach entry is the sum of the two entries above it: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ (Pascal's Rule).\n\nTo find $\\binom{5}{2}$: go to row 5 (bottom row), position 2 (counting from 0). The value is $10$.\n\nVerify: $\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\times 6} = 10$. Correct.",
      },
      {
        id: 'test-d2u4-p3',
        question:
          "Use the Binomial Theorem to expand $(x + y)^4$. Express each coefficient as a binomial coefficient, then compute the numerical values.",
        pointValue: 5,
        correctAnswer:
          '$(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$',
        solution:
          "The Binomial Theorem states:\n$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$\n\nFor $n = 4$:\n$$(x+y)^4 = \\binom{4}{0}x^4 + \\binom{4}{1}x^3y + \\binom{4}{2}x^2y^2 + \\binom{4}{3}xy^3 + \\binom{4}{4}y^4$$\n\nUsing Pascal's Triangle row 4: $1, 4, 6, 4, 1$:\n$$(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$$\n\nNote: The coefficients are symmetric ($\\binom{4}{k} = \\binom{4}{4-k}$), and they sum to $2^4 = 16$ (set $x = y = 1$).",
      },
      {
        id: 'test-d2u4-p4',
        question:
          'A survey finds that among 100 students: 60 like chocolate, 45 like vanilla, and 20 like both. How many like:\n(a) Chocolate or vanilla?\n(b) Chocolate only (not vanilla)?\n(c) Exactly one of the two flavors?',
        pointValue: 6,
        correctAnswer: '(a) 85 (b) 40 (c) 65',
        solution:
          'Let $C$ = chocolate lovers, $V$ = vanilla lovers.\n$|C| = 60$, $|V| = 45$, $|C \\cap V| = 20$.\n\n(a) By inclusion-exclusion:\n$|C \\cup V| = |C| + |V| - |C \\cap V| = 60 + 45 - 20 = 85$.\n\n(b) Chocolate only = chocolate but not vanilla:\n$|C \\setminus V| = |C| - |C \\cap V| = 60 - 20 = 40$.\n\n(c) Exactly one flavor = (chocolate only) + (vanilla only).\nVanilla only: $|V \\setminus C| = |V| - |C \\cap V| = 45 - 20 = 25$.\nExactly one: $40 + 25 = 65$.\n\nAlternatively: $|C \\cup V| - |C \\cap V| = 85 - 20 = 65$ (total who like at least one minus those who like both). This is the symmetric difference $|C \\triangle V|$.',
      },
      {
        id: 'test-d2u4-p5',
        question:
          'Verify Pascal\'s Rule for $\\binom{6}{2}$: show that $\\binom{6}{2} = \\binom{5}{1} + \\binom{5}{2}$.',
        pointValue: 5,
        correctAnswer: '$\\binom{6}{2} = 15 = 5 + 10 = \\binom{5}{1} + \\binom{5}{2}$',
        solution:
          "Compute each side:\n\nLeft side: $\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{6 \\times 5}{2} = 15$.\n\nRight side:\n$\\binom{5}{1} = 5$\n$\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{5 \\times 4}{2} = 10$\n$\\binom{5}{1} + \\binom{5}{2} = 5 + 10 = 15$.\n\nBoth sides equal 15, confirming Pascal's Rule.\n\nPascal's Rule in general: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$.\n\nCombinatorial proof: Consider $n$ items, with one distinguished item $x$. Subsets of size $k$ either include $x$ ($\\binom{n-1}{k-1}$ ways to choose the remaining $k-1$) or exclude $x$ ($\\binom{n-1}{k}$ ways to choose all $k$ from the remaining $n-1$).",
      },
    ],
  },
];
