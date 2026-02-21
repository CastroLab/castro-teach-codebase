// Day 3 Drills: Connections
// Boolean Circuits, Predicate Logic, Number Theory, Advanced Counting

import type { DrillSet } from './index';

export const day3Drills: DrillSet[] = [
  // ═══════════════════════════════════════════════════════════
  // D3 U1 S1 — Boolean Circuits & Gates
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u1s1',
    title: 'Boolean Circuits & Gates',
    subunitId: 'd3u1s1',
    questions: [
      {
        id: 'd3u1s1-q1',
        type: 'truth-table',
        question:
          'Complete the truth table for XOR: $p \\oplus q$.',
        correctAnswer: 'F, T, T, F',
        explanation:
          'XOR is true when the inputs differ and false when they match. (T,T)=F, (T,F)=T, (F,T)=T, (F,F)=F. XOR can be expressed as $(p \\lor q) \\land \\neg(p \\land q)$.',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: 'p \\oplus q',
        correctTableValues: [['F'], ['T'], ['T'], ['F']],
      },
      {
        id: 'd3u1s1-q2',
        type: 'truth-table',
        question:
          'A circuit computes $(p \\land q) \\lor (\\neg p \\land r)$. Evaluate when $p = T$, $q = F$, $r = T$.',
        correctAnswer: 'F',
        explanation:
          '$(T \\land F) \\lor (\\neg T \\land T) = F \\lor (F \\land T) = F \\lor F = F$. The first AND gate outputs F (since $q$ is F), and the second AND gate outputs F (since $\\neg p$ is F).',
        difficulty: 1,
      },
      {
        id: 'd3u1s1-q3',
        type: 'multiple-choice',
        question:
          'Which gate outputs true only when ALL inputs are true?',
        options: ['OR gate', 'AND gate', 'XOR gate', 'NAND gate'],
        correctAnswer: 'AND gate',
        explanation:
          'The AND gate outputs 1 (true) only when every input is 1. OR outputs 1 when at least one input is 1. XOR outputs 1 when an odd number of inputs are 1. NAND outputs 0 only when all inputs are 1.',
        difficulty: 1,
      },
      {
        id: 'd3u1s1-q4',
        type: 'truth-table',
        question:
          'Complete the truth table for NAND: $\\neg(p \\land q)$.',
        correctAnswer: 'F, T, T, T',
        explanation:
          'NAND is the negation of AND. (T,T): $\\neg(T \\land T) = \\neg T = F$. (T,F): $\\neg F = T$. (F,T): $\\neg F = T$. (F,F): $\\neg F = T$. NAND is false only when both inputs are true.',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: '\\neg(p \\land q)',
        correctTableValues: [['F'], ['T'], ['T'], ['T']],
      },
      {
        id: 'd3u1s1-q5',
        type: 'free-response',
        question:
          'A half-adder adds two single bits $p$ and $q$. The sum bit is $p \\oplus q$ and the carry bit is $p \\land q$. Compute the sum and carry when $p = 1$ and $q = 1$.',
        correctAnswer:
          'Sum $= 0$, Carry $= 1$. (The result is $10_2 = 2_{10}$.)',
        explanation:
          'Sum: $1 \\oplus 1 = 0$. Carry: $1 \\land 1 = 1$. So $1 + 1 = 10_2$ in binary. The carry represents the $2^1$ place. This is the fundamental building block of binary addition circuits.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U1 S2 — NAND Universal Gate
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u1s2',
    title: 'NAND Universal Gate',
    subunitId: 'd3u1s2',
    questions: [
      {
        id: 'd3u1s2-q1',
        type: 'free-response',
        question:
          'Express NOT $p$ using only NAND gates. Write the NAND expression and explain.',
        correctAnswer: '$\\neg p = p \\uparrow p$',
        explanation:
          '$p \\uparrow p = \\neg(p \\land p) = \\neg p$. Feeding the same input to both terminals of a NAND gate negates it. This is because $p \\land p = p$, so NAND of $p$ with itself is $\\neg p$.',
        hint: 'What happens when you feed the same signal to both inputs of a NAND gate?',
        difficulty: 2,
      },
      {
        id: 'd3u1s2-q2',
        type: 'free-response',
        question:
          'Express AND ($p \\land q$) using only NAND gates.',
        correctAnswer:
          '$p \\land q = (p \\uparrow q) \\uparrow (p \\uparrow q)$',
        explanation:
          'First compute $p \\uparrow q = \\neg(p \\land q)$. Then negate it using NAND-as-NOT: $(p \\uparrow q) \\uparrow (p \\uparrow q) = \\neg(\\neg(p \\land q)) = p \\land q$. Two NAND gates total.',
        difficulty: 2,
      },
      {
        id: 'd3u1s2-q3',
        type: 'free-response',
        question: 'Express OR ($p \\lor q$) using only NAND gates.',
        correctAnswer:
          '$p \\lor q = (p \\uparrow p) \\uparrow (q \\uparrow q)$',
        explanation:
          'First negate each input: $p \\uparrow p = \\neg p$ and $q \\uparrow q = \\neg q$. Then: $(\\neg p) \\uparrow (\\neg q) = \\neg(\\neg p \\land \\neg q) = p \\lor q$ (by De Morgan\'s). Three NAND gates total.',
        difficulty: 2,
      },
      {
        id: 'd3u1s2-q4',
        type: 'multiple-choice',
        question: 'Why is NAND called a "universal" gate?',
        options: [
          'It is the most commonly manufactured gate',
          'Any Boolean function can be built using only NAND gates',
          'It has the simplest truth table',
          'It is faster than other gates',
        ],
        correctAnswer:
          'Any Boolean function can be built using only NAND gates',
        explanation:
          'A gate is "universal" (or "functionally complete") if it can simulate all other gates. Since we can build NOT, AND, and OR from NAND alone, and every Boolean function can be expressed with NOT, AND, and OR, NAND is universal. NOR is the only other single universal gate.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U1 S3 — Vending Machine Logic & Knights/Knaves
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u1s3',
    title: 'Vending Machine Logic & Knights/Knaves Puzzles',
    subunitId: 'd3u1s3',
    questions: [
      {
        id: 'd3u1s3-q1',
        type: 'free-response',
        question:
          'A vending machine dispenses a drink ($D$) when: exact change is inserted ($E$) AND the item is in stock ($S$), OR a special override code is entered ($O$). Write the Boolean expression for $D$.',
        correctAnswer: '$D = (E \\land S) \\lor O$',
        explanation:
          'The machine dispenses if either (1) you have exact change AND the item is stocked, or (2) the override code is entered. Parentheses are needed because AND has higher precedence than OR: $D = (E \\land S) \\lor O$.',
        difficulty: 1,
      },
      {
        id: 'd3u1s3-q2',
        type: 'free-response',
        question:
          'Knights always tell the truth; Knaves always lie. Person A says: "I am a Knave." Is A a Knight or a Knave?',
        correctAnswer:
          'This statement is a paradox and cannot be made by either a Knight or a Knave.',
        explanation:
          'If A is a Knight (truth-teller), then "I am a Knave" would be a lie — contradiction. If A is a Knave (liar), then "I am a Knave" would be true — contradiction. No consistent assignment exists. This is the Liar\'s Paradox applied to Knights/Knaves.',
        hint: 'Try both cases: assume A is a Knight, then assume A is a Knave. Look for contradictions.',
        difficulty: 2,
      },
      {
        id: 'd3u1s3-q3',
        type: 'free-response',
        question:
          'A says: "Both of us are Knaves." B says nothing. What are A and B?',
        correctAnswer: 'A is a Knave and B is a Knight.',
        explanation:
          'If A is a Knight, then "both are Knaves" is true, meaning A is a Knave — contradiction. So A must be a Knave. Since A is a Knave, "both are Knaves" is false. Since A IS a Knave, the falsity must come from B: B is NOT a Knave, so B is a Knight.',
        difficulty: 2,
      },
      {
        id: 'd3u1s3-q4',
        type: 'multiple-choice',
        question:
          'An alarm system triggers ($A$) when: the motion sensor activates ($M$) and the system is armed ($R$), or when the panic button is pressed ($P$). Which expression is correct?',
        options: [
          '$A = M \\lor R \\land P$',
          '$A = (M \\land R) \\lor P$',
          '$A = M \\land (R \\lor P)$',
          '$A = (M \\lor P) \\land R$',
        ],
        correctAnswer: '$A = (M \\land R) \\lor P$',
        explanation:
          'The alarm triggers if (motion AND armed) OR panic. The correct expression is $(M \\land R) \\lor P$. Option (a) is wrong due to precedence (AND binds tighter). Options (c) and (d) have incorrect logic.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U2 S1 — Predicates & Quantifiers
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u2s1',
    title: 'Predicates & Quantifiers',
    subunitId: 'd3u2s1',
    questions: [
      {
        id: 'd3u2s1-q1',
        type: 'free-response',
        question:
          'Translate into logical notation: "Every student in this class has taken calculus." Let the domain be students in the class, and let $C(x)$ = "$x$ has taken calculus."',
        correctAnswer: '$\\forall x \\, C(x)$',
        explanation:
          '"Every" signals the universal quantifier $\\forall$. Since the domain is already restricted to students in the class, we write $\\forall x \\, C(x)$. If the domain were all people, we would need: $\\forall x \\, (S(x) \\to C(x))$.',
        difficulty: 1,
      },
      {
        id: 'd3u2s1-q2',
        type: 'free-response',
        question:
          'Translate into logical notation: "There exists a prime number that is even." Let the domain be all integers, $P(x)$ = "$x$ is prime," $E(x)$ = "$x$ is even."',
        correctAnswer: '$\\exists x \\, (P(x) \\land E(x))$',
        explanation:
          '"There exists" signals $\\exists$. We need an integer that is BOTH prime AND even: $\\exists x \\, (P(x) \\land E(x))$. (The witness is $x = 2$.) Note: with $\\exists$ we use $\\land$, not $\\to$. Writing $\\exists x \\, (P(x) \\to E(x))$ would be vacuously true for any non-prime $x$.',
        hint: 'With $\\exists$, join conditions using AND ($\\land$), not implication ($\\to$).',
        difficulty: 2,
      },
      {
        id: 'd3u2s1-q3',
        type: 'free-response',
        question:
          'Negate: $\\forall x \\, P(x)$. Then translate both the original and the negation into English if $P(x)$ = "$x$ is positive" and the domain is $\\mathbb{R}$.',
        correctAnswer:
          '$\\neg \\forall x \\, P(x) \\equiv \\exists x \\, \\neg P(x)$. Original: "Every real number is positive." Negation: "There exists a real number that is not positive."',
        explanation:
          'The negation of "for all" is "there exists ... not": $\\neg \\forall x \\, P(x) \\equiv \\exists x \\, \\neg P(x)$. The negation is TRUE (since $0$ and negative numbers exist).',
        difficulty: 1,
      },
      {
        id: 'd3u2s1-q4',
        type: 'multiple-choice',
        question:
          'Which is the correct translation of "No dogs can fly"? Let $D(x)$ = "$x$ is a dog" and $F(x)$ = "$x$ can fly."',
        options: [
          '$\\forall x \\, (D(x) \\to \\neg F(x))$',
          '$\\exists x \\, (D(x) \\land \\neg F(x))$',
          '$\\neg \\exists x \\, (D(x) \\to F(x))$',
          '$\\forall x \\, (D(x) \\land \\neg F(x))$',
        ],
        correctAnswer: '$\\forall x \\, (D(x) \\to \\neg F(x))$',
        explanation:
          '"No dogs can fly" = "For every $x$, if $x$ is a dog, then $x$ cannot fly." This is $\\forall x \\, (D(x) \\to \\neg F(x))$. Equivalently: $\\neg \\exists x \\, (D(x) \\land F(x))$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U2 S2 — Mixed Quantifiers (Order Matters!)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u2s2',
    title: 'Mixed Quantifiers (Order Matters!)',
    subunitId: 'd3u2s2',
    questions: [
      {
        id: 'd3u2s2-q1',
        type: 'multiple-choice',
        question:
          'Let $L(x, y)$ = "$x$ loves $y$" over the domain of all people. What does $\\forall x \\, \\exists y \\, L(x, y)$ mean?',
        options: [
          'There is someone who is loved by everyone',
          'Everyone loves someone (possibly different people)',
          'Someone loves everyone',
          'Everyone loves everyone',
        ],
        correctAnswer:
          'Everyone loves someone (possibly different people)',
        explanation:
          '$\\forall x \\, \\exists y \\, L(x, y)$: "For every person $x$, there exists a person $y$ such that $x$ loves $y$." Each person has at least one person they love, but the loved person can vary. The $y$ depends on $x$.',
        difficulty: 2,
      },
      {
        id: 'd3u2s2-q2',
        type: 'multiple-choice',
        question:
          'What does $\\exists y \\, \\forall x \\, L(x, y)$ mean? (Same $L(x,y)$ as above.)',
        options: [
          'Everyone loves someone',
          'There is someone who is loved by everyone',
          'Someone loves everyone',
          'Everyone loves everyone',
        ],
        correctAnswer: 'There is someone who is loved by everyone',
        explanation:
          '$\\exists y \\, \\forall x \\, L(x, y)$: "There exists a person $y$ such that for every person $x$, $x$ loves $y$." One specific person $y$ is loved by all. Note how swapping the quantifiers changes the meaning dramatically!',
        difficulty: 2,
      },
      {
        id: 'd3u2s2-q3',
        type: 'free-response',
        question:
          'Negate: $\\forall x \\, \\exists y \\, (x + y = 0)$ over $\\mathbb{R}$. Then determine: is the original statement true or false?',
        correctAnswer:
          'Negation: $\\exists x \\, \\forall y \\, (x + y \\neq 0)$. The original is TRUE (for every $x$, choose $y = -x$).',
        explanation:
          'To negate nested quantifiers, flip each quantifier and negate the predicate: $\\neg(\\forall x \\, \\exists y \\, P(x,y)) \\equiv \\exists x \\, \\forall y \\, \\neg P(x,y)$. The original says "every real number has an additive inverse," which is true: $y = -x$ works for any $x$.',
        difficulty: 2,
      },
      {
        id: 'd3u2s2-q4',
        type: 'free-response',
        question:
          'Consider the domain $\\{1, 2, 3\\}$ and predicate $P(x, y)$: "$x + y > 4$". Is $\\exists x \\, \\forall y \\, P(x, y)$ true or false?',
        correctAnswer: 'False.',
        explanation:
          'We need some $x$ such that $x + y > 4$ for ALL $y \\in \\{1,2,3\\}$. Try $x=3$: $3+1=4 \\not> 4$. Try $x=2$: $2+1=3 \\not> 4$. Try $x=1$: $1+1=2 \\not> 4$. No single $x$ makes $x + y > 4$ true for every $y$, so the statement is false.',
        hint: 'Check each possible value of $x$ and see if $P(x,y)$ holds for all $y$ in the domain.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U2 S3 — Quantifier-to-Set-Notation Bridge
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u2s3',
    title: 'Quantifier-to-Set-Notation Bridge',
    subunitId: 'd3u2s3',
    questions: [
      {
        id: 'd3u2s3-q1',
        type: 'free-response',
        question:
          'Rewrite using set-builder notation: $\\{x \\in \\mathbb{Z} \\mid \\exists k \\in \\mathbb{Z}, \\, x = 2k\\}$. What familiar set is this?',
        correctAnswer:
          'This is the set of all even integers. It can also be written as $2\\mathbb{Z} = \\{\\ldots, -4, -2, 0, 2, 4, \\ldots\\}$.',
        explanation:
          'The set-builder description says: "all integers $x$ such that there exists an integer $k$ where $x = 2k$." In other words, $x$ is a multiple of 2 — the even integers.',
        difficulty: 1,
      },
      {
        id: 'd3u2s3-q2',
        type: 'free-response',
        question: 'Translate into quantified logic: $A \\subseteq B$.',
        correctAnswer: '$\\forall x \\, (x \\in A \\to x \\in B)$',
        explanation:
          '"$A$ is a subset of $B$" means every element of $A$ is also an element of $B$. In predicate logic: $\\forall x \\, (x \\in A \\to x \\in B)$. This bridges set notation and quantifier notation.',
        difficulty: 2,
      },
      {
        id: 'd3u2s3-q3',
        type: 'free-response',
        question:
          'Express $A \\cap B = \\emptyset$ (the sets are disjoint) using quantified logic.',
        correctAnswer:
          '$\\neg \\exists x \\, (x \\in A \\land x \\in B)$, or equivalently $\\forall x \\, \\neg(x \\in A \\land x \\in B)$, or $\\forall x \\, (x \\in A \\to x \\notin B)$.',
        explanation:
          'Two sets are disjoint when no element belongs to both: "there does not exist an $x$ that is in $A$ and in $B$." Equivalently: "for all $x$, if $x$ is in $A$ then $x$ is not in $B$."',
        difficulty: 2,
      },
      {
        id: 'd3u2s3-q4',
        type: 'multiple-choice',
        question:
          'The set-builder notation $S = \\{x \\in \\mathbb{R} \\mid x^2 < 9\\}$ describes which set?',
        options: [
          '$\\{-3, 0, 3\\}$',
          '$(-3, 3)$ — the open interval from $-3$ to $3$',
          '$[-3, 3]$ — the closed interval',
          '$\\{x \\mid x < 3\\}$',
        ],
        correctAnswer:
          '$(-3, 3)$ — the open interval from $-3$ to $3$',
        explanation:
          '$x^2 < 9 \\iff -3 < x < 3$. Since the inequality is strict ($<$ not $\\leq$), the endpoints are excluded. Over $\\mathbb{R}$ this is the open interval $(-3, 3)$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U3 S1 — Divisibility & Primes
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u3s1',
    title: 'Divisibility & Primes',
    subunitId: 'd3u3s1',
    questions: [
      {
        id: 'd3u3s1-q1',
        type: 'multiple-choice',
        question: 'Which of the following is true?',
        options: [
          '$3 \\mid 14$',
          '$7 \\mid 49$',
          '$4 \\mid 18$',
          '$5 \\mid 23$',
        ],
        correctAnswer: '$7 \\mid 49$',
        explanation:
          '$a \\mid b$ means "$a$ divides $b$," i.e., $b = ka$ for some integer $k$. $49 = 7 \\times 7$, so $7 \\mid 49$. The others fail: $14/3$, $18/4$, and $23/5$ are not integers.',
        difficulty: 1,
      },
      {
        id: 'd3u3s1-q2',
        type: 'free-response',
        question: 'List all prime numbers less than 30.',
        correctAnswer: '$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$',
        explanation:
          'A prime number has exactly two divisors: 1 and itself. Note that $1$ is NOT prime (it has only one divisor). $2$ is the only even prime. There are 10 primes less than 30.',
        difficulty: 1,
      },
      {
        id: 'd3u3s1-q3',
        type: 'free-response',
        question:
          'Prove that if $a \\mid b$ and $a \\mid c$, then $a \\mid (b + c)$.',
        correctAnswer:
          'Since $a \\mid b$, we have $b = ka$ for some integer $k$. Since $a \\mid c$, we have $c = la$ for some integer $l$. Then $b + c = ka + la = (k + l)a$, so $a \\mid (b + c)$.',
        explanation:
          'This is a fundamental divisibility property. The key step is writing $b$ and $c$ in terms of $a$ using the definition of divisibility, then factoring $a$ from the sum.',
        difficulty: 2,
      },
      {
        id: 'd3u3s1-q4',
        type: 'multiple-choice',
        question:
          'To check if $n$ is prime, you only need to test divisors up to:',
        options: ['$n - 1$', '$n / 2$', '$\\sqrt{n}$', '$\\ln(n)$'],
        correctAnswer: '$\\sqrt{n}$',
        explanation:
          'If $n = ab$ with $a \\leq b$, then $a \\leq \\sqrt{n}$ (otherwise $ab > n$). So if $n$ has a factor other than 1 and itself, at least one factor is $\\leq \\sqrt{n}$. Testing divisors up to $\\sqrt{n}$ suffices.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U3 S2 — Prime Factorization
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u3s2',
    title: 'Prime Factorization',
    subunitId: 'd3u3s2',
    questions: [
      {
        id: 'd3u3s2-q1',
        type: 'free-response',
        question: 'Find the prime factorization of $180$.',
        correctAnswer: '$180 = 2^2 \\times 3^2 \\times 5$',
        explanation:
          '$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$. By the Fundamental Theorem of Arithmetic, every integer $> 1$ has a unique prime factorization.',
        difficulty: 1,
      },
      {
        id: 'd3u3s2-q2',
        type: 'free-response',
        question: 'Find the prime factorization of $504$.',
        correctAnswer: '$504 = 2^3 \\times 3^2 \\times 7$',
        explanation:
          '$504 = 2 \\times 252 = 2 \\times 2 \\times 126 = 2^2 \\times 2 \\times 63 = 2^3 \\times 63 = 2^3 \\times 9 \\times 7 = 2^3 \\times 3^2 \\times 7$.',
        difficulty: 2,
      },
      {
        id: 'd3u3s2-q3',
        type: 'free-response',
        question:
          'How many positive divisors does $n = 2^3 \\times 3^2 \\times 5^1$ have?',
        correctAnswer:
          '$(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$',
        explanation:
          'If $n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}$, the number of positive divisors is $(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$. Each exponent can range from $0$ to $a_i$ independently.',
        difficulty: 2,
      },
      {
        id: 'd3u3s2-q4',
        type: 'multiple-choice',
        question:
          'The Fundamental Theorem of Arithmetic states that:',
        options: [
          'Every integer has at least one prime factor',
          'Every integer greater than 1 has a unique prime factorization (up to order)',
          'There are infinitely many prime numbers',
          'Every even number greater than 2 is the sum of two primes',
        ],
        correctAnswer:
          'Every integer greater than 1 has a unique prime factorization (up to order)',
        explanation:
          'The Fundamental Theorem of Arithmetic guarantees that every integer $> 1$ can be written as a product of primes in exactly one way (up to the ordering of factors). Option (c) is true (Euclid\'s theorem) but is a different result. Option (d) is Goldbach\'s conjecture, which is unproven.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U3 S3 — Euclidean Algorithm (GCD/LCM)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u3s3',
    title: 'Euclidean Algorithm (GCD/LCM)',
    subunitId: 'd3u3s3',
    questions: [
      {
        id: 'd3u3s3-q1',
        type: 'free-response',
        question:
          'Use the Euclidean algorithm to find $\\gcd(252, 105)$.',
        correctAnswer: '$\\gcd(252, 105) = 21$',
        explanation:
          '$252 = 2 \\times 105 + 42$. $105 = 2 \\times 42 + 21$. $42 = 2 \\times 21 + 0$. The last nonzero remainder is $21$, so $\\gcd(252, 105) = 21$.',
        hint: 'Repeatedly divide: $\\gcd(a, b) = \\gcd(b, a \\mod b)$ until the remainder is 0.',
        difficulty: 2,
      },
      {
        id: 'd3u3s3-q2',
        type: 'free-response',
        question:
          'Find $\\text{lcm}(12, 18)$ using the formula $\\text{lcm}(a,b) = \\frac{|a \\cdot b|}{\\gcd(a,b)}$.',
        correctAnswer:
          '$\\text{lcm}(12, 18) = \\frac{12 \\times 18}{6} = 36$',
        explanation:
          'First find $\\gcd(12, 18)$: $18 = 1 \\times 12 + 6$, $12 = 2 \\times 6 + 0$. So $\\gcd = 6$. Then $\\text{lcm} = \\frac{12 \\times 18}{6} = \\frac{216}{6} = 36$. Check: $36 = 3 \\times 12 = 2 \\times 18$.',
        difficulty: 2,
      },
      {
        id: 'd3u3s3-q3',
        type: 'free-response',
        question:
          'Use the Euclidean algorithm to find $\\gcd(1071, 462)$.',
        correctAnswer: '$\\gcd(1071, 462) = 21$',
        explanation:
          '$1071 = 2 \\times 462 + 147$. $462 = 3 \\times 147 + 21$. $147 = 7 \\times 21 + 0$. The last nonzero remainder is $21$.',
        difficulty: 2,
      },
      {
        id: 'd3u3s3-q4',
        type: 'free-response',
        question:
          'Find $\\gcd(48, 18)$ using prime factorization.',
        correctAnswer:
          '$48 = 2^4 \\times 3$, $18 = 2 \\times 3^2$. $\\gcd = 2^{\\min(4,1)} \\times 3^{\\min(1,2)} = 2^1 \\times 3^1 = 6$.',
        explanation:
          'For GCD via prime factorization: take each common prime to the MINIMUM exponent. $\\gcd(48, 18) = 2^1 \\times 3^1 = 6$. For LCM, take the MAXIMUM: $\\text{lcm} = 2^4 \\times 3^2 = 144$.',
        difficulty: 2,
      },
      {
        id: 'd3u3s3-q5',
        type: 'multiple-choice',
        question:
          'If $\\gcd(a, b) = 1$, the integers $a$ and $b$ are called:',
        options: [
          'Prime',
          'Coprime (relatively prime)',
          'Twin primes',
          'Composite',
        ],
        correctAnswer: 'Coprime (relatively prime)',
        explanation:
          'When $\\gcd(a, b) = 1$, $a$ and $b$ share no common prime factors and are called coprime or relatively prime. Note: the numbers themselves do not need to be prime. For example, $\\gcd(8, 15) = 1$ but neither 8 nor 15 is prime.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U4 S1 — Stars and Bars
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u4s1',
    title: 'Stars and Bars',
    subunitId: 'd3u4s1',
    questions: [
      {
        id: 'd3u4s1-q1',
        type: 'free-response',
        question:
          'How many ways can you distribute 10 identical cookies among 3 children (each child can get 0 or more)?',
        correctAnswer:
          '$\\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = 66$',
        explanation:
          'This is a stars and bars problem: distributing $n$ identical objects into $k$ distinct bins (where bins can be empty). The formula is $\\binom{n + k - 1}{k - 1}$. Here $n = 10$, $k = 3$: $\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$.',
        hint: 'Stars and bars: $n$ identical objects into $k$ distinct bins = $\\binom{n+k-1}{k-1}$.',
        difficulty: 2,
      },
      {
        id: 'd3u4s1-q2',
        type: 'free-response',
        question:
          'How many non-negative integer solutions are there to $x_1 + x_2 + x_3 + x_4 = 7$?',
        correctAnswer:
          '$\\binom{7 + 4 - 1}{4 - 1} = \\binom{10}{3} = 120$',
        explanation:
          'This is equivalent to distributing 7 identical units among 4 variables. By stars and bars: $\\binom{n+k-1}{k-1} = \\binom{10}{3} = 120$.',
        difficulty: 2,
      },
      {
        id: 'd3u4s1-q3',
        type: 'free-response',
        question:
          'How many ways can you distribute 5 identical balls into 3 distinct boxes if each box must have at least 1 ball?',
        correctAnswer: '$\\binom{5 - 1}{3 - 1} = \\binom{4}{2} = 6$',
        explanation:
          'When each bin must have at least 1 object, first place 1 in each bin (using 3 balls), then distribute the remaining $5 - 3 = 2$ balls freely. By stars and bars: $\\binom{n-1}{k-1} = \\binom{4}{2} = 6$. Alternatively, substitute $y_i = x_i - 1$ to reduce to the non-negative case.',
        difficulty: 2,
      },
      {
        id: 'd3u4s1-q4',
        type: 'multiple-choice',
        question:
          'Stars and bars applies when the objects being distributed are:',
        options: [
          'Distinct objects into distinct bins',
          'Identical objects into distinct bins',
          'Distinct objects into identical bins',
          'Identical objects into identical bins',
        ],
        correctAnswer: 'Identical objects into distinct bins',
        explanation:
          'Stars and bars counts the number of ways to place $n$ identical objects into $k$ distinct (labeled) bins. If the objects were distinct, we would use different counting techniques (like the multiplication principle). If the bins were identical, we would use partitions.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U4 S2 — Pigeonhole Principle
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u4s2',
    title: 'Pigeonhole Principle',
    subunitId: 'd3u4s2',
    questions: [
      {
        id: 'd3u4s2-q1',
        type: 'free-response',
        question:
          'In a drawer with socks of 4 different colors, how many socks must you pull out (in the dark) to guarantee a matching pair?',
        correctAnswer: '$5$',
        explanation:
          'By the Pigeonhole Principle, if you have more items (socks) than categories (colors), at least two items share a category. With 4 colors, pulling 5 socks guarantees at least two are the same color. ($\\lceil 5/4 \\rceil = 2$ socks in some category.)',
        difficulty: 1,
      },
      {
        id: 'd3u4s2-q2',
        type: 'free-response',
        question:
          'Prove: among any 13 people, at least 2 were born in the same month.',
        correctAnswer:
          'There are 12 months (pigeonholes) and 13 people (pigeons). By the Pigeonhole Principle, at least $\\lceil 13/12 \\rceil = 2$ people share a birth month.',
        explanation:
          'The Pigeonhole Principle: if $n$ items are placed into $k$ containers and $n > k$, then at least one container holds more than one item. Here: 13 people, 12 months, so at least one month has $\\geq 2$ people.',
        difficulty: 1,
      },
      {
        id: 'd3u4s2-q3',
        type: 'free-response',
        question:
          'If 50 students scored between 0 and 10 (inclusive, integer scores) on a quiz, what is the minimum number of students guaranteed to share the same score?',
        correctAnswer: '$\\lceil 50 / 11 \\rceil = 5$',
        explanation:
          'There are 11 possible scores (0 through 10). By the generalized Pigeonhole Principle, at least $\\lceil 50/11 \\rceil = \\lceil 4.54... \\rceil = 5$ students share a score.',
        hint: 'Use the generalized Pigeonhole Principle: at least $\\lceil n/k \\rceil$ items per category.',
        difficulty: 2,
      },
      {
        id: 'd3u4s2-q4',
        type: 'free-response',
        question:
          'Show that among any 5 integers, there exist two whose difference is divisible by 4.',
        correctAnswer:
          'The possible remainders when dividing by 4 are $\\{0, 1, 2, 3\\}$ — four pigeonholes. With 5 integers, by the Pigeonhole Principle, at least two have the same remainder mod 4, so their difference is divisible by 4.',
        explanation:
          'Any integer has a remainder of 0, 1, 2, or 3 when divided by 4 (four categories). Five integers in four categories means at least two share a remainder. If $a \\equiv b \\pmod{4}$, then $4 \\mid (a - b)$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D3 U4 S3 — Binary String Counting with Constraints
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d3u4s3',
    title: 'Binary String Counting with Constraints',
    subunitId: 'd3u4s3',
    questions: [
      {
        id: 'd3u4s3-q1',
        type: 'free-response',
        question: 'How many binary strings of length 8 are there?',
        correctAnswer: '$2^8 = 256$',
        explanation:
          'Each position has 2 choices (0 or 1), and the 8 positions are independent. By the multiplication principle: $2^8 = 256$.',
        difficulty: 1,
      },
      {
        id: 'd3u4s3-q2',
        type: 'free-response',
        question:
          'How many binary strings of length 8 have exactly three 1s?',
        correctAnswer: '$\\binom{8}{3} = 56$',
        explanation:
          'We must choose which 3 of the 8 positions contain a 1 (the rest are 0). The number of ways to choose 3 positions from 8 is $\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = 56$.',
        difficulty: 1,
      },
      {
        id: 'd3u4s3-q3',
        type: 'free-response',
        question:
          'How many binary strings of length 10 start with "110"?',
        correctAnswer: '$2^7 = 128$',
        explanation:
          'The first 3 positions are fixed as "110". The remaining 7 positions each have 2 choices. Total: $1 \\times 1 \\times 1 \\times 2^7 = 128$.',
        difficulty: 1,
      },
      {
        id: 'd3u4s3-q4',
        type: 'free-response',
        question:
          'How many binary strings of length 8 have at least one 1?',
        correctAnswer: '$2^8 - 1 = 255$',
        explanation:
          'Use complementary counting. Total strings: $2^8 = 256$. Strings with NO 1s (all 0s): $1$. Strings with at least one 1: $256 - 1 = 255$.',
        difficulty: 1,
      },
      {
        id: 'd3u4s3-q5',
        type: 'free-response',
        question:
          'How many binary strings of length 6 have exactly two 1s and the two 1s are NOT adjacent?',
        correctAnswer: '$\\binom{5}{2} = 10$',
        explanation:
          'Place the two 1s among 6 positions with no two adjacent. Think of placing two 1s into gaps around four 0s: _0_0_0_0_ — there are 5 gaps (before, between, and after the 0s). Choose 2 gaps: $\\binom{5}{2} = 10$. Alternatively, total strings with two 1s is $\\binom{6}{2} = 15$, and strings with adjacent 1s is $5$ (positions 12, 23, 34, 45, 56), giving $15 - 5 = 10$.',
        hint: 'Either use complementary counting (subtract adjacent cases) or the "gaps" method.',
        difficulty: 2,
      },
    ],
  },
];
