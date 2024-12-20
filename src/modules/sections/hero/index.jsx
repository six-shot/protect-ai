import React from "react";
import video1 from "../../../assets/video1.mp4";
import minivideo from "../../../assets/heromini.mp4";
export default function Hero() {
  return (
    <div id="hero" className="overflow-hidden pb-[200px]">
      <video
        className="md:flex hidden "
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        src={minivideo}
        className="md:hidden flex max-w-[180%] w-[180%] relative left-[-40%] "
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
