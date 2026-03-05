"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';

/**
 * ContactTerminal - Seção de Conversão Final
 * O ID "contact" permite que a Navbar e a Hero apontem para cá.
 */
const ContactTerminal = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 ml-4 flex items-center gap-2">
              <Terminal size={12} /> contact_session — bash
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-blue-400">
                <span className="text-emerald-500">➜</span> <span className="text-purple-400">Portifolio</span> <span className="text-slate-300">get-contact --executive</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <a href="https://www.linkedin.com/in/fernando-hugo-ferreira-b52162293/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Linkedin size={18} className="group-hover:text-blue-500" />
                  <span>/in/fernandohugoferreira</span>
                </a>
                <a href="mailto:fernandohugoferreira@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail size={18} className="group-hover:text-red-400" />
                  <span>fernandohugoferreira@gmail.com</span>
                </a>
                <a href="https://github.com/fernandohugo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Github size={18} className="group-hover:text-white" />
                  <span>github.com/fernandohugo</span>
                </a>
                <a href="https://wa.me/5511962104871" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <MessageSquare size={18} className="group-hover:text-emerald-400" />
                  <span>+55 11 96210-4871</span>
                </a>
              </div>

              <p className="text-slate-500 text-xs mt-8 italic">
                // System operational. Waiting for connection...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactTerminal;