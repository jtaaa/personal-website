import styled, { css } from 'styled-components/macro';
import { BREAKPOINTS, respondTo } from '../mixins';

type FlexProps = {
  column?: boolean;
  fullHeight?: boolean;
  directionBreakpoint?: keyof typeof BREAKPOINTS;
};
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'initial')};

  ${props =>
    props.directionBreakpoint &&
    css`
      ${respondTo[props.directionBreakpoint]`
        flex-direction: ${props.column ? 'row' : 'column'};
      `}
    `}
  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
    `}
`;
