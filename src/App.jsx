import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 overflow-hidden">
        <MainLayout />
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App;