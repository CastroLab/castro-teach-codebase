// Day 2 Content: Deepening
// Logic Depth, Numbers Depth, Sets Operations, Counting Formulas

import type { ContentPage } from './index';

export const day2Content: ContentPage[] = [
  // ═══════════════════════════════════════════════════════════
  // d2u1s1 — Conditionals & Biconditionals
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u1s1',
    title: 'Conditionals & Biconditionals',
    subtitle: 'If-then and if-and-only-if',
    blocks: [
      {
        type: 'definition',
        title: 'Conditional (Implication)',
        content:
          'The **conditional** $p \\to q$ ("if $p$ then $q$") is false ONLY when $p$ is true and $q$ is false.\n\n| $p$ | $q$ | $p \\to q$ |\n|:---:|:---:|:---------:|\n|  T  |  T  |     T     |\n|  T  |  F  |     F     |\n|  F  |  T  |     T     |\n|  F  |  F  |     T     |\n\nKey insight: A false hypothesis makes the implication vacuously true. "If pigs fly, then I am a billionaire" is TRUE (because pigs do not fly).',
      },
      {
        type: 'definition',
        title: 'Biconditional',
        content:
          'The **biconditional** $p \\leftrightarrow q$ ("$p$ if and only if $q$") is true when $p$ and $q$ have the same truth value.\n\n$$p \\leftrightarrow q \\equiv (p \\to q) \\wedge (q \\to p)$$\n\n| $p$ | $q$ | $p \\leftrightarrow q$ |\n|:---:|:---:|:---------------------:|\n|  T  |  T  |           T           |\n|  T  |  F  |           F           |\n|  F  |  T  |           F           |\n|  F  |  F  |           T           |',
      },
      {
        type: 'theorem',
        title: 'Material Implication',
        content:
          'The conditional can be rewritten without $\\to$:\n$$p \\to q \\equiv \\neg p \\vee q$$\n\n"If $p$ then $q$" is the same as "either $p$ is false, or $q$ is true." This equivalence is used constantly in proofs.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Conditionals and Biconditionals',
        videoId: '5pRhDBsFdB0',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u1s2 — Converse / Inverse / Contrapositive
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u1s2',
    title: 'Converse, Inverse, Contrapositive',
    subtitle: 'The four related conditional forms',
    blocks: [
      {
        type: 'definition',
        title: 'Given $p \\to q$',
        content:
          '| Form | Statement | Equivalent to original? |\n|:----:|:---------:|:-----------------------:|\n| Original | $p \\to q$ | -- |\n| Converse | $q \\to p$ | NO |\n| Inverse | $\\neg p \\to \\neg q$ | NO |\n| Contrapositive | $\\neg q \\to \\neg p$ | YES |',
      },
      {
        type: 'warning',
        title: 'Only the contrapositive is equivalent!',
        content:
          'The converse and inverse are NOT equivalent to the original. They are equivalent to EACH OTHER.\n\nOriginal $\\equiv$ Contrapositive.\nConverse $\\equiv$ Inverse.\n\nCommon exam mistake: assuming "if $p$ then $q$" means "if $q$ then $p$." That is the converse — a different statement!',
      },
      {
        type: 'example',
        title: 'Concrete example',
        content:
          'Original: "If it rains, the ground is wet." ($R \\to W$)\n\nContrapositive: "If the ground is not wet, it is not raining." ($\\neg W \\to \\neg R$) EQUIVALENT.\n\nConverse: "If the ground is wet, it is raining." ($W \\to R$) NOT equivalent (sprinklers!).\n\nInverse: "If it is not raining, the ground is not wet." ($\\neg R \\to \\neg W$) NOT equivalent (same issue).',
      },
      {
        type: 'video',
        title: 'Kimberly Brehm: Converse, Inverse, Contrapositive',
        videoId: 'gFg_BGOD6mQ',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u1s3 — Logical Equivalence Proofs
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u1s3',
    title: 'Logical Equivalence Proofs',
    subtitle: 'Proving equivalences with named laws',
    blocks: [
      {
        type: 'text',
        content:
          'To prove $A \\equiv B$ algebraically, start with one side and apply named equivalences step by step until you reach the other side. Always cite the law used at each step.',
      },
      {
        type: 'example',
        title: 'Prove $\\neg(p \\to q) \\equiv p \\wedge \\neg q$',
        content:
          '$\\neg(p \\to q)$\n$\\equiv \\neg(\\neg p \\vee q)$ (Material Implication)\n$\\equiv \\neg(\\neg p) \\wedge \\neg q$ (De Morgan\'s Law)\n$\\equiv p \\wedge \\neg q$ (Double Negation)\n\nInterpretation: The only way "if $p$ then $q$" is false is when $p$ is true and $q$ is false.',
      },
      {
        type: 'text',
        content:
          'Alternatively, you can prove equivalence by building truth tables for both sides and checking that every row matches. Truth table proofs are always valid but can be long for many variables.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Logical Equivalences',
        videoId: 'tKnS3s8fOu4',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u2s1 — Two's Complement
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u2s1',
    title: "Two's Complement",
    subtitle: 'Representing negative numbers in binary',
    blocks: [
      {
        type: 'definition',
        title: "Two's Complement",
        content:
          "In $n$-bit two's complement:\n- The most significant bit (MSB) is the **sign bit**: 0 = positive, 1 = negative.\n- Range: $[-2^{n-1}, 2^{n-1} - 1]$.\n- For 8 bits: range is $[-128, +127]$.\n\nTo find the two's complement of a positive number (i.e., to negate it):\n1. Write the positive number in binary.\n2. Flip all bits (0s become 1s, 1s become 0s).\n3. Add 1.",
      },
      {
        type: 'example',
        title: 'Converting $-42$ to 8-bit two\'s complement',
        content:
          "Step 1: $+42 = 00101010_2$.\nStep 2: Flip bits: $11010101$.\nStep 3: Add 1: $11010110$.\n\nSo $-42$ in 8-bit two's complement is $11010110$.\n\nTo verify: flip $11010110 \\to 00101001$, add 1: $00101010 = 42$. Correct.",
      },
      {
        type: 'warning',
        title: 'Edge case: the most negative value',
        content:
          "In 8-bit two's complement, $10000000 = -128$. If you try to negate $-128$: flip to $01111111$, add 1 to get $10000000 = -128$ again! The value $+128$ is not representable in 8 bits. This is the one value where negation overflows.",
      },
      {
        type: 'video',
        title: "Ben Eater: Two's Complement",
        videoId: '4qH4unVtJkE',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u2s2 — Modular Arithmetic
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u2s2',
    title: 'Modular Arithmetic',
    subtitle: 'Clock arithmetic and remainders',
    blocks: [
      {
        type: 'definition',
        title: 'Modular Arithmetic',
        content:
          '$a \\bmod n$ is the remainder when $a$ is divided by $n$ (with $0 \\leq r < n$).\n\nWe write $a \\equiv b \\pmod{n}$ to mean $n \\mid (a - b)$, i.e., $a$ and $b$ have the same remainder when divided by $n$.',
      },
      {
        type: 'theorem',
        title: 'Properties of Modular Arithmetic',
        content:
          'If $a \\equiv b \\pmod{n}$ and $c \\equiv d \\pmod{n}$, then:\n\n- $(a + c) \\equiv (b + d) \\pmod{n}$\n- $(a \\cdot c) \\equiv (b \\cdot d) \\pmod{n}$\n\nThis means you can reduce $\\bmod n$ at any intermediate step — very useful for large computations!',
      },
      {
        type: 'example',
        title: 'Computing $(237 \\times 49) \\bmod 10$',
        content:
          'Instead of multiplying first:\n$237 \\bmod 10 = 7$\n$49 \\bmod 10 = 9$\n$(7 \\times 9) \\bmod 10 = 63 \\bmod 10 = 3$.\n\nMuch easier than computing $237 \\times 49 = 11{,}613$ first.',
      },
      {
        type: 'video',
        title: 'Khan Academy: Modular Arithmetic',
        videoId: 'W1SY6qKZrUk',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u3s3 — Inclusion-Exclusion Principle
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u3s3',
    title: 'Inclusion-Exclusion Principle',
    subtitle: 'Counting with overlapping sets',
    blocks: [
      {
        type: 'theorem',
        title: 'Inclusion-Exclusion (Two Sets)',
        content:
          '$$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n\nWe subtract $|A \\cap B|$ because elements in both sets are counted twice when we add $|A|$ and $|B|$.',
      },
      {
        type: 'example',
        title: 'Survey problem',
        content:
          'In a class of 40 students: 25 take math, 18 take physics, 8 take both.\n\nStudents taking math or physics: $|M \\cup P| = 25 + 18 - 8 = 35$.\nStudents taking neither: $40 - 35 = 5$.',
      },
      {
        type: 'warning',
        title: 'Do not forget to subtract the overlap!',
        content:
          'A common mistake: just adding $|A| + |B| = 25 + 18 = 43$. But this double-counts the 8 students in both classes, and it exceeds the total class size of 40! Always subtract $|A \\cap B|$.',
      },
      {
        type: 'video',
        title: 'TrevTutor: Inclusion-Exclusion',
        videoId: 'UwUbIeH24ws',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // d2u4s2 — Pascal's Triangle & Binomial Coefficients
  // ═══════════════════════════════════════════════════════════
  {
    id: 'd2u4s2',
    title: "Pascal's Triangle & Binomial Coefficients",
    subtitle: 'The triangle that connects algebra and counting',
    blocks: [
      {
        type: 'definition',
        title: "Pascal's Triangle",
        content:
          "Each entry is the sum of the two entries directly above it. Row $n$ contains the binomial coefficients $\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$.\n\n```\nRow 0:           1\nRow 1:          1  1\nRow 2:        1  2  1\nRow 3:       1  3  3  1\nRow 4:      1  4  6  4  1\nRow 5:     1  5 10 10  5  1\n```",
      },
      {
        type: 'theorem',
        title: "Pascal's Rule",
        content:
          "$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$$\n\nCombinatorial proof: To choose $k$ items from $n$, either include a distinguished item (then choose $k-1$ from $n-1$) or exclude it (choose $k$ from $n-1$).",
      },
      {
        type: 'theorem',
        title: 'Binomial Theorem',
        content:
          '$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$\n\nThe coefficients in the expansion of $(x+y)^n$ are exactly the entries of row $n$ of Pascal\'s Triangle.',
      },
      {
        type: 'video',
        title: "Numberphile: Pascal's Triangle",
        videoId: '0iMtlus-afo',
      },
    ],
  },
];
