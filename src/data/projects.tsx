import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandFirebase,
    IconBrandNodejs,
    IconBrandMongodb,
    IconBrandPrisma,
    IconBrandThreejs,
    IconBrandAdobePhotoshop,
    IconBrandAdobeIllustrator,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandFigma,
    IconBrandPhp,
    IconBrandMysql,
    IconDeviceGamepad,
    IconCpu,
    IconBrandCSharp,
    IconBrandPython,
    IconMovie,
} from "@tabler/icons-react";

export interface ProjectData {
    id: string;
    date: string;
    category: string;
    title: string;
    tagline: string;
    shortDescription: string;
    description: string;
    image: string;
    gallery: string[];
    video?: string; // Optional video field for motion design projects
    color: string;
    liveLink: string;
    liveLinkLabel?: string; // Custom label for liveLink button (default: "Voir le site")
    liveLinkIcon?: "globe" | "figma" | "play" | "external"; // Custom icon (default: globe)
    repoLink: string;
    repoLinkLabel?: string; // Custom label for repoLink button (default: "Code Source")
    repoLinkIcon?: "github" | "figma" | "folder" | "external"; // Custom icon (default: github)
    features: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tech: { name: string; icon: any; desc?: string }[];
    challenges: string;
    outcome: string;
}

export const projectsData: ProjectData[] = [
    // 0. Boutique Click & Collect
    {
        id: "boutique-click-collect",
        date: "2025-12",
        category: "E-commerce",
        title: "Boutique Click & Collect",
        tagline: "E-commerce Click & Collect : Identité Galeries Lafayette",
        shortDescription: "Site e-commerce complet (Front & API) reprenant l'identité visuelle des Galeries Lafayette.",
        description: "Ce projet a pour but de créer une boutique Click & Collect en adoptant l'identité visuelle des Galeries Lafayette. J'ai commencé par une analyse approfondie de leur Design System (typographie, boutons,etc...) pour concevoir sur Figma une maquette. Le site est entièrement fonctionnel : développé en HTML, JavaScript et Tailwind pour le front, il interagit avec une API REST complète que j'ai conçue en PHP/MySQL (architecture MVC) pour gérer utilisateurs, catalogue et commandes.",
        image: "/images/projets/boutique-click-collect-2.png",
        gallery: [
            "/images/projets/boutique-click-collect-1.png",
            "/images/projets/boutique-click-collect-2.png",
            "/images/projets/boutique-click-collect-3.png",
            "/images/projets/boutique-click-collect-4.png",
            "/images/projets/boutique-click-collect-5.png",
            "/images/projets/boutique-click-collect-6.png",
            "/images/projets/boutique-click-collect-7.png"
        ],
        color: "#3b82f6",
        liveLink: "https://wgader27.github.io/click-collect-ecom",
        repoLink: "https://github.com/wgader27/click-collect-ecom",
        features: [
            "Analyse Design System (Galeries Lafayette)",
            "Maquettage UI/UX (Figma)",
            "API REST Custom (PHP/MySQL)",
            "Panier & Commandes dynamiques",
            "Authentification Sécurisée",
            "Catalogue & Filtres"
        ],
        tech: [
            { name: "HTML5", icon: IconBrandHtml5, desc: "Structure Sémantique" },
            { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Styling Rapide" },
            { name: "JavaScript", icon: IconBrandJavascript, desc: "Logique Client Native" },
            { name: "PHP", icon: IconBrandPhp, desc: "API REST Backend" },
            { name: "MySQL", icon: IconBrandMysql, desc: "Base de Données" },
            { name: "Figma", icon: IconBrandFigma, desc: "Maquettage UI/UX" },
        ],
        challenges: "Le principal défi a été de concilier l'intégration stricte d'une charte graphique existante complexe (Galeries Lafayette) avec le développement technique d'une architecture Full Stack robuste (API REST PHP) sans utiliser de frameworks JS facilitant la gestion d'état.",
        outcome: "Un site e-commerce fonctionnel et esthétique, respectant fidèlement la maquette initiale et rapide à charger."
    },

    // 1. Panic Burger
    {
        id: "panic-burger",
        date: "2026-01",
        category: "Jeu & Exergaming",
        title: "Panic Burger",
        tagline: "Le jeu qui vous fait transpirer ! (2ème Prix)",
        shortDescription: "Un jeu d'exergaming interactif codé en p5.js contrôlé via Makey Makey : faites des squats pour cuisiner !",
        description: "Panic Burger est un projet d'exergaming innovant conçu pour allier sport et jeu vidéo. Le concept est simple mais intense : vous incarnez un chef cuisinier devant préparer des burgers (salade, tomate, viande...) pour des clients capricieux. La particularité ? Votre énergie (barre d'endurance) se recharge uniquement en effectuant des squats réels, détectés grâce à un contrôleur Makey Makey. Si vous n'êtes pas assez rapide, les clients s'impatientent et c'est le Game Over. Ce projet a remporté le 2ème prix de la compétition.",
        image: "/images/projets/panic-burger.png",
        gallery: [
            "/images/projets/panic-burger.png",
            "/images/projets/panic-burger-2.png",
            "/images/projets/panic-burger-3.png",
            "/images/projets/panic-burger-4.png"
        ],
        color: "#ef4444",
        liveLink: "https://wgader.github.io/NUIT-MMI/",
        repoLink: "https://github.com/wgader27/NUIT-MMI",
        features: [
            "Contrôle par le mouvement (Squats)",
            "Intégration Hardware (Makey Makey)",
            "P5.js Game Loop",
            "Design & Son Original",
            "Gestion de l'énergie & Score"
        ],
        tech: [
            { name: "p5.js", icon: IconBrandJavascript, desc: "Moteur de jeu Créatif" },
            { name: "Makey Makey", icon: IconCpu, desc: "Contrôleur Hardware" },
            { name: "Illustrator", icon: IconBrandAdobeIllustrator, desc: "Assets Graphiques" },
            { name: "Game Design", icon: IconDeviceGamepad, desc: "Mécaniques de Jeu" },
        ],
        challenges: "Le défi technique majeur était de calibrer la détection des squats via le Makey Makey pour qu'elle soit réactive sans faux positifs, tout en gérant la boucle de jeu et les animations en p5.js.",
        outcome: "2ème Prix de la compétition. Un projet ludique qui a prouvé que le code peut sortir de l'écran pour interagir avec le monde physique."
    },

    // 2. Site Streaming
    {
        id: "site-streaming",
        date: "2025-06",
        category: "Plateforme Web",
        title: "Site Streaming",
        tagline: "Plateforme VOD avec Backoffice & Double DA (Canal+)",
        shortDescription: "Un site de streaming complet avec gestion de profils, favoris, backoffice admin et deux versions : DA originale et adaptation Canal+.",
        description: "Ce projet est une plateforme de streaming complète affichant bandes-annonces et informations détaillées sur les films (synopsis, âge, etc.). Les utilisateurs peuvent créer des profils, gérer leurs favoris et rechercher des films. Le backoffice administrateur permet d'ajouter/modifier/supprimer des films, de les mettre en avant, et de gérer les utilisateurs avec des restrictions selon l'âge. J'ai réalisé deux versions du site : une avec une DA originale, et une seconde en analysant et adaptant la charte graphique de **Canal+** (typographie, boutons, couleurs, composants).",
        image: "/images/projets/site-streaming.png",
        gallery: [
            "/images/projets/site-streaming.png",
            "/images/projets/site-streaming-1.png",
            "/images/projets/site-streaming-2.png"
        ],
        color: "#10b981",
        liveLink: "https://gader-sae203.mmi-limoges.fr/",
        repoLink: "#",
        features: [
            "Catalogue Films & Bandes-Annonces",
            "Gestion de Profils & Favoris",
            "Recherche dynamique",
            "Backoffice Administrateur (CRUD)",
            "Gestion par âge & Mise en avant",
            "Double DA : Originale & Canal+"
        ],
        tech: [
            { name: "HTML/CSS", icon: IconBrandHtml5, desc: "Structure & Styling" },
            { name: "JavaScript", icon: IconBrandJavascript, desc: "Interactivité Client" },
            { name: "PHP", icon: IconBrandPhp, desc: "Backend & Logique Serveur" },
            { name: "MySQL", icon: IconBrandMysql, desc: "Base de Données" },
        ],
        challenges: "Le défi principal a été d'adapter intégralement l'interface à la charte graphique Canal+ (analyse approfondie du DS) tout en conservant la même base de code fonctionnelle pour les deux versions.",
        outcome: "Une plateforme de streaming complète démontrant mes compétences en développement Full Stack et en intégration fidèle d'une charte graphique d'entreprise."
    },

    // 3. Le Fil - Journal
    {
        id: "lefil-journal",
        date: "2025-10",
        category: "Site Web",
        title: "Le Fil",
        tagline: "Mini journal en ligne inspiré du Parisien",
        shortDescription: "Un site d'actualités au format journal, avec une mise en page éditoriale soignée et support multilingue.",
        description: "Le Fil est un mini journal en ligne inspiré de la presse traditionnelle comme Le Parisien. Le projet reproduit une mise en page éditoriale professionnelle avec une hiérarchie de l'information claire, des rubriques, des vidéos intégrées et même des espaces publicitaires pour un rendu réaliste. Le site propose également une version anglaise (partielle) pour une dimension internationale.",
        image: "/images/projets/lefil-journal.png",
        gallery: [
            "/images/projets/lefil-journal.png",
            "/images/projets/lefil-journal-1.png",
            "/images/projets/lefil-journal-2.png"
        ],
        color: "#f97316",
        liveLink: "https://lefil.netlify.app/",
        repoLink: "#",
        features: [
            "Design éditorial presse",
            "Hiérarchie de l'information",
            "Vidéos intégrées",
            "Espaces publicitaires réalistes",
            "Multilingue (FR/EN partiel)",
            "Mise en page responsive"
        ],
        tech: [
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework React" },
            { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Styling Rapide" },
            { name: "TypeScript", icon: IconBrandTypescript, desc: "Typage Robuste" },
        ],
        challenges: "Reproduire l'esthétique et la lisibilité d'un journal papier sur le web tout en conservant une expérience utilisateur moderne et responsive.",
        outcome: "Un exercice de style réussi qui démontre ma capacité à adapter des codes graphiques traditionnels au format digital."
    },

    // 4. Puissance 4
    {
        id: "puissance-4",
        date: "2024-06",
        category: "Application Desktop",
        title: "Puissance 4",
        tagline: "Jeu classique revisité avec .NET MAUI",
        shortDescription: "Un Puissance 4 complet en C#/.NET MAUI avec modes de jeu, classements et persistance des données.",
        description: "Une application desktop du célèbre jeu Puissance 4, développée en C# avec le framework .NET MAUI. Le jeu propose plusieurs modes (combat, normal, etc.), un système de classement, la persistance des joueurs et de leurs statistiques, ainsi qu'une ambiance sonore avec musique intégrée.",
        image: "/images/projets/puissance-4.png",
        gallery: [
            "/images/projets/puissance-4.png"
        ],
        color: "#c3ed3a",
        liveLink: "",
        repoLink: "https://github.com/wgader27/Puissance4",
        features: [
            "Plusieurs modes de jeu",
            "Système de classement",
            "Persistance des joueurs & stats",
            "Musique & Sons intégrés",
            "Interface fluide"
        ],
        tech: [
            { name: "C#", icon: IconBrandCSharp, desc: "Langage principal" },
            { name: ".NET MAUI", icon: IconBrandCSharp, desc: "Framework Cross-Platform" },
        ],
        challenges: "Gérer la persistance des données joueurs et statistiques tout en maintenant une interface réactive et une logique de jeu robuste pour les différents modes.",
        outcome: "Une application desktop complète qui démontre mes compétences en développement C# et en conception d'applications multi-plateformes."
    },

    // 5. Space Dodge
    {
        id: "space-dodge",
        date: "2023-06",
        category: "Jeu Python",
        title: "Space Dodge",
        tagline: "Aventure spatiale en Pygame",
        shortDescription: "Un jeu d'arcade spatial développé en Python avec Pygame : esquivez les aliens et survivez !",
        description: "Space Dodge est un jeu d'arcade spatial développé en Python avec la bibliothèque Pygame. Le joueur contrôle une fusée spatiale et doit esquiver les attaques des aliens tout en collectant des points. Chaque collision fait perdre des points de vie, et quand ils atteignent zéro, c'est le game over. Un projet ludique pour explorer le développement de jeux en Python.",
        image: "/images/projets/space-dodge.png",
        gallery: [
            "/images/projets/space-dodge.png"
        ],
        color: "#3b82f6",
        liveLink: "",
        repoLink: "https://github.com/wgader27/jeu_space_dodge",
        features: [
            "Contrôle de la fusée",
            "Système de points de vie",
            "Ennemis aléatoires",
            "Score & Game Over"
        ],
        tech: [
            { name: "Python", icon: IconBrandPython, desc: "Langage principal" },
            { name: "Pygame", icon: IconDeviceGamepad, desc: "Bibliothèque de jeu" },
        ],
        challenges: "Gérer les collisions et le spawn aléatoire des ennemis tout en maintenant un gameplay fluide et des performances stables.",
        outcome: "Un premier projet de jeu complet qui m'a permis d'appréhender les bases du game development avec Python."
    },

    // 6. Compétence MMI
    {
        id: "competence-mmi",
        date: "2026-01",
        category: "Application Web",
        title: "Compétence MMI",
        tagline: "Suivi de compétences dans un univers spatial",
        shortDescription: "Un portfolio interactif pour suivre l'acquisition des compétences MMI à travers un univers de planètes.",
        description: "Compétence MMI est une application web permettant aux étudiants de visualiser leur progression sur les 3 années du BUT MMI. L'interface représente les compétences sous forme de planètes regroupées par UE et par année. Chaque planète affiche les apprentissages critiques (AC) et change de couleur selon le niveau d'acquisition (en cours, acquis, non acquis). Le projet inclut un historique des modifications, des statistiques avec graphique radar, ainsi que la possibilité de téléverser/télécharger un fichier de sauvegarde et une persistance locale.",
        image: "/images/projets/competence-mmi.png",
        gallery: [
            "/images/projets/competence-mmi.png",
            "/images/projets/competence-mmi-1.png",
            "/images/projets/competence-mmi-2.png"
        ],
        color: "#6366f1",
        liveLink: "https://wgader27.github.io/competence-mmi/",
        repoLink: "https://github.com/wgader27/competence-mmi",
        features: [
            "Visualisation Planètes/Univers",
            "Suivi par UE & Année",
            "Niveaux d'acquisition colorés",
            "Historique des changements",
            "Graphique Radar (Stats)",
            "Import/Export & Sauvegarde locale"
        ],
        tech: [
            { name: "HTML/CSS", icon: IconBrandHtml5, desc: "Structure & Style" },
            { name: "JavaScript", icon: IconBrandJavascript, desc: "Logique & Interactivité" },
        ],
        challenges: "Concevoir une interface intuitive pour représenter visuellement un système de compétences complexe tout en gérant la persistance des données et l'historique des modifications.",
        outcome: "Un outil pratique et esthétique pour accompagner les étudiants MMI dans le suivi de leur progression tout au long de leur formation."
    },

    // 7. Githread
    {
        id: "githread",
        date: "2024-07",
        category: "Réseau Social",
        title: "Githread",
        tagline: "Réseau Social pour développeurs GitHub",
        shortDescription: "Un réseau social type Threads/Twitter lié à GitHub pour les développeurs.",
        description: "Githread est une plateforme sociale inspirée de Threads et Twitter, spécialement conçue pour les développeurs. Les utilisateurs se connectent via leur compte GitHub et peuvent publier des messages, répondre dans les commentaires et gérer leur profil. Une manière de combiner l'univers dev et le microblogging.",
        image: "/images/projets/githread.png",
        gallery: [
            "/images/projets/githread.png",
            "/images/projets/githread-1.png"
        ],
        color: "#ca6e6eff",
        liveLink: "https://githread.onrender.com",
        repoLink: "https://github.com/wgader27/githread",
        features: [
            "Auth via GitHub",
            "Profil utilisateur",
            "Publication de messages",
            "Commentaires & Réponses",
            "Feed en temps réel"
        ],
        tech: [
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework React" },
            { name: "TypeScript", icon: IconBrandTypescript, desc: "Typage Robuste" },
            { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Styling Rapide" },
            { name: "Prisma", icon: IconBrandPrisma, desc: "ORM Type-safe" },
        ],
        challenges: "Intégrer l'authentification GitHub OAuth et gérer les relations entre posts/commentaires avec Prisma tout en maintenant une expérience utilisateur fluide.",
        outcome: "Une plateforme sociale fonctionnelle qui démontre mes compétences en développement Full Stack moderne avec Next.js et Prisma."
    },

    // 8. Lac de Côme - Motion Design
    {
        id: "lac-de-come",
        date: "2025-11",
        category: "Motion Design",
        title: "Lac de Côme",
        tagline: "Animation touristique 15s",
        shortDescription: "Motion design promotionnel de 15 secondes pour la destination touristique du Lac de Côme.",
        description: "Une animation motion design de 15 secondes présentant le Lac de Côme comme destination touristique. Le projet combine design vectoriel réalisé sur Illustrator, animation sur After Effects et sound design monté sur Premiere Pro.",
        image: "/images/projets/lac-de-come.png",
        gallery: [],
        video: "/images/projets/lac-de-come.mp4",
        color: "#0ea5e9",
        liveLink: "",
        repoLink: "",
        features: [
            "Design vectoriel (Illustrator)",
            "Animation (After Effects)",
            "Sound Design (Premiere Pro)",
            "Format 15 secondes"
        ],
        tech: [
            { name: "Illustrator", icon: IconBrandAdobeIllustrator, desc: "Design Vectoriel" },
            { name: "After Effects", icon: IconMovie, desc: "Animation" },
            { name: "Premiere Pro", icon: IconMovie, desc: "Montage & Son" },
        ],
        challenges: "Créer une animation fluide et captivante en seulement 15 secondes tout en transmettant l'atmosphère unique du Lac de Côme.",
        outcome: "Une vidéo promotionnelle dynamique qui met en valeur mes compétences en motion design et en création audiovisuelle."
    },

    // 9. MyCrew - Prototype Figma
    {
        id: "mycrew",
        date: "2025-12",
        category: "UX/UI Design",
        title: "MyCrew",
        tagline: "App de rencontre sportive",
        shortDescription: "Prototype Figma complet pour une application mobile de rencontre sportive avec système de matching type Tinder.",
        description: "MyCrew est un projet de conception UX/UI pour une application mobile de rencontre sportive. Le concept s'inspire des apps de dating (Tinder, Meetic) avec un système de swipe gauche/droite pour matcher avec d'autres sportifs. Les utilisateurs créent leur profil avec leurs sports et niveaux, peuvent découvrir des événements sportifs près de chez eux et communiquer via un système de messagerie intégré.",
        image: "/images/projets/mycrew-thumb.png",
        gallery: [
            "/images/projets/mycrew.png",
            "/images/projets/mycrew-1.png",
            "/images/projets/mycrew-2.png",
            "/images/projets/mycrew-3.png",
            "/images/projets/mycrew-4.png"
        ],
        color: "#f97316",
        liveLink: "https://www.figma.com/proto/zw7S4EGHCGbeeC3GLJpWjg/Wahel-GADER---mycrew?node-id=4008-42&p=f&t=FX5aRz5kRa6dlUAo-1&scaling=scale-down&content-scaling=fixed&page-id=4007%3A2&starting-point-node-id=4008%3A42",
        liveLinkLabel: "Voir le Prototype",
        liveLinkIcon: "play",
        repoLink: "https://www.figma.com/design/zw7S4EGHCGbeeC3GLJpWjg/Wahel-GADER---mycrew?node-id=4007-2&t=LnELjL4jucBa2iFl-1",
        repoLinkLabel: "Fichier Figma",
        repoLinkIcon: "figma",
        features: [
            "Système de matching (Swipe gauche/droite)",
            "Profil utilisateur avec sports & niveaux",
            "Événements sportifs géolocalisés",
            "Messagerie intégrée",
            "Design System & Composants",
            "Charte graphique complète"
        ],
        tech: [
            { name: "Figma", icon: IconBrandFigma, desc: "Prototype & Design" },
        ],
        challenges: "Concevoir une expérience utilisateur intuitive qui adapte le concept de swipe des apps de dating au contexte sportif, tout en créant un design system cohérent et réutilisable.",
        outcome: "Un prototype Figma complet avec composants, design system et charte graphique, prêt à être développé en application mobile native."
    },

    // 10. LG Bâtiment
    {
        id: "lg-batiment",
        date: "2025-01",
        category: "Site Vitrine & Identité",
        title: "LG Bâtiment",
        tagline: "Rénovation & Peinture Intérieure",
        shortDescription: "Conception complète (A-Z) pour une société de bâtiment : Logo, Site Web, SEO et Fiche Google Business.",
        description: "Un projet global réalisé de A à Z pour une société de plaquiste et peinture à Angoulême. De la conception de la charte graphique et de la maquette, jusqu'au développement du site vitrine en React/Tailwind, en passant par l'optimisation SEO et la gestion de la fiche Google Business.",
        image: "/images/projets/lg-batiment.png",
        gallery: [
            "/images/projets/lg-batiment.png",
            "/images/projets/lg-batiment-1.png",
            "/images/projets/lg-batiment-2.png",
            "/images/projets/lg-batiment-3.png",
            "/images/projets/lg-batiment-4.png"
        ],
        color: "#0f172a", // Orange for construction/building vibe
        liveLink: "https://lgbatiment.fr", // Hypothétique ou à remplir
        repoLink: "",
        features: [
            "Identité Visuelle (Logo & Charte)",
            "Site Vitrine Rapide (React/Next.js)",
            "Optimisation SEO Locale (Angoulême)",
            "Gestion Fiche Google Business",
            "Responsive Design Mobile-First",
            "Hébergement & Maintenance"
        ],
        tech: [
            { name: "React", icon: IconBrandReact, desc: "Développement Frontend" },
            { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Styling Moderne" },
            { name: "Photoshop", icon: IconBrandAdobePhotoshop, desc: "Retouche Photo" },
            { name: "Illustrator", icon: IconBrandAdobeIllustrator, desc: "Création Logo & Vecteurs" },
        ],
        challenges: "Le défi principal a été de créer une identité visuelle professionnelle partant de zéro et de positionner rapidement le site sur les mots-clés locaux ('plaquiste Angoulême') grâce à une stratégie SEO.",
        outcome: "Une présence digitale complète qui a permis à l'entreprise de gagner en crédibilité et d'attirer ses premiers clients via le web dès le premier mois."
    },


    // 11. Boardly
    {
        id: "boardly",
        date: "2025-10",
        category: "Application Web",
        title: "Boardly",
        tagline: "Application Kanban Complète",
        shortDescription: "Une application type Kanban permettant de gérer ses tâches sous forme de colonnes (À faire, En cours, Fini).",
        description: "Boardly est une application de gestion de projet de type Kanban développée avec Next.js et Prisma. Elle permet de créer des tâches, d'ajouter des sous-tâches (avec possibilité de les cocher), de supprimer des tâches, et de les organiser dans des colonnes dynamiques (À faire, En cours, Fini). L'interface est conçue avec Tailwind CSS pour un rendu épuré, réactif et intuitif.",
        image: "/images/projets/todolist.png",
        gallery: [
            "/images/projets/todolist.png",
            "/images/projets/todolist-1.png",
            "/images/projets/todolist-2.png"
        ],
        color: "#8b5cf6",
        liveLink: "",
        repoLink: "https://github.com/wgader27/board-app-next",
        features: [
            "Système Kanban (À faire, En cours, Fini)",
            "Création de tâches",
            "Sous-tâches avec cases à cocher",
            "Suppression de tâches"
        ],
        tech: [
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework React" },
            { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Styling Rapide" },
            { name: "Prisma", icon: IconBrandPrisma, desc: "ORM Type-safe" },
        ],
        challenges: "Gérer l'état complexe d'un tableau Kanban interactif avec des sous-tâches, tout en assurant une synchronisation fluide avec la base de données via Prisma.",
        outcome: "Une application de gestion de tâches fonctionnelle et performante pour l'organisation personnelle ou professionnelle."
    },

    // 12. HoloBarista
    {
        id: "holobarista",
        date: "2026-02",
        category: "Jeu XR & Réalité Mixte",
        title: "HoloBarista",
        tagline: "Gérez votre café en Réalité Mixte",
        shortDescription: "Un jeu XR jouable sur Meta Quest 3 où vous construisez et gérez votre propre café dans votre environnement réel avec détection spatiale.",
        description: "HoloBarista est un jeu immersif en Réalité Mixte (XR) développé avec A-Frame, Three.js, HTML et JavaScript, spécialement conçu pour le casque Meta Quest 3. L'objectif est de créer son propre café virtuel intégré dans son environnement réel grâce à la détection spatiale. Le joueur doit gérer l'ouverture de la boutique, acheter des objets et de la décoration, préparer et servir des cafés aux clients, tout en gérant l'encaissement et l'entretien (ménage). Une file d'attente se forme avec des clients dont la patience diminue s'ils ne sont pas servis à temps !",
        image: "/images/projets/holobarista.png",
        gallery: [
            "/images/projets/holobarista-1.png",
            "/images/projets/holobarista-2.png",
            "/images/projets/holobarista-3.png",
            "/images/projets/holobarista-4.png",
            "/images/projets/holobarista-5.png",
            "/images/projets/holobarista-6.png"
        ],
        color: "#d97706",
        liveLink: "https://wgader27.github.io/HoloBarista/",
        repoLink: "https://github.com/wgader27/HoloBarista",
        features: [
            "Détection spatiale (Mixed Reality / XR)",
            "Gestion du café et Todo list (Ménage, Ouverture)",
            "Système de file d'attente et patience des clients",
            "Achat d'objets et décoration de la boutique",
            "Préparation de cafés et encaissement"
        ],
        tech: [
            { name: "HTML/JS", icon: IconBrandJavascript, desc: "Logique Client" },
            { name: "Three.js", icon: IconBrandThreejs, desc: "3D WebGL" },
            { name: "A-Frame", icon: IconDeviceGamepad, desc: "Framework XR" },
        ],
        challenges: "Adapter le gameplay à l'environnement réel du joueur via la détection spatiale WebXR, tout en gérant une logique de clients dynamique et interactive (file d'attente, patience, collisions).",
        outcome: "Un jeu immersif repoussant les frontières entre virtuel et réalité, offrant une expérience ludique en pleine croissance sur les casques de réalité mixte."
    },

    // 13. CowerMood
    {
        id: "cowermood",
        date: "2025-06",
        category: "UX/UI Design & Application",
        title: "CowerMood",
        tagline: "Application sportive pour coworking",
        shortDescription: "Prototype Figma d'une application de sport gamifiée pour les coworkers d'Hémera, basée sur la mythologie grecque.",
        description: "CowerMood est un prototype applicatif conçu pour Hémera, un espace de coworking. L'objectif était de créer une application favorisant la pratique sportive entre coworkers. Le concept est basé sur la mythologie grecque : chaque jour, l'utilisateur choisit son humeur ('mood') associée à un dieu. Ensuite, l'application génère via une IA un programme sportif sur mesure (ex: entraînement intense thématique Zeus) sous forme de parcours de vidéos avec suivi des mouvements. Le projet inclut aussi un système de création de parties, pour faire du sport en groupe, et un classement gamifié des coworkers.",
        image: "/images/projets/cowermood.png",
        gallery: [
            "/images/projets/cowermood.png",
            "/images/projets/cowermood1.png",
            "/images/projets/cowermood2.png",
            "/images/projets/cowermood3.png",
            "/images/projets/cowermood4.png",
            "/images/projets/cowermood5.png",
            "/images/projets/cowermood6.png"
        ],
        color: "#fbbf24",
        liveLink: "https://www.figma.com/proto/M9fvIdumvyvs2TUDcda1Tj/SA%C3%892.02?node-id=132-1685&t=zCZKbbb9bzCarKTM-0&scaling=min-zoom&content-scaling=fixed&page-id=20%3A1188&starting-point-node-id=132%3A1685",
        liveLinkLabel: "Voir le Prototype",
        liveLinkIcon: "play",
        repoLink: "",
        features: [
            "Thème évolutif (Mythologie Grecque)",
            "Programmes sportifs IA interactifs",
            "Suivi des mouvements intégré",
            "Création de parties multi-joueurs",
            "Système de classement & Gamification",
            "Prototype interactif HD (Figma)"
        ],
        tech: [
            { name: "Figma", icon: IconBrandFigma, desc: "Prototype & Design" },
        ],
        challenges: "Modéliser une application qui pousse au lien social tout en rendant le sport accessible et ludique dans un milieu de travail (coworking), grâce à un choix de design innovant (IA + Mocap + Mythologie).",
        outcome: "Un prototype complet et immersif qui a su répondre parfaitement aux attentes gamifiées et sportives de l'entreprise Hémera."
    },

    // 14. Musée des Beaux-Arts
    {
        id: "musee-beaux-arts",
        date: "2025-11",
        category: "UX/UI Design & Application",
        title: "Musée des Beaux-Arts",
        tagline: "Application interactive du musée",
        shortDescription: "Prototype Figma d'une application compagnon pour le Musée des Beaux-Arts de Limoges avec audio, AR et vues 360°.",
        description: "Ce projet est un prototype d'application mobile pour le Musée des Beaux-Arts de Limoges. L'application enrichit l'expérience des visiteurs grâce à plusieurs fonctionnalités innovantes : scan de QR codes pour obtenir des informations sur les œuvres, parcours en Réalité Augmentée (AR) qui guident l'utilisateur et analysent les œuvres via la caméra, et des vues à 360 degrés. Une carte interactive aide à se repérer dans le musée. Chaque œuvre dispose de sa propre page avec description, audio description et vidéo. L'application propose également un système de profil utilisateur et est entièrement bilingue (Français/Anglais).",
        image: "/images/projets/app-musee.png",
        gallery: [
            "/images/projets/app-musee.png",
            "/images/projets/app-musee-1.png",
            "/images/projets/app-musee-2.png",
            "/images/projets/app-musee-3.png",
            "/images/projets/app-musee-4.png",
            "/images/projets/app-musee-5.png",
            "/images/projets/app-musee-6.jpg",
            "/images/projets/app-musee-7.jpg",
            "/images/projets/app-musee-8.png",
            "/images/projets/app-musee-9.png",
            "/images/projets/app-musee-10.png",
            "/images/projets/app-musee-11.png"
        ],
        color: "#b91c1c",
        liveLink: "https://www.figma.com/proto/ozeZ8z1UxpfY5eL8UhEVjI/Application-mus%C3%A9e-beaux-arts-limoges?node-id=1001-454&t=E8I72IZBBjtlUzeH-0&scaling=scale-down&content-scaling=fixed&page-id=138%3A2&starting-point-node-id=1001%3A454",
        liveLinkLabel: "Voir le Prototype",
        liveLinkIcon: "play",
        repoLink: "",
        features: [
            "Scan QR code des œuvres",
            "Parcours guidés & Audio description",
            "Réalité Augmentée (AR) & Analyse",
            "Vues interactives à 360 degrés",
            "Carte interactive du musée",
            "Support bilingue (FR/EN)"
        ],
        tech: [
            { name: "Figma", icon: IconBrandFigma, desc: "Prototype & Design" },
        ],
        challenges: "Concevoir une interface accessible à un large public (touristes, locaux, accessibilité) tout en intégrant de nombreuses fonctionnalités avancées (AR, audio, map, scan).",
        outcome: "Un prototype d'application musée complet et riche, qui modernise l'expérience visiteur et met en valeur les œuvres de manière interactive."
    }

];

export const getProject = (id: string) => {
    return projectsData.find(p => p.id === id);
};
