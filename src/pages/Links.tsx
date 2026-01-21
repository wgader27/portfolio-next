import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Globe,
    MessageSquare,
    Send,
    ExternalLink,
    Copy,
    Check
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Social Links Data
const socialLinks = [
    {
        id: "github",
        label: "GitHub",
        username: "@wgader27",
        url: "https://www.github.com/wgader27",
        icon: Github,
        color: "#ffffff"
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        username: "Wahel Gader",
        url: "https://linkedin.com/in/wahel-gader-7463551ba",
        icon: Linkedin,
        color: "#0077b5"
    }
];

const Links = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("wahel.gader27@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-white font-outfit selection:bg-pink-500/30">
            <Navbar />

            <main className="container mx-auto px-4 pt-32 pb-16 max-w-5xl relative">

                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

                {/* HEADER */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4">Réseaux</p>
                    <h1 className="text-4xl md:text-6xl font-instrument italic text-white">
                        Connectez-vous avec <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">moi</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Profile Card (Sticky Desktop) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div
                            className="relative p-8 rounded-[40px] overflow-hidden border border-white/10 flex flex-col items-center text-center"
                            style={{
                                background: "rgba(255, 255, 255, 0.03)",
                                backdropFilter: "blur(20px)",
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            }}
                        >
                            {/* Profile Image with Glow */}
                            <div className="relative mb-6 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-white/20 to-white/5 border border-white/10">
                                    <img
                                        src="/pp_github.png"
                                        alt="Wahel Gader"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                    {/* Status Dot */}
                                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0a0a0a]" title="Available for work" />
                                </div>
                            </div>

                            <h2 className="text-3xl font-instrument italic text-white mb-2">Wahel Gader</h2>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50">Développeur</span>
                            </div>

                            <div className="w-full space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <Globe size={16} />
                                    <span>France</span>
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors w-full group"
                                >
                                    <Mail size={16} />
                                    <span className="truncate">wahel.gader27@gmail.com</span>
                                    {copied ? <Check size={14} className="text-green-400 ml-auto" /> : <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />}
                                </button>
                            </div>

                            <div className="w-full grid grid-cols-2 gap-3">
                                <a
                                    href="/contact"
                                    className="col-span-2 py-3 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                                >
                                    <MessageSquare size={16} />
                                    Discutons
                                </a>
                                <a
                                    href="https://wahel-gader.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                                >
                                    <Globe size={16} />
                                    Site Web
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className="py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                                >
                                    <Mail size={16} />
                                    Email
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Links Grid */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* CODE & CRAFT Section */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold tracking-widest text-white/30 uppercase pl-2">Platformes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* GitHub Card - Featured */}
                                <a
                                    href="https://github.com/wgader27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all overflow-hidden"
                                >
                                    <div className="absolute right-0 top-0 p-6 opacity-20 transition-opacity group-hover:opacity-40">
                                        <Github size={100} strokeWidth={1} />
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                        <div className="p-3 bg-white/10 w-fit rounded-xl">
                                            <Github size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">GitHub</h4>
                                            <p className="text-white/50 text-sm">@wgader27</p>
                                        </div>
                                    </div>
                                </a>

                                {/* LinkedIn / Guestbook / Other */}
                                <a
                                    href="https://linkedin.com/in/wahel-gader-7463551ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all overflow-hidden"
                                >
                                    <div className="absolute right-0 top-0 p-6 opacity-20 transition-opacity group-hover:opacity-40">
                                        <Linkedin size={100} strokeWidth={1} />
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                        <div className="p-3 bg-[#0077b5]/20 text-[#0077b5] w-fit rounded-xl">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">LinkedIn</h4>
                                            <p className="text-white/50 text-sm">Réseau professionnel</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* CONNECT Section */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold tracking-widest text-white/30 uppercase pl-2">Social</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {socialLinks.filter(l => l.id !== 'github' && l.id !== 'linkedin').map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all group"
                                    >
                                        <div className="p-3 bg-white/5 rounded-xl text-white/70 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                            <link.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{link.label}</h4>
                                            <p className="text-xs text-white/40">{link.username}</p>
                                        </div>
                                        <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
                                    </a>
                                ))}

                                {/* Placeholder for future links */}
                                <div className="flex items-center justify-center p-5 rounded-2xl border border-dashed border-white/10 text-white/20 text-sm">
                                    Plus de réseaux bientôt...
                                </div>
                            </div>
                        </div>

                        {/* CTA CARD */}
                        <div className="relative p-8 md:p-12 rounded-[40px] overflow-hidden border border-white/10 mt-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl md:text-5xl font-instrument italic text-white mb-4">
                                    Un projet en tête ?
                                </h3>
                                <p className="text-white/60 max-w-lg mx-auto mb-8">
                                    Je suis disponible pour des missions freelance et des opportunités de stage. Créons quelque chose d'unique ensemble.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                                >
                                    Prendre rendez-vous <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

// Helper for CTA
import { ArrowRight } from "lucide-react";

export default Links;
