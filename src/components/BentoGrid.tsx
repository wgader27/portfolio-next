import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Briefcase, GraduationCap, FileText, Download, Code, Palette, Cake, Car, CreditCard, Search, Film } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LiquidCard = ({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative group overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]",
      className
    )}
    style={{
      background: "rgba(255, 255, 255, 0.03)",
      boxShadow: `
        inset 0 0 0 1px rgba(255,255,255, 0.05),
        inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
        inset -1.5px -1px 0px -1px rgba(255,255,255, 0.1),
        0 10px 40px -10px rgba(0,0,0,0.5)
      `,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}
  >
    {/* Internal Shine Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />

    {/* Hover Glow */}
    <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform rotate-45" />

    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

const BentoGrid = () => {

  return (
    <section className="py-8 px-4 relative overflow-hidden" id="apropos">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 text-white/40 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-outfit">
              À propos
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-instrument italic text-white mb-4"
          >
            À propos de <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">moi</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* CARD 1: MAIN HERO - INTERNSHIP (Large) */}
          <LiquidCard className="md:col-span-6 lg:col-span-8 row-span-2 flex flex-col justify-between  bg-gradient-to-br from-indigo-900/20 to-violet-900/20" delay={0.1}>
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-wider uppercase animate-pulse">
                Open to work
              </span>
              <Briefcase className="text-white/20" size={32} />
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-3xl md:text-5xl font-instrument text-white leading-tight">
                Recherche de stage <br />
                <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent italic">Développeur Web</span>
              </h3>
              <p className="text-white/70 text-lg max-w-lg leading-relaxed font-light">
                Je suis à la recherche d'une opportunité de stage de <strong>8 à 12 semaines</strong>.
                Passionné par le développement Front & Back, je suis prêt à intégrer votre équipe.
              </p>
            </div>

            <div className="mt-auto pt-8 flex items-center gap-6 text-sm font-medium text-white/50">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-violet-400" />
                <span>Avril - Juin 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-violet-400" />
                <span>Angoulême / Limoges / Remote</span>
              </div>
            </div>
          </LiquidCard>

          {/* CARD 2: STUDENT PROFILE (Small) */}
          <LiquidCard className="md:col-span-3 lg:col-span-4 flex flex-col justify-center items-center text-center bg-white/" delay={0.2}>
            <div className="w-auto h-auto flex items-center justify-center mb-4">
              <img src="img_wahel.jpg" className="w-16 h-16 rounded-full object-cover  opacity-80 scale-125 object-top" alt="Student" />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">Wahel GADER</h4>
            <p className="text-white/50 text-sm">2ème année • BUT MMI</p>
          </LiquidCard>

          {/* CARD 3: CV DOWNLOAD (Small) */}
          <LiquidCard className="md:col-span-3 lg:col-span-4 flex flex-col justify-center group/cv" delay={0.3}>
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-end items-start">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 text-white group-hover/cv:bg-white group-hover/cv:text-black transition-colors duration-300"
                  aria-label="View CV"
                >
                  <FileText size={20} />
                </a>
              </div>
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Curriculum Vitae</p>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="text-lg md:text-xl font-medium text-white hover:text-violet-300 transition-colors flex items-center gap-2"
                >
                  Voir mon CV
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/cv:opacity-100 group-hover/cv:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </LiquidCard>

          {/* CARD 4: PERSONAL TAGS (Wide) */}
          <LiquidCard className="md:col-span-6 lg:col-span-6 flex flex-col justify-center bg-gradient-to-r from-background to-blue-900/10" delay={0.4}>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">À propos de moi</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "20 ans", icon: Cake, color: "text-pink-400" },
                { label: "Angoulême", icon: MapPin, color: "text-blue-400" },
                { label: "Permis B", icon: CreditCard, color: "text-emerald-400" },
                { label: "Véhiculé", icon: Car, color: "text-amber-400" },
                { label: "Cinéphile", icon: Film, color: "text-red-400" },
                { label: "Curieux", icon: Search, color: "text-violet-400" }
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-2.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all cursor-default flex items-center gap-2.5 group/tag shadow-sm backdrop-blur-sm"
                >
                  <tag.icon size={16} className={cn("opacity-70 group-hover/tag:opacity-100 transition-opacity", tag.color)} />
                  <span className="text-sm font-medium text-white/80 group-hover/tag:text-white transition-colors">{tag.label}</span>
                </span>
              ))}
            </div>
          </LiquidCard>

          {/* CARD 5: LOCATION / VISUAL (Wide) */}
          {/* CARD 5: COMPETENCIES (Wide) */}
          <LiquidCard className="md:col-span-6 lg:col-span-6 flex flex-col justify-center relative overflow-hidden p-8 md:p-10" delay={0.5}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500 blur-[80px] opacity-20 rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full">
              {/* Development */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                    <Code size={24} />
                  </div>
                  <span className="font-instrument italic text-2xl text-white">Développement</span>
                </div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed pl-1">
                  Sites vitrines, Sites e-commerce, Back-office, APIs, Intégrations complexes.
                </p>
              </div>

              {/* Design */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/10">
                    <Palette size={24} />
                  </div>
                  <span className="font-instrument italic text-2xl text-white">Design UI/UX</span>
                </div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed pl-1">
                  Maquettes Figma, Prototypage interactif, Design Systems, Motion Design.
                </p>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
