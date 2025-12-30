"use client"

import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { CodePreview } from "@/components/home/CodePreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center bg-background dotted-bg overflow-x-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center w-full max-w-7xl">
        <HeroSection />
        <CodePreview />
        <FeatureGrid />
        <CTASection />
      </div>
    </div>
  );
}
