"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection - Componente de Impacto Inicial (The Command Center)
 * Responsável por capturar a atenção do recrutador em < 3 segundos.
 */
const HeroSection = () => {
  // Função para navegação interna suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Aura - Efeito Holográfico de Elite */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/5">
          Senior Front-end Engineer | AI Specialist
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Fernando Hugo <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Ferreira
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          Especialista em construir ecossistemas digitais de alta performance e inteligência de dados na <span className="text-white font-semibold italic text-blue-400">Anubis Tech</span>. 
          Dominando Next.js, FastAPI e integração com Gemini AI 
        </p>

        {/* CTA Group - Botões com Funcionalidade */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('arsenal')}
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Explore My Stack
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator System */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-widest text-white">System Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;