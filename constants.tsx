
import { Experience, ShortStory, Illustration, Stat, SkillTree } from './types';

export const EXPERIENCES: Experience[] = [
  {
    title: "AI Data Annotator",
    company: "Transsion Indonesia",
    period: "Nov 2025 - Present",
    description: "Leading technology company behind TECNO, itel, and Infinix.",
    details: [
      "Collected and recorded high-quality Indonesian speech data.",
      "Labeled, reviewed, and validated audio datasets.",
      "Performed linguistic checks on transcriptions."
    ]
  },
  {
    title: "MTPE Subtitle Translator",
    company: "Deluxe",
    period: "Jun 2025 - Present",
    description: "Global media services provider for cinema, streaming, and mobile.",
    details: [
      "Performed Machine Translation Post-Editing (MTPE).",
      "Conducted linguistic QA to refine terminology.",
      "Delivered high-quality subtitles under tight turnarounds."
    ]
  },
  {
    title: "Subtitle Editor",
    company: "Iyuno Media Group",
    period: "Dec 2018 - Feb 2025",
    description: "Technology-driven media localization for film, TV, and games.",
    details: [
      "Edited and QA-checked subtitles (SDH & non-SDH).",
      "Performed MTPE for context, tone, and correctness.",
      "Identified recurring MT issues and applied corrective patterns."
    ]
  }
];

export const STORIES: ShortStory[] = [
  {
    id: 1,
    title: "The Whispering Petals",
    coverColor: "#E2DFFD", // Soft Lilac
    content: "Once in a digital garden, the flowers didn't just bloom; they sang. Each petal held a memory of a language long forgotten. Maulida, the guardian of strings, collected these whispers to train the great wind of AI..."
  },
  {
    id: 2,
    title: "Code and Canvas",
    coverColor: "#FFE1E9", // Soft Rose
    content: "In a world made of pixels, a linguist found that words were merely brushes. She painted subtitles across the sky, ensuring every star understood the story of the moon."
  },
  {
    id: 3,
    title: "The Binary Blossom",
    coverColor: "#E8F0E3", // Soft Mint/Sage
    content: "A single seed of logic was planted in a field of creativity. As it grew, it didn't just produce fruit, it produced meaning. This is the journey of a creative technologist."
  }
];

export const ILLUSTRATIONS: Illustration[] = [
  { id: 1, url: "https://picsum.photos/seed/maulida1/400/400", title: "Dreamscape" },
  { id: 2, url: "https://picsum.photos/seed/maulida2/400/400", title: "Pixel Garden" },
  { id: 3, url: "https://picsum.photos/seed/maulida3/400/400", title: "Linguistic Soul" },
  { id: 4, url: "https://picsum.photos/seed/maulida4/400/400", title: "Cyber Petals" },
];

