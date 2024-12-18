import React from "react";
import video4 from "../../../assets/video4.mp4";

export default function Portfolio() {
  return (
    <div className="md:block hidden">
      <div className="relative bg-[#040313] overflow-x-hidden">
        <video src={video4} autoPlay loop muted playsInline />
        <div className="absolute top-10 w-full   text-white z-[10] ">
          <div className="flex flex-col justify-center items-center reyhan-medium">
            <h2 className="md:text-[56px] text-[28px]  md:w-[848px] leading-[1.1em] tracking-[-2px] text-center mb-[36px]">
              The All In One AI tool to keep you Secured from Scam Threat
            </h2>
            <button className="h-[40px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Request a demo
            </button>
          </div>
        </div>
        <div className="absolute bottom-[200px] left-[350px]  w-full   text-white z-[10] ">
          <div className="max-w-[1440px] mx-auto">
            <div className=" reyhan-medium ">
              <h2 className="text-[46px] text-[#656578]   leading-[1.1em] tracking-[-2px] mb-4">
                <span className="text-white">
                  Cutting-edge cybersecurity
                  <br /> platform  to safeguard users
                  <br />
                </span>{" "}
                to drive alpha and power
                <br /> decision-making.
              </h2>
              <button className="mt-5 h-[40px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
                View Studio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
