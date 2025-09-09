import React from "react";

const RadialGradient = ({ 
  className, 
  colors = ["    rgb(26, 51, 110,0.6)" , "rgba(0, 0, 0, 0.8)", "black"],
  stops = ["0%", "90%", "100%"]
}) => {
  const gradientStyle = {
    background: `radial-gradient(ellipse at center, ${colors[0]} ${stops[0]}, ${colors[1]} ${stops[1]}, ${colors[2]} ${stops[2]})`
  };

  return (
    <div 
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
      style={gradientStyle}
    />
  );
};

export default RadialGradient;
