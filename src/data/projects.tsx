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
    color: string;
    liveLink: string;
    repoLink: string;
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
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=90",
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=90",
            "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&q=90",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=90"
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
        color: "#7c3aed",
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
        date: "2026-01",
        category: "Réseau Social",
        title: "Githread",
        tagline: "Réseau Social pour développeurs GitHub",
        shortDescription: "Un réseau social type Threads/Twitter lié à GitHub pour les développeurs.",
        description: "Githread est une plateforme sociale inspirée de Threads et Twitter, spécialement conçue pour les développeurs. Les utilisateurs se connectent via leur compte GitHub et peuvent publier des messages, répondre dans les commentaires et gérer leur profil. Une manière de combiner l'univers dev et le microblogging.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=90",
            "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=90",
            "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&q=90",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90"
        ],
        color: "#1e293b",
        liveLink: "https://wgader27.github.io/githread",
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

    // 8. LG Bâtiment
    {
        id: "lg-batiment",
        date: "2025-01",
        category: "Site Vitrine & Identité",
        title: "LG Bâtiment",
        tagline: "Rénovation & Peinture Intérieure",
        shortDescription: "Conception complète (A-Z) pour une société de bâtiment : Logo, Site Web, SEO et Fiche Google Business.",
        description: "Un projet global réalisé de A à Z pour une société de plaquiste et peinture à Angoulême. De la conception de la charte graphique et de la maquette, jusqu'au développement du site vitrine en React/Tailwind, en passant par l'optimisation SEO et la gestion de la fiche Google Business.",
        image: "https://images.unsplash.com/photo-1581094794329-cd1196532981?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1581094794329-cd1196532981?w=1200&q=90",
            "https://images.unsplash.com/photo-1620626012053-1c16969482fe?w=1200&q=90",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
            "https://images.unsplash.com/photo-1599809275372-b4257e2c6233?w=1200&q=90"
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
            { name: "Photoshop", icon: IconBrandAdobePhotoshop, desc: "Retouche Photo & Maquettes" },
            { name: "Illustrator", icon: IconBrandAdobeIllustrator, desc: "Création Logo & Vecteurs" },
        ],
        challenges: "Le défi principal a été de créer une identité visuelle professionnelle partant de zéro et de positionner rapidement le site sur les mots-clés locaux ('plaquiste Angoulême') grâce à une stratégie SEO.",
        outcome: "Une présence digitale complète qui a permis à l'entreprise de gagner en crédibilité et d'attirer ses premiers clients via le web dès le premier mois."
    },


];

export const getProject = (id: string) => {
    return projectsData.find(p => p.id === id);
};
