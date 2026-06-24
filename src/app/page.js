"use client";

import { useState, useEffect } from "react";
import { NavigationMenu } from "../components/ui";
import { Button } from "../components/ui";
import InfiniteScrollingLogosAnimation from "../components/ui/Infinite-Scrolling-Logos-Animation";
import AdquoraLanding from "./Landing/Page";
import TypographyPreloader from "../components/typography-preloader";
import LogoShowcase, { BasicDemo } from "./Services/Page";
import EdgeGlow from "../components/ui/edge-glow";
import { Logo } from "./Clients/Page";
import ClientLogos from "./ClientLogos/Page";
import Testimonials from "./Testimonal/Page";
import Footer from "./Footer/Page";
import Link from "next/link";

export default function PageClient() {
  const [showLanding, setShowLanding] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBasicDemo, setShowBasicDemo] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!showLanding) return;

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= docHeight - 10) {
        setShowBasicDemo(true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showLanding]);

  useEffect(() => {
    if (!showLanding) return;
    if (typeof window !== "undefined") {
      const scrollTo = sessionStorage.getItem('scrollTo');
      if (scrollTo) {
        sessionStorage.removeItem('scrollTo');
        setTimeout(() => {
          const el = document.getElementById(scrollTo);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500); // Give the DOM a moment to render
      }
    }
  }, [showLanding]);

  return (
    <div className="relative bg-[#070B11]">
      <div className="fixed top-0 left-0 right-0 z-50 h-auto pointer-events-none">
      </div>
      {!showLanding && (
        <TypographyPreloader onComplete={() => setShowLanding(true)} />
      )}
      {showLanding && (
        <>
          <div id="home-section">
            <AdquoraLanding />
            <div id="clients-section">
              {/* <Logo /> */}
            </div>
          </div>
          {/* {showBasicDemo && (
            <>
              <BasicDemo />
            </>
          )} */}
          <div id="services-section">
            <LogoShowcase />
          </div>
          <div id="client-logos-section">
            <ClientLogos />
          </div>

          {/* God-Tier CTA Banner */}
          <div className="w-full bg-[#070B11] relative overflow-hidden py-32 border-t border-white/[0.05]">
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                Ready to dominate{' '}
                <span className="block mt-2 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">your market?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
                Join the visionary brands scaling with our elite digital infrastructure. Stop competing. Start leading.
              </p>
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] flex items-center gap-3">
                  Start the Conversation
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
// "use client";

// import dynamic from 'next/dynamic'

// // Import the page dynamically with no SSR
// const DynamicLandingPage = dynamic(() => import('./PageClient'), {
//   ssr: false,
//   loading: () => <div className="bg-black h-screen flex items-center justify-center">
//     <div className="text-white">Loading...</div>
//   </div>
// })

// export default function Page() {
//   return <DynamicLandingPage />;
// }
