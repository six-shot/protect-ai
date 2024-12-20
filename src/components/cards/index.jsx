import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import asset from "../../assets/icons/asset.svg";

const Card = ({
  i,
  title,
  description,
  imageUrl,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  features,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="md:h-screen max-w-[1440px]  mx-auto  sticky flex justify-center top-0 w-full  left-0"
    >
      <motion.div
        style={{
          scale,

          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className=" origin-top flex justify-end items-end relative  max-w-[75%] w-full bg-white  h-[620px] rounded-[max(20.4px,_20.4px_+_100vw*_.0021)]  "
      >
        <video
          className=" h-[620px] object-cover rounded-[max(20.4px,_20.4px_+_100vw*_.0021)] "
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 flex flex-col h-full justify-between p-[43px]  ">
          <div className="w-[57px] h-[57px] bg-[#2e21de] rounded-full flex justify-center items-center">
            <img className="w-[30px]" src={asset} alt="asset" />
          </div>
          <div className="flex flex-col gap-[max(20.4px,20.4px_+_100vw_*_.0021)]">
            <h3 className="text-[56px] w-[400px] reyhan-medium leading-[1.1em] tracking-[-1.92px] text-[#2e21de]">
              {title}
            </h3>
            <ul className="reyhan-medium flex items-center gap-[max(20.4px,_20.4px_+_100vw*_.0021)]">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 flex flex-col gap-2 border-l border-[#4020DF1A] pl-3"
                >
                  <span className="font-bold text-indigo-600">
                    {feature.value}
                  </span>
                  <span className="text-gray-500">{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
