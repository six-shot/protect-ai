import React from "react";

export default function UseCase() {
  const items = [
    "Active Traders",
    "Family Offices",
    "Hedge Funds",
    "Traditional Assets Managers",
    "Alternative Assets managers",
  ];

  const colors = [
    "#573ebb", 
    "#34a36c", 
    "#3488a3", 
    "#ffffff", 
    "#e85030", 
  ];

  return (
    <div className="bg-[#040313] reyhan-medium px-[clamp(16px,_8.278px_+_100vw*_.0198,_42px)] pt-[100px] pb-[150px]">
      <div className="flex items-center">
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
