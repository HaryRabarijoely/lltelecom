import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Audit",
    desc: "Analyse des besoins et contraintes techniques",
  },
  {
    title: "Conception",
    desc: "Architecture réseau et planification",
  },
  {
    title: "Déploiement",
    desc: "Installation et configuration des équipements",
  },
  {
    title: "Maintenance",
    desc: "Suivi, support et optimisation continue",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6" id="process">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
          Notre process
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-500 to-purple-500/20" />

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-12">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/30">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}