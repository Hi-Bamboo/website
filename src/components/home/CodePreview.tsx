"use client"

import { StripeCodeBlock } from "@/components/home/StripeCodeBlock";

export const CodePreview = () => {
    return (
        <section className="py-32 flex flex-col items-center w-full bg-secondary/5 border-y border-white/5 backdrop-blur-sm">
            <div className="text-center mb-16 max-w-3xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">Developer First</h2>
                <p className="text-xl text-muted-foreground">
                    Built for speed. Write standard Spring components and let Bamboo handle the blockchain complexity.
                </p>
            </div>

            <div className="w-full max-w-7xl px-4">
                <StripeCodeBlock />
            </div>
        </section>
    );
};
