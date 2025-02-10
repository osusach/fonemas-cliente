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
            className="grid grid-cols-2 justify-center lg:flex lg:justify-between items-center
        col-span-12 mx-auto"
        >
            <a href="fonema/z">
                <img
                    src="/images/svg/landing/Fonema_Z.svg"
                    alt="Fonema Z"
                    className="h-48 sm:h-[150px] lg:h-[200px]
                transition-transform duration-300 ease-in-out hover:scale-110 mx-auto" />
            </a>
            <a href="fonema/t-d">
                <img
                    src="/images/svg/landing/Fonema_T.svg"
                    alt="Fonema T"
                    className={`h-48 sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${isTorDHovered ? "scale-110" : ""} mx-auto`}
                    onMouseEnter={handleMouseEnterInTorD}
                    onMouseLeave={handleMouseLeaveInTorD}
                />
            </a>
            <a href="fonema/t-d">
                <img
                    src="/images/svg/landing/Fonema_D.svg"
                    alt="Fonema D"
                    className={`h-[182px] sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${isTorDHovered ? "scale-110" : ""} mx-auto`}
                    onMouseEnter={handleMouseEnterInTorD}
                    onMouseLeave={handleMouseLeaveInTorD}
                />
            </a>
            <a href="fonema/v-b">
                <img
                    src="/images/svg/landing/Fonema_V.svg"
                    alt="Fonema V"
                    className={`h-48 sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${isVorBHovered ? "scale-110" : ""} mx-auto`}
                    onMouseEnter={handleMouseEnterInVorB}
                    onMouseLeave={handleMouseLeaveInVorB}
                />
            </a>
            <a href="fonema/v-b">
                <img
                    src="/images/svg/landing/Fonema_B.svg"
                    alt="Fonema B"
                    className={`h-48 sm:h-[150px] lg:h-[200px] transition-transform duration-300 ease-in-out ${isVorBHovered ? "scale-110" : ""} mx-auto`}
                    onMouseEnter={handleMouseEnterInVorB}
                    onMouseLeave={handleMouseLeaveInVorB}
                />
            </a>
            <a href="fonema/h">
                <img
                    src="/images/svg/landing/Fonema_H.svg"
                    alt="Fonema H"
                    className="h-[182px] sm:h-[150px] lg:h-[200px]
                transition-transform duration-300 ease-in-out hover:scale-110 mx-auto" />
            </a>
        </div>
    );
}