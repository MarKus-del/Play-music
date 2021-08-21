import { NextPage } from "next";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";

import { apiNext } from "../services/api";
import { storeWrapper } from "../store";
import { Track } from "../services/types";
import { load, update, searchRequest } from "../store/module/music/actions";
import { RootState } from "../store/module/rootReducer";
import {
  convertResponseTrackToEntityTrack,
} from "../utils/converts";

import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { Container, ListMusic } from "../styles/index";
import InputSearch from "../components/InputSearch";

type ResponseData = {
  data: Track[];
};

type RequestSearchDeezer = {
  data: Track[];
  next?: string | null;
  total: number;
  prev?: string | null;
};

const Home: NextPage<ResponseData> = () => {
  const { tracks, isLoading } = useSelector((state: RootState) => state.music);

  return (
    <Container>
      <InputSearch />

      <Header />

      <ListMusic>
        {isLoading ? (
          <Container>Carregando</Container>
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

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async () => {
    const { data }: AxiosResponse<DeezerApiTopTracks> = await apiNext.get(
      `/chart/O/tracks`
    );

    const topTracks: Track[] = data.data.map((track) =>
      convertResponseTrackToEntityTrack(track)
    );
    store.dispatch(load(topTracks));

    return {
      props: [],
    };
  }
);
