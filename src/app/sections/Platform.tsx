import React from "react";
import Image from "next/image";

export default function Platform() {
  return (
    <section className="h-screen w-full py-10 px-32 flex" id="platform">
      <div className="flex-1 rounded-xl  grid grid-cols-3 grid-rows-3 gap-4">
        <div className="bg-[#E1E2F3] col-span-3 row-span-2 rounded-lg py-6 px-4 flex gap-6">
          <div className="h-[85%] w-[260px] bg-black rounded-xl flex overflow-hidden ">
            <Image
              src="/images/worker.jpg"
              width={300}
              height={400}
              alt="worker"
              className="object-cover"
            />
          </div>

          <div className=" flex-[2] text-black flex flex-col justify-start gap-8 px-4 pb-2">
            <div>
              <h2 className="font-clashDisplay text-5xl">
                Haremos que tu búsqueda de empleo no sea difícil
              </h2>
              <p className="w-[70%]">
                Nuestra app, disponible en Play Store y web, te ayuda a
                encontrar empleos cercanos, ver los detalles y decidir si son
                adecuados para ti
              </p>
            </div>
            <div className="hover:cursor-pointer flex justify-between px-6 items-center h-[40px] w-[50%] bg-white rounded-full shadow-lg">
              <span className="font-clashDisplayRegular">Descarga la App</span>
              <span>icon</span>
            </div>
            <div className="flex gap-8">
              <p>
                Usuarios activos
                <br /> <span className="font-semibold">5000+</span>
              </p>
              <div className="h-[40px] w-[2px] bg-gray-500"></div>
              <p>
                Descargas
                <br /> <span className="font-semibold">2K</span>
              </p>
              <div className="h-[40px] w-[2px] bg-gray-500"></div>
              <p>
                Opiniones
                <br /> <span className="font-semibold">5000+</span>
              </p>
            </div>
          </div>

          <div className="flex-1 flex relative overflow-hidden">
            <Image
              src="/images/breti.png"
              width={275}
              height={400}
              alt="worker"
              className="object-cover absolute left-1/2 transform -translate-x-1/2 rounded-xl"
            />
            <div className="rounded-b-xl h-[40%] w-[90%] backdrop-blur-xl text-black bg-white/30 overflow-hidden absolute bottom-0 flex flex-col justify-between py-4 left-1/2 transform -translate-x-1/2">
              <div className="w-full">
                <p className="font-bold text-lg text-center">
                  Pronto nuestro lanzamiento
                </p>
                <p className="leading-4 text-center">
                  Te invitamos a estar pendiente a nuestras redes, para más
                  detalles.
                </p>
              </div>
              <ul className="flex justify-between px-6">
                <li>
                  <SocialBtns iconSrc="/images/facebook_icon.png" />
                </li>
                <li>
                  <SocialBtns iconSrc="/images/instagram_icon.png" />
                </li>
                <li>
                  <SocialBtns iconSrc="/images/yt_icon.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-purple-600 col-span-1 row-span-1 rounded-lg"></div>

        <div className="bg-[#fde6e9] col-span-2 row-span-1 rounded-lg flex overflow-hidden">
          <div className="flex flex-col justify-around items-center flex-[3]">
            <h2 className="text-black font-clashDisplayRegular text-2xl leading-5  text-center">
              Encuentra empleo fácilmente <br /> en una sola app
            </h2>
            <p className="w-[80%] leading-5 text-center text-gray-500">
              Bretify te ayuda a buscar empleo rápidamente y a conectar con
              personas para resolver tareas. Realiza pagos electrónicos de forma
              segura y mantén una comunicación constante para garantizar una
              mejor colaboración.
            </p>
          </div>
          <div className="flex-[2] overflow-hidden relative">
            <Image
              src="/images/woman_like.png"
              alt="woman_accept"
              className="absolute right-0 bottom-0"
              width={180}
              height={100}
            />
            <div className="absolute bg-gray-500 w-[120px] h-[2px] top-1/2 left-[22%] transform -translate-y-1/2 before:content-[''] before:absolute before:h-6 before:bg-gray-500 before:w-[2px]"></div>
            <AvatarGroup />
          </div>
        </div>
      </div>
    </section>
  );
}

function AvatarGroup() {
  return (
    <div className="absolute bottom-4 left-2 flex flex-col justify-center items-center hover:cursor-pointer">
      <h2 className="text-[14px] font-clashDisplayRegular tracking-wide text-black">
        Opiniones de clientes
      </h2>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
        <div className="avatar">
          <div className="w-[35px]">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-[35px]">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-[35px]">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-[35px]">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialBtns({ iconSrc }: { iconSrc: string }) {
  return (
    <a
      className="w-8 h-8 grid place-content-center rounded-xl bg-white hover:cursor-pointer transition-all animate-bounce hover:animate-none"
      href="https://www.instagram.com/bretify.ni/"
      target="_blank"
    >
      <Image src={iconSrc} alt="instagram_icon" width={24} height={24} />
    </a>
  );
}
