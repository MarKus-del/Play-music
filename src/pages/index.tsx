import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { apiFront, apiNext } from "../services/api";
import { storeWrapper } from "../store";
import { Track } from "../services/types";
import { load, update, searchRequest } from "../store/module/music/actions";
import { RootState } from "../store/module/rootReducer";
import {
  convertAxiosResponseToStoreState,
  convertResponseTrackToEntityTrack,
} from "../utils/converts";

import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import {
  Search,
  Container,
  ListMusic,
  Pagination,
  PaginationButton,
} from "../styles/index";

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
  const dispatch = useDispatch();
  const { tracks, isLoading, currentPage, totalPageList, searchName } =
    useSelector((state: RootState) => state.music);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleRequest = async (): Promise<RequestSearchDeezer> => {
    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${search}"&index=0`
    );

    return convertAxiosResponseToStoreState(data);
  };

  const searchTrack = async () => {
    dispatch(searchRequest());
    const { data, total, next, prev } = await handleRequest();

    const totalPagesInSearch = Math.round(total / 10);

    dispatch(
      update({
        tracks: data,
        currentPage: 1,
        totalPageList: totalPagesInSearch,
        searchName: search,
      })
    );
  };

  const nextPage = async () => {
    dispatch(searchRequest());

    const nextPage = currentPage + 1;
    const index = (nextPage - 1) * 10;

    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${searchName}"&index=${index}`
    );

    const { data: tracks } = convertAxiosResponseToStoreState(data);

    dispatch(
      update({
        currentPage: nextPage,
        totalPageList,
        searchName,
        tracks,
      })
    );
  };

  const prevPage = async () => {
    dispatch(searchRequest());

    const prevPage = currentPage - 1;
    const index = (prevPage - 1) * 10;

    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${searchName}"&index=${index}`
    );

    const { data: tracks } = convertAxiosResponseToStoreState(data);

    dispatch(
      update({
        currentPage: prevPage,
        totalPageList,
        searchName,
        tracks,
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

      <Header title={searchName}>
        <Pagination>
          <PaginationButton>
            <button disabled={currentPage === 1} onClick={prevPage}>
              <FaAngleLeft />
            </button>
            <span className="page-index">{currentPage}</span>
            <button onClick={nextPage} disabled={currentPage >= totalPageList}>
              <FaAngleRight />
            </button>
          </PaginationButton>
          <span>Paginas: {totalPageList}</span>
        </Pagination>
      </Header>

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
