"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Users, Star, Folder, ThumbsUp, Award, ArrowRight } from "lucide-react";

import { TopNavBar } from "../Landing/Page";
import Footer from "../Footer/Page";

// Edge Glow Effect
const EdgeGlow = ({ position, color }) => (
  <div 
    className={`absolute w-96 h-96 rounded-full blur-3xl ${
      position === 'top-left' ? 'top-0 left-0 -translate-x-1/2 -translate-y-1/2' :
      position === 'top-right' ? 'top-0 right-0 translate-x-1/2 -translate-y-1/2' :
      position === 'bottom-left' ? 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2' :
      'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
    }`}
    style={{ backgroundColor: color }}
  />
);

// Ripple Background
const BackgroundRippleEffect = ({ className }) => (
  <div className={`absolute inset-0 ${className}`}>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-white/10"
        style={{
          width: `${200 + i * 100}px`,
          height: `${200 + i * 100}px`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Card Illustration Components
const CustomerCentricIllustration = () => (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-t from-white/[0.01] to-transparent rounded-b-2xl border-t border-white/5 mt-4">
    <div className="absolute w-36 h-36 bg-blue-500/10 rounded-full blur-2xl" />
    <div className="relative w-full max-w-[240px] space-y-3 z-10">
      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm transform -translate-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-xs">C</div>
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-20 bg-white/20 rounded" />
          <div className="h-1 w-12 bg-white/10 rounded" />
        </div>
      </div>
      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-500/[0.03] border border-blue-500/20 backdrop-blur-sm transform translate-x-2 relative">
        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 text-xs">
          <Check className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-24 bg-blue-400/30 rounded" />
          <div className="h-1 w-16 bg-blue-400/20 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const CollaborationIllustration = () => (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-t from-white/[0.01] to-transparent rounded-b-2xl border-t border-white/5 mt-4">
    <div className="absolute w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
    <div className="absolute w-36 h-36 border border-white/5 rounded-full" />
    <div className="absolute w-24 h-24 border border-white/10 rounded-full" />
    <div className="relative flex items-center justify-center gap-6 z-10">
      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400">
        <Users className="w-4 h-4" />
      </div>
      <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <Users className="w-6 h-6" />
      </div>
      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400">
        <Users className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const IntegrityIllustration = () => (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-t from-white/[0.01] to-transparent rounded-b-2xl border-t border-white/5 mt-4">
    <div className="absolute w-36 h-36 bg-blue-600/10 rounded-full blur-2xl" />
    <div className="relative w-full max-w-[240px] z-10 flex flex-col items-center">
      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm w-[170px] mb-[-15px] z-20 mr-10">
        <div className="flex gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-blue-400 text-blue-400" />
          ))}
        </div>
        <div className="h-1.5 w-20 bg-white/20 rounded" />
      </div>
      <div className="p-2.5 rounded-xl bg-blue-950/20 border border-blue-500/20 backdrop-blur-md w-[170px] flex items-center gap-3 ml-10">
        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
          <Folder className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-1.5 w-16 bg-white/20 rounded" />
          <div className="h-1 w-10 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const InnovationIllustration = () => (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-t from-white/[0.01] to-transparent rounded-b-2xl border-t border-white/5 mt-4">
    <div className="absolute w-44 h-44 bg-indigo-600/10 rounded-full blur-3xl" />
    <div className="relative w-full max-w-[280px] flex items-center justify-center gap-4 z-10">
      <div className="relative flex -space-x-6">
        <div className="w-14 h-18 rounded-lg bg-white/[0.02] border border-white/15 transform -rotate-6 flex flex-col justify-between p-2">
          <div className="space-y-1">
            <div className="h-1.5 w-6 bg-white/20 rounded" />
            <div className="h-1 w-8 bg-white/10 rounded" />
          </div>
          <div className="h-1 w-3 bg-white/20 rounded self-end" />
        </div>
        <div className="w-16 h-22 rounded-lg bg-blue-950/20 border border-blue-500/20 z-10 shadow-xl flex flex-col justify-between p-2.5 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-lg" />
          <div className="space-y-1">
            <div className="h-1.5 w-10 bg-blue-400/40 rounded" />
            <div className="h-1 w-12 bg-white/10 rounded" />
            <div className="h-1 w-8 bg-white/10 rounded" />
          </div>
          <div className="w-4 h-4 rounded-full bg-blue-500/40 flex items-center justify-center self-end text-white">
            <Check className="w-2.5 h-2.5" />
          </div>
        </div>
        <div className="w-14 h-18 rounded-lg bg-white/[0.02] border border-white/15 transform rotate-6 flex flex-col justify-between p-2">
          <div className="space-y-1">
            <div className="h-1.5 w-6 bg-white/20 rounded" />
            <div className="h-1 w-8 bg-white/10 rounded" />
          </div>
          <div className="h-1 w-3 bg-white/20 rounded self-end" />
        </div>
      </div>
    </div>
  </div>
);

const ExcellenceIllustration = () => (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-t from-white/[0.01] to-transparent rounded-b-2xl border-t border-white/5 mt-4">
    <div className="absolute w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
    <svg className="absolute w-64 h-32 z-0 opacity-20" viewBox="0 0 200 100">
      <path d="M20 80 Q100 10 180 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M100 10 L100 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
    <div className="relative w-full max-w-[240px] h-32 flex items-end justify-between px-6 z-10">
      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 mb-2">
        <ThumbsUp className="w-4 h-4" />
      </div>
      <div className="flex flex-col items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <Award className="w-5 h-5" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 animate-ping" />
      </div>
      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 mb-2">
        <Star className="w-4 h-4" />
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  const router = useRouter();

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const valuesData = [
    {
      title: "Customer-Centric Approach",
      desc: "We place our clients at the forefront, focusing on their unique needs and dedicating our efforts to ensuring satisfaction and long-term success.",
      illustration: <CustomerCentricIllustration />
    },
    {
      title: "Collaboration",
      desc: "We deeply value teamwork and collective effort, working seamlessly together to achieve shared goals and deliver exceptional results.",
      illustration: <CollaborationIllustration />
    },
    {
      title: "Integrity",
      desc: "Honesty and transparency guide every interaction and project we undertake, upholding trust and the highest ethical standards.",
      illustration: <IntegrityIllustration />
    },
    {
      title: "Innovation",
      desc: "We passionately champion creativity and leverage cutting-edge technologies to develop and deliver forward-thinking, impactful solutions.",
      illustration: <InnovationIllustration />
    },
    {
      title: "Commitment to Excellence",
      desc: "Our unwavering drive for excellence motivates us to consistently improve, innovate, and exceed expectations in every project we take on.",
      illustration: <ExcellenceIllustration />
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070B11] text-white overflow-x-hidden font-sans selection:bg-blue-500/30 flex flex-col">
      
      {/* Top Navbar */}
      <TopNavBar />
      
      {/* Enhanced Background Effects */}
      <BackgroundRippleEffect className="opacity-10" />
      
      {/* Edge Glows */}
      <EdgeGlow position="top-left" color="rgba(59, 130, 246, 0.1)" />
      <EdgeGlow position="top-right" color="rgba(99, 102, 241, 0.08)" />
      <EdgeGlow position="bottom-left" color="rgba(59, 130, 246, 0.08)" />
      <EdgeGlow position="bottom-right" color="rgba(99, 102, 241, 0.1)" />

      {/* Floating Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-xl pointer-events-none"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-indigo-500/5 blur-xl pointer-events-none"
      />

      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M100 0v100H0' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3Cpath d='M0 5v-5h5 M95 0h5v5 M0 95v5h5 M95 100h5v-5' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 pt-32 pb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6">
              We engineer <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">market leaders.</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming brands through <span className="text-blue-400 font-semibold">innovative digital experiences</span> and data-driven growth strategies.
            </p>
          </motion.div>

          {/* Premium Bento Grid for About Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Main Mission (Spans 2 columns) */}
            <div className="md:col-span-2 relative bg-[#111A2C]/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
              <h2 className="text-sm sm:text-base text-blue-400 font-bold uppercase tracking-[0.2em] mb-4">Who we are</h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.2] tracking-tight">
                More than an agency. We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">360° growth partner</span> for ambitious brands refusing to settle.
              </p>
            </div>

            {/* Established Stat (Spans 1 column) */}
            <div className="relative bg-[#111A2C]/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-center items-center group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light text-2xl lg:text-3xl">since</span>
                <div className="text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  2022
                </div>
              </div>
            </div>

            {/* The Problem (Spans 1 column) */}
            <div className="relative bg-[#111A2C]/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl text-white font-bold tracking-tight mb-4">The Status Quo</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Brands juggle multiple scattered agencies for ads, design, content, and PR. The inevitable result? Diluted strategy and wasted capital.
              </p>
            </div>

            {/* The Solution (Spans 2 columns) */}
            <div className="md:col-span-2 relative bg-gradient-to-br from-blue-900/20 to-blue-600/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-blue-500/30 shadow-[0_8px_30px_rgba(59,130,246,0.1)] overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl text-white font-bold tracking-tight mb-4">The Adquora Standard</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                We bring the entire digital ecosystem under one roof. One unified approach engineered exclusively for pure, unadulterated performance and market dominance.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Google & Meta Ads', 'Web Architecture', 'SEO Optimization', 'Influencer PR', 'Creative Design'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- NEW OUR VALUE SECTION --- */}
          <div className="max-w-6xl mx-auto mt-24">
            
            {/* Header & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
                Our Value
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                At Adquora, we prioritize a customer-first mindset, innovation, and integrity. Through collaboration and commitment to excellence, we deliver impactful solutions that exceed expectations.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="space-y-6">
              
              {/* Row 1: 3 Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {valuesData.slice(0, 3).map((item, idx) => (
                  <motion.div
                    key={`val-${idx}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative bg-[#111A2C]/40 backdrop-blur-2xl border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    {item.illustration}
                  </motion.div>
                ))}
              </div>

              {/* Row 2: 2 Column Layout (Wide cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {valuesData.slice(3, 5).map((item, idx) => (
                  <motion.div
                    key={`val-${idx+3}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative bg-[#111A2C]/40 backdrop-blur-2xl border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    {item.illustration}
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
      
      {/* God-Tier CTA Banner */}
      <div className="w-full relative overflow-hidden py-32 border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Ready to dominate{' '}
            <span className="block mt-2 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">your market?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Join the visionary brands scaling with our elite digital infrastructure. Stop competing. Start leading.
          </p>
          <button onClick={() => router.push('/contact')} className="group relative px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] flex items-center gap-3">
            Start the Conversation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}