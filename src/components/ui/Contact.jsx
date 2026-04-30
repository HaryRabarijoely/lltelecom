import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Parlons de votre projet
          </h2>

          <p className="text-gray-400 mb-8">
            Besoin d’un réseau performant ou d’une infrastructure fiable ?
            Contactez-nous pour discuter de votre projet.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 60 BD André Roussin </p>
            <p>.  13016 Marseille - FRANCE </p>
            <p>📞 +33 6 00 00 00 00</p>
            <p>✉️ contact@llt-telecom.fr</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-6"
        >

          <input
            type="text"
            placeholder="Nom"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-cyan-500" required
          />

          <textarea
            placeholder="Votre message"
            rows="4"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg font-semibold"
          >
            Envoyer
          </button>

        </motion.form>

      </div>
    </section>
  );
}