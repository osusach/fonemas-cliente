import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AudioPlayer({audio_path, className}) {
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [ref, inView, entry] = useInView({threshold: 0.1});
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    if (!isAudioReady) {
      setAudio(new Audio(audio_path))
      setIsAudioReady(true)
    }
  }, [inView])

  useEffect(() => {
    setAudio(new Audio(audio_path))
    setIsAudioReady(true)
  }, [audio_path])


  const playAudio = () => {
    if (!audio) {
      setAudio(new Audio(audio_path))
      setIsAudioReady(true)
    }
    audio.play();
}

  return (
    <>
      <button
        onClick={playAudio}
        className={`col-span-4 col-start-5 m-auto
        ${className}`}
      >
        <img
          src="/images/svg/global/Reproducir_Audio.svg"
          alt="Imagen de reproducir audio"
          className="w-full h-full p-2"
        />
      </button>
    </>
  );
}

export default AudioPlayer;