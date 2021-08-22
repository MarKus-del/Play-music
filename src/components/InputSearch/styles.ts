import styled from "styled-components";

export const Search = styled.div`
  height: 100px;
  width: 30rem;
  display: flex;
  align-items: center;

  input {
    width: 27rem;
    height: 3rem;
    padding: 1rem;
    border-radius: 1rem 0 0 1rem;
    border: none;
    border: 2px solid ${({ theme }) => theme.colors.text};
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.backgroundContainerMusic};

    &:hover {
      border: 2px solid white;
    }
  }

  button {
    height: 3rem;
    width: 5rem;
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    border: 2px solid ${({ theme }) => theme.colors.backgroundContainerMusic};
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.detach};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 2px solid white;
    }
  }
`;
