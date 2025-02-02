import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AudioPlayer({audio_path, className}) {
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [ref, inView, entry] = useInView({threshold: 0.1});
  const [audio, setAudio] = useState(null);
  const [buttonSrc, setButtonSrc] = useState("/images/svg/global/Reproducir_Audio.svg")
  
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
    setButtonSrc("/images/svg/global/Pausar_Audio.svg")
    audio.addEventListener("ended", () => {
      setButtonSrc("/images/svg/global/Reproducir_Audio.svg")
    })
    
}

  return (
    <>
      <button
        onClick={playAudio}
        className={`flex items-center justify-center
        ${className}`}
      >
        <img
          src={buttonSrc}
          alt="Imagen de reproducir audio"
          className="w-full h-full p-2"
        />
      </button>
    </>
  );
}

export default AudioPlayer;