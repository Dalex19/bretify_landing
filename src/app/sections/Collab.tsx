import React from "react";
import Image from "next/image";
import Accordion from "../components/Accordion";


export default function Collab() {
  return (
    <section className="test-overlaping h-screen w-full bg-black flex  ">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 md:pl-20 md:pr-60 gap-4 md:gap-8">
        <h2 className="text-2xl md:text-5xl font-clashDisplay mb-4">
          Como apoyar esta idea?
        </h2>
        <Accordion title="Presencia en redes">
          {" "}
          <p className="text-sm md:text-lg">
            Una presencia en redes sociales sólida es tan esencial como tener un
            gran producto o marca. Te invitamos a ser parte de nuestra comunidad
            y seguirnos en{" "}
            <a
              href="https://www.instagram.com/bretify.ni/"
              target="_blank"
              className="font-clashDisplayRegular p-1 bg-purple-500"
            >
              Instagram
            </a>{" "}
            y otras plataformas, para mantenerte informado sobre nuestras
            actualizaciones y apoyarnos difundiendo nuestra misión.{" "}
          </p>
        </Accordion>

        <Accordion title="Colabora directamente">
          <p className="text-sm md:text-lg">
            ¿Te gustaría ser parte activa de esta iniciativa? Completa el
            formulario a continuación para unirte a nuestro equipo. Comparte con
            nosotros tu nombre completo, tu correo electrónico, y a qué te
            dedicas. ¡Estamos emocionados por conocer tu talento!
          </p>
          <MyForm />
        </Accordion>

        <Accordion title="Apoya con una donación">
          <p className="text-sm md:text-lg">
            Tu apoyo financiero es fundamental para que esta idea despegue,
            crezca y podamos alcanzar más personas. Si deseas contribuir,
            considera realizar una donación. Cada contribución, grande o
            pequeña, nos ayuda a continuar creando y compartiendo contenido
            valioso. Te agradecemos por ser parte de este viaje. Para más
            información sobre cómo donar, haz clic aquí.
          </p>
        </Accordion>
      </div>
      <IncandesentLight />
    
    </section>
  );
}

function IncandesentLight() {
  return (
    <div className="h-[85%] hidden md:inline-block  mr-10 w-[400px] relative">
      <div className="h-[400px] w-[400px] absolute  bg-yellow-300 -bottom-6 rounded-full animate-bujia-glow opacity-50"></div>
      <div className="w-4 bg-gray-500 h-[52%] mx-auto z-[90] relative"></div>
      <Image
        src="/images/bujia.png"
        alt="bujia"
        width={150}
        height={200}
        className="rotate-180 -mt-1 shadow-bujia mx-auto relative z-[100]"
      />
    </div>
  );
}

function MyForm() {
  return (
    <form className="card-body">
      <div className=" flex flex-col md:flex-row items-end justify-between ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre Completo</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Profesión
          </option>
          <option>Diseñador</option>
          <option>Dev</option>
          <option>Mercadólogo</option>
          <option>CopyWritter</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Correo</span>
        </label>
        <input
          type="email"
          placeholder="Correo"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Enviar</button>
      </div>
    </form>
  );
}
