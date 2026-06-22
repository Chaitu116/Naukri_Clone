import {
  Code2,
  TrendingUp,
  Briefcase,
  PenTool,
  Database,
  Users,
  HeartPulse,
  Banknote,
  Megaphone,
  Headphones,
} from "lucide-react";

/**
 * Popular job categories. `icon` is a lucide-react component reference,
 * rendered by the consuming component.
 */
export const categories = [
  { id: 1, name: "Software & IT", openings: "32.5k+", icon: Code2 },
  { id: 2, name: "Sales", openings: "18.2k+", icon: TrendingUp },
  { id: 3, name: "Marketing", openings: "12.8k+", icon: Megaphone },
  { id: 4, name: "Design & UX", openings: "7.4k+", icon: PenTool },
  { id: 5, name: "Data Science", openings: "9.1k+", icon: Database },
  { id: 6, name: "Human Resources", openings: "6.3k+", icon: Users },
  { id: 7, name: "Healthcare", openings: "11.6k+", icon: HeartPulse },
  { id: 8, name: "Finance", openings: "14.0k+", icon: Banknote },
  { id: 9, name: "Operations", openings: "8.7k+", icon: Briefcase },
  { id: 10, name: "Customer Support", openings: "10.2k+", icon: Headphones },
];

/** Quick-filter chips shown under the hero search bar. */
export const trendingSearches = [
  "Remote",
  "MNC",
  "Fresher",
  "Work from home",
  "React Developer",
  "Data Analyst",
  "Part time",
  "Internship",
];
