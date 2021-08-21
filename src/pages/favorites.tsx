import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { firstTrack } from "../store/module/miniplayer/actions";
import { RootState } from "../store/module/rootReducer";
import { Container, ListMusic } from "../styles";

export default function Favorites() {
  const dispatch = useDispatch();
  const { favoritesTracks } = useSelector(
    (state: RootState) => state.favorites
  )

  const loadMiniPlayer = () => {
    dispatch(firstTrack(favoritesTracks[0]))
  }

  useEffect(() => {
    localStorage.getItem("favorites");
    loadMiniPlayer()
    
  }, []);

  ;
  return (
    <Container>
      <ListMusic>
        { favoritesTracks.length <= 0 ? (<h1>Sua lista está vazia</h1>) : (
          favoritesTracks.map((track) => (
            <MusicItem key={track.id} track={track} />
          ))
        )}
      </ListMusic>
    </Container>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      initialReduxState: {},
    },
  };
};
