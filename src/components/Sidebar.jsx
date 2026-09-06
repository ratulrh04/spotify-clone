import { LuLibraryBig } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import omSantiOm from "../assets/OmSantiOm.png"


const Sidebar = () => {
  return (
    <div className="w-18 bg-zinc-900 rounded-lg mt-1 p-2.5 flex flex-col items-center">     
          <button className="text-white/60 text-2xl"><LuLibraryBig /></button>
          <button className="text-white/60 text-4xl mt-3"><IoIosAddCircleOutline /></button>
          <button className="text-white/60 text-2xl mt-5.5 p-3 bg-linear-to-b from-violet-600 to-indigo-300 rounded-md"><IoIosHeart /></button>
          <button className="rounded-lg p-0.5 mt-3"><img src={omSantiOm} alt="Song-cover" /></button>
    </div>
  );
};

export default Sidebar;