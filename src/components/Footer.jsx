function Footer() {
  return (
    <div className="bg-[#6610F2] w-screen py-8 h-auto flex items-center justify-center">
      <div className="w-[67%]">
        <div className="grid grid-cols-12 grid-rows-3 gap-[15px] mx-auto text-[#f4f0ff] text-base font-medium auto-rows-max">
          <div className="col-start-1 col-span-2 image flex items-stretch">
            <img
              src="https://anid.cl/wp-content/uploads/2022/04/anid_rojo_azul.png"
              alt="Logo de ANID"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 col-span-5">
            <p className="">
              <span className="text-bold">English pronunciation</span> es una
              iniciativa financiada por el proyecto Fondecyt de Iniciación n.
              11221032, liderado por la{" "}
              <span className="underline text-bold">
                Dra. Karina Cerda Oñate
              </span>{" "}
              y financiado por la{" "}
              <span className="text-bold">
                Agencia Nacional de Investigación y Desarrollo en la Facultad de
                Ciencias de la Educación de la Universidad de Talca, Campus
                Linares.
              </span>{" "}
            </p>
          </div>
          <div className="col-start-8 col-span-5 ">
            <p>Enlaces de interés</p>
            <p>
              <a href="https://anid.cl/" className="text-bold underline">
                ANID
              </a>
            </p>
            <p>
              <a
                href="https://www.cienciasdelaeducacion.utalca.cl/"
                className="text-bold underline"
              >
                Facultad de Ciencias de la Educación, Universidad de Talca
              </a>
            </p>
            <p>
              <a
                href="https://ingles.mineduc.cl/"
                className="text-bold underline"
              >
                Programa Inglés Abre Puertas
              </a>
            </p>
          </div>

          <div className="row-start-2 col-start-3 col-span-5 ">
            <p>Contribuidores</p>
            <p>
              <span className="text-bold underline">
                <a href="mailto:murtubia17@alumnos.utalca.cl">Prof. María Ignacia Urtubia</a>{" "}
              </span>{" "}
              (Diseño de material didáctico)
            </p>
            <p>
              <span className="text-bold underline">
                <a href="mailto:rsantis18@alumnos.utalca.cl">Prof. Rodrigo Santis</a>
              </span>{" "}
              (Grabaciones y gestión de proyecto)
            </p>
            <p>
              <span className="text-bold underline">
                <a href="mailto:anaranjo20@alumnos.utalca.cl">Prof. Adrián Naranjo</a>
              </span>{" "}
              (Voz e imagen en videos)
            </p>
            <p>
              <span className="text-bold underline">
                <a href="mailto:vpeldoza20@alumnos.utalca.cl">Prof. Victoria Peldoza</a>
              </span>{" "}
              (Ilustraciones de la página)
            </p>
          </div>

          <div className="row-start-2 col-start-8 col-span-5 ">
            <p>Contacto</p>
            <p className="text-bold underline"><a href="https://www.linkedin.com/in/karinacerdaonate">Dra. Karina Cerda Oñate</a></p>
          </div>

          <div className="row-start-3 col-start-3 col-span-5 ">
            <p>
              Desarrollada por{" "}
              <span className="text-bold underline">
                <a href="https://osusach.com">OSUSACH</a>
              </span>
            </p>
            <p className="text-bold">
              <a href="">Ignacio Lara</a>
            </p>
            <p className="text-bold">
              <a href="">Gonzalo Moncada</a>
            </p>
            <p className="text-bold">
              <a href="">Francisco Sánchez</a>
            </p>
            <p className="text-bold">
              <a href="">Alonso Sanhueza</a>
            </p>
            <p className="text-bold">
              <a href="">Camilo Trincado</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
