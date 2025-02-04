import { useState } from "react";
import { t_dAudioList } from "../../constant/constants"; import AudioPlayer from "../AudioPlayer";

export function AudioPlay() {
    const [currentAudio, setCurrentAudio] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);


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
                setIsCorrect(answer === "ingles");
                break;
            case 1: // Signal
                setIsCorrect(answer === "castellano");
                break;
            case 2: // ZigZag
                setIsCorrect(answer === "castellano");
                break;
            case 3: // Zero
                setIsCorrect(answer === "ingles");
                break;
            case 4: // Secret
                setIsCorrect(answer === "ingles");
                break;
            case 5: // Zing
                setIsCorrect(answer === "castellano");
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
        <>
            <section className="grid grid-cols-12 gap-[15px] w-[85%] mx-auto">
                {/* Number of word */}
                <span
                    className="text-[rgb(102,16,242)] text-xl text-bold text-center
                col-span-12 col-start-1 row-start-1
                md:text-2xl
                lg:text-5xl">
                    Palabra {currentAudio + 1}
                </span>
                {/* Left arrow button */}
                {(currentAudio !== 0) && (
                    <button
                        onClick={discountAudio}
                        className="max-w-[56px] object-contain m-auto
                    col-span-2 col-start-1
                    lg:max-w-[120px]
                    lg:col-span-2 lg:col-start-1"
                    >
                        <img src="/images/svg/global/Flecha_Izquierda.svg" alt="Imagen de flecha izquierda" className="w-[160px]" />
                    </button>
                )}
                {/* Play audio button */}
                <div className="col-span-4 col-start-5 m-auto
                lg:w-[164px]">
                    <AudioPlayer audio_path={`/audio/td/exercise/${t_dAudioList[currentAudio]}.mp3`} className="lg:w-[164px]" />
                </div>
                {/* Right arrow button */}
                {(currentAudio !== t_dAudioList.length - 1) && (
                    <button
                        onClick={countAudio}
                        className="max-w-[56px] object-contain m-auto
                    col-span-2 col-start-11
                    lg:max-w-[120px]
                    lg:col-span-2 lg:col-start-11">
                        <img src="/images/svg/global/Flecha_Derecha.svg" alt="Imagen de flecha derecha" className="w-[160px]" />
                    </button>
                )}
            </section>
            <section className="grid grid-cols-12 gap-[15px] w-[85%] mx-auto mb-4">
                {/* D Castellano button */}
                <button
                    onClick={() => validateAnswer("castellano")}
                    className={`text-white text-xl text-bold px-8 py-4 rounded-full
                col-span-6 col-start-1
                lg:text-4xl lg:mx-8 lg:py-6
                lg:col-span-4 lg:col-start-3
                ${getButtonColor("castellano")}`}
                >
                    {currentAudio % 2 == 0 ? "D castellano" : "T castellano"}
                </button>
                {/* D English button */}
                <button
                    onClick={() => validateAnswer("ingles")}
                    className={`text-white text-xl text-bold px-8 py-4 rounded-full
                col-span-6 col-start-7
                lg:text-4xl lg:mx-8 lg:py-6
                lg:col-span-4 lg:col-start-7
                ${getButtonColor("ingles")}`}
                >
                    {currentAudio % 2 == 0 ? " D ingles" : "T ingles"}
                </button>
            </section>
        </>
    );
}