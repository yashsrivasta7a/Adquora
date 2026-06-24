"use client"

import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Star, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "../Clients/Page";


const BottomGlow = () => (
  <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden pointer-events-none z-0">
    <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-full">
      <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-[100%]" />
      <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-[100%] scale-y-75 translate-y-1/4" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/40 to-transparent blur-[50px]" />
    </div>

    <div className="absolute bottom-0 left-1/4 w-[10%] h-[80%] bg-blue-400/10 blur-[40px] -rotate-12" />
    <div className="absolute bottom-0 right-1/4 w-[10%] h-[80%] bg-blue-400/10 blur-[40px] rotate-12" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-[90%] bg-blue-300/10 blur-[60px]" />
  </div>
);

export const TopNavBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (section === 'about') {
      router.push('/about');
      return;
    }
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, '', '/');
        }
      } else {
        sessionStorage.setItem('scrollTo', section);
        router.push('/');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleNavClick(e, 'home-section')}>
          <img src="/logo.svg" alt="Adquora Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold text-xl tracking-wide hidden sm:block">Adquora</span>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="/#home-section" onClick={(e) => handleNavClick(e, 'home-section')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="/#services-section" onClick={(e) => handleNavClick(e, 'services-section')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="/#clients-section" onClick={(e) => handleNavClick(e, 'clients-section')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Clients</a>
          <a href="/#testimonal-section" onClick={(e) => handleNavClick(e, 'testimonal-section')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => { setIsMobileMenuOpen(false); router.push('/contact'); }}
            className="hidden md:block text-sm font-semibold text-white px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#0A0A0A]/95 border-b border-white/10 px-4 py-6 flex flex-col gap-5 backdrop-blur-2xl absolute top-full left-0 w-full shadow-2xl"
        >
          <a href="/#home-section" onClick={(e) => handleNavClick(e, 'home-section')} className="text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2">Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2">About</a>
          <a href="/#services-section" onClick={(e) => handleNavClick(e, 'services-section')} className="text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2">Services</a>
          <a href="/#clients-section" onClick={(e) => handleNavClick(e, 'clients-section')} className="text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2">Clients</a>
          <a href="/#testimonal-section" onClick={(e) => handleNavClick(e, 'testimonal-section')} className="text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2">Testimonials</a>
          <button
            onClick={() => { setIsMobileMenuOpen(false); router.push('/contact'); }}
            className="mt-2 text-center font-semibold text-white px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 w-full"
          >
            Contact Us
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

const TrustPill = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
  >
    <div className="flex -space-x-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-6 h-6 rounded-full bg-gray-600 border border-black overflow-hidden relative">
          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    <span className="text-sm text-gray-300 font-medium">
      <strong className="text-white">Trusted</strong> Digital Marketing Agency
    </span>
  </motion.div>
);



const AdquoraLanding = ({ onMenuClick }) => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] font-sans selection:bg-blue-500/30">

      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M100 0v100H0' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3Cpath d='M0 5v-5h5 M95 0h5v5 M0 95v5h5 M95 100h5v-5' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      {/* Grain overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <BottomGlow />
      <TopNavBar onMenuClick={onMenuClick} />

      <div className="w-full relative z-20 flex flex-col items-center justify-center mt-20 pt-10 px-4">

        <TrustPill />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[1.1] max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            AD<span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">QUORA</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-6 text-gray-400 font-normal text-sm md:text-base max-w-lg leading-relaxed"
        >
          Elevate your brand with 360° Digital Marketing Solutions. Engineered for scalable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6 mb-24"
        >
          {/* Primary glowing button */}
          <button
            onClick={() => router.push('/contact')}
            className="group relative px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center gap-2"
          >
            Work With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Logos Section on Landing Page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-6xl mx-auto flex flex-col items-center "
        >
          <h3 className="text-gray-500 font-medium mb-8 text-sm uppercase tracking-widest">Already chosen by the leaders</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 max-w-5xl">
            {logos.map((logo, index) => (
              <div
                key={`alt-${index}`}
                className="group relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none" />
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="relative z-10 max-w-[80px] max-h-[30px] sm:max-w-[100px] sm:max-h-[40px] object-contain opacity-30 group-hover:opacity-100 transition-all duration-500 filter invert grayscale mix-blend-screen brightness-150"
                />
              </div>
            ))}
          </div>
        </motion.div> */}


      </div>
    </div>
  );
};

export default AdquoraLanding;