import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import caretdown from "../../assets/icons/caret-down.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import search from "../../assets/icons/search.svg";

export default function Navbar() {
  const [isPortfolioSection, setIsPortfolioSection] = useState(false);

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPortfolioSection(true);
          } else {
            setIsPortfolioSection(false);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the portfolio section is visible
      }
    );

    // Find and observe the Portfolio section
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    // Cleanup observer on component unmount
    return () => {
      if (portfolioSection) {
        observer.unobserve(portfolioSection);
      }
    };
  }, []);


  return (
    <div className="fixed z-[20] w-full top-[35px]">
      <div className="flex justify-center items-center reyhan-regular px-[10%]">
        <div
          className={`h-[52px] backdrop-blur-[7.5px] flex md:justify-normal justify-between w-full md:w-auto md:gap-[max(26.4px,_calc(26.4px_+_100vw_*_0.0339))] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] items-center pl-6 pr-2.5  ${
            isPortfolioSection
              ? "bg-[#0f151fcc]  shadow-[0_1px_0_0_#01001f] text-white"
              : "bg-[#f2f4fdd1] shadow-[0_1px_0_0_#e5efff] text-[#2e21de]"
          }`}
        >
          <h4 className="">LOGO</h4>
          <nav className="md:flex hidden ">
            <ul className="flex gap-[min(4px,_4px_+_100vw_*_0)] items-center  text-sm ">
              <li className="flex gap-[2px] items-center px-2.5">
                <button>Home</button>
              </li>
              <li className="flex gap-[2px] items-center px-2.5">
                <button>About</button>
              </li>
              <li className="flex gap-[2px] items-center pl-2 pr-2.5">
                <button>Feature</button>
                <img
                  src={caretdown}
                  className="w-[16px] h-[16px] mt-1"
                  alt="caretdown"
                />
              </li>
              <li className="flex gap-[2px] items-center px-2.5">
                <button>Buy</button>
              </li>
            </ul>
          </nav>
          <div className="md:flex hidden gap-2.5 items-center text-sm">
            <RiTwitterXLine className="text-[21px]  cursor-pointer" />
            <LiaTelegramPlane className="text-[22px]  cursor-pointer" />
            <button
              className={`h-[32px] px-3 border  rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] ${isPortfolioSection ? "border-white/20": "border-[#2e21de]/20"} `}
            >
              Chart
            </button>
            <button
              className={`h-[32px] px-3 rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] ${
                isPortfolioSection
                  ? "bg-[white] text-[#01001f]"
                  : "bg-[#2e21de] text-white "
              } `}
            >
              Enter DApp
            </button>
          </div>
          <div className="md:hidden flex">
            <button className="h-[32px] px-3 text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
