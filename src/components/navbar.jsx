import { Link } from "react-router-dom"

function Navbar () {
    return (
          <nav className="w-full bg-white/70 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* SISI KIRI: LOGO */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              RAFLI<span className="text-indigo-600">.</span>
            </span>
          </div>

          {/* TENGAH: MENU (DESKTOP) */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">HOME</Link>
            <Link to="/About" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">ABOUT</Link>
            <Link to="/Projects" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">PROJECT</Link>
            <Link to="/Contact" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">CONTACT</Link>
          </div>

          {/* SISI KANAN: TOMBOL AKSI */}
          <div className="hidden md:block">
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 active:scale-95">
              Hire Me
            </button>
          </div>

          {/* MENU MOBILE (Tampilan HP) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-800 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
    );
};
export default Navbar;