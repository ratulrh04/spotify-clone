
import MainLayout from './components/MainLayout';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div>
        <Navbar/>
        <MainLayout/>
        <MusicPlayer/>
    </div>
  );
};

export default App;