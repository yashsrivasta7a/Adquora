'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";

const allTestimonials = [
  {
    text: "As a founder, I’ve worked with different agencies before, but Adquora really stood out. Within two months, we saw a noticeable jump in sales and our ad performance improved by nearly 60%. What I appreciate most is that they treat our brand like their own.",
    name: "Udbhav Bhatt",
    title: "Founder, BBH Homes"
  },
  {
    text: "Adquora has honestly felt like an extension of our own team. They rebuilt our website, managed our social media, and ran campaigns that actually delivered. It’s rare to find a team that can handle it all this smoothly.",
    name: "Arpit",
    title: "Founder, Seven Array"
  },
  {
    text: "Working with Adquora has been one of the best decisions for our brand. They understand the struggles of a growing business and step in wherever needed. What I value most is how approachable and solution-oriented the team is.",
    name: "Piyush",
    title: "Founder, Elite Chuno"
  },
  {
    text: "We partnered with Adquora for influencer marketing and ad campaigns. The team not only helped us increase conversions but also positioned our brand strongly across social platforms. Their proactive communication sets them apart.",
    name: "Nidhhi Mahajan",
    title: "Founder, NLM"
  },
  {
    text: "The creative work gave our brand a fresh identity, and their ad strategies kept our sales growing month after month. They rebuilt our website, managed our social media, and ran campaigns that actually delivered.",
    name: "Arpit",
    title: "Founder, Seven Array"
  },
  {
    text: "Within two months, we saw a noticeable jump in sales and our ad performance improved by nearly 60%. What I appreciate most is that they treat our brand like their own, always experimenting, optimizing, and pushing for better results.",
    name: "Udbhav Bhatt",
    title: "Founder, BBH Homes"
  },
  {
    text: "They understand the struggles of a growing business and step in wherever needed, from SEO to creatives to performance ads. They’re quick to act, transparent with their process, and genuinely invested in our growth.",
    name: "Piyush",
    title: "Founder, Elite Chuno"
  },
  {
    text: "The team not only helped us increase conversions but also positioned our brand strongly across social platforms. Their proactive communication and creative inputs set them apart from any other agency we've worked with.",
    name: "Nidhhi Mahajan",
    title: "Founder, NLM"
  }
];

