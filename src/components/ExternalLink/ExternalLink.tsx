import React from 'react';
import { ExternalLinkContainer } from './elements';

type ExternalLinkProps = {
  href?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  style,
  children,
}) => {
  return (
    <ExternalLinkContainer
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
