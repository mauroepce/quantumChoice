import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    onClick,
    text,
    className
}) => {

    const defaultClass = twMerge('mt-4 bg-gray-400 p-2 rounded shadow-md transition duration-500 ease-in-out transform', className)

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