import { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { api } from "../services/api";
import { Track } from "../services/types";
import { storeWrapper } from "../store";
import { load } from "../store/module/music/actions";
import { RootState } from "../store/module/rootReducer";
import { Search, Container, ListMusic } from "../styles/index";

type ResponseData = {
  data: Track[];
};

const Home: NextPage<ResponseData> = () => {
  const { tracks } = useSelector(
    (state: { music: RootState }) => state.music.music
  );

  return (
    <Container>
      <Search>
        <input type="text" placeholder="Pesquise sua música aqui" />
        <button>
          <FaSearch />
        </button>
      </Search>

      <Header />

      <ListMusic>
        {tracks.map((track) => (
          <MusicItem key={track.id} track={track} />
        ))}
      </ListMusic>
    </Container>
  );
};

export default Home;

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async () => {
    const response = await api.get("/chart/O/tracks");
    const { data }: ResponseData = response.data;

    store.dispatch(load(data));
    return {
      props: [],
    };
  }
);
