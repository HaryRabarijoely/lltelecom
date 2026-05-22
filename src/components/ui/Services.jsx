import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Fibre optique",
    desc: "Installation et maintenance de réseaux fibre haute performance",
  },
  {
    title: "Datacenter",
    desc: "Conception et optimisation d’infrastructures IT",
  },
  {
    title: "Réseaux",
    desc: "Déploiement d’architectures réseau sécurisées",
  },
  {
    title: "Électricité",
    desc: "Distribution électrique adaptée aux environnements IT",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6" id="services">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Nos services
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30"
            >
              {/* Card */}
              <div className="bg-[#111111] rounded-2xl p-6 h-full flex flex-col justify-between transition duration-300 group-hover:bg-[#151515]">

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition">
                  → En savoir plus
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}