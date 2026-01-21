"use client";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandVscode,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandSass,
  IconDeviceMobile,
  IconBrandPhp,
  IconBrandSymfony,
  IconApi,
  IconBrandCpp,
  IconBrandCSharp,
} from "@tabler/icons-react";

const techStack = [
  { name: "HTML", icon: IconBrandHtml5, color: "#f97316" }, // Orange-500
  { name: "CSS", icon: IconBrandCss3, color: "#3b82f6" }, // Blue-500
  { name: "JavaScript", icon: IconBrandJavascript, color: "#facc15" }, // Yellow-400
  { name: "TypeScript", icon: IconBrandTypescript, color: "#60a5fa" }, // Blue-400
  { name: "Sass", icon: IconBrandSass, color: "#f472b6" }, // Pink-400
  { name: "Tailwind", icon: IconBrandTailwind, color: "#22d3ee" }, // Cyan-400
  { name: "React", icon: IconBrandReact, color: "#22d3ee" }, // Cyan-400
  { name: "Next.js", icon: IconBrandNextjs, color: "#ffffff" }, // White
  { name: ".NET MAUI", icon: IconDeviceMobile, color: "#9333ea" }, // Purple-600
  { name: "PHP", icon: IconBrandPhp, color: "#818cf8" }, // Indigo-400
  { name: "Symfony", icon: IconBrandSymfony, color: "#ffffff" }, // White
  { name: "Node.js", icon: IconBrandNodejs, color: "#22c55e" }, // Green-500
  { name: "API Rest", icon: IconApi, color: "#ef4444" }, // Red-500
  { name: "C++", icon: IconBrandCpp, color: "#2563eb" }, // Blue-600
  { name: "C#", icon: IconBrandCSharp, color: "#9333ea" }, // Purple-600
  { name: "Python", icon: IconBrandPython, color: "#eab308" }, // Yellow-500
  { name: "Figma", icon: IconBrandFigma, color: "#c084fc" }, // Purple-400
  { name: "GitHub", icon: IconBrandGithub, color: "#ffffff" }, // White
  { name: "Docker", icon: IconBrandDocker, color: "#3b82f6" }, // Blue-500
  { name: "VS Code", icon: IconBrandVscode, color: "#60a5fa" }, // Blue-400
];

const TechCard = ({ tech }: { tech: (typeof techStack)[0] }) => (
  <div
    className="group relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-2xl mx-3 transition-all duration-500 hover:scale-110"
    style={{
      background: 'rgba(255, 255, 255, 0.03)',
      boxShadow: `
            inset 0 0 0 1px rgba(255,255,255, 0.05),
            inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
            0 10px 20px -5px rgba(0,0,0, 0.5)
        `,
      backdropFilter: "blur(12px)",
    }}
  >
    {/* Hover Gradient Bloom */}
    <div
      className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
      style={{ background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)` }}
    />

    <tech.icon size={40} style={{ color: tech.color }} className="mb-2 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
      {tech.name}
    </p>
  </div>
);

export function TechStack() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          {/* Header styled like Education.tsx */}
          <div className="flex items-center justify-center gap-4 text-white/40 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-outfit">
              Compétences
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-instrument italic font-normal text-white">
            Stack <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">Technique</span>
          </h2>
          {/* <p className="mt-8 text-white/50 max-w-2xl mx-auto font-outfit font-light text-lg">
            Technologies et outils que j'utilise au quotidien pour créer des applications web.
          </p> */}
        </motion.div>

        {/* Marquee supérieur */}
        <div className="relative mb-8">
          <Marquee pauseOnHover speed="slow" className="py-4">
            {techStack.slice(0, 10).map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </Marquee>
        </div>

        {/* Marquee inférieur (reverse) */}
        <div className="relative">
          <Marquee pauseOnHover speed="slow" reverse className="py-4">
            {techStack.slice(10).map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}

export default TechStack;
