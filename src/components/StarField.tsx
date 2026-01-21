"use client";

import { useEffect, useRef } from "react";

const StarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            opacity: Math.random(),
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                // Draw
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Twinkle
                star.opacity += (Math.random() - 0.5) * 0.05;
                if (star.opacity < 0.1) star.opacity = 0.1;
                if (star.opacity > 1) star.opacity = 1;
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        animate();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none fade-in"
            style={{ opacity: 0.6 }}
        />
    );
};

export default StarField;
