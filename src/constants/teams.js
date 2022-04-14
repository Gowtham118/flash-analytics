import allTeamsIcon from "../assets/icons/all-teams.png";
import productTeamIcon from "../assets/icons/product-team.png";
import enggTeam from "../assets/icons/engg-team.png";
import marketingTeamIcon from "../assets/icons/marketing-team.png";
import supportIcon from "../assets/icons/support.png";

export const teamsData = [
  {
    id: 1,
    icon: allTeamsIcon,
    title: "All Teams",
    points: [
      "Get every member to have a holistic view to improve overall throughput.",
      "Overcome business silos and foster greater collaboration.",
      "Measure, learn and build faster to gain an unfair advantage over your competitors.",
    ],
  },
  {
    id: 2,
    icon: productTeamIcon,
    title: "Product team",
    points: [
      "Develop a deeper understanding of your users to build user-centric products and ensure your heros complete their journey.",
      "Identify patterns in their usage to innovate new features and improve your product’s value proposition.",
    ],
  },
  {
    id: 3,
    icon: enggTeam,
    title: "Engineering team",
    points: [
      "Get to the root cause of your bugs and crashes arising on the application.",
      "Develop high-fidelity products with rapid release cycles.",
    ],
  },
  {
    id: 4,
    icon: marketingTeamIcon,
    title: "Marketing team",
    points: [
      "Analyze data and generate campaigns to micro-target customers for acquisition and engagement.",
      "Perform A/B/n tests to measure campaign performance and optimize for conversions on the application.",
    ],
  },
  {
    id: 5,
    icon: supportIcon,
    title: "Support team",
    points: [
      "Get insights on user drop offs and bugs.",
      "Escalate and facilitate the right action at the right time.",
    ],
  },
];
