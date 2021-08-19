import styled from "styled-components";

export const Container = styled.main`
  width: 75vw;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

export const MusicItem = styled.li`
  list-style: none;
  width: 100%;
  height: 6rem;
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

  .info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;

    .more {
      cursor: pointer;
			font-weight: 800;
			font-size: 1.5rem;
    }
  }

  .play {
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
  }
`;
