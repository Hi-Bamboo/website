"use client"

import { Zap, Database, Globe, RefreshCcw, Share2, Feather } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const features = [
    {
        icon: <Feather size={24} />,
        title: "Spring Boot Native",
        desc: "Seamless integration with your existing Spring ecosystem. Just add the starter dependency and you're ready to go.",
        className: "md:col-span-2"
    },
    {
        icon: <Database size={24} />,
        title: "Auto Schema",
        desc: "Automatically creates database tables for your contract events. No manual SQL DDL scripts required.",
        className: ""
    },
    {
        icon: <Globe size={24} />,
        title: "EVM Compatible",
        desc: "Works with Ethereum, BSC, Polygon, and any EVM-compliant chain via standard JSON-RPC.",
        className: ""
    },
    {
        icon: <RefreshCcw size={24} />,
        title: "Checkpoint Recovery",
        desc: "Reliable block tracking with automatic checkpoint persistence in MySQL. Never miss a block on restart.",
        className: "md:col-span-2"
    },
    {
        icon: <Share2 size={24} />,
        title: "Event Publishing",
        desc: "Dispatches blockchain events as Spring ApplicationEvents. Consume them easily with @EventListener.",
        className: "md:row-span-2"
    },
    {
        icon: <Zap size={24} />,
        title: "Lightweight",
        desc: "Minimal footprint. Run as a background task within your application.",
        className: ""
    }
];

export const FeatureGrid = () => {
    return (
        <section className="py-24 px-4 w-full max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                    Powerful Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to build robust blockchain applications in Java.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <SpotlightCard key={i} className={`p-8 h-full flex flex-col ${f.className || ''}`}>
                        <div className="mb-6 text-primary p-3 bg-primary/10 w-fit rounded-xl border border-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            {f.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{f.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-light">{f.desc}</p>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};
