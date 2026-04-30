import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 h-screen ..." id="accueil">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#111111]" />

      {/* Glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Votre partenaire en <span className="text-cyan-400">solution Datacenter</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mt-6">
            Fibre optique, distribution électrique et infrastructures IT conçues pour la performance, la fiabilité et la sécurité de vos systèmes.
          </p>

          
          
          
        <p>
              Dans un environnement numérique en constante évolution, la performance des infrastructures est essentielle.
        </p>

          <p>
              Nous concevons, installons et intégrons des solutions complètes pour les datacenters et réseaux d’entreprise.
          </p>

          <p>
              Avec plus de 15 ans d’expérience, nous accompagnons nos clients avec une approche fiable, durable et sur mesure.
          </p>
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-xl font-semibold shadow-lg shadow-cyan-500/30">
              Demander un devis
            </button>

            <button className="px-6 py-3 border border-gray-700 hover:border-cyan-400 transition rounded-xl">
              Voir services
            </button>
          
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] flex items-center justify-center"
        >
          {/* Placeholder pour animation réseau */}
          <div className="w-[300px] h-[300px] border border-cyan-500/30 rounded-full animate-pulse" />
          <div className="absolute w-[200px] h-[200px] border border-purple-500/30 rounded-full animate-ping" />
        </motion.div>

      </div>
    </section>
  );
}