// Day 3 Unit Tests: Connecting Concepts
// Logic + Circuits, Quantifiers + Sets, Number Theory, Applied Counting

import type { UnitTest } from './index';

export const day3Tests: UnitTest[] = [
  // ═══════════════════════════════════════════════════════════
  // TEST: Logic + Circuits (d3u1)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d3u1',
    title: 'Logic + Circuits',
    unitId: 'd3u1',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d3u1-p1',
        question:
          'Write the Boolean expression for a circuit that has inputs $A$ and $B$, feeds both into an AND gate, and then feeds the output of the AND gate into a NOT gate. Construct the truth table for the resulting circuit.',
        pointValue: 5,
        correctAnswer:
          '$\\neg(A \\wedge B)$ — this is a NAND gate. Output column: F, T, T, T.',
        solution:
          'The circuit: $A$ and $B$ go into an AND gate, producing $A \\wedge B$. This output goes into a NOT gate, producing $\\neg(A \\wedge B)$.\n\nThis is the NAND gate!\n\n| $A$ | $B$ | $A \\wedge B$ | $\\neg(A \\wedge B)$ |\n|-----|-----|-------------|--------------------|\n|  T  |  T  |      T      |         F          |\n|  T  |  F  |      F      |         T          |\n|  F  |  T  |      F      |         T          |\n|  F  |  F  |      F      |         T          |\n\nThe NAND gate outputs FALSE only when both inputs are TRUE. It is one of the two universal gates (along with NOR), meaning any Boolean function can be built using only NAND gates.',
      },
      {
        id: 'test-d3u1-p2',
        question:
          'Show how to build each of the following using only NAND gates:\n(a) NOT gate\n(b) AND gate\n(c) OR gate',
        pointValue: 6,
        correctAnswer:
          '(a) $\\text{NAND}(A, A) = \\neg A$ (b) $\\text{NAND}(\\text{NAND}(A,B), \\text{NAND}(A,B)) = A \\wedge B$ (c) $\\text{NAND}(\\text{NAND}(A,A), \\text{NAND}(B,B)) = A \\vee B$',
        solution:
          '(a) NOT from NAND: Feed the same input into both ports.\n$\\text{NAND}(A, A) = \\neg(A \\wedge A) = \\neg A$ (since $A \\wedge A = A$ by idempotence).\n\n(b) AND from NAND: First compute NAND, then negate it (using the NOT trick).\nLet $X = \\text{NAND}(A, B) = \\neg(A \\wedge B)$.\nThen $\\text{NAND}(X, X) = \\neg X = \\neg\\neg(A \\wedge B) = A \\wedge B$.\nThis uses 2 NAND gates.\n\n(c) OR from NAND: Apply De Morgan\'s. $A \\vee B = \\neg(\\neg A \\wedge \\neg B)$.\nFirst: $\\neg A = \\text{NAND}(A, A)$ and $\\neg B = \\text{NAND}(B, B)$.\nThen: $A \\vee B = \\text{NAND}(\\neg A, \\neg B) = \\text{NAND}(\\text{NAND}(A,A), \\text{NAND}(B,B))$.\nThis uses 3 NAND gates.',
      },
      {
        id: 'test-d3u1-p3',
        question:
          'A vending machine dispenses a drink when: a coin has been inserted ($C$), a selection has been made ($S$), and the item is NOT out of stock ($\\neg O$). Write the Boolean expression and determine the output for all 8 input combinations.',
        pointValue: 5,
        correctAnswer: '$D = C \\wedge S \\wedge \\neg O$. Only true when $C=T, S=T, O=F$.',
        solution:
          'The dispense signal:\n$$D = C \\wedge S \\wedge \\neg O$$\n\n| $C$ | $S$ | $O$ | $\\neg O$ | $D$ |\n|-----|-----|-----|----------|-----|\n|  T  |  T  |  T  |    F     |  F  |\n|  T  |  T  |  F  |    T     |  T  |\n|  T  |  F  |  T  |    F     |  F  |\n|  T  |  F  |  F  |    T     |  F  |\n|  F  |  T  |  T  |    F     |  F  |\n|  F  |  T  |  F  |    T     |  F  |\n|  F  |  F  |  T  |    F     |  F  |\n|  F  |  F  |  F  |    T     |  F  |\n\nThe machine dispenses only in one scenario: coin inserted, selection made, item in stock.',
      },
      {
        id: 'test-d3u1-p4',
        question:
          'Knights and Knaves: On an island, knights always tell the truth and knaves always lie. You meet two people, $A$ and $B$.\n\n$A$ says: "We are both knaves."\n\nWhat are $A$ and $B$?',
        pointValue: 5,
        correctAnswer: '$A$ is a knave and $B$ is a knight.',
        solution:
          'Let $a$ = "$A$ is a knight" and $b$ = "$B$ is a knight."\n$A$\'s statement: "We are both knaves" = $\\neg a \\wedge \\neg b$.\n\nCase 1: $A$ is a knight ($a = T$). Then $A$ tells truth, so $\\neg a \\wedge \\neg b$ is true. But $\\neg a = F$, so the conjunction is $F$. Contradiction.\n\nCase 2: $A$ is a knave ($a = F$). Then $A$ lies, so $\\neg a \\wedge \\neg b$ is false. We have $\\neg a = T$, so $T \\wedge \\neg b = F$ requires $\\neg b = F$, i.e., $b = T$.\n\nConclusion: $A$ is a knave, $B$ is a knight.\n\nVerification: $A$ (knave) says "We are both knaves." The truth is only $A$ is a knave, so the statement is false. A knave lying about this is consistent.',
      },
      {
        id: 'test-d3u1-p5',
        question:
          'Simplify the Boolean expression $\\neg(\\neg A \\vee B) \\vee (A \\wedge B)$ using algebraic identities. Show each step and name the law used.',
        pointValue: 4,
        correctAnswer: '$A$',
        solution:
          'Step 1: Apply De Morgan\'s to $\\neg(\\neg A \\vee B)$:\n$\\neg(\\neg A \\vee B) = \\neg(\\neg A) \\wedge \\neg B = A \\wedge \\neg B$ (De Morgan\'s + Double Negation)\n\nStep 2: Substitute:\n$(A \\wedge \\neg B) \\vee (A \\wedge B)$\n\nStep 3: Factor $A$ using Distributive Law:\n$A \\wedge (\\neg B \\vee B)$\n\nStep 4: Complement Law ($\\neg B \\vee B = T$):\n$A \\wedge T$\n\nStep 5: Identity Law ($A \\wedge T = A$):\n$A$',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Quantifiers + Sets (d3u2)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d3u2',
    title: 'Quantifiers + Sets',
    unitId: 'd3u2',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d3u2-p1',
        question:
          'Translate each English statement into predicate logic. Domain: all real numbers.\n\n(a) Every positive number has a positive square root.\n(b) There exists a number whose square is 2.\n(c) For every number $x$, there exists a number $y$ such that $x + y = 0$.',
        pointValue: 5,
        correctAnswer:
          '(a) $\\forall x (x > 0 \\to \\exists y (y > 0 \\wedge y^2 = x))$ (b) $\\exists x (x^2 = 2)$ (c) $\\forall x \\exists y (x + y = 0)$',
        solution:
          '(a) "Every positive number" = $\\forall x$ with condition $x > 0$. Use conditional with $\\forall$:\n$$\\forall x (x > 0 \\to \\exists y (y > 0 \\wedge y^2 = x))$$\n\n(b) Direct existential: $\\exists x (x^2 = 2)$. (Witness: $x = \\sqrt{2}$.)\n\n(c) Nested quantifiers:\n$$\\forall x \\exists y (x + y = 0)$$\nTrue: for any $x$, choose $y = -x$.',
      },
      {
        id: 'test-d3u2-p2',
        question:
          'Negate each statement and simplify.\n\n(a) $\\forall x P(x)$\n(b) $\\exists x (P(x) \\wedge Q(x))$\n(c) $\\forall x \\exists y (x + y > 0)$',
        pointValue: 6,
        correctAnswer:
          '(a) $\\exists x \\neg P(x)$ (b) $\\forall x (\\neg P(x) \\vee \\neg Q(x))$ (c) $\\exists x \\forall y (x + y \\leq 0)$',
        solution:
          '(a) $\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)$.\nFlip $\\forall$ to $\\exists$ and negate the body.\n\n(b) $\\neg \\exists x (P(x) \\wedge Q(x))$\n$\\equiv \\forall x \\neg(P(x) \\wedge Q(x))$ (flip $\\exists$ to $\\forall$)\n$\\equiv \\forall x (\\neg P(x) \\vee \\neg Q(x))$ (De Morgan\'s).\n\n(c) $\\neg \\forall x \\exists y (x + y > 0)$\n$\\equiv \\exists x \\neg \\exists y (x + y > 0)$ (flip outer $\\forall$)\n$\\equiv \\exists x \\forall y \\neg(x + y > 0)$ (flip inner $\\exists$)\n$\\equiv \\exists x \\forall y (x + y \\leq 0)$.',
      },
      {
        id: 'test-d3u2-p3',
        question:
          'Explain in plain English the difference between $\\forall x \\exists y R(x, y)$ and $\\exists y \\forall x R(x, y)$. Give a concrete example where the first is true but the second is false.',
        pointValue: 5,
        correctAnswer:
          'The first allows $y$ to depend on $x$; the second requires one fixed $y$ for all $x$.',
        solution:
          '$\\forall x \\exists y R(x, y)$: "For every $x$, there is SOME $y$ (possibly depending on $x$) that makes $R(x,y)$ true."\n\n$\\exists y \\forall x R(x, y)$: "There is a SINGLE fixed $y$ that works for ALL $x$."\n\nExample: Let $R(x, y)$ mean "$y > x$" over the integers.\n\n$\\forall x \\exists y (y > x)$: TRUE. For any integer $x$, choose $y = x + 1$.\n\n$\\exists y \\forall x (y > x)$: FALSE. No single integer is greater than all integers.\n\nThe second statement ($\\exists y \\forall x$) is strictly stronger than the first ($\\forall x \\exists y$).',
      },
      {
        id: 'test-d3u2-p4',
        question:
          'Determine the truth value of each statement over the domain of positive integers.\n\n(a) $\\forall n (n^2 \\geq n)$\n(b) $\\exists n (n + n = n)$\n(c) $\\forall n \\exists m (m = n + 1)$',
        pointValue: 4,
        correctAnswer: '(a) True (b) False (c) True',
        solution:
          '(a) TRUE. For positive integers $n \\geq 1$: $n^2 = n \\cdot n \\geq n \\cdot 1 = n$.\n\n(b) FALSE. $n + n = 2n = n$ implies $n = 0$, but $0$ is not a positive integer. No witness exists in the domain.\n\n(c) TRUE. For any positive integer $n$, $m = n + 1$ is also a positive integer, and $m = n + 1$ holds. The successor always exists in the positive integers.',
      },
      {
        id: 'test-d3u2-p5',
        question:
          'Rewrite the set $S = \\{x \\in \\mathbb{Z} \\mid \\exists k \\in \\mathbb{Z} (x = 2k)\\}$ in a simpler description. Then write the statement "$S$ is a subset of the integers" using quantifiers.',
        pointValue: 5,
        correctAnswer:
          '$S$ is the set of even integers. $\\forall x (x \\in S \\to x \\in \\mathbb{Z})$.',
        solution:
          '$S = \\{x \\in \\mathbb{Z} \\mid \\exists k \\in \\mathbb{Z} (x = 2k)\\}$ is the set of all integers that can be written as $2k$ for some integer $k$. This is exactly the set of even integers.\n\n$S = \\{\\ldots, -4, -2, 0, 2, 4, 6, \\ldots\\} = 2\\mathbb{Z}$.\n\nThe subset statement $S \\subseteq \\mathbb{Z}$ in quantified form:\n$$\\forall x (x \\in S \\to x \\in \\mathbb{Z})$$\n\nThis is trivially true here since $S$ is defined as a subset of $\\mathbb{Z}$ by construction (the set-builder uses $x \\in \\mathbb{Z}$).',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Number Theory (d3u3)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d3u3',
    title: 'Number Theory',
    unitId: 'd3u3',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d3u3-p1',
        question:
          'Determine whether each is true or false. Justify.\n(a) $4 \\mid 28$\n(b) $6 \\mid 100$\n(c) $n \\mid 0$ for every positive integer $n$',
        pointValue: 4,
        correctAnswer: '(a) True (b) False (c) True',
        solution:
          '$a \\mid b$ means $b = a \\cdot q$ for some integer $q$.\n\n(a) TRUE. $28 = 4 \\times 7$.\n\n(b) FALSE. $100 / 6 = 16.\\overline{6}$, not an integer. ($100 = 6 \\times 16 + 4$, remainder is 4, not 0.)\n\n(c) TRUE. $0 = n \\times 0$ for any $n$. Every nonzero integer divides 0.',
      },
      {
        id: 'test-d3u3-p2',
        question:
          'Find the prime factorization of $360$ and $756$.',
        pointValue: 4,
        correctAnswer:
          '$360 = 2^3 \\times 3^2 \\times 5$ and $756 = 2^2 \\times 3^3 \\times 7$',
        solution:
          '$360$: $360 = 2 \\times 180 = 2^2 \\times 90 = 2^3 \\times 45 = 2^3 \\times 9 \\times 5 = 2^3 \\times 3^2 \\times 5$.\nCheck: $8 \\times 9 \\times 5 = 360$. Correct.\n\n$756$: $756 = 2 \\times 378 = 2^2 \\times 189 = 2^2 \\times 27 \\times 7 = 2^2 \\times 3^3 \\times 7$.\nCheck: $4 \\times 27 \\times 7 = 756$. Correct.',
      },
      {
        id: 'test-d3u3-p3',
        question:
          'Use the Euclidean algorithm to find $\\gcd(360, 756)$. Show every step.',
        pointValue: 6,
        correctAnswer: '$\\gcd(360, 756) = 36$',
        solution:
          'Apply $\\gcd(a, b) = \\gcd(b, a \\bmod b)$ repeatedly.\n\nStep 1: $\\gcd(756, 360)$.\n$756 = 2 \\times 360 + 36$, so $\\gcd(756, 360) = \\gcd(360, 36)$.\n\nStep 2: $\\gcd(360, 36)$.\n$360 = 10 \\times 36 + 0$, so $\\gcd(360, 36) = 36$.\n\nTherefore $\\gcd(360, 756) = 36$.\n\nVerification via prime factorizations:\n$360 = 2^3 \\times 3^2 \\times 5$\n$756 = 2^2 \\times 3^3 \\times 7$\n$\\gcd = 2^{\\min(3,2)} \\times 3^{\\min(2,3)} = 2^2 \\times 3^2 = 4 \\times 9 = 36$. Correct.',
      },
      {
        id: 'test-d3u3-p4',
        question:
          'Using $\\gcd(360, 756) = 36$, compute $\\text{lcm}(360, 756)$.',
        pointValue: 4,
        correctAnswer: '$\\text{lcm}(360, 756) = 7560$',
        solution:
          'Formula: $\\text{lcm}(a, b) = \\frac{a \\times b}{\\gcd(a, b)}$.\n\n$$\\text{lcm}(360, 756) = \\frac{360 \\times 756}{36} = \\frac{272{,}160}{36} = 7{,}560$$\n\nVerification:\n$360 = 2^3 \\times 3^2 \\times 5$\n$756 = 2^2 \\times 3^3 \\times 7$\n$\\text{lcm} = 2^3 \\times 3^3 \\times 5 \\times 7 = 8 \\times 27 \\times 5 \\times 7 = 7{,}560$. Correct.',
      },
      {
        id: 'test-d3u3-p5',
        question:
          'Is $97$ prime? Explain your reasoning. You only need to check prime factors up to what value?',
        pointValue: 6,
        correctAnswer: 'Yes, $97$ is prime. Check primes up to $\\lfloor\\sqrt{97}\\rfloor = 9$.',
        solution:
          'To test if $97$ is prime, we check divisibility by all primes $p \\leq \\sqrt{97}$.\n\n$\\sqrt{97} \\approx 9.85$, so we check primes up to $9$: $\\{2, 3, 5, 7\\}$.\n\n$97 / 2 = 48.5$ (not integer) — 97 is odd.\n$97 / 3 = 32.33...$ (not integer) — digit sum $9 + 7 = 16$, not divisible by 3.\n$97 / 5 = 19.4$ (not integer) — doesn\'t end in 0 or 5.\n$97 / 7 = 13.86...$ (not integer) — $7 \\times 13 = 91$, $7 \\times 14 = 98 \\neq 97$.\n\nNo prime $\\leq 9$ divides 97, so $97$ is prime.\n\nRationale: If $97 = a \\times b$ with $a \\leq b$, then $a \\leq \\sqrt{97}$. Since $a > 1$ would require a prime factor $\\leq 9$, and none exists, $97$ cannot be factored.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Applied Counting (d3u4)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d3u4',
    title: 'Applied Counting',
    unitId: 'd3u4',
    timeMinutes: 18,
    totalPoints: 26,
    parts: [
      {
        id: 'test-d3u4-p1',
        question:
          'How many ways can you distribute 10 identical cookies among 4 children so that each child gets at least one cookie?',
        pointValue: 5,
        correctAnswer: '$\\binom{9}{3} = 84$',
        solution:
          'Method: Since each child must get $\\geq 1$ cookie, give 1 to each child first. This uses 4 cookies, leaving $10 - 4 = 6$ to distribute freely.\n\nDistributing 6 identical items among 4 bins (no restriction) is a stars and bars problem:\n$$\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{6} = 84$$\n\nAlternatively, the direct formula for distributing $n$ identical objects into $k$ bins with each getting $\\geq 1$:\n$$\\binom{n-1}{k-1} = \\binom{9}{3} = 84$$',
      },
      {
        id: 'test-d3u4-p2',
        question:
          'Prove that in any group of 13 people, at least two were born in the same month.',
        pointValue: 4,
        correctAnswer: 'By the Pigeonhole Principle with 13 pigeons and 12 holes.',
        solution:
          'Pigeonhole Principle: If $n$ items are placed into $m$ containers and $n > m$, at least one container has $\\geq 2$ items.\n\nHere: 13 people (pigeons) and 12 months (pigeonholes).\n\nSince $13 > 12$, at least one month must contain $\\geq \\lceil 13/12 \\rceil = 2$ people.\n\nTherefore at least two people share a birth month.',
      },
      {
        id: 'test-d3u4-p3',
        question:
          'How many 8-bit binary strings:\n(a) Have no restrictions?\n(b) Start with $11$?\n(c) Contain exactly three 1s?',
        pointValue: 6,
        correctAnswer: '(a) $256$ (b) $64$ (c) $56$',
        solution:
          '(a) Each of 8 positions has 2 choices: $2^8 = 256$.\n\n(b) First two bits fixed as $11$; remaining 6 bits free: $2^6 = 64$.\n\n(c) Choose which 3 of the 8 positions hold a 1. P vs C check: does order of choosing positions matter? No — the same set of positions gives the same string.\n$$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$',
      },
      {
        id: 'test-d3u4-p4',
        question:
          'How many ways can you distribute 7 identical apples among 3 baskets (baskets may be empty)?',
        pointValue: 5,
        correctAnswer: '$\\binom{9}{2} = 36$',
        solution:
          'Stars and bars: $n = 7$ identical objects, $k = 3$ distinct bins, no restrictions.\n\n$$\\binom{n + k - 1}{k - 1} = \\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = \\frac{9 \\times 8}{2} = 36$$\n\nVisualization: Arrange 7 stars and 2 bars in a row. Example: $\\star\\star|\\star\\star\\star|\\star\\star$ = baskets get 2, 3, 2.\n\nChoose positions for the 2 bars among 9 total symbols: $\\binom{9}{2} = 36$.',
      },
      {
        id: 'test-d3u4-p5',
        question:
          'How many 10-bit binary strings have no two consecutive 0s?',
        pointValue: 6,
        correctAnswer: '$144$',
        solution:
          'Let $a_n$ = number of valid $n$-bit strings with no two consecutive 0s.\n\nA valid string of length $n$ either:\n- Starts with $1$: remaining $n-1$ bits can be any valid string of length $n-1$. Count: $a_{n-1}$.\n- Starts with $0$: the next bit must be $1$ (to avoid $00$), then the remaining $n-2$ bits are any valid string of length $n-2$. Count: $a_{n-2}$.\n\nRecurrence: $a_n = a_{n-1} + a_{n-2}$ (Fibonacci-like!).\n\nBase cases:\n$a_1 = 2$ (strings: $0, 1$)\n$a_2 = 3$ (strings: $01, 10, 11$ — excludes $00$)\n\nCompute:\n$a_3 = 3 + 2 = 5$\n$a_4 = 5 + 3 = 8$\n$a_5 = 8 + 5 = 13$\n$a_6 = 13 + 8 = 21$\n$a_7 = 21 + 13 = 34$\n$a_8 = 34 + 21 = 55$\n$a_9 = 55 + 34 = 89$\n$a_{10} = 89 + 55 = 144$\n\nThere are $144$ valid 10-bit strings.',
      },
    ],
  },
];
