import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, ArrowRight, MessageSquare, Linkedin, Github, Twitter, ArrowLeft, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Use Link for internal navigation

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [view, setView] = useState<'options' | 'message'>('options'); // Restored 'view' state
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Reset view on close
    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setView('options');
            setStatus('idle');
            setFormData({ name: '', email: '', message: '' });
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-end justify-center pointer-events-none">
                        <motion.div
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0.05, bottom: 1 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.y > 100 || info.velocity.y > 500) {
                                    handleClose();
                                }
                            }}
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-2xl relative pointer-events-auto"
                        >
                            <div
                                className="relative overflow-hidden rounded-t-[40px] p-8 pb-12 min-h-[500px]"
                                style={{
                                    background: 'rgba(15, 15, 15, 0.9)',
                                    boxShadow: `
                                        inset 0 1px 0 0 rgba(255,255,255, 0.15),
                                        0 -20px 50px -10px rgba(0,0,0, 0.5)
                                    `,
                                    backdropFilter: "blur(30px)",
                                }}
                            >
                                {/* Drag Handle */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full cursor-grab active:cursor-grabbing z-20" />

                                {/* Close Button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-6 right-6 p-2 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors z-20"
                                >
                                    <X size={20} />
                                </button>

                                <div className="mt-8 relative">
                                    <AnimatePresence mode="wait">
                                        {view === 'options' ? (
                                            <motion.div
                                                key="options"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-6"
                                            >
                                                <h2 className="text-3xl md:text-4xl font-instrument italic text-white text-left">Restons en contact</h2>

                                                {/* Main Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* Calendar Card - NOW LINKS TO /contact PAGE */}
                                                    <Link
                                                        to="/contact"
                                                        onClick={handleClose} // Close modal on navigation
                                                        className="group relative p-6 rounded-3xl transition-all hover:scale-[1.02] flex flex-col justify-between h-48 overflow-hidden"
                                                        style={{
                                                            background: 'rgba(255, 255, 255, 0.03)',
                                                            boxShadow: `
                                                                inset 0 0 0 1px rgba(255,255,255, 0.05),
                                                                inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
                                                                inset -1.5px -1px 0px -1px rgba(255,255,255, 0.2),
                                                                0 10px 30px -5px rgba(0,0,0, 0.5)
                                                            `,
                                                            backdropFilter: "blur(12px)",
                                                        }}
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 border border-white/10 relative z-10 shadow-lg mb-auto">
                                                            <Calendar size={24} />
                                                        </div>
                                                        <div className="relative z-10">
                                                            <h3 className="text-xl text-white font-medium mb-1">Réserver un appel</h3>
                                                            <p className="text-white/50 group-hover:text-white/70 transition-colors text-sm">30 min d'échange</p>
                                                        </div>
                                                    </Link>

                                                    {/* Email Card - Keeps existing behavior (mailto) */}
                                                    <a
                                                        href="mailto:wahel.gader27@gmail.com"
                                                        className="group relative p-6 rounded-3xl transition-all hover:scale-[1.02] flex flex-col justify-between h-48 overflow-hidden"
                                                        style={{
                                                            background: 'rgba(255, 255, 255, 0.03)',
                                                            boxShadow: `
                                                                inset 0 0 0 1px rgba(255,255,255, 0.05),
                                                                inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
                                                                inset -1.5px -1px 0px -1px rgba(255,255,255, 0.2),
                                                                0 10px 30px -5px rgba(0,0,0, 0.5)
                                                            `,
                                                            backdropFilter: "blur(12px)",
                                                        }}
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 border border-white/10 relative z-10 shadow-lg mb-auto">
                                                            <Mail size={24} />
                                                        </div>
                                                        <div className="relative z-10">
                                                            <h3 className="text-xl text-white font-medium mb-1">Email</h3>
                                                            <p className="text-white/50 group-hover:text-white/70 transition-colors text-sm">wahel.gader27@gmail.com</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                {/* Go to Message View */}
                                                <button
                                                    onClick={() => setView('message')}
                                                    className="w-full p-6 rounded-3xl flex items-center justify-between group transition-all hover:scale-[1.01]"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.02)',
                                                        boxShadow: `
                                                                inset 0 0 0 1px rgba(255,255,255, 0.05),
                                                                inset 2px 1px 0px -1px rgba(255,255,255, 0.2),
                                                                inset -1.5px -1px 0px -1px rgba(255,255,255, 0.2),
                                                                0 10px 30px -5px rgba(0,0,0, 0.3)
                                                            `,
                                                    }}
                                                >
                                                    <div className="flex items-center gap-4 text-white">
                                                        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                                            <MessageSquare size={24} />
                                                        </div>
                                                        <span className="text-xl font-medium">Ou écrivez-moi ici</span>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all">
                                                        <ArrowRight size={20} />
                                                    </div>
                                                </button>

                                                {/* Footer Socials */}
                                                <div className="flex items-center justify-center gap-6 text-white/40 pt-4">
                                                    <span className="text-xs uppercase tracking-widest">Mes Réseaux</span>
                                                    <div className="h-px w-10 bg-white/10" />
                                                    <div className="flex gap-4">
                                                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                                                        <a href="https://github.com/wgader27" className="hover:text-white transition-colors"><Github size={20} /></a>
                                                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="message"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="h-full flex flex-col"
                                            >
                                                {status === 'success' ? (
                                                    <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-6">
                                                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 ring-1 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                                            <CheckCircle2 size={40} />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-3xl font-instrument italic text-white mb-2">Message Envoyé !</h3>
                                                            <p className="text-white/50">Merci, je vous répondrai dans les plus brefs délais.</p>
                                                        </div>
                                                        <button
                                                            onClick={handleClose}
                                                            className="px-8 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
                                                        >
                                                            Fermer
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="flex items-center gap-4 mb-8">
                                                            <button
                                                                onClick={() => setView('options')}
                                                                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
                                                            >
                                                                <ArrowLeft size={16} />
                                                                Retour
                                                            </button>
                                                        </div>

                                                        <h2 className="text-4xl md:text-5xl font-instrument italic text-white mb-8 text-left">Envoyer un message</h2>

                                                        <form className="space-y-6" onSubmit={(e) => {
                                                            e.preventDefault();
                                                            const newErrors: Record<string, string> = {};

                                                            const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
                                                            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

                                                            if (!formData.name.trim()) newErrors.name = "Ce champ est requis.";
                                                            else if (!nameRegex.test(formData.name)) newErrors.name = "Format invalide.";

                                                            if (!formData.email.trim()) newErrors.email = "Ce champ est requis.";
                                                            else if (!emailRegex.test(formData.email)) newErrors.email = "Email invalide.";

                                                            if (!formData.message.trim()) newErrors.message = "Ce champ est requis.";
                                                            else if (formData.message.length < 10) newErrors.message = "Minimum 10 caractères.";
                                                            else if (formData.message.length > 500) newErrors.message = "Maximum 500 caractères.";

                                                            if (Object.keys(newErrors).length > 0) {
                                                                setErrors(newErrors);
                                                                return;
                                                            }

                                                            setErrors({});
                                                            setStatus('sending');

                                                            // EMAILJS CONFIGURATION
                                                            const serviceID = 'service_xlc18pq';
                                                            const templateID = 'template_jftfa48';
                                                            const publicKey = 'jWlBfiipNTeADWo5b';

                                                            const templateParams = {
                                                                from_name: formData.name,
                                                                from_email: formData.email,
                                                                message: formData.message,
                                                                to_email: 'wahel.gader27@gmail.com'
                                                            };

                                                            emailjs.send(serviceID, templateID, templateParams, publicKey)
                                                                .then((response) => {
                                                                    console.log('SUCCESS!', response.status, response.text);
                                                                    setStatus('success');
                                                                }, (err) => {
                                                                    console.log('FAILED...', err);
                                                                    setStatus('error');
                                                                });

                                                        }}>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <label className="text-sm font-medium text-white/60 ml-1">Nom complet</label>
                                                                        {errors.name && <span className="text-xs text-red-400 font-medium">{errors.name}</span>}
                                                                    </div>
                                                                    <input
                                                                        type="text"
                                                                        value={formData.name}
                                                                        disabled={status === 'sending'}
                                                                        onChange={(e) => {
                                                                            setFormData({ ...formData, name: e.target.value });
                                                                            if (errors.name) setErrors({ ...errors, name: '' });
                                                                        }}
                                                                        placeholder="ex: Jean Dupont"
                                                                        className={cn(
                                                                            "w-full bg-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none transition-all disabled:opacity-50",
                                                                            errors.name && "ring-1 ring-red-500/50 bg-red-500/5"
                                                                        )}
                                                                        style={{
                                                                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255, 0.1), inset 0 2px 5px rgba(0,0,0,0.2)',
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                                                                        {errors.email && <span className="text-xs text-red-400 font-medium">{errors.email}</span>}
                                                                    </div>
                                                                    <input
                                                                        type="email"
                                                                        value={formData.email}
                                                                        disabled={status === 'sending'}
                                                                        onChange={(e) => {
                                                                            setFormData({ ...formData, email: e.target.value });
                                                                            if (errors.email) setErrors({ ...errors, email: '' });
                                                                        }}
                                                                        placeholder="ex: jean@entreprise.com"
                                                                        className={cn(
                                                                            "w-full bg-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none transition-all disabled:opacity-50",
                                                                            errors.email && "ring-1 ring-red-500/50 bg-red-500/5"
                                                                        )}
                                                                        style={{
                                                                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255, 0.1), inset 0 2px 5px rgba(0,0,0,0.2)',
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="space-y-2">
                                                                <div className="flex justify-between">
                                                                    <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                                                                    {errors.message && <span className="text-xs text-red-400 font-medium">{errors.message}</span>}
                                                                </div>
                                                                <textarea
                                                                    value={formData.message}
                                                                    disabled={status === 'sending'}
                                                                    onChange={(e) => {
                                                                        setFormData({ ...formData, message: e.target.value });
                                                                        if (errors.message) setErrors({ ...errors, message: '' });
                                                                    }}
                                                                    placeholder="Comment puis-je vous aider ?"
                                                                    rows={6}
                                                                    className={cn(
                                                                        "w-full bg-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none transition-all resize-none disabled:opacity-50",
                                                                        errors.message && "ring-1 ring-red-500/50 bg-red-500/5"
                                                                    )}
                                                                    style={{
                                                                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255, 0.1), inset 0 2px 5px rgba(0,0,0,0.2)',
                                                                    }}
                                                                />
                                                            </div>

                                                            {status === 'error' && (
                                                                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-400 text-sm border border-red-500/20">
                                                                    <AlertCircle size={18} />
                                                                    Une erreur est survenue. Veuillez réessayer plus tard.
                                                                </div>
                                                            )}

                                                            <button
                                                                type="submit"
                                                                disabled={status === 'sending'}
                                                                className="w-full py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70 disabled:pointer-events-none"
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
                                                                {/* Hover Shine Effect */}
                                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                                <span className="relative z-10 flex items-center gap-3 mix-blend-overlay font-bold">
                                                                    {status === 'sending' ? (
                                                                        <>
                                                                            <Loader2 size={20} className="animate-spin" />
                                                                            Envoi en cours...
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            Envoyer le message
                                                                            <div className="bg-white/20 rounded-full p-1.5 text-white group-hover:rotate-45 transition-transform duration-300 border border-white/20 group-hover:bg-white/30">
                                                                                <Send size={16} strokeWidth={3} />
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </span>
                                                            </button>
                                                        </form>
                                                    </>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
