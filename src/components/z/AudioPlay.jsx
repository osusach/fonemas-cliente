import { useState } from "react";

export default function AudioPlay() {
    const [currentAudio, setCurrentAudio] = useState(0);
    const [sShowAnswer, setSShowAnswer] = useState(false);
    const [zShowAnswer, setZShowAnswer] = useState(false);
    const audioList = ["Socket", "Signal", "ZigZag", "Zero", "Secret", "Zing"];

    const playAudio = () => {
        const audio = new Audio(`/public/audio/z/${audioList[currentAudio]}.mp3`);
        audio.play();
    }

    const countAudio = () => {
        if (currentAudio === audioList.length - 1) {
            return;
        }
        setCurrentAudio(currentAudio + 1);
        setSShowAnswer(false);
        setZShowAnswer(false);
    }

    const discountAudio = () => {
        setCurrentAudio(currentAudio - 1);
        setSShowAnswer(false);
        setZShowAnswer(false);
    }

    const validateAnswer = (answer) => {
        // Hacer bien las validaciones tomando en cuenta que la respuesta correcta es diferente dependiendo del audio.
        switch (currentAudio) {
            // Caso que sea Socket
            case 0:
                if (answer === "s") {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                } else {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                }
                break;
            // Caso que sea Signal
            case 1:
                if (answer === "s") {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                } else {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                }
                break;
            // Caso que sea ZigZag
            case 2:
                if (answer === "z") {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                } else {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                }
                break;
            // Caso que sea Zero
            case 3:
                if (answer === "z") {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                } else {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                }
                break;
            // Caso que sea Secret
            case 4:
                if (answer === "s") {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                } else {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                }
                break;
            // Caso que sea Zing
            case 5:
                if (answer === "z") {
                    setZShowAnswer(true);
                    setSShowAnswer(false);
                } else {
                    setSShowAnswer(true);
                    setZShowAnswer(false);
                }
                break;
            default:
                break;
        }
    }

    return (
        <section className="grid grid-cols-12 gap-4">
            <span className="text-[#6610F2] col-span-2 col-start-6 text-[40px] text-center m-auto">
                Palabra {currentAudio + 1}
            </span>
            {/* Left arrow */}
            {currentAudio === 0 ?
                ""
                :
                <button onClick={discountAudio}
                    className="col-span-1 col-start-1 m-auto"
                >
                    <img src="/images/svg/Flecha_Izquierda.svg"
                        alt="Imagen de flecha izquierda"
                    />
                </button>
            }
            {/* Play audio image */}
            <button className="col-span-2 col-start-6 max-w-[216px] w-full m-auto">
                <img onClick={playAudio}
                    src="/images/svg/Reproducir_Audio.svg"
                    alt="Imagen de reproducir audio"
                />
            </button>
            {/* Right arrow */}
            <button onClick={countAudio}
                className="col-span-1 col-start-12 m-auto"
            >
                <img src="/images/svg/Flecha_Derecha.svg"
                    alt="Imagen de flecha derecha"
                />
            </button>
            {/* Answers */}
            <button onClick={() => validateAnswer("s")}
                className={`col-start-4 w-[234px] h-[82px] text-[40px] border-black text-white rounded-[48px] ${sShowAnswer ? "bg-green-500" : "bg-[#6610F2]"}`}>
                Tiene s
            </button>
            <button onClick={() => validateAnswer("z")}
                className={`col-start-8 w-[234px] h-[82px] text-[40px] border-black text-white rounded-[48px] ${zShowAnswer ? "bg-red-500" : "bg-[#6610F2]"}`}>
                Tiene z
            </button>
        </section>
    );
}