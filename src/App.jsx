import React from "react";
import Hero from "./components/ui/Hero";
import Services from "./components/ui/Services";
import Navbar from "./components/ui/Navbar";
import Process from "./components/ui/Process";
import Projects from "./components/ui/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Projects />
    </div>
  );
}

export default App;