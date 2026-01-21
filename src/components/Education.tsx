"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { useRef } from "react";

const educationData = [
  {
    id: 1,
    period: "2024 - 2027",
    degree: "Bachelor Métiers du Multimédia et de l'Internet",
    specialization: "Parcours développement web",
    school: "IUT de Limoges",
    description: "Formation polyvalente alliant développement et intégration web, design UX/UI, communication digitale et production audiovisuelle. Avec une spécialisation en développement web.",
    icon: GraduationCap,
    color: "#8b5cf6", // Violet
  },
  {
    id: 2,
    period: "2023 - 2024",
    degree: "Bachelor Informatique",
    specialization: "Parcours générale",
    school: "Clermont-Ferrand",
    description: "Approche approfondie du développement informatique, des algorithmes et de la programmation orientée objet, des bases de données, des systèmes et des réseaux informatiques.",
    icon: BookOpen,
    color: "#ec4899", // Pink
  },
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" ref={containerRef} className="py-8 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-white/40 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-outfit">
              Formation
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-instrument italic font-normal text-white">
            Mon Parcours <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">Scolaire</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line - Glass Tube Effect */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500 via-pink-500 to-blue-500 origin-top"
              style={{ height: "100%" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: typeof educationData[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Connecting Dot */}
      <div className={`absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 z-20 top-8 md:top-1/2 md:-translate-y-1/2`}>
        <div className="w-full h-full rounded-full bg-black border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] relative">
          <div className="absolute inset-0 bg-white/50 animate-ping rounded-full opacity-50" />
        </div>
      </div>

      {/* Content Spacer for Desktop */}
      <div className="flex-1 w-full hidden md:block" />

      {/* Card */}
      <div className={`flex-1 w-full pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
        <div
          className="group relative p-8 rounded-[32px] overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02]"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            boxShadow: `
                            inset 0 0 0 1px rgba(255,255,255, 0.05),
                            inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
                            0 20px 40px -10px rgba(0,0,0, 0.5)
                        `,
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Hover Gradient Bloom */}
          <div
            className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"
            style={{ background: `radial-gradient(circle at center, ${item.color}30, transparent 70%)` }}
          />

          <div className="flex flex-col gap-4 relative z-10">
            {/* Period Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase font-outfit text-white/80">
                <Calendar size={12} />
                {item.period}
              </span>
              <item.icon size={24} style={{ color: item.color }} />
            </div>

            {/* Titles */}
            <div>
              <h3 className="text-xl md:text-2xl font-instrument italic text-white mb-1">
                {item.degree}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1 font-outfit">
                {item.specialization}
              </p>
              <p className="text-base font-medium text-white/90" style={{ color: item.color }}>
                {item.school}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed font-outfit font-light border-t border-white/5 pt-4">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education;