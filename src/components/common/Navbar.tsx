import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { name: "Home", path: "/home" },
    { name: "Write", path: "/write" },
    { name: "Vault", path: "/vault" },
  ]; 

  return (
    <nav className="grid grid-cols-3 items-center md:px-16 px-6 h-[80px] w-full sticky top-0 z-50 bg-[#110e0e]/95 backdrop-blur border-b border-red-800/20 shadow-[0_4px_25px_rgba(255,0,0,0.15)]">

      {/* 🔥 Left - Logo */}
      <Link to="/" className="cursor-pointer">
        <div className="text-white font-bold text-[24px] tracking-tight">
          <span className="text-[#ff5740] drop-shadow-[0_0_8px_rgba(255,87,64,0.6)]">
            Akatsuki
          </span>{" "}
          Draft
        </div>
      </Link>

      {/* 🔥 Center - Nav Tabs */}
      <div className="flex justify-center gap-10 items-center">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <span
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`relative text-[14px] font-semibold cursor-pointer transition ${
                isActive
                  ? "text-white"
                  : "text-[#d6d6d6] hover:text-white/80"
              }`}
            >
              {tab.name}

              {/* Active underline */}
              {isActive && (
                <span className="absolute -bottom-[8px] left-0 w-full h-[2px] bg-[#ff5740] rounded-full"></span>
              )}
            </span>
          );
        })}
      </div>

      {/* 🔥 Right Section */}
      <div className="flex justify-end items-center gap-5">

        {/* 🔍 Search */}
        {/* <div className="hidden md:flex items-center bg-black/40 border border-white/10 px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-red-500 transition">
          <FiSearch className="text-white/60 mr-2" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white w-32 placeholder-white/40"
          />
        </div> */}

        {/* 👤 Profile */}
        <img
          src="/AkatsukiLogo.png"
          className="w-9 h-9 rounded-full border-2 border-red-500 cursor-pointer hover:scale-105 hover:shadow-[0_0_12px_rgba(255,0,0,0.7)] transition"
        />
      </div>

    </nav>
  );
};

export default Navbar;