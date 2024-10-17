
interface FolderCardProps {
    bgColor: string;
    title: string;
    explain?: string;
    children?: React.ReactNode;
}

const FolderCard: React.FC<FolderCardProps> = (props) => {
    return (
      <div className=" h-[200px] w-[90%] md:w-[60%] relative ">

        <div className={`w-full h-[90%] overflow-y-auto ${props.bgColor} absolute bottom-0 rounded-[15px] rounded-tr-none text-black shadow-md`}>
        <div className="h-full w-full p-2 flex flex-col justify-around">
            <h2 className="font-semibold font-clashDisplayRegular">{props.title}</h2>
             {
                props.children ? props.children : <p className="break-words overflow-hidden leading-4">{props.explain}</p>   
             }
        </div>
        </div>
        <div className={`${props.bgColor} h-[10%] w-[20%] absolute right-0 top-3 rounded-tl-[50px] rounded-tr-[20px]`}></div>
        <div className="absolute top-4 right-4 flex gap-1">
            {/* Botones simulados */}
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-black rounded-full "></span>
          </div>
      </div>
    );
  }

  export default FolderCard;