import React from "react";
import getintouch from "../../../assets/get-in-touch-light.jpg";

export default function GetInTouch() {
  return (
    <div className="relative ">
      {/* Image */}
      <img src={getintouch} alt="Get in touch" className="w-full h-auto" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="md:w-auto  w-full">
          <div className=" flex flex-col  md:gap-[80px] gap-[20px] w-full p-[max(24.4px,24.4px+100vw*0.0233)] bg-[#ffffff80]  border-[#748DFF1A] pb-[max(21.2px,_21.2px_+_100vw*_.0064)] rounded-[max(23.6px,23.6px_+_100vw_*_.0191)]">
            <h5 className="reyhan-medium text-center text-[#2e21de] text-[clamp(22px,_19.036px_+_100vw*_.0076,_32px)] ">
              Get in touch with our team
            </h5>
            <button className="h-[40px] md:px-[180px] bg-[#2e21de] reyhan-regular rounded-full text-white">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
