import React, { useState } from "react";

const Contact = () => {
  // 1. Inisialisasi State untuk input
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  // 2. Inisialisasi State untuk pesan error
  const [errors, setErrors] = useState({});

  // 3. Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 4. Fungsi Validasi
  const validate = () => {
    let tempErrors = {};
    if (!formData.nama) tempErrors.nama = "Nama wajib diisi";
    
    // Regex standar untuk validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
    }

    if (!formData.pesan) tempErrors.pesan = "Pesan tidak boleh kosong";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Return true jika tidak ada error
  };

  // 5. Fungsi Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Pesan berhasil dikirim!");
      console.log("Data dikirim:", formData);
      // Anda bisa mengosongkan form setelah sukses
      setFormData({ nama: "", email: "", pesan: "" });
    }
  };

  return (
    <section id="contact" className="w-full h-[calc(90vh-80px)] bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* SISI KIRI TETAP SAMA */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Ayo Mulai <span className="text-indigo-600">Diskusi.</span>
            </h2>
            <p className="text-sm font-black text-slate-800">rafliiafrizal@gmail.com</p>
          </div>

          {/* SISI KANAN: FORMULIR DENGAN VALIDASI */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="relative z-10 p-8 bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-2xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Nama</label>
                  <input 
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    type="text" 
                    className={`w-full px-4 py-3 bg-white border ${errors.nama ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm outline-none`} 
                    placeholder="Rafli" 
                  />
                  {errors.nama && <p className="text-[9px] text-red-500 font-bold">{errors.nama}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm outline-none`} 
                    placeholder="email@anda.com" 
                  />
                  {errors.email && <p className="text-[9px] text-red-500 font-bold">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Pesan</label>
                <textarea 
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.pesan ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm outline-none h-24 resize-none`} 
                  placeholder="Tulis pesanmu..."
                ></textarea>
                {errors.pesan && <p className="text-[9px] text-red-500 font-bold">{errors.pesan}</p>}
              </div>

              <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all">
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;