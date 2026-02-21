// Day 3 Content: Connecting Concepts
// Logic + Circuits, Quantifiers + Sets, Number Theory, Applied Counting

import type { ContentPage } from './index';

export const day3Content: ContentPage[] = [
  // ═══════════════════════════════════════════════════════════
  // d3u1s1 — Boolean Circuits & Gates
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u1s1',
    title: 'Boolean Circuits & Gates',
    subtitle: 'Logic made physical',
    blocks: [
      {
        type: 'text',
        content:
          'Boolean circuits implement logical operations using **logic gates**. Each gate takes one or more binary inputs (0 or 1, equivalently F or T) and produces a single binary output according to a Boolean function.',
      },
      {
        type: 'definition',
        title: 'Standard Logic Gates',
        content:
          '| Gate | Symbol | Boolean Expression | Output |\n|:----:|:------:|:------------------:|:------:|\n| AND | -- | $A \\wedge B$ | 1 only when both inputs are 1 |\n| OR | -- | $A \\vee B$ | 1 when at least one input is 1 |\n| NOT | -- | $\\neg A$ | Flips the input |\n| NAND | -- | $\\neg(A \\wedge B)$ | 0 only when both inputs are 1 |\n| NOR | -- | $\\neg(A \\vee B)$ | 1 only when both inputs are 0 |\n| XOR | -- | $A \\oplus B$ | 1 when inputs differ |',
      },
      {
        type: 'text',
        content:
          'To analyze a circuit: trace the signal from inputs through each gate, computing intermediate values, until you reach the output. This is exactly like evaluating a Boolean expression with a truth table.',
      },
      {
        type: 'video',
        title: 'Crash Course: Boolean Logic & Logic Gates',
        videoId: 'gI-qXk7XojA',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u1s2 — NAND Universal Gate
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u1s2',
    title: 'NAND Universal Gate',
    subtitle: 'Build everything from one gate',
    blocks: [
      {
        type: 'definition',
        title: 'Universal Gate',
        content:
          'A gate is **universal** (or **functionally complete**) if every Boolean function can be constructed using only that gate. NAND and NOR are both universal.',
      },
      {
        type: 'theorem',
        title: 'Building Gates from NAND',
        content:
          '**NOT from NAND:** $\\text{NAND}(A, A) = \\neg(A \\wedge A) = \\neg A$.\n(Tie both inputs together.)\n\n**AND from NAND:** $\\text{NAND}(\\text{NAND}(A,B), \\text{NAND}(A,B)) = A \\wedge B$.\n(NAND the result with itself to negate the NAND.)\n\n**OR from NAND:** $\\text{NAND}(\\text{NAND}(A,A), \\text{NAND}(B,B)) = A \\vee B$.\n(NOT each input, then NAND the results — by De Morgan\'s, $\\neg(\\neg A \\wedge \\neg B) = A \\vee B$.)',
      },
      {
        type: 'text',
        content:
          'Since AND, OR, and NOT can be built from NAND, and any Boolean function can be expressed using AND, OR, and NOT, NAND alone is sufficient to implement any Boolean function. This is why NAND gates are the fundamental building block of modern digital circuits.',
      },
      {
        type: 'video',
        title: 'Ben Eater: Logic Gates',
        videoId: 'sTu3LwpF6XI',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u2s1 — Predicates & Quantifiers
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u2s1',
    title: 'Predicates & Quantifiers',
    subtitle: 'Generalizing propositions with variables',
    blocks: [
      {
        type: 'definition',
        title: 'Predicate',
        content:
          'A **predicate** is a statement containing one or more variables that becomes a proposition when the variables are given specific values or are bound by quantifiers.\n\nExample: $P(x): x > 5$ is a predicate. $P(7)$ is a proposition (true). $P(3)$ is a proposition (false).',
      },
      {
        type: 'definition',
        title: 'Quantifiers',
        content:
          '| Quantifier | Symbol | Read as | Example |\n|:----------:|:------:|:-------:|:-------:|\n| Universal | $\\forall$ | "for all" | $\\forall x P(x)$: "$P(x)$ holds for every $x$" |\n| Existential | $\\exists$ | "there exists" | $\\exists x P(x)$: "there is some $x$ where $P(x)$ holds" |',
      },
      {
        type: 'warning',
        title: 'Quantifier pattern with $\\forall$',
        content:
          'When translating "every $X$ has property $P$":\n\n$$\\forall x (X(x) \\to P(x))$$\n\nUse the CONDITIONAL ($\\to$) with $\\forall$, not conjunction. "Every dog is friendly" = $\\forall x (\\text{Dog}(x) \\to \\text{Friendly}(x))$, NOT $\\forall x (\\text{Dog}(x) \\wedge \\text{Friendly}(x))$ (which would say everything is a friendly dog!).',
      },
      {
        type: 'theorem',
        title: 'Negating Quantifiers',
        content:
          '$$\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)$$\n$$\\neg \\exists x P(x) \\equiv \\forall x \\neg P(x)$$\n\nTo negate: flip the quantifier and negate the body. For nested quantifiers, apply this rule from left to right:\n$$\\neg \\forall x \\exists y P(x,y) \\equiv \\exists x \\forall y \\neg P(x,y)$$',
      },
      {
        type: 'video',
        title: 'TrevTutor: Predicates and Quantifiers',
        videoId: 'GjJByyWpUeo',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u2s2 — Mixed Quantifiers
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u2s2',
    title: 'Mixed Quantifiers (Order Matters!)',
    subtitle: 'Why $\\forall x \\exists y$ differs from $\\exists y \\forall x$',
    blocks: [
      {
        type: 'warning',
        title: 'Quantifier order matters!',
        content:
          '$\\forall x \\exists y R(x,y)$: "For every $x$, there is SOME $y$ (possibly depending on $x$)..."\n\n$\\exists y \\forall x R(x,y)$: "There is a SINGLE $y$ that works for ALL $x$..."\n\nThe second is strictly stronger. $\\exists y \\forall x$ implies $\\forall x \\exists y$, but NOT vice versa.',
      },
      {
        type: 'example',
        title: 'Concrete example: $R(x,y)$ means "$y > x$" over integers',
        content:
          '$\\forall x \\exists y (y > x)$: TRUE. For any $x$, pick $y = x + 1$.\n\n$\\exists y \\forall x (y > x)$: FALSE. No single integer is greater than all integers.\n\nThe key difference: in the first statement, $y$ can be different for each $x$. In the second, one $y$ must serve everyone.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Nested Quantifiers',
        videoId: 'ILVGK-y_OXM',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u3s1 — Divisibility & Primes
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u3s1',
    title: 'Divisibility & Primes',
    subtitle: 'The building blocks of integers',
    blocks: [
      {
        type: 'definition',
        title: 'Divisibility',
        content:
          'For integers $a$ and $b$ with $a \\neq 0$: $a \\mid b$ ("$a$ divides $b$") means there exists an integer $k$ such that $b = ak$.\n\nExample: $3 \\mid 12$ because $12 = 3 \\times 4$. But $3 \\nmid 7$ because $7/3$ is not an integer.',
      },
      {
        type: 'definition',
        title: 'Prime Number',
        content:
          'An integer $p > 1$ is **prime** if its only positive divisors are $1$ and $p$ itself.\n\nFirst few primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, \\ldots$\n\nNote: $1$ is NOT prime. $2$ is the only even prime.',
      },
      {
        type: 'theorem',
        title: 'Fundamental Theorem of Arithmetic',
        content:
          'Every integer $n > 1$ can be written uniquely (up to order) as a product of prime numbers:\n$$n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}$$\n\nExample: $360 = 2^3 \\times 3^2 \\times 5$.',
      },
      {
        type: 'theorem',
        title: 'Primality Testing',
        content:
          'To test if $n$ is prime, it suffices to check divisibility by all primes $p \\leq \\sqrt{n}$.\n\nWhy? If $n = ab$ with $a \\leq b$, then $a \\leq \\sqrt{n}$.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Divisibility and Primes',
        videoId: 'mIStB5X4U8M',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u3s3 — Euclidean Algorithm
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u3s3',
    title: 'Euclidean Algorithm (GCD/LCM)',
    subtitle: 'An efficient way to find the greatest common divisor',
    blocks: [
      {
        type: 'definition',
        title: 'GCD and LCM',
        content:
          '$\\gcd(a, b)$: the largest positive integer that divides both $a$ and $b$.\n$\\text{lcm}(a, b)$: the smallest positive integer that is a multiple of both $a$ and $b$.',
      },
      {
        type: 'theorem',
        title: 'Euclidean Algorithm',
        content:
          'Repeatedly replace the larger number with the remainder:\n$$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$\nStop when the remainder is 0. The last nonzero remainder is the GCD.',
      },
      {
        type: 'example',
        title: '$\\gcd(252, 180)$',
        content:
          '$252 = 1 \\times 180 + 72 \\quad \\Rightarrow \\quad \\gcd(252, 180) = \\gcd(180, 72)$\n$180 = 2 \\times 72 + 36 \\quad \\Rightarrow \\quad \\gcd(180, 72) = \\gcd(72, 36)$\n$72 = 2 \\times 36 + 0 \\quad \\Rightarrow \\quad \\gcd(72, 36) = 36$\n\nSo $\\gcd(252, 180) = 36$.',
      },
      {
        type: 'theorem',
        title: 'LCM from GCD',
        content:
          '$$\\text{lcm}(a, b) = \\frac{a \\times b}{\\gcd(a, b)}$$\n\nExample: $\\text{lcm}(252, 180) = \\frac{252 \\times 180}{36} = 1{,}260$.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Euclidean Algorithm',
        videoId: 'p5gn2hj51hs',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u4s1 — Stars and Bars
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u4s1',
    title: 'Stars and Bars',
    subtitle: 'Distributing identical objects into distinct bins',
    blocks: [
      {
        type: 'theorem',
        title: 'Stars and Bars Formula',
        content:
          'The number of ways to distribute $n$ identical objects into $k$ distinct bins (with bins allowed to be empty) is:\n$$\\binom{n + k - 1}{k - 1}$$',
      },
      {
        type: 'example',
        title: 'Distributing 7 apples among 3 baskets',
        content:
          '$n = 7$ apples, $k = 3$ baskets.\n$$\\binom{7 + 3 - 1}{3 - 1} = \\binom{9}{2} = 36$$\n\nVisualize: arrange 7 stars and 2 bars in a row.\nExample: $\\star\\star|\\star\\star\\star|\\star\\star$ means baskets get (2, 3, 2).\nChoose positions for the 2 bars among 9 total symbols: $\\binom{9}{2} = 36$.',
      },
      {
        type: 'warning',
        title: 'When bins must be nonempty',
        content:
          'If each bin must get at least 1 object: first place 1 in each bin (uses $k$ objects), then distribute the remaining $n - k$ freely.\n\n$$\\binom{n - 1}{k - 1}$$\n\nExample: 10 cookies among 4 children, each gets $\\geq 1$: $\\binom{9}{3} = 84$.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Stars and Bars',
        videoId: 'UTCScjoPymA',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d3u4s2 — Pigeonhole Principle
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd3u4s2',
    title: 'Pigeonhole Principle',
    subtitle: 'If there are more pigeons than holes, some hole has two pigeons',
    blocks: [
      {
        type: 'theorem',
        title: 'Pigeonhole Principle',
        content:
          'If $n$ items are placed into $m$ containers and $n > m$, then at least one container has at least $\\lceil n/m \\rceil$ items.\n\nSimple form: if $n > m$, some container has $\\geq 2$ items.',
      },
      {
        type: 'example',
        title: 'Birthday months',
        content:
          'In any group of 13 people, at least 2 share a birth month.\n\n13 people (pigeons) into 12 months (holes). Since $13 > 12$, some month has $\\geq 2$ people.',
      },
      {
        type: 'text',
        content:
          'The Pigeonhole Principle is an existence proof: it guarantees that a duplicate exists, but does not tell you WHERE or WHICH duplicate. It is powerful precisely because it requires no information about how items are distributed.',
      },
      {
        type: 'video',
        title: 'Numberphile: The Pigeonhole Principle',
        videoId: 'pFv6QOKbFoY',
      },
    ],
  },
];