const InfiniteMarquee = ({ items, direction = 1, speed = 40 }) => {
  return (
    <div className="flex w-full overflow-hidden relative py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        className="flex gap-6 pr-6 w-max"
        animate={{
          x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} className="w-[85vw] sm:w-[350px] md:w-[450px] flex-shrink-0">
            <TestimonialCard testimonial={t} index={i} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const clients = [
  { name: "Aymee", src: "/transparent/AYMEE-removebg-preview.png", invert: false },
  { name: "Elite Chuno", src: "/transparent/EliteChuno-removebg-preview.png", invert: true },
  { name: "Nidhi", src: "/transparent/Nidhi-removebg-preview.png", invert: true },
  { name: "Thapar Dental", src: "/transparent/thapar_dental_clinic-removebg-preview.png", invert: false },
  { name: "The Filmsutra", src: "/transparent/the_filmsutra-removebg-preview.png", invert: false },
  { name: "HealthKart", src: "/transparent/hk.png" },
  { name: "Gritzo", src: "/transparent/611732446_18129882208509931_5087280495802751207_n-removebg-preview.png", invert: false },
  { name: "Adobe Express", src: "/transparent/Adobe Express - file.png", invert: true },
  { name: "Seven Array", src: "/transparent/Untitled - June 24, 2026 at 20.49.24.png", invert: false, blendScreen: true },
  { name: "Amy Lashes", src: "/transparent/amy.png", invert: true }
];

export default function ClientLogos() {
  return (
    <div className="w-full bg-[#070B11] flex flex-col items-center font-sans relative overflow-hidden py-16 border-t border-white/[0.02]">
      {/* Noise filter */}

      <div className="absolute inset-0 opacity-[0.015] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="absolute inset-0 opacity-[0.015] z-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Background glow removed from top, moved behind the grid */}

      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100' stroke='rgba(255,255,255,0.02)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
        }}
      />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] text-blue-400 font-bold tracking-[0.3em] uppercase">Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-medium tracking-tight mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">visionaries.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We collaborate with industry leaders and disruptive challengers to build the digital infrastructure of tomorrow.
          </p>
        </motion.div>

        {/* Premium Grid Wrapper */}
        <div className="relative w-full mt-6 flex flex-col items-center">
          {/* Intense Core Glow behind the table */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[120%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none z-0" />

          {/* Main Grid (Responsive for all 10 logos on mobile, 9 on desktop) */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[2rem] overflow-hidden backdrop-blur-xl p-px shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full">
            {clients.map((client, i) => (
              <ClientCard key={i} client={client} index={i} className={i === 9 ? 'md:hidden' : ''} />
            ))}
          </div>

          {/* Standalone Box for the 10th Logo (Desktop ONLY) */}
          <div className="hidden md:block relative z-0 -mt-[1px] w-full md:w-1/3 bg-white/[0.05] border border-white/[0.05] border-t-0 rounded-b-[2rem] rounded-t-none overflow-hidden backdrop-blur-xl p-px shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="bg-[#070B11] rounded-b-[2rem] rounded-t-none overflow-hidden">
              <ClientCard client={clients[9]} index={9} />
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Testimonials Section (Full Bleed Width) */}
      <div className="w-full mt-20 relative z-20 overflow-hidden pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4 w-full max-w-7xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">founders.</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            See what our partners are saying about their growth journey with Adquora.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 w-full">
          <InfiniteMarquee items={allTestimonials.slice(0, 4)} direction={1} speed={50} />
          <InfiniteMarquee items={allTestimonials.slice(4, 8)} direction={-1} speed={45} />
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div
      className="relative group bg-[#111A2C]/40 hover:bg-[#111A2C]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 h-full min-h-[280px]"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-blue-400/50 to-transparent transition-colors duration-500" />

      {/* Quote Icon watermark */}
      <div className="absolute top-6 left-6 text-white/[0.03] group-hover:text-blue-500/[0.05] transition-colors duration-500">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L16.439 16.09C16.963 14.966 17.151 13.914 17.004 12.934C16.857 11.954 16.323 11.134 15.4 10.474C14.477 9.814 13.344 9.484 12 9.484V3C14.733 3 17.067 3.86 19 5.58C20.933 7.3 21.9 9.54 21.9 12.3C21.9 13.82 21.607 15.254 21.02 16.604C20.433 17.954 19.66 19.114 18.7 20.084L14.017 21ZM4.017 21L6.439 16.09C6.963 14.966 7.151 13.914 7.004 12.934C6.857 11.954 6.323 11.134 5.4 10.474C4.477 9.814 3.344 9.484 2 9.484V3C4.733 3 7.067 3.86 9 5.58C10.933 7.3 11.9 9.54 11.9 12.3C11.9 13.82 11.607 15.254 11.02 16.604C10.433 17.954 9.66 19.114 8.7 20.084L4.017 21Z" />
        </svg>
      </div>

      <div className="relative z-10 flex-1">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-8 group-hover:text-gray-200 transition-colors">
          "{testimonial.text}"
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-white/[0.05]">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold tracking-wider text-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">{testimonial.name}</span>
          <span className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold">{testimonial.title}</span>
        </div>
      </div>
    </div>
  );
};

const ClientCard = ({ client, index, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
      className={`group relative bg-[#070B11] h-32 md:h-40 flex items-center justify-center overflow-hidden cursor-crosshair ${className}`}
    >
      {/* Subtle Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Intense Center Glow that follows the logo on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/0 group-hover:bg-blue-400/20 blur-[40px] rounded-full transition-all duration-500 pointer-events-none" />

      {/* Corner Brackets on Hover */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-500" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-500" />

      {/* Client Logo Image - Maximized Size! */}
      <img
        src={client.src}
        alt={client.name}
        className={`relative z-10 w-full h-full object-contain p-1 md:p-2 scale-[1.15] md:scale-[1.25]  md:group-hover:scale-[1.4] transition-all duration-700 ${client.invert ? 'invert brightness-110' : ''} ${client.blendScreen ? 'mix-blend-screen' : ''}`}
      />

      {/* Sleek Typography Name at Bottom */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <div className="flex items-center gap-1.5 bg-[#0A0E17]/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full">
          <div className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
          <span className="text-[8px] text-gray-300 font-bold tracking-[0.2em] uppercase">
            {client.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
