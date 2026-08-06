import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar />

      <MainContent />

      <RightSidebar />
    </div>
  );
};

export default MainLayout;