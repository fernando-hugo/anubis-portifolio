import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import CodeParticles from '@/components/CodeParticles';
import ProjectGrid from '@/components/ProjectGrid';
import TechArsenal from '@/components/TechArsenal';
import ContactTerminal from '@/components/ContactTerminal';

/**
 * Main Entry Point - Portfólio de Elite Anubis Tech
 * Implementação de Scroll Snap para navegação por seções.
 */
export default function Home() {
  return (
    /* h-screen e snap-y forçam o scroll a travar verticalmente */
    <main className="relative h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth selection:bg-blue-500/30 bg-slate-950">
      
      {/* Camada de Partículas (Mantida com Z-index 50 conforme validado) */}
      <CodeParticles />

      <Navbar />

      {/* Cada seção agora recebe a classe 'snap-start' e 'h-screen' */}
      <section className="snap-start h-screen w-full">
        <HeroSection />
      </section>

      <section id="projects" className="snap-start h-screen w-full">
        <ProjectGrid />
      </section>

      <section className="snap-start h-screen w-full">
        <TechArsenal />
      </section>

      <section className="snap-start h-screen w-full">
        <ContactTerminal />
      </section>
      
    </main>
  );
}