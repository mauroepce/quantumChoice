import React from 'react';
import { twMerge } from 'tailwind-merge';

const Header = ({ 
    title, 
    description,
    className,
    titleClassName 
}) => {

    const containerClasses = twMerge (
        "content-header xsm:h-auto h-auto max-h-[150px]", className
    )

    const titleClasses = twMerge(
        'text-5xl lg:text-4xl md:text-3xl text-2xl xsm:text-xl filter shadow-2xl',
        titleClassName
      );

  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>{title}</h1>
      <p className=' my-5 text-center text-sm'>{description}</p>
    </div>
  );
};

export default Header;