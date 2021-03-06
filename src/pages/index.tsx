import { GetServerSideProps, NextPage } from "next";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";

import { apiNext } from "../services/api";
import { initializeStore } from "../store";
import { Track } from "../services/types";
import { load } from "../store/module/music/actions";
import { RootState } from "../store/module/rootReducer";
import { convertResponseTrackToEntityTrack } from "../utils/converts";

import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { Container, ListMusic } from "../styles/index";
import InputSearch from "../components/InputSearch";
import { firstTrack } from "../store/module/miniplayer/actions";
import { useEffect } from "react";
import Toogle from "../components/Toogle";

type ResponseData = {
  data: Track[];
};

const Home: NextPage<ResponseData> = () => {
  const { tracks, isLoading } = useSelector((state: RootState) => state.music);

  useEffect(() => {
    localStorage.getItem("favorites");
  }, []);

  return (
    <Container>
      <div className="container-options">
        <InputSearch />
        <Toogle />
      </div>

      <Header />
      <ListMusic>
        {isLoading ? (
          <Container className="is-loading">Carregando</Container>
        ) : (
          tracks.map((track) => <MusicItem key={track.id} track={track} />)
        )}
      </ListMusic>
    </Container>
  );
};

export default Home;

type DeezerApiTopTracks = {
  data: Track[];
  total: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const reduxStore = initializeStore();

  const { dispatch } = reduxStore;
  const { data }: AxiosResponse<DeezerApiTopTracks> = await apiNext.get(
    `/chart/O/tracks`
  );

  const topTracks: Track[] = data.data.map((track) =>
    convertResponseTrackToEntityTrack(track)
  );

  dispatch(
    load({
      tracks: topTracks,
      currentPage: 1,
      totalPageList: 1,
      searchName: "Top Musicas",
    })
  );
  dispatch(firstTrack(topTracks[0]));

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
};
