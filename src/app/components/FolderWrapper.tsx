import Image from "next/image";

function FolderWrapper() {
    return (
      <div className="relative w-full h-[400px] bg-purple-300 rounded-[30px] p-6">
        
        <div className="absolute top-0 right-0 bg-black h-[50px] w-[60px] rounded-bl-[40px] ">
          <div className="absolute top-4 right-4 flex gap-1">
            {/* Botones simulados */}
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-black rounded-full border"></span>
          </div>
        </div>
        <Image
          src="/images/woman.png"
          alt="woman"
          width={300}
          height={400}
          className="object-contain absolute right-0 bottom-0"
        />
        {/* Contenido del interior */}
        <h2 className="absolute text-black font-bold z-20 leading-4">
          En todos lo rincones <br /> de Nicaragua.
        </h2>
        <button className="absolute bottom-6 left-6 bg-white text-black rounded-full px-6 py-2 flex items-center">
          Book Demo Call
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    );
  }

  export default FolderWrapper;