import styled from "styled-components";

export const MusicContainer = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundContainerMusic};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  grid-template-areas: "photo info play";

  .img {
    grid-area: photo;
    background-color: red;
    border-radius: 1rem 0 0 1rem;
  }
`;

export const InfoMusic = styled.div`
  color: ${({ theme }) => theme.colors.black};

  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 0.5rem;
  
  
  span {
    height: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  a:hover {
    color: black;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.linkHover};
  }

  .more {
    cursor: pointer;
    font-weight: 800;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }

  .more:hover {
    color: black;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.linkHover};
  }
`;

type FeaturesBoxProps = {
  readonly isPlaying: boolean;
};

export const FeaturesBox = styled.div<FeaturesBoxProps>`
  grid-area: play;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    margin-right: 1rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.detach};

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.playMusic};
    }
  }

  .is-playing {
    color: ${({ theme }) => theme.colors.playMusic};
  }
`;
