/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  Cpu, Database, Globe, Shield, Zap, Layout, Code2, Server, 
  Layers, Terminal, MessageSquare, LineChart, Activity, Smartphone 
} from "lucide-react";

/**
 * ANUBIS SOVEREIGN CAROUSEL - V12.0 (FULL TECH EXPOSURE)
 * VOCABULÁRIO TÉCNICO:
 * 1. Full-Stack Granularity: Exposição completa de todas as camadas de software envolvidas.
 * 2. High-Fidelity Copy: Descrição detalhada sem perda de contexto técnico ou comercial.
 * 3. Component Orchestration: Gerenciamento de múltiplos estados de UI em um ambiente 3D.
 */

const PILLARS_DATA = [
  { 
    id: 1, 
    title: "Anubis Precision Health", 
    img: "/pillars/precision-health.jpg",
    full: "Surgical Intelligence OS. Plataforma que orquestra todo o ciclo de vida de uma cirurgia. IA Gemini 3 para mapeamento de códigos TUSS com precisão cirúrgica e conversão de laudos em dados estruturados. Faturamento automático e auto-delivery de relatórios via SMTP para soberania clínica.",
    bottlenecks: "Inconsistência em faturamentos TUSS, lentidão no processamento de laudos manuais e falta de rastreabilidade cirúrgica.",
    stack: [
      { name: "Gemini 3", icon: <Cpu size={12}/> },
      { name: "Node.js", icon: <Server size={12}/> },
      { name: "PostgreSQL", icon: <Database size={12}/> },
      { name: "Next.js 15", icon: <Layers size={12}/> },
      { name: "TypeScript", icon: <Code2 size={12}/> },
      { name: "Docker", icon: <Terminal size={12}/> }
    ]
  },
  { 
    id: 2, 
    title: "OrthoFlow", 
    img: "/pillars/ortho.jpg",
    full: "Domínio total em instrumentação cirúrgica. Automação de estoque em tempo real e recebimento inteligente de solicitações. Escala de instrumentadores via geolocalização e habilidade técnica. Disparo de cirurgia a um clique para soberania hospitalar absoluta.",
    bottlenecks: "Desperdício de insumos consignados, erros na escala de profissionais e falhas na comunicação entre hospital e fornecedor.",
    stack: [
      { name: "React", icon: <Layout size={12}/> },
      { name: "Google Maps API", icon: <Globe size={12}/> },
      { name: "Supabase", icon: <Database size={12}/> },
      { name: "Tailwind CSS", icon: <Layout size={12}/> },
      { name: "Zustand", icon: <Activity size={12}/> },
      { name: "Prisma", icon: <Layers size={12}/> }
    ]
  },
  { 
    id: 3, 
    title: "PsychFlow", 
    img: "/pillars/psych.jpg",
    full: "A revolução na saúde mental. IA humanizada para agendamentos de precisão e conexão imediata via metodologia em vídeo. Reduza a fricção burocrática e foque no que realmente importa: o acolhimento e o sucesso do paciente através de inteligência reativa.",
    bottlenecks: "Alta taxa de absenteísmo em consultas, burocracia excessiva no onboarding e falta de análise preditiva comportamental.",
    stack: [
      { name: "WebRTC", icon: <Zap size={12}/> },
      { name: "Python", icon: <Terminal size={12}/> },
      { name: "FastAPI", icon: <Server size={12}/> },
      { name: "Framer Motion", icon: <Activity size={12}/> },
      { name: "Redis", icon: <Zap size={12}/> },
      { name: "Twilio", icon: <MessageSquare size={12}/> }
    ]
  },
  { 
    id: 4, 
    title: "UniFlow", 
    img: "/pillars/uni.jpg",
    full: "Governança absoluta do chão de fábrica ao dashboard executivo. Faturamento e comissões automatizados por IA, com prestação de contas transparente e relatórios estratégicos que blindam a saúde financeira da sua indústria em tempo real.",
    bottlenecks: "Opacidade fiscal, lentidão no cálculo de comissões complexas e falta de BI centralizado para tomada de decisão estratégica.",
    stack: [
      { name: "PowerBI", icon: <LineChart size={12}/> },
      { name: "Postgres", icon: <Database size={12}/> },
      { name: "NextAuth", icon: <Shield size={12}/> },
      { name: "Server Actions", icon: <Zap size={12}/> },
      { name: "Zod", icon: <Shield size={12}/> },
      { name: "React Query", icon: <Activity size={12}/> }
    ]
  },
  { 
    id: 5, 
    title: "ControlFlow", 
    img: "/pillars/control.jpg",
    full: "Alta performance para demandas explosivas. Gestão ultra-rápida de registros, serviços e insumos. Controle financeiro e de estoque milimétrico para negócios que não podem parar e exigem agilidade extrema no atendimento massivo.",
    bottlenecks: "Gargalos de processamento em horários de pico, furos de estoque por desatualização e alto custo operacional manual.",
    stack: [
      { name: "Express.js", icon: <Server size={12}/> },
      { name: "MongoDB", icon: <Database size={12}/> },
      { name: "AWS S3", icon: <Layers size={12}/> },
      { name: "JavaScript ES6", icon: <Code2 size={12}/> },
      { name: "Nginx", icon: <Globe size={12}/> },
      { name: "Socket.io", icon: <MessageSquare size={12}/> }
    ]
  },
  { 
    id: 6, 
    title: "ProfitFlow", 
    img: "/pillars/profit.jpg",
    full: "Inteligência preditiva para franquias e redes. Controle o faturamento global em um único dashboard. Nossa IA antecipa tendências de mercado, detecta falhas operacionais e prevê lucros antes mesmo deles acontecerem para proteção de ativos.",
    bottlenecks: "Gestão fragmentada de múltiplas unidades, falta de visão futura de fluxo de caixa e ineficiência na detecção de anomalias fiscais.",
    stack: [
      { name: "TensorFlow", icon: <Cpu size={12}/> },
      { name: "Pandas", icon: <Database size={12}/> },
      { name: "Tableau API", icon: <LineChart size={12}/> },
      { name: "Golang", icon: <Terminal size={12}/> },
      { name: "BigQuery", icon: <Database size={12}/> },
      { name: "Azure", icon: <Globe size={12}/> }
    ]
  },
  { 
    id: 7, 
    title: "Anubis Tech", 
    img: "/pillars/anubis-site.jpg",
    full: "Portal oficial da agência focado em autoridade técnica. Interface de alta fidelidade com Design Glassmorphism, performance soberana e SEO de elite para conversão imediata de leads qualificados no mercado de tecnologia de ponta.",
    bottlenecks: "Falta de credibilidade visual perante clientes corporativos, SEO fraco para termos técnicos e baixa velocidade de carregamento.",
    stack: [
      { name: "Next.js 15", icon: <Layers size={12}/> },
      { name: "Vercel SDK", icon: <Globe size={12}/> },
      { name: "Three.js", icon: <Activity size={12}/> },
      { name: "Radix UI", icon: <Layout size={12}/> },
      { name: "Lucide Icons", icon: <Activity size={12}/> },
      { name: "PostHog", icon: <LineChart size={12}/> }
    ]
  }
];

