export function Menu({ isMenuOpen, handleMenuOpen, isFonemasOpen, setIsFonemasOpen, isEjerciciosOpen, setIsEjerciciosOpen }) {
    const handleFonemasToggle = () => {
        setIsFonemasOpen(!isFonemasOpen);
    }

    const handleEjerciciosToggle = () => {
        setIsEjerciciosOpen(!isEjerciciosOpen);
    }

    return (
        <>
            <div
                onClick={handleMenuOpen}
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 mt-16 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            ></div>

            <menu
                className={`fixed top-0 left-0 w-full bg-[#6610f2] text-white z-20 transform transition-transform duration-300 ${isMenuOpen ? "translate-y-0 animate-slideDown mt-16 sm:mt-24" : "-translate-y-full animate-slideUp"
                    }`}
            >
                <nav className="flex flex-col justify-center text-right w-[85%] mx-auto p-4">
                    <a href="/nosotros" className="text-white text-bold text-2xl">Sobre nosotros</a>
                    <a href="/" className="text-white text-bold text-2xl mt-4">Objetivo</a>
                    <a href="/ohno" className="text-white text-bold text-2xl mt-4">Tu cerebro te engaña</a>
                    <button onClick={handleFonemasToggle} className="text-white text-bold text-right text-2xl mt-4">Letras</button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isFonemasOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="text-bold text-xl flex flex-col space-y-2 mt-2">
                            <a href="/fonema/z">Letra Z</a>
                            <a href="/fonema/t-d">Letra T-D</a>
                            <a href="/fonema/v-b">Letra V-B</a>
                            <a href="/fonema/h">Letra H</a>
                        </div>
                    </div>
                    <button onClick={handleEjerciciosToggle} className="text-white text-bold text-right text-2xl mt-4">Ejercicios</button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isEjerciciosOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="text-bold text-xl flex flex-col space-y-2 mt-2">
                            <a href="/exercise/z">Ejercicios Z</a>
                            <a href="/exercise/t-d">Ejercicios T-D</a>
                            <a href="/exercise/v-b">Ejercicios V-B</a>
                            <a href="/exercise/h">Ejercicios H</a>
                        </div>
                    </div>
                    <a href="/extras" className="text-white text-bold text-2xl my-4">Extras</a>
                </nav>
            </menu>
        </>
    );
}