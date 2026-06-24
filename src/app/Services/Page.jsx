'use client'

import React from "react";
import { motion } from "framer-motion";
import { Layout, MousePointer2, Search, ShoppingCart, Heart, MessageCircle, Share2 } from "lucide-react";

// --- Illustrations ---

const AdsIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center gap-2 pb-8 px-8 pt-12">
    <div className="absolute top-6 left-8 text-[10px] text-blue-400 font-bold tracking-widest uppercase">ROAS</div>
    {[40, 55, 45, 70, 60, 90].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
        className={`w-5 rounded-t-md relative group ${i === 5 ? 'bg-gradient-to-t from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/[0.05]'}`}
      >
        {i === 5 && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400/30 rounded-full blur-md" />}
      </motion.div>
    ))}
  </div>
);

const CreativeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full blur-[50px]" />
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-56 h-36 bg-[#0A0E17]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col p-5 z-20"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
      </div>
      <div className="flex gap-4">
        <div className="w-1/3 h-16 rounded-lg bg-purple-500/20 border border-purple-500/30" />
        <div className="w-2/3 flex flex-col gap-2.5">
          <div className="w-full h-3 rounded bg-white/10" />
          <div className="w-3/4 h-3 rounded bg-white/5" />
          <div className="w-1/2 h-3 rounded bg-white/5" />
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 text-white z-30"
      >
        <MousePointer2 className="w-8 h-8 fill-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
      </motion.div>
    </motion.div>
  </div>
);

const SEOIllustration = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center gap-5">
    <div className="absolute w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px]" />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-56 h-12 bg-[#0A0E17]/80 backdrop-blur-xl border border-emerald-400/30 rounded-full flex items-center px-5 gap-4 shadow-[0_0_20px_rgba(52,211,153,0.15)] z-20"
    >
      <Search className="w-5 h-5 text-emerald-400" />
      <div className="h-2 w-20 bg-emerald-400/30 rounded-full" />
    </motion.div>
    <div className="flex flex-col gap-2.5 w-56 z-20">
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className={`h-8 rounded-lg w-full flex items-center px-4 gap-3 ${i === 1 ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-white/[0.03] border border-white/5'}`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-white/20'}`} />
          <div className={`h-1.5 rounded-full ${i === 1 ? 'w-16 bg-emerald-400/50' : 'w-12 bg-white/10'}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

const EcomIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-48 h-48 bg-orange-500/10 rounded-full blur-[50px]" />
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center justify-center z-20 relative"
    >
      <ShoppingCart className="w-10 h-10 text-white" />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-orange-600 flex items-center justify-center text-[10px] font-black shadow-lg"
      >
        +5
      </motion.div>
    </motion.div>
    <svg className="absolute w-full h-full top-0 left-0 z-10" viewBox="0 0 200 100">
      <path d="M40 70 Q 80 70, 100 40 T 160 20" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="2.5" strokeDasharray="6 6" />
    </svg>
  </div>
);

const PRIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-[50px]" />
    <div className="relative w-40 h-40 min-w-[160px] min-h-[160px] shrink-0 z-20">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-[3px] border-pink-400 bg-[#0A0E17] flex items-center justify-center z-30 shadow-[0_0_25px_rgba(244,114,182,0.5)]"
      >
        <img src="https://i.pravatar.cc/100?img=47" alt="Creator" className="w-full h-full rounded-full object-cover grayscale" />
      </motion.div>
      {[
        { top: '0.5%', left: '50%' },
        { top: '26%', left: '80%' },
        { top: '62.5%', left: '80%' },
        { top: '85%', left: '50%' },
        { top: '72.5%', left: '11%' },
        { top: '37.5%', left: '-3.5%' },
        { top: '7.5%', left: '11%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="absolute w-10 h-10 rounded-full border border-white/20 bg-[#111A2C] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
        >
          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Follower" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        </motion.div>
      ))}
      <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(244,114,182,0.3)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  </div>
);

const SocialIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-48 h-48 bg-indigo-500/10 rounded-full blur-[50px]" />
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-48 bg-[#0A0E17]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-4 z-20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
        <div className="flex flex-col gap-1.5">
          <div className="h-2.5 w-20 bg-white/20 rounded-full" />
          <div className="h-1.5 w-12 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="w-full h-24 rounded-xl bg-indigo-500/20 mb-4 border border-indigo-500/30" />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
          <span className="text-[10px] text-white/70 font-medium">12k</span>
        </div>
        <MessageCircle className="w-4 h-4 text-white/50" />
        <Share2 className="w-4 h-4 text-white/50" />
      </div>
    </motion.div>
  </div>
);

// --- Main Component ---

export default function ServicesGrid() {
  const services = [
    {
      id: "01",
      title: "Google & Meta Campaigns",
      description: "Precision-targeted campaigns leveraging predictive AI to maximize ROAS and scale growth efficiently.",
      illustration: <AdsIllustration />,
      hoverBorder: "hover:border-blue-500/50",
      glowColor: "group-hover:via-blue-500/50"
    },
    {
      id: "02",
      title: "Bespoke Digital Experiences",
      description: "Award-winning interfaces that merge striking aesthetics with frictionless user journeys to elevate perception.",
      illustration: <CreativeIllustration />,
      hoverBorder: "hover:border-purple-500/50",
      glowColor: "group-hover:via-purple-500/50"
    },
    {
      id: "03",
      title: "Technical & Content SEO",
      description: "Sustainable, high-impact organic growth strategies that capture market share through technical excellence.",
      illustration: <SEOIllustration />,
      hoverBorder: "hover:border-emerald-500/50",
      glowColor: "group-hover:via-emerald-500/50"
    },
    {
      id: "04",
      title: "Marketplace Scaling",
      description: "End-to-end marketplace optimization. We seamlessly connect platforms and multiply sales velocity.",
      illustration: <EcomIllustration />,
      hoverBorder: "hover:border-orange-500/50",
      glowColor: "group-hover:via-orange-500/50"
    },
    {
      id: "05",
      title: "Creator Partnerships",
      description: "Strategic alignments with top creators and tier-1 media placements to build undeniable brand trust.",
      illustration: <PRIllustration />,
      hoverBorder: "hover:border-pink-500/50",
      glowColor: "group-hover:via-pink-500/50"
    },
    {
      id: "06",
      title: "Community Growth",
      description: "Vibrant, community-led social strategies that spark conversations, drive engagement, and build loyalty.",
      illustration: <SocialIllustration />,
      hoverBorder: "hover:border-indigo-500/50",
      glowColor: "group-hover:via-indigo-500/50"
    }
  ];

  return (
    <div id="services-section" className="w-full bg-[#070B11] relative overflow-hidden py-16 font-sans">

      {/* Grain overlay for texture */}
      <div className="absolute inset-0 opacity-[0.015] z-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Transition Glow from Landing */}
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[120%] h-full">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-[100%]" />
        </div>
      </div>

      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100' stroke='rgba(255,255,255,0.02)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center">

        {/* Top Header - sleek, matching typography */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium max-w-3xl leading-tight tracking-tight">
            We engineer growth with <span className="text-gray-400 font-light">data-driven</span> solutions.
          </h2>
        </div>

        {/* The Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col overflow-hidden h-[360px] md:h-[400px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Visual Area */}
              <div className="h-[55%] w-full relative z-10">
                {service.illustration}
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 text-left relative z-10 flex flex-col h-[45%]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white text-xl font-medium tracking-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[10px] text-blue-400/50 font-mono font-bold tracking-wider">{service.id}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
