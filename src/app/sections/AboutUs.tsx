import React from "react";
import { PlayCircleIcon } from "hugeicons-react";

import FolderWrapper from "../components/FolderWrapper";
import FolderCard from "../components/FolderCard";

function AboutUs() {
  return (
    <section
      className="px-4 test-overlaping h-auto md:h-screen w-full md:py-10 md:px-32 flex flex-col justify-center bg-black gap-4"
      id="about-us"
    >
      <AboutUsFirstPart />
      <div className="h-[40%] flex flex-col md:flex-row justify-center items-center">
        <div className=" flex-1 flex flex-col gap-14">
          <div className="flex items-center gap-4">
            <PlayCircleIcon size={40} />{" "}
            <p className="leading-4">
              Dale una Luz - <br /> Dúo Guardabarranco
            </p>
          </div>

          <div className="flex md:flex-col items-start gap-2 mb-8 md:mb-0">
            <p className="py-[0.10rem] px-2 border rounded-xl text-center inline-block">
              Aplicación Móvil
            </p>
            <p className=" py-[0.10rem] px-2 border rounded-2xl text-center inline-block">
              Idea
            </p>
            <p className=" py-[0.10rem] px-2 border rounded-2xl text-center inline-block">
              Proyecto
            </p>
          </div>
        </div>
        <div className="w-full flex-wrap md:flex-nowrap md:flex-[3] flex justify-center md:gap-2 ">
          <FolderCard
            title="Misión"
            explain="Conectar a las personas con oportunidades de empleo informal de manera accesible y rápida, facilitando el encuentro entre trabajadores y empleadores para mejorar la calidad de vida y la economía local."
            bgColor="bg-[#FD5E09]"
          />
          <FolderCard
            title="Visión"
            explain="Ser la plataforma líder en la generación de empleo informal en el país, fomentando una economía más inclusiva y eficiente, donde cualquier persona pueda encontrar trabajo de manera rápida y confiable."
            bgColor="bg-[#E0E0E0]"
          />
          <FolderCard title="Valores" bgColor="bg-[#FDC959]">
            <ul className="flex flex-col gap-2 pb-4">
              <li className="leading-4"><span className="font-semibold">Innovación</span>: Buscamos soluciones tecnológicas que mejoren la experiencia de nuestros usuarios.</li>
              <li className="leading-4"><span className="font-semibold">Transparencia</span>: Fomentamos la confianza con información clara y procesos justos.</li>
              <li className="leading-4"><span className="font-semibold">Inclusión</span>: Creemos que todas las personas merecen la oportunidad de acceder a trabajos dignos.</li>
            </ul>
          </FolderCard>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

function AboutUsFirstPart() {
  return (
    <div className="h-[60%] flex flex-col md:flex-row">
      <div className="flex-1  flex flex-col  md:justify-start md:items-start gap-10 pl-6 pt-10 md:gap-32 md:pl-4">
        <h3 className="text-3xl md:text-7xl md:leading-[3.8rem] ">
          Busca, <br />
          Encuentra, <br /> Trabajos para ti.
        </h3>
        <div className="flex flex-col gap-4 w-[90%]">
          <div className="w-full h-1 bg-gray-500"></div>
          <div className="flex justify-between">
            <p className="leading-5 md:leading-none">Nuestra Solución</p>
            <p className="leading-5 md:leading-none text-right md:text-center">Colaborar entre todos.</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4  py-6 md:pl-8 md:py-8">
        <FolderWrapper />
      </div>
    </div>
  );
}
