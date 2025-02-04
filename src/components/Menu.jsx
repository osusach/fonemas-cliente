export function Menu({ isMenuOpen, handleMenuOpen }) {
    if (!isMenuOpen) return null;

    return (
        <div
        onClick={handleMenuOpen}
        className="bg-black bg-opacity-50 fixed z-10 w-full h-[calc(100vh-64px)] mt-16 sm:hidden"
        >
            <menu onClick={(e) => e.stopPropagation()}
            className="bg-[#6610f2] text-white text-right"
            >
                <nav className="flex flex-col justify-center space-y-4 w-[85%] mx-auto p-2">
                    <a href="/" className="text-white text-bold text-xl">Fonemas</a>
                    <a href="/" className="text-white text-bold text-xl">Ejercicios</a>
                    <a href="/" className="text-white text-bold text-xl">Quienes somos</a>
                    <a href="/" className="text-white text-bold text-xl">Objetivos</a>
                    <a href="/" className="text-white text-bold text-xl">Extras</a>
                </nav>
            </menu>
        </div>
    );
}