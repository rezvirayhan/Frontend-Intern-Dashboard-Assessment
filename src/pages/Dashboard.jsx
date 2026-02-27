import { FaYoutube } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import DashboardSection from "../components/DashboardSection";
import Header from "../components/Header";
import ProjectReport from "../components/ProjectReport";
import Report from "../components/Report";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = ({ totalTasks, completed, pending, overdue }) => {
  const cards = [
    {
      mainTitle: "Tasks Overview",
      title: "24",
      value: totalTasks,
      bgColor: "bg-[#195e3e]",
      textColor: "text-white",
      icon: <LuArrowUpRight />,
      iconBg: "bg-white",
      iconColor: "text-black",
      socialIcon: <FaYoutube className="text-[#82c763]" />,
      socialName: "Facebook",
    },
    {
      mainTitle: "Tasks Overview",
      title: "10",
      value: completed,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: <LuArrowUpRight />,
      iconBg: "border border-black",
      iconColor: "text-black",
      socialIcon: <FaYoutube className="text-[#82c763]" />,
      socialName: "Twitter",
    },
    {
      mainTitle: "Tasks Overview",
      title: "12",
      value: pending,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: <LuArrowUpRight />,
      iconBg: "border border-black",
      iconColor: "text-black",
      socialIcon: <FaYoutube className="text-[#82c763]" />,
      socialName: "LinkedIn",
    },
    {
      mainTitle: "Tasks Overview",
      title: "2",
      value: overdue,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: <LuArrowUpRight />,
      iconBg: "border border-black",
      iconColor: "text-black",
      socialIcon: <FaYoutube className="text-[#82c763]" />,
      socialName: "Instagram",
    },
  ];

  return (
    <div className="flex  bg-white p-6 ">
      <Sidebar />
      <div className="flex-1 pt-0 pl-6 pr-6 pb-6 ">
        <Header />
        <div className="bg-[#F7F7F7] pt-0 pl-6 pr-6 pb-6 rounded-xl">
          <DashboardSection />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <StatCard
                key={index}
                mainTitle={card.mainTitle}
                title={card.title}
                value={card.value}
                bgColor={card.bgColor}
                textColor={card.textColor}
                icon={card.icon}
                iconBg={card.iconBg}
                iconColor={card.iconColor}
                socialIcon={card.socialIcon}
                socialName={card.socialName}
              />
            ))}
          </div>
          <Report />
          <ProjectReport />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
