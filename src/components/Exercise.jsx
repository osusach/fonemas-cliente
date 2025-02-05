import AudioPlayer from "./AudioPlayer";

export function Exercise() {
    return (
        <article className="relative flex flex-col h-[calc(100vh-64px)]">
            <div className="absolute flex justify-center w-full">
                <div className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto mt-2">
                    <a
                    href="/fonema/z"
                    className="text-xs underline
                    col-span-12">
                        Fonema /z/
                    </a>
                    <img
                    src="/images/svg/z/Ejercicios_Z.svg"
                    alt="Titulo de ejercicios" 
                    class="w-[206px] h-[93px] object-contain
                    col-span-6 col-start-4 place-self-center
                    lg:w-[477px]]"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 sm:space-y-16 h-[calc(100vh-64px)]">
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
                    <img src="/images/svg/global/Estrella.svg" 
                    alt="Imagen de estrella"
                    class="
                    col-span-2 row-span-2 col-start-1 row-start-1 place-self-end
                    lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-1"
                    />
                    <div className="col-span-8 col-start-3 place-content-center">
                        <p
                        className="text-base text-center
                        sm:text-2xl"
                        >
                            Ahora vas a <span className="text-bold">escuchar palabras</span> y <span className="text-bold">vas a seleccionar si la palabra tiene <span className="text-[#6610F2]">s</span> o <span className="text-[#6610F2]">z</span></span>.
                        </p>
                    </div>
                    <img src="/images/svg/global/Estrella.svg" 
                    alt="Imagen de estrella"
                    class="
                    col-span-2 row-span-2 col-start-11 row-start-1 place-self-end
                    lg:col-span-2 lg:row-span-1 lg:col-start-11 lg:row-start-1"
                    />
                </section>
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
                    <p
                    className="text-[#6610F2] text-bold text-xl text-center mb-4
                    col-span-12
                    lg:text-3xl"
                    >
                        Palabra 1
                    </p>
                    <button 
                        className="
                        col-span-2 col-start-1"
                        >
                            <img src="/images/svg/global/Flecha_Izquierda.svg" alt="Imagen de flecha izquierda" className="w-[160px]" />
                    </button>
                    <div className="object-contain
                    w-[86px] lg:w-[164px]
                    col-span-4 col-start-5 place-self-center"
                    >
                        <AudioPlayer audio_path={"/audio/z/Secret.mp3"} />
                    </div>
                    <button
                    className="
                    col-span-2 col-start-11"
                    >
                        <img src="/images/svg/global/Flecha_Derecha.svg" alt="Imagen de flecha derecha" className="w-[160px]" />
                    </button>
                </section>
                <section className="grid grid-cols-12 gap-[15px] w-[85%] sm:w-[75%] mx-auto">
                    <button 
                    className="bg-[#6610F2] text-white text-xl text-bold px-8 py-4 rounded-full
                    col-span-6 col-start-1
                    lg:col-span-4 lg:col-start-3"
                    >
                        Tiene s
                    </button>
                    <button 
                    className="bg-[#6610F2] text-white text-xl text-bold px-8 py-4 rounded-full
                    col-span-6 col-start-7
                    lg:col-span-4 lg:col-start-7"
                    >
                        Tiene s
                    </button>
                </section>
            </div>
            
        </article>
    );
}