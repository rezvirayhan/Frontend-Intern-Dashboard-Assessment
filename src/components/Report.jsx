import {
  FaPlus,
  FaProjectDiagram,
  FaRocket,
  FaServer,
  FaTools,
  FaUserPlus,
  FaVideo,
} from "react-icons/fa";
import ProjectProgress from "./ProjectProgress";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const bars = [
  { height: "h-28", striped: true },
  { height: "h-32", striped: false },
  { height: "h-28", striped: false },
  { height: "h-40", striped: false },
  { height: "h-40", striped: true },
  { height: "h-28", striped: true },
  { height: "h-36", striped: true },
];
const tasks = [
  {
    icon: <FaServer className="text-white w-6 h-6" />,
    title: "Develop API",
    subtitle: "Build RESTful endpoints",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaUserPlus className="text-white w-6 h-6" />,
    title: "Onboarding",
    subtitle: "Setup new users",
    bgColor: "bg-green-500",
  },
  {
    icon: <FaTools className="text-white w-6 h-6" />,
    title: "Build",
    subtitle: "Construct app features",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <FaRocket className="text-white w-6 h-6" />,
    title: "Optimize",
    subtitle: "Improve performance",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaProjectDiagram className="text-white w-6 h-6" />,
    title: "Cross",
    subtitle: "Collaborate across teams",
    bgColor: "bg-purple-500",
  },
];
const team = [
  {
    icon: <FaServer className="text-white w-6 h-6" />,
    title: "Develop API",
    subtitle: "Build RESTful endpoints",
    bgColor: "bg-blue-500",
    taskProgress: "Pending",
  },
  {
    icon: <FaUserPlus className="text-white w-6 h-6" />,
    title: "Onboarding",
    subtitle: "Setup new users Buildss",
    bgColor: "bg-green-500",
    taskProgress: "Pending",
  },
  {
    icon: <FaTools className="text-white w-6 h-6" />,
    title: "Build",
    subtitle: "Construct app featuress",
    bgColor: "bg-yellow-500",
    taskProgress: "Pending",
  },
  {
    icon: <FaRocket className="text-white w-6 h-6" />,
    title: "Optimize",
    subtitle: "Improve performance in",
    bgColor: "bg-red-500",
    taskProgress: "Pending",
  },
];

const Report = () => {
  return (
    <div className="mt-4 p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:col-span-2 h-auto sm:h-[300px]">
          <h1 className="text-xl sm:text-2xl font-semibold mb-5">
            Project Analytics
          </h1>
          <div className="flex justify-between items-end gap-2 sm:gap-5 overflow-x-auto">
            {bars.map((bar, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 sm:w-16 ${bar.height} rounded-full ${
                    bar.striped ? "" : "bg-red-300"
                  }`}
                  style={
                    bar.striped
                      ? {
                          backgroundImage:
                            "repeating-linear-gradient(45deg, #89918e 0px, #89918e 4px, transparent 4px, transparent 8px)",
                        }
                      : {}
                  }
                ></div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-bold text-gray-400">
                  {days[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-lg h-auto sm:h-[300px]">
          <h1 className="text-xl sm:text-2xl font-semibold">Reminders</h1>
          <h2 className="text-lg sm:text-[26px] font-medium text-[#195e3e] mt-3 sm:mt-6">
            Meeting With Arc Company
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">
            Time: 2:00pm - 4:00pm
          </p>
          <div className="mt-4 sm:mt-5">
            <button className="bg-[#195e3e] px-4 sm:px-10 py-2 sm:py-3 text-xs sm:text-xl text-white rounded-full flex items-center gap-2 font-semibold whitespace-nowrap">
              <FaVideo className="text-white" />
              Start Meeting
            </button>
          </div>
        </div>

        <div className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-lg h-auto sm:h-[550px] relative">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold">Reminders</h1>
            </div>
            <div>
              <button className="border px-6 sm:px-6 py-2 sm:py-3 border-black text-sm sm:text-xl text-black rounded-full flex items-center gap-2 ">
                <FaPlus className="text-black" />
                New
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex-row">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl  cursor-pointer flex-1 mb-2"
                >
                  <div
                    className={`flex justify-center items-center w-12 h-12 rounded-full ${task.bgColor}`}
                  >
                    {task.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-black">
                      {task.title}
                    </h2>
                    <p className="text-sm text-gray-400">{task.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-5 absolute">
          <div className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-lg h-auto sm:h-[340px]  lg:mt-80 lg:w-[550px]">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold">
                  Team Collarabation
                </h1>
              </div>
              <div>
                <button className="border px-10 sm:px-6 py-2 sm:py-3 border-black text-sm sm:text-xl text-black rounded-full flex items-center gap-2 ">
                  <FaPlus className="text-black" />
                  Add Member
                </button>
              </div>
            </div>

            {team.map((task, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-1 bg-white rounded-2xl  cursor-pointer flex-1"
              >
                <div
                  className={`flex justify-center items-center w-12 h-12 rounded-full ${task.bgColor}`}
                >
                  {task.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    {task.title}
                  </h2>
                  <div className="flex ">
                    <div>
                      <p className="text-sm text-gray-400 ">{task.subtitle}</p>
                    </div>
                    <div>
                      <p
                        className={`text-sm  text-gray-400 px-2 py-1 rounded-full lg:ml-44 ${task.bgColor}`}
                      >
                        {task.taskProgress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-lg h-auto  sm:h-[340px]  relative lg:mt-80   lg:w-[465px]">
            <ProjectProgress percentage={41} />
          </div>
          {/* <div className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-lg h-auto sm:h-[300px] relative lg:mt-80 lg:ml-2   lg:w-[340px] lg:mt-[580px]">
            <h1 className="text-xl sm:text-2xl font-semibold">Reminders</h1>
            <h2 className="text-lg sm:text-[26px] font-medium text-[#195e3e] mt-3 sm:mt-6">
              Meeting With Arc dafaf
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">
              Time: 2:00pm - 4:00pm
            </p>
            <div className="mt-4 sm:mt-5">
              <button className="bg-[#195e3e] px-4 sm:px-10 py-2 sm:py-3 text-xs sm:text-xl text-white rounded-full flex items-center gap-2 font-semibold whitespace-nowrap">
                <FaVideo className="text-white" />
                Start Meeting
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Report;
