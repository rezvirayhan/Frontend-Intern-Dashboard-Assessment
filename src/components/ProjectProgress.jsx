const ProjectProgress = ({ percentage = 41 }) => {
  const radius = 100;
  const strokeWidth = 20;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h1 className="text-xl sm:text-2xl font-semibold">Project Progress</h1>
      <div className="relative flex justify-center">
        <svg
          width="250"
          height="150"
          viewBox="0 0 250 150"
          className="overflow-visible"
        >
          <path
            d="M 25 125 A 100 100 0 0 1 225 125"
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          <path
            d="M 25 125 A 100 100 0 0 1 225 125"
            fill="transparent"
            stroke="#1F7A4D"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />

          <defs>
            <pattern
              id="diagonalStripes"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y="0"
                x2="0"
                y2="6"
                stroke="#9CA3AF"
                strokeWidth="3"
              />
            </pattern>
          </defs>
        </svg>

        <div className="absolute top-16 text-center">
          <h3 className="text-3xl font-bold text-black">{percentage}%</h3>
          <p className="text-sm text-gray-500">Project Ended</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
          Completed
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-900"></span>
          In Progress
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          Pending
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
