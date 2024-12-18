import video  from "../assets/video2.mp4"
import video2 from "../assets/video3.mp4"

export const projects = [
  {
    title: "Strengthening Defenses.",
    description:
      "Magmar's ERC-4337 toolkit enables gasless transactions by using a Paymaster to sponsor gas fees. This feature allows developers to create seamless blockchain experiences, where users can interact without worrying about transaction costs, making DeFi more accessible and user-friendly.",
    src: video,

    imageUrl: "Intuitiveinterface.png",
    features: [
      "Assets Safeguarded",
      "Cyber Threats Mitigated",
      "Incidents Reduction",
    ],
  },
  {
    title: "Securing Networks. ",
    description:
      "Account Abstraction enables multi-factor authentication (MFA) and customizable security settings, offering enhanced security and allowing users to tailor their security preferences to their needs by customizable smart contract accounts.",
    src: video2,
    features: ["Attacks prevented", "Risk Detection from scam", "Phishing Protection"],
  },
];
