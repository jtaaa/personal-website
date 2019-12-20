import React from 'react';
import { Centered } from 'utils/styled-components/align';

import Icon, { IconType } from './Icon';
import { ICONS } from './constants';

export default { title: 'Icon' };

export const AllIcons = () => {
  return (
    <Centered>
      <div style={{ fontSize: '2em' }}>
        {Object.keys(ICONS).map(type => (
          <Icon key={type} type={type as IconType} />
        ))}
      </div>
    </Centered>
  );
};

export const AllIconsGreyed = () => {
  return (
    <Centered>
      <div style={{ fontSize: '2em' }}>
        {Object.keys(ICONS).map(type => (
          <Icon key={type} type={type as IconType} greyed />
        ))}
      </div>
    </Centered>
  );
};

export const AllIconsWithTooltip = () => {
  return (
    <Centered>
      <div style={{ fontSize: '2em' }}>
        {Object.keys(ICONS).map(type => (
          <Icon
            key={type}
            type={type as IconType}
            tooltip={<span>icon=&quot;{type}&quot;</span>}
          />
        ))}
      </div>
    </Centered>
  );
};

export const AllIconsAsLinks = () => {
  return (
    <Centered>
      <div style={{ fontSize: '2em' }}>
        {Object.keys(ICONS).map(type => (
          <Icon
            key={type}
            type={type as IconType}
            href="https://jallum.xyz/"
            tooltip={
              <span>Clicking this will take you to https://jallum.xyz/</span>
            }
          />
        ))}
      </div>
    </Centered>
  );
};
