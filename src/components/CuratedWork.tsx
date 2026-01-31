"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowRight, Star } from "lucide-react";
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPhp,
  IconBrandPrisma,
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
    title: "Boutique Click & Collect",
    tagline: "E-commerce & Identité Galeries Lafayette",
    description:
      "Une boutique Click & Collect entièrement fonctionnelle respectant l'identité visuelle des Galeries Lafayette. API REST PHP/MySQL custom pour gérer catalogue, utilisateurs et commandes.",
    features: [
      "Analyse Design System Galeries Lafayette",
      "API REST PHP/MySQL (MVC)",
      "Panier & Authentification",
    ],
    image: "/images/projets/boutique-click-collect-2.png",
    color: "#3b82f6",
    tech: [
      { name: "HTML/CSS", icon: IconBrandHtml5 },
      { name: "JAVASCRIPT", icon: IconBrandJavascript },
      { name: "PHP", icon: IconBrandPhp },
    ],
    link: "/projets/boutique-click-collect",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
  },
  {
    id: 2,
    title: "Site Streaming",
    tagline: "Plateforme VOD & Double DA Canal+",
    description:
      "Plateforme de streaming complète avec gestion de profils, favoris, backoffice admin et deux versions : DA originale et adaptation Canal+.",
    features: [
      "Catalogue Films & Bandes-Annonces",
      "Backoffice Administrateur (CRUD)",
      "Double DA : Originale & Canal+",
    ],
    image: "/images/projets/site-streaming.png",
    color: "#10b981",
    tech: [
      { name: "HTML/CSS", icon: IconBrandHtml5 },
      { name: "JAVASCRIPT", icon: IconBrandJavascript },
      { name: "PHP", icon: IconBrandPhp },
    ],
    link: "/projets/site-streaming",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  },
  {
    id: 3,
    title: "Githread",
    tagline: "Réseau social pour Développeurs",
    description:
      "Réseau social inspiré de Threads, lié à GitHub. Créez un compte, publiez des messages, répondez dans les commentaires.",
    features: [
      "Authentification via GitHub",
      "Publication & Commentaires",
      "Profil utilisateur",
    ],
    image: "/images/projets/githread.png",
    color: "#1e293b",
    tech: [
      { name: "NEXT.JS", icon: IconBrandNextjs },
      { name: "TYPESCRIPT", icon: IconBrandTypescript },
      { name: "PRISMA", icon: IconBrandPrisma },
    ],
    link: "/projets/githread",
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
                      PROJET {activeIndex + 1}
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
    <Link
      to={project.link}
      ref={setRef}
      className="min-h-[70vh] w-full flex items-center justify-center p-4 lg:p-8 relative block cursor-pointer"
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
                        Voir Projet • Voir Projet •
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
    </Link>
  )
}

export default CuratedWork;
