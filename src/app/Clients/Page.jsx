'use client';

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { RadialGradient } from "@/components/ui";
import { EdgeGlow } from "@/components/ui";

export const Logo = () => {
  return (
    <div className="relative w-full overflow-hidden pt-32 pb-20 bg-gradient-to-bl from-black to-gray-900">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_0.5px,transparent_0.5px),linear-gradient(to_bottom,#80808012_0.5px,transparent_0.5px)] bg-[size:24px_24px]"></div>

  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
  </div>

  {/* Decorative lines */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>


  <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col items-center">
    {/* Enhanced title section */}
    <div className="text-center mb-16 relative">
      {/* Decorative accent above title */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
        <div className="mx-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
      </div>

      {/* Main title with enhanced styling */}
      <h1 className="text-6xl font-extrabold italic text-center  text-blue-400 pb-8 drop-shadow-lg" >
        Our Trusted Partners
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 text-6xl md:text-6xl font-extrabold text-white/5 blur-sm">
          Our Trusted Partners
        </div>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 text-lg md:text-xl font-light tracking-wide">
        Collaborating with industry leaders worldwide
      </p>

      {/* Decorative underline */}
      <div className="flex items-center justify-center mt-6">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/50"></div>
        <div className="mx-3 w-1 h-1 bg-blue-400/70 rounded-full"></div>
        <div className="w-16 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/20"></div>
        <div className="mx-3 w-1 h-1 bg-blue-400/70 rounded-full"></div>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/50"></div>
      </div>
    </div>

    {/* Enhanced logo carousel container */}
    <div className="relative w-full">
      {/* Subtle border glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10 rounded-2xl blur-xl"></div>
      
      {/* Main carousel container */}
      <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
        <LogoCarousel columnCount={3} />
      </div>
    </div>

    {/* Bottom decorative element */}
    <div className="mt-12 flex items-center justify-center opacity-30">
      <div className="w-1 h-1 bg-white rounded-full"></div>
      <div className="mx-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="w-1 h-1 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Corner accents */}
  <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/10 rounded-tl-lg"></div>
  <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-400/20 rounded-br-lg"></div>
</div>
  );
}