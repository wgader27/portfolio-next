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
    tech: { name: string; icon: any; desc?: string }[];
    challenges: string;
    outcome: string;
}

export const projectsData: ProjectData[] = [
    // 1. LG Bâtiment
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
        color: "#f97316", // Orange for construction/building vibe
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

    // 2. Finote App
    {
        id: "finote-app",
        date: "2024-10",
        category: "Mobile App",
        title: "Finote App",
        tagline: "Gestionnaire de Finances Personnelles",
        shortDescription: "Un compagnon mobile intuitif pour organiser vos portefeuilles numériques et analyser votre santé financière.",
        description: "Finote est une application mobile conçue pour simplifier la gestion financière personnelle. Elle permet aux utilisateurs de suivre leurs dépenses, de créer des budgets et de visualiser leurs habitudes de consommation grâce à des graphiques intuitifs.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=90",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=90",
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=90",
            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=90"
        ],
        color: "#8b5cf6",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Suivi des dépenses et revenus en temps réel",
            "Tableaux de bord analytiques interactifs",
            "Gestion multi-comptes et multi-devises",
            "Synchronisation cloud sécurisée",
            "Mode hors ligne avec synchronisation différée",
            "Exportation de rapports PDF/Excel"
        ],
        tech: [
            { name: "React Native", icon: IconBrandReact, desc: "Développement Cross-Platform" },
            { name: "Expo", icon: IconBrandReact, desc: "Framework mobile rapide" },
            { name: "Firebase", icon: IconBrandFirebase, desc: "Backend & Auth temps réel" },
            { name: "TypeScript", icon: IconBrandTypescript, desc: "Robustesse du code" },
        ],
        challenges: "Le défi majeur a été d'assurer une expérience utilisateur fluide même en mode hors ligne, nécessitant une architecture de synchronisation complexe avec Firebase. L'optimisation des performances graphiques sur les vieux appareils Android a également demandé un travail approfondi.",
        outcome: "L'application a reçu des retours positifs pour sa simplicité et sa rapidité. Elle a aidé les utilisateurs bêta à réduire leurs dépenses superflues de 15% en moyenne dès le premier mois d'utilisation."
    },

    // 3. Zenith Minds
    {
        id: "zenith-minds",
        date: "2024-08",
        category: "EdTech Platform",
        title: "Zenith Minds",
        tagline: "Plateforme d'Apprentissage Collaborative",
        shortDescription: "Une plateforme connectant étudiants et instructeurs pour des expériences d'apprentissage enrichies.",
        description: "Zenith Minds connecte étudiants et experts pour des sessions de mentorat et des cours interactifs. La plateforme met l'accent sur l'apprentissage par la pratique et la collaboration en temps réel.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=90",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=90",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90"
        ],
        color: "#3b82f6",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Salles de classe virtuelles temps réel",
            "Tableau blanc collaboratif",
            "Système de réservation de mentorat",
            "Chat et appels vidéo intégrés",
            "Quiz et évaluations automatisés",
            "Tableau de bord de progression"
        ],
        tech: [
            { name: "React", icon: IconBrandReact, desc: "Frontend interactif" },
            { name: "Node.js", icon: IconBrandNodejs, desc: "Backend scalable" },
            { name: "MongoDB", icon: IconBrandMongodb, desc: "Base de données flexible" },
            { name: "Socket.io", icon: IconBrandNodejs, desc: "Communication temps réel" },
        ],
        challenges: "Implémenter le tableau blanc collaboratif avec une latence minimale a été un défi technique stimulant, résolu grâce à l'utilisation optimisée de WebSockets. La gestion des différents fuseaux horaires pour les réservations a aussi nécessité une logique rigoureuse.",
        outcome: "Zenith Minds offre une alternative robuste aux plateformes traditionnelles, avec un focus sur l'interaction humaine. Le tableau blanc est particulièrement apprécié pour les sessions de code review et de mathématiques."
    },

    // 4. Snippix
    {
        id: "snippix",
        date: "2024-05",
        category: "Developer Tool",
        title: "Snippix",
        tagline: "Partage de Code Simplifié & Élégant",
        shortDescription: "Organisez et partagez vos snippets de code préférés avec élégance et simplicité.",
        description: "Snippix permet aux développeurs de stocker, organiser et partager leurs bouts de code préférés sous forme d'images magnifiquement formatées ou de liens directs. Idéal pour la documentation et les réseaux sociaux.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=90",
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=90",
            "https://images.unsplash.com/photo-1607799275518-d58665d099db?w=1200&q=90"
        ],
        color: "#10b981",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Éditeur de code avec coloration syntaxique",
            "Génération d'images personnalisables",
            "Organisation par tags et langages",
            "Recherche instantanée",
            "Mode sombre/clair automatique",
            "Partage social en un clic"
        ],
        tech: [
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework React" },
            { name: "Prisma", icon: IconBrandPrisma, desc: "ORM Type-safe" },
            { name: "PostgreSQL", icon: IconBrandFirebase, desc: "Base de données relationnelle" },
            { name: "Vercel", icon: IconBrandNextjs, desc: "Déploiement & Edge Functions" },
        ],
        challenges: "Gérer la coloration syntaxique performante pour plus de 50 langages sans alourdir le bundle initial a été un point clé. L'utilisation de Shiki et le rendu côté serveur ont permis d'atteindre cet objectif.",
        outcome: "Snippix est devenu l'outil incontournable pour partager des astuces de code sur Twitter/X. Ses images générées sont esthétiques et immédiatement lisibles."
    },

    // 5. StartupX
    {
        id: "startup-x",
        date: "2024-02",
        category: "Agence Web",
        title: "StartupX",
        tagline: "Landing Pages qui Convertissent",
        shortDescription: "Un design convivial et performant conçu pour améliorer l'engagement utilisateur et la conversion.",
        description: "Un template de site vitrine ultra-moderne pour agences digitales et startups. Conçu pour captiver l'attention dès la première seconde avec des animations fluides et une typographie audacieuse.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=90",
            "https://images.unsplash.com/photo-1481487484168-9b930d55208d?w=1200&q=90",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=90"
        ],
        color: "#f43f5e",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Animations au défilement (ScrollTrigger)",
            "Micro-interactions avancées",
            "Formulaires de contact optimisés",
            "Performance Core Web Vitals verte",
            "Responsive design impeccable",
            "CMS intégré pour le blog"
        ],
        tech: [
            { name: "React", icon: IconBrandReact, desc: "Bibliothèque UI" },
            { name: "GSAP", icon: IconBrandReact, desc: "Animations complexes" },
            { name: "Tailwind", icon: IconBrandTailwind, desc: "Styling rapide" },
            { name: "Framer", icon: IconBrandReact, desc: "Transitions magiques" },
        ],
        challenges: "Trouver l'équilibre entre des animations riches (GSAP) et une performance de chargement optimale. L'utilisation du lazy-loading et de l'optimisation des assets a été cruciale.",
        outcome: "Un site vitrine de référence qui a permis d'augmenter le taux de conversion des visiteurs en leads qualifiés de 40% par rapport aux designs standards."
    },

    // 6. Personal Portfolio
    {
        id: "personal-portfolio",
        date: "2023-12",
        category: "Portfolio",
        title: "Personal Portfolio",
        tagline: "Innovation en Vitrine 3D",
        shortDescription: "Un portfolio captivant mettant en avant des projets de développement web innovants et un UI/UX soigné.",
        description: "La version précédente de ce portfolio, explorant l'intégration d'éléments 3D interactifs dans une interface web standard pour créer une expérience immersive unique.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=90",
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=90",
            "https://images.unsplash.com/photo-1504384308090-c54be3852f33?w=1200&q=90",
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=90"
        ],
        color: "#8b5cf6",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Scène 3D interactive (Three.js)",
            "Navigation fluide (SPA)",
            "Mode jour/nuit dynamique",
            "Effets de particules",
            "Typographie cinétique",
            "Accessibilité clavier complète"
        ],
        tech: [
            { name: "Three.js", icon: IconBrandThreejs, desc: "Rendu 3D WebGL" },
            { name: "React Three Fiber", icon: IconBrandReact, desc: "Pont React/Three" },
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework" },
            { name: "Tailwind", icon: IconBrandTailwind, desc: "Styles" },
        ],
        challenges: "L'optimisation des modèles 3D pour assurer un chargement rapide sur mobile a été le plus grand défi. L'usage de Draco compression et de techniques de Level of Detail (LOD) a été nécessaire.",
        outcome: "Un portfolio primé qui a servi de terrain de jeu expérimental et a démontré ma capacité à marier créativité technique et design rigoureux."
    },

    // 7. Flux Lura
    {
        id: "flux-lura",
        date: "2023-09",
        category: "Outil Média",
        title: "Flux Lura",
        tagline: "Convertisseur Multimédia Universel",
        shortDescription: "Convertissez sans effort images, audio et vidéos avec un outil multimédia fluide et gratuit !",
        description: "Une application web progressive (PWA) permettant de convertir, compresser et éditer des fichiers audio et vidéo directement dans le navigateur grâce à WebAssembly.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=90",
            "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=90",
            "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=90",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90"
        ],
        color: "#14b8a6",
        liveLink: "#",
        repoLink: "#",
        features: [
            "Conversion client-side (Respect vie privée)",
            "Support FFmpeg via WebAssembly",
            "Conversion par lots",
            "Extraction audio de vidéo",
            "Création de GIFs",
            "Interface Drag & Drop"
        ],
        tech: [
            { name: "FFmpeg.wasm", icon: IconBrandTypescript, desc: "Core de conversion" },
            { name: "Next.js", icon: IconBrandNextjs, desc: "Framework" },
            { name: "React", icon: IconBrandReact, desc: "UI" },
            { name: "Web Workers", icon: IconBrandTypescript, desc: "Calculs en arrière-plan" },
        ],
        challenges: "Faire tourner FFmpeg dans le navigateur est gourmand en ressources. L'utilisation intensive des Web Workers a été indispensable pour ne pas geler l'interface utilisateur pendant les conversions.",
        outcome: "Un outil puissant qui prouve que le web moderne peut rivaliser avec les applications natives pour des tâches lourdes. Utilisé quotidiennement par des centaines d'utilisateurs."
    },
];

export const getProject = (id: string) => {
    return projectsData.find(p => p.id === id);
};
