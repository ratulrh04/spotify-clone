
import { IoMdAddCircle } from "react-icons/io";
import OmSantiOm from "../assets/OmSantiOm.png"
import { TiArrowShuffle } from "react-icons/ti";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { GiOldMicrophone } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { MdCastConnected } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";


const MusicPlayer = () => {
  return (
    <div className="h-24 bg-black border-t border-zinc-800 text-white flex justify-between px-4 ">
       {/* Left section music profile and song name */}
              <div className="flex">
                 <img className="rounded-sm h-15 w-15 mt-4 " src={OmSantiOm} alt="Song Cover" />
                 <div className="mt-6 relative ml-2">
                    <h2 className="font-bold text-medium text-white">Ajab Si</h2>
                    <h4 className="text-white/60  text-xs hover:underline hover:text-white ">KK,Vishal-Shekhar,Vishal-Dadlani</h4>
                    <div className="flex absolute top-1 right-1.5 gap-2">   
                       <IoMdAddCircle className="text-white/60 hover:text-white text-lg"  />
                    </div>
                 </div>
               </div>

               {/* Mid play music component */}
            <div>
              <div className="flex text-white gap-3 mt-4 translate-x-65">
                <button> <TiArrowShuffle className="text-2xl" /></button>
                <button> <IoPlaySkipBackSharp className="text-2xl" /></button>
                <button> <FaRegCirclePlay className="text-4xl"/></button>
                <button> <IoPlaySkipForward className="text-2xl"/></button>
                <button> <TiArrowLoop className="text-2xl"/></button>
              </div>

              <div className="flex mt-1">
               <h6 className="px-2 text-sm">0.01</h6> 
                <input className="w-150" type="range" />
                <h6 className="px-2 text-sm">0.01</h6>
              </div>
            </div>

            {/* right side music controler */}
            <div className="flex gap-1">
                <button><GiOldMicrophone className="text-2xl" /></button>
                <button><CiViewList className="text-2xl"/></button>
                <button><MdCastConnected className="text-2xl"/></button>
                <button><AiOutlineSound className="text-2xl"/></button>
                <button><input type="range" /></button>
                <button><CgMiniPlayer className="text-2xl"/></button>
                <button><MdOutlineFullscreen className="text-3xl"/></button>      
            </div>
 
    </div>
  );
};

export default MusicPlayer;