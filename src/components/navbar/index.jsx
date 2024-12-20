import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import caretdown from "../../assets/icons/caret-down.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import search from "../../assets/icons/search.svg";

export default function Navbar() {
  const [isPortfolioSection, setIsPortfolioSection] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let isInPortfolio = false;
    let isInUseCase = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          // Update section flags based on which section is intersecting
          if (sectionId === "portfolio") {
            isInPortfolio = entry.isIntersecting;
          } else if (sectionId === "usecase") {
            isInUseCase = entry.isIntersecting;
          }

          // Set the state to true if we're in either section
          setIsPortfolioSection(isInPortfolio || isInUseCase);
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe both Portfolio and UseCase sections
    const portfolioSection = document.querySelector("#portfolio");
    const useCaseSection = document.querySelector("#usecase");

    if (portfolioSection) {
      observer.observe(portfolioSection);
    }
    if (useCaseSection) {
      observer.observe(useCaseSection);
    }

    // Cleanup observer on component unmount
    return () => {
      if (portfolioSection) {
        observer.unobserve(portfolioSection);
      }
      if (useCaseSection) {
        observer.unobserve(useCaseSection);
      }
    };
  }, []);

  return (
    <div className="fixed z-[50] w-full top-[35px]">
      <div
        className={`flex justify-center items-center reyhan-regular   ${
          toggle ? "px-[5%]" : "px-[10%]"
        } `}
      >
        <div
          className={`relative h-[52px] z-[100] backdrop-blur-[7.5px] flex md:justify-normal justify-between w-full md:w-auto md:gap-[max(26.4px,_calc(26.4px_+_100vw_*_0.0339))] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] items-center pl-6 pr-2.5  ${
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
              className={`h-[32px] px-3 border  rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] ${
                isPortfolioSection ? "border-white/20" : "border-[#2e21de]/20"
              } `}
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
            <button
              onClick={() => setToggle(!toggle)}
              className="h-[32px] px-3 text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]"
            >
              {toggle ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-[10] top-[35px] w-full sidebar  px-[5%] transition-all duration-500 ease-in-out  ${
          toggle ? " flex flex-col px-[5%]" : " hidden px-[10%]"
        }`}
      >
        <div
          className={` ${
            isPortfolioSection
              ? "bg-[#0f151fcc]  shadow-[0_1px_0_0_#01001f] text-white"
              : "bg-[#f2f4fdd1] shadow-[0_1px_0_0_#e5efff] text-[#2e21de]"
          } backdrop-blur-[7.5px] w-full pb-6 rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]`}
        >
          <div className="pt-[74px] flex flex-col gap-8  px-6 reyhan-regular">
            <div>
              <h5 className=" text-sm  uppercase text-[#2e21de]/40">Company</h5>
              <ul className="flex flex-col gap-[5px] ">
                <li className="leading-[1.3em] pt-1">About</li>
                <li className="leading-[1.3em] pt-1">News & Content</li>
              </ul>
            </div>
            <div>
              <h5 className=" text-sm  uppercase text-[#2e21de]/40">
                Services
              </h5>
              <ul className="flex flex-col gap-[5px] ">
                <li className="leading-[1.3em] pt-1">Institutions</li>
                <li className="leading-[1.3em] pt-1">Professional Clearing</li>
                <li className="leading-[1.3em] pt-1">Active Trader</li>
              </ul>
            </div>
            <h5 className="leading-[1.3em] pt-1 ">Studio</h5>
            <h5 className="leading-[1.3em] pt-1 ">Careers</h5>
            <div className="flex justify-between items-center">
              <button
                className={`h-[32px] px-3 border border-[#2e21de]/40  rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] text-sm  `}
              >
                Login
              </button>
              <button
                className={`h-[32px] px-3 rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]  bg-[#2e21de] text-white text-sm `}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
