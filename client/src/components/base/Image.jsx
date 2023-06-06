
import React from 'react';

const Img = ({ 
    src = '', 
    width, 
    height, 
    alt, 
    className, 
    onClick, 
    ...props }) => {
  
    const params = src.includes('?');
    let source;

  if (params) {
      source = `${src}&w=${width}&h=${height}`;
  } else {
      source = `${src}?w=${width}&h=${height}`;
  }

  return <img src={`${source}`} className={className} alt={alt} onClick={onClick} {...props} />;
}

export default Img;