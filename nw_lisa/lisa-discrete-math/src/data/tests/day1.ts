// Day 1 Unit Tests: Foundations
// Logic Essentials, Number Systems Intro, Sets Basics, Counting Foundations

import type { UnitTest } from './index';

export const day1Tests: UnitTest[] = [
  // ═══════════════════════════════════════════════════════════
  // TEST: Logic Essentials (d1u1)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d1u1',
    title: 'Logic Essentials',
    unitId: 'd1u1',
    timeMinutes: 18,
    totalPoints: 25,
    parts: [
      {
        id: 'test-d1u1-p1',
        question:
          'Classify each of the following as a proposition or not a proposition. Justify each answer.\n\n(a) $7 + 5 = 13$\n(b) Are you coming to class?\n(c) $x^2 \\geq 0$ for all real numbers $x$\n(d) Hand in your homework.',
        pointValue: 4,
        correctAnswer:
          '(a) Proposition (it is a declarative statement with a definite truth value: false). (b) Not a proposition (it is a question). (c) Proposition (it is a universally quantified statement that is true). (d) Not a proposition (it is a command).',
        solution:
          'A proposition is a declarative sentence that is either true or false, but not both.\n\n(a) "$7 + 5 = 13$" is a declarative statement. Its truth value is false ($7+5=12$). So it IS a proposition.\n\n(b) "Are you coming to class?" is an interrogative sentence (a question). Questions have no truth value, so this is NOT a proposition.\n\n(c) "$x^2 \\geq 0$ for all real numbers $x$" — although it contains a variable $x$, the universal quantifier "for all" binds it, making this a closed statement. It is true (squares are non-negative). So it IS a proposition.\n\n(d) "Hand in your homework" is an imperative sentence (a command). Commands have no truth value, so this is NOT a proposition.',
      },
      {
        id: 'test-d1u1-p2',
        question:
          'Let $p$ = "The printer is on" and $q$ = "The document is queued." Translate each English sentence into a logical formula:\n\n(a) The printer is on and the document is queued.\n(b) The printer is not on or the document is not queued.\n(c) It is not the case that the printer is on and the document is queued.\n(d) The printer is on but the document is not queued.',
        pointValue: 4,
        correctAnswer:
          '(a) $p \\wedge q$ (b) $\\neg p \\vee \\neg q$ (c) $\\neg(p \\wedge q)$ (d) $p \\wedge \\neg q$',
        solution:
          '(a) "and" maps to $\\wedge$: $p \\wedge q$.\n\n(b) "not on" = $\\neg p$, "not queued" = $\\neg q$, "or" = $\\vee$: $\\neg p \\vee \\neg q$.\n\n(c) "It is not the case that" negates the entire conjunction: $\\neg(p \\wedge q)$.\n\n(d) "but" logically functions as "and": $p \\wedge \\neg q$.\n\nNote: by De Morgan\'s Law, (b) and (c) are logically equivalent: $\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$.',
      },
      {
        id: 'test-d1u1-p3',
        question:
          'Construct the truth table for the compound proposition $(p \\vee q) \\wedge \\neg q$. List all columns including intermediate steps.',
        pointValue: 5,
        correctAnswer:
          '| $p$ | $q$ | $p \\vee q$ | $\\neg q$ | $(p \\vee q) \\wedge \\neg q$ |\n| T | T | T | F | F |\n| T | F | T | T | T |\n| F | T | T | F | F |\n| F | F | F | T | F |',
        solution:
          'Step 1: List all $2^2 = 4$ combinations of truth values for $p$ and $q$.\n\nStep 2: Compute $p \\vee q$ for each row.\n- (T,T): $T \\vee T = T$\n- (T,F): $T \\vee F = T$\n- (F,T): $F \\vee T = T$\n- (F,F): $F \\vee F = F$\n\nStep 3: Compute $\\neg q$.\n- (T,T): $\\neg T = F$\n- (T,F): $\\neg F = T$\n- (F,T): $\\neg T = F$\n- (F,F): $\\neg F = T$\n\nStep 4: Compute $(p \\vee q) \\wedge \\neg q$.\n- (T,T): $T \\wedge F = F$\n- (T,F): $T \\wedge T = T$\n- (F,T): $T \\wedge F = F$\n- (F,F): $F \\wedge T = F$\n\nThe result column is: F, T, F, F. Note this expression is logically equivalent to $p \\wedge \\neg q$ (the result is true only when $p$ is true and $q$ is false).',
      },
      {
        id: 'test-d1u1-p4',
        question:
          "Apply De Morgan's Laws to negate each expression. Simplify fully (remove any double negations).\n\n(a) $\\neg(p \\wedge q)$\n(b) $\\neg(\\neg p \\vee q)$\n(c) $\\neg(p \\vee (q \\wedge \\neg r))$",
        pointValue: 6,
        correctAnswer:
          '(a) $\\neg p \\vee \\neg q$ (b) $p \\wedge \\neg q$ (c) $\\neg p \\wedge (\\neg q \\vee r)$',
        solution:
          "(a) Direct application of De Morgan's first law:\n$$\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$$\n\n(b) Apply De Morgan's to flip $\\vee$ to $\\wedge$ and negate each operand:\n$$\\neg(\\neg p \\vee q) \\equiv \\neg(\\neg p) \\wedge \\neg q \\equiv p \\wedge \\neg q$$\nDouble negation: $\\neg(\\neg p) = p$.\n\n(c) Start from the outside in. First, De Morgan's on the outer $\\vee$:\n$$\\neg(p \\vee (q \\wedge \\neg r)) \\equiv \\neg p \\wedge \\neg(q \\wedge \\neg r)$$\nNow apply De Morgan's to the inner conjunction:\n$$\\neg(q \\wedge \\neg r) \\equiv \\neg q \\vee \\neg(\\neg r) \\equiv \\neg q \\vee r$$\nFinal result:\n$$\\neg p \\wedge (\\neg q \\vee r)$$",
      },
      {
        id: 'test-d1u1-p5',
        question:
          "Use a truth table to verify that De Morgan's Law holds: $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$. Show the full truth table with all intermediate columns.",
        pointValue: 6,
        correctAnswer:
          'Both expressions produce the column: F, F, F, T — confirming they are equivalent.',
        solution:
          'Build the truth table with columns for both sides:\n\n| $p$ | $q$ | $p \\vee q$ | $\\neg(p \\vee q)$ | $\\neg p$ | $\\neg q$ | $\\neg p \\wedge \\neg q$ |\n|-----|-----|------------|-------------------|----------|----------|------------------------|\n|  T  |  T  |     T      |        F          |    F     |    F     |           F            |\n|  T  |  F  |     T      |        F          |    F     |    T     |           F            |\n|  F  |  T  |     T      |        F          |    T     |    F     |           F            |\n|  F  |  F  |     F      |        T          |    T     |    T     |           T            |\n\nColumns 4 and 7 match exactly (F, F, F, T), confirming $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$.\n\nIntuition: "not (p or q)" means neither $p$ nor $q$ is true, which is the same as "$p$ is false AND $q$ is false."',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Number Systems Intro (d1u2)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d1u2',
    title: 'Number Systems Intro',
    unitId: 'd1u2',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d1u2-p1',
        question:
          'Convert the following decimal numbers to binary. Show your work using the repeated division method.\n\n(a) $42_{10}$\n(b) $100_{10}$',
        pointValue: 4,
        correctAnswer: '(a) $101010_2$ (b) $1100100_2$',
        solution:
          '(a) Repeated division by 2:\n$42 \\div 2 = 21$ R $0$\n$21 \\div 2 = 10$ R $1$\n$10 \\div 2 = 5$ R $0$\n$5 \\div 2 = 2$ R $1$\n$2 \\div 2 = 1$ R $0$\n$1 \\div 2 = 0$ R $1$\nReading remainders bottom-to-top: $101010_2$.\nCheck: $32 + 0 + 8 + 0 + 2 + 0 = 42$. Correct.\n\n(b) Repeated division by 2:\n$100 \\div 2 = 50$ R $0$\n$50 \\div 2 = 25$ R $0$\n$25 \\div 2 = 12$ R $1$\n$12 \\div 2 = 6$ R $0$\n$6 \\div 2 = 3$ R $0$\n$3 \\div 2 = 1$ R $1$\n$1 \\div 2 = 0$ R $1$\nReading remainders bottom-to-top: $1100100_2$.\nCheck: $64 + 32 + 0 + 0 + 4 + 0 + 0 = 100$. Correct.',
      },
      {
        id: 'test-d1u2-p2',
        question:
          'Convert the following binary numbers to decimal. Show positional notation.\n\n(a) $1011011_2$\n(b) $11110000_2$',
        pointValue: 4,
        correctAnswer: '(a) $91_{10}$ (b) $240_{10}$',
        solution:
          '(a) $1011011_2$:\n$$1 \\cdot 2^6 + 0 \\cdot 2^5 + 1 \\cdot 2^4 + 1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0$$\n$$= 64 + 0 + 16 + 8 + 0 + 2 + 1 = 91$$\n\n(b) $11110000_2$:\n$$1 \\cdot 2^7 + 1 \\cdot 2^6 + 1 \\cdot 2^5 + 1 \\cdot 2^4 + 0 + 0 + 0 + 0$$\n$$= 128 + 64 + 32 + 16 = 240$$',
      },
      {
        id: 'test-d1u2-p3',
        question:
          'Convert between hexadecimal and the requested base.\n\n(a) Convert $\\text{3F}_{16}$ to decimal.\n(b) Convert $\\text{B7}_{16}$ to binary.\n(c) Convert $11011110_2$ to hexadecimal.',
        pointValue: 6,
        correctAnswer:
          '(a) $63_{10}$ (b) $10110111_2$ (c) $\\text{DE}_{16}$',
        solution:
          '(a) $\\text{3F}_{16}$: $3 \\cdot 16 + 15 \\cdot 1 = 48 + 15 = 63_{10}$.\n\n(b) $\\text{B7}_{16}$: Convert each hex digit to 4 bits.\n$\\text{B} = 11 = 1011_2$, $7 = 0111_2$. Concatenate: $10110111_2$.\nCheck: $128 + 0 + 32 + 16 + 0 + 4 + 2 + 1 = 183 = 11 \\cdot 16 + 7$. Correct.\n\n(c) $11011110_2$: Group into nibbles from the right.\n$1101 \\ 1110$.\n$1101_2 = 13 = \\text{D}$.\n$1110_2 = 14 = \\text{E}$.\nResult: $\\text{DE}_{16}$.',
      },
      {
        id: 'test-d1u2-p4',
        question:
          'Convert $231_4$ (base 4) to decimal, then to binary.',
        pointValue: 5,
        correctAnswer: '$45_{10}$ and $101101_2$',
        solution:
          'Step 1: Base 4 to decimal.\n$$2 \\cdot 4^2 + 3 \\cdot 4^1 + 1 \\cdot 4^0 = 2 \\cdot 16 + 3 \\cdot 4 + 1 = 32 + 12 + 1 = 45_{10}$$\n\nStep 2: Decimal 45 to binary (repeated division).\n$45 \\div 2 = 22$ R $1$\n$22 \\div 2 = 11$ R $0$\n$11 \\div 2 = 5$ R $1$\n$5 \\div 2 = 2$ R $1$\n$2 \\div 2 = 1$ R $0$\n$1 \\div 2 = 0$ R $1$\nReading bottom-to-top: $101101_2$.\n\nAlternative shortcut: Since $4 = 2^2$, each base-4 digit maps to 2 binary digits.\n$2 \\to 10$, $3 \\to 11$, $1 \\to 01$. Concatenate: $101101_2$.',
      },
      {
        id: 'test-d1u2-p5',
        question:
          'What is the largest unsigned integer that can be represented with:\n(a) 10 bits?\n(b) 2 hex digits?',
        pointValue: 5,
        correctAnswer: '(a) $2^{10} - 1 = 1023$ (b) $\\text{FF}_{16} = 255$',
        solution:
          '(a) With $n$ bits, the largest unsigned value is $2^n - 1$.\nFor 10 bits: $2^{10} - 1 = 1024 - 1 = 1023$.\nIn binary: $1111111111_2$ (ten 1s).\n\n(b) Two hex digits can represent values from $\\text{00}_{16}$ to $\\text{FF}_{16}$.\nEach hex digit has 16 possible values, so 2 hex digits represent $16^2 = 256$ values.\nThe maximum is $\\text{FF}_{16} = 15 \\cdot 16 + 15 = 255$.\nEquivalently, 2 hex digits = 8 binary bits, and $2^8 - 1 = 255$.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Sets Basics (d1u3)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d1u3',
    title: 'Sets Basics',
    unitId: 'd1u3',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d1u3-p1',
        question:
          'Let $A = \\{1, 2, 3, 4, 5, 6\\}$ and $B = \\{2, 4, 6, 8, 10\\}$. Compute:\n(a) $A \\cup B$\n(b) $A \\cap B$\n(c) $A \\setminus B$ (set difference)\n(d) $B \\setminus A$',
        pointValue: 4,
        correctAnswer:
          '(a) $\\{1,2,3,4,5,6,8,10\\}$ (b) $\\{2,4,6\\}$ (c) $\\{1,3,5\\}$ (d) $\\{8,10\\}$',
        solution:
          '(a) $A \\cup B$ = all elements in either set = $\\{1,2,3,4,5,6,8,10\\}$.\n\n(b) $A \\cap B$ = elements in both sets = $\\{2,4,6\\}$.\n\n(c) $A \\setminus B$ = elements in $A$ but not in $B$ = $\\{1,3,5\\}$. (These are the odd numbers in $A$.)\n\n(d) $B \\setminus A$ = elements in $B$ but not in $A$ = $\\{8,10\\}$. (These are the elements of $B$ that exceed 6.)',
      },
      {
        id: 'test-d1u3-p2',
        question:
          'List all elements of the power set $\\mathcal{P}(\\{a, b, c\\})$. How many elements does it have?',
        pointValue: 5,
        correctAnswer:
          '$\\mathcal{P}(\\{a,b,c\\}) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a,b\\}, \\{a,c\\}, \\{b,c\\}, \\{a,b,c\\}\\}$. It has $2^3 = 8$ elements.',
        solution:
          'The power set is the set of all subsets. Systematically enumerate by subset size:\n\nSize 0: $\\emptyset$ (1 subset)\nSize 1: $\\{a\\}, \\{b\\}, \\{c\\}$ (3 subsets)\nSize 2: $\\{a,b\\}, \\{a,c\\}, \\{b,c\\}$ (3 subsets)\nSize 3: $\\{a,b,c\\}$ (1 subset)\n\nTotal: $1 + 3 + 3 + 1 = 8 = 2^3$ elements.\n\nIn general, $|\\mathcal{P}(S)| = 2^{|S|}$ because for each element you independently decide include/exclude, giving $2^n$ choices.',
      },
      {
        id: 'test-d1u3-p3',
        question:
          'Let $U = \\{1,2,3,4,5,6,7,8,9,10\\}$, $A = \\{1,3,5,7,9\\}$, $B = \\{2,3,5,7\\}$. Compute:\n(a) $\\overline{A}$ (complement of $A$ with respect to $U$)\n(b) $\\overline{A} \\cap B$\n(c) $A \\cup \\overline{B}$',
        pointValue: 6,
        correctAnswer:
          '(a) $\\{2,4,6,8,10\\}$ (b) $\\{2\\}$ (c) $\\{1,3,4,5,6,7,8,9,10\\}$',
        solution:
          '(a) $\\overline{A} = U \\setminus A = \\{2,4,6,8,10\\}$ (the even numbers in $U$).\n\n(b) $\\overline{A} \\cap B = \\{2,4,6,8,10\\} \\cap \\{2,3,5,7\\} = \\{2\\}$.\nOnly $2$ is in both $\\overline{A}$ and $B$.\n\n(c) First, $\\overline{B} = U \\setminus B = \\{1,4,6,8,9,10\\}$.\nThen $A \\cup \\overline{B} = \\{1,3,5,7,9\\} \\cup \\{1,4,6,8,9,10\\} = \\{1,3,4,5,6,7,8,9,10\\}$.\nThe only element of $U$ missing is $2$.',
      },
      {
        id: 'test-d1u3-p4',
        question:
          'True or false? Justify each.\n(a) $\\{1,2\\} \\subseteq \\{1,2,3\\}$\n(b) $\\{1,2,3\\} \\subseteq \\{1,2,3\\}$\n(c) $\\emptyset \\in \\{1,2,3\\}$\n(d) $\\emptyset \\subseteq \\{1,2,3\\}$',
        pointValue: 4,
        correctAnswer: '(a) True (b) True (c) False (d) True',
        solution:
          '(a) TRUE. Every element of $\\{1,2\\}$ (namely 1 and 2) is in $\\{1,2,3\\}$. This is also a proper subset since $\\{1,2\\} \\neq \\{1,2,3\\}$.\n\n(b) TRUE. Every set is a subset of itself: $A \\subseteq A$ for all $A$. This is not a proper subset since the sets are equal.\n\n(c) FALSE. The elements of $\\{1,2,3\\}$ are $1$, $2$, and $3$. The empty set $\\emptyset$ is not one of these elements. (Don\'t confuse $\\in$ with $\\subseteq$.)\n\n(d) TRUE. The empty set is a subset of every set. This is vacuously true: the statement "every element of $\\emptyset$ is in $\\{1,2,3\\}$" has no counterexamples because $\\emptyset$ has no elements.',
      },
      {
        id: 'test-d1u3-p5',
        question:
          'Write the set $S = \\{x \\in \\mathbb{Z} \\mid x^2 < 20\\}$ in roster notation.',
        pointValue: 5,
        correctAnswer: '$S = \\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$',
        solution:
          'We need all integers $x$ such that $x^2 < 20$.\n\nSince $4^2 = 16 < 20$ and $5^2 = 25 \\geq 20$, we need $|x| \\leq 4$.\n\nChecking: $(-4)^2 = 16 < 20$ (yes), $(-5)^2 = 25 \\geq 20$ (no).\n\nSo $S = \\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$.\n\n$|S| = 9$.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Counting Foundations (d1u4)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d1u4',
    title: 'Counting Foundations',
    unitId: 'd1u4',
    timeMinutes: 18,
    totalPoints: 27,
    parts: [
      {
        id: 'test-d1u4-p1',
        question:
          'A license plate consists of 3 letters followed by 4 digits. Repetition is allowed.\n(a) How many license plates are possible?\n(b) How many if the first letter cannot be O or I (to avoid confusion with 0 and 1)?',
        pointValue: 4,
        correctAnswer:
          '(a) $26^3 \\times 10^4 = 175{,}760{,}000$ (b) $24 \\times 26^2 \\times 10^4 = 162{,}240{,}000$',
        solution:
          '(a) By the multiplication principle, each position is an independent choice:\n- 3 letter positions: $26 \\times 26 \\times 26 = 26^3 = 17{,}576$\n- 4 digit positions: $10 \\times 10 \\times 10 \\times 10 = 10^4 = 10{,}000$\n- Total: $26^3 \\times 10^4 = 175{,}760{,}000$.\n\n(b) The first letter has only $26 - 2 = 24$ choices (no O or I). The remaining positions are unrestricted.\n$24 \\times 26^2 \\times 10^4 = 24 \\times 676 \\times 10{,}000 = 162{,}240{,}000$.',
      },
      {
        id: 'test-d1u4-p2',
        question:
          'Compute the following. Show the formula you use.\n(a) $P(8, 3)$\n(b) $\\binom{8}{3}$\n(c) Explain why $\\binom{8}{3} = \\binom{8}{5}$.',
        pointValue: 5,
        correctAnswer:
          '(a) $P(8,3) = 336$ (b) $\\binom{8}{3} = 56$ (c) Choosing 3 to include is the same as choosing 5 to exclude.',
        solution:
          '(a) $P(n,k) = \\frac{n!}{(n-k)!}$.\n$P(8,3) = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$.\n\n(b) $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.\n$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\frac{336}{6} = 56$.\n\nAlternatively: $\\binom{8}{3} = \\frac{P(8,3)}{3!} = \\frac{336}{6} = 56$.\n\n(c) $\\binom{n}{k} = \\binom{n}{n-k}$ (symmetry property). Choosing which 3 items to SELECT from 8 is equivalent to choosing which 5 items to LEAVE OUT. Each selection of 3 uniquely determines the 5 not selected, and vice versa. So $\\binom{8}{3} = \\binom{8}{5} = 56$.',
      },
      {
        id: 'test-d1u4-p3',
        question:
          'For each problem, decide whether to use a permutation or combination, then solve.\n\n(a) How many ways can a club of 15 people choose a 4-person committee?\n(b) In how many ways can 6 runners finish a race (assuming no ties)?',
        pointValue: 6,
        correctAnswer:
          '(a) Combination: $\\binom{15}{4} = 1365$ (b) Permutation: $6! = 720$',
        solution:
          '(a) **P vs C Decision:** Does order matter? NO — a committee is an unordered group. Selecting {Alice, Bob, Carol, Dave} is the same committee regardless of selection order.\nUse combination: $\\binom{15}{4} = \\frac{15!}{4! \\cdot 11!} = \\frac{15 \\times 14 \\times 13 \\times 12}{4 \\times 3 \\times 2 \\times 1} = \\frac{32{,}760}{24} = 1{,}365$.\n\n(b) **P vs C Decision:** Does order matter? YES — 1st place, 2nd place, etc. are distinct positions. The arrangement (Alice 1st, Bob 2nd) differs from (Bob 1st, Alice 2nd).\nUse permutation: All 6 runners are arranged, so $P(6,6) = 6! = 720$.',
      },
      {
        id: 'test-d1u4-p4',
        question:
          'A student council must include exactly 3 juniors and 2 seniors. There are 8 juniors and 6 seniors available. How many different councils are possible?',
        pointValue: 6,
        correctAnswer: '$\\binom{8}{3} \\times \\binom{6}{2} = 56 \\times 15 = 840$',
        solution:
          'This is a two-stage selection where order does not matter at either stage.\n\nStep 1: Choose 3 juniors from 8. Order does not matter (it is a group, not a ranking), so use combination: $\\binom{8}{3} = 56$.\n\nStep 2: Choose 2 seniors from 6. Same reasoning: $\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{30}{2} = 15$.\n\nStep 3: By the multiplication principle (the two choices are independent), multiply:\n$$\\binom{8}{3} \\times \\binom{6}{2} = 56 \\times 15 = 840$$\n\nThere are 840 possible councils.',
      },
      {
        id: 'test-d1u4-p5',
        question:
          'How many 5-letter "words" (strings of letters) can be formed from the English alphabet if:\n(a) Repetition is allowed?\n(b) No letter may be repeated?\n(c) The word must begin with a vowel (A, E, I, O, U) and no repetition is allowed?',
        pointValue: 6,
        correctAnswer:
          '(a) $26^5 = 11{,}881{,}376$ (b) $P(26,5) = 7{,}893{,}600$ (c) $5 \\times 25 \\times 24 \\times 23 \\times 22 = 15{,}180{,}000$',
        solution:
          '(a) With repetition: each of 5 positions has 26 choices. By the multiplication principle: $26^5 = 11{,}881{,}376$.\n\n(b) Without repetition: this is an ordered arrangement of 5 from 26.\n$P(26,5) = 26 \\times 25 \\times 24 \\times 23 \\times 22 = 7{,}893{,}600$.\n\n(c) First position must be a vowel (5 choices: A, E, I, O, U). Then the remaining 4 positions are filled from the 25 unused letters, with no repetition:\n$5 \\times 25 \\times 24 \\times 23 \\times 22 = 5 \\times 303{,}600 = 15{,}180{,}000$.\n\nNote: This is NOT $5 \\times P(25,4)$... wait, actually it IS: $5 \\times P(25,4) = 5 \\times \\frac{25!}{21!} = 5 \\times 303{,}600 = 15{,}180{,}000$.',
      },
    ],
  },
];
