import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Calendar, Tag, Layers, X, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const POSTS_PER_PAGE = 6;

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedTopic]);

    const allTopics = useMemo(() => {
        const topics = new Set<string>();
        blogPosts.forEach(post => {
            if (post.category) topics.add(post.category);
            post.tags?.forEach(tag => topics.add(tag));
        });
        return Array.from(topics).sort();
    }, []);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTopic = selectedTopic ? (post.category === selectedTopic || post.tags?.includes(selectedTopic)) : true;
            return matchesSearch && matchesTopic;
        });
    }, [searchQuery, selectedTopic]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background text-white selection:bg-white/20 font-outfit">
            <Navbar />

            <main className="container px-4 mx-auto pt-32 pb-40 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 relative">

                    {/* SIDEBAR (Sticky on Desktop) */}
                    <aside className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-12">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 text-white/40 mb-4">
                                <Layers size={16} />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase">Exploration</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-instrument italic font-normal text-white mb-6">
                                Blog
                            </h1>
                            <p className="text-white/50 leading-relaxed font-light">
                                Une collection d'articles, de pensées et de tutoriels sur le développement web, le design et l'tech.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all font-outfit"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Topics */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Sujets</h3>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedTopic(null)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all border ${selectedTopic === null
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                                        }`}
                                >
                                    Tous
                                </button>
                                {allTopics.map(topic => (
                                    <button
                                        key={topic}
                                        onClick={() => setSelectedTopic(topic === selectedTopic ? null : topic)}
                                        className={`px-4 py-2 rounded-full text-sm transition-all border ${selectedTopic === topic
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                                            }`}
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* MAIN LIST */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-white/40">
                                {filteredPosts.length} article{filteredPosts.length > 1 ? "s" : ""} trouvé{filteredPosts.length > 1 ? "s" : ""}
                            </span>
                        </div>

                        <div className="space-y-6">
                            <AnimatePresence mode="popLayout">
                                {currentPosts.length > 0 ? (
                                    <>
                                        {currentPosts.map((post, index) => (
                                            <motion.article
                                                key={post.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="group relative"
                                            >
                                                <Link
                                                    to={`/blog/${post.id}`}
                                                    className="block p-5 md:p-6 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10 group-hover:translate-x-2"
                                                >
                                                    <div className="flex flex-col md:flex-row gap-6 items-start">

                                                        {/* Text Content (Left) */}
                                                        <div className="flex-1 order-2 md:order-1">
                                                            {/* Meta */}
                                                            <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold mb-3 uppercase tracking-wider">
                                                                <Calendar size={12} className="text-pink-400" />
                                                                <span className="bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent">
                                                                    {format(new Date(post.date), "dd MMMM yyyy", { locale: fr })}
                                                                </span>
                                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                                <span className="text-white/40">{post.readTime}</span>
                                                            </div>

                                                            {/* Title */}
                                                            <h2 className="text-xl md:text-3xl font-instrument italic text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet group-hover:to-pink transition-all leading-tight">
                                                                {post.title}
                                                            </h2>

                                                            {/* Excerpt */}
                                                            <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                                                                {post.excerpt}
                                                            </p>

                                                            {/* View Link */}
                                                            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-4 transition-all">
                                                                Lire l'article <ArrowRight size={14} />
                                                            </div>
                                                        </div>

                                                        {/* Image (Right) */}
                                                        <div className="w-full md:w-36 aspect-video md:aspect-[4/3] shrink-0 rounded-xl overflow-hidden order-1 md:order-2 relative border border-white/10">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.article>
                                        ))}

                                        {/* Pagination Controls */}
                                        {totalPages > 1 && (
                                            <div className="flex justify-center items-center gap-4 mt-12 pt-8 border-t border-white/5">
                                                <button
                                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                                    disabled={currentPage === 1}
                                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-colors"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>

                                                <span className="text-sm font-medium text-white/60">
                                                    Page <span className="text-white">{currentPage}</span> sur {totalPages}
                                                </span>

                                                <button
                                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                                    disabled={currentPage === totalPages}
                                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-colors"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="py-20 text-center border border-white/5 rounded-[32px] bg-white/[0.01]">
                                        <p className="text-white/40 text-lg">Aucun article ne correspond à votre recherche.</p>
                                        <button
                                            onClick={() => { setSearchQuery(""); setSelectedTopic(null); }}
                                            className="mt-4 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm transition-colors"
                                        >
                                            Effacer les filtres
                                        </button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
