import React from "react";

const EdgeGlow = ({ 
  position = "top", 
  color = "rgba(168, 85, 247, 0.4)", 
  intensity = 0.6,
  size = "large",
  className = ""
}) => {
  const positions = {
    top: "absolute top-0 left-0 right-0 h-32",
    "top-left": "absolute top-0 left-0 h-96 w-96",
    "top-right": "absolute top-0 right-0 h-96 w-96",
    "bottom-left": "absolute bottom-0 left-0 h-96 w-96",
    "bottom-right": "absolute bottom-0 right-0 h-96 w-96",
    bottom: "absolute bottom-0 left-0 right-0 h-32",
    left: "absolute top-0 left-0 bottom-0 w-32",
    right: "absolute top-0 right-0 bottom-0 w-32"
  };

  const gradients = {
    top: `linear-gradient(180deg, ${color} 0%, transparent 70%)`,
    "top-left": `radial-gradient(ellipse at top left, ${color} 0%, transparent ${intensity * 100}%)`,
    "top-right": `radial-gradient(ellipse at top right, ${color} 0%, transparent ${intensity * 100}%)`,
    "bottom-left": `radial-gradient(ellipse at bottom left, ${color} 0%, transparent ${intensity * 100}%)`,
    "bottom-right": `radial-gradient(ellipse at bottom right, ${color} 0%, transparent ${intensity * 100}%)`,
    bottom: `linear-gradient(0deg, ${color} 0%, transparent 70%)`,
    left: `linear-gradient(90deg, ${color} 0%, transparent 70%)`,
    right: `linear-gradient(270deg, ${color} 0%, transparent 70%)`
  };

  return (
    <div 
      className={`pointer-events-none z-0 ${positions[position]} ${className}`}
      style={{
        background: gradients[position],
        filter: `blur(${size === 'large' ? '7px' : '8px'})`
      }}
    />
  );
};

export default EdgeGlow;
