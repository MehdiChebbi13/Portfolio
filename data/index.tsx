export const navItems = [
  { name: "Acceuil", link: "#about" },
  { name: "Projets", link: "#project" },
  { name: "Contact", link: "#contact" },
];
export const cards = [
  {
    id: 1,
    title: "Dépôt de chèques en ligne",
    description: "Stage Abshore",
    src: "https://utfs.io/f/TWbmQ35jWAGYgbjBS9xMm9YNyptv1VxOlT0wkqhLzZbausgn",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/dock.svg"],
    content: () => {
      return (
        <p>
          • D&eacute;veloppement d&apos;une application mobile innovante
          appel&eacute;e D&eacute;p&ocirc;t de ch&egrave;ques en ligne lors de
          mon stage, utilisant des technologies d&apos;intelligence artificielle
          pour am&eacute;liorer la rapidit&eacute;, la pr&eacute;cision et
          l&apos;accessibilit&eacute; du processus de d&eacute;p&ocirc;t de
          ch&egrave;ques. <br />
          • R&eacute;alisation de la conception UML, de la cr&eacute;ation des
          maquettes avec Figma, et du d&eacute;veloppement front-end de
          l&apos;application en utilisant TypeScript et les biblioth&egrave;ques
          React. <br />
          • Dockerisation du projet pour assurer une gestion efficace des
          d&eacute;ploiements, garantissant un environnement stable et
          reproductible.
          <br />• Conformit&eacute; rigoureuse au cahier des charges fourni,
          apprenant &agrave; g&eacute;rer et organiser mes t&acirc;ches de
          mani&egrave;re structur&eacute;e dans un environnement de travail
          professionnel. <br />• Ma&icirc;trise de TypeScript et React,
          d&eacute;veloppement de comp&eacute;tences en gestion de projet et en
          d&eacute;ploiement d&apos;applications conteneuris&eacute;es.
        </p>
      );
    },
  },
  {
    id: 2,
    title: "GetBluffed - Jeu de cartes multijoueur temps reel",
    description: "Projet Personnel | 2026 - Present",
    src: "/bg.png",
    iconLists: ["/ts.svg", "/re.svg", "/node.svg", "/dock.svg", "/sql.svg"],
    content: () => {
      return (
        <p>
          • Développement d&apos;un jeu de cartes multijoueur en temps réel
          supportant de 3 à 6 joueurs, avec synchronisation instantanée de
          l&apos;état du jeu. <br />
          • Mise en place d&apos;une architecture server-authoritative avec
          Node.js, Express et WebSockets pour garantir la cohérence du jeu et
          prévenir les manipulations côté client. <br />
          • Conception du backend en TypeScript et modélisation du moteur de jeu
          à l&apos;aide d&apos;une machine d&apos;état pour gérer les tours, les
          actions et les résolutions de bluff. <br />• Structuration du projet
          pour assurer une logique de jeu fiable, une bonne maintenabilité du
          code et une expérience multijoueur fluide.
        </p>
      );
    },
  },
  {
    id: 3,
    title: "Kyonokibo - Plateforme d'accompagnement pour patients Alzheimer",
    description: "Projet Full-Stack | 2026 - Present",
    src: "/bg.png",
    iconLists: ["/ang.svg", "/spr.svg", "/ts.svg", "/sql.png", "/dock.svg"],
    content: () => {
      return (
        <p>
          - Developpement d&apos;une application web Full-Stack Angular / Spring
          Boot dediee au suivi des patients Alzheimer et a la coordination entre
          patients, aidants et professionnels de sante. <br />- Implementation
          d&apos;un frontend Angular accessible permettant la consultation du
          planning quotidien et la realisation de quiz de stimulation cognitive,
          notamment autour de la reconnaissance faciale. <br />- Conception
          d&apos;un backend Spring Boot exposant des API REST pour la gestion
          des rendez-vous, des prises de medicaments et le suivi des progres des
          patients.
        </p>
      );
    },
  },
  {
    id: 4,
    title: "hemodia - Plateforme de gestion des operations d'hemodialyse",
    description: "Projet Full-Stack",
    src: "/bg.png",
    iconLists: ["/re.svg", "/spr.svg", "/ts.svg", "/sql.png", "/dock.svg"],
    content: () => {
      return (
        <p>
          - Conception et developpement d&apos;une plateforme web centralisee
          pour la gestion des operations d&apos;hemodialyse dans les hopitaux
          publics, avec numerisation des dossiers patients et des flux de soins
          critiques. <br />- Developpement d&apos;une solution Full-Stack Spring
          Boot / React integrant des modules de suivi patients, de planification
          medicale et de transferts inter-hospitaliers. <br />- Mise en place
          d&apos;une infrastructure conteneurisee avec Docker et traduction des
          exigences medicales en specifications techniques garantissant
          l&apos;integrite et la fiabilite des donnees.
        </p>
      );
    },
  },
  /* {
    id: 4,
    title: "8 Puzzle Solving Algorithm",
    description: "Projet Personnel",
    src: "/p4.svg",
    iconLists: ["/py.svg"],
    content: () => {
      return (
        <p>
          • D&eacute;veloppement d&apos;un algorithme de r&eacute;solution du
          jeu de puzzle 8, en utilisant diverses techniques de recherche,
          notamment A* et le hill climbing. <br />
          • Cr&eacute;ation de l&apos;interface en utilisant Next.js et
          TypeScript pour une exp&eacute;rience utilisateur engageante et
          interactive. <br />
          • Impl&eacute;mentation de la biblioth&egrave;que Three.js pour
          ajouter des &eacute;l&eacute;ments 3D, enrichissant
          l&apos;exp&eacute;rience visuelle du jeu. <br />
          • Utilisation de GSAP pour les animations, rendant le jeu plus
          dynamique et captivant. <br />• Conception orient&eacute;e
          performance, avec une optimisation des algorithmes pour des temps de
          calcul rapides, assurant une r&eacute;solution fluide des puzzles pour
          les utilisateurs.
        </p>
      );
    },
  }, */
];
