import Image from "next/image";
import { MusicContainer, InfoMusic, FeaturesBox } from "./styles";
import { FaHeart, FaHeartBroken, FaPlay, FaPause } from "react-icons/fa";
import { Track } from "../../services/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/module/rootReducer";
import { play, stop } from "../../store/module/miniplayer/actions";
import {
  addFavorites,
  removeFavorites,
} from "../../store/module/favorites/actions";
import { useEffect } from "react";
import { useState } from "react";

type MusicItemProps = {
  track: Track;
};

export default function MusicItem({ track }: MusicItemProps) {
  const [isFavorited, SetIsFavorited] = useState(false);
  const dispatch = useDispatch();

  const { isPlaying, track: trackOnMiniPlayer } = useSelector(
    (state: RootState) => state.miniplayer
  );

  const { favoritesTracks } = useSelector(
    (state: RootState) => state.favorites
  );

  // useEffect(() => {
  //   console.log(favoritesTracks);

  //   const alreadyWithFilter =
  //   console.log(alreadyWithFilter);

  //   if (alreadyWithFilter.length > 0) {
  //     SetIsFavorited(true);
  //   }

  //   SetIsFavorited(false);
  // }, [favoritesTracks, track.id]);

  const playTrack = () => {
    stopTrack();
    dispatch(play(track));
  };

  const stopTrack = () => {
    dispatch(stop());
  };

  const like = () => {
    dispatch(addFavorites(track));
  };

  const deslike = () => {
    dispatch(removeFavorites(track));
  };

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
        <span>
          Por{" "}
          <b>
            <a href={track.artist.link} target="_blank" rel="noreferrer">
              {track.artist.name}
            </a>
          </b>
        </span>

        <a className="more" href={track.link}>
          ver mais
        </a>
      </InfoMusic>

      <FeaturesBox>
        {favoritesTracks.filter(({ id }) => id === track.id).length > 0 ? (
          <button className="deslike" onClick={deslike}>
            <FaHeartBroken />
          </button>
        ) : (
          <button onClick={like}>
            <FaHeart />
          </button>
        )}

        {isPlaying && track.id === trackOnMiniPlayer.id ? (
          <button className="is-playing" onClick={stopTrack}>
            <FaPause />
          </button>
        ) : (
          <button onClick={playTrack}>
            <FaPlay />
          </button>
        )}
      </FeaturesBox>
    </MusicContainer>
  );
}
