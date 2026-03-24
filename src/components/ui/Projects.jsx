import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fibre from "../../assets/projects/fibre.jpg";
import datacenter from "../../assets/projects/coridor.jpg";
import reseau from "../../assets/projects/baie.jpg";
import electricite from "../../assets/projects/cdc.jpg";

// 🔹 catégories
const categories = ["Tous", "Fibre", "Datacenter", "Réseau"];

// 🔹 projets
const projectsData = [
  {
    title: "Déploiement fibre",
    category: "Fibre",
    desc: "Installation réseau fibre entreprise",
    image: fibre,
  },
  {
    title: "Datacenter",
    category: "Datacenter",
    desc: "Infrastructure serveur haute dispo",
    image: datacenter,
  },
  {
    title: "Réseau sécurisé",
    category: "Réseau",
    desc: "Architecture réseau sécurisée",
    image: reseau,
  },
];

export default function Projects() {
  const [active, setActive] = useState("Tous");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Nos réalisations
        </h2>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm ${
                active === cat
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-2xl overflow-hidden"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-[#111]">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-[#111] rounded-2xl overflow-hidden max-w-lg w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {selected.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {selected.desc}
                  </p>

                  <button
                    className="mt-6 px-4 py-2 bg-cyan-500 rounded-xl"
                    onClick={() => setSelected(null)}
                  >
                    Fermer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}