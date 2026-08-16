import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const GettingStarted = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Example slide data
  const slidesData = [
    {
      id: 1,
      title: "3. Watch a video",
      description: "Play videos from your favorite artists and creators.",
      ctaPrimary: "Browse videos",
      ctaSecondary: "Show more tips",
      mediaBg: "bg-[#004d5a]", // Dark teal preview box
    },
    {
      id: 2,
      title: "4. Discover music",
      description: "Explore new tracks curated just for you.",
      ctaPrimary: "Listen now",
      ctaSecondary: "Show more tips",
      mediaBg: "bg-[#1e3a8a]",
    },
  ];

  return (
    <div className="bg-[#12121221] text-white p-6 max-w-xl rounded-xl w-120">
      {/* Header Section: Title + Custom Navigation Arrows Side-by-Side */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Getting started</h2>

        <div className="flex items-center gap-4 text-gray-400">
          <button
            ref={prevRef}
            className="hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {/* Left Chevron Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {/* Right Chevron Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          // Connect custom React buttons to Swiper navigation params
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="rounded-2xl overflow-hidden"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Card UI Box */}
            <div className="relative bg-gradient-to-r from-[#006070] to-[#008090] p-6 rounded-2xl flex justify-between items-center overflow-hidden min-h-[220px]">
              
              {/* Left Content Area */}
              <div className="z-10 flex flex-col justify-between max-w-[60%] h-full">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-cyan-100 font-medium leading-snug">
                    {slide.description}
                  </p>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <button className="bg-[#1ed760] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform">
                    {slide.ctaPrimary}
                  </button>
                  <button className="text-sm font-bold text-cyan-100 hover:text-white transition-colors">
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>

              {/* Right Media Preview Box */}
              <div className={`w-44 h-32 ${slide.mediaBg} rounded-lg flex items-center justify-center shadow-lg`}>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:scale-110 transition-transform">
                  {/* Play Icon */}
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GettingStarted;