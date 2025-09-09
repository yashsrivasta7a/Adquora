import React from "react";

const GlowText = ({ children, className, glowColor = "rgba(252, 153, 76, 0)" }) => {
  const glowStyles = {
    textShadow: `
      0 0 0px ${glowColor},
      0 0 0px ${glowColor.replace('0.5', '0.3')},
      0 0 0px ${glowColor.replace('0.5', '0.2')}
    `
  };

  return (
    <span className={className} style={glowStyles}>
      {children}
    </span>
  );
};

export default GlowText;
