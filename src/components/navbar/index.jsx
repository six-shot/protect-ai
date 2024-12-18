import React from "react";
import logo from "../../assets/logo.svg";
import caretdown from "../../assets/icons/caret-down.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import search from "../../assets/icons/search.svg";
export default function Navbar() {
  return (
    <div className="fixed z-[20] w-full top-[35px]">
      <div className="flex justify-center items-center reyhan-regular px-[10%]">
        <div className="h-[52px] bg-[#f2f4fdd1] backdrop-blur-[7.5px] flex md:justify-normal justify-between w-full md:w-auto md:gap-[max(26.4px,_calc(26.4px_+_100vw_*_0.0339))] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] items-center  pl-6 pr-2.5 shadow-[0_1px_0_0_#e5efff]">
          <h4 className="text-[#2e21de]">LOGO</h4>
          <nav className="md:flex hidden ">
            <ul className="flex gap-[min(4px,_4px_+_100vw_*_0)] items-center text-[#2e21de] text-sm ">
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
          <div className="md:flex hidden  gap-2.5 items-center text-sm">
            <RiTwitterXLine className="text-[21px] text-[#2e21de] cursor-pointer" />
            <LiaTelegramPlane className="text-[22px] text-[#2e21de] cursor-pointer" />
            <button className="h-[32px] px-3 border text-[#2e21de] border-[#2e21de]/20 rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Chart
            </button>
            <button className="h-[32px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Enter DApp
            </button>
          </div>
          <div className="md:hidden flex">
            <button className="h-[32px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
