import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md border-t border-slate-200 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* SISI KIRI: COPYRIGHT */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-800 tracking-tighter">
              RAFLI<span className="text-indigo-600">.</span>
            </span>
            <span className="text-slate-400 text-xs">|</span>
            <p className="text-slate-500 text-xs">
              © 2025 All rights reserved.
            </p>
          </div>

          {/* SISI KANAN: SOCIAL LINKS */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
              GITHUB
            </a>
            <a href="#" className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
              LINKEDIN
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;