import React from "react";

const LinkImage = ({ fallbackSrc, fallbackType, ...imgProps }) => {
  return (
    <picture>
      <img {...imgProps} />
      {fallbackSrc && <source srcSet={fallbackSrc} type={fallbackType} />}
    </picture>
  );
};

export default LinkImage;
