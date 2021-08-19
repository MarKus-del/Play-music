import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: auto;
  padding: 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 1rem;
  h1 {
    color: ${({ theme }) => theme.colors.detach};
    font-size: 3rem;
  }
`;