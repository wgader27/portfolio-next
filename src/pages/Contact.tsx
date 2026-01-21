"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, MessageSquare, Send, Loader2, CheckCircle2, Clock, Globe, ChevronLeft, ChevronRight, Video, CalendarPlus } from "lucide-react";
import emailjs from '@emailjs/browser';
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfToday } from "date-fns";
import { fr } from "date-fns/locale";

// --- CONFIGURATION ---
const STATIC_MEET_LINK = "https://meet.google.com/pqx-xnqg-cxg";

const Contact = () => {
    const [activeTab, setActiveTab] = useState<'booking' | 'message'>('booking');
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState<'date' | 'form'>('date');

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [generatedLink, setGeneratedLink] = useState<string>('');

    const days = eachDayOfInterval({ start: startOfMonth(currentMonth), end: endOfMonth(currentMonth) });
    const firstDay = startOfMonth(currentMonth).getDay();
    const emptyDays = Array(firstDay === 0 ? 6 : firstDay - 1).fill(null);
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

    const generateGoogleCalendarLink = (isAdmin: boolean) => {
        if (!selectedDate || !selectedTime) return '';

        const [hours, minutes] = selectedTime.split(':').map(Number);
        const startDate = new Date(selectedDate);
        startDate.setHours(hours, minutes);
        const endDate = new Date(startDate);
        endDate.setMinutes(minutes + 30);

        const formatGCalDate = (date: Date) => {
            return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
        };

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: `RDV: Wahel x ${formData.name}`,
            dates: `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`,
            details: `Rendez-vous confirmé avec ${formData.name}.\nEmail: ${formData.email}\nNotes: ${formData.message}\n\nLien Google Meet: ${STATIC_MEET_LINK}`,
            location: STATIC_MEET_LINK,
        });

        // CRITICAL for Automation:
        if (isAdmin) {
            params.append('add', formData.email);
        }

        return `https://calendar.google.com/calendar/render?${params.toString()}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!formData.name.trim()) newErrors.name = "Requis";
        if (!formData.email.trim()) newErrors.email = "Requis";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalide";
        if (activeTab === 'message' && !formData.message.trim()) newErrors.message = "Requis";

        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

        setStatus('sending');

        // Generate Links
        const adminLink = generateGoogleCalendarLink(true);
        const clientLink = generateGoogleCalendarLink(false);
        setGeneratedLink(clientLink);

        const serviceID = 'service_xlc18pq';
        const templateID = 'template_jftfa48';
        const publicKey = 'jWlBfiipNTeADWo5b';

        // 1. ADMIN EMAIL
        const adminBody = activeTab === 'booking'
            ? `📅 NOUVELLE RÉSERVATION\n\n` +
            `👤 Client: ${formData.name}\n` +
            `📧 Email: ${formData.email}\n` +
            `🗓 Date: ${selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}\n` +
            `⏰ Heure: ${selectedTime}\n` +
            `📝 Note: ${formData.message || "Aucune"}\n\n` +
            `Lien Google Meet : ${STATIC_MEET_LINK}\n\n` +
            `🔴 ACTION REQUISE POUR VALIDER LE RDV :\n` +
            `Cliquez ci-dessous puis sur "Enregistrer" (Google vous proposera d'envoyer l'invitation au client) :\n${adminLink}`
            : `💬 NOUVEAU MESSAGE\n\nDe: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;

        const adminParams = {
            // Target
            to_email: 'wahel.gader27@gmail.com',
            to_name: 'Wahel',

            // Sender (The Client) - REDUNDANT PARAMS to ensuring one hits
            from_name: formData.name,
            name: formData.name,       // Fallback for {{name}}
            sender: formData.name,     // Fallback for {{sender}}

            from_email: formData.email,
            email: formData.email,     // Fallback for {{email}}
            reply_to: formData.email,

            // Content
            subject: activeTab === 'booking' ? `RDV Confirmé : ${formData.name}` : `Message de ${formData.name}`,
            message: adminBody
        };

        // 2. CLIENT EMAIL
        const clientBody = activeTab === 'booking'
            ? `Bonjour ${formData.name},\n\n` +
            `Votre demande de rendez-vous pour le ${selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''} à ${selectedTime} a bien été reçue.\n\n` +
            `📍 Lien Google Meet de la réunion : ${STATIC_MEET_LINK}\n\n` +
            `En attendant la confirmation officielle (invitation Google Agenda), vous pouvez déjà ajouter ce créneau à votre calendrier :\n${clientLink}\n\n` +
            `À très vite,\nWahel Gader`
            : `Bonjour ${formData.name},\n\nJ'ai bien reçu votre message et je reviens vers vous dès que possible.\n\nCordialement,\nWahel Gader`;

        const clientParams = {
            // Target
            to_email: formData.email,
            to_name: formData.name,

            // Sender (Wahel/Admin) - REDUNDANT PARAMS
            from_name: 'Wahel Gader',
            name: 'Wahel Gader',         // Fallback
            sender: 'Wahel Gader',       // Fallback

            from_email: 'wahel.gader27@gmail.com',
            email: 'wahel.gader27@gmail.com', // Fallback
            reply_to: 'wahel.gader27@gmail.com',

            // Content
            subject: activeTab === 'booking' ? `Confirmation de RDV - Wahel Gader` : `Bien reçu - Wahel Gader`,
            message: clientBody
        };

        try {
            await Promise.all([
                emailjs.send(serviceID, templateID, adminParams, publicKey),
                emailjs.send(serviceID, templateID, clientParams, publicKey)
            ]);
            setStatus('success');
        } catch (error) {
            console.error("Email Error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 relative overflow-x-hidden font-outfit">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4 block font-outfit">Contact</span>
                    <h1 className="text-5xl md:text-7xl font-instrument italic text-white mb-8 pb-2">
                        Discutons <span className="font-instrument bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent not-italic">ensemble</span>
                    </h1>

                    <div className="inline-flex p-1.5 rounded-full bg-black/40 border border-white/5 backdrop-blur-xl relative">
                        <motion.div layout className="absolute h-[calc(100%-12px)] top-1.5 rounded-full bg-white/10 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]" initial={false} animate={{ left: activeTab === 'booking' ? '6px' : '50%', width: 'calc(50% - 6px)' }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                        <button onClick={() => { setActiveTab('booking'); setStatus('idle'); }} className={cn("relative px-8 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 z-10 min-w-[140px] justify-center font-outfit", activeTab === 'booking' ? "text-white" : "text-white/40 hover:text-white/70")}>
                            <CalendarIcon size={16} /> Réserver
                        </button>
                        <button onClick={() => { setActiveTab('message'); setStatus('idle'); }} className={cn("relative px-8 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 z-10 min-w-[140px] justify-center font-outfit", activeTab === 'message' ? "text-white" : "text-white/40 hover:text-white/70")}>
                            <MessageSquare size={16} /> Message
                        </button>
                    </div>
                </motion.div>

                <motion.div layout transition={{ duration: 0.5, type: 'spring' }} className="w-full max-w-5xl">
                    <AnimatePresence mode="wait">
                        {activeTab === 'booking' ? (
                            <motion.div key="booking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-10 border border-white/5 rounded-[32px] overflow-hidden bg-[#080808]/60 backdrop-blur-2xl shadow-2xl relative">
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-0" />

                                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] relative z-10 flex flex-col">
                                    <div>
                                        <div className="w-14 h-14 rounded-full mb-6 bg-[url('/public/pp_github.png')] bg-cover bg-center" />
                                        <h3 className="text-white/40 text-sm font-medium mb-2 font-outfit uppercase tracking-wider">Wahel Gader</h3>
                                        <h2 className="text-3xl font-instrument italic text-white mb-8">Meeting</h2>
                                        <div className="space-y-5">
                                            <div className="flex items-center gap-4 text-white/60 text-sm"><Clock size={18} /> 15 / 30 min</div>
                                            <div className="flex items-center gap-4 text-white/60 text-sm"><Video size={18} /> Google Meet</div>
                                            <div className="flex items-center gap-4 text-white/60 text-sm"><Globe size={18} /> Europe/Paris</div>
                                        </div>
                                    </div>
                                    {selectedDate && selectedTime && (
                                        <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-outfit">Sélectionné</div>
                                            <div className="text-white font-medium font-instrument italic text-lg leading-tight">{format(selectedDate, 'EEEE d MMMM', { locale: fr })}</div>
                                            <div className="text-white/60 mt-1 font-outfit">{selectedTime}</div>
                                        </div>
                                    )}
                                </div>

                                <div className="lg:col-span-7 p-0 flex flex-col md:flex-row h-full min-h-[550px] relative z-10">
                                    {status === 'success' ? (
                                        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-white/[0.01]">
                                            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 ring-1 ring-green-500/20 shadow-[0_0_40px_rgba(74,222,128,0.1)] mb-8">
                                                <CheckCircle2 size={48} />
                                            </div>
                                            <h3 className="text-3xl font-instrument italic text-white mb-4">Demande Envoyée !</h3>
                                            <p className="text-white/50 max-w-md mx-auto mb-8 font-outfit leading-relaxed">
                                                J'ai bien reçu votre demande. Un email de confirmation contenant le lien Google Meet vous a été envoyé.
                                            </p>

                                            <div className="flex flex-col gap-3 w-full max-w-xs">
                                                <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all font-outfit">
                                                    <CalendarPlus size={18} /> Ajouter à Google Agenda
                                                </a>
                                                <button onClick={() => { setStatus('idle'); setStep('date'); setFormData({ name: '', email: '', message: '' }); }} className="px-6 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all font-outfit text-sm">
                                                    Retour au calendrier
                                                </button>
                                            </div>
                                        </div>
                                    ) : step === 'date' ? (
                                        <>
                                            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-white/5">
                                                <div className="flex items-center justify-between mb-8">
                                                    <h3 className="text-2xl font-instrument italic capitalize text-white">{format(currentMonth, 'MMMM yyyy', { locale: fr })}</h3>
                                                    <div className="flex gap-2">
                                                        <button onClick={prevMonth} className="p-2 rounded-xl border border-white/5 text-white/40 hover:text-white hover:bg-white/5 transition-colors"><ChevronLeft size={20} /></button>
                                                        <button onClick={nextMonth} className="p-2 rounded-xl border border-white/5 text-white/40 hover:text-white hover:bg-white/5 transition-colors"><ChevronRight size={20} /></button>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-7 mb-4 text-center">{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => <div key={day} className="text-[11px] font-semibold text-white/30 uppercase tracking-widest py-2 font-outfit">{day}</div>)}</div>
                                                <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                                                    {emptyDays.map((_, i) => <div key={`empty-${i}`} />)}
                                                    {days.map(day => {
                                                        const isSelected = selectedDate && isSameDay(day, selectedDate);
                                                        const isCurrentMonth = isSameMonth(day, currentMonth);
                                                        const isCurrentDay = isToday(day);
                                                        const isPast = isBefore(day, startOfToday());

                                                        return (
                                                            <div key={day.toISOString()} className="aspect-square p-0.5">
                                                                <button
                                                                    disabled={isPast || !isCurrentMonth}
                                                                    onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                                                                    className={cn(
                                                                        "w-full h-full rounded-2xl flex items-center justify-center text-sm transition-all relative group font-outfit",
                                                                        (!isCurrentMonth || isPast) && "opacity-20 pointer-events-none cursor-not-allowed",
                                                                        isSelected ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-100" : "text-white/80 hover:bg-white/10 hover:scale-105",
                                                                        isCurrentDay && !isSelected && "text-white font-bold ring-1 ring-white/30 bg-white/5"
                                                                    )}
                                                                >
                                                                    {format(day, 'd')}
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className="w-full md:w-56 lg:w-64 p-6 overflow-y-auto custom-scrollbar bg-white/[0.01]">
                                                <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6 font-outfit">{selectedDate ? format(selectedDate, 'EEEE d', { locale: fr }) : 'Date requise'}</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {timeSlots.map((time, idx) => {
                                                        const [hours, minutes] = time.split(':').map(Number);
                                                        const now = new Date();
                                                        const isPastTime = selectedDate && isToday(selectedDate) && (hours < now.getHours() || (hours === now.getHours() && minutes < now.getMinutes()));

                                                        if (isPastTime) return null; // Don't show past times

                                                        return (
                                                            <div key={time} className="relative group" style={{ animationDelay: `${idx * 50}ms` }}>
                                                                {selectedTime === time ? (
                                                                    <div className="flex gap-2 animate-in slide-in-from-left-2 duration-300">
                                                                        <button className="flex-1 py-3 text-sm font-medium bg-white/10 text-white/50 border border-white/5 rounded-xl cursor-default font-outfit">{time}</button>
                                                                        <button onClick={() => setStep('form')} className="flex-1 py-3 text-sm font-semibold bg-white text-black rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all font-outfit">Suivant</button>
                                                                    </div>
                                                                ) : (
                                                                    <button onClick={() => setSelectedTime(time)} className="w-full py-3 text-sm font-medium border border-white/5 rounded-xl text-white/60 hover:border-white/20 hover:bg-white/5 hover:text-white transition-all duration-200 font-outfit">{time}</button>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex-1 p-8 md:p-12 animate-in fade-in slide-in-from-right-8 bg-white/[0.01]">
                                            <button onClick={() => setStep('date')} className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-8 font-outfit">
                                                <div className="p-1.5 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors"><ChevronLeft size={12} /></div> Retour au calendrier
                                            </button>
                                            <h3 className="text-3xl font-instrument italic text-white mb-8">Vos dernières infos</h3>
                                            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-white/60 font-outfit pl-1">Nom complet</label>
                                                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Votre nom" className={cn("w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all font-outfit placeholder:text-white/10", errors.name && "border-red-500/50 bg-red-500/5")} />
                                                    {errors.name && <span className="text-xs text-red-400 pl-1">{errors.name}</span>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-white/60 font-outfit pl-1">Email professionnel</label>
                                                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="nom@entreprise.com" className={cn("w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all font-outfit placeholder:text-white/10", errors.email && "border-red-500/50 bg-red-500/5")} />
                                                    {errors.email && <span className="text-xs text-red-400 pl-1">{errors.email}</span>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-white/60 font-outfit pl-1">Notes (Optionnel)</label>
                                                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} placeholder="Contexte du rendez-vous..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all resize-none font-outfit placeholder:text-white/10" />
                                                </div>
                                                <button type="submit" disabled={status === 'sending'} className="w-full py-4 rounded-full bg-white/10 border border-white/10 text-white font-semibold text-lg hover:bg-white/20 hover:border-white/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4 font-outfit backdrop-blur-md">
                                                    {status === 'sending' ? <Loader2 className="animate-spin" /> : 'Confirmer le rendez-vous'}
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-2xl mx-auto">
                                {status === 'success' ? (
                                    <div className="p-12 rounded-[32px] bg-white/[0.02] border border-white/5 text-center backdrop-blur-xl">
                                        <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 ring-1 ring-green-500/20 shadow-[0_0_40px_rgba(74,222,128,0.1)] mx-auto mb-6"><CheckCircle2 size={40} /></div>
                                        <h3 className="text-4xl font-instrument italic text-white mb-4">Message Envoyé !</h3>
                                        <p className="text-white/50 mb-8 font-outfit">Merci de m'avoir contacté. Je reviens vers vous très vite.</p>
                                        <button onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }} className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-outfit">Envoyer un autre</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 rounded-[40px] bg-[#0a0a0a]/60 border border-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <h2 className="text-3xl font-instrument italic text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">Laissez-moi un message</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2 text-left">
                                                <label className="text-sm font-medium text-white/50 pl-2 font-outfit">Votre nom</label>
                                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jean Dupont" className={cn("w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/10 font-outfit", errors.name && "border-red-500/50 bg-red-500/5")} />
                                            </div>
                                            <div className="space-y-2 text-left">
                                                <label className="text-sm font-medium text-white/50 pl-2 font-outfit">Email</label>
                                                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jean@exemple.com" className={cn("w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/10 font-outfit", errors.email && "border-red-500/50 bg-red-500/5")} />
                                            </div>
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <label className="text-sm font-medium text-white/50 pl-2 font-outfit">Message</label>
                                            <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Comment puis-je vous aider ?" className={cn("w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all resize-none placeholder:text-white/10 font-outfit", errors.message && "border-red-500/50 bg-red-500/5")} />
                                        </div>
                                        <button type="submit" disabled={status === 'sending'} className="w-full py-4 rounded-full bg-white/10 border border-white/10 text-white font-semibold text-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:bg-white/20 mt-4 font-outfit backdrop-blur-md">
                                            {status === 'sending' ? (<> <Loader2 className="animate-spin" /> Envoi... </>) : (<> Envoyer le message <Send size={18} /> </>)}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
