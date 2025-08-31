import type { ReactElement } from "react";

interface ButtonProps {
    variant: 'primary' | 'secondary';
    text: string;
    startIcon?: ReactElement;               
}

// purple 600 = #5046e4
// purple 200 = #e0e7ff
// purple 400 = #6a66c4

//  gray-200 = #f9fbfc
// gray-600 = #666869

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