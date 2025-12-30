"use client"

import Link from "next/link";
import { ChevronRight, Copy } from "lucide-react";
import { Globe } from "@/components/magicui/globe";
import { useState } from "react";
import { motion } from "motion/react";

export const HeroSection = () => {
    const [copied, setCopied] = useState(false);
    const installCmd = "npm install bamboo-starter";

    const copyCommand = () => {
        navigator.clipboard.writeText(installCmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Globe Background - Absolute and centered/faded */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <Globe className="top-20" />
            </div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-esque ease
                className="relative z-10 container px-4 md:px-6 flex flex-col items-center gap-8 max-w-5xl fill-mode-both"
            >

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-xs font-semibold text-primary tracking-wide uppercase transition-all hover:bg-primary/20 hover:scale-105 cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Public Beta v1.0
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight text-white mb-2 text-shadow-lg"
                >
                    Index The <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient bg-300%">
                        Future
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed md:leading-normal"
                >
                    The lightweight, <strong>Spring Boot native</strong> indexer for high-performance EVM applications. Sync events, automate schemas, and scale effortlessy.
                </motion.p>

                {/* Buttons & Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
                >
                    <Link href="/docs" className="h-14 px-8 w-full sm:w-auto flex items-center justify-center rounded-full bg-primary text-black font-bold text-base hover:shadow-[0_0_20px_-5px_var(--color-primary)] hover:-translate-y-0.5 transition-all duration-300">
                        Start Building
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>

                    <button
                        onClick={copyCommand}
                        className="group h-14 px-6 w-full sm:w-auto flex items-center justify-between sm:justify-center gap-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-sm font-mono text-muted-foreground hover:text-white"
                    >
                        <span className="truncate">{installCmd}</span>
                        {copied ? <span className="text-green-400 text-xs font-sans">Copied!</span> : <Copy size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                    </button>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
};
