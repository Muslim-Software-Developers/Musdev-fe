import React from "react";
import Spinner from "../spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "outline";
}

const Button = ({
  children,
  variant,
  className,
  isLoading,
  ...rest
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <button
        className={`h-12 px-4 rounded-lg bg-primary text-white text-center font-medium text-xl ${className}`}
        {...rest}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={`h-12 px-4 rounded-lg border border-primary text-center text-primary font-medium text-xl ${className}`}
        {...rest}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }

  return (
    <button className={className} {...rest}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