export default function AnubisPillarCarousel() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        rotateY: [currentRotation, currentRotation - 360],
        transition: { duration: 60, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  const toggleFlip = (idx, e) => {
    e.stopPropagation();
    if (flippedIndex === idx) {
      setFlippedIndex(null);
      setIsPaused(false);
    } else {
      setFlippedIndex(idx);
      setIsPaused(true);
    }
  };

  return (
    <section id="projects" className="h-screen w-full flex flex-col items-center justify-center bg-transparent relative overflow-visible">
      <div className="text-center mb-12 relative z-20">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter">
          Ecosistema <span className="text-blue-500">Flow</span>
        </h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mt-4 italic">Soberania de Engenharia Anubis Tech</p>
      </div>

      <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[550px]" style={{ perspective: "3000px" }}>
        <motion.div
          className="w-full h-full relative"
          animate={controls}
          onUpdate={(latest) => setCurrentRotation(latest.rotateY)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {PILLARS_DATA.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${idx * 51.4}deg) translateZ(550px)`,
                zIndex: flippedIndex === idx ? 999 : 10,
              }}
            >
              <div 
                className={`w-full h-full relative transition-transform duration-1000 transform-gpu cursor-pointer ${flippedIndex === idx ? 'flipped-state' : ''}`}
                style={{ transformStyle: "preserve-3d" }}
                onClick={(e) => toggleFlip(idx, e)}
              >
                
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl border border-blue-500/20 overflow-hidden bg-[#05060a] flex flex-col shadow-2xl backdrop-blur-sm"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", zIndex: 2 }}
                >
                  <div className="w-full h-1/2 p-6 flex items-center justify-center bg-white/5 relative">
                    <div className="text-blue-500 opacity-10 absolute font-black text-7xl italic select-none uppercase tracking-tighter">ANUBIS</div>
                    <img 
                      src={pillar.img} 
                      alt={pillar.title} 
                      className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x400/05060a/3b82f6?text=Asset+Missing"; }}
                    />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-end items-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center w-full">
                      <h3 className="text-xl md:text-2xl font-black italic uppercase text-white tracking-tighter mb-6 leading-none">{pillar.title}</h3>
                      <div className="px-8 py-3 border-2 border-blue-500 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-500 hover:text-white transition-all">
                        Visualizar Engenharia
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK FACE (ESPECIFICAÇÕES TÉCNICAS) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl border border-blue-500/40 bg-[#08090d] p-6 flex flex-col justify-between items-center shadow-2xl"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    zIndex: 1
                  }}
                >
                  <div className="w-full">
                    <div className="text-blue-500 text-[8px] font-mono tracking-[0.3em] uppercase mb-2">Audit_Module_V12</div>
                    <h3 className="text-white font-black italic uppercase text-lg mb-3 tracking-tight text-center">{pillar.title}</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed italic mb-4 text-center line-clamp-3">{pillar.full}</p>
                    
                    <div className="text-left bg-blue-500/5 p-3 rounded-xl border border-blue-500/10 mb-4">
                      <p className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-1">Bottlenecks Resolved:</p>
                      <p className="text-slate-300 text-[10px] leading-snug italic">{pillar.bottlenecks}</p>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <p className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-3 text-center">Engineering Full-Stack:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {pillar.stack.map((tech, tIdx) => (
                        <div key={tIdx} className="flex flex-col items-center justify-center p-1.5 bg-slate-900/50 border border-slate-800 rounded-lg group hover:border-blue-500/50 transition-colors">
                          <div className="text-blue-400 mb-1">{tech.icon}</div>
                          <span className="text-[7px] text-slate-400 font-bold uppercase truncate w-full text-center tracking-tighter">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-slate-500 text-[8px] uppercase font-black py-1 tracking-[0.3em]">Clique para Voltar</div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .flipped-state {
          transform: rotateY(180deg) !important;
        }
      `}</style>
    </section>
  );
}