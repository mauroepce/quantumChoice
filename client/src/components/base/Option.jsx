import React from 'react';
import { twMerge } from 'tailwind-merge';

const Option = ({
    onClick,
    label,
    className
}) => {

    const defaultClass = twMerge('bg-gray-400 p-4 rounded shadow-md transition duration-500 ease-in-out transform', className)

    return (
        <button 
            className={defaultClass}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Option;