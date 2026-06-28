import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Calendar, Users, Building, HelpCircle, Code2, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="py-24 relative overflow-hidden">
      {/* Decorative gradient light beam */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Users className="h-4.5 w-4.5 text-blue-600 fill-blue-100" />
            <span>Tentang Kami</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-sky-950 tracking-tight"
          >
            Sekilas Tentang Danone-AQUA
          </motion.h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg font-medium">
            Mengenal lebih dekat sejarah, dedikasi kemurnian air mineral alami, kepemilikan, dan komitmen pelayanan kami bagi bangsa Indonesia.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main profile brief */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-white/60 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/20 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-sky-600 text-white p-2.5 rounded-xl shadow-md">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-sky-950">Pelopor Air Minum Kemasan</h3>
              </div>
              
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                <strong>AQUA</strong> didirikan oleh tokoh visioner <strong>Tirto Utomo</strong> pada tahun <strong>1973</strong>. Beliau adalah pionir yang pertama kali memperkenalkan konsep Air Minum Dalam Kemasan (AMDK) higienis di Indonesia, bermula dari keinginan luhur menyediakan air bersih berkualitas bagi masyarakat luas.
              </p>
              
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Sejak tahun <strong>1998</strong>, merek legendaris ini telah resmi bergabung dalam jaringan global dan dimiliki oleh <strong>Grup Danone</strong> (perusahaan makanan & minuman multinasional asal Prancis). Sinergi ini melahirkan entitas <strong>Danone-AQUA</strong> yang terus berinovasi menjaga kemurnian hidrasi keluarga Indonesia.
              </p>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Dalam operasional resminya di tanah air, Danone-AQUA bernaung di bawah payung hukum dua perusahaan manufaktur dan distribusi utama yang bereputasi tinggi, yaitu <strong>PT Tirta Investama</strong> dan <strong>PT AQUA Golden Mississippi</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-sky-100">
              <div className="bg-sky-50/50 p-3 rounded-2xl border border-sky-100">
                <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest block">Didirikan</span>
                <span className="font-display font-black text-lg text-sky-950">Tahun 1973</span>
              </div>
              <div className="bg-sky-50/50 p-3 rounded-2xl border border-sky-100">
                <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest block">Grup Global</span>
                <span className="font-display font-black text-lg text-sky-950">Danone (Prancis)</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Quick overview cards */}
            <div className="glass-card p-6 rounded-3xl shadow-lg border border-white/60 space-y-4 flex-1">
              <div className="flex items-center space-x-3 text-sky-900 font-extrabold text-sm uppercase tracking-wider">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <span>Pilar Mutu Kami</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Menjaga standar kualitas hidrasi sehat melalui pelestarian lingkungan di sekitar sumber air alami, pencegahan kontaminasi, dan sirkularitas kemasan yang berkelanjutan.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl shadow-lg border border-white/60 space-y-4 flex-1">
              <div className="flex items-center space-x-3 text-sky-900 font-extrabold text-sm uppercase tracking-wider">
                <HeartHandshake className="h-5 w-5 text-pink-500" />
                <span>Entitas Operasional</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-sky-950 bg-white/80 p-2.5 rounded-xl border border-sky-100/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>PT Tirta Investama</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-sky-950 bg-white/80 p-2.5 rounded-xl border border-sky-100/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>PT AQUA Golden Mississippi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Collaborative Developer & Creator Banner (AS REQUESTED BY THE USER) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-sky-900 via-blue-950 to-indigo-950 text-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
        >
          {/* Dynamic background accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest text-sky-300">
                <Code2 className="h-4 w-4 text-sky-400" />
                <span>Kemitraan Digital Resmi</span>
              </div>
              
              <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug">
                Kolaborasi Digital 3 Perusahaan Ternama
              </h3>
              
              {/* Highlight requested text directly */}
              <p className="text-sm sm:text-base text-sky-100/95 leading-relaxed font-semibold bg-white/5 p-4 rounded-2xl border border-white/5">
                &ldquo;Website Ini Di Buat Oleh Kolaborasi Computer[ID]•CREATOR dengan perusahaan Computer[ID]•GROUP yang dipimpin oleh Owner Bernama Nugroho Yuli Rahmadhani&rdquo;
              </p>

              <p className="text-xs text-sky-200/80 leading-relaxed">
                Sinergi mahakarya inovatif ini merupakan perpaduan teknologi canggih dari dua entitas operasional terkemuka nasional yaitu <strong>PT Tirta Investama</strong> dan <strong>PT AQUA Golden Mississippi</strong> bersama dengan pengembang solusi digital global <strong>Computer[ID]•GROUP</strong>.
              </p>
            </div>

            {/* Creator Badge Showcase */}
            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl text-center w-full md:w-auto shrink-0 flex flex-col justify-center items-center space-y-4">
              <div className="bg-sky-500 p-3 rounded-full shadow-lg text-white">
                <Sparkles className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] text-sky-300 font-bold uppercase tracking-widest block">TANGGAL PERILISAN</span>
                <span className="text-sm font-black text-white block mt-0.5">28-juni-2026 minggu</span>
              </div>
              <div className="pt-3 border-t border-white/10 w-full">
                <span className="text-[9px] text-sky-300/80 font-bold uppercase block">PIMPINAN OWNER</span>
                <span className="text-xs font-extrabold text-white mt-0.5 block">Nugroho Yuli Rahmadhani</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
