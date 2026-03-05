"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar - Sistema de Navegação Soberano
 * Gerencia o deslocamento entre as seções via Anchor Links.
 */
const Navbar = () => {
  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "Contato", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] px-6 py-4"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center bg-slate-900/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
        <span className="text-white font-bold tracking-tighter text-sm uppercase italic cursor-default">
          <span className="text-blue-500"></span>
        </span>
        
        <div className="flex gap-4 md:gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors font-mono font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;