"use client"

import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";

function GridBackground() {
  return (
    <div className="fixed inset-0 grid-background opacity-50" />
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background">
      <GridBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
            HackDay 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the future of AI innovation. Build, collaborate, and shape tomorrow&apos;s technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-400 dark:to-purple-400 dark:hover:from-blue-500 dark:hover:to-purple-500 text-white px-8 h-12"
            asChild
          >
            <Link href="/ideas">
              Explore Ideas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500/50 hover:border-blue-500 dark:border-blue-400/50 dark:hover:border-blue-400 h-12"
            asChild
          >
            <Link href="https://github.com">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground mb-4">Powered by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-transparent bg-clip-text">Microsoft</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-transparent bg-clip-text">NVIDIA</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-300 dark:to-blue-400 text-transparent bg-clip-text">Intel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
