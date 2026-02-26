import { useEffect, useState } from "react";
import { BiMessageAlt } from "react-icons/bi";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { FiCommand } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#F7F7F7] px-4 sm:px-6 py-4 rounded-xl mb-6 gap-4">
      <div className="relative w-full lg:w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white rounded-full py-3 pl-12 pr-20"
        />

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white shadow px-2 py-1 rounded-md text-sm text-black border">
          <FiCommand />
          <span>F</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between lg:justify-end">
        <div className="relative cursor-pointer bg-white p-3 rounded-full hover:shadow-lg transition">
          <BiMessageAlt size={20} />
        </div>

        <div className="relative cursor-pointer bg-white p-3 rounded-full hover:shadow-lg transition">
          <IoIosNotificationsOutline size={25} />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="text-sm hidden sm:block">
            <p className="font-semibold text-gray-700">
              {userEmail ? userEmail.split("@")[0] : "User"}
            </p>
            <p className="text-gray-500 text-xs">
              {userEmail || "rayghan@gmail.com"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm"
        >
          <FaSignOutAlt />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
