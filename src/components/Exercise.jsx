import { useState, useEffect, use } from "react";
import AudioPlayer from "./AudioPlayer";

export function Exercise({fonema}) {
    const [data, setData] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const jsonFilePath = "/json/" + fonema + ".json";   

    const fetchData = async () => {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        setData(data);
        console.log(data.audios);
    }

    useEffect(() => {
        fetchData();
    }, []);

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
        setIsCorrect(answer === data.audios[currentAudio].correct_answer);
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
            <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto mt-8 sm:mt-16">
                {/* Number of word */}
                <p
                className="text-[#6610F2] text-bold text-xl text-center mb-4
                col-span-12
                lg:text-3xl"
                >
                    Palabra {currentAudio + 1}
                </p>
                {/* Left arrow button */}
                {(currentAudio != 0) && (
                    <button
                    onClick={discountAudio}
                    className="
                    col-span-2 col-start-1"
                    >
                        <img src="/images/svg/global/Flecha_Izquierda.svg" alt="Imagen de flecha izquierda" className="w-[160px]" />
                    </button>
                )}
                {/* Play audio button */}
                <div className="object-contain
                w-[86px] lg:w-[164px]
                col-span-4 col-start-5 place-self-center"
                >
                    {(!data)? (
                        <AudioPlayer audio_path={``} className="lg:w-[164px]"/>
                    ) : (
                        <AudioPlayer audio_path={`/audio/z/${data.audios[currentAudio].name}.mp3`} className="lg:w-[164px]"/>
                    )}
                </div>
                {/* Right arrow button */}
                {(data) && (currentAudio != data.audios.length - 1) && (
                    <button
                    onClick={countAudio}
                    className="
                    col-span-2 col-start-11"
                    >
                        <img src="/images/svg/global/Flecha_Derecha.svg" alt="Imagen de flecha derecha" className="w-[160px]" />
                    </button>
                )}
            </section>
            <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto mt-8 sm:mt-16">
                {/* S button */}
                <button
                onClick={() => validateAnswer("s")}
                className={`bg-[#6610F2] text-white text-xl text-bold px-8 py-4 rounded-full
                col-span-6 col-start-1
                lg:col-span-4 lg:col-start-3
                ${getButtonColor("s")}`}
                >
                    Tiene s
                </button>
                {/* Z button */}
                <button 
                onClick={() => validateAnswer("z")}
                className={`bg-[#6610F2] text-white text-xl text-bold px-8 py-4 rounded-full
                col-span-6 col-start-7
                lg:col-span-4 lg:col-start-7
                ${getButtonColor("z")}`}
                >
                    Tiene z
                </button>
            </section>
        </>
    );
}