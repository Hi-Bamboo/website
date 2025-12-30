"use client"

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const CTASection = () => {
    return (
        <section className="py-24 px-4 w-full max-w-5xl">
            <SpotlightCard className="p-12 md:p-24 text-center rounded-[3rem] border border-primary/20 bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                    Ready to scale?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Join the developers building the next generation of EVM applications with Spring Boot.
                </p>

                <Link href="/docs" className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-primary text-black font-bold text-lg hover:shadow-[0_0_30px_-5px_var(--color-primary)] hover:-translate-y-1 transition-all duration-300">
                    Get Started Now
                    <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
            </SpotlightCard>
        </section>
    );
};
