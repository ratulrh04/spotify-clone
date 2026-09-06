import { TbLibrary } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { MdOutlineZoomInMap } from "react-icons/md";


const RightSidebar = () => {
  return (
    <div className="w-70 bg-zinc-900 p-5">
      {/* Top Song Title Section */}
        <div className="w-full group flex items-center h-10 justify-between hover:translate-0" >
         <TbLibrary
            className="
              text-2xl text-white/50
              opacity-0 -translate-x-[30px]
              group-hover:opacity-100 group-hover:translate-x-1.5
              transition-all duration-500 ease-linear
            "
          />
          <h2 className="text-white font-bold group-hover:underline">Om Santi Om</h2>
          <IoIosMore className="
           opacity-0
           transition-all
           duration-500
           group-hover:opacity-100
         text-white text-2xl text-white/50
         " />
          <MdOutlineZoomInMap className="
          text-white text-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          text-white/50
          "
           />
        </div>
    </div>
  );
};

export default RightSidebar;