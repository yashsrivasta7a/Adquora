import React from "react";
import { motion } from "framer-motion";

const TextRoll = ({ children, className, center = false, stagger = 0.035 }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden cursor-pointer ${className}`}
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? stagger * Math.abs(i - (children.length - 1) / 2)
            : stagger * i;
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? stagger * Math.abs(i - (children.length - 1) / 2)
            : stagger * i;
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 }
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default TextRoll;
