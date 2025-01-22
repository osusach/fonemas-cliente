import { useState } from "react";
import { zAudioList } from "../../constant/constants";

export default function AudioPlay() {
    const [currentAudio, setCurrentAudio] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    // Play audio function
    const playAudio = () => {
        const audio = new Audio(`/audio/z/${zAudioList[currentAudio]}.mp3`);
        audio.play();
    }

    // Count and discount audio functions
    const countAudio = () => {
        setCurrentAudio(currentAudio + 1);
        setSelectedButton(null);
    }

    const discountAudio = () => {
        setCurrentAudio(currentAudio - 1);
        setSelectedButton(null);
    }

    // Validate answer function
    const validateAnswer = (answer) => {
        setSelectedButton(answer);

        switch (currentAudio) {
            case 0: // Socket
                setIsCorrect(answer === "s");
                break;
            case 1: // Signal
                setIsCorrect(answer === "s");
                break;
            case 2: // ZigZag
                setIsCorrect(answer === "z");
                break;
            case 3: // Zero
                setIsCorrect(answer === "z");
                break;
            case 4: // Secret
                setIsCorrect(answer === "s");
                break;
            case 5: // Zing
                setIsCorrect(answer === "z");
                break;
            default:
                break;
        }
    }

    // Get button color function
    const getButtonColor = (buttonType) => {
        if (selectedButton === buttonType) {
            return isCorrect ? "bg-green-500" : "bg-red-500";
        }
        return "bg-[#6610F2]";
    }

    return (
        <section className="grid grid-cols-12 gap-4">
            {/* Number of word */}
            <span className="text-[#6610F2] col-span-2 col-start-6 text-[40px] text-center m-auto">
                Palabra {currentAudio + 1}
            </span>
            {/* Left arrow button */}
            {currentAudio === 0 ?
                "" :
                <button onClick={discountAudio} className="col-span-1 col-start-1 m-auto">
                    <img src="/images/svg/Flecha_Izquierda.svg" alt="Imagen de flecha izquierda" />
                </button>
            }
            {/* Play audio button */}
            <button className="col-span-2 col-start-6 max-w-[216px] w-full m-auto">
                <img onClick={playAudio} src="/images/svg/Reproducir_Audio.svg" alt="Imagen de reproducir audio" />
            </button>
            {/* Right arrow button */}
            {currentAudio === zAudioList.length - 1 ?
                "" :
                <button onClick={countAudio} className="col-span-1 col-start-12 m-auto">
                    <img src="/images/svg/Flecha_Derecha.svg" alt="Imagen de flecha derecha" />
                </button>
            }
            {/* Answer buttons */}
            <button
                onClick={() => validateAnswer("s")}
                className={`col-start-4 w-[234px] h-[82px] text-[40px] border-black text-white rounded-[48px] ${getButtonColor("s")}`}>
                Tiene s
            </button>
            <button
                onClick={() => validateAnswer("z")}
                className={`col-start-8 w-[234px] h-[82px] text-[40px] border-black text-white rounded-[48px] ${getButtonColor("z")}`}>
                Tiene z
            </button>
        </section>
    );
}