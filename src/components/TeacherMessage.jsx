import { useState } from "react";

export default function TeacherMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full flex justify-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
          <img src="/images/svg/global/alert.svg" alt="" className="h-[10px] sm:h-[20px] mt-1"/>
          <p className="text-sm sm:text-2xl  text-[#6610F2] text-bold underline">¿Eres profesor?</p>
        </div>
      {isOpen && (
      <div
        className=" absolute mt-10 flex flex-col items-center "
      > 
        <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-transparent border-b-[#6610F2]"></div>
        <div className="p-5 sm:p-8 bg-[#6610F2] text-white rounded-3xl cursor-pointer w-[90vw] sm:w-[35vw] text-base sm:text-3xl text-center">
        <p className="text-bold">Atención:</p>
        <p>Si eres profesor, es sumamente importante que no les muestres esta lista a tus estudiantes y sólo utilices los audios que aquí se te entregan. Una vez que hayas terminado el ejercicio, puedes mostrarles la lista de palabras para verificar los resultados de tus estudiantes.</p>
          
        </div>
      </div>
        
      )}
    </div>
  );
}