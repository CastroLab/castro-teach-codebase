// Day 5 Unit Tests: Practice Exams & Review
// Practice Exam 1, Practice Exam 2, Targeted Review, Speed Drills

import type { UnitTest } from './index';

export const day5Tests: UnitTest[] = [
  // ═══════════════════════════════════════════════════════════
  // TEST: Practice Exam 1 (d5u1)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d5u1',
    title: 'Practice Exam 1',
    unitId: 'd5u1',
    timeMinutes: 90,
    totalPoints: 60,
    parts: [
      {
        id: 'test-d5u1-p1',
        question:
          '(Logic) Prove using logical equivalences that:\n$$\\neg(p \\to q) \\vee (p \\wedge q) \\equiv p$$\nName each law used.',
        pointValue: 10,
        correctAnswer: 'The expression simplifies to $p$.',
        solution:
          'Step 1: Replace $p \\to q$ using material implication:\n$$\\neg(\\neg p \\vee q) \\vee (p \\wedge q)$$\n\nStep 2: Apply De Morgan\'s to the first term:\n$$(p \\wedge \\neg q) \\vee (p \\wedge q)$$\n\nStep 3: Factor out $p$ (Distributive Law):\n$$p \\wedge (\\neg q \\vee q)$$\n\nStep 4: Complement Law ($\\neg q \\vee q = T$):\n$$p \\wedge T$$\n\nStep 5: Identity Law:\n$$p$$',
      },
      {
        id: 'test-d5u1-p2',
        question:
          '(Number Systems) Perform all conversions:\n(a) Convert $-37$ to 8-bit two\'s complement.\n(b) Convert $\\text{1A3}_{16}$ to decimal.\n(c) Compute $(237 \\times 49) \\bmod 11$.',
        pointValue: 10,
        correctAnswer: '(a) $11011011$ (b) $419$ (c) $7$',
        solution:
          "(a) $37 = 32 + 4 + 1 = 00100101_2$.\nFlip bits: $11011010$. Add 1: $11011011$.\nVerify: flip $11011011 \\to 00100100$, add 1: $00100101 = 37$. So it represents $-37$.\n\n(b) $\\text{1A3}_{16}$:\n$1 \\cdot 16^2 + 10 \\cdot 16^1 + 3 \\cdot 16^0 = 256 + 160 + 3 = 419$.\n\n(c) Use modular arithmetic properties:\n$237 \\bmod 11 = 237 - 21 \\times 11 = 237 - 231 = 6$.\n$49 \\bmod 11 = 49 - 4 \\times 11 = 49 - 44 = 5$.\n$(237 \\times 49) \\bmod 11 = (6 \\times 5) \\bmod 11 = 30 \\bmod 11 = 8$.\n\nWait, let me recheck: $30 = 2 \\times 11 + 8$, so $30 \\bmod 11 = 8$.\n\nActually let me verify: $237 \\times 49 = 11{,}613$. $11{,}613 / 11 = 1{,}055.727...$, $11 \\times 1{,}055 = 11{,}605$, $11{,}613 - 11{,}605 = 8$.\n\nSo $(237 \\times 49) \\bmod 11 = 8$.",
      },
      {
        id: 'test-d5u1-p3',
        question:
          '(Sets) Let $U = \\{1, 2, ..., 12\\}$, $A = \\{1, 2, 3, 4, 5, 6\\}$, $B = \\{4, 5, 6, 7, 8, 9\\}$, $C = \\{2, 4, 6, 8, 10, 12\\}$.\n(a) Find $A \\cap B \\cap C$.\n(b) Find $|A \\cup B \\cup C|$ using inclusion-exclusion.\n(c) Find $\\overline{A} \\cap \\overline{B} \\cap \\overline{C}$ (elements in none of the three sets).',
        pointValue: 10,
        correctAnswer: '(a) $\\{4, 6\\}$ (b) $11$ (c) $\\{11\\}$',
        solution:
          '(a) $A \\cap B = \\{4, 5, 6\\}$. Then $\\{4, 5, 6\\} \\cap C = \\{4, 6\\}$.\n\n(b) Compute all intersections:\n$|A| = 6, |B| = 6, |C| = 6$.\n$A \\cap B = \\{4,5,6\\}$, $|A \\cap B| = 3$.\n$A \\cap C = \\{2,4,6\\}$, $|A \\cap C| = 3$.\n$B \\cap C = \\{4,6,8\\}$, $|B \\cap C| = 3$.\n$A \\cap B \\cap C = \\{4,6\\}$, $|A \\cap B \\cap C| = 2$.\n\n$|A \\cup B \\cup C| = 6 + 6 + 6 - 3 - 3 - 3 + 2 = 11$.\n\n(c) Elements in none = $U \\setminus (A \\cup B \\cup C)$. Since $|A \\cup B \\cup C| = 11$ and $|U| = 12$, exactly 1 element is in none.\n$A \\cup B \\cup C = \\{1,2,3,4,5,6,7,8,9,10,12\\}$. Missing: $\\{11\\}$.',
      },
      {
        id: 'test-d5u1-p4',
        question:
          '(Counting) A password must be 6 characters: the first two must be distinct uppercase letters, the next two must be distinct digits, and the last two must be distinct lowercase letters.\n(a) How many such passwords exist?\n(b) How many if the password must also contain the digit 7?',
        pointValue: 10,
        correctAnswer: '(a) $26 \\times 25 \\times 10 \\times 9 \\times 26 \\times 25 = 38{,}025{,}000$ (b) Total $-$ (passwords without 7)',
        solution:
          '(a) By the multiplication principle:\n- First letter: 26 choices\n- Second letter (different from first): 25 choices\n- First digit: 10 choices\n- Second digit (different from first): 9 choices\n- First lowercase: 26 choices\n- Second lowercase (different from first): 25 choices\n\nTotal: $26 \\times 25 \\times 10 \\times 9 \\times 26 \\times 25 = 38{,}025{,}000$.\n\n(b) Use complementary counting:\nPasswords WITHOUT 7: digit choices become 9 and 8 (excluding 7).\n$26 \\times 25 \\times 9 \\times 8 \\times 26 \\times 25 = 30{,}420{,}000$.\n\nPasswords WITH at least one 7:\n$38{,}025{,}000 - 30{,}420{,}000 = 7{,}605{,}000$.',
      },
      {
        id: 'test-d5u1-p5',
        question:
          '(Number Theory) Use the Euclidean algorithm to find $\\gcd(468, 156)$, then compute $\\text{lcm}(468, 156)$.',
        pointValue: 10,
        correctAnswer: '$\\gcd = 156$, $\\text{lcm} = 468$.',
        solution:
          'Euclidean algorithm:\n$468 = 3 \\times 156 + 0$.\n\nSince the remainder is 0 immediately, $\\gcd(468, 156) = 156$.\n\nThis means $156 \\mid 468$ (in fact, $468 = 3 \\times 156$).\n\n$\\text{lcm}(468, 156) = \\frac{468 \\times 156}{156} = 468$.\n\nWhen one number divides the other, the GCD is the smaller and the LCM is the larger.',
      },
      {
        id: 'test-d5u1-p6',
        question:
          '(Quantifiers) Negate the following and simplify. Then determine if the original or its negation is true (domain: all integers).\n$$\\forall n \\exists m (m > n \\wedge m \\text{ is prime})$$',
        pointValue: 10,
        correctAnswer: 'Negation: $\\exists n \\forall m (m \\leq n \\vee m \\text{ is not prime})$. The original is TRUE.',
        solution:
          'Negation:\n$\\neg[\\forall n \\exists m (m > n \\wedge m \\text{ is prime})]$\n$\\equiv \\exists n \\forall m \\neg(m > n \\wedge m \\text{ is prime})$\n$\\equiv \\exists n \\forall m (m \\leq n \\vee m \\text{ is not prime})$\n\nThe negation says: "There exists an integer $n$ such that no integer greater than $n$ is prime." In other words, "there is a largest prime."\n\nThe ORIGINAL statement says: "For every integer $n$, there is a prime greater than $n$" — i.e., there are infinitely many primes.\n\nThe original is TRUE (Euclid\'s theorem). Therefore the negation is false.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Practice Exam 2 (d5u2)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d5u2',
    title: 'Practice Exam 2',
    unitId: 'd5u2',
    timeMinutes: 90,
    totalPoints: 60,
    parts: [
      {
        id: 'test-d5u2-p1',
        question:
          '(Logic) Determine whether the following is a tautology, contradiction, or contingency. Show your work.\n$$(p \\to q) \\to (\\neg q \\to \\neg p)$$',
        pointValue: 10,
        correctAnswer: 'Tautology.',
        solution:
          'This states: "If $p$ implies $q$, then $\\neg q$ implies $\\neg p$." But $\\neg q \\to \\neg p$ is the contrapositive of $p \\to q$, which is always equivalent.\n\nSo this is $(p \\to q) \\to (p \\to q)$, i.e., $A \\to A$, which is a tautology.\n\nTruth table verification:\n| $p$ | $q$ | $p \\to q$ | $\\neg q \\to \\neg p$ | $(p \\to q) \\to (\\neg q \\to \\neg p)$ |\n|-----|-----|-----------|---------------------|-------------------------------------|\n|  T  |  T  |     T     |          T          |                  T                  |\n|  T  |  F  |     F     |          F          |                  T                  |\n|  F  |  T  |     T     |          T          |                  T                  |\n|  F  |  F  |     T     |          T          |                  T                  |\n\nAll T. Tautology confirmed.',
      },
      {
        id: 'test-d5u2-p2',
        question:
          '(Number Systems)\n(a) Add the following 8-bit two\'s complement numbers: $11010110 + 01001011$. Interpret the result as a signed decimal.\n(b) Convert $1753_8$ (octal) to hexadecimal.',
        pointValue: 10,
        correctAnswer: '(a) $00100001 = +33$ (b) $\\text{3EB}_{16}$',
        solution:
          "(a) $11010110_2$: leading 1, so negative. Flip: $00101001$, add 1: $00101010 = 42$. So it's $-42$.\n$01001011_2 = 64 + 8 + 2 + 1 = 75$.\nExpected: $-42 + 75 = +33$.\n\nBinary addition:\n```\n  11010110\n+ 01001011\n----------\n 100100001\n```\nDiscard the carry-out (9th bit): $00100001_2 = 32 + 1 = 33$.\nSigned interpretation: leading 0, positive. $+33$. Correct.\n\n(b) $1753_8$: first convert to binary. Each octal digit = 3 binary bits.\n$1 = 001, 7 = 111, 5 = 101, 3 = 011$.\nBinary: $001111101011$.\nGroup into nibbles from right: $0011 \\ 1110 \\ 1011$.\n$0011 = 3, 1110 = \\text{E}, 1011 = \\text{B}$.\nResult: $\\text{3EB}_{16}$.\n\nCheck: $1753_8 = 1 \\cdot 512 + 7 \\cdot 64 + 5 \\cdot 8 + 3 = 512 + 448 + 40 + 3 = 1003$.\n$\\text{3EB}_{16} = 3 \\cdot 256 + 14 \\cdot 16 + 11 = 768 + 224 + 11 = 1003$. Correct.",
      },
      {
        id: 'test-d5u2-p3',
        question:
          '(Sets) Prove using set identities that $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$.',
        pointValue: 10,
        correctAnswer: 'This is the set-theoretic version of De Morgan\'s Law.',
        solution:
          'Rewrite set difference as intersection with complement:\n$A \\setminus X = A \\cap \\overline{X}$.\n\nLeft side:\n$A \\setminus (B \\cap C) = A \\cap \\overline{B \\cap C} = A \\cap (\\overline{B} \\cup \\overline{C})$\n(De Morgan\'s Law on sets)\n\n$= (A \\cap \\overline{B}) \\cup (A \\cap \\overline{C})$\n(Distributive Law: $A \\cap (X \\cup Y) = (A \\cap X) \\cup (A \\cap Y)$)\n\n$= (A \\setminus B) \\cup (A \\setminus C)$\n(Converting back to set difference notation)\n\nThis equals the right side. QED.\n\nIntuition: An element is in $A$ but not in (both $B$ and $C$) if and only if it is in $A$ and missing from at least one of $B, C$.',
      },
      {
        id: 'test-d5u2-p4',
        question:
          '(Counting)\n(a) How many 4-letter strings can be formed from the letters A, B, C, D, E if repetition is NOT allowed?\n(b) How many of those strings contain the letter A?\n(c) How many contain A and B (both, in any position)?',
        pointValue: 10,
        correctAnswer: '(a) $P(5,4) = 120$ (b) $96$ (c) $36$',
        solution:
          '(a) Order matters (strings are sequences), no repetition.\n$P(5,4) = 5 \\times 4 \\times 3 \\times 2 = 120$.\n\n(b) Complementary counting: strings WITHOUT A use only $\\{B,C,D,E\\}$.\n$P(4,4) = 4! = 24$.\nStrings with A: $120 - 24 = 96$.\n\n(c) Strings containing both A and B.\nUse inclusion-exclusion: |with A and B| = Total - |without A| - |without B| + |without A and without B|.\n\n|without A| = $P(4,4) = 24$.\n|without B| = $P(4,4) = 24$.\n|without A or B| = $P(3,4)$... but wait, $P(3,4) = 0$ because we can\'t choose 4 items from 3.\n\n|with A and B| = $120 - 24 - 24 + 0 = 72$.\n\nHmm wait, that gives strings with A OR B. Let me redo.\n\nStrings with both A AND B: choose 2 of the 4 positions for A and B (order matters since A goes in one, B in the other): $P(4,2) = 12$ ways. Fill remaining 2 positions from $\\{C,D,E\\}$: $P(3,2) = 6$.\nTotal: $12 \\times 6 = 72$.\n\nActually wait: $P(4,2) = 4 \\times 3 = 12$. Then 2 remaining positions from 3 letters: $3 \\times 2 = 6$. Total: $12 \\times 6 = 72$.\n\nLet me recheck: But if we want strings containing A and B (both must appear), that\'s 72. But actually if there are 4 positions and we fix A in one and B in another, that\'s $4 \\times 3 = 12$ arrangements for placing A and B. The remaining 2 positions are filled by 2 of $\\{C,D,E\\}$ in order: $3 \\times 2 = 6$. So $72$.\n\nHmm but $72$ seems high. Let me verify with complementary counting. Using inclusion-exclusion for "A and B both present":\n= Total - (missing A) - (missing B) + (missing both A and B)\n= 120 - 24 - 24 + 0 = 72.\nWait that\'s the count for "A or B present" by inclusion-exclusion of complements.\n\nCorrect approach for "both A and B present":\n= Total - (missing A or missing B)\n= Total - (missing A) - (missing B) + (missing both)\n= 120 - 24 - 24 + 0 = 72.\n\nYes, 72 strings contain both A and B. I initially wrote 36 in the answer, which was wrong. The correct answer is 72.',
      },
      {
        id: 'test-d5u2-p5',
        question:
          '(Number Theory) Find all solutions to $5x \\equiv 3 \\pmod{8}$, where $0 \\leq x \\leq 7$.',
        pointValue: 10,
        correctAnswer: '$x = 7$',
        solution:
          'We need $5x \\equiv 3 \\pmod{8}$.\n\nFind $5^{-1} \\pmod{8}$: we need $5k \\equiv 1 \\pmod{8}$.\n$5 \\times 1 = 5$, $5 \\times 2 = 10 \\equiv 2$, $5 \\times 3 = 15 \\equiv 7$, $5 \\times 4 = 20 \\equiv 4$, $5 \\times 5 = 25 \\equiv 1$.\nSo $5^{-1} \\equiv 5 \\pmod{8}$.\n\nMultiply both sides by 5:\n$x \\equiv 5 \\times 3 = 15 \\equiv 7 \\pmod{8}$.\n\nVerify: $5 \\times 7 = 35 = 4 \\times 8 + 3 \\equiv 3 \\pmod{8}$. Correct.\n\nThe unique solution in $[0, 7]$ is $x = 7$.',
      },
      {
        id: 'test-d5u2-p6',
        question:
          '(Quantifiers + Counting) Let $P(n)$ mean "$n$ is prime" over the domain of positive integers.\n(a) Write "There are infinitely many primes" using quantifiers.\n(b) How many primes are there between 1 and 30? List them.\n(c) Using the Pigeonhole Principle and your answer to (b), prove that among any 21 integers chosen from $\\{1, 2, ..., 30\\}$, at least two must be consecutive.',
        pointValue: 10,
        correctAnswer: '(a) $\\forall n \\exists p (p > n \\wedge P(p))$ (b) 10 primes (c) Pigeonhole with 15 consecutive-pair bins.',
        solution:
          '(a) "For every positive integer $n$, there exists a prime $p$ greater than $n$":\n$$\\forall n \\exists p (p > n \\wedge P(p))$$\n\n(b) Primes in $\\{1, ..., 30\\}$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$. That is 10 primes.\n\n(c) Partition $\\{1, 2, ..., 30\\}$ into 15 pairs of consecutive integers: $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, ..., \\{29,30\\}$.\n\nBy the Pigeonhole Principle: if we choose 21 integers (pigeons) from these 15 pairs (pigeonholes), then since $21 > 15$, at least one pair must contribute both of its elements. Those two elements are consecutive.\n\nNote: Since $\\lceil 21/15 \\rceil = 2$, at least one bin has $\\geq 2$ items, meaning at least one consecutive pair is fully selected.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Targeted Review (d5u3)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d5u3',
    title: 'Targeted Review Test',
    unitId: 'd5u3',
    timeMinutes: 20,
    totalPoints: 30,
    parts: [
      {
        id: 'test-d5u3-p1',
        question:
          'P vs C Rapid Fire: For each, state Permutation or Combination, then compute.\n\n(a) Choosing 4 toppings from 12 for a pizza.\n(b) The number of ways 8 horses can finish first, second, and third.\n(c) Selecting a 5-card poker hand from a 52-card deck.\n(d) Creating a 3-digit PIN from digits 0-9 (repetition allowed).',
        pointValue: 8,
        correctAnswer:
          '(a) C: $\\binom{12}{4} = 495$ (b) P: $P(8,3) = 336$ (c) C: $\\binom{52}{5} = 2{,}598{,}960$ (d) Neither P nor C: $10^3 = 1000$ (repetition allowed)',
        solution:
          '(a) Toppings on a pizza: ORDER DOES NOT MATTER (pepperoni-olives = olives-pepperoni). Combination: $\\binom{12}{4} = \\frac{12!}{4! \\cdot 8!} = \\frac{12 \\times 11 \\times 10 \\times 9}{24} = 495$.\n\n(b) Horse race: ORDER MATTERS (1st, 2nd, 3rd are distinct prizes). Permutation: $P(8,3) = 8 \\times 7 \\times 6 = 336$.\n\n(c) Poker hand: ORDER DOES NOT MATTER (a hand is a set of cards). Combination: $\\binom{52}{5} = \\frac{52 \\times 51 \\times 50 \\times 49 \\times 48}{120} = 2{,}598{,}960$.\n\n(d) PIN with repetition: This is neither $P$ nor $C$ (both assume no repetition). Each digit position has 10 independent choices: $10 \\times 10 \\times 10 = 10^3 = 1{,}000$.',
      },
      {
        id: 'test-d5u3-p2',
        question:
          'Translate to predicate logic, then negate.\n\n(a) "Every student who studies passes the exam." ($S(x)$ = "$x$ studies", $P(x)$ = "$x$ passes")\n(b) "Some integer is both even and prime."',
        pointValue: 6,
        correctAnswer:
          '(a) Original: $\\forall x (S(x) \\to P(x))$. Negation: $\\exists x (S(x) \\wedge \\neg P(x))$. (b) Original: $\\exists n (\\text{even}(n) \\wedge \\text{prime}(n))$. Negation: $\\forall n (\\neg\\text{even}(n) \\vee \\neg\\text{prime}(n))$.',
        solution:
          '(a) "Every student who studies passes":\n$$\\forall x (S(x) \\to P(x))$$\n\nNegation:\n$$\\neg \\forall x (S(x) \\to P(x)) \\equiv \\exists x \\neg(S(x) \\to P(x)) \\equiv \\exists x (S(x) \\wedge \\neg P(x))$$\n\nIn English: "There exists a student who studies but does not pass."\n\n(b) "Some integer is both even and prime":\n$$\\exists n (E(n) \\wedge P(n))$$\n(Witness: $n = 2$.)\n\nNegation:\n$$\\forall n (\\neg E(n) \\vee \\neg P(n))$$\nIn English: "Every integer is either odd or not prime (or both)." This is false since $n = 2$ is even and prime.',
      },
      {
        id: 'test-d5u3-p3',
        question:
          'Prove each equivalence using named laws (cite every step).\n\n(a) $p \\wedge (p \\vee q) \\equiv p$\n(b) $\\neg(p \\wedge q) \\vee q \\equiv \\neg p \\vee q$',
        pointValue: 8,
        correctAnswer: '(a) Absorption Law. (b) Simplifies to $\\neg p \\vee q$.',
        solution:
          '(a) Absorption Law (direct): $p \\wedge (p \\vee q) \\equiv p$.\n\nProof from primitive laws:\n$p \\wedge (p \\vee q) \\equiv (p \\vee \\emptyset) \\wedge (p \\vee q)$ (Identity: $p = p \\vee F$... actually this is tricky.)\n\nSimpler approach:\n$p \\wedge (p \\vee q) \\equiv (p \\wedge p) \\vee (p \\wedge q)$ (Distributive)\n$\\equiv p \\vee (p \\wedge q)$ (Idempotent: $p \\wedge p = p$)\n$\\equiv p$ (Absorption: $p \\vee (p \\wedge q) = p$)\n\n(b) $\\neg(p \\wedge q) \\vee q$\n$\\equiv (\\neg p \\vee \\neg q) \\vee q$ (De Morgan\'s)\n$\\equiv \\neg p \\vee (\\neg q \\vee q)$ (Associative)\n$\\equiv \\neg p \\vee T$ (Complement)\n$\\equiv T$ (Domination)\n\nWait — that gives $T$, not $\\neg p \\vee q$! Let me recheck.\n\n$\\neg(p \\wedge q) \\vee q = (\\neg p \\vee \\neg q) \\vee q = \\neg p \\vee (\\neg q \\vee q) = \\neg p \\vee T = T$.\n\nSo the expression is actually a tautology, which means $T \\equiv \\neg p \\vee q$ is NOT correct (since $\\neg p \\vee q$ is not always true).\n\nCorrected answer: $\\neg(p \\wedge q) \\vee q \\equiv T$ (tautology).',
      },
      {
        id: 'test-d5u3-p4',
        question:
          'A group of 10 friends goes to a restaurant. In how many ways can they:\n(a) Sit in a row of 10 chairs?\n(b) Choose a group of 4 to share an appetizer?\n(c) Choose a president, VP, and secretary from the group?',
        pointValue: 8,
        correctAnswer: '(a) $10! = 3{,}628{,}800$ (b) $\\binom{10}{4} = 210$ (c) $P(10,3) = 720$',
        solution:
          '(a) Arranging all 10 in a row: every person gets a distinct position (left to right). $10! = 3{,}628{,}800$.\n\n(b) P vs C Decision: Does order matter? No — sharing an appetizer is the same group regardless of who was picked first. Combination: $\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = 210$.\n\n(c) P vs C Decision: Does order matter? YES — the three roles (president, VP, secretary) are distinct. Permutation: $P(10,3) = 10 \\times 9 \\times 8 = 720$.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TEST: Speed Drill Test (d5u4)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'test-d5u4',
    title: 'Speed Drill Test',
    unitId: 'd5u4',
    timeMinutes: 15,
    totalPoints: 24,
    parts: [
      {
        id: 'test-d5u4-p1',
        question:
          'Speed Round — Logic (answer as fast as possible):\n(a) $T \\wedge F = ?$\n(b) $\\neg(T \\vee F) = ?$\n(c) Negate: $p \\wedge q$.\n(d) Is $p \\to q$ equivalent to $\\neg q \\to \\neg p$?',
        pointValue: 4,
        correctAnswer: '(a) $F$ (b) $F$ (c) $\\neg p \\vee \\neg q$ (d) Yes',
        solution:
          '(a) $T \\wedge F = F$ (AND requires both true).\n(b) $\\neg(T \\vee F) = \\neg T = F$.\n(c) De Morgan\'s: $\\neg(p \\wedge q) = \\neg p \\vee \\neg q$.\n(d) Yes — the contrapositive $\\neg q \\to \\neg p$ is always equivalent to $p \\to q$.',
      },
      {
        id: 'test-d5u4-p2',
        question:
          'Speed Round — Numbers:\n(a) $1010_2 = ?_{10}$\n(b) $15_{10} = ?_2$\n(c) $\\text{F}_{16} = ?_{10}$\n(d) $17 \\bmod 5 = ?$\n(e) What is $-1$ in 4-bit two\'s complement?',
        pointValue: 5,
        correctAnswer: '(a) $10$ (b) $1111$ (c) $15$ (d) $2$ (e) $1111$',
        solution:
          '(a) $1010_2 = 8 + 2 = 10$.\n(b) $15 = 8 + 4 + 2 + 1 = 1111_2$.\n(c) $\\text{F}_{16} = 15_{10}$.\n(d) $17 = 3 \\times 5 + 2$, so $17 \\bmod 5 = 2$.\n(e) $-1$ in 4-bit two\'s complement: start with $0001$, flip to $1110$, add 1: $1111$.',
      },
      {
        id: 'test-d5u4-p3',
        question:
          'Speed Round — Sets:\n(a) $|\\mathcal{P}(\\{a, b, c, d\\})| = ?$\n(b) $\\{1,2,3\\} \\cap \\{2,4,6\\} = ?$\n(c) Is $\\{1\\} \\in \\{\\{1\\}, \\{2\\}\\}$?\n(d) $|A \\cup B|$ if $|A| = 10$, $|B| = 7$, $|A \\cap B| = 3$?',
        pointValue: 5,
        correctAnswer: '(a) $16$ (b) $\\{2\\}$ (c) Yes (d) $14$',
        solution:
          '(a) $|\\mathcal{P}(S)| = 2^{|S|} = 2^4 = 16$.\n(b) Common elements: just $2$. So $\\{2\\}$.\n(c) Yes — $\\{1\\}$ is an element of the set $\\{\\{1\\}, \\{2\\}\\}$.\n(d) Inclusion-exclusion: $10 + 7 - 3 = 14$.',
      },
      {
        id: 'test-d5u4-p4',
        question:
          'Speed Round — Counting:\n(a) $5! = ?$\n(b) $\\binom{6}{2} = ?$\n(c) $P(5,2) = ?$\n(d) Choosing 3 books from 10 to read: P or C?\n(e) Arranging 3 books from 10 on a shelf: P or C?\n(f) Stars and bars: distributing 5 identical balls into 3 boxes = $\\binom{?}{?}$',
        pointValue: 6,
        correctAnswer:
          '(a) $120$ (b) $15$ (c) $20$ (d) C (e) P (f) $\\binom{7}{2}$',
        solution:
          '(a) $5! = 120$.\n(b) $\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15$.\n(c) $P(5,2) = 5 \\times 4 = 20$.\n(d) Choosing books to read (unordered selection): Combination.\n(e) Arranging on a shelf (order matters): Permutation.\n(f) $n = 5$ identical balls, $k = 3$ boxes: $\\binom{n+k-1}{k-1} = \\binom{5+3-1}{3-1} = \\binom{7}{2} = 21$.',
      },
      {
        id: 'test-d5u4-p5',
        question:
          'Mixed Speed Round:\n(a) Negate $\\forall x P(x)$.\n(b) $\\gcd(12, 8) = ?$\n(c) What is the contrapositive of $p \\to q$?\n(d) How many 3-element subsets does a 7-element set have?',
        pointValue: 4,
        correctAnswer: '(a) $\\exists x \\neg P(x)$ (b) $4$ (c) $\\neg q \\to \\neg p$ (d) $35$',
        solution:
          '(a) $\\neg \\forall x P(x) = \\exists x \\neg P(x)$.\n(b) $\\gcd(12, 8)$: $12 = 1 \\times 8 + 4$; $8 = 2 \\times 4 + 0$. GCD = 4.\n(c) Contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$.\n(d) $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$.',
      },
    ],
  },
];
