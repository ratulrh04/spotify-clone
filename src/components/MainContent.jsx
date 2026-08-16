import BannerSectionMainContent from "./BannerSectionMainContent";
import QuickPickCard from "./QuickPickCard";

const MainContent = () => {
  return (
    <div className="flex-1 px-9 py-4 overflow-y-auto bg-zinc-800 bg-linear-to-t from-indiago-500 to-sky-800 rounded-lg m-1">
        <div className=" w-70 h-15" >
           <button className="text-black  bg-white rounded-full w-11 h-8">All</button> 
           <button className="text-white bg-mist-300/30 rounded-full w-15 h-9 ml-3 text-sm">Music</button>
        </div>

        {/* Quick Picks Cards */}
         <QuickPickCard/>
        {/* BannerSectionMainContent */}
        <BannerSectionMainContent/>
    </div>
  );
};

export default MainContent;