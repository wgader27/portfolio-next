import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden font-outfit selection:bg-pink-500/30">
      {/* Background Ambience (Consistent with Hero) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="relative p-12 md:p-16 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl text-center overflow-hidden">

          {/* Inner Glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* 404 Typography */}
          <h1 className="text-8xl md:text-9xl font-instrument italic leading-none text-gradient-violet mb-2">
            404
          </h1>

          {/* Divider */}
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto mb-8" />

          {/* Professional Message */}
          <h2 className="text-2xl font-medium text-white mb-4">
            Page introuvable
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xs mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl shadow-violet-500/10 group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Retour à l'accueil
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default NotFound;
