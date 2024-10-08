import React from "react";
import PhoneMockup from "./PhoneMockup";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[75vh]  md:h-[83vh] md:py-8 md:px-16 gap-4 md:gap-6 grid grid-row-6 md:grid-cols-4 md:grid-rows-3 ">
      <div className="bg-[#E1E2F3] text-black row-span-2 md:row-span-2 md:col-span-2 rounded-2xl flex flex-col justify-around p-5">
        <h1 className="text-lg leading-4 md:leading-normal md:text-5xl font-clashDisplay">
          Conseguir un trabajo <br />
          no tiene que ser tan difícil
        </h1>
        <p className="md:w-[40%] md:text-lg leading-5 font-clashDisplayRegular">
          <span className="bg-purple-600 px-1">BRETIFY</span> la primera
          aplicación diseñada para modernizar y mejorar el acceso al trabajo
          informal en Nicaragua.
        </p>
      </div>
       <div className="hidden md:block bg-[#141414] md:row-span-3 md:col-span-2 rounded-2xl relative">
        <PhoneMockup />
      </div>
      <div className="bg-yellow-50 row-span-2 md:row-span-1 md:col-span-1 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/informa-jobs.jpg"
          alt="workers"
          className="object-cover"
          fill
        />
      </div>
      <div className=" row-span-1  bg-[#F97D36] col-span-1 rounded-2xl text-black flex flex-col items-center justify-center">
        <h3 className="text-lg leading-4 md:leading-normal md:text-3xl font-clashDisplayRegular font-bold md:-rotate-2">Con nuestra app</h3>
        <p className="md:-rotate-2">Busca menos, encuentra más</p>
        </div> 

      
    </div>
  );
}
