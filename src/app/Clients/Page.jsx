'use client';

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const GrowthIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center gap-1.5 pb-6 px-8 pt-12">
    <div className="absolute top-6 left-8 text-xs text-blue-400 font-semibold tracking-wider">Growth</div>
    {[30, 45, 35, 60, 45, 80, 55, 75, 45, 90, 65].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
        className={`w-3 rounded-t-sm relative group ${i === 5 || i === 9 ? 'bg-gradient-to-t from-blue-600 to-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/[0.05]'}`}
      >
        {(i === 5 || i === 9) && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-400/30 rounded-full blur-md" />}
      </motion.div>
    ))}
    <div className="absolute bottom-2 left-0 w-full flex justify-between px-10 text-[9px] text-gray-500 font-mono">
      <span>Nov, 10</span><span>Nov, 11</span><span>Today</span>
    </div>
  </div>
);

const TailorMadeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-56 h-24 bg-[#0A0E17]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center px-5 gap-4 z-20"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
        <Star className="w-6 h-6 text-blue-400 fill-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[9px] text-blue-400 font-bold tracking-widest uppercase">New</span>
        </div>
        <div className="text-white font-medium text-sm">Latest strategy</div>
        <div className="text-gray-400 text-xs mt-0.5">Today, 11:50</div>
      </div>
    </motion.div>
    <div className="absolute w-64 h-32 bg-blue-600/10 rounded-3xl border border-white/[0.02] z-10 scale-105 translate-y-6 blur-md" />
  </div>
);


const ScalableIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden pt-8">
    <svg className="absolute w-full h-[120%] top-0" viewBox="0 0 200 100" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M-10,90 C40,90 60,70 100,55 C140,40 160,20 210,0"
        fill="none"
        stroke="rgba(59,130,246,0.5)"
        strokeWidth="1.5"
      />
    </svg>
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute top-[40%] left-[50%] w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)] z-20"
    >
      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-50" />
    </motion.div>
    <div className="absolute bottom-6 left-0 w-full flex justify-between px-8 text-[10px] text-gray-500 font-mono z-20">
      <span>-45</span><span>-35</span><span>-25</span><span>-15</span><span>-5</span><span>0</span><span>+5</span>
    </div>
  </div>
);

const WorkflowIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />
    <div className="relative flex flex-wrap justify-center gap-3 w-48">
      {['Fi', 'No', 'Sl', 'X', 'Za', 'Dr'].map((app, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          className={`w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.5)] relative overflow-hidden ${i === 3 ? 'opacity-50' : ''}`}
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className={`text-xs font-bold relative z-10 ${i === 0 ? 'text-pink-400' : i === 1 ? 'text-white' : i === 2 ? 'text-purple-400' : i === 3 ? 'text-white' : i === 4 ? 'text-orange-400' : 'text-blue-400'}`}>{app}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const CollaborateIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex -space-x-3">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`w-14 h-14 rounded-full border-[3px] ${i === 3 ? 'border-blue-400' : 'border-[#111A2C]'} relative overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}
        >
          <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="avatar" className="w-full h-full object-cover grayscale opacity-80" />
          {i === 3 && <div className="absolute inset-0 bg-blue-500/20 rounded-full" />}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-3 -bottom-2 bg-blue-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      >
        Elijah
      </motion.div>
    </div>
  </div>
);

export const Logo = () => {
  return (
    <div className="w-full bg-[#070B11] flex flex-col items-center font-sans relative overflow-hidden">

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

      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center relative z-20 pt-32">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">What you'll get</span>
        </div>
        <h2 className="text-2xl md:text-3xl text-white font-medium max-w-xl leading-tight tracking-tight mb-16">
          We resolve problems associated with creative procedures.
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col overflow-hidden h-[340px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="h-[60%] w-full relative z-10"><GrowthIllustration /></div>
            <div className="p-8 text-left relative z-10">
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-blue-300 transition-colors">Google & Meta Ads</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Data-driven ad campaigns optimized for maximum ROI and growth.</p>
            </div>
          </div>
          <div className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col overflow-hidden h-[340px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="h-[60%] w-full relative z-10"><TailorMadeIllustration /></div>
            <div className="p-8 text-left relative z-10">
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-blue-300 transition-colors">Creative & Web Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Tailor-made designs that bring your vision to life beautifully.</p>
            </div>
          </div>
          <div className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col overflow-hidden h-[340px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="h-[60%] w-full relative z-10"><ScalableIllustration /></div>
            <div className="p-8 text-left relative z-10">
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-blue-300 transition-colors">Search Engine Optimization</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Scalable organic traffic strategies to meet evolving needs.</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col md:flex-row overflow-hidden h-auto md:h-[220px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="p-8 text-left md:w-1/2 flex flex-col justify-center relative z-10">
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-blue-300 transition-colors">E-commerce Ads & Mgmt.</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Seamlessly connect all your platforms and multiply sales.</p>
            </div>
            <div className="md:w-1/2 h-[200px] md:h-full relative z-10"><WorkflowIllustration /></div>
          </div>
          <div className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 hover:border-blue-400/50 rounded-3xl flex flex-col md:flex-row overflow-hidden h-auto md:h-[220px] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="p-8 text-left md:w-1/2 flex flex-col justify-center relative z-10">
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-blue-300 transition-colors">Influencer Marketing & PR</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Collaborate closely with top creators and build brand trust.</p>
            </div>
            <div className="md:w-1/2 h-[200px] md:h-full relative z-10"><CollaborateIllustration /></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl">
          {['SEO Optimization', 'PPC Campaigns', 'Content Strategy', 'Social Media', 'Conversion Rate', 'Premium Analytics', '24/7 Support'].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.06] transition-colors cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-gray-300 text-xs font-medium">{tag}</span>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};