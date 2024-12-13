import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Scam() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scale effect for zooming into the text
  const scale = useTransform(scrollYProgress, [0, 1], [1, 300]);

  return (
    <div ref={container} className="h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center ">
        {/* Text Container */}
        <motion.div
          style={{
            scale,
            transformOrigin: "center",
            clipPath: "text",
            WebkitClipPath: "text",
          }}
          className="textContainer"
        >
          <h1
            className="reyhan-medium font-bold leading-[1em] text-[90px] "
            style={{
              color: "#2e21de", // Blue text color
              background: "none", // Ensure no background affects zoom
              textAlign: "center",
            }}
          >
            Enter a world Without scam
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
