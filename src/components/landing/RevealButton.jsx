import { useState } from "react";

export default function RevealButton({word}) {
    const [reveal, setReveal] = useState(false);

    const revealWord = () => {
        setReveal(true);
    };

    return (
        <>
        {!reveal ? (
            <button
            onClick={revealWord}
            className="mt-8
            col-span-5 col-start-9
            sm:col-span-4 sm:col-start-10"
            >
            <img
                src="/images/svg/landing/Revelar_Button.svg"
                alt="Boton de revelar"
                className=""
            />
            </button>
        ) : (
            <p className="text-[#6610F2] text-xl text-extrabold text-center mt-8
            col-span-5 col-start-9 place-content-center
            transition-opacity duration-500 ease-out opacity-0 animate-fade-in
            sm:text-3xl
            sm:col-span-4 sm:col-start-10">
                {word}
            </p>
        )}
        </>
    );
}
