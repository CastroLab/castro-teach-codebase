// Day 4 Unit Tests: Exam-Level Problems
// Logic Mastery, Number Systems Mastery, Sets Mastery, Combinatorics Mastery

import type { UnitTest } from './index';

export const day4Tests: UnitTest[] = [
  // ═══════════════════════════════════════════════════════════
  // TEST: Logic Mastery (d4u1)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d4u1',
    title: 'Logic Mastery',
    unitId: 'd4u1',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d4u1-p1',
        question:
          'Prove using named logical laws (no truth tables) that:\n$$p \\vee (p \\wedge q) \\equiv p$$\nCite each law at every step.',
        pointValue: 5,
        correctAnswer: '$p \\vee (p \\wedge q) \\equiv p$ (Absorption Law)',
        solution:
          'This is the Absorption Law. Proof from first principles:\n\nStep 1: $p \\vee (p \\wedge q) \\equiv (p \\wedge T) \\vee (p \\wedge q)$ (Identity Law: $p = p \\wedge T$)\n\nStep 2: $\\equiv p \\wedge (T \\vee q)$ (Distributive Law: factor out $p$)\n\nStep 3: $\\equiv p \\wedge T$ (Domination Law: $T \\vee q = T$)\n\nStep 4: $\\equiv p$ (Identity Law: $p \\wedge T = p$)',
      },
      {
        id: 'test-d4u1-p2',
        question:
          'Prove using logical equivalences that:\n$$(p \\to q) \\wedge (p \\to r) \\equiv p \\to (q \\wedge r)$$',
        pointValue: 6,
        correctAnswer: '$(p \\to q) \\wedge (p \\to r) \\equiv p \\to (q \\wedge r)$',
        solution:
          'Step 1: Convert both conditionals using material implication.\n$$(\\neg p \\vee q) \\wedge (\\neg p \\vee r) \\quad \\text{(Material Implication, applied twice)}$$\n\nStep 2: Factor out $\\neg p$ using Distributive Law.\n$$\\neg p \\vee (q \\wedge r) \\quad \\text{(Distributive Law: } X \\vee (Y \\wedge Z) \\leftarrow (X \\vee Y) \\wedge (X \\vee Z)\\text{)}$$\n\nStep 3: Convert back to conditional.\n$$p \\to (q \\wedge r) \\quad \\text{(Material Implication)}$$\n\nInterpretation: "If $p$ then $q$, and if $p$ then $r$" is the same as "If $p$, then both $q$ and $r$."',
      },
      {
        id: 'test-d4u1-p3',
        question:
          'Determine whether the following argument is valid using a truth table:\n\nPremise 1: $p \\vee q$\nPremise 2: $\\neg p$\nConclusion: $q$',
        pointValue: 5,
        correctAnswer: 'Valid. This is Disjunctive Syllogism.',
        solution:
          'An argument is valid if whenever ALL premises are true, the conclusion is true.\n\n| $p$ | $q$ | $p \\vee q$ | $\\neg p$ | Both premises true? | $q$ |\n|-----|-----|-----------|----------|--------------------|----- |\n|  T  |  T  |     T     |    F     |        No          |  T  |\n|  T  |  F  |     T     |    F     |        No          |  F  |\n|  F  |  T  |     T     |    T     |        YES         |  T  |\n|  F  |  F  |     F     |    T     |        No          |  F  |\n\nThe only row where both premises are true (row 3) has $q = T$. So the argument is VALID.\n\nThis is Disjunctive Syllogism: from $p \\vee q$ and $\\neg p$, conclude $q$. "If one or the other is true, and it\'s not the first, then it must be the second."',
      },
      {
        id: 'test-d4u1-p4',
        question:
          'Negate the following compound statement and simplify completely:\n$$\\neg[(p \\to q) \\wedge (\\neg q \\to r)]$$',
        pointValue: 5,
        correctAnswer: '$(p \\wedge \\neg q) \\vee (q \\wedge \\neg r)$',
        solution:
          'Step 1: Apply De Morgan\'s to the conjunction:\n$$\\neg(p \\to q) \\vee \\neg(\\neg q \\to r)$$\n\nStep 2: Negate each conditional using $\\neg(A \\to B) \\equiv A \\wedge \\neg B$:\n$$\\neg(p \\to q) \\equiv p \\wedge \\neg q$$\n$$\\neg(\\neg q \\to r) \\equiv \\neg q \\wedge \\neg r$$\n\nWait — let me recompute the second one:\n$$\\neg(\\neg q \\to r) \\equiv \\neg q \\wedge \\neg r$$\n\nStep 3: Combine:\n$$(p \\wedge \\neg q) \\vee (\\neg q \\wedge \\neg r)$$\n\nStep 4: Factor out $\\neg q$:\n$$\\neg q \\wedge (p \\vee \\neg r)$$\n\nThis is the fully simplified form: $\\neg q \\wedge (p \\vee \\neg r)$.',
      },
      {
        id: 'test-d4u1-p5',
        question:
          'Prove using a chain of equivalences that $\\neg(p \\oplus q) \\equiv p \\leftrightarrow q$, where $\\oplus$ is XOR.',
        pointValue: 4,
        correctAnswer: '$\\neg(p \\oplus q) \\equiv (p \\leftrightarrow q)$',
        solution:
          'Recall that XOR means "exactly one is true" and biconditional means "both same."\n\n$p \\oplus q \\equiv (p \\vee q) \\wedge \\neg(p \\wedge q)$ (definition of XOR)\n\nAlternatively, $p \\oplus q \\equiv (p \\wedge \\neg q) \\vee (\\neg p \\wedge q)$.\n\nSo $\\neg(p \\oplus q) \\equiv \\neg[(p \\wedge \\neg q) \\vee (\\neg p \\wedge q)]$\n$\\equiv \\neg(p \\wedge \\neg q) \\wedge \\neg(\\neg p \\wedge q)$ (De Morgan\'s)\n$\\equiv (\\neg p \\vee q) \\wedge (p \\vee \\neg q)$ (De Morgan\'s on each)\n$\\equiv (p \\to q) \\wedge (q \\to p)$ (Material Implication)\n$\\equiv p \\leftrightarrow q$ (definition of biconditional)\n\nIntuition: XOR is true when the values differ; biconditional is true when they agree. They are negations of each other.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Number Systems Mastery (d4u2)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d4u2',
    title: 'Number Systems Mastery',
    unitId: 'd4u2',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d4u2-p1',
        question:
          'Convert $213_5$ (base 5) to base 3. Show your work.',
        pointValue: 5,
        correctAnswer: '$213_5 = 58_{10} = 2011_3$',
        solution:
          'Step 1: Base 5 to decimal.\n$2 \\cdot 5^2 + 1 \\cdot 5^1 + 3 \\cdot 5^0 = 50 + 5 + 3 = 58_{10}$.\n\nStep 2: Decimal to base 3 (repeated division).\n$58 \\div 3 = 19$ R $1$\n$19 \\div 3 = 6$ R $1$\n$6 \\div 3 = 2$ R $0$\n$2 \\div 3 = 0$ R $2$\nReading bottom-to-top: $2011_3$.\n\nCheck: $2 \\cdot 27 + 0 \\cdot 9 + 1 \\cdot 3 + 1 = 54 + 0 + 3 + 1 = 58$. Correct.',
      },
      {
        id: 'test-d4u2-p2',
        question:
          "In 8-bit two's complement:\n(a) What decimal value does $10000000$ represent?\n(b) What happens when you negate $-128$ (try to compute $+128$)?\n(c) Compute $01100100 + 01100100$ and explain the result.",
        pointValue: 6,
        correctAnswer:
          '(a) $-128$ (b) Overflow: $+128$ is not representable. (c) $11001000 = -56$, overflow occurred.',
        solution:
          "(a) $10000000$ in two's complement: the leading 1 means negative. The value is $-2^7 = -128$. This is the most negative 8-bit two's complement number.\n\n(b) To negate $-128$ ($10000000$): flip bits to get $01111111$, add 1 to get $10000000$ = $-128$ again! The result is $-128$, not $+128$, because $+128$ exceeds the 8-bit range $[-128, 127]$. This is the one value where negation overflows.\n\n(c) $01100100 = +100$.\n$01100100 + 01100100$: This is $100 + 100 = 200$, but $200 > 127$ (max 8-bit signed value).\nBinary addition: $01100100 + 01100100 = 11001000$.\nInterpreted as signed: $11001000$ has leading $1$ (negative). Flip: $00110111$, add 1: $00111000 = 56$. So the result is $-56$.\nThis is overflow: adding two positive numbers yielded a negative result. The mathematical answer ($200$) is not representable.",
      },
      {
        id: 'test-d4u2-p3',
        question:
          'Solve: $3x \\equiv 5 \\pmod{7}$. Find the smallest non-negative $x$.',
        pointValue: 5,
        correctAnswer: '$x = 4$',
        solution:
          'We need $3x \\equiv 5 \\pmod{7}$.\n\nMethod: Find the multiplicative inverse of 3 modulo 7.\nWe need $3 \\cdot 3^{-1} \\equiv 1 \\pmod{7}$.\nTest: $3 \\cdot 1 = 3$, $3 \\cdot 2 = 6$, $3 \\cdot 3 = 9 \\equiv 2$, $3 \\cdot 4 = 12 \\equiv 5$, $3 \\cdot 5 = 15 \\equiv 1$.\nSo $3^{-1} \\equiv 5 \\pmod{7}$.\n\nMultiply both sides of $3x \\equiv 5$ by $5$:\n$x \\equiv 5 \\cdot 5 = 25 \\equiv 4 \\pmod{7}$.\n\nVerify: $3 \\cdot 4 = 12 = 7 + 5 \\equiv 5 \\pmod{7}$. Correct.\n\nThe smallest non-negative solution is $x = 4$.',
      },
      {
        id: 'test-d4u2-p4',
        question:
          'Using the Caesar cipher with shift $k = 7$ and alphabet A=0, B=1, ..., Z=25, encrypt the word "MATH".',
        pointValue: 4,
        correctAnswer: 'MATH encrypts to THAO.',
        solution:
          'Caesar encryption: $E(x) = (x + 7) \\bmod 26$.\n\nM = 12: $E(12) = 19$ = T\nA = 0: $E(0) = 7$ = H\nT = 19: $E(19) = 26 \\bmod 26 = 0$ = A\nH = 7: $E(7) = 14$ = O\n\nEncrypted: THAO.\n\nTo decrypt: $D(y) = (y - 7) \\bmod 26$.\nT=19: $(19-7) = 12$ = M. H=7: $(7-7) = 0$ = A. A=0: $(0-7) = -7 \\equiv 19 \\pmod{26}$ = T. O=14: $(14-7) = 7$ = H. Gives MATH. Correct.',
      },
      {
        id: 'test-d4u2-p5',
        question:
          'Convert $\\text{BEEF}_{16}$ to decimal.',
        pointValue: 5,
        correctAnswer: '$48{,}879$',
        solution:
          '$\\text{B} = 11, \\text{E} = 14, \\text{E} = 14, \\text{F} = 15$.\n\n$$11 \\cdot 16^3 + 14 \\cdot 16^2 + 14 \\cdot 16^1 + 15 \\cdot 16^0$$\n$$= 11 \\cdot 4096 + 14 \\cdot 256 + 14 \\cdot 16 + 15$$\n$$= 45{,}056 + 3{,}584 + 224 + 15$$\n$$= 48{,}879$$',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Sets Mastery (d4u3)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d4u3',
    title: 'Sets Mastery',
    unitId: 'd4u3',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d4u3-p1',
        question:
          'A survey of 200 college students found: 120 use Instagram, 95 use TikTok, 80 use Twitter, 50 use both Instagram and TikTok, 35 use both Instagram and Twitter, 30 use both TikTok and Twitter, and 15 use all three. How many use:\n(a) At least one platform?\n(b) None of the three?\n(c) Exactly one platform?',
        pointValue: 8,
        correctAnswer: '(a) 195 (b) 5 (c) 110',
        solution:
          'Three-set inclusion-exclusion:\n$$|I \\cup T \\cup W| = |I| + |T| + |W| - |I \\cap T| - |I \\cap W| - |T \\cap W| + |I \\cap T \\cap W|$$\n$$= 120 + 95 + 80 - 50 - 35 - 30 + 15 = 195$$\n\n(a) At least one: $195$.\n\n(b) None: $200 - 195 = 5$.\n\n(c) Exactly one = Only Instagram + Only TikTok + Only Twitter.\nOnly I: $|I| - |I \\cap T| - |I \\cap W| + |I \\cap T \\cap W| = 120 - 50 - 35 + 15 = 50$.\nOnly T: $|T| - |I \\cap T| - |T \\cap W| + |I \\cap T \\cap W| = 95 - 50 - 30 + 15 = 30$.\nOnly W: $|W| - |I \\cap W| - |T \\cap W| + |I \\cap T \\cap W| = 80 - 35 - 30 + 15 = 30$.\nExactly one: $50 + 30 + 30 = 110$.',
      },
      {
        id: 'test-d4u3-p2',
        question:
          'Let $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$, $U = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$. Compute the symmetric difference $A \\triangle B$ and verify that $A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$.',
        pointValue: 5,
        correctAnswer: '$A \\triangle B = \\{1, 2, 5, 6\\}$',
        solution:
          'The symmetric difference $A \\triangle B$ contains elements in exactly one of $A, B$.\n\n$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = \\{1, 2\\} \\cup \\{5, 6\\} = \\{1, 2, 5, 6\\}$.\n\nVerification:\n$A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$\n$A \\cap B = \\{3, 4\\}$\n$(A \\cup B) \\setminus (A \\cap B) = \\{1, 2, 3, 4, 5, 6\\} \\setminus \\{3, 4\\} = \\{1, 2, 5, 6\\}$. Matches.',
      },
      {
        id: 'test-d4u3-p3',
        question:
          'Evaluate step by step:\n$$\\overline{(\\overline{A} \\cup B)} \\cap (A \\cup \\overline{B})$$\nSimplify using set identities.',
        pointValue: 6,
        correctAnswer: '$A \\cap \\overline{B}$',
        solution:
          'Step 1: Apply De Morgan\'s to $\\overline{(\\overline{A} \\cup B)}$:\n$$\\overline{(\\overline{A} \\cup B)} = \\overline{\\overline{A}} \\cap \\overline{B} = A \\cap \\overline{B}$$\n\nStep 2: Substitute:\n$$(A \\cap \\overline{B}) \\cap (A \\cup \\overline{B})$$\n\nStep 3: Apply the Absorption Law. Since $A \\cap \\overline{B} \\subseteq A \\cup \\overline{B}$ always holds (if $x \\in A \\cap \\overline{B}$, then $x \\in A$, so $x \\in A \\cup \\overline{B}$), the intersection with the larger set is just the smaller set:\n$$(A \\cap \\overline{B}) \\cap (A \\cup \\overline{B}) = A \\cap \\overline{B}$$\n\nAlternatively, using Distributive + Idempotent laws:\n$(A \\cap \\overline{B}) \\cap (A \\cup \\overline{B}) = A \\cap \\overline{B} \\cap A \\cup A \\cap \\overline{B} \\cap \\overline{B}$...\nThe Absorption approach is cleanest.',
      },
      {
        id: 'test-d4u3-p4',
        question:
          'In a database of 500 products, the following attributes are tracked:\n- 280 are on sale ($S$)\n- 320 are in stock ($I$)\n- 150 are both on sale and in stock.\n\nA customer can only purchase items that are both on sale AND in stock. How many items are purchasable? How many are neither on sale nor in stock?',
        pointValue: 6,
        correctAnswer: 'Purchasable: 150. Neither: 50.',
        solution:
          'Purchasable = $|S \\cap I| = 150$ (given directly).\n\nFor "neither": first compute how many have at least one attribute.\n$|S \\cup I| = |S| + |I| - |S \\cap I| = 280 + 320 - 150 = 450$.\n\nNeither: $500 - |S \\cup I| = 500 - 450 = 50$.\n\nBreakdown:\n- On sale only: $280 - 150 = 130$\n- In stock only: $320 - 150 = 170$\n- Both: $150$\n- Neither: $50$\n- Total: $130 + 170 + 150 + 50 = 500$. Check.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Combinatorics Mastery (d4u4)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d4u4',
    title: 'Combinatorics Mastery',
    unitId: 'd4u4',
    timeMinutes: 20,
    totalPoints: 28,
    parts: [
      {
        id: 'test-d4u4-p1',
        question:
          'In the SET card game, each card has 4 attributes (color, shape, number, shading), each with 3 possible values. How many distinct cards are in a SET deck?',
        pointValue: 4,
        correctAnswer: '$3^4 = 81$ cards.',
        solution:
          'Each card is defined by 4 independent attributes, each with 3 options:\n- Color: red, green, purple (3 choices)\n- Shape: diamond, squiggle, oval (3 choices)\n- Number: 1, 2, 3 (3 choices)\n- Shading: solid, striped, open (3 choices)\n\nBy the multiplication principle: $3 \\times 3 \\times 3 \\times 3 = 3^4 = 81$ distinct cards.\n\nThis is equivalent to counting functions from a 4-element set (attributes) to a 3-element set (values), or equivalently, 4-digit base-3 numbers from $0000_3$ to $2222_3$.',
      },
      {
        id: 'test-d4u4-p2',
        question:
          'How many ways can you choose a SET (3 cards) from the 81-card deck? (Note: This counts all possible 3-card selections, not just valid SETs.)',
        pointValue: 4,
        correctAnswer: '$\\binom{81}{3} = 85{,}320$',
        solution:
          '**P vs C Decision:** Does the order of choosing the 3 cards matter? NO — a SET is an unordered collection of 3 cards.\n\nUse combination:\n$$\\binom{81}{3} = \\frac{81!}{3! \\cdot 78!} = \\frac{81 \\times 80 \\times 79}{6} = \\frac{511{,}920}{6} = 85{,}320$$\n\nOut of these 85,320 possible 3-card selections, exactly 1,080 form valid SETs (where each attribute is either all the same or all different across the 3 cards).',
      },
      {
        id: 'test-d4u4-p3',
        question:
          'A committee of 5 is to be formed from 6 men and 7 women. How many committees have:\n(a) Exactly 3 women?\n(b) At least 1 woman?',
        pointValue: 6,
        correctAnswer: '(a) $\\binom{7}{3} \\cdot \\binom{6}{2} = 525$ (b) $\\binom{13}{5} - \\binom{6}{5} = 1281$',
        solution:
          '(a) Choose 3 women from 7 AND 2 men from 6. Both are unordered selections.\n$$\\binom{7}{3} \\times \\binom{6}{2} = 35 \\times 15 = 525$$\n\n(b) At least 1 woman = Total minus all-men committees.\nTotal ways to form a 5-person committee from 13 people: $\\binom{13}{5} = \\frac{13 \\times 12 \\times 11 \\times 10 \\times 9}{120} = 1{,}287$.\nAll men: $\\binom{6}{5} = 6$.\nAt least 1 woman: $1{,}287 - 6 = 1{,}281$.\n\nThe complementary counting technique (total minus unwanted) is often easier than direct counting (summing over cases of 1, 2, 3, 4, or 5 women).',
      },
      {
        id: 'test-d4u4-p4',
        question:
          'How many ways can you distribute 15 identical candies among 4 children if the first child must get at least 3 candies and the second child must get at least 2?',
        pointValue: 7,
        correctAnswer: '$\\binom{13}{3} = 286$',
        solution:
          'First, satisfy the minimum requirements: give child 1 three candies and child 2 two candies. This uses $3 + 2 = 5$ candies.\n\nRemaining: $15 - 5 = 10$ identical candies to distribute among 4 children with no restrictions.\n\nThis is a stars and bars problem:\n$$\\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3} = \\frac{13 \\times 12 \\times 11}{6} = 286$$\n\nKey insight: Lower bounds on individual bins are handled by pre-allocating the minimum, then distributing the remainder freely.',
      },
      {
        id: 'test-d4u4-p5',
        question:
          'A hand of 5 cards is dealt from a standard 52-card deck. How many hands contain:\n(a) All 5 cards of the same suit (a flush)?\n(b) Exactly one pair (exactly two cards of the same rank and the other three all different ranks)?',
        pointValue: 7,
        correctAnswer: '(a) $\\binom{4}{1} \\cdot \\binom{13}{5} = 5{,}148$ (b) $\\binom{13}{1} \\cdot \\binom{4}{2} \\cdot \\binom{12}{3} \\cdot 4^3 = 1{,}098{,}240$',
        solution:
          '(a) Flush: choose 1 suit from 4, then choose 5 cards from that suit\'s 13.\n$$\\binom{4}{1} \\cdot \\binom{13}{5} = 4 \\times 1{,}287 = 5{,}148$$\n(This includes straight flushes and royal flushes.)\n\n(b) Exactly one pair:\nStep 1: Choose the rank for the pair: $\\binom{13}{1} = 13$.\nStep 2: Choose 2 cards of that rank: $\\binom{4}{2} = 6$.\nStep 3: Choose 3 different ranks from the remaining 12 for the non-paired cards: $\\binom{12}{3} = 220$.\nStep 4: For each of the 3 non-paired ranks, choose 1 suit: $4^3 = 64$.\n\nTotal: $13 \\times 6 \\times 220 \\times 64 = 1{,}098{,}240$.\n\nP vs C check: The hand is unordered (combination), but within each step we carefully account for which cards are selected.',
      },
    ],
  },
];
