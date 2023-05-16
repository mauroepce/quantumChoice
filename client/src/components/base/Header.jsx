import React from 'react';
import { twMerge } from 'tailwind-merge';

const Header = ({ 
    title, 
    description,
    className,
    titleClassName,
    descriptionClassName 
}) => {

    const containerClasses = twMerge (
        "content-header h-auto h-auto max-h-[150px] flex flex-col items-center justify-cente ", className
    )

    const titleClasses = twMerge(
        'leading-[1.2] tracking-wide text-[24px] xs:text-[11px] sm:text-[30px] md:text-[36px]',
        titleClassName
      );

    const descriptionClasses = twMerge(
        'leading-[1.2] tracking-wide text-[14px] xs:text-[11px] sm:text-[15px] md:text-[18px] font-normal mt-5',
        descriptionClassName 
      );

  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={descriptionClasses}>{description}</p>
    </div>
  );
};

export default Header;