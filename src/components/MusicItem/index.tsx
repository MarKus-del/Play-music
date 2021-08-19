import Image from "next/image";
import { MusicContainer, InfoMusic, FeaturesBox } from "./styles";
import { FaHeart, FaPlay } from "react-icons/fa";
import { Track } from "../../services/types";

type MusicItemProps = {
  track: Track
}

export default function MusicItem({ track }: MusicItemProps) {
  return (
    <MusicContainer>
      <Image
        className="img"
        width={90}
        height={90}
        src={track.artist.picture}
      />

      <InfoMusic>
        <span>{track.title}</span>
        <span>By <b>authors</b></span>
        <span>Track</span>

        <a className="more"  href={track.link}>ver mais</a>
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
