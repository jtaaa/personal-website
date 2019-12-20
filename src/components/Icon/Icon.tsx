import React from 'react';
import uuid from 'uuid/v4';
import ReactTooltip from 'react-tooltip';
import ExternalLink from 'components/ExternalLink';

import { FlexBetween } from 'utils/styled-components/flex';
import { IconContainer, MobileTooltip } from './elements';
import { ICONS } from './constants';

export type IconType = keyof typeof ICONS;

type IconProps = {
  type: IconType;
  href?: string;
  tooltip?: React.ReactNode;
  greyed?: boolean;
  round?: boolean;
  style?: React.CSSProperties;
};
const Icon: React.FC<IconProps> = ({
  type,
  href,
  tooltip,
  greyed,
  round,
  style,
}) => {
  const id = uuid();
  const { src, alt } = ICONS[type];
  return (
    <IconContainer greyed={greyed} style={style} round={round}>
      <ExternalLink href={href}>
        <FlexBetween data-tip data-for={id} column fullHeight>
          <img src={src} alt={alt} style={{ width: '1em' }} />
          {tooltip && (
            <>
              <ReactTooltip id={id} type="light" effect="solid" place="bottom">
                {tooltip}
              </ReactTooltip>
              <MobileTooltip>{tooltip}</MobileTooltip>
            </>
          )}
        </FlexBetween>
      </ExternalLink>
    </IconContainer>
  );
};

export default Icon;
