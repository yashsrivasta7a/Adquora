"use client"

import React, { useState, useEffect } from "react";
import { ArrowRight, Play, ChevronDown, Zap, TrendingUp, Users, Target } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { EdgeGlow, GlowText } from "@/components/ui";
import { useRouter } from "next/navigation";

const SplitText = ({ text, delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  

  

  return (
    <span className={`inline-block transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className="inline-block"
          style={{ 
            animationDelay: `${i * 50}ms`,
            animation: isVisible ? 'letterDrop 0.6s ease-out forwards' : 'none'
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const RadialGradient = ({ className }) => (
  <div className={`absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent ${className}`} />
);



const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`} {...props}>
    {children}
  </button>
);



// const BackgroundRippleEffect = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     {[...Array(6)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute border border-blue-500/20 rounded-full animate-ping"
//         style={{
//           width: `${200 + i * 100}px`,
//           height: `${200 + i * 100}px`,
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           animationDelay: `${i * 2}s`,
//           animationDuration: '4s'
//         }}
//       />
//     ))}
//   </div>
// );

const InfiniteScrollingLogosAnimation = () => (
  <div className="w-full py-8 overflow-hidden">
    <div className="flex animate-scroll">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex-shrink-0 mx-8">
          <div className="w-20 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">BRAND</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// New Animated Background Elements
const AnimatedShapes = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      {isClient && [
        { Icon: Zap, delay: 0, x: ['20%', '30%'], y: ['15%', '20%'] },
        { Icon: TrendingUp, delay: 1000, x: ['80%', '85%'], y: ['25%', '30%'] },
        { Icon: Users, delay: 2000, x: ['10%', '15%'], y: ['45%', '50%'] },
        { Icon: Target, delay: 3000, x: ['75%', '80%'], y: ['70%', '75%'] },
      ].map(({ Icon, delay, x, y }, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30 hover:opacity-60 transition-opacity"
          style={{
            left: window.innerWidth < 640 ? x[0] : x[1],
            top: window.innerWidth < 640 ? y[0] : y[1],
            animationDelay: `${delay}ms`,
            animationDuration: '6s'
          }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
          </div>
        </div>
      ))}
      
     
      
      {/* Geometric Shapes */}

      {/* Code-like Elements */}
      <div className="absolute top-1/3 right-1/5 text-blue-500/30 font-mono text-sm animate-fade-in-out">
        <div>{'<digital>'}</div>
        <div className="ml-4">{'marketing'}</div>
        <div>{'</digital>'}</div>
      </div>
      
      
    </div>
  );
};

// Animated Stats Cards
const FloatingStats = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[
        { value: '500+', label: 'Clients', x: ['2%', '5%'], y: ['20%', '30%'], delay: '0s' },
        { value: '99%', label: 'Success', x: ['85%', '90%'], y: ['40%', '50%'], delay: '1s' },
        { value: '24/7', label: 'Support', x: ['5%', '10%'], y: ['70%', '80%'], delay: '2s' },
      ].map((stat, i) => (
        <div
          key={i}
          className="absolute animate-float-up opacity-80"
          style={{
            left: window.innerWidth < 640 ? stat.x[0] : stat.x[1],
            top: window.innerWidth < 640 ? stat.y[0] : stat.y[1],
            animationDelay: stat.delay,
            animationDuration: '8s'
          }}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md border border-blue-500/30 rounded-xl p-2 sm:p-4 shadow-2xl">
            <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-0.5 sm:mb-1">{stat.value}</div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Landing Page Component (Your Original Structure)
const AdquoraLanding = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (!isClient) return;
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden dark:bg-black bg-black">

      <BackgroundRippleEffect />
      
      <RadialGradient className="opacity-40 mb-70" />

      <EdgeGlow 
        position="top-right" 
        color="rgb(26, 51, 110,0.6)" 
        intensity={0.5}
        size="large"
      />

      <EdgeGlow 
        position="bottom-left" 
        color="rgb(26, 51, 110,0.6)" 
        intensity={0.5}
        size="large"
      />

      <AnimatedShapes />
      <FloatingStats />
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      />

      <div className="mt-60 w-full relative z-10">
        <div className="text-center flex justify-center">
          <GlowText className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-blue-400 drop-shadow-[0_0_5px_#5a7fd5]">
            <SplitText text="AD" delay={100} />
          </GlowText>

          <GlowText className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-[0_0_5px_#5a7fd5]">
            <SplitText text="QUORA" delay={300} />
          </GlowText>
        </div>
        
        <p className="text-center mt-4 text-white font-black animate-fade-in-up text-sm sm:text-base lg:text-lg px-4">
          360° Digital Marketing Solutions for Your Brand Growth
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
          className="group relative px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs xs:text-sm sm:text-base font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 animate-fade-in-up  xs:w-auto mx-auto xs:mx-4 sm:mx-0" style={{animationDelay: '1s'}}>
            <span className="relative z-10 flex items-center justify-center space-x-1 xs:space-x-2"  onClick={() => { router.push('/contact'); }}>
              <span>Work With Us</span>
              <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* <button className="group flex items-center space-x-2 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-white transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button> */}
        </div>
      </div>
      
      <img 
        src="/logo/logo.png" 
        className="absolute h-40 sm:h-48 lg:h-60 w-auto transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-100 hover:opacity-80 transition-opacity duration-500" 
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(${window.innerWidth > 640 ? mousePos.x * 0.5 : 0}px, ${window.innerWidth > 640 ? mousePos.y * 0.5 : 0}px)`
        }}
      />
      
      {/* Your Original Infinite Scrolling (Commented) */}
      {/* <div className="w-full mt-30 ">
        <InfiniteScrollingLogosAnimation />
      </div> */}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </div>

    
    </div>
  );
};

export default AdquoraLanding;