import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Scam() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scale to fill the screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 180]);

  return (
    <div
      id="scam"
      ref={container}
      className="h-[250vh]  relative md:block hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            transformOrigin: "center",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-full h-full absolute"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <h1
            className="gradient-text reyhan-medium font-bold leading-[1em] text-[90px] z-10 -mt-[50px] mr-[10px]"
            style={{
              color: "",
              position: "relative",
              zIndex: 10,
            }}
          >
            Enter a world without scams
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
