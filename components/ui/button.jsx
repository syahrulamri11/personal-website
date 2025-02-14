import React from "react";

export function Button({ children, variant = "default", className, ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all focus:outline-none";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
