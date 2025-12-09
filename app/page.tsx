"use client";

import { motion } from "framer-motion";
import FerrariScene from "./components/FerrariScene";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col lg:flex-row items-stretch">
        {/* Colonne texte */}
        <section className="w-full lg:w-5/12 px-6 lg:px-16 py-10 flex flex-col justify-center gap-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Scuderia Ferrari
            <span className="block text-(--ferrari-red)">
              SF23 Experience
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-300 max-w-xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Explore la monoplace de Formule&nbsp;1 Ferrari SF23 en 3D
            temps réel. Tourne autour, zoome sur les détails et laisse
            parler l’aérodynamique rouge.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="px-6 py-3 rounded-full text-sm font-medium bg-(--ferrari-red) hover:bg-(--ferrari-red-dark) transition shadow-lg shadow-red-900/40">
              Découvrir la SF23
            </button>
            <button className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-600 hover:border-zinc-300 transition">
              Fiche technique
            </button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 text-xs text-zinc-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-2 h-2 rounded-full bg-(--ferrari-yellow) animate-pulse" />
            <span>
              Modèle 3D interactif • Meilleure expérience sur desktop.
            </span>
          </motion.div>
        </section>

        <section className="w-full lg:w-7/12 h-[55vh] lg:h-auto">
          <FerrariScene />
        </section>
      </main>

    </div>
  );
}
