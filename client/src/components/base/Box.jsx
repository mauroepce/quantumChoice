import React from 'react';
import {twMerge} from 'tailwind-merge';

const Box = React.forwardRef((props, ref) => {
  const { className, children, ...otherProps } = props;
  const classes = twMerge('relative', className);

  return (
    <div className={classes} ref={ref} {...otherProps}>
      {children}
    </div>
  );
});

export default Box;