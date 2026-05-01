import { useNavigate} from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
 
  return (
    <div className="min-h-screen bg-[#110e0e] [background:radial-gradient(circle_at_center,rgba(255,87,64,0.06)_0%,transparent_70%),#110e0e] text-white relative flex flex-col items-center justify-center overflow-hidden font-[Outfit]">

      {/*  Navbar */}
      {/* <nav className="relative z-10 flex justify-between items-center px-16 py-8">
        <Link to="/" className="cursor-pointer">
          <div className="text-white font-bold text-[24px] tracking-tight">
            <span className="text-[#ff5740] drop-shadow-[0_0_8px_rgba(255,87,64,0.6)]">
              Akatsuki
            </span>{" "}
              Draft
          </div>
        </Link>
      </nav> */}

      {/*  Hero Section */}
      <main className="relative flex flex-col items-center justify-center text-center px-6">

        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold mb-3 tracking-tight drop-shadow-[0_0_35px_rgba(255,87,64,0.35)] animate-[float_6s_ease-in-out_infinite]">
          <span className="text-[#ff5740] drop-shadow-[0_0_8px_rgba(255,87,64,0.6)]">
              Vijay's
            </span>{" "}
              Draft
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-xl mb-8">
          Where thoughts become stories.
        </p>

        {/* Buttons */}
        <div className="flex gap-8 flex-col md:flex-row mb-16">

          {/* Primary */}
          <button
            onClick={() => navigate("/home")}
            className="px-10 py-4 text-lg rounded-full bg-[#ff5740] text-[#520f07] cursor-pointer font-semibold shadow-[0_0_25px_rgba(255,87,64,0.5)] hover:translate-y-[-3px] hover:shadow-[0_10px_35px_rgba(255,87,64,0.7)] transition"
          >
            Enter Platform
          </button>

          {/* Secondary */}
          <button
            onClick={() => navigate("/vault")}
            className="px-10 py-4 text-lg rounded-full bg-[#1c1515] border border-[#332727] cursor-pointer hover:bg-[#241c1c] hover:border-[#403232] hover:translate-y-[-3px] transition"
          >
            Explore Archive
          </button>
        </div>
      </main>

      {/* 🔥 Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;