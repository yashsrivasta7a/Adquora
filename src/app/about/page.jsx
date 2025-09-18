"use client";

import React, { useState } from "react";
import NavigationMenu from "@/components/ui/navigation-menu";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

// Simulated UI components (since we don't have access to the actual ones)
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
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function AboutPage() {
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Menu Button and Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 h-auto">
        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-end items-center p-3 xs:p-4 sm:p-6"> 
          <Button onClick={() => setIsMenuOpen(true)} variant="secondary">
            MENU
          </Button>
        </nav>
        <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
      {/* Enhanced Background Effects */}
      <BackgroundRippleEffect className="opacity-20" />
      
      {/* Improved Edge Glows */}
      <EdgeGlow position="top-left" color="rgba(59, 130, 246, 0.15)" />
      <EdgeGlow position="top-right" color="rgba(59, 130, 246, 0.10)" />
      <EdgeGlow position="bottom-left" color="rgba(59, 130, 246, 0.10)" />
      <EdgeGlow position="bottom-right" color="rgba(59, 130, 246, 0.15)" />

      {/* Floating Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "3s" }}
        className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/5 blur-xl"
      />

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

  <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 pt-20 xs:pt-24 sm:pt-32 pb-12 xs:pb-16 sm:pb-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-8 xs:mb-12 sm:mb-20"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-block mb-3 xs:mb-4 sm:mb-6"
            >
              <div className="relative">
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2 xs:mb-3 sm:mb-4 leading-none text-white">
                  About{" "}
                  <span className="text-blue-400">Adquora</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm xs:text-base sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-2 xs:px-4 sm:px-0"
            >
              Transforming brands through <span className="text-blue-400 font-semibold">innovative digital experiences</span> and data-driven growth strategies
            </motion.p>
          </motion.div>

          {/* Single Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" 
            }}
            className="max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 rounded-3xl" />
            <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 lg:p-16 border border-gray-700/50">
              <div className="absolute top-4 right-4 xs:top-5 xs:right-5 sm:top-6 sm:right-6 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full opacity-10 blur-sm" />
              
              <motion.h2
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 xs:mb-6 sm:mb-8 text-blue-400"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                About Us
              </motion.h2>
              
              <div className="prose prose-sm xs:prose-base sm:prose-lg lg:prose-xl prose-invert max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="space-y-3 xs:space-y-4 sm:space-y-6"
                >
                  <p className="text-white leading-relaxed">
                    At Adquora, we are more than a digital marketing agency — we are a{" "}
                    <span className="text-blue-400 font-semibold">360° growth partner</span> for ambitious brands. Established in{" "}
                    <span className="text-blue-400 font-semibold">2022</span> in Delhi NCR, we set out with a bold vision: to simplify digital marketing by bringing every essential service under one roof and driving measurable, lasting impact for our clients.
                  </p>
                  
                  <p className="text-white leading-relaxed">
                    In today's fast-paced world, businesses juggle multiple agencies for ads, design, content, SEO, and PR — often ending up with scattered strategies and diluted results. That's where we step in.{" "}
                   Adquora brings everything together <span className="text-blue-400 font-semibold">Google & Meta Ads, Website Design, Creative Designing, Influencer Marketing & PR, Social Media Management, SEO, and E-commerce Growth Solutions — under one unified approach designed to drive impact.</span> Google & Meta Ads, Website Design, Creative Designing, Influencer Marketing & PR, Social Media Management, SEO, and E-commerce Growth Solutions — under one unified approach designed to drive impact.
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <h3 className="text-xl xs:text-xl sm:text-2xl font-bold text-blue-400 mb-2 xs:mb-3 sm:mb-4">What sets us apart?</h3>
                    <p className="text-white leading-relaxed">
                      <span className="text-blue-400 font-semibold">We don't just deliver services, we deliver outcomes.</span> Every campaign is crafted with creativity, backed by data, and executed with precision. We think like strategists, design like creators, and act like partners — ensuring your brand doesn't just survive but thrives in the digital-first world.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="pt-4 border-t border-gray-700/50"
                  >
                    <p className="text-white leading-relaxed text-sm xs:text-base sm:text-xl font-medium">
                      At Adquora, growth isn't a promise — it's the culture we live by.{" "}
                      <span className="text-blue-400 font-bold">We build. We scale. We lead.</span> Together, with you.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20 text-center"
          >
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}