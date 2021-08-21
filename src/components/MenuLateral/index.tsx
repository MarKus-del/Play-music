import Image from "next/image";
import Link from "next/link";
import {
  ContainerMenu,
  HeaderMenu,
  FooterPlay,
  Navigation,
  LinkTo,
} from "./styles";
import { BiMusic, BiPlayCircle, BiPlay, BiBookHeart, BiTargetLock } from "react-icons/bi";
import { MdAlbum } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/module/rootReducer";
import { useRef } from "react";
import { useEffect } from "react";
import { play, stop } from "../../store/module/miniplayer/actions";
import { convertDuration } from "../../utils/converts";

export default function MenuLateral() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const { track, isPlaying } = useSelector((state: RootState) => state.miniplayer);

  const playTrack = () => {
    dispatch(play(track));
  }

  const stopTrack = () => {
    dispatch(stop());
  }

  useEffect(() => {
    if (!audioRef.current) return;

    if(isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  return (
    <ContainerMenu>
      <HeaderMenu>
        <BiPlayCircle className="icon" />
        <h1> Play Music</h1>
      </HeaderMenu>

      <Navigation>
        <div className="container-link">
          <BiBookHeart className="icon" />
          <Link href="/favorites" passHref>
            <LinkTo>Favoritos</LinkTo>
          </Link>
        </div>

        <div className="container-link">
          <BiMusic className="icon" />
          <Link href="/" passHref>
            <LinkTo href="">Músicas</LinkTo>
          </Link>
        </div>

        {/* <div className="container-link">
          <MdAlbum className="icon" />
          <LinkTo href="">Álbums</LinkTo>
        </div>

        <div className="container-link">
          <FaGuitar className="icon" />
          <LinkTo href="">Estilos músicais</LinkTo>
        </div> */}
      </Navigation>

      <FooterPlay>
        <Image
          className="img"
          width={90}
          height={90}
          src={track.artist.picture}
          alt={`Capa da música`}
        />

        <div className="info">
          <span>{track.title}</span>
          <span>{track.artist.name}</span>
          <span>
          Duração: {convertDuration(track.duration)}
        </span>
        </div>

        <div className="play">
          <audio 
            src={track.preview}
            ref={audioRef}
            onEnded={stopTrack}
            autoPlay={isPlaying}
          />

          {isPlaying ? (
            <button onClick={stopTrack}>
              <FaPause className="icon" />
            </button>
          ) : (
            <button onClick={playTrack}>
              <FaPlay className="icon" />
            </button>
          )} 
          
        </div>
      </FooterPlay>
    </ContainerMenu>
  );
}
