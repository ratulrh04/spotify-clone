
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <MainContent/>
            <RightSidebar/>
        </div>
    );
};

export default MainLayout;