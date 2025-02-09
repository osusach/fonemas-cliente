import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

export function Exercise({fonema, routeOfFonema, routeOfTitleSVG, text, answerA, textAnswerA, answerB, textAnswerB}) {
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
            return isCorrect ? 
            "bg-green-500 animate-growShrink" 
            : "bg-red-500 animate-shake";
        }
        return "bg-[#6610F2]";
    }

    return (
        <article className="relative flex flex-col h-[calc(100vh-64px)]">
            <div className="absolute sm:static flex justify-center w-full">
                <div className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto mt-2">
                    {/* Link to fonema /z/ */}
                    <a
                    href={`${routeOfFonema}`}
                    className="text-xs underline
                    col-span-12
                    sm:text-xl">
                        Fonema /{fonema}/
                    </a>
                    {/* Title */}
                    <img
                    src={`${routeOfTitleSVG}`}
                    alt="Titulo de ejercicios" 
                    className="w-[206px] h-[93px] object-contain
                    col-span-6 col-start-4 place-self-center
                    lg:w-[477px]]"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 sm:space-y-16 h-[calc(100vh-64px)]">
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
                        <div dangerouslySetInnerHTML={{__html: text}} />
                    </div>
                    {/* Right start */}
                    <img src="/images/svg/global/Estrella.svg" 
                    alt="Imagen de estrella"
                    className="scale-x-[-1]
                    col-span-2 row-span-2 col-start-11 row-start-1 place-self-end
                    lg:col-span-2 lg:row-span-1 lg:col-start-11 lg:row-start-1"
                    />
                </section>
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
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
                            <AudioPlayer audio_path={`/audio/${fonema}/exercise/${data.audios[currentAudio].name}.mp3`} className="lg:w-[164px]"/>
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
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
                    {/* Option A button */}
                    <button
                    onClick={() => validateAnswer(answerA)}
                    className={`bg-[#6610F2] relative overflow-hidden rounded-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 ease-in-out transform
                    col-span-6 col-start-1
                    lg:col-span-4 lg:col-start-3
                    ${getButtonColor(answerA)}`}
                    >
                        {textAnswerA}
                    </button>
                    {/* Option B button */}
                    <button 
                    onClick={() => validateAnswer(answerB)}
                    className={`bg-[#6610F2] relative overflow-hidden rounded-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 ease-in-out transform
                    col-span-6 col-start-7
                    lg:col-span-4 lg:col-start-7
                    ${getButtonColor(answerB)}`}
                    >
                        {textAnswerB}
                    </button>
                </section>
            </div>  
        </article>
    );
}