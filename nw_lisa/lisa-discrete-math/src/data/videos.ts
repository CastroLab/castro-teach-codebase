// Lisa's Discrete Math — Curated YouTube Video Links
// Only real, known-good video IDs from established educational channels

export interface VideoLink {
  id: string;
  title: string;
  channel: string;
  url: string;
  timestamp?: number; // seconds into the video
  topic: string;
}

export const videos: VideoLink[] = [
  // ═══════════════════════════════════════════════════════════
  // PROPOSITIONAL LOGIC
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-logic-intro',
    title: 'Propositional Logic — Introduction',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=itrXYg41-V0',
    topic: 'propositional-logic',
  },
  {
    id: 'vid-truth-tables',
    title: 'Truth Tables — Discrete Math',
    channel: 'Kimberly Brehm',
    url: 'https://www.youtube.com/watch?v=O0KbymjE7xU',
    topic: 'truth-tables',
  },
  {
    id: 'vid-logical-connectives',
    title: 'Logical Connectives (AND, OR, NOT, XOR)',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=itrXYg41-V0',
    timestamp: 180,
    topic: 'propositional-logic',
  },
  {
    id: 'vid-demorgans',
    title: "De Morgan's Laws — Discrete Math",
    channel: 'Kimberly Brehm',
    url: 'https://www.youtube.com/watch?v=yABjo4wFy0A',
    topic: 'de-morgans-laws',
  },
  {
    id: 'vid-conditionals',
    title: 'Conditionals and Biconditionals',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=5pRhDBsFdB0',
    topic: 'conditionals',
  },
  {
    id: 'vid-contrapositive',
    title: 'Converse, Inverse, Contrapositive',
    channel: 'Kimberly Brehm',
    url: 'https://www.youtube.com/watch?v=gFg_BGOD6mQ',
    topic: 'conditionals',
  },
  {
    id: 'vid-logical-equivalences',
    title: 'Logical Equivalences — Proving with Laws',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=tKnS3s8fOu4',
    topic: 'logical-equivalence',
  },

  // ═══════════════════════════════════════════════════════════
  // QUANTIFIERS & PREDICATES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-predicates-quantifiers',
    title: 'Predicates and Quantifiers',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=GjJByyWpUeo',
    topic: 'quantifiers',
  },
  {
    id: 'vid-nested-quantifiers',
    title: 'Nested Quantifiers',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=ILVGK-y_OXM',
    topic: 'quantifiers',
  },

  // ═══════════════════════════════════════════════════════════
  // BINARY & NUMBER SYSTEMS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-binary-3b1b',
    title: 'Binary, Hanoi, and Sierpinski — 3Blue1Brown',
    channel: '3Blue1Brown',
    url: 'https://www.youtube.com/watch?v=wTJI_WuZSwE',
    topic: 'binary-numbers',
  },
  {
    id: 'vid-binary-conversions',
    title: 'Binary to Decimal and Back',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=H4BstqvgBow',
    topic: 'binary-numbers',
  },
  {
    id: 'vid-hexadecimal',
    title: 'Hexadecimal Number System',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=4EJay-6Bioo',
    topic: 'hexadecimal',
  },
  {
    id: 'vid-twos-complement',
    title: "Two's Complement",
    channel: 'Ben Eater',
    url: 'https://www.youtube.com/watch?v=4qH4unVtJkE',
    topic: 'twos-complement',
  },
  {
    id: 'vid-modular-arithmetic',
    title: 'What is Modular Arithmetic — Intro to Modular Arithmetic',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=W1SY6qKZrUk',
    topic: 'modular-arithmetic',
  },

  // ═══════════════════════════════════════════════════════════
  // BOOLEAN CIRCUITS & LOGIC GATES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-logic-gates',
    title: 'Logic Gates — Making Logic with Transistors',
    channel: 'Ben Eater',
    url: 'https://www.youtube.com/watch?v=sTu3LwpF6XI',
    topic: 'boolean-circuits',
  },
  {
    id: 'vid-nand-gates',
    title: 'SR Latch — Building from NAND Gates',
    channel: 'Ben Eater',
    url: 'https://www.youtube.com/watch?v=KM0DdEaY5sY',
    topic: 'nand-gates',
  },
  {
    id: 'vid-boolean-logic-cc',
    title: 'Boolean Logic & Logic Gates — Crash Course Computer Science #3',
    channel: 'Crash Course',
    url: 'https://www.youtube.com/watch?v=gI-qXk7XojA',
    topic: 'boolean-circuits',
  },

  // ═══════════════════════════════════════════════════════════
  // SET THEORY
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-sets-intro',
    title: 'Introduction to Sets — Discrete Math',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=tyDKR4FG3Yw',
    topic: 'set-theory',
  },
  {
    id: 'vid-set-operations',
    title: 'Set Operations (Union, Intersection, Complement)',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=2B4EBvVvf9w',
    topic: 'set-operations',
  },
  {
    id: 'vid-power-sets',
    title: 'Power Sets',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=OkmfBUuQHKU',
    topic: 'power-sets',
  },
  {
    id: 'vid-inclusion-exclusion',
    title: 'Inclusion-Exclusion Principle',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=UwUbIeH24ws',
    topic: 'inclusion-exclusion',
  },

  // ═══════════════════════════════════════════════════════════
  // COUNTING: PERMUTATIONS & COMBINATIONS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-permutations',
    title: 'Permutations',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=XqQTXW7XfYA',
    topic: 'permutations',
  },
  {
    id: 'vid-combinations',
    title: 'Combinations',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=iKy-d5_erhI',
    topic: 'combinations',
  },
  {
    id: 'vid-counting-principles',
    title: 'Counting with the Multiplication Principle',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=0NAASclUm4k',
    topic: 'counting',
  },
  {
    id: 'vid-pascals-triangle',
    title: "Pascal's Triangle",
    channel: 'Numberphile',
    url: 'https://www.youtube.com/watch?v=0iMtlus-afo',
    topic: 'pascals-triangle',
  },
  {
    id: 'vid-pigeonhole',
    title: 'The Pigeonhole Principle',
    channel: 'Numberphile',
    url: 'https://www.youtube.com/watch?v=pFv6QOKbFoY',
    topic: 'pigeonhole-principle',
  },
  {
    id: 'vid-stars-bars',
    title: 'Stars and Bars (Counting)',
    channel: 'TrevTutor',
    url: 'https://www.youtube.com/watch?v=UTCScjoPymA',
    topic: 'stars-and-bars',
  },

  // ═══════════════════════════════════════════════════════════
  // NUMBER THEORY
  // ═══════════════════════════════════════════════════════════
  {
    id: 'vid-divisibility-primes',
    title: 'Divisibility and Primes',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=mIStB5X4U8M',
    topic: 'number-theory',
  },
  {
    id: 'vid-euclidean-algorithm',
    title: 'Euclidean Algorithm — Finding the GCD',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=p5gn2hj51hs',
    topic: 'euclidean-algorithm',
  },
  {
    id: 'vid-prime-factorization',
    title: 'Prime Factorization',
    channel: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=ZKFnHAVMb30',
    topic: 'number-theory',
  },
];

/** Look up videos by topic keyword */
export function getVideosByTopic(topic: string): VideoLink[] {
  return videos.filter((v) => v.topic === topic);
}

/** Look up a single video by its ID */
export function getVideoById(id: string): VideoLink | undefined {
  return videos.find((v) => v.id === id);
}
