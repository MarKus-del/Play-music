import styled from "styled-components";

export const ContainerMenu = styled.aside`
  width: 25vw;
  max-width: 400px;
  height: 100vh;
  border-right: 2px solid ${({ theme }) => theme.colors.borderColor};
  background-color: "#636e72";
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;

  @media (max-width: 1000px) {
    border-right: none;
    max-height: 500px;
    max-width: 100vw;
    width: 100vw;
    flex-direction: column-reverse;
    bottom: 0;
  }
`;

export const HeaderMenu = styled.header`

  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.detach};

  @media (max-width: 1000px) {
    display: none;
  }

  h1 {
    font-size: 2rem;
    color: inherit;
    font-weight: 700;
  }

  .icon {
    margin-right: 1rem;
    font-size: 4rem;
    background-color: inherit;
  }
`;

export const Navigation = styled.nav`
  margin-top: 10rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    border-top: 2px solid ${({ theme }) => theme.colors.text};
    width: 100vw;
    flex-direction: row;
    margin-top: 0;

    .container-link {
      width: 50%;
      justify-content: center;
    }
    .container-link:first-of-type {
      border-right: 2px solid ${({ theme }) => theme.colors.text};
    }
  }

  .container-link {
    padding: 1rem;
    display: flex;
    align-items: center;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.detach};
    }
  }

  .container-link .icon {
    margin-right: 1rem;
    font-size: 2rem;
    background-color: inherit;
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: inherit;
`;

export const FooterPlay = styled.section`
  position: fixed;
  width: inherit;
  max-width: 400px;
  bottom: 0;
  height: 6rem;
  border-top: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "photo info info play";

  @media (max-width: 1000px) {
    max-width: 100vw;
    position: relative;
    grid-template-columns: 1fr 2fr 3fr;

    .photo {
      max-height: 80%;
    }
  }

  .photo {
    grid-area: "photo";
    height: 100%;
    width: 20;
  }

  .info {
    grid-area: "info";
    padding: 0.5rem;
    font-size: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .play {
    grid-area: "play";
    margin: auto auto;
  }

  .play button {
    border-radius: 1rem;
    border: none;
    background: none;

    cursor: pointer;
    color: ${({ theme }) => theme.colors.playMusic};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.playDisable};
    }

    .icon {
      font-size: 2rem;
      color: inherit;
    }
  
  }
`;
