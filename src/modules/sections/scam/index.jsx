import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Scam() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scale to fill the screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);

  return (
    <div ref={container} className="h-[400vh] relative">
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
            className="reyhan-medium font-bold leading-[1em] text-[90px] z-10 -mt-[50px] mr-[50px]"
            style={{
              color: "#0B0736", // Changed to white for visibility
              position: "relative",
              zIndex: 10,
            }}
          >
            Enter a wolrd without scam
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
