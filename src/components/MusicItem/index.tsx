import Image from "next/image";
import { MusicContainer, InfoMusic, FeaturesBox } from "./styles";
import { FaHeart, FaPlay } from "react-icons/fa";

type MusicItemProps = {
  track: {
    id: number;
    title: string;
    thumbnail: string;
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
        width={90}
        height={90}
        src={track.thumbnail}
      />

      <InfoMusic>
        <span>{track.title}</span>
        <span>By <b>authors</b></span>
        <span>Track</span>

        <a className="more"  href={track.linkToDeezer}>ver mais</a>
      </InfoMusic>

      <FeaturesBox>
        <button>
          <FaHeart />
        </button>

        <button>
          <FaPlay />
        </button>
      </FeaturesBox>
    </MusicContainer>
  );
}
