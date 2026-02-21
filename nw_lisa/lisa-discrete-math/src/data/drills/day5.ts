// Day 5 Drills: Exam Prep
// Practice Exams, Rapid-Fire Drills, Speed Rounds

import type { DrillSet } from './index';

export const day5Drills: DrillSet[] = [
  // ═══════════════════════════════════════════════════════════
  // D5 U1 S1 — Practice Exam 1 Questions 1-3
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u1s1',
    title: 'Practice Exam 1 — Questions 1-3',
    subunitId: 'd5u1s1',
    questions: [
      {
        id: 'd5u1s1-q1',
        type: 'free-response',
        question:
          'Exam Q1 (Multi-part):\n\n(a) Let $p$: "The alarm is set" and $q$: "The door is locked." Write the symbolic form of: "If the alarm is not set, then the door is not locked."\n\n(b) Write the contrapositive of your answer to (a).\n\n(c) Are the original statement and its converse logically equivalent? Justify with truth tables or algebraic reasoning.',
        correctAnswer:
          '(a) $\\neg p \\to \\neg q$. (b) Contrapositive: $q \\to p$ ("If the door is locked, then the alarm is set."). (c) No. The converse is $\\neg q \\to \\neg p$. The original $\\neg p \\to \\neg q$ has truth table T,T,F,T while the converse $\\neg q \\to \\neg p$ has truth table T,F,T,T.',
        explanation:
          '(a) "If not-$p$ then not-$q$" = $\\neg p \\to \\neg q$. (b) Contrapositive of $A \\to B$ is $\\neg B \\to \\neg A$. So: $\\neg(\\neg q) \\to \\neg(\\neg p) = q \\to p$. (c) The converse of $\\neg p \\to \\neg q$ is $\\neg q \\to \\neg p$. The original is the inverse of $p \\to q$; the converse is the contrapositive of $p \\to q$. They are NOT equivalent (the inverse and contrapositive differ).',
        difficulty: 3,
      },
      {
        id: 'd5u1s1-q2',
        type: 'free-response',
        question:
          "Exam Q2 (Multi-part):\n\n(a) Convert $-42$ to 8-bit two's complement.\n\n(b) What decimal number does the 8-bit two's complement value $10110100_2$ represent?\n\n(c) Compute $(-42) + (-76)$ in 8-bit two's complement. Does overflow occur? (The 8-bit range is $[-128, 127]$.)",
        correctAnswer:
          "(a) $+42 = 00101010$. Flip: $11010101$. Add 1: $11010110$. So $-42 = 11010110_2$.\n\n(b) MSB = 1 (negative). $-128 + 32 + 16 + 4 = -128 + 52 = -76$. So $10110100_2 = -76$.\n\n(c) $11010110 + 10110100 = 110001010$. Discard 9th bit: $10001010$. Value: $-128 + 8 + 2 = -118$. Since $-42 + (-76) = -118$ and $-118 \\in [-128, 127]$, no overflow.",
        explanation:
          "(a) Standard two's complement conversion: write positive, flip, add 1. (b) Use weight method: $-2^7 + \\text{positive bits}$. (c) Binary addition gives $10001010_2 = -118$, which is within range, so no overflow. Overflow would occur if the mathematical result were outside $[-128, 127]$.",
        difficulty: 3,
      },
      {
        id: 'd5u1s1-q3',
        type: 'free-response',
        question:
          'Exam Q3 (Multi-part):\n\n(a) Let $U = \\{1,2,...,12\\}$, $A = \\{2,4,6,8,10,12\\}$, $B = \\{3,6,9,12\\}$. Find $A \\cap B$, $A \\cup B$, and $\\overline{A} \\cap B$.\n\n(b) Using these sets, verify the inclusion-exclusion formula: $|A \\cup B| = |A| + |B| - |A \\cap B|$.\n\n(c) How many elements of $U$ are in neither $A$ nor $B$?',
        correctAnswer:
          '(a) $A \\cap B = \\{6, 12\\}$. $A \\cup B = \\{2,3,4,6,8,9,10,12\\}$. $\\overline{A} = \\{1,3,5,7,9,11\\}$, so $\\overline{A} \\cap B = \\{3, 9\\}$.\n\n(b) $|A \\cup B| = 8$. $|A| + |B| - |A \\cap B| = 6 + 4 - 2 = 8$. Verified.\n\n(c) $|U| - |A \\cup B| = 12 - 8 = 4$. The elements are $\\{1, 5, 7, 11\\}$.',
        explanation:
          '(a) Intersection: elements common to both. Union: all elements in either. Complement then intersection. (b) Direct verification by counting. (c) Elements in neither = universal set minus union.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U1 S2 — Practice Exam 1 Questions 4-6
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u1s2',
    title: 'Practice Exam 1 — Questions 4-6',
    subunitId: 'd5u1s2',
    questions: [
      {
        id: 'd5u1s2-q1',
        type: 'free-response',
        question:
          'Exam Q4 (Multi-part):\n\n(a) How many ways can a president, vice-president, and secretary be chosen from 15 club members?\n\n(b) How many ways can a 3-person committee be chosen from the same 15 members?\n\n(c) Explain why the answer to (a) is exactly $3! = 6$ times the answer to (b).',
        correctAnswer:
          '(a) $P(15, 3) = 15 \\times 14 \\times 13 = 2{,}730$.\n\n(b) $C(15, 3) = \\frac{15 \\times 14 \\times 13}{3!} = \\frac{2{,}730}{6} = 455$.\n\n(c) Each committee of 3 people can be assigned roles (P, VP, S) in $3! = 6$ ways. So $P(15,3) = 3! \\times C(15,3)$.',
        explanation:
          'Part (a) is a permutation (distinct roles). Part (b) is a combination (no roles). The relationship $P(n,r) = r! \\times C(n,r)$ holds because each unordered group can be arranged in $r!$ ways. This is the key insight connecting P and C.',
        difficulty: 3,
      },
      {
        id: 'd5u1s2-q2',
        type: 'free-response',
        question:
          'Exam Q5 (Multi-part):\n\n(a) Find $\\gcd(462, 1071)$ using the Euclidean algorithm. Show all steps.\n\n(b) Find $\\text{lcm}(462, 1071)$.\n\n(c) Verify that $\\gcd(462, 1071) \\times \\text{lcm}(462, 1071) = 462 \\times 1071$.',
        correctAnswer:
          '(a) $1071 = 2 \\times 462 + 147$. $462 = 3 \\times 147 + 21$. $147 = 7 \\times 21 + 0$. So $\\gcd(462, 1071) = 21$.\n\n(b) $\\text{lcm}(462, 1071) = \\frac{462 \\times 1071}{21} = \\frac{494{,}802}{21} = 23{,}562$.\n\n(c) $21 \\times 23{,}562 = 494{,}802 = 462 \\times 1071$. Verified.',
        explanation:
          '(a) Apply $\\gcd(a,b) = \\gcd(b, a \\mod b)$ repeatedly. (b) Use $\\text{lcm}(a,b) = \\frac{ab}{\\gcd(a,b)}$. (c) The identity $\\gcd(a,b) \\times \\text{lcm}(a,b) = ab$ always holds for positive integers.',
        difficulty: 3,
      },
      {
        id: 'd5u1s2-q3',
        type: 'free-response',
        question:
          'Exam Q6 (Multi-part):\n\n(a) Prove algebraically that $p \\to (q \\to r) \\equiv (p \\land q) \\to r$. (This is called exportation.)\n\n(b) Translate both sides into English using: $p$: "It rains," $q$: "The ground is wet," $r$: "The game is canceled." Verify that both English statements say the same thing.',
        correctAnswer:
          '(a) $p \\to (q \\to r) \\equiv p \\to (\\neg q \\lor r) \\equiv \\neg p \\lor (\\neg q \\lor r) \\equiv (\\neg p \\lor \\neg q) \\lor r \\equiv \\neg(p \\land q) \\lor r \\equiv (p \\land q) \\to r$.\n\n(b) Left: "If it rains, then if the ground is wet then the game is canceled." Right: "If it rains and the ground is wet, then the game is canceled." Both say the same thing: rain combined with wet ground leads to cancellation.',
        explanation:
          '(a) Replace $\\to$ with $\\neg \\lor$, use associativity, then De Morgan\'s in reverse, then convert back to $\\to$. (b) The English confirms the equivalence: nesting "if-then" inside "if-then" is the same as combining hypotheses with "and."',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U2 S1 — Practice Exam 2 Questions 1-3
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u2s1',
    title: 'Practice Exam 2 — Questions 1-3',
    subunitId: 'd5u2s1',
    questions: [
      {
        id: 'd5u2s1-q1',
        type: 'free-response',
        question:
          'Exam Q1 (Multi-part):\n\n(a) Translate into predicate logic: "Every even integer greater than 2 can be written as the sum of two primes." Use domain $\\mathbb{Z}$, $E(x)$: "$x$ is even," $G(x)$: "$x > 2$," $P(x)$: "$x$ is prime."\n\n(b) Write the negation of your answer from (a) in predicate logic.\n\n(c) Is the original statement a theorem? What is it called?',
        correctAnswer:
          '(a) $\\forall x \\, ((E(x) \\land G(x)) \\to \\exists y \\, \\exists z \\, (P(y) \\land P(z) \\land x = y + z))$.\n\n(b) $\\exists x \\, (E(x) \\land G(x) \\land \\forall y \\, \\forall z \\, (\\neg P(y) \\lor \\neg P(z) \\lor x \\neq y + z))$.\n\n(c) This is Goldbach\'s Conjecture. It has been verified computationally for extremely large numbers but remains unproven.',
        explanation:
          '(a) "Every ... satisfying conditions ... has property" = $\\forall x \\, (\\text{conditions} \\to \\text{property})$. (b) Negate by flipping quantifiers and negating the body: $\\exists x \\, (E(x) \\land G(x) \\land \\neg(\\exists y \\, \\exists z \\, (\\ldots)))$, then push negation inward. (c) This is one of the most famous open problems in mathematics.',
        difficulty: 3,
      },
      {
        id: 'd5u2s1-q2',
        type: 'free-response',
        question:
          "Exam Q2 (Multi-part):\n\n(a) Convert $\\text{BEEF}_{16}$ to decimal.\n\n(b) Convert $\\text{BEEF}_{16}$ to binary.\n\n(c) In 16-bit two's complement, does $\\text{BEEF}_{16}$ represent a positive or negative number? What is its decimal value?",
        correctAnswer:
          "(a) $B(11) \\times 16^3 + E(14) \\times 16^2 + E(14) \\times 16^1 + F(15) \\times 16^0 = 11 \\times 4096 + 14 \\times 256 + 14 \\times 16 + 15 = 45056 + 3584 + 224 + 15 = 48{,}879$.\n\n(b) $B=1011$, $E=1110$, $E=1110$, $F=1111$. Binary: $1011111011101111_2$.\n\n(c) The MSB is 1, so it's negative in 16-bit two's complement. Value: $48{,}879 - 65{,}536 = -16{,}657$.",
        explanation:
          "(a) Standard hex-to-decimal positional notation. (b) Each hex digit maps to 4 binary digits. (c) In 16-bit two's complement, values with MSB=1 (hex digits 8-F in the leading position) are negative. To get the decimal value: if the unsigned value $\\geq 2^{15} = 32{,}768$, subtract $2^{16} = 65{,}536$.",
        difficulty: 3,
      },
      {
        id: 'd5u2s1-q3',
        type: 'free-response',
        question:
          'Exam Q3 (Multi-part):\n\n(a) How many ways can 8 identical donuts be distributed among 4 people if each person gets at least 1 donut?\n\n(b) How many ways if there is no minimum requirement (each person can get 0 or more)?\n\n(c) How many ways if person A must get at least 3 donuts and the others at least 0?',
        correctAnswer:
          '(a) Stars and bars with minimum 1: $\\binom{8-1}{4-1} = \\binom{7}{3} = 35$.\n\n(b) Stars and bars with no minimum: $\\binom{8+4-1}{4-1} = \\binom{11}{3} = 165$.\n\n(c) Give 3 to person A first, then distribute remaining 5 among 4 people freely: $\\binom{5+4-1}{4-1} = \\binom{8}{3} = 56$.',
        explanation:
          '(a) With "at least 1" constraint, use $\\binom{n-1}{k-1}$. (b) With no constraint, use $\\binom{n+k-1}{k-1}$. (c) Pre-assign the minimum, then distribute the remainder freely. This transforms the constrained problem into an unconstrained one.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U2 S2 — Practice Exam 2 Questions 4-6
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u2s2',
    title: 'Practice Exam 2 — Questions 4-6',
    subunitId: 'd5u2s2',
    questions: [
      {
        id: 'd5u2s2-q1',
        type: 'free-response',
        question:
          'Exam Q4 (Multi-part):\n\nA class has 30 students. 18 are in the math club, 14 are in the science club, and 10 are in the coding club. 8 are in both math and science, 5 are in both math and coding, 6 are in both science and coding, and 3 are in all three.\n\n(a) How many students are in at least one club?\n(b) How many are in exactly two clubs?\n(c) How many are in none of the clubs?',
        correctAnswer:
          '(a) $|M \\cup S \\cup C| = 18 + 14 + 10 - 8 - 5 - 6 + 3 = 26$.\n\n(b) Exactly two = (in pairwise) - 3(in all three) = $(8 + 5 + 6) - 3 \\times 3 = 19 - 9 = 10$.\n\n(c) None: $30 - 26 = 4$.',
        explanation:
          '(a) Three-set inclusion-exclusion. (b) The pairwise counts include people in all three, so subtract the triple overlap from each pair: exactly two of M and S = $8 - 3 = 5$, exactly two of M and C = $5 - 3 = 2$, exactly two of S and C = $6 - 3 = 3$. Total exactly two: $5 + 2 + 3 = 10$. (c) Complement.',
        difficulty: 3,
      },
      {
        id: 'd5u2s2-q2',
        type: 'free-response',
        question:
          'Exam Q5 (Multi-part):\n\n(a) Encrypt "LOGIC" with a Caesar cipher, shift $k = 15$.\n\n(b) You intercept the ciphertext "YVCCF." You know it was encrypted with a Caesar cipher. Find the plaintext.\n\n(c) How many shifts must you try in the worst case to brute-force a Caesar cipher?',
        correctAnswer:
          '(a) L(11)+15=26 mod 26=0(A), O(14)+15=29 mod 26=3(D), G(6)+15=21(V), I(8)+15=23(X), C(2)+15=17(R). Ciphertext: ADVXR.\n\n(b) Try each shift. With $k=17$: Y(24)-17=7(H), V(21)-17=4(E), C(2)-17=-15 mod 26=11(L), C(2)-17=11(L), F(5)-17=-12 mod 26=14(O). Plaintext: HELLO.\n\n(c) At most 25 non-trivial shifts (1 through 25). With shift 0, plaintext = ciphertext.',
        explanation:
          '(a) Apply $(x + k) \\mod 26$ to each letter. (b) Brute-force: try all 25 non-zero shifts until readable text appears. (c) There are 26 possible shifts (0-25), but shift 0 is trivial, so 25 trials in the worst case.',
        difficulty: 3,
      },
      {
        id: 'd5u2s2-q3',
        type: 'free-response',
        question:
          'Exam Q6 (Multi-part):\n\n(a) Construct a Boolean expression for a circuit that outputs 1 when exactly two of three inputs $x, y, z$ are 1.\n\n(b) Simplify if possible, or show your expression is already minimal.\n\n(c) Express your answer using only NAND gates (describe the gate connections; you do not need to draw).',
        correctAnswer:
          '(a) $(x \\land y \\land \\neg z) \\lor (x \\land \\neg y \\land z) \\lor (\\neg x \\land y \\land z)$.\n\n(b) Factor: $xy\\overline{z} + x\\overline{y}z + \\overline{x}yz = xy \\oplus xz \\oplus yz - 2xyz$. Actually, the simplest SOP form is already the three minterms: $(x \\land y \\land \\neg z) \\lor (x \\land \\neg y \\land z) \\lor (\\neg x \\land y \\land z)$. An equivalent shorter form: $(x \\oplus y) \\land z \\lor (x \\land y \\land \\neg z)$, or equivalently $(x \\land y) \\oplus (x \\land z) \\oplus (y \\land z)$.\n\n(c) Each AND and OR can be built from NAND gates as shown in Day 3. NOT is $a \\uparrow a$, AND is $(a \\uparrow b) \\uparrow (a \\uparrow b)$, OR is $(a \\uparrow a) \\uparrow (b \\uparrow b)$.',
        explanation:
          '(a) List all input combinations with exactly two 1s: (1,1,0), (1,0,1), (0,1,1). Write a minterm (AND of all variables, negating 0s) for each, then OR them together. (b) This is a standard sum-of-products form. (c) Substitute NAND implementations for each gate.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U3 S1 — P vs C Rapid-Fire
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u3s1',
    title: 'P vs C Rapid-Fire',
    subunitId: 'd5u3s1',
    questions: [
      {
        id: 'd5u3s1-q1',
        type: 'matching',
        question:
          'For each scenario, state P (permutation), C (combination), or N (neither — use multiplication principle or other technique). Then compute.\n\n(a) Choosing 4 toppings from 10 for a pizza\n(b) Arranging 5 books on a shelf from a collection of 12\n(c) Creating a 4-digit PIN from digits 0-9, repetition allowed\n(d) Choosing a 5-card poker hand from 52 cards\n(e) Selecting a team captain, co-captain, and treasurer from 20 athletes',
        correctAnswer:
          '(a) C: $C(10,4) = 210$. (b) P: $P(12,5) = 95{,}040$. (c) N: $10^4 = 10{,}000$. (d) C: $C(52,5) = 2{,}598{,}960$. (e) P: $P(20,3) = 6{,}840$.',
        explanation:
          '**(a) C** — Toppings are a group; no order. **(b) P** — Shelf arrangement has left-to-right order. **(c) N** — Repetition is allowed, so it is not a standard P or C; use the multiplication principle. **(d) C** — A hand is an unordered set. **(e) P** — Distinct roles: captain is not the same as co-captain.',
        difficulty: 3,
      },
      {
        id: 'd5u3s1-q2',
        type: 'matching',
        question:
          'P, C, or N? Explain your reasoning.\n\n(a) Choosing 3 students from 25 for a study group\n(b) Lining up 6 people for a photo\n(c) A 5-character password using lowercase letters, repetition allowed\n(d) Dealing 7 cards to each of 2 players from a 52-card deck (cards to each player are unordered)\n(e) How many ways can 10 identical candies be placed in 4 distinct jars?',
        correctAnswer:
          '(a) C: $C(25,3) = 2{,}300$. (b) P: $6! = 720$. (c) N: $26^5 = 11{,}881{,}376$. (d) C then C: $C(52,7) \\times C(45,7)$. (e) N (Stars and Bars): $\\binom{13}{3} = 286$.',
        explanation:
          '**(a) C** — A study group is a set; order irrelevant. **(b) P** — A lineup has order (left to right). **(c) N** — Repetition allowed; multiplication principle. **(d)** — Deal 7 to player 1: $C(52,7)$. Then 7 to player 2: $C(45,7)$. Multiply. **(e)** — Identical objects, distinct bins: stars and bars $\\binom{10+4-1}{4-1} = \\binom{13}{3} = 286$.',
        difficulty: 3,
      },
      {
        id: 'd5u3s1-q3',
        type: 'matching',
        question:
          'P, C, or N? Quick answer only.\n\n(a) Seating 8 people around a circular table\n(b) Choosing which 3 of 10 questions to answer on an exam\n(c) License plates: 3 letters then 3 digits, repetition allowed\n(d) Choosing a relay team of 4 runners from 10 (order of legs matters)\n(e) Distributing 6 distinct prizes to 6 students',
        correctAnswer:
          '(a) N (circular permutation): $(8-1)! = 7! = 5{,}040$. (b) C: $C(10,3) = 120$. (c) N: $26^3 \\times 10^3 = 17{,}576{,}000$. (d) P: $P(10,4) = 5{,}040$. (e) P: $6! = 720$ (or N — assignment).',
        explanation:
          '**(a)** Circular permutations fix one person to remove rotational symmetry: $(n-1)!$. **(b)** Choosing which questions — no order. **(c)** Repetition allowed — multiplication principle. **(d)** Order matters: 1st leg, 2nd leg, etc. **(e)** Each prize goes to a specific student — this is an arrangement of 6 distinct items.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U3 S2 — Predicate Logic Translation
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u3s2',
    title: 'Predicate Logic Translation',
    subunitId: 'd5u3s2',
    questions: [
      {
        id: 'd5u3s2-q1',
        type: 'free-response',
        question:
          'Translate to predicate logic: "For every positive real number $\\varepsilon$, there exists a positive real number $\\delta$ such that $\\delta < \\varepsilon$." Domain: $\\mathbb{R}$.',
        correctAnswer:
          '$\\forall \\varepsilon \\, (\\varepsilon > 0 \\to \\exists \\delta \\, (\\delta > 0 \\land \\delta < \\varepsilon))$',
        explanation:
          'The structure is: for all $\\varepsilon$ satisfying a condition, there exists a $\\delta$ satisfying multiple conditions. With $\\forall$, the condition uses $\\to$. With $\\exists$, conditions use $\\land$. This statement is true: choose $\\delta = \\varepsilon / 2$.',
        difficulty: 3,
      },
      {
        id: 'd5u3s2-q2',
        type: 'free-response',
        question:
          'Negate and translate to English: $\\forall x \\, \\exists y \\, (y > x)$ over $\\mathbb{R}$.',
        correctAnswer:
          'Negation: $\\exists x \\, \\forall y \\, (y \\leq x)$. English: "There exists a real number $x$ such that every real number $y$ is at most $x$" (i.e., there is a largest real number).',
        explanation:
          'Original: "For every real number, there is a larger one" (TRUE — the reals have no maximum). Negation: "There is a real number that is $\\geq$ all others" (FALSE). Negate by flipping quantifiers and negating $y > x$ to $y \\leq x$.',
        difficulty: 3,
      },
      {
        id: 'd5u3s2-q3',
        type: 'free-response',
        question:
          'Translate: "There is a student who has taken every offered course." Let $S(x)$: "$x$ is a student," $C(y)$: "$y$ is an offered course," $T(x, y)$: "$x$ has taken $y$." Domain: all entities.',
        correctAnswer:
          '$\\exists x \\, (S(x) \\land \\forall y \\, (C(y) \\to T(x, y)))$',
        explanation:
          '"There is a student" = $\\exists x \\, S(x)$. "who has taken every offered course" = for all courses $y$, if $y$ is offered then $x$ took it. Combine with $\\land$ (not $\\to$) after $\\exists$. The $\\forall$ uses $\\to$ because it applies conditionally to offered courses.',
        difficulty: 3,
      },
      {
        id: 'd5u3s2-q4',
        type: 'multiple-choice',
        question:
          'Over domain $\\mathbb{Z}^+$, which statement is TRUE?',
        options: [
          '$\\forall x \\, \\exists y \\, (x = 2y)$',
          '$\\exists y \\, \\forall x \\, (x = 2y)$',
          '$\\forall x \\, \\exists y \\, (x < y)$',
          '$\\exists x \\, \\forall y \\, (x < y)$',
        ],
        correctAnswer: '$\\forall x \\, \\exists y \\, (x < y)$',
        explanation:
          '(a) FALSE: not every positive integer is even ($x = 3$ has no positive integer $y$ with $3 = 2y$). (b) FALSE: no single $y$ makes $x = 2y$ for ALL $x$. (c) TRUE: for every positive integer $x$, we can find a larger one ($y = x + 1$). (d) FALSE: no positive integer is smaller than all others (there is no $x < 1$ in $\\mathbb{Z}^+$).',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U3 S3 — Equivalence Proof Speed Run
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u3s3',
    title: 'Equivalence Proof Speed Run',
    subunitId: 'd5u3s3',
    questions: [
      {
        id: 'd5u3s3-q1',
        type: 'free-response',
        question:
          'Prove: $p \\to (q \\lor r) \\equiv (p \\land \\neg q) \\to r$.',
        correctAnswer:
          '$p \\to (q \\lor r) \\equiv \\neg p \\lor q \\lor r \\equiv \\neg p \\lor \\neg(\\neg q) \\lor r \\equiv \\neg(p \\land \\neg q) \\lor r \\equiv (p \\land \\neg q) \\to r$.',
        explanation:
          'Convert the conditional, then use De Morgan\'s in reverse: $\\neg p \\lor q = \\neg(p \\land \\neg q)$ (since $q = \\neg(\\neg q)$ and $\\neg p \\lor \\neg(\\neg q) = \\neg(p \\land \\neg q)$ by De Morgan). Then convert back to conditional form.',
        difficulty: 3,
      },
      {
        id: 'd5u3s3-q2',
        type: 'free-response',
        question:
          'Prove: $\\neg(p \\oplus q) \\equiv p \\leftrightarrow q$.',
        correctAnswer:
          '$p \\oplus q \\equiv (p \\land \\neg q) \\lor (\\neg p \\land q)$. Negating: $\\neg((p \\land \\neg q) \\lor (\\neg p \\land q)) \\equiv (\\neg p \\lor q) \\land (p \\lor \\neg q) \\equiv (p \\to q) \\land (q \\to p) \\equiv p \\leftrightarrow q$.',
        explanation:
          'XOR is true when exactly one is true; biconditional is true when both agree. They are complements of each other. The proof uses De Morgan on the XOR definition, then recognizes the result as the conjunction of two conditionals (which defines the biconditional).',
        difficulty: 3,
      },
      {
        id: 'd5u3s3-q3',
        type: 'free-response',
        question:
          'Prove: $(p \\lor q) \\to r \\equiv (p \\to r) \\land (q \\to r)$.',
        correctAnswer:
          '$(p \\lor q) \\to r \\equiv \\neg(p \\lor q) \\lor r \\equiv (\\neg p \\land \\neg q) \\lor r \\equiv (\\neg p \\lor r) \\land (\\neg q \\lor r) \\equiv (p \\to r) \\land (q \\to r)$.',
        explanation:
          'Step 1: Conditional to disjunction. Step 2: De Morgan. Step 3: Distribute $r$ over the conjunction ($r \\lor (A \\land B) = (r \\lor A) \\land (r \\lor B)$). Step 4: Convert back to conditionals. Intuitively: if "A or B implies C" then both A alone and B alone imply C.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U4 S1 — Logic Speed Round
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u4s1',
    title: 'Logic Speed Round',
    subunitId: 'd5u4s1',
    questions: [
      {
        id: 'd5u4s1-q1',
        type: 'free-response',
        question: 'True or false: $F \\to T$ is true.',
        correctAnswer: 'True.',
        explanation:
          '$F \\to T$ is true. A conditional with a false hypothesis is always true (vacuously true).',
        difficulty: 3,
      },
      {
        id: 'd5u4s1-q2',
        type: 'free-response',
        question:
          'Simplify: $(p \\to q) \\land (\\neg p \\to q)$.',
        correctAnswer: '$q$',
        explanation:
          '$(\\neg p \\lor q) \\land (p \\lor q) = q \\lor (\\neg p \\land p) = q \\lor F = q$. By distributive law (factoring $q$). Intuitively: whether $p$ is true or false, $q$ follows, so $q$ must be true.',
        difficulty: 3,
      },
      {
        id: 'd5u4s1-q3',
        type: 'free-response',
        question:
          'What rule of inference: from $p \\to q$ and $q \\to r$, conclude $p \\to r$.',
        correctAnswer: 'Hypothetical Syllogism.',
        explanation:
          'Hypothetical Syllogism (also called transitivity of implication): if $p$ implies $q$ and $q$ implies $r$, then $p$ implies $r$. This chains implications.',
        difficulty: 3,
      },
      {
        id: 'd5u4s1-q4',
        type: 'free-response',
        question:
          'Quick: Is $p \\lor (\\neg p \\land q)$ equivalent to $p \\lor q$?',
        correctAnswer: 'Yes.',
        explanation:
          '$p \\lor (\\neg p \\land q) = (p \\lor \\neg p) \\land (p \\lor q) = T \\land (p \\lor q) = p \\lor q$. This uses the distributive law.',
        difficulty: 3,
      },
      {
        id: 'd5u4s1-q5',
        type: 'free-response',
        question:
          'Name the equivalence: $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
        correctAnswer:
          'Quantifier negation law (also called De Morgan\'s law for quantifiers).',
        explanation:
          'This extends De Morgan\'s laws to quantifiers: negating "for all" gives "there exists ... not," just as negating "and" gives "or ... not."',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U4 S2 — Numbers Speed Round
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u4s2',
    title: 'Numbers Speed Round',
    subunitId: 'd5u4s2',
    questions: [
      {
        id: 'd5u4s2-q1',
        type: 'conversion',
        question: 'Convert $\\text{FF}_{16}$ to decimal.',
        correctAnswer: '$255$',
        explanation:
          '$15 \\times 16 + 15 = 240 + 15 = 255 = 2^8 - 1$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s2-q2',
        type: 'free-response',
        question: 'Compute $2^{8} \\mod 7$.',
        correctAnswer: '$4$',
        explanation:
          '$2^3 = 8 \\equiv 1 \\pmod{7}$. $2^8 = (2^3)^2 \\cdot 2^2 = 1^2 \\cdot 4 = 4 \\pmod{7}$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s2-q3',
        type: 'free-response',
        question:
          "What is the 8-bit two's complement of $-100$?",
        correctAnswer: '$10011100_2$',
        explanation:
          '$+100 = 01100100_2$. Flip: $10011011$. Add 1: $10011100$. Check: $-128 + 16 + 8 + 4 = -128 + 28 = -100$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s2-q4',
        type: 'free-response',
        question: 'Find $\\gcd(84, 36)$.',
        correctAnswer: '$12$',
        explanation:
          '$84 = 2 \\times 36 + 12$. $36 = 3 \\times 12 + 0$. $\\gcd = 12$. Or: $84 = 2^2 \\times 3 \\times 7$, $36 = 2^2 \\times 3^2$. $\\gcd = 2^2 \\times 3 = 12$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s2-q5',
        type: 'free-response',
        question: 'Decrypt Caesar ciphertext "DSSOH" with shift $k = 3$.',
        correctAnswer: 'APPLE',
        explanation:
          'D(3)-3=0(A), S(18)-3=15(P), S(18)-3=15(P), O(14)-3=11(L), H(7)-3=4(E). Result: APPLE.',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U4 S3 — Sets Speed Round
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u4s3',
    title: 'Sets Speed Round',
    subunitId: 'd5u4s3',
    questions: [
      {
        id: 'd5u4s3-q1',
        type: 'set-operation',
        question:
          'Let $A = \\{1,2,3,4,5\\}$ and $B = \\{4,5,6,7\\}$. Find $A \\triangle B$ (symmetric difference).',
        correctAnswer: '$\\{1, 2, 3, 6, 7\\}$',
        explanation:
          '$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = \\{1,2,3\\} \\cup \\{6,7\\} = \\{1,2,3,6,7\\}$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s3-q2',
        type: 'free-response',
        question:
          'If $|A| = 10$, $|B| = 8$, and $|A \\cap B| = 3$, find $|A \\cup B|$.',
        correctAnswer: '$10 + 8 - 3 = 15$',
        explanation:
          'Inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B| = 15$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s3-q3',
        type: 'free-response',
        question:
          'How many elements does $\\mathcal{P}(\\{a, b, c, d\\})$ have?',
        correctAnswer: '$2^4 = 16$',
        explanation:
          'The power set of a set with $n$ elements has $2^n$ elements. $|\\mathcal{P}(\\{a,b,c,d\\})| = 2^4 = 16$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s3-q4',
        type: 'set-operation',
        question:
          'Compute $|\\{1,2\\} \\times \\{a,b,c\\}|$.',
        correctAnswer: '$2 \\times 3 = 6$',
        explanation:
          '$|A \\times B| = |A| \\cdot |B|$. Each element of $A$ pairs with each element of $B$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s3-q5',
        type: 'free-response',
        question:
          'Apply De Morgan\'s Law for sets: $\\overline{A \\cup B} = ?$',
        correctAnswer: '$\\overline{A} \\cap \\overline{B}$',
        explanation:
          'De Morgan\'s for sets: the complement of a union is the intersection of the complements. $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$. (The dual: $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.)',
        difficulty: 3,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D5 U4 S4 — Counting Speed Round
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d5u4s4',
    title: 'Counting Speed Round',
    subunitId: 'd5u4s4',
    questions: [
      {
        id: 'd5u4s4-q1',
        type: 'free-response',
        question: 'Compute $\\binom{10}{3}$.',
        correctAnswer: '$\\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120$',
        explanation:
          '$\\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{6} = 120$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s4-q2',
        type: 'free-response',
        question:
          'How many binary strings of length 10 have exactly 4 ones?',
        correctAnswer: '$\\binom{10}{4} = 210$',
        explanation:
          'Choose which 4 of the 10 positions are 1: $\\binom{10}{4} = 210$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s4-q3',
        type: 'free-response',
        question:
          'Distribute 7 identical cookies among 3 children, each getting $\\geq 0$.',
        correctAnswer:
          '$\\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = 36$',
        explanation:
          'Stars and bars: $\\binom{n+k-1}{k-1} = \\binom{9}{2} = 36$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s4-q4',
        type: 'free-response',
        question:
          'In a sock drawer with 5 colors, how many socks must you draw to guarantee 3 of the same color?',
        correctAnswer: '$2 \\times 5 + 1 = 11$',
        explanation:
          'Generalized Pigeonhole: to guarantee $r$ items in one of $k$ categories, you need $(r-1) \\times k + 1$ items. For 3 matching among 5 colors: $(3-1) \\times 5 + 1 = 11$.',
        difficulty: 3,
      },
      {
        id: 'd5u4s4-q5',
        type: 'free-response',
        question:
          'How many positive integers from 1 to 100 are divisible by 2 or 5?',
        correctAnswer:
          '$|A \\cup B| = 50 + 20 - 10 = 60$',
        explanation:
          'Multiples of 2: $\\lfloor 100/2 \\rfloor = 50$. Multiples of 5: $\\lfloor 100/5 \\rfloor = 20$. Multiples of 10 (both): $\\lfloor 100/10 \\rfloor = 10$. By inclusion-exclusion: $50 + 20 - 10 = 60$.',
        difficulty: 3,
      },
    ],
  },
];
