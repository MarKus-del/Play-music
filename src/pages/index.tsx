import { NextPage } from "next";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import MusicItem from "../components/MusicItem";
import { Search, Container, ListMusic } from "../styles/index";

const Home: NextPage = () => {
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
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
          
        />

<MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
          
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
        />
        <MusicItem 
          track={{
            id: 12,
            title: 'dadad',
            duration: 120,
            preview: "",
            linkToDeezer: "https://www.deezer.com/track/1391349252",
            thumbnail: 'https://api.deezer.com/artist/135512622/image' 
          }}
          
        />
      </ListMusic>
    </Container>
  );
};

export default Home;
