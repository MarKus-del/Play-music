import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { apiNext } from "../services/api";
import { convertResponseTrackToEntityTrack } from "../services/convertResponseToEntity";
import { Track } from "../services/types";
import { storeWrapper } from "../store";
import { load, update } from "../store/module/music/actions";
import { RootState } from "../store/module/rootReducer";
import { Search, Container, ListMusic } from "../styles/index";

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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { tracks, isLoading } = useSelector((state: RootState) => state.music);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleRequest = async () => {
    const { data }: AxiosResponse<RequestSearchDeezer> = await axios.get(
      `http://172.18.26.4:3000/api/track/search?name="${search}"&index=0`
    );

    const { data: result, total, next, prev } = data;

    const filter: Track[] = result.map((track) =>
      convertResponseTrackToEntityTrack(track)
    );

    return {
      data: filter,
      total,
      next: next ? next : null,
      prev: prev ? prev : null,
    };
  };

  const searchTrack = async () => {
    const { data, total, prev, next } = await handleRequest();

    const totalPagesInSearch = Math.floor(total / 10);

    dispatch(
      update({
        tracks: data,
        currentPage: 1,
        totalPageList: totalPagesInSearch,
      })
    );
  };

  return (
    <Container>
      <Search>
        <input
          type="text"
          placeholder="Pesquise sua música aqui"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={searchTrack}>
          <FaSearch />
        </button>
      </Search>

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
