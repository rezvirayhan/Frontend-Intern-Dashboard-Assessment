const StatCard = ({
  mainTitle,
  title,
  value,
  bgColor,
  textColor,
  icon,
  iconBg,
  iconColor,
  socialIcon,
  socialName,
}) => {
  return (
    <div
      className={`${bgColor} p-6 rounded-xl shadow hover:shadow-lg transition duration-300`}
    >
      <div className="flex justify-between">
        <div>
          {mainTitle && (
            <h4 className={`text-[22px] font-semibold mb-2 ${textColor}`}>
              {mainTitle}
            </h4>
          )}
        </div>
        <div
          className={`text-3xl p-3 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>

      <div className="flex justify-between  mb-4">
        <div>
          <h3 className={`text-5xl font-semibold ${textColor} `}>{title}</h3>
          <p className={`text-2xl font-bold mt-2 ${textColor}`}>{value}</p>
        </div>
      </div>

      {socialIcon && socialName && (
        <div className="flex items-center gap-2 mt-2">
          <div className="text-xl">{socialIcon}</div>
          <span className={`text-sm font-light text-[#82c763]`}>
            {socialName}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
