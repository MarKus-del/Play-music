import Image from "next/image";
import { MusicContainer, InfoMusic, FeaturesBox } from "./styles";
import { FaHeart, FaPlay, FaPause } from "react-icons/fa";
import { Track } from "../../services/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/module/rootReducer";
import { play, stop } from "../../store/module/miniplayer/actions";
import { MdTitle } from "react-icons/md";

type MusicItemProps = {
  track: Track
}

export default function MusicItem({ track }: MusicItemProps) {
  const dispatch = useDispatch();
  const { isPlaying, track: trackOnMiniPlayer } = useSelector((state: RootState) => state.miniplayer)

  const playTrack = () => {
    
    stopTrack();
    dispatch(play(track));
  }

  const stopTrack = () => {
    dispatch(stop());
  }

  return (
    <MusicContainer>
      <Image
        className="img"
        width={90}
        height={90}
        src={track.artist.picture}
        alt={`Capa da música ${track.title}`}
      />

      <InfoMusic>
        <span>{track.title}</span>
        <span>Por {' '}
          <b>
            <a href={track.artist.link} target="_blank" rel="noreferrer">{track.artist.name}</a>
          </b>
        </span>

        <a className="more"  href={track.link}>ver mais</a>
      </InfoMusic>

      <FeaturesBox isPlaying={track.id === trackOnMiniPlayer.id}>
        <button className="like">
          <FaHeart />
        </button>

        {
          isPlaying && (track.id === trackOnMiniPlayer.id) 
          ? (
            <button className="is-playing" onClick={stopTrack} >
              <FaPause />
            </button>
          )
          : (
            <button onClick={playTrack} >
              <FaPlay />
            </button>
          )
        }

        
      </FeaturesBox>
    </MusicContainer>
  );
}
