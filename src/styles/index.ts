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

export const ListMusic = styled.ul`
  flex: 1;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
`;
