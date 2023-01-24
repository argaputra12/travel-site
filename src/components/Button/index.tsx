import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className, ...props } : ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-blue text-white text-heading-5 font-label font-bold px-6 py-3 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;