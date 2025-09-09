import React from "react";

const AmbientGlow = ({ 
  className = "",
  glows = [
    { position: "top-20 left-20", color: "rgb(252, 153, 76)", size: "w-64 h-64" },
    { position: "bottom-10 left-10", color: "rgb(252, 153, 76)", size: "w-48 h-48" },
    { position: "top-32 right-32", color: "rgb(252, 153, 76)", size: "w-56 h-56" }
  ]
}) => {
  return (
    <>
      {glows.map((glow, index) => (
        <div
          key={index}
          className={`absolute pointer-events-none ${glow.position} ${glow.size} ${className}`}
          style={{
            background: `radial-gradient(circle, ${glow.color} 0%, transparent 70%)`,
            filter: "blur(3px)",
            opacity: 0.6
          }}
        />
      ))}
    </>
  );
};

export default AmbientGlow;
