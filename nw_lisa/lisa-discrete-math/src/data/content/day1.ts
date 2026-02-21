// Day 1 Content: Foundations
// Logic Essentials, Number Systems Intro, Sets Basics, Counting Foundations

import type { ContentPage } from './index';

export const day1Content: ContentPage[] = [
  // ═══════════════════════════════════════════════════════════
  // d1u1s1 — Propositions & Connectives
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u1s1',
    title: 'Propositions & Connectives',
    subtitle: 'The building blocks of logical reasoning',
    blocks: [
      {
        type: 'definition',
        title: 'Proposition',
        content:
          'A **proposition** is a declarative sentence that is either true or false, but not both. Propositions have a definite truth value.',
      },
      {
        type: 'example',
        title: 'What is and is not a proposition',
        content:
          '**Propositions:**\n- "$2 + 3 = 5$" (true)\n- "The Earth orbits the Sun" (true)\n- "$7 < 3$" (false)\n\n**NOT propositions:**\n- "Close the door." (command)\n- "Is it raining?" (question)\n- "$x + 1 = 3$" (has a free variable — truth depends on $x$; this is a *predicate*, not a proposition)\n- "This sentence is false." (paradox — no consistent truth value)',
      },
      {
        type: 'text',
        content:
          'We use lowercase letters $p, q, r, s, \\ldots$ to represent propositions. These are called **propositional variables**.',
      },
      {
        type: 'definition',
        title: 'Logical Connectives',
        content:
          'Connectives combine simple propositions into compound propositions.\n\n| Connective | Symbol | Name | Read as |\n|:----------:|:------:|:----:|:-------:|\n| NOT | $\\neg p$ | Negation | "not $p$" |\n| AND | $p \\wedge q$ | Conjunction | "$p$ and $q$" |\n| OR | $p \\vee q$ | Disjunction | "$p$ or $q$" (inclusive) |\n| XOR | $p \\oplus q$ | Exclusive Or | "either $p$ or $q$ but not both" |',
      },
      {
        type: 'text',
        content:
          '**Key point about OR:** In logic, $p \\vee q$ is the *inclusive or* — it is true when at least one operand is true, including when both are true. This differs from everyday English where "or" is often exclusive ("soup or salad" usually means pick one).',
      },
      {
        type: 'example',
        title: 'Translating English to logic',
        content:
          'Let $p$ = "It is raining" and $q$ = "I carry an umbrella."\n\n- "It is raining and I carry an umbrella" $\\to$ $p \\wedge q$\n- "It is not raining" $\\to$ $\\neg p$\n- "It is raining or I carry an umbrella" $\\to$ $p \\vee q$\n- "It is raining but I do not carry an umbrella" $\\to$ $p \\wedge \\neg q$\n\nNote: "but" translates to $\\wedge$ (and). It carries emphasis in English but has the same logical meaning.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Propositional Logic Introduction',
        videoId: 'itrXYg41-V0',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u1s2 — Truth Tables
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u1s2',
    title: 'Truth Tables',
    subtitle: 'Systematically evaluate every possible scenario',
    blocks: [
      {
        type: 'text',
        content:
          'A **truth table** lists all possible combinations of truth values for the propositional variables and shows the resulting truth value of the compound proposition for each combination.',
      },
      {
        type: 'theorem',
        title: 'Number of Rows',
        content:
          'A truth table for a compound proposition with $n$ distinct propositional variables has $2^n$ rows.',
      },
      {
        type: 'text',
        content:
          'For 2 variables: $2^2 = 4$ rows. For 3 variables: $2^3 = 8$ rows. For 4 variables: $2^4 = 16$ rows.',
      },
      {
        type: 'definition',
        title: 'Fundamental Truth Tables',
        content:
          '| $p$ | $q$ | $\\neg p$ | $p \\wedge q$ | $p \\vee q$ | $p \\oplus q$ |\n|:---:|:---:|:--------:|:------------:|:----------:|:------------:|\n|  T  |  T  |    F     |      T       |     T      |      F       |\n|  T  |  F  |    F     |      F       |     T      |      T       |\n|  F  |  T  |    T     |      F       |     T      |      T       |\n|  F  |  F  |    T     |      F       |     F      |      F       |',
      },
      {
        type: 'example',
        title: 'Building a truth table step by step',
        content:
          'Build the truth table for $(p \\wedge q) \\vee \\neg p$.\n\n**Step 1:** List all combinations of $p, q$.\n**Step 2:** Compute intermediate columns: $p \\wedge q$ and $\\neg p$.\n**Step 3:** Compute the final column: $(p \\wedge q) \\vee \\neg p$.\n\n| $p$ | $q$ | $p \\wedge q$ | $\\neg p$ | $(p \\wedge q) \\vee \\neg p$ |\n|:---:|:---:|:------------:|:--------:|:--------------------------:|\n|  T  |  T  |      T       |    F     |             T              |\n|  T  |  F  |      F       |    F     |             F              |\n|  F  |  T  |      F       |    T     |             T              |\n|  F  |  F  |      F       |    T     |             T              |\n\nResult: T, F, T, T.',
      },
      {
        type: 'definition',
        title: 'Logical Equivalence',
        content:
          'Two compound propositions are **logically equivalent** (written $\\equiv$) if they have the same truth value in every row of their truth tables. For example, $p \\vee q \\equiv q \\vee p$ (commutativity).',
      },
      {
        type: 'video',
        title: 'Kimberly Brehm: Truth Tables',
        videoId: 'O0KbymjE7xU',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u1s3 — De Morgan's Laws & Logical Equivalence
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u1s3',
    title: "De Morgan's Laws & Logical Equivalence",
    subtitle: 'How to correctly negate compound statements',
    blocks: [
      {
        type: 'theorem',
        title: "De Morgan's Laws",
        content:
          "De Morgan's Laws tell us how to negate conjunctions and disjunctions:\n\n$$\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$$\n$$\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$$\n\nIn words:\n- The negation of an AND becomes an OR of negations.\n- The negation of an OR becomes an AND of negations.",
      },
      {
        type: 'warning',
        title: "Don't just distribute the negation!",
        content:
          'A very common mistake is writing $\\neg(p \\wedge q) = \\neg p \\wedge \\neg q$. This is WRONG.\n\nThe correct rule is: **flip the connective** (AND becomes OR, OR becomes AND) **and negate each part**.\n\n$\\neg(p \\wedge q) = \\neg p \\vee \\neg q$ (the $\\wedge$ becomes $\\vee$)\n$\\neg(p \\vee q) = \\neg p \\wedge \\neg q$ (the $\\vee$ becomes $\\wedge$)',
      },
      {
        type: 'example',
        title: 'Proof of De Morgan\'s First Law by truth table',
        content:
          'Verify $\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$:\n\n| $p$ | $q$ | $p \\wedge q$ | $\\neg(p \\wedge q)$ | $\\neg p$ | $\\neg q$ | $\\neg p \\vee \\neg q$ |\n|:---:|:---:|:-----------:|:------------------:|:-------:|:-------:|:--------------------:|\n|  T  |  T  |      T      |         F          |    F    |    F    |          F           |\n|  T  |  F  |      F      |         T          |    F    |    T    |          T           |\n|  F  |  T  |      F      |         T          |    T    |    F    |          T           |\n|  F  |  F  |      F      |         T          |    T    |    T    |          T           |\n\nColumns 4 and 7 match. The equivalence holds.',
      },
      {
        type: 'example',
        title: 'Applying De Morgan\'s to nested expressions',
        content:
          'Negate $r \\wedge (\\neg e \\vee p)$:\n\nStep 1: Apply De Morgan\'s to the outer $\\wedge$:\n$$\\neg(r \\wedge (\\neg e \\vee p)) = \\neg r \\vee \\neg(\\neg e \\vee p)$$\n\nStep 2: Apply De Morgan\'s to the inner $\\vee$:\n$$\\neg(\\neg e \\vee p) = \\neg(\\neg e) \\wedge \\neg p = e \\wedge \\neg p$$\n\nStep 3: Combine:\n$$\\neg r \\vee (e \\wedge \\neg p)$$\n\nAlways work from the outside in!',
      },
      {
        type: 'definition',
        title: 'Important Logical Equivalences',
        content:
          '| Name | Equivalence |\n|:----:|:-----------:|\n| Commutative | $p \\wedge q \\equiv q \\wedge p$ and $p \\vee q \\equiv q \\vee p$ |\n| Associative | $(p \\wedge q) \\wedge r \\equiv p \\wedge (q \\wedge r)$ |\n| Distributive | $p \\wedge (q \\vee r) \\equiv (p \\wedge q) \\vee (p \\wedge r)$ |\n| Identity | $p \\wedge T \\equiv p$ and $p \\vee F \\equiv p$ |\n| Domination | $p \\vee T \\equiv T$ and $p \\wedge F \\equiv F$ |\n| Complement | $p \\vee \\neg p \\equiv T$ and $p \\wedge \\neg p \\equiv F$ |\n| Double Negation | $\\neg(\\neg p) \\equiv p$ |\n| Absorption | $p \\vee (p \\wedge q) \\equiv p$ and $p \\wedge (p \\vee q) \\equiv p$ |',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u2s1 — Binary & Decimal Conversion
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u2s1',
    title: 'Binary & Decimal Conversion',
    subtitle: 'Fluency between base 2 and base 10',
    blocks: [
      {
        type: 'definition',
        title: 'Positional Notation',
        content:
          'In base $b$, the number $d_n d_{n-1} \\ldots d_1 d_0$ represents:\n$$d_n \\cdot b^n + d_{n-1} \\cdot b^{n-1} + \\cdots + d_1 \\cdot b^1 + d_0 \\cdot b^0$$\n\nIn binary ($b = 2$), each digit (bit) is 0 or 1. The place values are powers of 2: $\\ldots, 16, 8, 4, 2, 1$.',
      },
      {
        type: 'example',
        title: 'Binary to Decimal',
        content:
          'Convert $1011_2$ to decimal:\n$$1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = 8 + 0 + 2 + 1 = 11_{10}$$',
      },
      {
        type: 'example',
        title: 'Decimal to Binary (Repeated Division)',
        content:
          'Convert $42_{10}$ to binary:\n\n$42 \\div 2 = 21$ remainder $0$\n$21 \\div 2 = 10$ remainder $1$\n$10 \\div 2 = 5$ remainder $0$\n$5 \\div 2 = 2$ remainder $1$\n$2 \\div 2 = 1$ remainder $0$\n$1 \\div 2 = 0$ remainder $1$\n\nRead remainders bottom to top: $101010_2$\n\nCheck: $32 + 8 + 2 = 42$',
      },
      {
        type: 'theorem',
        title: 'Maximum Value',
        content:
          'The largest unsigned integer representable with $n$ bits is $2^n - 1$.\n\nExamples: 8 bits $\\to 255$, 16 bits $\\to 65{,}535$, 32 bits $\\to 4{,}294{,}967{,}295$.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Binary to Decimal and Back',
        videoId: 'H4BstqvgBow',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u2s2 — Hexadecimal & Other Bases
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u2s2',
    title: 'Hexadecimal & Other Bases',
    subtitle: 'Base 16 and the binary shortcut',
    blocks: [
      {
        type: 'definition',
        title: 'Hexadecimal (Base 16)',
        content:
          'Hexadecimal uses 16 digits: $0, 1, 2, \\ldots, 9, A, B, C, D, E, F$.\n\n| Hex | Decimal | Binary |\n|:---:|:-------:|:------:|\n| A | 10 | 1010 |\n| B | 11 | 1011 |\n| C | 12 | 1100 |\n| D | 13 | 1101 |\n| E | 14 | 1110 |\n| F | 15 | 1111 |',
      },
      {
        type: 'theorem',
        title: 'Binary-Hex Shortcut',
        content:
          'Since $16 = 2^4$, each hexadecimal digit corresponds to exactly 4 binary digits (a "nibble").\n\n**Binary to Hex:** Group bits into 4s from the right, convert each group.\n**Hex to Binary:** Replace each hex digit with its 4-bit binary equivalent.\n\nExample: $\\text{A3}_{16} = 1010\\ 0011_2$ and $1101\\ 0110_2 = \\text{D6}_{16}$.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Hexadecimal Number System',
        videoId: '4EJay-6Bioo',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u2s3 — Base Conversion Practice
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u2s3',
    title: 'Base Conversion Practice',
    subtitle: 'Rapid conversions across all bases',
    blocks: [
      {
        type: 'text',
        content:
          'To convert between two arbitrary bases (e.g., base 4 to base 7), use decimal as an intermediary:\n\n$$\\text{Source base} \\xrightarrow{\\text{positional notation}} \\text{Decimal} \\xrightarrow{\\text{repeated division}} \\text{Target base}$$',
      },
      {
        type: 'example',
        title: 'Base 4 to Decimal',
        content:
          'Convert $321_4$ to decimal:\n$$3 \\cdot 4^2 + 2 \\cdot 4^1 + 1 \\cdot 4^0 = 48 + 8 + 1 = 57_{10}$$',
      },
      {
        type: 'text',
        content:
          '**Shortcut for power-of-2 bases:** Since $4 = 2^2$ and $8 = 2^3$, you can convert directly between binary and base-4 (group by 2s) or binary and octal (group by 3s) without going through decimal.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u3s1 — Set Notation & Membership
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u3s1',
    title: 'Set Notation & Membership',
    subtitle: 'Reading and writing set descriptions',
    blocks: [
      {
        type: 'definition',
        title: 'Set',
        content:
          'A **set** is an unordered collection of distinct objects called **elements** or **members**.',
      },
      {
        type: 'definition',
        title: 'Notation',
        content:
          '**Roster notation:** List elements in braces. $A = \\{1, 2, 3, 4, 5\\}$.\n\n**Set-builder notation:** Describe elements by a property. $A = \\{x \\in \\mathbb{Z} \\mid 1 \\leq x \\leq 5\\}$.\n\n**Membership:** $3 \\in A$ means "$3$ is an element of $A$." $7 \\notin A$ means "$7$ is not an element of $A$."\n\n**Cardinality:** $|A|$ is the number of elements. $|\\{1,2,3\\}| = 3$.',
      },
      {
        type: 'warning',
        title: 'Sets have no duplicates and no order',
        content:
          '$\\{1, 2, 3\\} = \\{3, 1, 2\\} = \\{1, 1, 2, 3\\}$.\n\nThe order of listing does not matter, and duplicates are ignored.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Introduction to Sets',
        videoId: 'tyDKR4FG3Yw',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u3s2 — Subsets & Power Sets
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u3s2',
    title: 'Subsets & Power Sets',
    subtitle: 'Containment relationships between sets',
    blocks: [
      {
        type: 'definition',
        title: 'Subset',
        content:
          '$A \\subseteq B$ ("$A$ is a subset of $B$") means every element of $A$ is also in $B$.\n\n$A \\subset B$ ("$A$ is a proper subset of $B$") means $A \\subseteq B$ and $A \\neq B$.',
      },
      {
        type: 'theorem',
        title: 'Key Facts About Subsets',
        content:
          '1. $\\emptyset \\subseteq A$ for every set $A$ (the empty set is a subset of everything).\n2. $A \\subseteq A$ for every set $A$ (every set is a subset of itself).\n3. $A = B$ if and only if $A \\subseteq B$ and $B \\subseteq A$.',
      },
      {
        type: 'definition',
        title: 'Power Set',
        content:
          'The **power set** $\\mathcal{P}(A)$ is the set of all subsets of $A$.\n\n$$|\\mathcal{P}(A)| = 2^{|A|}$$\n\nExample: $\\mathcal{P}(\\{a, b\\}) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$ — it has $2^2 = 4$ elements.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Power Sets',
        videoId: 'OkmfBUuQHKU',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u3s3 — Set Operations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u3s3',
    title: 'Set Operations (Union, Intersection, Complement)',
    subtitle: 'Combining and comparing sets',
    blocks: [
      {
        type: 'definition',
        title: 'Core Set Operations',
        content:
          '| Operation | Symbol | Definition |\n|:---------:|:------:|:----------:|\n| Union | $A \\cup B$ | $\\{x \\mid x \\in A \\text{ or } x \\in B\\}$ |\n| Intersection | $A \\cap B$ | $\\{x \\mid x \\in A \\text{ and } x \\in B\\}$ |\n| Complement | $\\overline{A}$ | $\\{x \\in U \\mid x \\notin A\\}$ |\n| Difference | $A \\setminus B$ | $\\{x \\mid x \\in A \\text{ and } x \\notin B\\}$ |',
      },
      {
        type: 'example',
        title: 'Set operations in action',
        content:
          'Let $U = \\{1,...,8\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$.\n\n- $A \\cup B = \\{1,2,3,4,5,6\\}$\n- $A \\cap B = \\{3,4\\}$\n- $\\overline{A} = \\{5,6,7,8\\}$\n- $A \\setminus B = \\{1,2\\}$\n- $B \\setminus A = \\{5,6\\}$',
      },
      {
        type: 'video',
        title: 'TrevTutor: Set Operations',
        videoId: '2B4EBvVvf9w',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u4s1 — Multiplication & Addition Principles
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u4s1',
    title: 'Multiplication & Addition Principles',
    subtitle: 'The two fundamental counting rules',
    blocks: [
      {
        type: 'theorem',
        title: 'Multiplication Principle (Rule of Product)',
        content:
          'If a procedure has $k$ sequential steps, where step 1 has $n_1$ ways, step 2 has $n_2$ ways, ..., and step $k$ has $n_k$ ways, then the total number of ways to complete the procedure is:\n$$n_1 \\times n_2 \\times \\cdots \\times n_k$$\n\nUse this when you must make a choice at EACH step (AND logic).',
      },
      {
        type: 'example',
        title: 'Restaurant meals',
        content:
          'A restaurant offers 3 appetizers, 5 entrees, and 2 desserts. A meal has one of each.\n\nTotal meals: $3 \\times 5 \\times 2 = 30$.',
      },
      {
        type: 'theorem',
        title: 'Addition Principle (Rule of Sum)',
        content:
          'If an outcome can be achieved in one of $k$ mutually exclusive ways, where way 1 has $n_1$ outcomes, way 2 has $n_2$ outcomes, ..., then the total number of outcomes is:\n$$n_1 + n_2 + \\cdots + n_k$$\n\nUse this when you must pick ONE alternative (OR logic).',
      },
      {
        type: 'example',
        title: 'Travel options',
        content:
          'You can travel from A to B by 3 roads or 2 train routes.\n\nTotal ways: $3 + 2 = 5$.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Counting with the Multiplication Principle',
        videoId: '0NAASclUm4k',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u4s2 — Permutations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u4s2',
    title: 'Permutations',
    subtitle: 'Counting when ORDER matters',
    blocks: [
      {
        type: 'definition',
        title: 'Permutation',
        content:
          'A **permutation** is an ordered arrangement of objects. The number of ways to arrange $k$ objects chosen from $n$ distinct objects is:\n$$P(n, k) = \\frac{n!}{(n-k)!} = n \\times (n-1) \\times \\cdots \\times (n-k+1)$$',
      },
      {
        type: 'example',
        title: 'Choosing officers',
        content:
          'Choose a president, VP, and secretary from 10 people.\n\nOrder matters (different roles), so: $P(10, 3) = 10 \\times 9 \\times 8 = 720$.',
      },
      {
        type: 'text',
        content:
          'Special case: Arranging ALL $n$ objects gives $P(n,n) = n!$.\n\nExample: 5 people in a line = $5! = 120$ arrangements.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Permutations',
        videoId: 'XqQTXW7XfYA',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d1u4s3 — Combinations & The P vs C Decision Framework
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd1u4s3',
    title: 'Combinations & The P vs C Decision Framework',
    subtitle: 'CRITICAL: Knowing when order matters and when it does not',
    blocks: [
      {
        type: 'definition',
        title: 'Combination',
        content:
          'A **combination** is an unordered selection of objects. The number of ways to choose $k$ objects from $n$ where ORDER DOES NOT MATTER is:\n$$\\binom{n}{k} = C(n, k) = \\frac{n!}{k!(n-k)!} = \\frac{P(n,k)}{k!}$$\n\nWe divide by $k!$ because each unordered group of $k$ items can be arranged in $k!$ ways, and we are treating all those arrangements as the same selection.',
      },
      {
        type: 'warning',
        title: "Lisa's P vs C Decision Framework",
        content:
          'This is the MOST IMPORTANT thing to internalize for the exam. Before computing, always ask:\n\n**"Does ORDER matter? Would REARRANGING the selection give a DIFFERENT result?"**\n\n| If YES $\\to$ | **Permutation** $P(n,k) = \\frac{n!}{(n-k)!}$ |\n|:---:|:---:|\n| If NO $\\to$ | **Combination** $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ |\n\n**Quick tests:**\n- Are there distinct ROLES or POSITIONS? (president vs VP) $\\to$ Permutation\n- Is it a GROUP or COLLECTION? (committee, hand of cards) $\\to$ Combination\n- Does the problem say "arrange" or "line up"? $\\to$ Permutation\n- Does the problem say "choose" or "select"? $\\to$ Usually Combination',
      },
      {
        type: 'example',
        title: 'Applying the framework',
        content:
          '**Example 1:** Choose a 4-person committee from 12 people.\n*Does order matter?* NO — the committee {Alice, Bob, Carol, Dave} is the same group regardless of selection order.\n$\\to$ Combination: $\\binom{12}{4} = 495$.\n\n**Example 2:** Choose president, VP, treasurer from 12 people.\n*Does order matter?* YES — Alice as president, Bob as VP is different from Bob as president, Alice as VP.\n$\\to$ Permutation: $P(12, 3) = 1{,}320$.\n\n**Example 3:** Choose 3 pizza toppings from 10.\n*Does order matter?* NO — pepperoni-mushroom-olive = olive-mushroom-pepperoni on a pizza.\n$\\to$ Combination: $\\binom{10}{3} = 120$.\n\n**Example 4:** 5 cards dealt from a 52-card deck.\n*Does order matter?* NO — a poker hand is a set of cards.\n$\\to$ Combination: $\\binom{52}{5} = 2{,}598{,}960$.',
      },
      {
        type: 'theorem',
        title: 'Symmetry Property',
        content:
          '$$\\binom{n}{k} = \\binom{n}{n-k}$$\n\nChoosing $k$ items to INCLUDE is the same as choosing $n-k$ items to EXCLUDE.\n\nExample: $\\binom{10}{8} = \\binom{10}{2} = 45$. (Much easier to compute with the smaller value!)',
      },
      {
        type: 'text',
        content:
          '**Why does $C(n,k) = P(n,k) / k!$?**\n\nPermutations count every ordering of each selection. For example, choosing 3 letters from {A, B, C, D, E}: permutations count ABC, ACB, BAC, BCA, CAB, CBA as 6 different results. That is $3! = 6$ orderings of one combination. So combinations divide out the redundant orderings.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Combinations',
        videoId: 'iKy-d5_erhI',
      },
    ],
  },
];
