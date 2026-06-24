import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextRoll from "./text-roll";
import Button from "./button";
import { useRouter } from "next/navigation";

// Helper for scrolling to section
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
const NavigationMenu = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: "Home", type: "scroll", section: "home-section" },
    { name: "About", type: "link", href: "/about" },
    { name: "Services", type: "scroll", section: "services-section" },
    { name: "Contact", type: "link", href: "/contact" },
  ];

  const router = useRouter();

  // Helper to detect if we're on the main page
  const isMainPage = typeof window !== "undefined" && window.location.pathname === "/";

  function handleScrollOrNavigate(section) {
    if (isMainPage) {
      scrollToSection(section);
    } else {
      // Navigate to main page with hash, then scroll after navigation
      router.push(`/#${section}`);
    }
    onClose();
  }

  React.useEffect(() => {
    // If URL has hash, scroll to section after navigation
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black bg-opacity-5 backdrop-blur-lg"
        >
          <div className="flex min-h-full w-full flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <Button variant="secondary" onClick={onClose}>
                CLOSE
              </Button>
            </div>
            {/* Navigation Items */}
            <ul className="flex min-h-full w-full flex-1 flex-col items-center justify-center rounded-2xl px-7 py-3">
              {navigationItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="relative flex cursor-pointer flex-col items-center overflow-visible"
                  onClick={() => {
                    if (item.type === "scroll") {
                      handleScrollOrNavigate(item.section);
                    } else if (item.type === "link") {
                      router.push(item.href);
                      onClose();
                    }
                  }}
                >
                  <div className="relative flex items-start">
                    <TextRoll
                      center
                      className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.2] tracking-[-0.03em] transition-colors text-white hover:text-blue-400"
                    >
                      {item.name}
                    </TextRoll>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
