import React from "react";

const Home = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Ornamen Latar Belakang (Opsional untuk kesan elegan) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Label Kecil di Atas */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Available for Projects
          </span>

          {/* Judul Utama (Semantik h1) */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">
            Membangun Solusi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Digital yang Elegan.
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Halo, saya <span className="font-bold text-slate-800">Rafli Afrizal</span>. Seorang pengembang web yang berdedikasi untuk menciptakan pengalaman pengguna yang mulus dan visual yang menarik.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Home;