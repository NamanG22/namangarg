export interface ExperienceItem {
  id: number;
  title: string;
  position: string;
  duration: string;
  description: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "DTU Supermileage Team",
    position: "Team Member",
    duration: "MARCH 2022 - JANUARY 2023",
    description: [
      "Contributed to the development of supermileage vehicles, reducing carbon emissions by 15% through the use of next-generation fuels and advanced safety features.",
      "Competed at the international level, improving vehicle fuel efficiency by 25% and achieving speeds 10% faster than previous models."
    ],
  },
  {
    id: 2,
    title: "Mathematics Teacher",
    position: "Teacher",
    duration: "OCTOBER 2022 - FEBRUARY 2024",
    description: [
      "Mentored students in mathematics, improving their understanding of the subject and their ability to apply it to real-world problems.",
      "Developed a curriculum that was tailored to the needs of the students, ensuring that they were able to understand the material and apply it to their own work."
    ],
  },
  {
    id: 3,
    title: "Placewit",
    position: "Student Outreach Consultant",
    duration: "SEPTEMBER 2023 - MARCH 2024",
    description: [
      "Led brainstorming sessions to generate innovative strategies, resulting in actionable plans that improved placement success rates by 15%."
    ],
  },
  {
    id: 4,
    title: "Mediawave Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "JULY 2024 - AUGUST 2024",
    description: [
      "Collaborated with a team of 5 to develop backend systems using Spring Boot and Firebase, improving data retrieval efficiency by 30% and reducing response time by 25%.",
      "Designed and documented a set of many RESTful APIs that improved efficiency and reduced the need for manual data entry by 40%, allowing focus on higher-value tasks.",
      "Contributed to the successful deployment, version control and monitoring of backend services in a production environment."
    ],
  },
  {
    id: 5,
    title: "SanteSYS - A DTU Startup",
    position: "Technical Lead",
    duration: "NOVEMBER 2024",
    description: [
      "Worked on building a healthcare-focused platform to improve digital accessibility and preventive care.",
      "Santesys aimed to simplify patient engagement and streamline health services for clinics and hospitals."
    ],
  },
  {
    id: 6,
    title: "Paytm",
    position: "AI Intern",
    duration: "JANUARY 2025 - PRESENT",
    description: [
      "Developed and optimised an AI-based chatbot using FastAPI, handling real-time speech-to-text conversion with just 5-10% latency and text evaluation pipelines.",
      "Designed and implemented context-fetching mechanisms by integrating embeddings with the Gemini-1.5-Flash model, delivering accurate and context-aware responses.",
      "Built evaluation pipelines using DeepEval to evaluate LLM generated responses and expected response with over 14 different metrics, also implemented this feature for real time for almost 90% accuracy."
    ],
  },
  {
    id: 7,
    title: "Locallie - Startup",
    position: "Founder",
    duration: "MARCH 2025",
    description: [
      "Initiated a hyperlocal marketplace concept to empower local kirana stores by bringing them online.",
      "The platform focused on enabling fast neighborhood deliveries, premium product listings, and credit support to compete with rapid delivery services."
    ],
  }
];