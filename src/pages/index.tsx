import { GetServerSideProps, NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { api } from "../services/api";
import { Track } from "../services/types";
import { Search, Container, ListMusic } from "../styles/index";

type ResponseData = {
  data: Track[];
};

const Home: NextPage<ResponseData> = ({ data }) => {
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
        {data.map((track) => (
          <MusicItem 
            key={track.id}
            track={track}
          />
        ))}
      </ListMusic>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/chart/O/tracks");
  const { data }: ResponseData = response.data;  

  return {
    props: {
      data
    }
  }
};
