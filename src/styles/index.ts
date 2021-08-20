import styled from "styled-components";

export const Container = styled.main`
  width: 75vw;
  max-width: 1500px;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

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

export const ListMusic = styled.ul`
  flex: 1;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
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
      color: ${({ theme }) => theme.colors.white};
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
