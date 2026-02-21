// Lisa's Discrete Math — Full 5-Day Curriculum Structure
// Each day targets ~5 hours of focused study

export interface Subunit {
  id: string;
  title: string;
  description: string;
  contentId?: string; // links to content page
  drillIds: string[]; // drill question IDs
  timeMinutes: number;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  subunits: Subunit[];
  testId: string; // unit test ID
  timeMinutes: number;
}

export interface Day {
  id: number;
  title: string;
  subtitle: string;
  color: string; // hex color
  totalHours: number;
  units: Unit[];
}

export const curriculum: Day[] = [
  // ═══════════════════════════════════════════════════════════
  // DAY 1: FOUNDATIONS (5 hrs)
  // ═══════════════════════════════════════════════════════════
  {
    id: 1,
    title: 'Foundations',
    subtitle: 'Build the core vocabulary and mechanics',
    color: '#3b82f6',
    totalHours: 5,
    units: [
      // ─── Day 1, Unit 1: Logic Essentials ───
      {
        id: 'd1u1',
        title: 'Logic Essentials',
        description:
          'Propositions, logical connectives, truth tables, and foundational equivalences including De Morgan\'s Laws.',
        testId: 'test-d1u1',
        timeMinutes: 70,
        subunits: [
          {
            id: 'd1u1s1',
            title: 'Propositions & Connectives',
            description:
              'Learn what counts as a proposition, and master AND, OR, NOT, XOR connectives with their symbols.',
            contentId: 'd1u1s1',
            drillIds: ['drill-d1u1s1'],
            timeMinutes: 20,
          },
          {
            id: 'd1u1s2',
            title: 'Truth Tables',
            description:
              'Construct truth tables for compound propositions with 2 and 3 variables.',
            contentId: 'd1u1s2',
            drillIds: ['drill-d1u1s2'],
            timeMinutes: 25,
          },
          {
            id: 'd1u1s3',
            title: "De Morgan's Laws & Logical Equivalence",
            description:
              'Apply De Morgan\'s Laws to negate compound statements and verify equivalences via truth tables.',
            contentId: 'd1u1s3',
            drillIds: ['drill-d1u1s3'],
            timeMinutes: 25,
          },
        ],
      },

      // ─── Day 1, Unit 2: Number Systems Intro ───
      {
        id: 'd1u2',
        title: 'Number Systems Intro',
        description:
          'Binary, decimal, and hexadecimal representations with fluent conversion between bases.',
        testId: 'test-d1u2',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd1u2s1',
            title: 'Binary & Decimal Conversion',
            description:
              'Convert between binary and decimal using positional notation and repeated division.',
            contentId: 'd1u2s1',
            drillIds: ['drill-d1u2s1'],
            timeMinutes: 20,
          },
          {
            id: 'd1u2s2',
            title: 'Hexadecimal & Other Bases',
            description:
              'Understand base-16 (hex) representation and convert between hex, binary, and decimal.',
            contentId: 'd1u2s2',
            drillIds: ['drill-d1u2s2'],
            timeMinutes: 20,
          },
          {
            id: 'd1u2s3',
            title: 'Base Conversion Practice',
            description:
              'Drill rapid conversions across all bases with the repeated-division and grouping methods.',
            contentId: 'd1u2s3',
            drillIds: ['drill-d1u2s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 1, Unit 3: Sets Basics ───
      {
        id: 'd1u3',
        title: 'Sets Basics',
        description:
          'Set notation, membership, subsets, power sets, and the three core operations.',
        testId: 'test-d1u3',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd1u3s1',
            title: 'Set Notation & Membership',
            description:
              'Read and write set-builder and roster notation; understand element membership.',
            contentId: 'd1u3s1',
            drillIds: ['drill-d1u3s1'],
            timeMinutes: 20,
          },
          {
            id: 'd1u3s2',
            title: 'Subsets & Power Sets',
            description:
              'Determine subset relationships and enumerate power sets; know that |P(A)| = 2^|A|.',
            contentId: 'd1u3s2',
            drillIds: ['drill-d1u3s2'],
            timeMinutes: 20,
          },
          {
            id: 'd1u3s3',
            title: 'Set Operations (Union, Intersection, Complement)',
            description:
              'Perform union, intersection, and complement and verify results with Venn diagrams.',
            contentId: 'd1u3s3',
            drillIds: ['drill-d1u3s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 1, Unit 4: Counting Foundations ───
      {
        id: 'd1u4',
        title: 'Counting Foundations',
        description:
          'Multiplication/addition principles, permutations, and combinations with the P vs C decision framework.',
        testId: 'test-d1u4',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd1u4s1',
            title: 'Multiplication & Addition Principles',
            description:
              'Apply the rule of product (sequential choices) and rule of sum (alternatives).',
            contentId: 'd1u4s1',
            drillIds: ['drill-d1u4s1'],
            timeMinutes: 20,
          },
          {
            id: 'd1u4s2',
            title: 'Permutations',
            description:
              'Count ordered arrangements: P(n,r) = n!/(n-r)! and when order matters.',
            contentId: 'd1u4s2',
            drillIds: ['drill-d1u4s2'],
            timeMinutes: 20,
          },
          {
            id: 'd1u4s3',
            title: 'Combinations & The P vs C Decision Framework',
            description:
              'Count unordered selections: C(n,r) = n!/(r!(n-r)!). Master the key question: "Does order matter?"',
            contentId: 'd1u4s3',
            drillIds: ['drill-d1u4s3'],
            timeMinutes: 20,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DAY 2: DEEPENING (5 hrs)
  // ═══════════════════════════════════════════════════════════
  {
    id: 2,
    title: 'Deepening',
    subtitle: 'Extend each topic with harder mechanics and new tools',
    color: '#8b5cf6',
    totalHours: 5,
    units: [
      // ─── Day 2, Unit 1: Logic Depth ───
      {
        id: 'd2u1',
        title: 'Logic Depth',
        description:
          'Conditionals, biconditionals, contrapositives, and proving logical equivalences.',
        testId: 'test-d2u1',
        timeMinutes: 75,
        subunits: [
          {
            id: 'd2u1s1',
            title: 'Conditionals & Biconditionals',
            description:
              'Master p -> q (if-then) and p <-> q (if and only if) with truth tables and intuition.',
            contentId: 'd2u1s1',
            drillIds: ['drill-d2u1s1'],
            timeMinutes: 25,
          },
          {
            id: 'd2u1s2',
            title: 'Converse / Inverse / Contrapositive',
            description:
              'Given p -> q, identify its converse (q -> p), inverse (~p -> ~q), and contrapositive (~q -> ~p).',
            contentId: 'd2u1s2',
            drillIds: ['drill-d2u1s2'],
            timeMinutes: 25,
          },
          {
            id: 'd2u1s3',
            title: 'Logical Equivalence Proofs',
            description:
              'Prove equivalences using truth tables and algebraic manipulation of logical identities.',
            contentId: 'd2u1s3',
            drillIds: ['drill-d2u1s3'],
            timeMinutes: 25,
          },
        ],
      },

      // ─── Day 2, Unit 2: Numbers Depth ───
      {
        id: 'd2u2',
        title: 'Numbers Depth',
        description:
          "Two's complement for signed integers, modular arithmetic, and binary operations.",
        testId: 'test-d2u2',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd2u2s1',
            title: "Two's Complement",
            description:
              'Represent negative integers in binary using two\'s complement; convert between signed and unsigned.',
            contentId: 'd2u2s1',
            drillIds: ['drill-d2u2s1'],
            timeMinutes: 20,
          },
          {
            id: 'd2u2s2',
            title: 'Modular Arithmetic',
            description:
              'Compute a mod n, understand congruence classes, and solve basic modular equations.',
            contentId: 'd2u2s2',
            drillIds: ['drill-d2u2s2'],
            timeMinutes: 20,
          },
          {
            id: 'd2u2s3',
            title: 'Binary Arithmetic & Caesar Cipher',
            description:
              'Add and subtract in binary; apply modular arithmetic to shift ciphers.',
            contentId: 'd2u2s3',
            drillIds: ['drill-d2u2s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 2, Unit 3: Sets Operations ───
      {
        id: 'd2u3',
        title: 'Sets Operations',
        description:
          'Cartesian products, chained operations, and the inclusion-exclusion principle for two sets.',
        testId: 'test-d2u3',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd2u3s1',
            title: 'Cartesian Products',
            description:
              'Compute A x B, understand ordered pairs, and determine |A x B| = |A| * |B|.',
            contentId: 'd2u3s1',
            drillIds: ['drill-d2u3s1'],
            timeMinutes: 20,
          },
          {
            id: 'd2u3s2',
            title: 'Chained Set Operations',
            description:
              'Evaluate expressions like (A ∪ B) ∩ C\' step by step using multiple operations.',
            contentId: 'd2u3s2',
            drillIds: ['drill-d2u3s2'],
            timeMinutes: 20,
          },
          {
            id: 'd2u3s3',
            title: 'Inclusion-Exclusion Principle',
            description:
              '|A ∪ B| = |A| + |B| - |A ∩ B|. Apply to counting problems with overlapping sets.',
            contentId: 'd2u3s3',
            drillIds: ['drill-d2u3s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 2, Unit 4: Counting Formulas ───
      {
        id: 'd2u4',
        title: 'Counting Formulas',
        description:
          "Reinforce P vs C, explore Pascal's triangle and binomial coefficients, and count with inclusion-exclusion.",
        testId: 'test-d2u4',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd2u4s1',
            title: 'P vs C Framework Reinforcement',
            description:
              'More practice distinguishing permutation from combination problems with the decision framework.',
            contentId: 'd2u4s1',
            drillIds: ['drill-d2u4s1'],
            timeMinutes: 20,
          },
          {
            id: 'd2u4s2',
            title: "Pascal's Triangle & Binomial Coefficients",
            description:
              'Construct Pascal\'s triangle, use C(n,r) = C(n-1,r-1) + C(n-1,r), and connect to the binomial theorem.',
            contentId: 'd2u4s2',
            drillIds: ['drill-d2u4s2'],
            timeMinutes: 20,
          },
          {
            id: 'd2u4s3',
            title: 'Inclusion-Exclusion for Counting',
            description:
              'Apply inclusion-exclusion to count elements satisfying at least one of several conditions.',
            contentId: 'd2u4s3',
            drillIds: ['drill-d2u4s3'],
            timeMinutes: 20,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DAY 3: CONNECTING CONCEPTS (5.5 hrs)
  // ═══════════════════════════════════════════════════════════
  {
    id: 3,
    title: 'Connecting Concepts',
    subtitle: 'Bridge topics together and tackle multi-step problems',
    color: '#06b6d4',
    totalHours: 5.5,
    units: [
      // ─── Day 3, Unit 1: Logic + Circuits ───
      {
        id: 'd3u1',
        title: 'Logic + Circuits',
        description:
          'Boolean circuits, logic gates, NAND universality, and real-world logic puzzles.',
        testId: 'test-d3u1',
        timeMinutes: 70,
        subunits: [
          {
            id: 'd3u1s1',
            title: 'Boolean Circuits & Gates',
            description:
              'Map AND, OR, NOT to circuit gates; trace inputs through a circuit diagram.',
            contentId: 'd3u1s1',
            drillIds: ['drill-d3u1s1'],
            timeMinutes: 25,
          },
          {
            id: 'd3u1s2',
            title: 'NAND Universal Gate',
            description:
              'Build AND, OR, NOT from NAND alone; understand functional completeness.',
            contentId: 'd3u1s2',
            drillIds: ['drill-d3u1s2'],
            timeMinutes: 20,
          },
          {
            id: 'd3u1s3',
            title: 'Vending Machine Logic & Knights/Knaves',
            description:
              'Model real-world constraints as Boolean expressions and solve logic puzzles.',
            contentId: 'd3u1s3',
            drillIds: ['drill-d3u1s3'],
            timeMinutes: 25,
          },
        ],
      },

      // ─── Day 3, Unit 2: Quantifiers + Sets ───
      {
        id: 'd3u2',
        title: 'Quantifiers + Sets',
        description:
          'Predicates, universal and existential quantifiers, and bridging quantifiers to set notation.',
        testId: 'test-d3u2',
        timeMinutes: 70,
        subunits: [
          {
            id: 'd3u2s1',
            title: 'Predicates & Quantifiers',
            description:
              'Translate English to predicate logic using ∀ (for all) and ∃ (there exists).',
            contentId: 'd3u2s1',
            drillIds: ['drill-d3u2s1'],
            timeMinutes: 25,
          },
          {
            id: 'd3u2s2',
            title: 'Mixed Quantifiers (Order Matters!)',
            description:
              'Understand why ∀x∃y differs from ∃y∀x; practice nested quantifier interpretation.',
            contentId: 'd3u2s2',
            drillIds: ['drill-d3u2s2'],
            timeMinutes: 25,
          },
          {
            id: 'd3u2s3',
            title: 'Quantifier-to-Set-Notation Bridge',
            description:
              'Rewrite quantified statements using set-builder notation and vice versa.',
            contentId: 'd3u2s3',
            drillIds: ['drill-d3u2s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 3, Unit 3: Number Theory ───
      {
        id: 'd3u3',
        title: 'Number Theory',
        description:
          'Divisibility, primes, prime factorization, and the Euclidean algorithm for GCD/LCM.',
        testId: 'test-d3u3',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd3u3s1',
            title: 'Divisibility & Primes',
            description:
              'Define divisibility (a | b), identify primes, and apply the Fundamental Theorem of Arithmetic.',
            contentId: 'd3u3s1',
            drillIds: ['drill-d3u3s1'],
            timeMinutes: 20,
          },
          {
            id: 'd3u3s2',
            title: 'Prime Factorization',
            description:
              'Factor integers into prime components; use factorization to find GCD and LCM.',
            contentId: 'd3u3s2',
            drillIds: ['drill-d3u3s2'],
            timeMinutes: 20,
          },
          {
            id: 'd3u3s3',
            title: 'Euclidean Algorithm (GCD/LCM)',
            description:
              'Run the Euclidean algorithm step-by-step; compute LCM via LCM(a,b) = ab / GCD(a,b).',
            contentId: 'd3u3s3',
            drillIds: ['drill-d3u3s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 3, Unit 4: Applied Counting ───
      {
        id: 'd3u4',
        title: 'Applied Counting',
        description:
          'Stars and bars, the pigeonhole principle, and binary string counting with constraints.',
        testId: 'test-d3u4',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd3u4s1',
            title: 'Stars and Bars',
            description:
              'Distribute n identical objects into k distinct bins using C(n+k-1, k-1).',
            contentId: 'd3u4s1',
            drillIds: ['drill-d3u4s1'],
            timeMinutes: 20,
          },
          {
            id: 'd3u4s2',
            title: 'Pigeonhole Principle',
            description:
              'If n items go into m containers with n > m, at least one container has >= 2 items.',
            contentId: 'd3u4s2',
            drillIds: ['drill-d3u4s2'],
            timeMinutes: 20,
          },
          {
            id: 'd3u4s3',
            title: 'Binary String Counting with Constraints',
            description:
              'Count binary strings of length n with various constraints (e.g., must start with 1, no consecutive 0s).',
            contentId: 'd3u4s3',
            drillIds: ['drill-d3u4s3'],
            timeMinutes: 20,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DAY 4: EXAM-LEVEL PROBLEMS (5.5 hrs)
  // ═══════════════════════════════════════════════════════════
  {
    id: 4,
    title: 'Exam-Level Problems',
    subtitle: 'Tackle problems at homework difficulty and beyond',
    color: '#f59e0b',
    totalHours: 5.5,
    units: [
      // ─── Day 4, Unit 1: Logic Mastery ───
      {
        id: 'd4u1',
        title: 'Logic Mastery',
        description:
          'Complex equivalence proofs, advanced conditional reasoning, and timed speed drills.',
        testId: 'test-d4u1',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd4u1s1',
            title: 'Complex Equivalence Proofs',
            description:
              'Prove multi-step equivalences using named laws (distributive, absorption, etc.).',
            contentId: 'd4u1s1',
            drillIds: ['drill-d4u1s1'],
            timeMinutes: 20,
          },
          {
            id: 'd4u1s2',
            title: 'Advanced Conditional Reasoning',
            description:
              'Chains of implications, nested conditionals, and their negations.',
            contentId: 'd4u1s2',
            drillIds: ['drill-d4u1s2'],
            timeMinutes: 20,
          },
          {
            id: 'd4u1s3',
            title: 'Logic Speed Drills',
            description:
              'Rapid-fire practice: identify connectives, negate statements, evaluate truth values.',
            contentId: 'd4u1s3',
            drillIds: ['drill-d4u1s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 4, Unit 2: Number Systems Mastery ───
      {
        id: 'd4u2',
        title: 'Number Systems Mastery',
        description:
          "Mixed-base problems, two's complement edge cases, and full cipher encode/decode.",
        testId: 'test-d4u2',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd4u2s1',
            title: 'Mixed Base Problems',
            description:
              'Convert between arbitrary bases (e.g., base 3 to base 7) via decimal as an intermediary.',
            contentId: 'd4u2s1',
            drillIds: ['drill-d4u2s1'],
            timeMinutes: 20,
          },
          {
            id: 'd4u2s2',
            title: "Two's Complement Edge Cases",
            description:
              'Handle overflow, the most-negative value, and subtraction via two\'s complement addition.',
            contentId: 'd4u2s2',
            drillIds: ['drill-d4u2s2'],
            timeMinutes: 20,
          },
          {
            id: 'd4u2s3',
            title: 'Full Cipher Encode/Decode',
            description:
              'Encode and decode messages using Caesar and affine ciphers with modular arithmetic.',
            contentId: 'd4u2s3',
            drillIds: ['drill-d4u2s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 4, Unit 3: Sets Mastery ───
      {
        id: 'd4u3',
        title: 'Sets Mastery',
        description:
          'Data mining with sets, complex operation chains, and three-set inclusion-exclusion.',
        testId: 'test-d4u3',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd4u3s1',
            title: 'Data Mining with Sets',
            description:
              'Model survey and database problems using set operations to extract information.',
            contentId: 'd4u3s1',
            drillIds: ['drill-d4u3s1'],
            timeMinutes: 20,
          },
          {
            id: 'd4u3s2',
            title: 'Complex Operation Chains',
            description:
              'Evaluate multi-step set expressions with symmetric difference, nested complements, etc.',
            contentId: 'd4u3s2',
            drillIds: ['drill-d4u3s2'],
            timeMinutes: 20,
          },
          {
            id: 'd4u3s3',
            title: 'Three-Set Inclusion-Exclusion',
            description:
              '|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|. Solve survey-style problems.',
            contentId: 'd4u3s3',
            drillIds: ['drill-d4u3s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 4, Unit 4: Combinatorics Mastery ───
      {
        id: 'd4u4',
        title: 'Combinatorics Mastery',
        description:
          'SET card game counting, advanced combinations, and cross-topic synthesis problems.',
        testId: 'test-d4u4',
        timeMinutes: 75,
        subunits: [
          {
            id: 'd4u4s1',
            title: 'SET Card Game Counting',
            description:
              'Use combinatorics to count valid SETs and analyze the card game mathematically.',
            contentId: 'd4u4s1',
            drillIds: ['drill-d4u4s1'],
            timeMinutes: 25,
          },
          {
            id: 'd4u4s2',
            title: 'Advanced Combinations',
            description:
              'Combinations with repetition, multi-choose, and committee-formation problems.',
            contentId: 'd4u4s2',
            drillIds: ['drill-d4u4s2'],
            timeMinutes: 25,
          },
          {
            id: 'd4u4s3',
            title: 'Cross-Topic Problems',
            description:
              'Problems that combine logic, sets, numbers, and counting in a single question.',
            contentId: 'd4u4s3',
            drillIds: ['drill-d4u4s3'],
            timeMinutes: 25,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DAY 5: PRACTICE EXAMS & REVIEW (5 hrs)
  // ═══════════════════════════════════════════════════════════
  {
    id: 5,
    title: 'Practice Exams & Review',
    subtitle: 'Simulate the midterm and patch weak spots',
    color: '#ef4444',
    totalHours: 5,
    units: [
      // ─── Day 5, Unit 1: Practice Exam 1 ───
      {
        id: 'd5u1',
        title: 'Practice Exam 1',
        description:
          'Full 90-minute simulated midterm covering all four topic areas.',
        testId: 'test-d5u1',
        timeMinutes: 90,
        subunits: [
          {
            id: 'd5u1s1',
            title: 'Questions 1-3',
            description:
              'Logic and number systems questions at exam difficulty.',
            contentId: 'd5u1s1',
            drillIds: ['drill-d5u1s1'],
            timeMinutes: 45,
          },
          {
            id: 'd5u1s2',
            title: 'Questions 4-6',
            description:
              'Sets and combinatorics questions at exam difficulty.',
            contentId: 'd5u1s2',
            drillIds: ['drill-d5u1s2'],
            timeMinutes: 45,
          },
        ],
      },

      // ─── Day 5, Unit 2: Practice Exam 2 ───
      {
        id: 'd5u2',
        title: 'Practice Exam 2',
        description:
          'Second full simulated midterm with different question styles.',
        testId: 'test-d5u2',
        timeMinutes: 90,
        subunits: [
          {
            id: 'd5u2s1',
            title: 'Questions 1-3',
            description:
              'Logic and number systems questions, alternate format.',
            contentId: 'd5u2s1',
            drillIds: ['drill-d5u2s1'],
            timeMinutes: 45,
          },
          {
            id: 'd5u2s2',
            title: 'Questions 4-6',
            description:
              'Sets and combinatorics questions, alternate format.',
            contentId: 'd5u2s2',
            drillIds: ['drill-d5u2s2'],
            timeMinutes: 45,
          },
        ],
      },

      // ─── Day 5, Unit 3: Targeted Review ───
      {
        id: 'd5u3',
        title: 'Targeted Review',
        description:
          'Focused review on the three hardest sub-topics identified from practice exams.',
        testId: 'test-d5u3',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd5u3s1',
            title: 'P vs C Rapid-Fire',
            description:
              'Rapid drill: given a scenario, decide permutation or combination and compute.',
            contentId: 'd5u3s1',
            drillIds: ['drill-d5u3s1'],
            timeMinutes: 20,
          },
          {
            id: 'd5u3s2',
            title: 'Predicate Logic Translation',
            description:
              'Translate between English and predicate logic with quantifiers, quickly and accurately.',
            contentId: 'd5u3s2',
            drillIds: ['drill-d5u3s2'],
            timeMinutes: 20,
          },
          {
            id: 'd5u3s3',
            title: 'Equivalence Proof Speed Run',
            description:
              'Prove logical equivalences as fast as possible, citing laws at each step.',
            contentId: 'd5u3s3',
            drillIds: ['drill-d5u3s3'],
            timeMinutes: 20,
          },
        ],
      },

      // ─── Day 5, Unit 4: Speed Drills ───
      {
        id: 'd5u4',
        title: 'Speed Drills',
        description:
          'Timed speed rounds across all four topic areas to build exam-day fluency.',
        testId: 'test-d5u4',
        timeMinutes: 60,
        subunits: [
          {
            id: 'd5u4s1',
            title: 'Logic Speed Round',
            description:
              'Rapid-fire logic questions: connectives, truth values, equivalences.',
            contentId: 'd5u4s1',
            drillIds: ['drill-d5u4s1'],
            timeMinutes: 15,
          },
          {
            id: 'd5u4s2',
            title: 'Numbers Speed Round',
            description:
              "Rapid-fire base conversions, two's complement, and modular arithmetic.",
            contentId: 'd5u4s2',
            drillIds: ['drill-d5u4s2'],
            timeMinutes: 15,
          },
          {
            id: 'd5u4s3',
            title: 'Sets Speed Round',
            description:
              'Rapid-fire set operations, power set sizes, and membership questions.',
            contentId: 'd5u4s3',
            drillIds: ['drill-d5u4s3'],
            timeMinutes: 15,
          },
          {
            id: 'd5u4s4',
            title: 'Counting Speed Round',
            description:
              'Rapid-fire P vs C decisions, factorial computations, and counting with constraints.',
            contentId: 'd5u4s4',
            drillIds: ['drill-d5u4s4'],
            timeMinutes: 15,
          },
        ],
      },
    ],
  },
];
