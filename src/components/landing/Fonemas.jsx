import { useState } from "react";

export default function Fonemas() {
    const [isTorDHovered, setIsTorDHovered] = useState(false);
    const [isVorBHovered, setIsVorBHovered] = useState(false);

    const handleMouseEnterInTorD = () => {
        setIsTorDHovered(true);
    };

    const handleMouseLeaveInTorD = () => {
        setIsTorDHovered(false);
    };

    const handleMouseEnterInVorB = () => {
        setIsVorBHovered(true);
    };

    const handleMouseLeaveInVorB = () => {
        setIsVorBHovered(false);
    };

    return (
        <div 
        className="flex justify-between items-center
        col-span-12"
        >
            <a href="fonema/z">
                <img 
                src="/images/svg/landing/Fonema_Z.svg"
                alt="Fonema Z"
                className="h-[90px] sm:h-[150px] lg:h-[200px]
                transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="fonema/t-d">
                <img
                src="/images/svg/landing/Fonema_T.svg"
                alt="Fonema T"
                className={`h-[90px] sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${
                isTorDHovered ? "scale-110" : ""}`} 
                onMouseEnter={handleMouseEnterInTorD}
                onMouseLeave={handleMouseLeaveInTorD}
                />
            </a>
            <a href="fonema/t-d">
                <img
                src="/images/svg/landing/Fonema_D.svg"
                alt="Fonema D"
                className={`h-[90px] sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${
                isTorDHovered ? "scale-110" : ""}`} 
                onMouseEnter={handleMouseEnterInTorD}
                onMouseLeave={handleMouseLeaveInTorD}
                />
            </a>
            <a href="fonema/v-b">
                <img
                src="/images/svg/landing/Fonema_V.svg"
                alt="Fonema V"
                className={`h-[90px] sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${
                isVorBHovered ? "scale-110" : ""}`} 
                onMouseEnter={handleMouseEnterInVorB}
                onMouseLeave={handleMouseLeaveInVorB}
                />
            </a>
            <a href="fonema/v-b">
                <img
                src="/images/svg/landing/Fonema_B.svg"
                alt="Fonema B"
                className={`h-[90px] sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${
                isVorBHovered ? "scale-110" : ""}`} 
                onMouseEnter={handleMouseEnterInVorB}
                onMouseLeave={handleMouseLeaveInVorB}
                />
            </a>
            <a href="fonema/h">
                <img
                src="/images/svg/landing/Fonema_H.svg"
                alt="Fonema H"
                className="h-[90px] sm:h-[150px] lg:h-[200px]
                transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
        </div>
    );
}