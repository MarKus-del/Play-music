import Image from "next/image";
import { MusicContainer } from "./styles";
import { FaHeart, FaPlay } from "react-icons/fa";

type LoaderProps = {
  src: string;
  width: number;
};

const myLoader = ({ src }: LoaderProps) => {
  return src;
};

type MusicItemProps = {
  track: {
    id: number;
    title: string;
    linkToDeezer: string;
    duration: number;
    preview: string;
  }
}

export default function MusicItem({ track }: MusicItemProps) {
  return (
    <MusicContainer>
      <Image
        className="img"
        loader={myLoader}
        width={90}
        height={90}
        src="https://api.deezer.com/album/234349272/image"
      />

      <div className="info">
        <span>{track.title}</span>
        <span>By authors</span>
        <span>in Track</span>

        <a className="more"  href={track.linkToDeezer}>ver mais</a>
      </div>

      <div className="play">
        <button>
          <FaHeart />
        </button>

        <button>
          <FaPlay />
        </button>
      </div>
    </MusicContainer>
  );
}
