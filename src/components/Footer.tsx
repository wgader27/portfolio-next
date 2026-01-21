import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, MapPin, Mail, Copy, Check } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Dynamic Time Update (Paris)
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projets" },
    { name: "À propos", href: "/#apropos" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/wgader27", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/wahel-gader-7463551ba", icon: Linkedin },
    { name: "Email", href: "mailto:wahel.gader27@gmail.com", icon: Mail },
  ];

  // Liquid Glass Style Object (reused from Hero)
  const glassStyle = {
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
  };

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5 pt-12 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">

        {/* TOP SECTION: BIG CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12 border-b border-white/5 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-instrument italic text-white mb-4">
              Prêt à créer quelque chose <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">d'extraordinaire ?</span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-outfit relative overflow-hidden"
                style={glassStyle}
              >
                <span className="relative z-10 flex items-center gap-2 mix-blend-overlay">
                  Démarrer un projet
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>

              <div
                onClick={() => {
                  navigator.clipboard.writeText("wahel.gader27@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center gap-3 px-6 py-4 rounded-full text-white/40 hover:text-white transition-all cursor-pointer hover:bg-white/5 border border-transparent hover:border-white/5 group active:scale-95 font-outfit"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="group-hover:text-white transition-colors" />}
                <span className="font-medium">{copied ? "Email copié !" : "wahel.gader27@gmail.com"}</span>
              </div>
            </div>
          </div>

          {/* SCROLL TO TOP / LOGO */}
          <div className="hidden md:block text-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-24 h-24 rounded-full flex items-center justify-center text-white hover:scale-105 transition-all duration-500 group relative overflow-hidden"
              style={glassStyle}
            >
              <ArrowUpRight size={32} className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500 relative z-10" />
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Column 1: Brand & Time */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <span className="text-2xl font-bold font-instrument italic block mb-4">WG.</span>
              <p className="text-white/40 font-outfit max-w-xs">
                Développeur Web passionné par les projets originaux.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-outfit text-white/60">OPEN TO WORK</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-6 font-outfit">Navigation</h4>
            <ul className="space-y-4 font-outfit">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors relative group">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                  ) : (
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors relative group">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-6 font-outfit">Réseaux</h4>
            <ul className="space-y-4 font-outfit">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal / Credits */}
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-6 font-outfit">Légal</h4>
            <ul className="space-y-4 font-outfit">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-20 text-xs text-white/20 font-outfit uppercase tracking-wider">
          <span>© 2026 Wahel Gader. Tous droits réservés.</span>
          <span className="flex items-center gap-1"><MapPin size={10} className="" />Angoulême</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
