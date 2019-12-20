import styled from 'styled-components/macro';
import { Flex } from './Flex';

type FlexBetweenProps = {};
export const FlexBetween = styled(Flex)<FlexBetweenProps>`
  justify-content: space-between;
`;
