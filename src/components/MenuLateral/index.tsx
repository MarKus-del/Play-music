import Image from "next/image";
import {
  ContainerMenu,
  HeaderMenu,
  FooterPlay,
  Navigation,
  LinkTo,
} from "./styles";
import { BiMusic, BiPlayCircle, BiPlay, BiBookHeart } from "react-icons/bi";
import { MdAlbum } from "react-icons/md";
import { FaGuitar } from "react-icons/fa";

type LoaderProps = {
  src: string;
  width: string;
};

const myLoader = ({ src }: LoaderProps) => {
  return src;
};

export default function MenuLateral() {
  return (
    <ContainerMenu>
      <HeaderMenu>
        <BiPlayCircle className="icon" />
        <h1> Play Music</h1>
      </HeaderMenu>

      <Navigation>
        <div className="container-link">
          <BiBookHeart className="icon" />
          <LinkTo href="">Favoritos</LinkTo>
        </div>

        <div className="container-link">
          <BiMusic className="icon" />
          <LinkTo href="">Músicas</LinkTo>
        </div>

        <div className="container-link">
          <MdAlbum className="icon" />
          <LinkTo href="">Álbums</LinkTo>
        </div>

        <div className="container-link">
          <FaGuitar className="icon" />
          <LinkTo href="">Estilos músicais</LinkTo>
        </div>
      </Navigation>

      <FooterPlay>
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
        </div>

        <div className="play">
          <button>
            <BiPlay className="icon" />
          </button>
        </div>
      </FooterPlay>
    </ContainerMenu>
  );
}
