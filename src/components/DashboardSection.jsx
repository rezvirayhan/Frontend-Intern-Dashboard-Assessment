import { FaPlus } from "react-icons/fa";

const DashboardSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#F7F7F7] px-4 sm:px-6 py-6 rounded-xl  gap-6 lg:gap-10">
      <div className="w-full lg:w-7/12">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium">
          Dashboard
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-5">
          Pain Prioritize, and accomplish your tasks with ease
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-6 justify-start lg:justify-end w-full lg:w-auto mt-4 lg:mt-0">
        <button className="bg-[#195e3e] px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-xl text-white rounded-full flex items-center gap-2 font-semibold">
          <FaPlus className="text-white" />
          Add Project
        </button>
        <button className="bg-white border px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-xl text-black rounded-full flex items-center gap-2 font-semibold">
          Import Data
        </button>
      </div>
    </div>
  );
};

export default DashboardSection;
