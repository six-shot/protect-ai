import React from 'react'
import video4 from "../../../assets/video4.mp4"

export default function Portfolio() {
  return (
    <div>
      <div className="relative">
        <video src={video4} autoPlay loop muted playsInline />
        <div className="absolute top-0 w-full   text-white z-[10] ">
          <div className="flex flex-col justify-center items-center reyhan-medium">
            <h2 className="text-[56px]  w-[848px] leading-[1.1em] tracking-[-2px] text-center mb-[36px]">
              The portfolio Management system designed for your growth
            </h2>
            <button className="h-[40px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
