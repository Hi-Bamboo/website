"use client"

import Image from "next/image";
import { TerminalCode } from "@/components/TerminalCode";

export default function Home() {
  return (
    <div className="hero min-h-screen flex flex-wrap flex-col items-start gap-6 mt-20 lg:mt-10 px-7 justify-items text-center md:items-center">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-full text-left">
          <TerminalCode />
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="space-y-12 mt-10">
            <div className="flex gap-2">
              <button
                className="btn btn-primary"
                onClick={() => { window.location.href = '#' }}
              >
                Get Started
              </button>
              <button
                className="btn btn-link"
                onClick={() => window.open('#', '_blank')}
              >
                Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
