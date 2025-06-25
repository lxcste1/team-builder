import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Armá tus equipos en segundos ⚽
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Subí la lista de jugadores, ajustá posiciones y generá equipos
          balanceados automáticamente.
        </p>
        <Link href="/team-builder">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            ¡Empezar ahora!
          </Button>
        </Link>
      </div>
    </section>
  );
};
