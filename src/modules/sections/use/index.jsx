import React from "react";
import phishing from  "../../../assets/Phishing Protection.png";
import contract from "../../../assets/Contract Analysis.png";
import Risk from "../../../assets/Risk Detection.png";
import simulation from "../../../assets/Transaction Simulation.png";
import token from "../../../assets/Token Analysis.png";
import real from "../../../assets/Real-Time Alerts.png";
export default function UseCase() {
  const items = [
    "Individual Crypto Users",
    "DeFi Investors",
    "Institutions and Enterprises",
    "NFT Collectors and Traders",
    " Web3 Beginners",
  ];

  const colors = [
    "#573ebb", 
    "#34a36c", 
    "#3488a3", 
    "#ffffff", 
    "#e85030", 
  ];

  return (
    <div
      id=""
      className="bg-[#040313] reyhan-medium px-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] pt-[100px] pb-[150px]"
    >
     
      <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-0">
        <h3 className="text-[clamp(52px,39.481px_+_100vw_*_.0321,94px)] leading-[1em] tracking-[-2.4px] text-white w-[18.75%]">
          For
        </h3>
        <div className="marquee-container text-[clamp(52px,39.481px_+_100vw_*_.0321,94px)] leading-[1em] tracking-[-2.4px]">
          <div className="marquee">
            {items.map((item, index) => (
              <div
                key={index}
                className="marquee-item "
                style={{ color: colors[index % colors.length] }}
              >
                {item}
              </div>
            ))}

            {items.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="marquee-item"
                style={{ color: colors[index % colors.length] }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
