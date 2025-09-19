import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = "default", 
  size = "default", 
  className, 
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-3xl transition-colors";
  
  const variants = {
    default: "bg-blue-500 text-white hover:bg-white hover:text-black",
    secondary: "bg-blue-500 text-white hover:bg-white hover:text-black",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };
  
  const sizes = {
    default: "px-6 py-2",
    sm: "px-4 py-1 text-sm",
    lg: "px-8 py-3 text-lg"
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
