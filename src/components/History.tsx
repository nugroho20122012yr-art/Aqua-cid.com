import React, { useState } from 'react';
import { Award, User, Building2, MapPin, Calendar, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Milestone } from '../types';

export default function History() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const founderInfo = {
    name: 'Tirto Utomo',
    originalName: 'Kwa Sien Biauw / Johannes Ferdinand Tirtowidjojo',
    birthplace: 'Wonosobo, Jawa Tengah',
    formerRole: 'Mantan Pegawai Pertamina',
    legacy: 'Pendiri Utama & Pionir Industri AMDK (Air Minum Dalam Kemasan) di Indonesia.',
  };

  const corporateEntities = [
    { name: 'PT Tirta Investama', role: 'Distribusi & Manajemen Operasional Utama' },
    { name: 'PT AQUA Golden Mississippi', role: 'Produksi & Pabrikasi Pertama' },
    { name: 'PT Tirta Sibayakindo', role: 'Pengembangan Wilayah Sumber Air Sumatra' },
  ];

  const milestones: Milestone[] = [
    {
      year: '1973',
      title: 'Pendirian AQUA oleh Tirto Utomo',
      description: 'Melihat sulitnya akses air bersih layak minum bagi pekerja asing, Tirto Utomo mendirikan PT Golden Mississippi (kemudian berganti nama menjadi PT AQUA Golden Mississippi) dan meluncurkan produk air kemasan pertama bermerek AQUA.',
      badge: 'Tonggak Awal'
    },
    {
      year: '1974',
      title: 'Pabrik Pertama Beroperasi',
      description: 'Pabrik pertama didirikan di Bekasi, Jawa Barat. Mulai memproduksi botol kaca ukuran 950 ml dengan harga Rp 75 per botol, menyasar kelas menengah ke atas dan ekspatriat.',
      badge: 'Mulai Produksi'
    },
    {
      year: '1984',
      title: 'Peluncuran Botol Plastik PET',
      description: 'AQUA meluncurkan kemasan plastik PET 220ml yang praktis dan terjangkau, merevolusi kebiasaan minum masyarakat Indonesia dan menjadikannya produk kebutuhan pokok harian.',
      badge: 'Inovasi Kemasan'
    },
    {
      year: '1998',
      title: 'Aliansi Strategis dengan Grup Danone',
      description: 'Grup Danone, perusahaan makanan dan minuman multinasional asal Prancis, mengakuisisi saham mayoritas AQUA. Terbentuk kemitraan Danone-AQUA yang meningkatkan standar kualitas produksi dan distribusi global.',
      badge: 'Aliansi Global'
    },
    {
      year: 'Kini',
      title: 'Pemimpin Pasar & Komitmen Keberlanjutan',
      description: 'Danone-AQUA memimpin pasar air minum kemasan dengan puluhan pabrik di seluruh Indonesia. Menerapkan sirkularitas air, pengelolaan plastik daur ulang (program #BijakBerplastik), serta pemberdayaan masyarakat sekitar sumber air.',
      badge: 'Era Modern'
    }
  ];

  return (
    <section id="sejarah" className="py-24 relative overflow-hidden">
      {/* Decorative Wave Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-sky-100 border border-sky-200 text-sky-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Award className="h-4.5 w-4.5 text-sky-600 fill-sky-100" />
            <span>Warisan & Kepemilikan</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-sky-950 tracking-tight"
          >
            Sejarah Panjang Danone-AQUA
          </motion.h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg font-medium">
            Perjalanan dedikasi menyajikan air murni berkualitas bagi seluruh penjuru Nusantara, dimulai dari visi sederhana seorang putra bangsa asal Wonosobo.
          </p>
        </div>

        {/* Founder & Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-white/60 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-sky-500 text-white p-3 rounded-2xl shadow-md">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">PROFIL PENDIRI</span>
                  <h3 className="font-display font-extrabold text-2xl text-sky-950 mt-0.5">{founderInfo.name}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-xl border border-sky-100/50">
                  <span className="text-xs font-semibold text-slate-500 uppercase block">Nama Asli / Tionghoa</span>
                  <p className="font-bold text-sky-950 mt-1 text-sm sm:text-base">{founderInfo.originalName}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-4 rounded-xl border border-sky-100/50">
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Lahir & Asal</span>
                    <p className="font-bold text-sky-950 mt-1 text-sm">{founderInfo.birthplace}</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl border border-sky-100/50">
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Latar Belakang</span>
                    <p className="font-bold text-sky-950 mt-1 text-sm">{founderInfo.formerRole}</p>
                  </div>
                </div>

                <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200/40 mt-2">
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    &ldquo;{founderInfo.legacy}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-200/40 flex items-center justify-between text-xs font-bold text-sky-800">
              <span>Mendirikan AQUA tahun 1973</span>
              <span className="bg-sky-100 px-3 py-1 rounded-full">Wonosobo Pride</span>
            </div>
          </motion.div>

          {/* Corporate Profile & Headquarters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Headquarters Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-xl border border-white/60 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-cyan-500 text-white p-3 rounded-2xl shadow-md">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">KANTOR PUSAT</span>
                    <h3 className="font-display font-extrabold text-2xl text-sky-950 mt-0.5">Danone-AQUA</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 p-4 rounded-2xl border border-sky-100/50">
                  <div className="bg-red-50 p-2.5 rounded-xl border border-red-100 text-red-500 mt-1">
                    <MapPin className="h-5 w-5 fill-red-100" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-950">Menara Danone</h4>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                      Kawasan Kuningan, Jakarta Selatan, Daerah Khusus Ibukota Jakarta.
                    </p>
                    <span className="inline-block mt-3 bg-cyan-100/60 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">
                      Pusat Operasional Nasional
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-900 text-white rounded-2xl shadow-lg shadow-blue-950/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200">Mitra Internasional</span>
                  <p className="font-extrabold text-base">Grup Danone (Prancis) sejak 1998</p>
                </div>
                <div className="bg-white/20 p-2 rounded-xl text-xs font-black uppercase tracking-wider">
                  Danone
                </div>
              </div>
            </div>

            {/* Subsidiary Entites */}
            <div className="glass-card p-6 rounded-3xl shadow-xl border border-white/60">
              <h4 className="font-display font-extrabold text-base text-sky-950 mb-4 flex items-center space-x-2">
                <Shield className="h-5 w-5 text-sky-600" />
                <span>Entitas Operasional Resmi di Indonesia</span>
              </h4>
              <div className="space-y-3">
                {corporateEntities.map((entity, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-sky-100/40 hover:bg-white/80 transition-all">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span className="font-bold text-sky-950 text-sm">{entity.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-semibold">{entity.role}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Chronological Timeline */}
        <div className="mt-20">
          <h3 className="font-display font-extrabold text-2xl text-sky-950 text-center mb-10">
            Garis Waktu Perjalanan Sejarah
          </h3>

          {/* Timeline navigation (Year badges) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {milestones.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedMilestone(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  selectedMilestone === index
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-white/70 hover:bg-white text-sky-900 border border-sky-100'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Display panel for active timeline milestone */}
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl shadow-xl border border-white/70 relative"
          >
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
              <span className="bg-sky-100 text-sky-800 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {milestones[selectedMilestone].badge}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="bg-gradient-to-tr from-sky-500 to-blue-600 text-white rounded-2xl px-6 py-4 flex items-center justify-center font-display font-black text-3xl sm:text-4xl shadow-md shrink-0">
                {milestones[selectedMilestone].year}
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-black text-xl sm:text-2xl text-sky-950 leading-snug">
                  {milestones[selectedMilestone].title}
                </h4>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {milestones[selectedMilestone].description}
                </p>
              </div>
            </div>

            {/* Custom structural details for important alliance year 1998 */}
            {milestones[selectedMilestone].year === '1998' && (
              <div className="mt-8 pt-6 border-t border-sky-200/40 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-sky-100 text-slate-700">
                  <span className="font-bold text-sky-950 block mb-1">Dampak Kemitraan:</span>
                  Peningkatan otomatisasi mesin, kemudahan ekspor, standardisasi uji lab global Danone, dan perlindungan sumber air terpadu (Water Resources Protection).
                </div>
                <div className="p-3.5 bg-cyan-50/50 rounded-xl border border-cyan-100 text-slate-700">
                  <span className="font-bold text-sky-950 block mb-1">Sertifikasi & Standar:</span>
                  Penerapan HACCP, sertifikasi SNI ketat, dan kelayakan higienitas berstandar ISO internasional.
                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
