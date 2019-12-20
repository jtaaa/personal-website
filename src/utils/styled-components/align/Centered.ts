import styled from 'styled-components/macro';

type CenteredProps = {
  children: React.ReactChild;
};
export const Centered = styled.div<CenteredProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
