import React from "react";
import PhoneMockup from "./PhoneMockup";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[83vh] py-8 px-16 gap-6 grid grid-cols-4 grid-rows-3">
      <div className="bg-[#E1E2F3] text-black row-span-2 col-span-2 rounded-2xl flex flex-col justify-around p-5">
        <h1 className="text-5xl font-clashDisplay">
          Conseguir un trabajo <br />
          no tiene que ser tan difícil
        </h1>
        <p className="w-[40%] text-lg leading-5 font-clashDisplayRegular">
          <span className="bg-purple-600 px-1">BRETIFY</span> la primera
          aplicación diseñada para modernizar y mejorar el acceso al trabajo
          informal en Nicaragua.
        </p>
      </div>
      <div className="bg-[#141414] row-span-3 col-span-2 rounded-2xl relative">
        <PhoneMockup />
      </div>
      <div className="bg-yellow-50 col-span-1 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/informa-jobs.jpg"
          alt="workers"
          className="object-cover"
          fill
        />
      </div>
      <div className="bg-yellow-200 col-span-1 rounded-2xl"></div>
    </div>
  );
}