export const SKILL_TREES: SkillTree[] = [
  {
    id: 1,
    color: "#E2DFFD",
    accent: "#8B93B8",
    emoji: "🟦",
    title: "LOCALIZATION & SUBTITLING",
    subtitle: "MAIN TREE – MASTERED",
    stars: "⭐⭐⭐⭐⭐",
    level: "Lv. 60",
    tier: "Capstone Tier",
    tiers: [
      { name: "Tier 1 – Foundation", status: "Unlocked", skills: ["Subtitle Translation (EN–ID)", "Timing & Spotting", "Reading Speed Control", "Style Guide Compliance"] },
      { name: "Tier 2 – Professional", status: "Unlocked", skills: ["Platform-Specific Guidelines (Broadcast / OTT)", "Linguistic QA", "Terminology Control", "Metadata Handling"] },
      { name: "Tier 3 – Editorial Authority", status: "Unlocked", skills: ["Subtitle Editing (SDH & non-SDH)", "Consistency Enforcement", "Error Pattern Recognition", "Redelivery Risk Reduction"] },
      { name: "Tier 4 – Advanced Operations", status: "Unlocked", skills: ["MTPE (Subtitle & Media)", "MT Error Diagnosis", "Corrective Pattern Application", "Workflow Optimization"] },
      { name: "Tier 5 – Capstone (Passive)", status: "Unlocked", skills: ["“Narrative Alignment”", "Automatically preserves meaning, tone, and story flow under constraints."] }
    ]
  },
  {
    id: 2,
    color: "#E8F0E3",
    accent: "#9BB096",
    emoji: "🟩",
    title: "AI DATA & EVALUATION",
    subtitle: "ADVANCED–MID",
    stars: "⭐⭐⭐☆",
    level: "Lv. 35–40",
    tier: "Elite Tier",
    tiers: [
      { 
        name: "Tier 1 – Data Foundations", 
        status: "Unlocked", 
        skills: ["Data Annotation (Speech & Text)", "Transcription Validation", "Guideline-Based Labeling"] 
      },
      { 
        name: "Tier 2 – Quality Control", 
        status: "Unlocked", 
        skills: ["Linguistic Data Review", "Naturalness & Context Checks", "Anomaly Detection"] 
      },
      { 
        name: "Tier 3 – Alignment Thinking", 
        status: "WIP", 
        skills: ["Human-in-the-loop Judgment", "Context & Intent Evaluation", "Bias & Output Sensitivity"] 
      },
      { 
        name: "Tier 4 – Model Feedback", 
        status: "Locked", 
        skills: ["Error Taxonomy for Models", "Evaluation Reports", "Dataset Improvement Loops", "Unlocks at Lv. 45"] 
      }
    ]
  },
  {
    id: 3,
    color: "#FFF9F2",
    accent: "#C69C6D",
    emoji: "🟨",
    title: "CREATIVE SYSTEMS",
    subtitle: "SUPPORT TREE – STRONG",
    stars: "⭐⭐⭐⭐",
    level: "Lv. 45",
    tier: "High-Rank Tier",
    tiers: [
      { 
        name: "Tier 1 – Visual Expression", 
        status: "Unlocked", 
        skills: ["Illustration (Digital & Traditional)", "Visual Thinking", "Symbolic Representation"] 
      },
      { 
        name: "Tier 2 – Narrative Craft", 
        status: "Unlocked", 
        skills: ["Storytelling", "Poetry & Short Prose", "Emotional Pacing"] 
      },
      { 
        name: "Tier 3 – UX / Narrative Design (Hybrid)", 
        status: "WIP", 
        skills: ["User-Centered Thinking", "Content Flow Awareness", "Early UI/UX Concepts"] 
      }
    ]
  },
  {
    id: 4,
    color: "#FFE1E9",
    accent: "#D6A2AD",
    emoji: "🟥",
    title: "PROGRAMMING & TECH",
    subtitle: "NEWLY UNLOCKED",
    stars: "⭐",
    level: "Lv. 8–10",
    tier: "Apprentice Tier",
    tiers: [
      { 
        name: "Tier 1 – Conceptual Literacy", 
        status: "Unlocked (Theory)", 
        skills: ["HTML (structure)", "CSS (visual logic)", "JavaScript (basic concepts)", "Python Basics (basic concepts)", "GitHub awareness"] 
      },
      { 
        name: "Tier 2 – Practical Execution", 
        status: "Locked (Hands-on required)", 
        skills: ["Text Processing", "Simple Automation"] 
      }
    ]
  },
  {
    id: 5,
    color: "#F0F0F7",
    accent: "#9EA2C1",
    emoji: "🟪",
    title: "LANGUAGE & CULTURE",
    subtitle: "PASSIVE – INNATE",
    stars: "⭐⭐⭐⭐⭐",
    level: "MAX",
    tier: "Legendary Tier",
    tiers: [
      { 
        name: "1. Contextual Intuition (🟣)", 
        status: "Unlocked", 
        skills: ["Rarity: Legendary", "Instantly senses implied meaning, sarcasm, emotional subtext", "Reduces misinterpretation errors in ambiguous dialogue", "Strong against irony, understatement, and indirect speech"] 
      },
      { 
        name: "2. Cultural Signal Detection (🟪)", 
        status: "Unlocked", 
        skills: ["Rarity: Epic", "Detects culturally loaded phrases, taboos, and references", "Triggers adaptation instead of literal translation", "Prevents tone-deaf or socially misaligned output"] 
      },
      { 
        name: "3. Register & Tone Awareness (🟦)", 
        status: "Unlocked", 
        skills: ["Rarity: Rare", "Automatically matches formality, intimacy, and social distance", "Smooth transitions between casual, neutral, and formal registers", "Improves naturalness across genres"] 
      },
      { 
        name: "4. Audience Empathy (🟦)", 
        status: "Unlocked", 
        skills: ["Rarity: Rare", "Prioritizes viewer comprehension over linguistic purity", "Improves readability and emotional reception", "Boosts accessibility and inclusivity outcomes"] 
      },
      { 
        name: "5. Narrative Cohesion Sense (🟩)", 
        status: "Unlocked", 
        skills: ["Rarity: Uncommon", "Maintains story flow across scenes and episodes", "Prevents tonal drift in long-form content", "Supports consistency in episodic projects"] 
      },
      { 
        name: "6. Implicit Meaning Preservation (🟢)", 
        status: "Unlocked", 
        skills: ["Rarity: Common", "Retains intent when text must be condensed", "Minimizes loss during shortening or rephrasing", "Stabilizes subtitle readability under constraints"] 
      }
    ]
  }
];

export const STATS: Stat[] = [
  { 
    label: "Intelligence", 
    value: 98, 
    short: "INT", 
    description: "Mastery of source/target languages, semantic analysis, idiom translation, and industry standards." 
  },
  { 
    label: "Wisdom", 
    value: 90, 
    short: "WIS", 
    description: "Cultural sensitivity, pragmatic adaptation, and maintaining consistent style and tone across genres." 
  },
  { 
    label: "Dexterity", 
    value: 88, 
    short: "DEX", 
    description: "High typing speed, precise subtitle timing (spotting), and fluid navigation of localization software." 
  },
  { 
    label: "Perception", 
    value: 96, 
    short: "PER", 
    description: "Exceptional detection of typos and timing errors, plus a keen eye for visual cues and expressions." 
  },
  { 
    label: "Constitution", 
    value: 82, 
    short: "CON", 
    description: "High stamina for long shifts and the ability to maintain consistent quality under tight deadlines." 
  },
  { 
    label: "Charisma", 
    value: 65, 
    short: "CHA", 
    description: "Collaborating with editors/QA, adapting to client needs, and communicating feedback effectively." 
  },
  { 
    label: "Luck", 
    value: 15, 
    short: "LCK", 
    description: "Dealing with sudden deadline shifts, poor audio quality, and overlapping dialogue challenges." 
  },
];
