import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          ¿Listo para armar el equipo perfecto?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Dejá que nuestro algoritmo haga el trabajo pesado por vos
        </p>
        <Link href="/team-builder">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Armar Equipos
          </Button>
        </Link>
      </div>
    </section>
  );
};
