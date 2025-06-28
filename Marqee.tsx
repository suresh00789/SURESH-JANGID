"use client;"
import React from "react";

const names = [
  " suresh jangid !!",
  "surya jangid !!",
  "BMW M5 F90 !!",
  "testimonial ",
  "bmw m5 series",
  "bmw m4 series",
  "coffee shop  ",
  "music player",
    "infotech solutions",
  "instagram clone",
  "facebook clone",
  "testimonial ",
  "bmw m5 series",
  "bmw m4 series",
  "coffee shop  ",
  "Surya ",
    "infotech solutions",
  "instagram clone",
  "facebook clone",
  "testimonial ",
  "bmw m5 series",
  "bmw m4 series",
  "coffee shop  ",
  "music player",
    "infotech solutions",
  "instagram clone",
  "facebook clone",
  "testimonial ",
  "bmw m5 series",
  "bmw m4 series",
  "coffee shop  ",
  "music player",
    "infotech solutions",
  "instagram clone",
  "facebook clone",
  "testimonial ",
  "bmw m5 series",
  "bmw m4 series",
  "coffee shop  ",
  "music player",

];

const Marquee = () => {
  return (
    <>
    <div>
      
    </div>
      <div className="pt-10 pb-30">
        <h1 className="text-center text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">
          Welcome !!
        </h1>
      </div>

      <div className="flex h-100 flex-col items-center w-full space-y-10 pb-20 pt-20 px-4">

        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-left inline-block">
            {names.map((name, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center mx-4 px-8 py-4 rounded-xl shadow-xl font-semibold text-lg md:text-3xl text-gray-100"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none opacity-70 backdrop-blur-sm" />
        </div>

        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-right inline-block">
            {names.map((name, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center mx-4 px-8 py-4 rounded-xl shadow-xl font-semibold text-lg md:text-3xl text-gray-100"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none opacity-70 backdrop-blur-sm" />
        </div>
      </div>

      <style>{`
   @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 120s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 120s linear infinite;
        }
        .hover\\:animation-play-state-paused:hover .animate-marquee-left,
        .hover\\:animation-play-state-paused:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Marquee;
