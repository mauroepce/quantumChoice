import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    onClick,
    text,
    className
}) => {

    const defaultClass = twMerge('w-full bg-[#0082F6] hover:bg-[#0069d9] active:bg-[#0069d9] text-white text-[16px] font-semibold py-3 px-4 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0082F6] focus:ring-opacity-50', className)

    return (
        <button 
            className={defaultClass}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;