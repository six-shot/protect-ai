import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function News() {
  return (
    <div className="md:px-[350px] pt-[150px] md:pb-[300px] bg-white">
      <div className="max-w-[1440px] mx-auto md:px-0 px-4">
        <div className="reyhan-medium tracking-[-1px]">
          <h4 className="text-[clamp(24px,_15.069px_+_100vw*_.0229,_54px)]">
            Learn How to Protect Yourself
          </h4>
        </div>
        <div className="flex flex-col gap-6 reyhan-regular mt-[30px]">
          <div className="relative flex items-center h-full group cursor-pointer">
            <div className="bg-[#f1f4f9] w-full px-[22px] md:py-[26px] py-4 flex md:flex-row flex-col md:gap-10 gap-2 items-start rounded-[16px] relative z-10">
              <h6 className="text-[#01001f]/40 text-sm">Au 16, 2024</h6>
              <h6 className="text-[#01001f] md:text-[22px] text-[18px] leading-[1.1em]">
                <span className="text-[#01001f]/40  mr-1.5">Web3</span>
                How AI Protects Your Web3 Transactions
              </h6>
            </div>
            <div className="absolute top-0 right-0 w-[100px] flex items-center justify-center h-full  bg-[#2e21de] transform translate-x-[-20px] transition-transform duration-200 group-hover:translate-x-[80px] rounded-r-[16px]">
              <FaArrowRight className="text-white -rotate-[45deg] text-[20px]" />
            </div>
          </div>
          <div className="relative flex items-center h-full group cursor-pointer">
            <div className="bg-[#f1f4f9] w-full px-[22px] md:py-[26px] py-4 flex md:flex-row flex-col md:gap-10 gap-2 items-start rounded-[16px] relative z-10">
              <h6 className="text-[#01001f]/40 text-sm">Jul 30, 2024</h6>
              <h6 className="text-[#01001f] md:text-[22px] text-[18px] leading-[1.1em]">
                <span className="text-[#01001f]/40  mr-1.5">Phising Scams</span>
                Top Tips to Avoid Phishing Scams{" "}
              </h6>
            </div>
            <div className="absolute top-0 right-0 w-[100px] flex items-center justify-center h-full  bg-[#2e21de] transform translate-x-[-20px] transition-transform duration-200 group-hover:translate-x-[80px] rounded-r-[16px]">
              <FaArrowRight className="text-white -rotate-[45deg] text-[20px]" />
            </div>
          </div>
          <div className="relative flex items-center h-full group cursor-pointer">
            <div className="bg-[#f1f4f9] w-full px-[22px] md:py-[26px] py-4 flex md:flex-row flex-col md:gap-10 gap-2 items-start rounded-[16px] relative z-10">
              <h6 className="text-[#01001f]/40 text-sm">Jul 15, 2024</h6>
              <h6 className="text-[#01001f] md:text-[22px] text-[18px] leading-[1.1em]">
                <span className="text-[#01001f]/40  mr-1.5">Web3</span>
                Why Real-Time Alerts Matter in Web3
              </h6>
            </div>
            <div className="absolute top-0 right-0 w-[100px] flex items-center justify-center h-full  bg-[#2e21de] transform translate-x-[-20px] transition-transform duration-200 group-hover:translate-x-[80px] rounded-r-[16px]">
              <FaArrowRight className="text-white -rotate-[45deg] text-[20px]" />
            </div>
          </div>
          <div className="relative flex items-center h-full group cursor-pointer">
            <div className="bg-[#f1f4f9] w-full px-[22px] md:py-[26px] py-4 flex md:flex-row flex-col md:gap-10 gap-2 items-start rounded-[16px] relative z-10">
              <h6 className="text-[#01001f]/40 text-sm">Jun 10, 2024</h6>
              <h6 className="text-[#01001f] md:text-[22px] text-[18px] leading-[1.1em]">
                <span className="text-[#01001f]/40  mr-1.5">
                  Token Security
                </span>
                Safeguarding Your Investments
              </h6>
            </div>
            <div className="absolute top-0 right-0 w-[100px] flex items-center justify-center h-full  bg-[#2e21de] transform translate-x-[-20px] transition-transform duration-200 group-hover:translate-x-[80px] rounded-r-[16px]">
              <FaArrowRight className="text-white -rotate-[45deg] text-[20px]" />
            </div>
          </div>
          <div className="relative flex items-center h-full group cursor-pointer">
            <div className="bg-[#f1f4f9] w-full px-[22px] md:py-[26px] py-4 flex md:flex-row flex-col md:gap-10 gap-2 items-start rounded-[16px] relative z-10">
              <h6 className="text-[#01001f]/40 text-sm">May 20, 2024</h6>
              <h6 className="text-[#01001f] md:text-[22px] text-[18px] leading-[1.1em]">
                <span className="text-[#01001f]/40  mr-1.5">Emerging Threats</span>
                How Protect AI Stays Ahead of Emerging Threats
              </h6>
            </div>
            <div className="absolute top-0 right-0 w-[100px] flex items-center justify-center h-full  bg-[#2e21de] transform translate-x-[-20px] transition-transform duration-200 group-hover:translate-x-[80px] rounded-r-[16px]">
              <FaArrowRight className="text-white -rotate-[45deg] text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
