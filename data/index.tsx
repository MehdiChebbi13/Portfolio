export const navItems = [
  { name: "Acceuil", link: "#about" },
  { name: "Projets", link: "#project" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const githubProfilePlaceholder = "https://github.com/MehdiChebbi13";

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  src: string;
  iconLists: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "depot-de-cheques-en-ligne",
    title: "Depot de cheques en ligne",
    description: "Stage Abshore",
    summary:
      "Cette plateforme simplifie le depot de cheques a distance grace a une interface claire et un workflow securise. L'application couvre la soumission, la verification automatique, puis le suivi de l'etat du cheque jusqu'a la validation.",
    highlights: [
      "Workflow de verification automatisee",
      "Suivi d'etat du cheque en temps reel",
      "Interface orientee performance et experience utilisateur",
    ],
    technologies: [
      "React",
      "Tailwind",
      "TypeScript",
      "Framer Motion",
      "Docker",
    ],
    githubUrl: githubProfilePlaceholder,
    src: "https://utfs.io/f/TWbmQ35jWAGYgbjBS9xMm9YNyptv1VxOlT0wkqhLzZbausgn",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/dock.svg"],
  },
  {
    id: 2,
    slug: "getbluffed",
    title: "GetBluffed",
    description: "Projet Personnel | 2026 - Present",
    summary:
      "GetBluffed est un jeu de cartes multijoueur en temps reel concu pour 3 a 6 joueurs. L'architecture server-authoritative garantit une synchronisation instantanee de l'etat du jeu et une resolution fiable des actions de bluff.",
    highlights: [
      "Parties multijoueur temps reel pour 3 a 6 joueurs",
      "Architecture server-authoritative via WebSockets",
      "Moteur de jeu TypeScript base sur une machine d'etat",
    ],
    technologies: ["Node.js", "Express", "WebSockets", "TypeScript", "React"],
    githubUrl: githubProfilePlaceholder,
    src: "https://sgw66jnpmt.ufs.sh/f/TWbmQ35jWAGY20nvi7XtcfnvFj3b4YgsM2QX1zilxSrTBpo0",
    iconLists: ["/ts.svg", "/re.svg", "/sql.png", "/tail.svg"],
  },
  {
    id: 3,
    slug: "kyonokibo",
    title: "Kyonokibo",
    description: "Projet de fin d'année | 2026 - Present",
    summary:
      "Kyonokibo est une plateforme d'accompagnement pour patients Alzheimer qui facilite la coordination entre patients, aidants et professionnels de sante. L'application centralise le planning quotidien, les quiz de stimulation cognitive et le suivi medical.",
    highlights: [
      "Frontend Angular accessible et adapte aux usages quotidiens",
      "API REST Spring Boot pour rendez-vous, medicaments et suivi",
      "Coordination fluide entre patients, aidants et soignants",
    ],
    technologies: ["Angular", "Spring Boot", "TypeScript", "SQL"],
    githubUrl: githubProfilePlaceholder,
    src: "https://sgw66jnpmt.ufs.sh/f/TWbmQ35jWAGY4Of4iZEBjMVz3vadTeSDCYgQALHtmcxGZqkO",
    iconLists: ["/ang.svg", "/spr.svg", "/ts.svg", "/sql.png"],
  },
  {
    id: 4,
    slug: "Hemodia",
    title: "Hemodia",
    description: "Projet de fin d'étude | Fev - Juin 2025",
    summary:
      "Hemodia centralise la gestion des operations d'hemodialyse dans les hopitaux publics en numerisant les dossiers patients et les flux de soins critiques. La plateforme couvre le suivi patient, la planification medicale et les transferts inter-hospitaliers.",
    highlights: [
      "Numerisation des dossiers patients et des flux critiques",
      "Modules de suivi, planification medicale et transferts",
      "Infrastructure Docker et forte fiabilite des donnees",
    ],
    technologies: ["React", "Spring Boot", "TypeScript", "SQL", "Docker"],
    githubUrl: githubProfilePlaceholder,
    src: "https://sgw66jnpmt.ufs.sh/f/TWbmQ35jWAGYZ8WN0ZdPO875xsAuiv4Jb3eEtn1GowpVaMBm",
    iconLists: [
      "/re.svg",
      "/spr.svg",
      "/ts.svg",
      "/tail.svg",
      "/sql.png",
      "/dock.svg",
    ],
  },
];

export const cards = projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
