import React from "react";
import video1 from "../../../assets/Hero.mp4";
import minivideo from "../../../assets/heromini.mp4";
import Spline from "@splinetool/react-spline";
export default function Hero() {
  return (
    <div id="hero" className="relative overflow-hidden h-screen w-full">
      {/* Video */}
      <video
        className=" h-full w-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Text overlay */}
      <div className="absolute -mt-[100px] inset-0 flex flex-col items-center justify-center reyhan-medium">
        <h1 className="text-white md:text-[100px] text-[50px] leading-[50px] md:leading-[100px] font-bold text-center tracking-[3px]">
          Ai Antivirus that <br /> Scans All Scams
        </h1>
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-[#2e21de] text-white  px-8 md:py-3 py-2  rounded-full">
            Whitepaper
          </button>
          <button className="bg-white text-black  px-8 md:py-3 py-2 rounded-full">
            Pitch deck
          </button>
        </div>
      </div>
    </div>
  );
}
