import type { ReactElement } from "react";

interface ButtonProps {
    variant: 'primary' | 'secondary';
    text: string;
    startIcon?: ReactElement;               
}

const variantStyles = {
  "primary": 'bg-[#5046e4] text-white hover:cursor-pointer hover:bg-[#6a66c4]',
  "secondary": 'bg-[#e0e7ff] text-[#5046e4] hover:cursor-pointer hover:bg-[#c7d1ff]',
}

const defaultStyles = 'px-4 py-2 rounded-md flex items-center';

export function Button({variant, text, startIcon}: ButtonProps) {
  return (
    <button className={variantStyles[variant] + " " + defaultStyles}>
      {startIcon}
      {text}
    </button>
  );
}