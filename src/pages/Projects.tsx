import React, { useRef, useState } from "react";
import { ArrowRight, Eye, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ProjectData } from "@/data/projects";

const Projects = () => {
    const [filter, setFilter] = useState("all");

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sort projects by date (newest first)
    const filteredProjects = projectsData.filter(project => filter === "all" || project.category === filter).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="min-h-screen bg-background text-white selection:bg-white/20 overflow-x-hidden">
            <Navbar />

            <main className="container px-4 mx-auto pt-28 pb-20 max-w-5xl relative">

                {/* Header */}
                <div className="text-center mb-16 space-y-4 relative z-10">
                    <div className="flex items-center justify-center gap-4 text-white/40">
                        <span className="h-px w-8 bg-white/20"></span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase font-outfit">
                            Projets
                        </span>
                        <span className="h-px w-8 bg-white/20"></span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-instrument italic font-normal tracking-tighter leading-none text-white">
                        Projets <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">réalisés</span>
                    </h1>
                </div>

                {/* Central Vertical Timeline */}
                <div className="absolute top-[300px] bottom-20 left-1/2 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 relative z-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>

            </main>

            <Footer />
        </div>
    );
};

// Extracted Component for better interaction handling (Hover, Mouse tracking)
const ProjectItem = ({ project, index }: { project: ProjectData, index: number }) => {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
    };

    return (
        <motion.div
            className={`flex flex-col gap-8 w-full ${index % 2 !== 0 ? "md:mt-32" : ""}`}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {/* Timeline Dot (Desktop Only) - Manually aligned for all items */}
            <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-background z-20 mt-0`} style={{ top: 0 }}>
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>

            {/* Top Meta Info */}
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 uppercase font-outfit px-2">
                {/* Date & Category */}
                <div className="flex items-center gap-4 text-xs md:text-sm font-medium">
                    <span className="text-pink-400 font-bold uppercase tracking-wider">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-white/40">{format(new Date(project.date), "MMMM yyyy", { locale: fr })}</span>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-instrument italic text-white group-hover:text-pink-300 transition-colors -mb-4 z-10 px-2 lg:px-4">
                {project.title}
            </h2>

            {/* CARD CONTAINER - Liquid Glass Border */}
            <Link
                to={`/projets/${project.id}`}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={cardRef as any}
                className="group relative w-full rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden block"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
            >
                {/* Colored Header Area */}
                <div
                    className="w-full p-8 md:p-12 min-h-[280px] flex flex-col relative transition-colors duration-500"
                    style={{ backgroundColor: project.color }}
                >
                    <div className="flex justify-between items-start gap-8 z-10">
                        <p className="text-lg md:text-2xl font-outfit text-white font-medium leading-relaxed max-w-[80%]">
                            {project.shortDescription}
                        </p>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 z-20 relative">
                            <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Image Inset - Slides up on hover */}
                    <div className="mt-auto w-[90%] mx-auto relative rounded-t-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-4 translate-y-8">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover aspect-[16/10]"
                        />
                    </div>
                </div>

                {/* EYE TRACKER - Liquid Glass Style (White) */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: (mousePos.x * (cardRef.current?.offsetWidth || 0)) - ((cardRef.current?.offsetWidth || 0) / 2),
                                y: (mousePos.y * (cardRef.current?.offsetHeight || 0)) - ((cardRef.current?.offsetHeight || 0) / 2),
                            }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                            className="absolute inset-0 z-50 hidden md:flex items-center justify-center pointer-events-none"
                        >
                            <div className="relative flex items-center justify-center">
                                {/* Rotating Text */}
                                <motion.div
                                    className="absolute w-32 h-32"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                >
                                    <svg className="w-full h-full" viewBox="0 0 100 100" style={{ overflow: "visible" }}>
                                        <path id={`circlePathRef-${index}`} d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text className="text-[12px] font-bold uppercase tracking-[0.2em] font-outfit" fill="white">
                                            <textPath href={`#circlePathRef-${index}`} startOffset="0%">
                                                View Project • View Project •
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>

                                {/* Center Eye Button */}
                                <div className="w-20 h-20 rounded-full backdrop-blur-md bg-white/10 border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10">
                                    <Eye className="w-8 h-8 text-white relative z-10" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Link>

            {/* Tech Stack Pills (Below Card) */}
            <div className="flex flex-wrap gap-2 px-2">
                {project.tech.map((tech, i) => (
                    <div key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2.5 hover:bg-white/10 transition-colors">
                        <tech.icon size={18} className="text-white/60" />
                        <span className="text-sm font-medium tracking-wide text-white/90 uppercase font-outfit">{tech.name}</span>
                    </div>
                ))}
            </div>

        </motion.div>
    );
};

export default Projects;

