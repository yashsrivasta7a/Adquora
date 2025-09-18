import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Elegant Blueish Glow - always rendered first */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] z-10 pointer-events-none">
        <div className="w-full h-full bg-gray-900 blur-[80px]" />
      </div>
      
      {/* Content Grid - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-32 lg:gap-48 xl:gap-64 text-center">
          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-8 tracking-wide">Navigation</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                  <a href="#home" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    Home
                  </a>
              </li>
              <li>
                  <a href="#services" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    Services
                  </a>
              </li>
              <li>
                  <a href="#clients" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    Clients
                  </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-8 tracking-wide">About</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                  <Link href="/about" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    About Us
                  </Link>
              </li>
              <li>
                  <a href="#testimonal" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    Testimonials
                  </a>
              </li>
              <li>
                  <Link href="/contact" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                    Contact
                  </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-8 tracking-wide">Connect</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="https://www.linkedin.com/company/adquora/" target="_blank" rel="noopener noreferrer" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1BhYREUmKt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/adquora?igsh=MTh4YW5uaWlweGw2NQ==" target="_blank" rel="noopener noreferrer" className="text-base hover:text-white transition-colors duration-300 hover:tracking-wide">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Text */}
      <div className="relative z-10 text-center pointer-events-none select-none mb-16">
        <div className="text-[8rem] md:text-[12rem] font-bold text-white tracking-tight">
          Adquora
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-gray-400 text-sm tracking-wider">
          <p>&copy; 2024 Adquora. All rights reserved.</p>
        </div>
      </div>
      
      {/* Elegant Blueish Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] z-10 pointer-events-none">
        <div className="w-full h-full bg-gray-900 blur-[80px]"></div>
      </div>
    </div>
  );
};

export default Footer;