import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-[#C93409]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;

