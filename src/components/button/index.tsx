import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

const Button = ({ children, variant, className, ...rest }: ButtonProps) => {
  if (variant === "primary") {
    return (
      <button
        className={`h-12 px-4 rounded-lg bg-primary text-white font-medium text-xl ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={`h-12 px-4 rounded-lg border border-primary text-primary font-medium text-xl ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return <button {...rest}>{children}</button>;
};

export default Button;
