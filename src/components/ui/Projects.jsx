import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fibre from "../../assets/projects/fibre.jpg";
import datacenter from "../../assets/projects/coridor.jpg";
import reseau from "../../assets/projects/baie.jpg";
import Tilt from "react-parallax-tilt";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



// 🔹 Catégories
const categories = ["Tous", "Fibre", "Datacenter", "Réseau"];

// 🔹 Tes projets (remplace les images par les tiennes)
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
  
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".card");

    gsap.fromTo(
        cards,
        {
        opacity: 0,
        y: 100,
        },
        {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
        },
        }
    );
    }, []);

  useEffect(() => {
    const images = sectionRef.current.querySelectorAll(".parallax-img");

    images.forEach((img) => {
        gsap.to(img, {
        y: -80, // effet parallax
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
        });
    });

    return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    }, []);
    
  const sectionRef = useRef(null);  
  const [active, setActive] = useState("Tous");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] text-white py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10"
        >
          Nos réalisations
        </motion.h2>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (

            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={800}
              className="rounded-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelected(project)}
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="parallax-img w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>

                {/* CONTENT */}
                <div className="p-5 bg-[#111] group-hover:bg-[#151515] transition">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {project.desc}
                  </p>
                </div>

              </motion.div>
            </Tilt>

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