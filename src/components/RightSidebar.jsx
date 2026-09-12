import { TbLibrary } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { MdOutlineZoomInMap } from "react-icons/md";
import OmSantiOm from "../assets/OmSantiOm.png"
import { RiGalleryUploadFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";



const RightSidebar = () => {

  // Artist information with in object
  const artist = [
    { 
      id:1,
      artistName : "KK",
      artistPost : 'Main Artist...'
    },
     { 
      id:2,
      artistName : "Vishal Shekhar",
      artistPost : 'Main Artist...'
    },
     { 
      id:3,
      artistName : "Vishal Dadlani",
      artistPost : 'Main Artist.Lyricist'
    }
  ]


  return (
    <div className="w-70 bg-zinc-900 p-3 overflow-y-scroll overflow-x-hidden">
      {/* Top Song Title Section */}
        <div className="w-full group flex items-center h-10 justify-between hover:translate-0" >
         <TbLibrary
            className="
              text-2xl text-white/50
              opacity-0 -translate-x-[30px]
              group-hover:opacity-100 
              group-hover:translate-x-1.5
              transition-all duration-500 ease-linear
              hover:text-white
            "
          />
          <h2 className="text-white font-bold group-hover:underline">Om Santi Om</h2>
          <IoIosMore className="
           opacity-0
           transition-all
           duration-500
           group-hover:opacity-100
         text-white text-2xl text-white/50
         hover:text-white
         " />
          <MdOutlineZoomInMap className="
          text-white text-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          text-white/50
          hover:text-white
          "
           />
        </div>

        {/* Mid content  */}
        <div>
          <img className="rounded-sm" src={OmSantiOm} alt="Song Cover" />
          <div className="mt-6 relative group">
             <h2 className="font-bold text-2xl text-white">Ajab Si</h2>
             <h4 className="text-white/60 hover:underline hover:text-white">KK,Vishal-Shekhar,Vishal-Dadlani</h4>
             <div className="flex absolute top-1 right-1.5 gap-2">
                <RiGalleryUploadFill className="
               text-white/60
               hover:text-white
                 group-hover:translate-x-1.5
                 text-2xl
                 translate-x-15
                 opacity-0
                 group-hover:opacity-100
                 transition-all
                 ease-in-out
                 duration-500" />
                <IoMdAddCircle className="text-white/60 hover:text-white text-2xl"  />
             </div>
          </div>
        </div>
        {/* Singers Box */}
        <div className="mt-6 bg-white/5 rounded-2xl p-4">
           <div className="flex justify-between">
           <h2 className="text-white font-bold">Credits</h2>
           <h2 className="text-white/60 hover:text-white text-sm font-semibold">Show all</h2>
           </div>

           {/* Artist Box */}
           { artist.map((value)=>(
            <div className="mt-3 relative px-2 py-2 rounded-sm hover:bg-white/20" key={value.id}>
              <h2 className="text-white font-semibold hover:underline">{value.artistName}</h2>
              <h2 className="text-white/60 text-xs" >{value.artistPost}</h2>
              <span className="text-white text-sm font-semibold border rounded-2xl py-1 px-4 absolute top-1.5 right-1.5">Follow</span>
           </div>
           ))
          
           }
        </div>   
      
        {/* Bottom Parts */}
        <div className="mt-4 bg-white/5 rounded-2xl">
            <div className="flex justify-between items-center p-4">
             <div className="font-semibold text-white">Next in queqe</div>
             <div className="font-semibold text-white/60 text-sm hover:text-white hover:underline">Open queqe</div>
         </div>
          {/* music banner and title part */}
             <div className="flex group relative hover:bg-white/4 p-4 rounded-2xl">
                 <div><img className="w-12 h-12 rounded group-hover:opacity-85" src={OmSantiOm} alt="music" /></div>
                   <FaPlay className="absolute top-7 left-7 text-2xl text-white opacity-0 group-hover:opacity-100" />
                 <div className="ml-2">
                   <h1 className="text-white">Dard-E-Disco</h1>
                   <h3 className="text-white/60 text-sm hover:underline">Sukhwinder Singh</h3>
                 </div>
                 <IoIosMore className="text-white text-2xl mt-1.5 opacity-0 group-hover:opacity-100" />
             </div>
        </div>

    </div>
  );
};

export default RightSidebar;