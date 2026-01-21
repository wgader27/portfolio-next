import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, Github, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import { format } from "date-fns";
import { fr } from "date-fns/locale";



const TOC_ITEMS = [
    { id: "overview", label: "Vue d'ensemble" },
    { id: "features", label: "Fonctionnalités" },
    { id: "tech", label: "Stack Technique" },
    { id: "challenges", label: "Challenges" },
    { id: "outcome", label: "Résultats" },
    { id: "gallery", label: "Galerie" }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" });

        TOC_ITEMS.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [id]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Projet introuvable</h1>
                <p className="text-white/60 mb-8">Le projet que vous cherchez n'existe pas ou a été déplacé.</p>
                <Link to="/projets" className="px-6 py-3 bg-white text-black rounded-full font-bold">Retour aux projets</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-white selection:bg-white/20 font-outfit">
            <Navbar />

            {/* --- HERO HEADER --- */}
            <section className="pt-28 pb-12 container mx-auto px-4 max-w-5xl relative" id="overview">
                {/* Background Glow */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none -z-10"
                    style={{ backgroundColor: `${project.color}20` }} // Dynamic glow color
                />

                <div className="mb-8">
                    <Link to="/projets" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Retour aux projets
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 text-center lg:text-left mb-6 lg:mb-0"
                    >
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-white/60">
                                {project.category}
                            </span>
                            <span
                                className="px-3 py-1 rounded-full border bg-opacity-10 text-xs font-bold tracking-widest uppercase capitalize"
                                style={{ borderColor: `${project.color}40`, backgroundColor: `${project.color}20`, color: project.color }}
                            >
                                {format(new Date(project.date), "MMM yyyy", { locale: fr })}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-instrument italic font-normal text-white mb-4 leading-[0.9]">
                            {project.title}
                        </h1>
                        <p className="text-lg text-white/60 font-light max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 hover:scale-105 transition-all flex items-center gap-2">
                                <Globe size={20} /> Voir le site
                            </a>
                            {project.repoLink && (
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2">
                                    <Github size={20} /> Code Source
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image - Liquid Glass Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 md:p-3 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-[24px]"
                    />
                </motion.div>
            </section>

            {/* --- CONTENT LAYOUT (Sidebar + Main) --- */}
            <section className="container mx-auto px-4 max-w-5xl pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* Sticky Sidebar (TOC) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 px-3">Table des matières</h3>
                            <ul className="space-y-1">
                                {TOC_ITEMS.map(item => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollTo(item.id)}
                                            className={cn(
                                                "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 relative overflow-hidden group",
                                                activeSection === item.id ? "text-white bg-white/5 font-medium" : "text-white/50 hover:text-white hover:bg-white/[0.02]"
                                            )}
                                        >
                                            {activeSection === item.id && (
                                                <motion.div layoutId="activeTOC" className="absolute left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: project.color }} />
                                            )}
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-24">
                        {/* KEY FEATURES */}
                        <div id="features" className="scroll-mt-32">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="w-12 h-1 bg-gradient-to-r rounded-full" style={{ from: project.color, to: `${project.color}80`, backgroundImage: `linear-gradient(to right, ${project.color}, ${project.color}80)` }} />
                                <h2 className="text-3xl font-instrument italic text-white">Fonctionnalités Clés</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-start gap-4"
                                    >
                                        <div className="p-2 rounded-full bg-white/5 mt-1" style={{ color: project.color }}>
                                            <Check size={16} />
                                        </div>
                                        <p className="text-white/80 font-light text-lg">{feature}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* TECH STACK */}
                        <div id="tech" className="scroll-mt-32">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                                <h2 className="text-3xl font-instrument italic text-white">Stack Technique</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.tech.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-white">
                                            <item.icon size={26} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{item.name}</h4>
                                            <p className="text-white/40 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CHALLENGES */}
                        <div id="challenges" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                                        <h2 className="text-3xl font-instrument italic text-white">Challenges & Apprentissages</h2>
                                    </div>
                                    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] leading-relaxed text-lg text-white/70 font-light">
                                        {project.challenges}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* OUTCOME */}
                        <div id="outcome" className="scroll-mt-32">
                            <div className="p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 relative overflow-hidden"
                                style={{ background: `linear-gradient(to bottom right, ${project.color}20, ${project.color}05)` }}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4">Résultat Final</h3>
                                    <p className="text-xl text-white/80 font-light leading-relaxed">
                                        {project.outcome}
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                            </div>
                        </div>

                        {/* GALLERY */}
                        <div id="gallery" className="scroll-mt-32">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                <h2 className="text-3xl font-instrument italic text-white">Galerie</h2>
                            </div>
                            <ProjectGallery images={project.gallery} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
