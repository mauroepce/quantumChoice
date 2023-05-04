import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({
    text,
    className
}) => {

    const defaultClass = twMerge('bg-gray-400 p-4 rounded shadow-md transition duration-500 ease-in-out transform', className)

    return (
        <div 
            className={defaultClass}
        >
            {text}
        </div>
    );
}

export default Card;