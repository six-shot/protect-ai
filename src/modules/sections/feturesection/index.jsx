
import { Icons } from "../../../components/ui/Icons";

const services = [
  {
    title: "Phishing Protection",
    description:
      "Blocks and alerts users of phishing websites in real-time, ensuring that you never fall victim to fraudulent schemes.",
    icon: Icons.editorChoice,
  },
  {
    title: "Contract Analysis",
    description:
      "Analyzes smart contracts for vulnerabilities and malicious code, providing a safeguard before you engage in transactions.",
    icon: Icons.symptoms,
  },
  {
    title: "Token Analysis",
    description:
      "Evaluates tokens for security risks, helping you avoid potentially dangerous assets and ensuring your investments are secure.",
    icon: Icons.checkGear,
  },
  {
    title: "Transaction Simulation",
    description:
      "Simulates transactions before they occur, allowing you to assess potential risks and avoid costly mistakes.",
    icon: Icons.editorChoice,
  },
  {
    title: "Risk Detection",
    description:
      "Identifies and mitigates risks within your Web3 interactions, providing continuous protection against evolving threats.",
    icon: Icons.symptoms,
  },
  {
    title: "Real-Time Alerts",
    description:
      "Delivers instant notifications about potential threats and vulnerabilities, enabling proactive defense in the Web3 space.",
    icon: Icons.checkGear,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="pb-20 md:pb-32 max-w-[1440px] mx-auto">
      <div className="max-w-[1680px] mx-auto px-5">
        <div className="pb-32 space-y-6 text-center">
          <p className="text-2xl capitalize text-[#0B0736]">Our features</p>

          <h3 className="font-bold text-text text-2xl md:text-4xl lg:text-[54px] lg:leading-[68px]">
            Best Features We Offer For Your
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-16 xl:grid-cols-3 2xl:gap-24">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-[#0B0736] border-2 rounded-3xl px-6 md:px-11 lg:px-5 py-8 shadow-[0px_0px_20px_0px_#6956E940] flex flex-col items-center relative justify-center"
            >
              <div className="bg-[#EAF2FF] z-10 w-48 h-[185px] -left-14 -top-6 absolute " />
              <div className="absolute bg-none border-t-2 border-l-2 border-[#0B0736] w-20 h-11 -left-[1.5px] lg:-left-[2px] top-[125px] rounded-tl-3xl z-20" />
              <div className="absolute bg-none border-b-2 border-r-2 border-[#0B0736] w-20 h-20 left-[43px] top-[47px] rounded-br-3xl z-20" />
              <div className="absolute -top-[2px] w-8 h-20 bg-none border-t-2 border-l-2 border-[#0B0736] left-[121px] rounded-tl-3xl z-20" />

              <div className="absolute w-[105px] grid place-items-center h-[105px] rounded-xl p-[20px] bg-[#0B0736] top-0 left-0 z-30">
                <service.icon className="w-11 h-11" />
              </div>

              <div className="relative z-20 flex flex-col w-full h-full">
                <p className="font-bold text-lg break-words overflow-wrap break-word min-[360px]:text-2xl lg:text-[24px] lg:leading-[36px] text-text mb-16 pl-[6.9rem] min-[400px]:pl-32 min-[1280px]:pl-28 min-[1400px]:pl-32 lg:pr-5 2xl:pr-[5rem]">
                  {service.title}
                </p>
                <p className="pb-8 text-sm font-normal md:pb-10 md:text-lg text-text">
                  {service.description}
                </p>

                <button
                  variant={"outline"}
                  className="flex items-center px-7 font-semibold justify-between h-[56px] rounded-full border border-[#0B0736] w-full mt-auto text-lg text-[#0B0736] "
                >
                  Read More
                  <Icons.arrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
