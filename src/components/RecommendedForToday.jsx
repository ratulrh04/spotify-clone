import ArijitSing from '../assets/ArijitSingh.png'
import ShreyaGhoshal from '../assets/shreyaGhoshal.png'
import Shane from '../assets/Shane.png'
import KumarShanu from '../assets/KumarShanu.png'
import Kk from '../assets/kk.png'
import ArRahman from '../assets/ArRahman.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const RecommendedForToday = () => {
const singers = [
    {id:1,
     image:ArijitSing,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },

     {id:2,
     image:ShreyaGhoshal,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },

     {id:3,
     image:Shane,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },

     {id:4,
     image:KumarShanu,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },

     {id:5,
     image:Kk,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },

     {id:6,
     image:ArRahman,
     description:'With jeet Gannguli, Pritam, Shaarib Toshi and Music'
     },
    
]
  return (
    <div className="flex-1 bg-[#121212] p-4 rounded-xl max-w-full overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-baseline mb-3 px-1">
        <div>
          <span className="block text-[11px] text-gray-400 font-medium">
            Inspired by your recent activity
          </span>
          <h2 className="text-white font-bold text-xl tracking-tight">
            Recommended for today
          </h2>
        </div>
        <button className="text-gray-400 text-xs font-bold hover:text-white transition-colors">
          Show all
        </button>
      </div>

      {/* Compact Auto Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2.2}
        spaceBetween={12}
        breakpoints={{
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.2 },
        }}
        className="w-full"
      >
        {singers.map((card) => (
          <SwiperSlide key={card.id}>
            {/* Compact Card Box */}
            <div className="bg-[#181818] p-2.5 rounded-md hover:bg-[#282828] w-50 h-50 transition-all cursor-pointer group">
              {/* Image with constrained square ratio */}
              <div className="relative w-full aspect-square mb-2 overflow-hidden rounded">
                <img
                  src={card.image}
                  alt={card.description}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* description & Artist Text */}
              <h3 className="text-xs font-bold text-white truncate mb-0.5">
                {card.description}
              </h3>
              <p className="text-[11px] text-gray-400 truncate">
                {card.artist}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedForToday;