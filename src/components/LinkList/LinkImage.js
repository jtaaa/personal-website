import React from "react";

const LinkImage = ({ fallbackSrc, fallbackType, alt, ...imgProps }) => {
  return (
    <picture>
      <img alt={alt} {...imgProps} />
      {fallbackSrc && <source srcSet={fallbackSrc} type={fallbackType} />}
    </picture>
  );
};

export default LinkImage;
