import { useState } from "react";

export function Menu({ isMenuOpen, handleMenuOpen }) {
    const [isFonemasOpen, setIsFonemasOpen] = useState(false);
    const [isEjerciciosOpen, setIsEjerciciosOpen] = useState(false);

    const handleFonemasToggle = () => {
        setIsFonemasOpen(!isFonemasOpen);
    }

    const handleEjerciciosToggle = () => {
        setIsEjerciciosOpen(!isEjerciciosOpen);
    }

    if (!isMenuOpen) return null;

    return (
        <div
        onClick={handleMenuOpen}
        className="bg-black bg-opacity-50 fixed z-10 w-full h-full mt-16 lg:hidden"
        >
            <menu onClick={(e) => e.stopPropagation()}
            className="bg-[#6610f2] text-white text-right"
            >
                <nav className="flex flex-col justify-center w-[85%] mx-auto p-2">
                    <a href="/nosotros" className="text-white text-bold text-xl">Quienes somos</a>
                    <a href="/" className="text-white text-bold text-xl mt-4">Objetivos</a>
                    <a href="/ohno" className="text-white text-bold text-xl mt-4">Oh no, mi cerebro me engaña</a>
                    <button onClick={handleFonemasToggle} className="text-white text-bold text-right text-xl mt-4">Fonemas</button>
                    <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isFonemasOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                    >
                        <div className="text-bold flex flex-col space-y-2 mt-2">
                            <a href="/fonema/z">Letra Z</a>
                            <a href="/fonema/t-d">Letra T-D</a>
                            <a href="/fonema/v-b">Letra V-B</a>
                            <a href="/fonema/h">Letra H</a>
                        </div>
                    </div>
                    <button onClick={handleEjerciciosToggle} className="text-white text-bold text-right text-xl mt-4">Ejercicios</button>
                    <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isEjerciciosOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                    >
                        <div className="text-bold flex flex-col space-y-2 mt-2">
                            <a href="/exercise/z">Ejercicios Z</a>
                            <a href="/exercise/t-d">Ejercicios T-D</a>
                            <a href="/exercise/v-b">Ejercicios V-B</a>
                            <a href="/exercise/h">Ejercicios H</a>
                        </div>
                    </div>
                    <a href="/" className="text-white text-bold text-xl my-4">Extras</a>
                </nav>
            </menu>
        </div>
    );
}