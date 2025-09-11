import Image from "next/image";


const Footer = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Documentation */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/clients" className="hover:text-white">Clients</a></li>
            </ul>
          </div>

        {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/testimonal" className="hover:text-white">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

        {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Adquora</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://adquora.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Visit Our Website</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/newsletter" className="hover:text-white">Newsletter</a></li>
            </ul>
          </div>

        {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms Of Service</a></li>
            </ul>
          </div>
      </div>

      {/* Giant Text */}
      <div className="relative z-10 text-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] font-bold text-white tracking-tight">
          Adquora
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