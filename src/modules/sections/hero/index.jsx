import React from 'react'
import video1 from "../../../assets/video1.mp4"
export default function Hero() {
  return (
    <div>
      <video
     
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
