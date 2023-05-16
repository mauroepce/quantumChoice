import React from 'react';
import { twMerge } from 'tailwind-merge';

const Text = React.forwardRef((props, ref) => {
  const { className, children, ...otherProps } = props;
  const classes = twMerge('leading-[1.2] tracking-wide text-[14px] xs:text-[11px] sm:text-[15px] md:text-[18px] font-normal', className);

  return (
    <p ref={ref} className={classes} {...otherProps}>
      {children}
    </p>
  );
});

export default Text;