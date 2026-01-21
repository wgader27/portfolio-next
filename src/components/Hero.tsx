"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Copy, Check } from "lucide-react";
import StarField from "./StarField";
import { useState } from "react";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#030014] pt-24 pb-20 text-white selection:bg-indigo-500/30">

      {/* 
        ========================================
        EXACT BACKGROUND FROM site_ami.html 
        ========================================
      */}

      {/* Top Atmosphere Blur */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[500px] w-full max-w-4xl rounded-full bg-indigo-700/20 blur-[150px]"
      />

      {/* STARFIELD (Kept as replacement for the canvas in site_ami) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <StarField />
      </div>

      {/* 
         PLANET BOTTOM SECTION 
         Copied structure from site_ami.html
      */}
      <div className="absolute inset-x-0 bottom-0 h-56 z-10 pointer-events-none">
        <div aria-hidden="true" className="relative h-60 w-full z-19 mt-4">
          <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform h-[500px] w-[1200px]" style={{ maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)' }}>

            {/* Aurora / Glow (Updated with exact colors) */}
            <div
              className="absolute bottom-[167px] left-1/2 -translate-x-1/2 transform h-[111px] w-[800px] blur-[80px]"
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #7c3aed, #4f46e5, #38bdf8, #06b6d4)',
                backgroundSize: '300% 100%',
                transform: 'translateX(0px) scaleX(1.2)'
              }}
            />

            {/* Planet Atmosphere/Gradient Body */}
            <div className="absolute -bottom-[753px] -left-[454px] -right-[432px] h-[955px] rounded-[100%] bg-gradient-to-b from-indigo-500/40 to-transparent dark:from-white/10" />

            {/* Planet Solid Body / Surface */}
            <div
              className="absolute -bottom-[759px] -left-[532px] -right-[510px] h-[956px] rounded-[100%] bg-black"
              style={{
                boxShadow: 'inset 0 2px 20px #fff, 0 -10px 50px 1px rgba(255,255,255,0.5)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Smooth Transition Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none" />


      {/* 
        ========================================
        CONTENT (Original/Legacy)
        ========================================
      */}

      {/* UPCOMING PILL */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 mb-6 mt-4"
      >
        <div className="inline-flex items-center gap-2 px-1.5 py-1.5 pr-4 rounded-full border border-blue-500/30 bg-blue-950/20 backdrop-blur-xl hover:bg-blue-900/30 cursor-pointer group shadow-[0_0_20px_-10px_rgba(59,130,246,0.5)]">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet to-pink text-[11px] font-bold uppercase tracking-wider text-white">
            Nouveau
          </span>
          <span className="text-sm text-blue-100/80 group-hover:text-white transition-colors font-medium">
            Lancement Portfolio v2
          </span>
          <ChevronRight size={14} className="text-blue-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
        </div>
      </motion.div>

      {/* MAIN HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-20 text-center max-w-5xl mx-auto px-4 mb-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight font-instrument text-white drop-shadow-2xl">
          Étudiant en 2ème année
          <br />
          <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">BUT MMI</span>{" "}
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
            recherche un stage
          </span>
        </h1>
      </motion.div>

      {/* SUBTITLE / PROFILE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-20 flex flex-col md:flex-row items-center gap-4 text-lg md:text-xl text-white/50 mb-12 font-light"
      >
        <span>Bonjour, je suis Wahel Gader</span>
        <div className="flex items-center gap-3 px-2">
          <div className="w-16 h-9 rounded-full overflow-hidden border border-white/10">
            <img src="pp_github.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span>Développeur Web</span>
        </div>
      </motion.div>

      {/* CTA BUTTON - FIXED GLASS EFFECT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-20 flex flex-wrap items-center justify-center gap-6 mt-1"
      >
        <a
          href="/contact"
          className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: `
                inset 0 0 0 1px rgba(255,255,255, 0.05),
                inset 2px 1px 0px -1px rgba(255,255,255, 0.4),
                inset -1.5px -1px 0px -1px rgba(255,255,255, 0.3),
                inset -2px -6px 1px -5px rgba(255,255,255, 0.2),
                inset -1px 2px 3px -1px rgba(0,0,0, 0.4),
                inset 0px -4px 1px -2px rgba(0,0,0, 0.3),
                0px 10px 30px -5px rgba(0,0,0, 0.6)
            `,
            backdropFilter: "blur(12px) saturate(150%)",
            WebkitBackdropFilter: "blur(12px) saturate(150%)"
          }}
        >
          <span className="relative z-10 flex items-center gap-3 mix-blend-overlay">
            Discutons
            <div className="bg-white/20 rounded-full p-1.5 text-white group-hover:rotate-45 transition-transform duration-300 border border-white/20 group-hover:bg-white/30">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </span>
          {/* Hover Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </a>

        <div
          onClick={() => {
            navigator.clipboard.writeText("wahel.gader27@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-full text-white/40 hover:text-white transition-all cursor-pointer hover:bg-white/5 border border-transparent hover:border-white/5 group active:scale-95"
        >
          {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="group-hover:text-white transition-colors" />}
          <span className="text-lg font-light tracking-wide">{copied ? "Email copié !" : "wahel.gader27@gmail.com"}</span>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
