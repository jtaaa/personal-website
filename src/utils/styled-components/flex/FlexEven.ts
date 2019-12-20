import styled from 'styled-components/macro';
import { Flex } from './Flex';

type FlexEvenProps = {};
export const FlexEven = styled(Flex)<FlexEvenProps>`
  /* Make each child expand by the same amount */
  > * {
    flex: 1;
  }
`;
