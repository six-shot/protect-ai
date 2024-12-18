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
      id="useCase"
      className="bg-[#040313] reyhan-medium px-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] pt-[100px] pb-[150px]"
    >
      <div className="bg-[#040313] py-20 ">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-5 md:px-[230px]">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5 items-center ">
            <div className="md:w-[570px] md:h-[348px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Phishing Protection</h4>
              <div className="flex items-end justify-end">
                <img src={phishing} className="w-[300px]" alt="Phishing" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-[355px] md:h-[268px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Contract Analysis</h4>
              <div className="flex items-end justify-end">
                <img src={contract} className="w-[200px]" alt="Contract" />
              </div>
            </div>
            <div className="md:w-[355px] md:h-[268px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Risk Detection</h4>
              <div className="flex items-end justify-end">
                <img src={Risk} className="w-[400px]" alt="Contract" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5 items-center ">
            <div className="md:w-[570px] md:h-[348px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Transaction Simulation</h4>
              <div className="flex items-end justify-end">
                <img src={simulation} className="w-[270px]" alt="Phishing" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-[355px] md:h-[268px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Token Analysis</h4>
              <div className="flex items-end justify-end">
                <img src={token} className="w-[270px]" alt="Phishing" />
              </div>
            </div>
            <div className="md:w-[355px] md:h-[268px] h-[256px] bg-[#0d111d] border border-[#FFFFFF0D] rounded-[12px] py-7 px-6">
              <h4 className="text-white text-[24px]">Real-Time Alerts</h4>
              <div className="flex items-end justify-end">
                <img src={real} className="w-[200px]" alt="Phishing" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
