import logo from "../../../assets/logop.png";

const roadmap = [
  {
    title: "Phase One: Foundation and Core Development",
    items: [
      {
        description:
          "AI-Driven Security: Develop and implement AI algorithms to detect and neutralize Web3 threats in real-time.",
      },
      {
        description:
          "Smart Contract Analysis: Integrate advanced smart contract analysis tools to identify vulnerabilities before transactions are executed.",
      },
      {
        title: "Browser Extension Launch",
        description:
          "Release the Protect AI browser extension for seamless Web3 interaction and real-time security alerts.",
      },
    ],
  },
  {
    title: "Phase Two: Multi-Chain and Wallet Integration",
    items: [
      {
        description:
          "Support for Major Blockchains: Extend support to Ethereum, Binance Smart Chain, Polygon, and other leading blockchains.",
      },
      {
        description:
          "Wallet Compatibility: Integrate with popular wallets like MetaMask and Trust Wallet for enhanced security across platforms.",
      },
    ],
  },
  {
    title: "Phase Three: Enhanced User Experience and Security Features",
    items: [
      {
        description:
          "Transaction Simulation: Launch a feature that allows users to simulate transactions, helping them avoid potential risks before committing.",
      },
      {
        description:
          "Phishing Protection Upgrade: Implement more advanced phishing detection and prevention mechanisms.",
      },
      {
        description:
          "User Interface Enhancements: Improve the UI for a more intuitive and user-friendly experience, focusing on ease of use for both novice and experienced users.",
      },
    ],
  },
  {
    title: "Phase Four: Expansion and Mainstream Adoption",
    items: [
      {
        description:
          "Global Awareness Campaign: Launch marketing initiatives to promote Protect AI's benefits and drive widespread adoption.",
      },
      {
        description:
          "Continuous AI Evolution: Regular updates to the AI algorithms to adapt to new and emerging threats in the Web3 ecosystem.",
      },
      {
        description:
          "Partnerships with Key Industry Players: Establish collaborations with major platforms in the DeFi space to expand Protect AI’s reach and capabilities.",
      },
    ],
  },
];

export function RoadMapSection() {
  return (
    <section id="roadmap" className="py-10 md:pb-32 bg-text reyhan-medium">
      <div className="flex flex-col items-center justify-center w-full px-4 py-5 md:py-10 text-[#0B0736]">
        <h4 className="font-bold text-text text-2xl md:text-4xl lg:text-[54px] lg:leading-[68px] ">
          Our Roadmap
        </h4>
        <p className="sm:w-[585px] leading-[25px] text-center mt-5 lg:mb-1 mb-6 ">
          At Protect AI we are committed to securing the Web3 ecosystem by
          providing cutting-edge, AI-driven protection against emerging threats.
          We aim to empower users to navigate the digital frontier with
          confidence, ensuring their assets and data remain safe from malicious
          actors.
        </p>
      </div>

      <div className="relative px-5 pt-5 my-20 max-w-[1440px] mx-auto">
        <div className="absolute w-1 h-full -translate-x-1/2 bg-[#0B0736] left-5 lg:left-1/2 top-5" />

        {roadmap.map((item, index) => (
          <div
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } my-8 ml-10 lg:ml-0`}
            key={index}
          >
            <section className="rounded-[12px] bg-[#0B0736] w-full lg:w-[calc(50%-40px)] p-8 max-sm:px-4 pb-12 relative">
              <div
                className={`flex items-center justify-center absolute  h-10 w-10 text-center rounded-full top-4 ${
                  index % 2 === 0
                    ? "max-lg:-left-[60px] -right-[60px]"
                    : "-left-[60px] max-lg:-right-[60px]"
                }`}
              >
                <img src={logo} className="object-cover w-10 h-10" />
              </div>

              <div>
                <header className="md:text-[24px] text-white font-bold leading-[26px]">
                  {item.title}
                </header>
              </div>
              <div className="flex flex-col w-full gap-5 mt-6">
                {item.items.map((item, index) => (
                  <div className="flex items-start w-full gap-2" key={index}>
                    <div className="w-[10px] h-[10px] mt-1.5 rounded-full sm:w-4 sm:h-4 bg-white" />
                    <div className="w-full text-base text-white/80">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full">
        <button className="justify-center text-white bg-[#0B0736] px-6 py-4 rounded-[8px]">
          <a
            href="https://protectai.gitbook.io/protectai/introduction/roadmap"
            target="_blank"
            rel="noreferrer"
          >
            Show detailed roadmap
          </a>
        </button>
      </div>
    </section>
  );
}
