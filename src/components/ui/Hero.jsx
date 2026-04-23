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
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Infrastructure télécom <br />
            <span className="text-cyan-400">nouvelle génération</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-gray-400 text-lg"
          >
            Fibre optique, datacenter et réseaux conçus pour la performance
            et la fiabilité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-xl font-semibold shadow-lg shadow-cyan-500/30">
              Demander un devis
            </button>

            <button className="px-6 py-3 border border-gray-700 hover:border-cyan-400 transition rounded-xl">
              Voir services
            </button>
          </motion.div>
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