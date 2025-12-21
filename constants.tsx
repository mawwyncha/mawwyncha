
import { Experience, ShortStory, Illustration, Stat, SkillTree, Education, Achievement, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    title: "AI DATA ANNOTATOR",
    company: "Transsion Indonesia",
    period: "Nov 2025 - Present",
    description: "In-House at Transsion Group, behind TECNO, itel, and Infinix.",
    details: [
      "Collected and recorded high-quality Indonesian speech data following strict technical and acoustic guidelines.",
      "Labeled, reviewed, and validated audio datasets to ensure accuracy, clarity, and consistency.",
      "Performed linguistic checks on transcriptions and annotations to maintain naturalness and contextual correctness.",
      "Identified audio or annotation issues and flagged anomalies to improve dataset quality.",
      "Collaborated with project leads to meet daily/weekly delivery targets."
    ]
  },
  {
    title: "MTPE SUBTITLE TRANSLATOR",
    company: "Deluxe",
    period: "Jun 2025 - Present",
    description: "World's leading media services provider for global content creators.",
    details: [
      "Performed MTPE for subtitle content, ensuring natural fluency and contextual accuracy.",
      "Conducted linguistic QA to refine terminology and semantic correctness across diverse genres.",
      "Delivered high-quality subtitles under tight turnarounds while adhering to platform-specific standards."
    ]
  },
  {
    title: "SUBTITLE EDITOR",
    company: "Iyuno Media Group",
    period: "Dec 2018 - Feb 2025",
    description: "Global provider of technology-driven media localization.",
    details: [
      "Edited and QA-checked subtitles (SDH & non-SDH) and online comic content for accuracy and fluency.",
      "Evaluated machine-generated outputs for context, tone, and semantic correctness.",
      "Identified recurring MT issues and applied corrective patterns to improve efficiency.",
      "Collaborated with PM and QC to maintain workflow quality and achieved low redelivery rates.",
      "Handled metadata translation, timing adjustments, and shot-change detection."
    ]
  },
  {
    title: "SUBTITLE TRANSLATOR",
    company: "PT. MNC Sky Vision Tbk",
    period: "Feb 2016 - Aug 2018",
    description: "Indonesia’s pioneer in satellite pay-TV broadcasting.",
    details: [
      "Translated English subtitles into natural and context-accurate Indonesian following channel style guides.",
      "Inserted and adjusted timestamps to ensure precise subtitle synchronization across different platforms.",
      "Performed linguistic QA to refine terminology, clarity, and overall subtitle readability."
    ]
  },
  {
    title: "Document Translator",
    company: "Dawan Central Group",
    period: "Oct 2014 - Jan 2016",
    description: "Providing professional translation and documentation services.",
    details: [
      "Translate documents accurately while preserving meaning and tone.",
      "Ensure consistency in terminology and style.",
      "Proofread and revise translations for clarity and quality."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Universitas Gunadarma",
    degree: "Bachelor of Arts - English Literature",
    period: "Oct 2010 - Jan 2014",
    gpa: "GPA 3.09"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "TOEFL Prediction", 
    issuer: "ESQ English Course", 
    year: "Oct 2023 - Oct 2024" 
  },
  { 
    name: "Typing Speed - Indonesia", 
    issuer: "Typeracer.com", 
    year: "Feb 2025 - Current" 
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { date: "Nov 2012", title: "Create a hobby club", description: "Manage gathering place for Japanese pop culture lovers" },
  { date: "Sep 2013", title: "Research Report", description: "Title: The Analysis of English Polysemous Words" },
  { date: "Jan 2014", title: "Theater Production Staff", description: "Present 'Theater of Hysteria' with Ministry of Tourism Indonesia" },
  { date: "Sep 2014", title: "Undergraduate Thesis", description: "Segment Analysis on Mary Oliver & Walt Whitman's poetry" }
];

export const STORIES: ShortStory[] = [
  {
    id: 1,
    title: "The Whispering Petals",
    coverColor: "#E2DFFD",
    content: "Once in a digital garden, the flowers didn't just bloom; they sang. Each petal held a memory of a language long forgotten. Maulida, the guardian of strings, collected these whispers to train the great wind of AI..."
  },
  {
    id: 2,
    title: "Code and Canvas",
    coverColor: "#FFE1E9",
    content: "In a world made of pixels, a linguist found that words were merely brushes. She painted subtitles across the sky, ensuring every star understood the story of the moon."
  },
  {
    id: 3,
    title: "The Binary Blossom",
    coverColor: "#E8F0E3",
    content: "A single seed of logic was planted in a field of creativity. As it grew, it didn't just produce fruit, it produced meaning. This is the journey of a creative technologist."
  }
];

export const ILLUSTRATIONS: Illustration[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600", title: "Floral Ethereal" },
  { id: 2, url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", title: "Abstract Flow" },
  { id: 3, url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600", title: "Ink & Pixel" },
  { id: 4, url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", title: "Soft Neon" },
];

export const SKILL_TREES: SkillTree[] = [
  {
    id: 1,
    color: "#E2DFFD",
    accent: "#8B93B8",
    emoji: "💬",
    title: "SUBTITLING SOFTWARE",
    subtitle: "MAIN TREE – EXPERIENCED",
    stars: "⭐⭐⭐⭐⭐",
    level: "Lv. 60",
    tier: "Expert Tier",
    tiers: [
      { name: "Mastery Tools", status: "Unlocked", skills: ["Subtitle Edit", "Poliscript", "Imediatrans", "GTS Pro", "Aegisub", "Translator++"] },
      { name: "Media Specs", status: "Unlocked", skills: ["SDH Formatting", "Shot-change Detection", "Reading Speed Logic", "OTT/Broadcast Standards"] }
    ]
  },
  {
    id: 2,
    color: "#E8F0E3",
    accent: "#9BB096",
    emoji: "🎨",
    title: "CREATIVE & DRAWING",
    subtitle: "EXPERIENCED",
    stars: "⭐⭐⭐⭐",
    level: "Lv. 45",
    tier: "High-Rank Tier",
    tiers: [
      { name: "Illustration Tools", status: "Unlocked", skills: ["Photoshop", "IbisPaint X", "Pixel Studio", "Magicavoxel", "Corel Painter"] },
      { name: "Multimedia", status: "Unlocked", skills: ["Capcut", "Adobe Express", "Audacity", "FL Studio"] }
    ]
  },
  {
    id: 3,
    color: "#FFF9F2",
    accent: "#C69C6D",
    emoji: "💻",
    title: "DEVELOPMENT & UI",
    subtitle: "ACTIVELY LEARNING",
    stars: "⭐⭐",
    level: "Lv. 15",
    tier: "Apprentice Tier",
    tiers: [
      { name: "Platforms", status: "Unlocked", skills: ["Jagel", "Adalo", "Figma", "Miro", "Notion"] },
      { name: "Web Stack", status: "Unlocked", skills: ["HTML", "CSS", "JavaScript", "Python", "GitHub", "Tumblr/Blogger Customization"] }
    ]
  },
  {
    id: 4,
    color: "#F0F0F7",
    accent: "#9EA2C1",
    emoji: "📖",
    title: "LINGUISTIC INSTINCT",
    subtitle: "PASSIVE – INNATE",
    stars: "⭐⭐⭐⭐⭐",
    level: "MAX",
    tier: "Legendary Tier",
    tiers: [
      { name: "Passive Skills", status: "Legendary", skills: ["Cultural Signal Detection", "Implicit Meaning Preservation", "Register & Tone Sensitivity", "Narrative Cohesion Sense"] }
    ]
  }
];

export const STATS: Stat[] = [
  { label: "Intelligence", value: 98, short: "INT", description: "Mastery of source/target languages, semantic analysis, and industry standards." },
  { label: "Wisdom", value: 90, short: "WIS", description: "Cultural sensitivity, pragmatic adaptation, and maintaining consistent tone." },
  { label: "Dexterity", value: 88, short: "DEX", description: "High typing speed, precise subtitle timing, and fluid software navigation." },
  { label: "Perception", value: 96, short: "PER", description: "Exceptional detection of typos, timing errors, and visual cues." },
  { label: "Constitution", value: 82, short: "CON", description: "High stamina for long shifts and consistent quality under deadlines." },
  { label: "Charisma", value: 65, short: "CHA", description: "Collaborating with editors/QA and adapting to client needs." },
  { label: "Luck", value: 15, short: "LCK", description: "Dealing with deadline shifts and poor audio quality challenges." },
];
