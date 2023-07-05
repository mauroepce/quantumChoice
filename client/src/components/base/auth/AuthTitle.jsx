import React from "react";
import { twMerge } from "tailwind-merge";
import Box from "../Box";

const AuthTitle = React.forwardRef( (props , ref) => {
    
    const { className, children, ...otherProps } = props;
    const classes = twMerge("text-white tracking-wide font-semibold  flex justify-center items-center text-center w-full h-full text-[35px] xs:text-[24px] md:text-[36px] lg:text-[40px] ", className);

    return (
        <Box ref={ref} className={classes} {...otherProps}>
            {children}
        </Box>
    );
});

export default AuthTitle;