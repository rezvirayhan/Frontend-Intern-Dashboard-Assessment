import { FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";
import DashboardSection from "../components/DashboardSection";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const totalTasks = 24;
  const completed = 18;
  const pending = 6;

  return (
    <div className="flex min-h-screen bg-white  p-6">
      <Sidebar />
      <div className="flex-1 pt-0 pl-6 pr-6 pb-6">
        <Header />
        <DashboardSection />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Tasks"
            value={totalTasks}
            color="text-gray-900"
            icon={<FaTasks />}
          />

          <StatCard
            title="Completed"
            value={completed}
            color="text-green-600"
            icon={<FaCheckCircle />}
          />

          <StatCard
            title="Pending"
            value={pending}
            color="text-red-500"
            icon={<FaClock />}
          />
          <StatCard
            title="Pending"
            value={pending}
            color="text-red-500"
            icon={<FaClock />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
