import { NextPage } from "next";
import Image from "next/image";
import { FaHeart, FaPlay, FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import {
  Search,
  Container,
  ListMusic,
  MusicItem,
} from "../styles/index";

type LoaderProps = {
  src: string;
  width: string;
};

const myLoader = ({ src }: LoaderProps) => {
  return src;
};

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
        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>
        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>

        <MusicItem>
          <Image
            className="img"
            loader={myLoader}
            width={90}
            height={90}
            src="https://api.deezer.com/album/234349272/image"
          />

          <div className="info">
            <span>Music name</span>
            <span>By authors</span>
            <span>in Track</span>

            <span className="more">ver mais</span>
          </div>

          <div className="play">
            <button>
              <FaHeart />
            </button>

            <button>
              <FaPlay />
            </button>
          </div>
        </MusicItem>
      </ListMusic>
    </Container>
  );
};

export default Home;
