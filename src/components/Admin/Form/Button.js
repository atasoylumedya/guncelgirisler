"use client";

const buttonStyles = {
  success: "bg-green-500 hover:bg-green-700 text-white",
  error: "bg-red-500 hover:bg-red-700 text-white",
  info: "bg-blue-500 hover:bg-blue-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-white",
  default: "bg-gray-500 hover:bg-gray-700 text-white",
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
  xl: "py-4 px-8 text-xl",
};

export default function Button({
  buttonType = "submit",
  type = "default",
  size = "md",
  onClick,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      type={buttonType}
      {...props}
      className={`font-bold rounded cursor-pointer transition-colors duration-300 ${buttonStyles[type]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
