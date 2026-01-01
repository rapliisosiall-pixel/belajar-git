

import React from "react";

const About = () => {
  return (
    /* h-screen memastikan section ini tepat setinggi layar monitor */
    <section id="about" className="w-full h-[calc(90vh-80px)] bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* SISI KIRI: VISUAL FOTO */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Ornamen Lingkaran Glassmorphism di Belakang Foto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Bingkai Foto Elegan */}
              <div className="absolute inset-0 border-2 border-indigo-600 rounded-3xl rotate-6 translate-x-4 translate-y-4 opacity-20"></div>
              
              <div className="relative w-full h-full bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/public/rafliganteng.jpeg" 
                  alt="Foto Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Badge Pengalaman Nempel di Foto */}
              <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md border border-white p-4 rounded-2xl shadow-lg z-20">
                <p className="text-xl font-black text-indigo-600">React</p>
                <p className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase">Developer v4</p>
              </div>
            </div>
          </div>

          {/* SISI KANAN: TEKS DESKRIPSI */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-[0.3em] text-white uppercase bg-indigo-600 rounded-md inline-block mb-4">
                Personal Info
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Saya <span className="text-indigo-600">Rafli</span>, <br />
                Kreator Antarmuka.
              </h2>
            </div>

            <div className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="mb-4">
                Saya adalah pengembang web yang berfokus pada detail. Menggunakan React 19 dan Tailwind CSS v4 untuk membangun website yang nempel sempurna ke layar.
              </p>
              <p>
                Bagi saya, keindahan terletak pada kesederhanaan kodingan dan kenyamanan mata pengguna.
              </p>
            </div>

            {/* Tombol Simpel */}
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-indigo-600 transition-all active:scale-95">
                Contact Now
              </button>
              <button className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">
                Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;