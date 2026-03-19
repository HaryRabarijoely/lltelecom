import React from "react";
import { motion } from "framer-motion";
import fibre from "../../assets/projects/fibre.jpg";
import datacenter from "../../assets/projects/coridor.jpg";
import reseau from "../../assets/projects/baie.jpg";
import electricite from "../../assets/projects/cdc.jpg";

const projects = [
  {
    title: "Déploiement fibre",
    desc: "Installation Pré-cabling",
    image: fibre,
  },
  {
    title: "Datacenter",
    desc: "Infrastructure serveur haute disponibilité",
    image: reseau,
  },
  {
    title: "Réseau sécurisé",
    desc: "Architecture réseau sécurisée",
    image: datacenter,
  },
  {
    title: "Installation électrique",
    desc: "Système électrique pour IT",
    image: electricite,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Nos réalisations
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {project.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}