import GettingStarted from "./GettingStarted";
import RecommendedForToday from "./RecommendedForToday";



const BannerSectionMainContent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 min-h-60 max-h-max mt-27">
            <GettingStarted />
            <RecommendedForToday />
        </div>
    );
};

export default BannerSectionMainContent; 