"use client";

import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(74, 222, 128, 0.25)", // Default electric green glow
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative rounded-3xl border border-border/50 bg-card/40 overflow-hidden transition-colors duration-300 group",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};
