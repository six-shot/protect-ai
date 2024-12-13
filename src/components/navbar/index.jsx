import React from "react";
import logo from "../../assets/logo.svg";
import caretdown from "../../assets/icons/caret-down.svg";
import search from "../../assets/icons/search.svg";
export default function Navbar() {
  return (
    <div className="fixed z-[20] w-full top-[35px]">
      <div className="flex justify-center place-items-center reyhan-regular">
        <div className="h-[52px] bg-[#f2f4fdd1] backdrop-blur-[7.5px] flex gap-[max(26.4px,_calc(26.4px_+_100vw_*_0.0339))] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))] items-center  pl-6 pr-2.5 shadow-[0_1px_0_0_#e5efff]">
          <img src={logo} className="w-[100px]" alt="logo" />
          <nav>
            <ul className="flex gap-[min(4px,_4px_+_100vw_*_0)] items-center text-[#2e21de] text-sm ">
              <li className="flex gap-[2px] items-center pl-2 pr-2.5">
                <button>Company</button>
                <img
                  src={caretdown}
                  className="w-[16px] h-[16px] mt-1"
                  alt="caretdown"
                />
              </li>
              <li className="flex gap-[2px] items-center pl-2 pr-2.5">
                <button>Services</button>
                <img
                  src={caretdown}
                  className="w-[16px] h-[16px] mt-1"
                  alt="caretdown"
                />
              </li>
              <li className="flex gap-[2px] items-center px-2.5">
                <button>Studio</button>
              </li>
              <li className="flex gap-[2px] items-center px-2.5">
                <button>Careers</button>
              </li>
            </ul>
          </nav>
          <div className="flex gap-2.5 items-center text-sm">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <img src={search} alt="search" />
            </div>
            <button className="h-[32px] px-3 border text-[#2e21de] border-[#2e21de]/20 rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Login
            </button>
            <button className="h-[32px] px-3  text-white bg-[#2e21de] rounded-[max(23.5px,_calc(23.5px_+_100vw_*_0.0185))]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
