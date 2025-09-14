"use client";

import { useState, useEffect } from "react"
import { NavigationMenu } from "../components/ui";
import { Button } from "../components/ui";
import InfiniteScrollingLogosAnimation from "../components/ui/Infinite-Scrolling-Logos-Animation";
import AdquoraLanding from "./Landing/Page";
import TypographyPreloader from "../components/typography-preloader";
import LogoShowcase, { BasicDemo } from "./Services/Page";
import EdgeGlow from "../components/ui/edge-glow";
import { Logo } from "./Clients/Page";
import Testimonials from "./Testimonal/Page";
import Footer from "./Footer/Page";


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
      if (typeof window === 'undefined') return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= docHeight - 10) {
        setShowBasicDemo(true);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showLanding]);

  return (
    <div className="relative bg-black">
      <div className="fixed top-0 left-0 right-0 z-50 h-auto">
        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-end items-center p-6"> 
          <Button onClick={toggleMenu}>
            MENU
          </Button>
        </nav>
        {/* Navigation Menu Overlay */}
        <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
      {!showLanding && <TypographyPreloader onComplete={() => setShowLanding(true)} />}
      {showLanding && (
        <>
          <div id="home-section">
            <AdquoraLanding />
            <Logo />
          </div>
          {/* {showBasicDemo && (
            <>
              <BasicDemo />
            </>
          )} */}
          <div id="services-section">
            <LogoShowcase />
          </div>
          <Testimonials />
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
