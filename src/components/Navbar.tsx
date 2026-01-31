"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CommandPalette from "./CommandPalette";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/#apropos" },
  { label: "Projets", path: "/projets" },
  { label: "Blog", path: "/blog" },
  { label: "Liens", path: "/liens" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes("#")) {
      const [targetPath, hash] = path.split("#");
      e.preventDefault();

      // Always update URL first
      navigate(path, { replace: true });

      if (location.pathname !== targetPath) {
        // Allow time for navigation and mounting
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        // Already on page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (path === "/") {
      if (location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Clear hash from URL
        navigate("/", { replace: true });
      }
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* Container - Liquid Glass Pill */}
        <div
          className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 shadow-2xl pointer-events-auto"
          style={{
            background: "rgba(10, 10, 10, 0.5)",
            backdropFilter: "blur(16px) saturate(180%)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.1)"
          }}
        >

          {/* Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Hidden SVG Filter for Liquid Distortion */}
            <svg className="absolute w-0 h-0">
              <filter id="liquid-glass">
                <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
                <feGaussianBlur stdDeviation="0.5" />
              </filter>
            </svg>

            {navLinks.map((link) => {
              // Custom active logic
              let isActive = false;
              if (link.path === "/") {
                isActive = location.pathname === "/" && !location.hash;
              } else if (link.path.includes("#")) {
                // For #links, treat as active if we are on the page AND the hash matches, 
                // OR if we are scrolling through that section (simpler: just match URL for now to allow highlighting)
                // Actually, "À propos" is on Home, so if we are on Home we might see it active.
                // Let's keep it simple: Active if hash matches exactly.
                const [path, hash] = link.path.split("#");
                isActive = location.pathname === path && location.hash === `#${hash}`;
              } else {
                // Robust matching for sub-paths (e.g. /projets/1 matches /projets)
                // but avoid /projets-abc matching /projets
                // AND ensure we are NOT on the root path if the link isn't root (prevents "Projets" being active on Home)
                isActive = (location.pathname === link.path || location.pathname.startsWith(`${link.path}/`)) && link.path !== "/";
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium relative transition-colors duration-500 will-change-transform",
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  )}
                  onClick={(e) => handleLinkClick(e, link.path)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/10"
                      style={{
                        boxShadow: `
                                inset 0 0 0 1px rgba(255,255,255, 0.05),
                                inset 2px 1px 0px -1px rgba(255,255,255, 0.4),
                                inset -1.5px -1px 0px -1px rgba(255,255,255, 0.3),
                                inset -2px -6px 1px -5px rgba(255,255,255, 0.2),
                                inset -1px 2px 3px -1px rgba(0,0,0, 0.4),
                                inset 0px -4px 1px -2px rgba(0,0,0, 0.3),
                                0px 4px 12px 0px rgba(0,0,0, 0.3)
                            `,
                        backdropFilter: "blur(8px)"
                      }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8
                      }}
                    />
                  )}
                  <span className="relative z-10 mix-blend-overlay font-bold tracking-wide">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Toggle (Visible on Mobile) */}
          <button
            className="md:hidden px-4 py-2 text-white/80 hover:text-white pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>

          {/* CTA Button */}
          <div className="pl-1">
            <button
              onClick={() => {
                setIsContactOpen(true);
              }}
              className="px-6 py-2.5 rounded-full bg-[#EBEBF5]/10 hover:bg-[#EBEBF5]/20 border border-white/10 text-white text-sm font-medium transition-all shadow-lg overflow-hidden relative pointer-events-auto block outline-none"
            >
              {/* Inner shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50" />
              Contact
            </button>
          </div>

        </div>

        {/* Logos (Desktop) */}
        <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 hidden md:block pointer-events-auto z-[60]">
          <Link to="/" className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity font-instrument italic">WG</Link>

        </div>

        {/* Logos (Mobile - Top Left) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden pointer-events-auto z-[60]">
          <Link to="/" className="text-xl font-bold text-white tracking-tighter">WG</Link>
        </div>

        {/* Top Right Command Button - HIGH Z-INDEX */}
        <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 hidden md:block pointer-events-auto z-[60]">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsCommandOpen(true);
            }}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm shadow-lg"
            aria-label="Open interaction menu"
          >
            <span className="text-lg">⌘</span>
          </button>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-instrument italic text-white/90 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white/60 hover:text-white"
          >
            Close
          </button>
        </div>
      )}

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
