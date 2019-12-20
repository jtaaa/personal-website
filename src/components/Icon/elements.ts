import styled, { css } from 'styled-components/macro';
import { Flex } from 'utils/styled-components/flex';
import { ExternalLinkContainer } from 'components/ExternalLink/elements';
import { respondTo } from 'utils/styled-components/mixins';

type IconContainerProps = {
  greyed?: boolean;
  round?: boolean;
};
export const IconContainer = styled.div<IconContainerProps>`
  ${ExternalLinkContainer} {
    height: 100%;
    display: block;

    > div > img {
      display: block;
      margin: 0 auto;

      ${respondTo.md} {
        ${props =>
          props.greyed &&
          css`
            filter: opacity(45%) grayscale(100%);
            &:hover {
              filter: none;
            }
          `}
        ${props =>
          props.round &&
          css`
            border-radius: 50%;
          `}
      }
    }
  }
  .__react_component_tooltip {
    display: none;
    margin: 0;

    ${respondTo.md} {
      display: initial;
    }
  }
`;

export const MobileTooltip = styled.div`
  font-size: 0.35em;
  text-align: center;

  ${respondTo.md} {
    display: none;
  }
`;

type IconListProps = {
  fixedWidth?: boolean;
};
export const IconList = styled(Flex)<IconListProps>`
  align-items: stretch;
  margin: 1rem 0;

  > ${IconContainer} {
    margin-right: 1rem;
    ${props =>
      !props.fixedWidth &&
      css`
        width: 3.5em;
      `}

    ${respondTo.md} {
      width: unset;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
