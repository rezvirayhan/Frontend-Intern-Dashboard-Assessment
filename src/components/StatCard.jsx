const StatCard = ({ title, value, color, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
        </div>

        <div className="text-3xl text-indigo-500">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
