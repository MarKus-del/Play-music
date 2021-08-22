import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: auto;
  padding: 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.colors.detach};
    font-size: 3rem;
  }
`;

export const Pagination = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 0.5rem;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 1rem;

    &:disabled {
      cursor: auto;
    }

    &:not(:disabled):hover {
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.backgroundColor};
    }
  }

  .page-index {
    margin: 0.5rem;
    color: ${({ theme }) => theme.colors.detach};
    font-weight: 800;
    font-size: 1.5rem;
    background: none;
  }
`;
