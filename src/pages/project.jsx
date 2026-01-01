import React from "react";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "E-Commerce App",
      tags: ["React", "Tailwind"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "02",
      title: "Portfolio Web",
      tags: ["Vite", "Aesthetic"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "03",
      title: "Dashboard UI",
      tags: ["Modern", "Clean"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    /* h-[calc(100vh-80px)] artinya: tinggi layar penuh dikurangi tinggi navbar (80px).
       overflow-hidden memastikan tidak ada scrollbar yang muncul.
    */
    <section id="projects" className="w-full h-[calc(90vh-75px)] bg-slate-50 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* HEADER SECTION - Dibuat lebih rapat agar hemat ruang */}
        <div className="flex justify-between items-end mb-8">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
              Projek <span className="text-indigo-600">Pilihan.</span>
            </h2>
          </div>
        </div>

        {/* PROJECT GRID - Menggunakan h-full agar menyesuaikan ruang yang ada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white">
              
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-x-3 bottom-3 p-4 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-black text-indigo-600">{item.id}</span>
                  <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                </div>
                <div className="flex gap-1 mb-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[7px] font-bold px-1.5 py-0.5 bg-slate-900 text-white rounded-full uppercase">{tag}</span>
                    ))}
                </div>
                <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg text-[9px] font-bold hover:bg-indigo-700 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;