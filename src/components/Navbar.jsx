import { useState } from "react";

import { FaSpotify } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { GiSoundOn } from "react-icons/gi";
import { FaCircleArrowDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {

  // Menu items for mobile and tablet view
const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div>
      <nav className="flex items-center justify-between bg-black text-white px-5 h-[60px] w-full">

  {/* Left Side */}
  <div className="flex items-center">
    <FaSpotify className="text-4xl" />

    {/* Hide Spotify text on Desktop */}
    <span className="ml-2 font-bold lg:hidden">
      Spotify
    </span>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden lg:flex items-center">

    <button className="p-3 bg-zinc-900 rounded-full">
      <MdHomeFilled className="text-2xl" />
    </button>

    <div className="relative ml-2">
      <IoSearchOutline className="absolute left-3 top-3 text-2xl text-gray-400" />

      <input
        type="search"
        placeholder="What do you want to play?"
        className="w-[450px] bg-zinc-900 rounded-full py-3 pl-12 pr-12"
      />

      <GiSoundOn className="absolute right-3 top-3 text-2xl text-gray-400" />
    </div>

  </div>

  {/* Desktop Right Side */}
  <div className="hidden lg:flex items-center gap-5">

    <button className="flex items-center">
      <FaCircleArrowDown className="mr-2" />
      <span>Install App</span>
    </button>

    <IoIosNotificationsOutline className="text-2xl" />

    <RiTeamFill className="text-2xl" />

    <CgProfile className="text-3xl text-amber-700" />

  </div>

  {/* Mobile & Tablet Menu */}
<div className="relative lg:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl"
      >
        <IoMdMenu />
      </button>

      {menuOpen && (
        <ul className="absolute right-0 top-12 bg-zinc-900 rounded-lg p-4 space-y-2">
          <li><button>Log in</button></li>
          <li><button>Sign up</button></li>
          <li><button>Premium</button></li>
          <li><button>Help</button></li>
          <li><button>Download</button></li>
          <li><button>Privacy</button></li>
          <li><button>Terms</button></li>
        </ul>
      )}
</div>

</nav>
    </div>
  );
};

export default Navbar;
