import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleNavClick = (e, path, section) => {
    e.preventDefault();
    if (section) {
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
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="relative bg-[#070B11] text-white overflow-hidden border-t border-white/[0.05] pt-24 pb-8">
      {/* Noise filter */}
      <div className="absolute inset-0 opacity-[0.015] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Elegant Blueish Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] z-0 pointer-events-none">
        <div className="w-full h-full bg-blue-500/10 blur-[150px] rounded-[100%]" />
      </div>
      
      {/* Content Grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mb-16 md:mb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center justify-items-center border-b border-white/[0.05] pb-12 md:pb-16">
          
          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.2em] uppercase">Navigation</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                  <a href="/#home-section" onClick={(e) => handleNavClick(e, null, 'home-section')} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    Home
                  </a>
              </li>
              <li>
                  <a href="/#services-section" onClick={(e) => handleNavClick(e, null, 'services-section')} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    Services
                  </a>
              </li>
              <li>
                  <a href="/#clients-section" onClick={(e) => handleNavClick(e, null, 'clients-section')} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    Clients
                  </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.2em] uppercase">About</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                  <a href="/about" onClick={(e) => handleNavClick(e, '/about', null)} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    About Us
                  </a>
              </li>
              <li>
                  <a href="/#testimonal-section" onClick={(e) => handleNavClick(e, null, 'testimonal-section')} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    Testimonials
                  </a>
              </li>
              <li>
                  <a href="/contact" onClick={(e) => handleNavClick(e, '/contact', null)} className="text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                    Contact
                  </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.2em] uppercase">Connect</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="https://www.linkedin.com/company/adquora/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
                  LinkedIn
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1BhYREUmKt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Facebook
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/adquora?igsh=MTh4YW5uaWlweGw2NQ==" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Instagram
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Text */}
      <div className="relative z-10 text-center pointer-events-none select-none flex flex-col items-center overflow-hidden pb-8 md:pb-0">
        <div className="text-[22vw] md:text-[18vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/[0.02] tracking-tighter w-full uppercase">
          Adquora
        </div>
        
        {/* Copyright */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center text-gray-500 text-[10px] tracking-[0.2em] uppercase">
          <p>&copy; {new Date().getFullYear()} Adquora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;