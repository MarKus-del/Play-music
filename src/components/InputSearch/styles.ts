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

    &:hover {
      border: 2px solid black;
    }
  }

  button {
    height: 3rem;
    width: 5rem;
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    border: 2px solid ${({ theme }) => theme.colors.text};
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.detach};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 2px solid black;
    }
  }
`;
