import { useState } from "react";
import { Menu } from "./Menu";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <>
            <div className="bg-[#6610F2] text-white flex items-center w-full h-16">
                <nav className="flex justify-end space-x-4 w-[85%] mx-auto">
                    <button onClick={handleMenuOpen} className="p-2 sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <a href="/" className="text-white text-bold text-xl hidden sm:block">Fonemas</a>
                    <a href="/" className="text-white text-bold text-xl hidden sm:block">Ejercicios</a>
                    <a href="/" className="text-white text-bold text-xl hidden sm:block">Quienes somos</a>
                    <a href="/" className="text-white text-bold text-xl hidden sm:block">Objetivos</a>
                    <a href="/" className="text-white text-bold text-xl hidden sm:block">Extras</a>
                </nav>
            </div>
            <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        </>
    );
}