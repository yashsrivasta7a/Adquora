import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ 
  children, 
  onClick, 
  variant = "default", 
  size = "default", 
  className, 
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-3xl transition-colors";
  
  const variants = {
    default: "bg-blue-500 text-white hover:bg-gray-600",
    secondary: "bg-[#010d56] text-white hover:bg-gray-600",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };
  
  const sizes = {
    default: "px-6 py-2",
    sm: "px-4 py-1 text-sm",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
