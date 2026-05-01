
export default function Footer() {
  return (
<footer className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
      {/* 🔥 Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5740]/30 to-transparent mb-4" />

      {/* 🔥 Logo */}
      <div className="text-white font-bold text-[18px] tracking-tight">
        <span className="text-[#ff5740] drop-shadow-[0_0_8px_rgba(255,87,64,0.6)]">
          Akatsuki
        </span>{" "}
        Draft
      </div>

      {/* 🔥 Links */}
      <div className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] text-[#6b5c5c]">

        <a href="#" className="relative group hover:text-white transition">
          PRIVACY
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#ff5740] transition-all group-hover:w-full"></span>
        </a>

        <a href="#" className="relative group hover:text-white transition">
          TERMS
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#ff5740] transition-all group-hover:w-full"></span>
        </a>

        <a href="#" className="relative group hover:text-white transition">
          ARCHIVE
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#ff5740] transition-all group-hover:w-full"></span>
        </a>

      </div>

      {/* 🔥 Status (matches landing page style) */}
      <div className="flex items-center gap-2 text-[10px] text-[#4a3f3f] tracking-wider">
        <span className="w-[6px] h-[6px] bg-[#ff5740] rounded-full shadow-[0_0_8px_#ff5740] animate-pulse"></span>
        SYSTEM ONLINE
      </div>

      {/* 🔥 Copyright */}
      <div className="text-[10px] text-[#3a3030] font-medium tracking-wide">
        © 2026 AKATSUKI DRAFT. EDITORIAL NOIR.
      </div>

    </footer>
  );
}