import styled from "styled-components";

export const Container = styled.main`
  margin-left: 25vw;
  width: 75vw;
  max-width: 1500px;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &.is-loading {
    width: initial;
    height: initial;
  }

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    max-height: 75vh;
    overflow-y: scroll;
  }

  .container-options {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListMusic = styled.ul`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;

  @media (max-width: 900px) {
    max-height: 60vh;

    grid-template-columns: 1fr;
  }
`;
