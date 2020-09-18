import React from "react";

const LinkImage = ({ fallbackSrc, fallbackType, ...imgProps }) => {
  return (
    <picture>
      {fallbackSrc && <source srcSet={fallbackSrc} type={fallbackType} />}
      <img {...imgProps} />
    </picture>
  );
};

export default LinkImage;
