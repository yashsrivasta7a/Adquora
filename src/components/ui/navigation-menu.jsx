import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextRoll from "./text-roll";
import Button from "./button";

const NavigationMenu = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: "Home", href: "/", description: "[0]" },
    { name: "About", href: "/about", description: "[1]" },
    { name: "Services", href: "/pricing", description: "[2]" },
    { name: "Contact", href: "/docs/quick-start", description: "[3]" },
    // { name: "Account", href: "/user", description: "[4]" },
    // { name: "Login", href: "/login", description: "[7]" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black bg-opacity-95 backdrop-blur-sm"
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
                >
                  <div className="relative flex items-start">
                    <TextRoll
                      center
                      className="text-5xl font-extrabold uppercase leading-[8] tracking-[-0.03em] transition-colors lg:text-5xl text-white hover:text-[#003597]"
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
