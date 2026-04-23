import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".step1", { opacity: 0 })
      .fromTo(".step2", { opacity: 0 }, { opacity: 1 })
      .to(".step2", { opacity: 0 })
      .fromTo(".step3", { opacity: 0 }, { opacity: 1 });

  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center bg-black text-white">

      <div className="text-center space-y-6">

        <h2 className="step1 text-3xl">Audit de votre réseau</h2>
        <h2 className="step2 text-3xl opacity-0">Conception sur mesure</h2>
        <h2 className="step3 text-3xl opacity-0">Déploiement sécurisé</h2>

      </div>

    </section>
  );
}