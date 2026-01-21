"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import { Eye, ArrowRight, Star } from "lucide-react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFirebase,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Project Data
const projects = [
  {
    id: 1,
    title: "Next Ventures",
    tagline: "Autonomiser les Entrepreneurs",
    description:
      "Une plateforme conçue pour les entrepreneurs en phase de démarrage pour pitcher, parcourir et s'engager avec des idées de startups. Rapide et impressionnante pour utilisateurs et investisseurs.",
    features: [
      "Prerendering partiel pour la vitesse.",
      "Flux de soumission d'idées simplifié.",
      "Expérience de navigation améliorée.",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=90",
    color: "#ec4899", // Pink
    tech: [
      { name: "NEXT.JS", icon: IconBrandNextjs },
      { name: "REACT", icon: IconBrandReact },
      { name: "SANITY CMS", icon: IconBrandNextjs },
    ],
    link: "/projets/next-venture",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
  },
  {
    id: 2,
    title: "Finote App",
    tagline: "Gestionnaire de Finances",
    description:
      "Un compagnon mobile intuitif pour organiser vos portefeuilles numériques et analyser votre santé financière via des graphiques interactifs.",
    features: [
      "Gérez plusieurs portefeuilles",
      "Visualisez les tendances de dépenses",
      "Attachez des reçus et synchronisez",
      "Navigation fluide et animée",
      "Sécurité des données renforcée",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=90",
    color: "#8b5cf6", // Violet
    tech: [
      { name: "EXPO", icon: IconBrandReact },
      { name: "TYPESCRIPT", icon: IconBrandTypescript },
      { name: "FIREBASE", icon: IconBrandFirebase },
    ],
    link: "/projets/finote",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  },
  {
    id: 3,
    title: "CodeSnippets",
    tagline: "Partage de Code Instantané",
    description:
      "Plateforme pour développeurs pour sauvegarder, organiser et partager des snippets de code avec coloration syntaxique et collaboration.",
    features: [
      "Coloration pour 50+ langages.",
      "Partage privé et public.",
      "Fonctionnalités de collaboration.",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
    color: "#06b6d4", // Cyan
    tech: [
      { name: "NEXT.JS", icon: IconBrandNextjs },
      { name: "TYPESCRIPT", icon: IconBrandTypescript },
      { name: "TAILWIND", icon: IconBrandTailwind },
    ],
    link: "/projects/codesnippets",
  },
];

const CuratedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: leftPanelRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: rightPanelRef.current,
      pinSpacing: false,
    });

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

  }, { scope: containerRef });

  return (
    <section id="work" className="relative bg-background" ref={containerRef}>
      <div className="container px-4 mx-auto max-w-[2000px]">
        {/* Section Header */}
        <div className="text-center py-20">
          <div className="flex items-center justify-center gap-4 text-white/40 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-outfit">
              Projets
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-instrument italic font-normal text-white mb-2 tracking-tight leading-none">
            Projets <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">sélectionnés</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row relative items-start pb-40">
          {/* LEFT PANEL: Images (60%) */}
          <div ref={leftPanelRef} className="w-full lg:w-[60%] flex flex-col gap-0 border-r border-white/5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                setRef={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>

          {/* RIGHT PANEL: Details (40%) */}
          <div
            ref={rightPanelRef}
            className="hidden lg:flex w-[40%] h-screen flex-col justify-center px-12 z-10 bg-background/50 backdrop-blur-sm"
          >
            <div className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  {/* Indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-1 rounded-full shadow-[0_0_15px_currentColor]"
                      style={{ backgroundColor: projects[activeIndex].color, color: projects[activeIndex].color }}
                    />
                    <span
                      className="text-xs font-bold tracking-widest uppercase font-outfit"
                      style={{ color: projects[activeIndex].color }}
                    >
                      Px Project {activeIndex + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl xl:text-3xl font-instrument italic font-normal text-white leading-[1] mb-4">
                    {projects[activeIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm xl:text-base text-white/80 leading-relaxed font-outfit font-light mb-6 w-[95%]">
                    {projects[activeIndex].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {projects[activeIndex].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Star
                          size={20}
                          className="mt-1 shrink-0"
                          fill="currentColor"
                          style={{ color: projects[activeIndex].color }}
                        />
                        <span className="text-white/90 font-outfit text-sm xl:text-base font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tech.map((tech, i) => (
                      <div key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 transition-all hover:bg-white/10">
                        {/* ICON COLORED */}
                        <tech.icon
                          size={14}
                          style={{ color: projects[activeIndex].color }}
                        />
                        {/* TEXT LARGER */}
                        <span className="text-xs font-medium tracking-wide text-white/90 uppercase font-outfit">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  setRef
}: {
  project: (typeof projects)[0];
  index: number;
  setRef: (el: HTMLDivElement | null) => void;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const cardInnerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardInnerRef.current) return;
    const rect = cardInnerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const x = (mousePos.x - 0.5) * -20;
  const y = (mousePos.y - 0.5) * -20;

  return (
    <div
      ref={setRef}
      className="min-h-[70vh] w-full flex items-center justify-center p-4 lg:p-8 relative"
      data-index={index}
    >
      <motion.div
        ref={cardInnerRef}
        className="relative w-full aspect-[16/11] rounded-[40px] overflow-hidden group perspective-1000 shadow-2xl glass" // Added 'glass' for generic white borders
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-10%" }}
        style={{
          // Styles FIXED:
          // Border/Outer is 'Liquid Glass' (handled by .glass className + generic styles)
          background: "rgba(255, 255, 255, 0.03)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: "1px",
        }}
      >
        {/* INNER CONTAINER: This gets the Color */}
        <div
          className="absolute inset-2 rounded-[36px] overflow-hidden flex flex-col backdrop-blur-sm transition-colors duration-500"
          style={{ backgroundColor: project.color }} // Solid/Opaque color for the background
        >
          {/* Background Overlay (Darken) to make text pop while keeping color theme */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Tagline Top */}
          <div className="p-8 md:p-12 relative z-20 pointer-events-none">
            <h4 className="text-3xl md:text-5xl font-instrument italic text-white mb-4 drop-shadow-2xl leading-tight">
              {project.tagline}
            </h4>
          </div>

          {/* ANIMATED IMAGE (Inset, Bottom) */}
          <div className="mt-auto w-[90%] h-[75%] mx-auto relative rounded-t-2xl overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)] transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-4">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <motion.div
              className="absolute inset-0 bg-transparent"
              animate={{ x, y }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />

            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
          </div>

          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

        </div>

        {/* Eye Tracker */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: (mousePos.x * (cardInnerRef.current?.offsetWidth || 0)) - ((cardInnerRef.current?.offsetWidth || 0) / 2),
                y: (mousePos.y * (cardInnerRef.current?.offsetHeight || 0)) - ((cardInnerRef.current?.offsetHeight || 0) / 2),
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              className="absolute inset-0 z-50 hidden md:flex items-center justify-center pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Rotating SVG Ring */}
                <motion.div
                  className="absolute w-32 h-32"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" style={{ overflow: "visible" }}>
                    <path id={`circlePathRef-${index}`} d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    {/* PURE WHITE TEXT for Glass look */}
                    <text className="text-[12px] font-bold uppercase tracking-[0.2em] font-outfit" fill="white">
                      <textPath href={`#circlePathRef-${index}`} startOffset="0%">
                        Voir Détails • Voir Détails •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Eye - Liquid Glass Style (White Border, Transparent) */}
                <div
                  className="w-20 h-20 rounded-full backdrop-blur-md bg-white/10 border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10"
                >
                  <Eye className="w-8 h-8 text-white relative z-10" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  )
}

export default CuratedWork;
