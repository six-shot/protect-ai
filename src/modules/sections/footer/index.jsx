import React from "react";
import github from "../../../assets/icons/github.svg";
import linkedlin from "../../../assets/icons/linkedin.svg";
import youtube from "../../../assets/icons/youtube.svg";
import spotify from "../../../assets/icons/spotify.svg";
export default function Footer() {
  return (
    <div className="bg-white reyhan-regular px-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] pb-[50px]">
      <footer className=" ">
        <div className="bg-[#E5EFFF] py-10  flex md:flex-row flex-col md:gap-0 gap-[30px] pl-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] md:py-[clamp(12px,_1.275px_+_100vw*_.0275,_48px)] rounded-[clamp(16px,_13.621px_+_100vw*_.0061,_24px)]">
          <div className="md:flex hidden justify-between flex-col w-[25%]">
            <div className=" ">
              <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
              <button className="bg-[#01001f] h-[36px] w-[70px] rounded-full text-white text-sm">
                Try now
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

          <div className="md:w-[50%] flex md:gap-[150px]  flex-col ">
            <div className="flex md:flex-row flex-col gap-[30px] md:gap-0 items-start">
              <div className=" md:w-[30%] ">
                <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>Home</li>
                  <li>About</li>
                  <li>Feauture</li>
                  <li>Buy</li>
                </ul>
              </div>
              <div className=" md:w-[36%] ">
                <h5 className="text-[#01001f]/40 mb-2.5">GET STARTED</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>Institutional</li>
                  <li>Professional Clearing</li>
                  <li>Active Trading</li>
                </ul>
              </div>
              <div className=" md:w-[16%]">
                <h5 className="text-[#01001f]/40 mb-2.5">PRODUCTS</h5>
                <ul className="flex flex-col gap-[5px] text-[#01001f]">
                  <li>Studio</li>
                </ul>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-10 md:items-center">
              <h5 className="text-[#01001f]">Regulatory Disclosures</h5>
              <h5 className="text-[#01001f]">Privacy Policy</h5>
              <h5 className="text-[#01001f]">Security</h5>
            </div>
          </div>
          <div className="md:w-[25%]  ">
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
      <div className="md:px-[100px] px-5">
        <div className="bg-[#c7dcfe]  rounded-b-[clamp(16px,_13.621px_+_100vw*_.0061,_24px)]  py-[42px] px-[9px]">
          <div className="px-[42px] text-[#01001f]/40">
            <p> Copyright © 2024 Clear Street LLC. All rights reserved.</p>
            <p className="text-xs md:w-[862px]">
              Products and services are offered by Clear Street LLC as a Broker
              Dealer member FINRA and SIPC and a Futures Commission Merchant
              registered with the CFTC and member of NFA. Additional information
              about Clear Street is available on FINRA BrokerCheck, including
              its Customer Relationship Summary and NFA BASIC | NFA 
              (futures.org).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
