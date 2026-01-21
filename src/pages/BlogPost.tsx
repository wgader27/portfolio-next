import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Timer, Tag } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Markdown from 'react-markdown';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Article introuvable</h1>
                <Link to="/blog" className="px-6 py-3 bg-white text-black rounded-full font-bold">Retour au blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-white selection:bg-emerald-400/30 selection:text-emerald-50 font-outfit">
            <Navbar />

            {/* HEADER */}
            <header className="pt-32 pb-12 container px-4 mx-auto max-w-3xl relative">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                        <ArrowLeft size={14} />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest">Retour au Blog</span>
                </Link>

                {/* Categories & Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-medium">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-wider font-bold">
                        <span className="bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent">
                            {post.category}
                        </span>
                    </span>
                    <span className="text-white/40 flex items-center gap-2">
                        <Calendar size={12} />
                        {format(new Date(post.date), "dd MMM yyyy", { locale: fr })}
                    </span>
                    <span className="text-white/40 flex items-center gap-2">
                        <Timer size={12} />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-instrument italic font-normal text-white mb-0 leading-tight">
                    {post.title}
                </h1>
            </header>

            {/* HERO IMAGE */}
            <div className="container px-4 mx-auto max-w-4xl mb-16">
                <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <article className="container px-4 mx-auto max-w-3xl pb-32">
                <div className="prose prose-invert prose md:prose-lg max-w-none 
                    prose-headings:font-instrument prose-headings:italic prose-headings:text-white prose-headings:font-normal
                    prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6
                    prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:font-bold prose-h2:!bg-gradient-to-r prose-h2:!from-violet prose-h2:!to-pink prose-h2:!bg-clip-text prose-h2:!text-transparent
                    prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-5
                    prose-strong:!bg-gradient-to-r prose-strong:!from-violet prose-strong:!to-pink prose-strong:!bg-clip-text prose-strong:!text-transparent prose-strong:font-bold
                    prose-ul:my-4 prose-li:my-1 prose-li:marker:text-pink-400
                    prose-a:text-pink-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-pink-300 transition-colors
                    mb-16">
                    <Markdown>
                        {post.content}
                    </Markdown>
                </div>

                {/* TAGS */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm flex items-center gap-2">
                                <Tag size={14} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};


export default BlogPost;
