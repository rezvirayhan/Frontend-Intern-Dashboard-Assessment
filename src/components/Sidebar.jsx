import { FaCog, FaTachometerAlt, FaTasks } from "react-icons/fa";
import logoImage from "../../src/assets/logo_img.png";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#F7F7F7] shadow-lg hidden md:block rounded-xl">
      <div className="flex justify-center py-6">
        <img src={logoImage} alt="Logo" className="w-44 h-auto" />
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-indigo-100 text-indigo-600 font-medium">
            <FaTachometerAlt />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
            <FaTasks />
            Tasks
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
            <FaCog />
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
