// Day 1 Drills: Foundations
// Logic Essentials, Number Systems Intro, Sets Basics, Counting Foundations

import type { DrillSet } from './index';

export const day1Drills: DrillSet[] = [
  // ═══════════════════════════════════════════════════════════
  // D1 U1 S1 — Propositions & Connectives
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u1s1',
    title: 'Propositions & Connectives',
    subunitId: 'd1u1s1',
    questions: [
      {
        id: 'd1u1s1-q1',
        type: 'multiple-choice',
        question: 'Which of the following is a proposition?',
        options: [
          'Close the door.',
          'Is it raining?',
          '$2 + 3 = 5$',
          '$x + 1 = 3$',
        ],
        correctAnswer: '$2 + 3 = 5$',
        explanation:
          'A proposition is a declarative statement that is either true or false. "$2 + 3 = 5$" is true, so it is a proposition. "Close the door" is a command, "Is it raining?" is a question, and "$x + 1 = 3$" has a free variable so its truth value depends on $x$ — it is a predicate, not a proposition.',
        difficulty: 1,
      },
      {
        id: 'd1u1s1-q2',
        type: 'multiple-choice',
        question:
          'Let $p$ = "It is sunny" and $q$ = "I carry an umbrella." Which formula represents "It is sunny and I do not carry an umbrella"?',
        options: [
          '$p \\land q$',
          '$p \\land \\neg q$',
          '$p \\lor \\neg q$',
          '$\\neg p \\land q$',
        ],
        correctAnswer: '$p \\land \\neg q$',
        explanation:
          '"It is sunny" is $p$. "I do not carry an umbrella" is $\\neg q$. Joining them with "and" gives $p \\land \\neg q$.',
        difficulty: 1,
      },
      {
        id: 'd1u1s1-q3',
        type: 'multiple-choice',
        question:
          'The exclusive or (XOR) $p \\oplus q$ is true when:',
        options: [
          'Both $p$ and $q$ are true',
          'Exactly one of $p$, $q$ is true',
          'At least one of $p$, $q$ is true',
          'Neither $p$ nor $q$ is true',
        ],
        correctAnswer: 'Exactly one of $p$, $q$ is true',
        explanation:
          'XOR ($\\oplus$) outputs true when the operands differ: one true and one false. It is false when both are true or both are false. Contrast with OR ($\\lor$), which is true when at least one operand is true.',
        difficulty: 1,
      },
      {
        id: 'd1u1s1-q4',
        type: 'free-response',
        question:
          'Write the proposition "It is not the case that the server is running and the database is connected" using logical symbols. Let $p$ = "The server is running" and $q$ = "The database is connected."',
        correctAnswer: '$\\neg(p \\land q)$',
        explanation:
          '"The server is running and the database is connected" translates to $p \\land q$. Prefixing with "It is not the case that" negates the whole conjunction: $\\neg(p \\land q)$.',
        hint: 'The negation applies to the entire "and" statement, not just one part.',
        difficulty: 1,
      },
      {
        id: 'd1u1s1-q5',
        type: 'multiple-choice',
        question:
          'If $p$ is false and $q$ is true, what is the truth value of $p \\lor q$?',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation:
          '$p \\lor q$ (OR) is true whenever at least one operand is true. Since $q$ is true, $p \\lor q$ is true regardless of $p$.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U1 S2 — Truth Tables
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u1s2',
    title: 'Truth Tables',
    subunitId: 'd1u1s2',
    questions: [
      {
        id: 'd1u1s2-q1',
        type: 'truth-table',
        question:
          'Complete the truth table for $p \\land (\\neg q)$.',
        correctAnswer: 'F, T, F, F',
        explanation:
          'Row by row: (T,T): $T \\land \\neg T = T \\land F = F$. (T,F): $T \\land \\neg F = T \\land T = T$. (F,T): $F \\land \\neg T = F \\land F = F$. (F,F): $F \\land \\neg F = F \\land T = F$.',
        hint: 'First compute $\\neg q$ for each row, then AND it with $p$.',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: 'p \\land (\\neg q)',
        correctTableValues: [['F'], ['T'], ['F'], ['F']],
      },
      {
        id: 'd1u1s2-q2',
        type: 'truth-table',
        question:
          'Complete the truth table for $\\neg p \\lor q$.',
        correctAnswer: 'T, F, T, T',
        explanation:
          '(T,T): $\\neg T \\lor T = F \\lor T = T$. (T,F): $\\neg T \\lor F = F \\lor F = F$. (F,T): $\\neg F \\lor T = T \\lor T = T$. (F,F): $\\neg F \\lor F = T \\lor F = T$.',
        difficulty: 1,
        variables: ['p', 'q'],
        expression: '\\neg p \\lor q',
        correctTableValues: [['T'], ['F'], ['T'], ['T']],
      },
      {
        id: 'd1u1s2-q3',
        type: 'truth-table',
        question:
          'Build the truth table for $(p \\lor q) \\land \\neg(p \\land q)$. What well-known connective does this match?',
        correctAnswer:
          'F, T, T, F — This is XOR ($p \\oplus q$)',
        explanation:
          'The expression $(p \\lor q) \\land \\neg(p \\land q)$ is true when exactly one of $p, q$ is true. This is the definition of exclusive or (XOR). Row outputs: (T,T)=F, (T,F)=T, (F,T)=T, (F,F)=F.',
        difficulty: 2,
      },
      {
        id: 'd1u1s2-q4',
        type: 'free-response',
        question:
          'How many rows does a truth table have for a compound proposition with 4 variables?',
        correctAnswer: '$2^4 = 16$',
        explanation:
          'Each variable has 2 possible truth values (T or F). With $n$ variables, there are $2^n$ rows. For 4 variables: $2^4 = 16$ rows.',
        difficulty: 1,
      },
      {
        id: 'd1u1s2-q5',
        type: 'truth-table',
        question:
          'Two formulas are logically equivalent if they have the same truth table. Verify: is $p \\lor (q \\land r)$ equivalent to $(p \\lor q) \\land (p \\lor r)$? List any row where they differ, or state "equivalent."',
        correctAnswer: 'Equivalent',
        explanation:
          'This is the distributive law of OR over AND. You can verify by constructing both 8-row truth tables (3 variables). Every row matches. The distributive law states: $p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r)$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U1 S3 — De Morgan's Laws & Logical Equivalence
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u1s3',
    title: "De Morgan's Laws & Logical Equivalence",
    subunitId: 'd1u1s3',
    questions: [
      {
        id: 'd1u1s3-q1',
        type: 'free-response',
        question:
          "Apply De Morgan's Law to negate $p \\land q$. Write the result.",
        correctAnswer: '$\\neg p \\lor \\neg q$',
        explanation:
          "De Morgan's Law: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$. The negation of a conjunction is the disjunction of the negations. Think: \"not (A and B)\" = \"not A or not B.\"",
        difficulty: 1,
      },
      {
        id: 'd1u1s3-q2',
        type: 'free-response',
        question:
          "Apply De Morgan's Law to negate $\\neg p \\lor q$. Simplify fully.",
        correctAnswer: '$p \\land \\neg q$',
        explanation:
          "$\\neg(\\neg p \\lor q) \\equiv \\neg(\\neg p) \\land \\neg q \\equiv p \\land \\neg q$. De Morgan's flips OR to AND and negates each operand. Then double negation simplifies $\\neg(\\neg p)$ to $p$.",
        hint: 'Remember: negate each part and flip the connective.',
        difficulty: 2,
      },
      {
        id: 'd1u1s3-q3',
        type: 'free-response',
        question:
          "Use De Morgan's Laws to negate: \"The file is readable and (it is not encrypted or it is public).\" Let $r$ = readable, $e$ = encrypted, $p$ = public. The original: $r \\land (\\neg e \\lor p)$.",
        correctAnswer: '$\\neg r \\lor (e \\land \\neg p)$',
        explanation:
          "$\\neg(r \\land (\\neg e \\lor p))$. Apply De Morgan's: $\\neg r \\lor \\neg(\\neg e \\lor p)$. Apply De Morgan's again to the inner part: $\\neg r \\lor (\\neg(\\neg e) \\land \\neg p) = \\neg r \\lor (e \\land \\neg p)$. In English: \"The file is not readable, or it is encrypted and not public.\"",
        hint: "Apply De Morgan's from the outside in. Don't forget double negation.",
        difficulty: 2,
      },
      {
        id: 'd1u1s3-q4',
        type: 'multiple-choice',
        question:
          'Which of the following is logically equivalent to $\\neg(p \\lor q)$?',
        options: [
          '$\\neg p \\lor \\neg q$',
          '$\\neg p \\land \\neg q$',
          '$p \\land q$',
          '$\\neg p \\lor q$',
        ],
        correctAnswer: '$\\neg p \\land \\neg q$',
        explanation:
          "By De Morgan's Law: $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$. The negation of a disjunction is the conjunction of the negations.",
        difficulty: 1,
      },
      {
        id: 'd1u1s3-q5',
        type: 'truth-table',
        question:
          "Verify De Morgan's Law by comparing the truth tables of $\\neg(p \\land q)$ and $\\neg p \\lor \\neg q$. List the output columns for both (rows: TT, TF, FT, FF).",
        correctAnswer:
          'Both give: F, T, T, T — they are equivalent.',
        explanation:
          '$\\neg(p \\land q)$: (T,T)=F, (T,F)=T, (F,T)=T, (F,F)=T. $\\neg p \\lor \\neg q$: (T,T)=$F \\lor F$=F, (T,F)=$F \\lor T$=T, (F,T)=$T \\lor F$=T, (F,F)=$T \\lor T$=T. Columns match, confirming De Morgan\'s Law.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U2 S1 — Binary & Decimal Conversion
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u2s1',
    title: 'Binary & Decimal Conversion',
    subunitId: 'd1u2s1',
    questions: [
      {
        id: 'd1u2s1-q1',
        type: 'conversion',
        question: 'Convert $13_{10}$ to binary.',
        correctAnswer: '$1101_2$',
        explanation:
          'Repeated division by 2: $13 \\div 2 = 6$ R $1$; $6 \\div 2 = 3$ R $0$; $3 \\div 2 = 1$ R $1$; $1 \\div 2 = 0$ R $1$. Reading remainders bottom-to-top: $1101_2$. Check: $8+4+0+1 = 13$. ✓',
        hint: 'Divide by 2 repeatedly and read the remainders from bottom to top.',
        difficulty: 1,
      },
      {
        id: 'd1u2s1-q2',
        type: 'conversion',
        question: 'Convert $10110_2$ to decimal.',
        correctAnswer: '$22_{10}$',
        explanation:
          'Positional values: $1 \\cdot 2^4 + 0 \\cdot 2^3 + 1 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = 16 + 0 + 4 + 2 + 0 = 22$.',
        difficulty: 1,
      },
      {
        id: 'd1u2s1-q3',
        type: 'conversion',
        question: 'Convert $255_{10}$ to binary.',
        correctAnswer: '$11111111_2$',
        explanation:
          '$255 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 2^8 - 1$. All 8 bits are 1. This is the largest value an 8-bit unsigned integer can hold.',
        difficulty: 1,
      },
      {
        id: 'd1u2s1-q4',
        type: 'conversion',
        question: 'Convert $11001010_2$ to decimal.',
        correctAnswer: '$202_{10}$',
        explanation:
          '$1 \\cdot 128 + 1 \\cdot 64 + 0 \\cdot 32 + 0 \\cdot 16 + 1 \\cdot 8 + 0 \\cdot 4 + 1 \\cdot 2 + 0 \\cdot 1 = 128 + 64 + 8 + 2 = 202$.',
        difficulty: 2,
      },
      {
        id: 'd1u2s1-q5',
        type: 'free-response',
        question:
          'What is the largest decimal number representable with 6 bits (unsigned)?',
        correctAnswer: '$2^6 - 1 = 63$',
        explanation:
          'With $n$ bits, the largest unsigned value is $2^n - 1$. For 6 bits: $2^6 - 1 = 64 - 1 = 63$, which is $111111_2$.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U2 S2 — Hexadecimal & Other Bases
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u2s2',
    title: 'Hexadecimal & Other Bases',
    subunitId: 'd1u2s2',
    questions: [
      {
        id: 'd1u2s2-q1',
        type: 'conversion',
        question: 'Convert $\\text{2F}_{16}$ to decimal.',
        correctAnswer: '$47_{10}$',
        explanation:
          '$2 \\cdot 16^1 + F \\cdot 16^0 = 2 \\cdot 16 + 15 \\cdot 1 = 32 + 15 = 47$. Remember F = 15 in hex.',
        difficulty: 1,
      },
      {
        id: 'd1u2s2-q2',
        type: 'conversion',
        question: 'Convert $200_{10}$ to hexadecimal.',
        correctAnswer: '$\\text{C8}_{16}$',
        explanation:
          '$200 \\div 16 = 12$ R $8$. $12 \\div 16 = 0$ R $12$. Since $12 = \\text{C}$, the hex value is $\\text{C8}_{16}$. Check: $12 \\cdot 16 + 8 = 192 + 8 = 200$. ✓',
        difficulty: 1,
      },
      {
        id: 'd1u2s2-q3',
        type: 'conversion',
        question: 'Convert $\\text{A3}_{16}$ to binary.',
        correctAnswer: '$10100011_2$',
        explanation:
          'Each hex digit maps to 4 binary digits: $\\text{A} = 1010$, $3 = 0011$. Concatenate: $10100011_2$. This shortcut works because $16 = 2^4$.',
        hint: 'Convert each hex digit to its 4-bit binary equivalent separately.',
        difficulty: 1,
      },
      {
        id: 'd1u2s2-q4',
        type: 'conversion',
        question: 'Convert $11010110_2$ to hexadecimal.',
        correctAnswer: '$\\text{D6}_{16}$',
        explanation:
          'Group into 4-bit nibbles from the right: $1101 \\ 0110$. $1101_2 = 13_{10} = \\text{D}$. $0110_2 = 6_{10} = 6$. Result: $\\text{D6}_{16}$.',
        difficulty: 1,
      },
      {
        id: 'd1u2s2-q5',
        type: 'multiple-choice',
        question:
          'What decimal value does the hex digit $\\text{B}$ represent?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '11',
        explanation:
          'Hex digits: A=10, B=11, C=12, D=13, E=14, F=15.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U2 S3 — Base Conversion Practice
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u2s3',
    title: 'Base Conversion Practice',
    subunitId: 'd1u2s3',
    questions: [
      {
        id: 'd1u2s3-q1',
        type: 'conversion',
        question: 'Convert $321_4$ (base 4) to decimal.',
        correctAnswer: '$57_{10}$',
        explanation:
          '$3 \\cdot 4^2 + 2 \\cdot 4^1 + 1 \\cdot 4^0 = 3 \\cdot 16 + 2 \\cdot 4 + 1 = 48 + 8 + 1 = 57$.',
        difficulty: 2,
      },
      {
        id: 'd1u2s3-q2',
        type: 'conversion',
        question: 'Convert $100_{10}$ to base 8 (octal).',
        correctAnswer: '$144_8$',
        explanation:
          '$100 \\div 8 = 12$ R $4$. $12 \\div 8 = 1$ R $4$. $1 \\div 8 = 0$ R $1$. Reading remainders bottom-to-top: $144_8$. Check: $1 \\cdot 64 + 4 \\cdot 8 + 4 = 100$. ✓',
        difficulty: 2,
      },
      {
        id: 'd1u2s3-q3',
        type: 'conversion',
        question: 'Convert $\\text{FF}_{16}$ to decimal, then to binary.',
        correctAnswer: '$255_{10}$ and $11111111_2$',
        explanation:
          'Hex to decimal: $15 \\cdot 16 + 15 = 240 + 15 = 255$. Hex to binary: F = 1111, so FF = $11111111_2$. This is $2^8 - 1$.',
        difficulty: 1,
      },
      {
        id: 'd1u2s3-q4',
        type: 'conversion',
        question: 'Convert $212_3$ (base 3) to decimal.',
        correctAnswer: '$23_{10}$',
        explanation:
          '$2 \\cdot 3^2 + 1 \\cdot 3^1 + 2 \\cdot 3^0 = 2 \\cdot 9 + 1 \\cdot 3 + 2 = 18 + 3 + 2 = 23$.',
        difficulty: 2,
      },
      {
        id: 'd1u2s3-q5',
        type: 'free-response',
        question:
          'Why does grouping binary digits in sets of 4 let you convert directly to hex? Explain briefly.',
        correctAnswer:
          'Because $16 = 2^4$, so each group of 4 binary digits represents exactly one hexadecimal digit (values 0-15).',
        explanation:
          'Since hexadecimal is base 16 and $16 = 2^4$, each hex digit corresponds to exactly 4 binary digits. This means you can convert between binary and hex by grouping/ungrouping without going through decimal. The same principle works for octal ($8 = 2^3$): group in threes.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U3 S1 — Set Notation & Membership
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u3s1',
    title: 'Set Notation & Membership',
    subunitId: 'd1u3s1',
    questions: [
      {
        id: 'd1u3s1-q1',
        type: 'multiple-choice',
        question:
          'Let $A = \\{1, 2, 3, 4, 5\\}$. Which statement is true?',
        options: [
          '$6 \\in A$',
          '$\\{1, 2\\} \\in A$',
          '$3 \\in A$',
          '$0 \\in A$',
        ],
        correctAnswer: '$3 \\in A$',
        explanation:
          '$3$ is an element of $A$, so $3 \\in A$ is true. $6$ and $0$ are not elements. $\\{1,2\\}$ is a set, not an element of $A$ (it would be an element of the power set $\\mathcal{P}(A)$).',
        difficulty: 1,
      },
      {
        id: 'd1u3s1-q2',
        type: 'free-response',
        question:
          'Write the set of all even positive integers less than 12 using both roster notation and set-builder notation.',
        correctAnswer:
          'Roster: $\\{2, 4, 6, 8, 10\\}$. Set-builder: $\\{x \\in \\mathbb{Z}^+ \\mid x \\text{ is even and } x < 12\\}$',
        explanation:
          'Roster notation lists all elements: $\\{2, 4, 6, 8, 10\\}$. Set-builder notation describes the rule: $\\{x \\in \\mathbb{Z}^+ \\mid x \\text{ is even} \\land x < 12\\}$ or equivalently $\\{2k \\mid k \\in \\mathbb{Z}^+, k \\leq 5\\}$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s1-q3',
        type: 'multiple-choice',
        question: 'What is the cardinality of $A = \\{a, b, \\{c, d\\}, e\\}$?',
        options: ['3', '4', '5', '2'],
        correctAnswer: '4',
        explanation:
          '$A$ has four elements: $a$, $b$, $\\{c, d\\}$ (one element that happens to be a set), and $e$. The set $\\{c, d\\}$ counts as a single element of $A$. So $|A| = 4$.',
        difficulty: 2,
      },
      {
        id: 'd1u3s1-q4',
        type: 'multiple-choice',
        question: 'Is $\\emptyset \\in \\{\\emptyset\\}$?',
        options: ['Yes', 'No'],
        correctAnswer: 'Yes',
        explanation:
          'The set $\\{\\emptyset\\}$ has one element: the empty set $\\emptyset$. So $\\emptyset \\in \\{\\emptyset\\}$ is true. Note: $\\emptyset \\neq \\{\\emptyset\\}$. The empty set has no elements; $\\{\\emptyset\\}$ has one element.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U3 S2 — Subsets & Power Sets
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u3s2',
    title: 'Subsets & Power Sets',
    subunitId: 'd1u3s2',
    questions: [
      {
        id: 'd1u3s2-q1',
        type: 'free-response',
        question: 'List all elements of $\\mathcal{P}(\\{a, b\\})$.',
        correctAnswer:
          '$\\mathcal{P}(\\{a, b\\}) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$',
        explanation:
          'The power set of a set $S$ is the set of all subsets of $S$. For $\\{a, b\\}$, the subsets are: $\\emptyset$ (the empty set is always a subset), $\\{a\\}$, $\\{b\\}$, and $\\{a,b\\}$ (the set itself). $|\\mathcal{P}(S)| = 2^{|S|} = 2^2 = 4$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s2-q2',
        type: 'free-response',
        question:
          'How many elements does $\\mathcal{P}(\\{1, 2, 3, 4, 5\\})$ have?',
        correctAnswer: '$2^5 = 32$',
        explanation:
          'The power set of a set with $n$ elements has $2^n$ elements. Here $n = 5$, so $|\\mathcal{P}| = 2^5 = 32$. Think of it as: for each element, you independently choose to include or exclude it.',
        difficulty: 1,
      },
      {
        id: 'd1u3s2-q3',
        type: 'multiple-choice',
        question:
          'Let $A = \\{1, 2\\}$ and $B = \\{1, 2, 3\\}$. Which is true?',
        options: [
          '$B \\subseteq A$',
          '$A \\subseteq B$',
          '$A = B$',
          'Neither is a subset of the other',
        ],
        correctAnswer: '$A \\subseteq B$',
        explanation:
          'Every element of $A$ (namely 1 and 2) is also in $B$, so $A \\subseteq B$. Since $3 \\in B$ but $3 \\notin A$, we have $B \\not\\subseteq A$. Also $A \\subset B$ (proper subset) since $A \\neq B$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s2-q4',
        type: 'multiple-choice',
        question:
          'True or false: $\\emptyset \\subseteq A$ for every set $A$.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation:
          'The empty set is a subset of every set. This is vacuously true: the statement "every element of $\\emptyset$ is also in $A$" is true because there are no elements in $\\emptyset$ to contradict it.',
        difficulty: 1,
      },
      {
        id: 'd1u3s2-q5',
        type: 'free-response',
        question:
          'If $|A| = 0$, what is $\\mathcal{P}(A)$?',
        correctAnswer: '$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$',
        explanation:
          'If $A = \\emptyset$, the only subset is $\\emptyset$ itself. So $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$, which has $2^0 = 1$ element.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U3 S3 — Set Operations (Union, Intersection, Complement)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u3s3',
    title: 'Set Operations (Union, Intersection, Complement)',
    subunitId: 'd1u3s3',
    questions: [
      {
        id: 'd1u3s3-q1',
        type: 'set-operation',
        question:
          'Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$. Find $A \\cup B$.',
        correctAnswer: '$\\{1, 2, 3, 4, 5, 6\\}$',
        explanation:
          '$A \\cup B$ contains every element in $A$ or $B$ (or both). Combine all elements without duplicates: $\\{1, 2, 3, 4, 5, 6\\}$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s3-q2',
        type: 'set-operation',
        question:
          'Using the same $A$ and $B$ above, find $A \\cap B$.',
        correctAnswer: '$\\{3, 4\\}$',
        explanation:
          '$A \\cap B$ contains only elements in both $A$ and $B$. The common elements are $3$ and $4$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s3-q3',
        type: 'set-operation',
        question:
          'Let $U = \\{1,2,3,4,5,6,7,8\\}$ and $A = \\{2,4,6,8\\}$. Find $\\overline{A}$ (the complement of $A$).',
        correctAnswer: '$\\{1, 3, 5, 7\\}$',
        explanation:
          '$\\overline{A} = U \\setminus A$: all elements in the universal set $U$ that are not in $A$. Removing $\\{2,4,6,8\\}$ from $U$ leaves $\\{1,3,5,7\\}$.',
        difficulty: 1,
      },
      {
        id: 'd1u3s3-q4',
        type: 'set-operation',
        question:
          'Let $A = \\{1,2,3\\}$ and $B = \\{2,3,4\\}$. Find $A \\setminus B$ (set difference).',
        correctAnswer: '$\\{1\\}$',
        explanation:
          '$A \\setminus B$ (also written $A - B$) contains elements in $A$ but not in $B$. $1 \\in A$ and $1 \\notin B$, so $1$ is included. $2, 3$ are in both, so they are excluded.',
        difficulty: 1,
      },
      {
        id: 'd1u3s3-q5',
        type: 'set-operation',
        question:
          'Let $U = \\{1,...,10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$. Find $\\overline{A} \\cap B$.',
        correctAnswer: '$\\{6, 7\\}$',
        explanation:
          'First, $\\overline{A} = \\{6,7,8,9,10\\}$. Then $\\overline{A} \\cap B = \\{6,7,8,9,10\\} \\cap \\{4,5,6,7\\} = \\{6,7\\}$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U4 S1 — Multiplication & Addition Principles
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u4s1',
    title: 'Multiplication & Addition Principles',
    subunitId: 'd1u4s1',
    questions: [
      {
        id: 'd1u4s1-q1',
        type: 'free-response',
        question:
          'A restaurant offers 3 appetizers, 5 entrees, and 2 desserts. If a meal consists of one of each course, how many different meals are possible?',
        correctAnswer: '$3 \\times 5 \\times 2 = 30$',
        explanation:
          'By the multiplication principle (rule of product), when making a sequence of independent choices, multiply the number of options at each step: $3 \\times 5 \\times 2 = 30$ meals.',
        difficulty: 1,
      },
      {
        id: 'd1u4s1-q2',
        type: 'free-response',
        question:
          'You can travel from city A to city B by 3 different roads or by 2 different train routes. How many ways can you travel from A to B?',
        correctAnswer: '$3 + 2 = 5$',
        explanation:
          'By the addition principle (rule of sum), when choosing between mutually exclusive alternatives, add: $3 + 2 = 5$ ways. You take a road OR a train, not both.',
        difficulty: 1,
      },
      {
        id: 'd1u4s1-q3',
        type: 'free-response',
        question:
          'How many 3-digit numbers can be formed using digits $\\{1, 2, 3, 4, 5\\}$ if repetition is allowed?',
        correctAnswer: '$5 \\times 5 \\times 5 = 125$',
        explanation:
          'With repetition allowed, each of the 3 positions has 5 choices independently. By the multiplication principle: $5^3 = 125$.',
        difficulty: 1,
      },
      {
        id: 'd1u4s1-q4',
        type: 'free-response',
        question:
          'How many 3-digit numbers can be formed using digits $\\{1, 2, 3, 4, 5\\}$ if repetition is NOT allowed?',
        correctAnswer: '$5 \\times 4 \\times 3 = 60$',
        explanation:
          'Without repetition: 5 choices for the first digit, 4 remaining for the second, 3 remaining for the third. By the multiplication principle: $5 \\times 4 \\times 3 = 60$. This is $P(5,3) = \\frac{5!}{2!} = 60$.',
        difficulty: 1,
      },
      {
        id: 'd1u4s1-q5',
        type: 'multiple-choice',
        question:
          'A password must be 4 characters: first two are uppercase letters (26 options each), last two are digits (10 each). How many passwords are possible?',
        options: ['$26 + 26 + 10 + 10$', '$26^2 + 10^2$', '$26^2 \\times 10^2$', '$(26 + 10)^4$'],
        correctAnswer: '$26^2 \\times 10^2$',
        explanation:
          'The four positions are filled sequentially with independent choices: $26 \\times 26 \\times 10 \\times 10 = 26^2 \\times 10^2 = 67{,}600$. We use multiplication because we need one choice from EACH position.',
        difficulty: 1,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U4 S2 — Permutations
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u4s2',
    title: 'Permutations',
    subunitId: 'd1u4s2',
    questions: [
      {
        id: 'd1u4s2-q1',
        type: 'free-response',
        question:
          'Compute $P(7, 3)$.',
        correctAnswer: '$P(7,3) = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$',
        explanation:
          '$P(n, r) = \\frac{n!}{(n-r)!}$. So $P(7, 3) = \\frac{7!}{(7-3)!} = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$. This counts the number of ways to arrange 3 items chosen from 7 where order matters.',
        difficulty: 1,
      },
      {
        id: 'd1u4s2-q2',
        type: 'free-response',
        question:
          'In how many ways can a president, vice-president, and secretary be chosen from a club of 10 members?',
        correctAnswer: '$P(10, 3) = 10 \\times 9 \\times 8 = 720$',
        explanation:
          'Order matters because the roles are distinct (president ≠ vice-president). This is a permutation: $P(10, 3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720$.',
        hint: 'Does order matter here? Is president-then-VP different from VP-then-president?',
        difficulty: 1,
      },
      {
        id: 'd1u4s2-q3',
        type: 'free-response',
        question:
          'How many ways can 5 people stand in a line?',
        correctAnswer: '$5! = 120$',
        explanation:
          'Arranging all $n$ items in a line is $P(n, n) = n!$. For 5 people: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.',
        difficulty: 1,
      },
      {
        id: 'd1u4s2-q4',
        type: 'free-response',
        question:
          'How many distinct arrangements are there of the letters in the word "BOOK"?',
        correctAnswer: '$\\frac{4!}{2!} = 12$',
        explanation:
          'BOOK has 4 letters, but O appears twice. Without adjustment, $4! = 24$, but that double-counts swaps of the two O\'s. Divide by $2!$ for the repeated letter: $\\frac{4!}{2!} = \\frac{24}{2} = 12$.',
        difficulty: 2,
      },
      {
        id: 'd1u4s2-q5',
        type: 'multiple-choice',
        question:
          'A 7-digit phone number is formed from digits 0-9 with no repetition. How many such phone numbers exist?',
        options: [
          '$10^7$',
          '$P(10, 7) = 604{,}800$',
          '$C(10, 7) = 120$',
          '$7! = 5{,}040$',
        ],
        correctAnswer: '$P(10, 7) = 604{,}800$',
        explanation:
          'We choose 7 digits from 10 where order matters (a phone number is a sequence) and no repetition. This is $P(10, 7) = \\frac{10!}{3!} = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 \\times 4 = 604{,}800$.',
        difficulty: 2,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // D1 U4 S3 — Combinations & The P vs C Decision Framework
  // ═══════════════════════════════════════════════════════════
  {
    id: 'drill-d1u4s3',
    title: 'Combinations & The P vs C Decision Framework',
    subunitId: 'd1u4s3',
    questions: [
      {
        id: 'd1u4s3-q1',
        type: 'free-response',
        question: 'Compute $C(8, 3)$.',
        correctAnswer: '$C(8,3) = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$',
        explanation:
          '$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. So $C(8,3) = \\frac{8!}{3! \\cdot 5!} = \\frac{336}{6} = 56$. This counts the number of ways to choose 3 items from 8 when order does NOT matter.',
        difficulty: 1,
      },
      {
        id: 'd1u4s3-q2',
        type: 'multiple-choice',
        question:
          'A committee of 4 is to be formed from 12 people. Is this a permutation or combination?',
        options: [
          'Permutation — order matters',
          'Combination — order does not matter',
        ],
        correctAnswer: 'Combination — order does not matter',
        explanation:
          '**P vs C Decision Framework:** Does order matter? A committee is a *group* — the committee {Alice, Bob, Carol, Dave} is the same regardless of who was picked first. Order does NOT matter, so this is a combination: $C(12, 4) = 495$.',
        hint: 'Ask: "Would rearranging the selected people give a DIFFERENT result?"',
        difficulty: 1,
      },
      {
        id: 'd1u4s3-q3',
        type: 'multiple-choice',
        question:
          'A club picks a president, VP, and treasurer from 12 members. Permutation or combination?',
        options: [
          'Permutation — order matters',
          'Combination — order does not matter',
        ],
        correctAnswer: 'Permutation — order matters',
        explanation:
          '**P vs C Decision Framework:** Does order matter? YES — the roles are distinct. Alice as president with Bob as VP is different from Bob as president with Alice as VP. This is $P(12, 3) = 12 \\times 11 \\times 10 = 1{,}320$.',
        difficulty: 1,
      },
      {
        id: 'd1u4s3-q4',
        type: 'free-response',
        question:
          'A pizza shop offers 10 toppings. How many ways can you choose 3 toppings for your pizza?',
        correctAnswer: '$C(10, 3) = 120$',
        explanation:
          'Choosing toppings: order does NOT matter (pepperoni-mushroom-olive = olive-mushroom-pepperoni on a pizza). Use combination: $C(10, 3) = \\frac{10!}{3! \\cdot 7!} = \\frac{720}{6} = 120$.',
        hint: 'Does the order you put toppings on a pizza matter?',
        difficulty: 1,
      },
      {
        id: 'd1u4s3-q5',
        type: 'matching',
        question:
          'For each scenario, decide Permutation (P) or Combination (C):\n\n(a) Selecting 5 cards from a 52-card deck\n(b) Arranging 5 books on a shelf\n(c) Choosing 3 flavors of ice cream from 12\n(d) Ranking the top 3 contestants in a competition',
        correctAnswer: '(a) C, (b) P, (c) C, (d) P',
        explanation:
          '**(a) C** — A hand of cards is a set; order does not matter. **(b) P** — The arrangement on a shelf is ordered (left-to-right). **(c) C** — Choosing flavors for a bowl; order does not matter. **(d) P** — 1st, 2nd, 3rd place are distinct positions; order matters.',
        difficulty: 2,
      },
      {
        id: 'd1u4s3-q6',
        type: 'free-response',
        question:
          'Explain why $C(n, r) = \\frac{P(n, r)}{r!}$ makes sense intuitively.',
        correctAnswer:
          '$P(n,r)$ counts ordered selections. Each unordered group of $r$ items can be arranged in $r!$ ways. So $P(n,r)$ overcounts each group by $r!$, and dividing corrects this.',
        explanation:
          'Permutations count every ordering of each selection separately. For example, choosing {A,B,C} from 5 items: permutations count ABC, ACB, BAC, BCA, CAB, CBA as 6 different arrangements. That\'s $3! = 6$ orderings of one combination. So $C(n,r) = \\frac{P(n,r)}{r!}$.',
        difficulty: 2,
      },
    ],
  },
];
