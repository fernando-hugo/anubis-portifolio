"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Database, Layout, Palette, Wind } from 'lucide-react';

const skills = [
  { name: "Next.js (App Router)", level: "95%", icon: <Layout size={18} /> },
  { name: "TypeScript / React 19", level: "90%", icon: <Code2 size={18} /> },
  { name: "UI/UX Design Systems", level: "88%", icon: <Palette size={18} /> },
  { name: "Tailwind CSS", level: "98%", icon: <Wind size={18} /> },
  { name: "Gemini 2.0 / LLM Integration", level: "85%", icon: <Cpu size={18} /> },
  { name: "FastAPI / Python", level: "80%", icon: <Database size={18} /> },
  { name: "Performance & SEO", level: "98%", icon: <Globe size={18} /> },
];

const TechArsenal = () => {
  return (
    // O ID "arsenal" é o que conecta ao Navbar
    <section id="arsenal" className="py-24 px-6 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 italic tracking-widest uppercase">The Arsenal</h2>
          <p className="text-slate-500 font-mono text-sm">Stack Tecnológica de Alta Performance</p>
        </div>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-blue-400 transition-colors">
                  {skill.icon}
                  <span className="font-mono text-sm font-bold uppercase tracking-tighter">{skill.name}</span>
                </div>
                <span className="text-xs font-mono text-slate-500">{skill.level}</span>
              </div>
              <div className="h-[2px] w-full bg-slate-900 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;