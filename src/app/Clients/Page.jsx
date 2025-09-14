'use client';

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { RadialGradient } from "@/components/ui";
import { EdgeGlow } from "@/components/ui";

export const Logo = () => {
  return (
    <div className="relative w-full overflow-hidden pt-32 pb-20 bg-gradient-to-bl from-black to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_0.5px,transparent_0.5px),linear-gradient(to_bottom,#80808012_0.5px,transparent_0.5px)] bg-[size:24px_24px] sm:bg-[size:24px_24px] bg-[size:16px_16px]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 sm:w-96 sm:h-96 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-80 sm:h-80 w-40 h-40 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col items-center px-3 xs:px-4 sm:px-6 lg:px-0">
        {/* Enhanced title section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16 relative">
          {/* Decorative accent above title */}
          <div className="flex items-center justify-center mb-3 xs:mb-4 sm:mb-6">
            <div className="h-px w-4 xs:w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="mx-2 xs:mx-3 sm:mx-4 w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="h-px w-4 xs:w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          {/* Main title with enhanced styling */}
          <h1 className="text-2xl xs:text-3xl sm:text-6xl font-extrabold italic text-center text-blue-400 pb-4 xs:pb-6 sm:pb-8 drop-shadow-lg">
            Our Trusted Partners
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 text-2xl xs:text-3xl sm:text-6xl font-extrabold text-white/5 blur-sm">
              Our Trusted Partners
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 xs:mt-3 sm:mt-4 text-gray-400 text-xs xs:text-sm sm:text-lg md:text-xl font-light tracking-wide px-2 xs:px-4 sm:px-0">
            Collaborating with industry leaders worldwide
          </p>

          {/* Decorative underline */}
          <div className="flex items-center justify-center mt-6 sm:mt-6 mt-4">
            <div className="h-px w-8 sm:w-8 w-4 bg-gradient-to-r from-transparent to-blue-400/50"></div>
            <div className="mx-3 sm:mx-3 mx-2 w-1 h-1 bg-blue-400/70 rounded-full"></div>
            <div className="w-16 sm:w-16 w-8 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/20"></div>
            <div className="mx-3 sm:mx-3 mx-2 w-1 h-1 bg-blue-400/70 rounded-full"></div>
            <div className="h-px w-8 sm:w-8 w-4 bg-gradient-to-l from-transparent to-blue-400/50"></div>
          </div>
        </div>

        {/* Enhanced logo carousel container with white background */}
        <div className="relative w-full">
          {/* Subtle border glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 rounded-2xl blur-xl"></div>
          
          {/* Main carousel container with white background */}
          <div className="relative bg-white backdrop-blur-sm border border-gray-200 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-8 shadow-2xl">
            {/* Optional: Add a subtle inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white rounded-lg xs:rounded-xl"></div>
            <div className="relative">
              <LogoCarousel columnCount={window.innerWidth < 640 ? 1 : 3} />
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 sm:mt-12 mt-6 flex items-center justify-center opacity-30">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="mx-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 sm:top-8 sm:left-8 top-4 left-4 w-16 h-16 sm:w-16 sm:h-16 w-8 h-8 border-l-2 border-t-2 border-white/10 rounded-tl-lg"></div>
      <div className="absolute bottom-8 right-8 sm:bottom-8 sm:right-8 bottom-4 right-4 w-16 h-16 sm:w-16 sm:h-16 w-8 h-8 border-r-2 border-b-2 border-blue-400/20 rounded-br-lg"></div>
    </div>
  );
}