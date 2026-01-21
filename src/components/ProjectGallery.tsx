
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGalleryProps {
    images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 md:p-3 shadow-2xl group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[32px]" />

                <div className="overflow-hidden h-full rounded-[24px]" ref={emblaRef}>
                    <div className="flex h-full cursor-pointer">
                        {images.map((src, index) => (
                            <div
                                className="flex-[0_0_100%] min-w-0 relative"
                                key={index}
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-20"
                    onClick={scrollPrev}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-20"
                    onClick={scrollNext}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === selectedIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                            )}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>

            {/* LIGHTBOX OVERLAY */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        <button
                            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            onClick={prevLightboxImage}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={images[lightboxIndex]}
                            alt="Full View"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl pointer-events-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />

                        <button
                            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            onClick={nextLightboxImage}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectGallery;
