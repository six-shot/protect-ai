import React from "react";
import github from "../../../assets/icons/github.svg"
import linkedlin from "../../../assets/icons/linkedin.svg";
import youtube from "../../../assets/icons/youtube.svg";
import spotify from "../../../assets/icons/spotify.svg";
export default function Footer() {
  return (
    <div className="bg-white reyhan-regular">
      <footer className="px-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] ">
        <div className="bg-[#E5EFFF] flex pl-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] py-[clamp(12px,_1.275px_+_100vw*_.0275,_48px)] rounded-[clamp(16px,_13.621px_+_100vw*_.0061,_24px)]">
          <div className="flex justify-between flex-col w-[25%]">
            <div className=" ">
              <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
              <button className="bg-[#01001f] h-[36px] w-[56px] rounded-full text-white text-sm">
                Login
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[23px] h-[23px]">
                <img src={github} alt="github" />
              </div>
              <div className="w-[23px] h-[23px]">
                <img src={linkedlin} alt="github" />
              </div>
              <div className="w-[23px] h-[23px]">
                <img src={youtube} alt="github" />
              </div>
              <div className="w-[23px] h-[23px]">
                <img src={spotify} alt="github" />
              </div>
            </div>
          </div>

          <div className="w-[50%] flex gap-[150px] flex-col ">
            <div className="flex items-start">
              <div className=" w-[30%] ">
                <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>About</li>
                  <li>News & Content</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className=" w-[36%] ">
                <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>Institutional</li>
                  <li>Professional Clearing</li>
                  <li>Active Trading</li>
                </ul>
              </div>
              <div className=" w-[16%]">
                <h5 className="text-[#01001f]/40 mb-2.5">PRODUCTS</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>Studio</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <h5 className="text-[#01001f]">Regulatory Disclosures</h5>
              <h5 className="text-[#01001f]">Privacy Policy</h5>
              <h5 className="text-[#01001f]">Security</h5>
            </div>
          </div>
          <div className="w-[25%]  ">
            <h5 className="text-[#01001f]/40 mb-2.5">ADDRESS</h5>
            <p className="leading-[1.3em] text-[#01001f]">
              4 World Trade Center <br /> 150 Greenwich St Floor 45 <br /> New
              York, NY 10007
              <br />
              (646) 845-0036
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
