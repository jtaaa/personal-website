import styled from 'styled-components/macro';
import { respondTo } from 'utils/styled-components/mixins';

export const Content = styled.div`
  ${respondTo.md} {
    text-align: end;
  }
`;
