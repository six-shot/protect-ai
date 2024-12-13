import React from "react";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "../../../components/cards";
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
    <div>
      <div className="py-[100px] max-w-[1440px] mx-auto  ">
        <h2 className="text-[85px] w-[663px] reyhan-medium leading-[1em] text-[#2e21de] px-2.5 ml-[256px] ">
          Designed for today's complex, global market.
        </h2>
      </div>
      <main
        ref={container}
        className="relative flex items-center justify-center flex-col  "
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
    </div>
  );
}
