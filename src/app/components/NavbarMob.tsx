"use client";
import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";

export default function NavbarMob() {
  // Estado para manejar el scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Usamos useEffect para escuchar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor que 0, marcamos como true
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Escuchamos el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-12 w-[90%] fixed px-2 flex justify-between items-center top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-[100] ${
        isScrolled
          ? "backdrop-blur-xl text-black bg-black/30"
          : "bg-transparent"
      }`}
    >
      <SideMenu isScrolled={isScrolled} />
      <h2
        className={`font-bold font-clashDisplay ${
          isScrolled ? "text-white" : "text-black"
        }`}
      >
        B R E T I F Y
      </h2>
    </div>
  );
}
