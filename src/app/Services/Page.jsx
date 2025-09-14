'use client'
import React from "react";
import { motion } from "framer-motion";

const defaultLogos = [
  {
    id: "google-meta-ads",
    name: "Google & Meta Ads",
    category: "Project Management",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="adsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#adsGradient)" />
        <rect x="4" y="4" width="16" height="16" rx="2" fill="white" fillOpacity="0.9" />
        <circle cx="9" cy="9" r="2.5" fill="#4285f4" fillOpacity="0.8" />
        <circle cx="15" cy="9" r="2.5" fill="#ea4335" fillOpacity="0.8" />
        <path d="M6 15h12" stroke="#667eea" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 17h8" stroke="#667eea" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="6" r="2" fill="#1877f2" />
        <path d="M17 5.5h2M18 4.5v2" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "creative-web-design",
    name: "Creative & Web Designing",
    category: "Deployment",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#designGradient)" />
        <rect x="4" y="5" width="16" height="12" rx="2" fill="white" fillOpacity="0.95" />
        <rect x="6" y="7" width="12" height="6" rx="1" fill="#f5576c" fillOpacity="0.3" />
        <circle cx="8" cy="9" r="1" fill="#f5576c" />
        <path d="M10 9h6" stroke="#f5576c" strokeWidth="1" strokeLinecap="round" />
        <path d="M10 11h4" stroke="#f5576c" strokeWidth="1" strokeLinecap="round" />
        <circle cx="9" cy="19" r="1.5" fill="#4c1d95" />
        <circle cx="15" cy="19" r="1.5" fill="#4c1d95" />
        <path d="M7 15h10" stroke="#9333ea" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    category: "Payments",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#seoGradient)" />
        <circle cx="10" cy="10" r="5" fill="white" fillOpacity="0.9" />
        <circle cx="10" cy="10" r="3" fill="#4facfe" fillOpacity="0.3" />
        <path d="m14.5 14.5 5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 7v6M7 10h6" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1" fill="#0891b2" />
        <path d="M16 6l2-2M18 4l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ecommerce-ads",
    name: "E-commerce Ads & Mgmt.",
    category: "Design",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="ecomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fa709a" />
            <stop offset="100%" stopColor="#fee140" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#ecomGradient)" />
        <path d="M5 7l2 8h10l2-8" fill="white" fillOpacity="0.9" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="18" r="1.5" fill="#be123c" />
        <circle cx="15" cy="18" r="1.5" fill="#be123c" />
        <path d="M7 5V3h10v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="8" y="9" width="8" height="4" rx="1" fill="#fee140" fillOpacity="0.6" />
        <path d="M10 11h4" stroke="#be123c" strokeWidth="1" strokeLinecap="round" />
        <circle cx="18" cy="6" r="2" fill="#dc2626" />
        <path d="M17.5 6h1M18 5.5v1" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing & PR",
    category: "Documentation",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="influencerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a9e" />
            <stop offset="100%" stopColor="#fecfef" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#influencerGradient)" />
        <circle cx="12" cy="10" r="6" fill="white" fillOpacity="0.9" />
        <circle cx="12" cy="9" r="2.5" fill="#ec4899" fillOpacity="0.7" />
        <path d="M9 13c0-1.5 1.5-2 3-2s3 0.5 3 2" fill="#ec4899" fillOpacity="0.7" />
        <path d="M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="6" r="1" fill="#be185d" />
        <circle cx="18" cy="6" r="1" fill="#be185d" />
        <circle cx="6" cy="18" r="1" fill="#be185d" />
        <circle cx="18" cy="18" r="1" fill="#be185d" />
      </svg>
    ),
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    category: "AI Platform",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#socialGradient)" />
        <rect x="4" y="5" width="16" height="11" rx="2" fill="white" fillOpacity="0.95" />
        <circle cx="8" cy="8.5" r="1.5" fill="#6366f1" />
        <circle cx="12" cy="8.5" r="1.5" fill="#8b5cf6" />
        <circle cx="16" cy="8.5" r="1.5" fill="#ec4899" />
        <rect x="6" y="11" width="12" height="1" rx="0.5" fill="#6366f1" fillOpacity="0.4" />
        <rect x="6" y="13" width="8" height="1" rx="0.5" fill="#6366f1" fillOpacity="0.4" />
        <path d="M8 18l4-1.5 4 1.5" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="18" r="1" fill="#6366f1" />
        <circle cx="16" cy="18" r="1" fill="#6366f1" />
      </svg>
    ),
  },
];

const mainLogo = {
  id: "company",
  name: "Our Services",
  svg: (
    <svg viewBox="0 0 40 40" className="w-12 h-12">
      <defs>
        <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#main-gradient)" />
      <path
        d="M12 16h16v2H12zm0 4h12v2H12zm0 4h14v2H12z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="32" cy="8" r="4" fill="#10b981" />
    </svg>
  ),
};

export default function LogoShowcase({
  logos = defaultLogos,
  title = "Accelerate Your Business Growth",
  subtitle = "INTEGRATIONS",
  description = "Connecting your brand to the right audience creatively & effectively",
  buttonText = "View all integrations",
  onButtonClick,
}) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-24 md:py-32 overflow-hidden min-h-screen">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-sm font-medium text-gray-400 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {subtitle}
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="relative">
          {/* Central spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
          >
            {/* Left Column */}
            <div className="space-y-6">
              {logos.slice(0, 3).map((logo, index) => (
                <LogoCard key={logo.id} logo={logo} delay={index * 0.1} />
              ))}
            </div>

            {/* Center - Main Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity:1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              className="flex justify-center"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75"></div>
                
                {/* Main card */}
                <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center">
                    {mainLogo.svg}
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-white">
                      {mainLogo.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Adquora
                    </p>
                  </div>
                </div>

                {/* Connection lines */}
                <div className="absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-r from-transparent to-gray-600 hidden md:block"></div>
                <div className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-l from-transparent to-gray-600 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {logos.slice(3, 6).map((logo, index) => (
                <LogoCard key={logo.id} logo={logo} delay={(index + 3) * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}



const LogoCard = ({ logo, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-900 hover:border-gray-600 hover:shadow-lg transition-all duration-300">
        {/* Logo container */}
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-gray-300 group-hover:bg-gray-700 transition-colors duration-300">
          {logo.svg}
        </div>
        
        {/* Logo info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm truncate">
            {logo.name}
          </h3>
          {logo.category && (
            <p className="text-xs text-gray-400 truncate">
              {logo.category}
            </p>
          )}
        </div>

        {/* Connection indicator */}
        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};
