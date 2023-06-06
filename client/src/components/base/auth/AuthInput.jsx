import React from "react";
import { twMerge } from "tailwind-merge";


const AuthInput = React.forwardRef( (props , ref) => {
    
    const { className, children, type, ...otherProps } = props;
    const classes = twMerge("block w-full appearance-none bg-white rounded-[10px] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px] px-4 py-3 placeholder-gray-300 shadow-sm text-white focus:outline-none focus:ring-brand-500  text-sm border-2 border-white focus:text-[#707070] placeholder:text-[14px]  xl:placeholder:text-[16px] 2xl:placeholder:text-[20px] md:h-[40px] lg:h-[50px] xl:h-[64px]", className);

    return (
        <input ref={ref} type={type ?? 'text'} className={classes} {...otherProps} />
    );
});

export default AuthInput;