import { useState } from "react";
import { Menu } from "./Menu";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFonemasOpen, setIsFonemasOpen] = useState(false);
    const [isEjerciciosOpen, setIsEjerciciosOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleFonemasToggle = () => {
        setIsFonemasOpen(!isFonemasOpen);
        setIsEjerciciosOpen(false);
    }

    const handleEjerciciosToggle = () => {
        setIsEjerciciosOpen(!isEjerciciosOpen);
        setIsFonemasOpen(false);
    }

    return (
        <>
            <div className="fixed bg-[#6610F2] text-white flex items-center w-full h-16">
                <nav className="flex justify-end items-center gap-12 w-[85%] lg:w-[75%] mx-auto">
                    <button onClick={handleMenuOpen} className="p-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <a href="/" class="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Quienes somos
                    </a>
                    <a href="/" className="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Objetivos
                    </a>
                    <a href="/ohno" className="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Oh no, mi cerebro me engaña
                    </a>

                    {/* Fonemas container */}
                    <section className="relative hidden lg:block">
                        {/* NavBar fonemas button */}
                        <button
                        onClick={handleFonemasToggle}
                        className="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Fonemas
                        </button>
                        <div className={`absolute left-1/2 -translate-x-1/2 w-48 bg-[#6610F2]  rounded-md shadow-lg z-50 text-center 
                            transition-all duration-200 ease-in-out origin-top
                            ${isFonemasOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                        >
                            {/* Dropdown options */}
                            <div className="py-1 text-white">
                                <a href="/fonema/z" className="block px-4 py-2 text-white hover:underline">
                                    Letra Z
                                </a>
                                <a href="/fonema/t-d" className="block px-4 py-2 text-white hover:underline">
                                    Letra T-D
                                </a>
                                <a href="/fonema/v-b" className="block px-4 py-2 text-white hover:underline">
                                    Letra V-B
                                </a>
                                <a href="/fonema/h" className="block px-4 py-2 text-white hover:underline">
                                    Letra H
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* Ejercicios container */}
                    <section className="relative hidden lg:block">
                        {/* NavBar ejercicios button */}
                        <button
                        onClick={handleEjerciciosToggle}
                        className="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            Ejercicios
                        </button>
                        {/* Dropdown options */}
                        <div className={`absolute left-1/2 -translate-x-1/2 w-48 bg-[#6610F2] rounded-md shadow-lg z-50 text-center 
                            transition-all duration-200 ease-in-out origin-top
                            ${isEjerciciosOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                        >
                            <div className="py-1">
                                <a href="/exercise/z" className="block px-4 py-2 text-white hover:underline">
                                    Ejercicios Z
                                </a>
                                <a href="/exercise/t-d" className="block px-4 py-2 text-white hover:underline">
                                    Ejercicios T-D
                                </a>
                            </div>
                        </div>
                    </section>
                    <a href="/" className="relative text-white text-bold text-xl hidden lg:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Extras
                    </a>
                </nav>
            </div>
            <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        </>
    );
}