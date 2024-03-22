import React from "react";

type ButtonProps = {
  className: string;
  type?: "button" | "submit" | "reset";
  title: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ className, title, type, handleClick }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
