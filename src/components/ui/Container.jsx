"use client";

export default function Container({
  children,
  className = "",
  size = "default",
  ...props
}) {
  const sizeVariants = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`${sizeVariants[size]} mx-auto px-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

