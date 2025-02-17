import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

export function Exercise({ fonema, routeOfFonema, routeOfTitleSVG, descriptions }) {
    const [data, setData] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(0);
    const [audiosLength, setAudiosLength] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const jsonFilePath = "/json/" + fonema + ".json";

    const fetchData = async () => {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        setData(data);
        setAudiosLength(data.audios.length);
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
            return isCorrect ?
                "bg-green-500 animate-growShrink"
                : "bg-red-500 animate-shake";
        }
        return "bg-[#6610F2]";
    }

    return (
        <article className="relative flex flex-col h-[calc(100vh-96px)] -mb-8 sm:-mb-16">
            <div className="sm:static flex justify-center w-full pt-4 sm:pt-8">
                <div className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto pt-2">
                    {/* Link to fonema /z/ */}
                    <a
                        href={`${routeOfFonema}`}
                        className="text-xs underline
                    col-span-12
                    sm:text-xl">
                        Letra {fonema}
                    </a>
                    {/* Title */}
                    <div
                    className="col-span-12 flex justify-center">
                        <img
                        src={`${routeOfTitleSVG}`}
                        alt="Titulo de ejercicios"
                        className="w-[206px] h-[93px]
                        lg:w-[477px] lg:h-40"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-around  h-[60vh]">
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
                    {/* Left start */}
                    <img src="/images/svg/global/Estrella.svg"
                        alt="Imagen de estrella"
                        className="
                    col-span-2 row-span-2 col-start-1 row-start-1 place-self-end
                    lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-1"
                    />
                    <div className="col-span-8 col-start-3 place-content-center">
                        {/* Text */}
                        {data ? <div dangerouslySetInnerHTML={{__html: descriptions[data.audios[currentAudio].description]}} /> : null}
                    </div>
                    {/* Right start */}
                    <img src="/images/svg/global/Estrella.svg"
                        alt="Imagen de estrella"
                        className="scale-x-[-1]
                    col-span-2 row-span-2 col-start-11 row-start-1 place-self-end
                    lg:col-span-2 lg:row-span-1 lg:col-start-11 lg:row-start-1"
                    />
                </section>
                <section className="flex flex-col w-[85%] sm:w-[75%] mx-auto">
                    <p className="text-[#6610F2] text-bold text-xl lg:text-3xl text-center mb-8">
                    Palabra {currentAudio + 1}
                    </p>
                    <div className="flex justify-between">
                        {/* Left arrow button */}
                        <button
                        onClick={discountAudio}
                        className={`${currentAudio != 0 ? "visible" : "invisible"}`}
                        >
                            <img
                            src="/images/svg/global/Flecha_Izquierda.svg"
                            alt="Imagen de flecha izquierda"
                            className="w-24" />
                        </button>
                        {/* Play audio button */}
                        {(!data) ? (
                            <AudioPlayer audio_path={``} className="w-36 sm:w-40" />
                        ) : (
                            <AudioPlayer audio_path={`/audio/${fonema}/exercise/${data.audios[currentAudio].name}.mp3`} className="w-36 sm:w-40" />
                        )}
                        {/* Right arrow button */}
                        <button
                        onClick={countAudio}
                        className={`${currentAudio != audiosLength - 1 ? "visible" : "invisible"}`}
                        >
                            <img
                            src="/images/svg/global/Flecha_Derecha.svg"
                            alt="Imagen de flecha derecha"
                            className="w-24"
                            />
                        </button>
                    </div>
                </section>
                <section className="flex gap-[15px] w-[85%] sm:w-[75%] mx-auto justify-center">
                    {/* Option A button */}
                    <button
                    onClick={() => validateAnswer(data.audios[currentAudio].answer_a)}
                    className={`bg-[#6610F2] relative overflow-hidden rounded-full px-8 py-4 transition-all duration-300 ease-in-out transform
                    col-span-6 col-start-1
                    w-[150px]
                    sm:w-[200px]
                    sm:col-span-4 sm:col-start-3
                    ${data ? getButtonColor(data.audios[currentAudio].answer_a) : ""}`}
                    >
                        <p className="text-lg sm:text-xl text-bold text-white">
                            {data ? data.audios[currentAudio].text_answer_a : ""}
                        </p>
                    </button>
                    {/* Option B button */}
                    <button 
                    onClick={() => validateAnswer(data.audios[currentAudio].answer_b)}
                    className={`bg-[#6610F2] relative overflow-hidden rounded-full px-8 py-4 text-xl transition-all duration-300 ease-in-out transform
                    col-span-6 col-start-7
                    w-[150px]
                    sm:w-[200px]
                    sm:col-span-4 sm:col-start-7
                    ${data ? getButtonColor(data.audios[currentAudio].answer_b) : ""}`}
                    >
                        <p className="text-base sm:text-xl text-bold text-white">
                            {data ? data.audios[currentAudio].text_answer_b : ""}
                        </p>
                    </button>
                </section>
            </div>
        </article>
    );
}