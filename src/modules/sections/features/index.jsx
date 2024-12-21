import React from "react";
import video2 from "../../../assets/video2.mp4";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "../../../components/cards";
import assets from "../../../assets/icons/asset.svg";
import video3 from "../../../assets/video3.mp4"
import { projects } from "../../../data";
export default function Features() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div id="features">
      <div className=" max-w-[1440px] mx-auto o ">
        <h2 className="md:text-[85px] py-[73px] text-[clamp(52px,_39.481px_+_100vw*_.0321,_94px)] md:w-[663px] reyhan-medium leading-[1em] text-[#2e21de]  px-4 lg:ml-[256px] ">
          Digital Confidence With AI Antivirus.
        </h2>
      </div>
      <main
        ref={container}
        className="relative md:flex hidden items-center justify-center flex-col  "
        id="offers"
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <main className="px-4 md:hidden flex flex-col gap-10 pb-[100px]">
        <div className="  relative   w-full bg-white  h-[260px] rounded-[max(20.4px,_20.4px_+_100vw*_.0021)]  ">
          <video
            className=" h-[260px] object-cover rounded-[max(20.4px,_20.4px_+_100vw*_.0021)] "
            src={video2}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-0 left-0 flex gap-5 flex-col h-full  p-4 ">
            <div className="w-[34px] h-[34px] bg-[#2e21de] rounded-full flex justify-center items-center">
              <img className="w-[22px]" src={assets} alt="asset" />
            </div>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[28px] reyhan-medium leading-[1.1em] tracking-[-1.92px] text-[#2e21de]">
                Why Protect AI
              </h3>
              <ul className="reyhan-medium flex gap-[6px] flex-col ">
                <li className="pt-1  pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                  $500k Assets Safeguarded
                </li>
                <li className=" pt-1  pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                  98% Cyber Threats Mitigated
                </li>
                <li className="pt-1 pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                  85% Incidents Reduction
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="   w-full bg-white  rounded-[max(20.4px,_20.4px_+_100vw*_.0021)]  ">
          <div className=" flex  flex-col h-full   ">
            <div className="bg-white rounded-[max(20.4px,_20.4px_+_100vw*_.0021)] px-4 pt-4 pb-[56px]">
              <div className="w-[34px] h-[34px] bg-[#2e21de] rounded-full flex justify-center items-center ">
                <img className="w-[22px]" src={assets} alt="asset" />
              </div>
              <div className="flex flex-col gap-[20px] mt-5">
                <h3 className="text-[28px] reyhan-medium leading-[1.1em] tracking-[-1.92px] text-[#2e21de] ">
                  Securing Networks.
                </h3>
                <ul className="reyhan-medium flex gap-[6px] flex-col  ">
                  <li className="pt-1  pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                    AI-Based Protection
                  </li>
                  <li className=" pt-1  pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                    Real-Time Threat Detection
                  </li>
                  <li className="pt-1 pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                    Adaptive Defense System
                  </li>
                  <li className="pt-1 pl-3 border-l border-[#4020DF1A] text-[#2e21de] leading-[1.3em]">
                    AI-driven Threat Intelligence
                  </li>
                </ul>
              </div>
            </div>
            <video
              className=" w-full h-[390px] object-cover rounded-[max(20.4px,_20.4px_+_100vw*_.0021)] -mt-10"
              src={video3}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </main>
    </div>
  );
}
