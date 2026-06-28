import React from 'react';
import { Sparkles, ArrowDown, ShieldCheck, Droplet, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onLearnMore: (targetId: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const corePillars = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      title: 'Perlindungan Sumber Air',
      desc: 'Melindungi ekosistem sekitar sumber air untuk menjaga kemurnian dan kandungan mineral alami.',
    },
    {
      icon: <Droplet className="h-6 w-6 text-sky-500 fill-sky-200" />,
      title: '100% Murni Alami',
      desc: 'Disaring secara alami oleh batuan vulkanis tanpa bahan tambahan, langsung dikemas di sumbernya.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-amber-500" />,
      title: 'Standar Danone Global',
      desc: 'Menerapkan standar kualitas internasional yang ketat untuk menjamin kebaikan air di setiap tetes.',
    },
  ];

  return (
    <section id="beranda" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Gradient & Light Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-sky-300/20 to-sky-100/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-sky-100/80 border border-sky-300/40 text-sky-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-4.5 w-4.5 text-sky-500 fill-sky-200 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Pelopor Air Minum Sejak 1973</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-sky-950 tracking-tight leading-[1.1] text-shadow-sm"
            >
              Murni dari Sumber Alam <br />
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Terlindungi & Terjaga
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Setiap tetes AQUA mengandung kebaikan mineral alami vulkanis Indonesia yang diproses dengan teknologi higienis tanpa sentuhan tangan manusia, mempersembahkan kesegaran murni bagi keluarga Indonesia selama lebih dari 50 tahun.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onLearnMore('produk')}
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold text-base py-3.5 px-8 rounded-full shadow-xl shadow-sky-600/30 hover:shadow-sky-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Lihat Produk Kami
              </button>
              <button
                onClick={() => onLearnMore('kalkulator')}
                className="w-full sm:w-auto glass-card text-sky-950 hover:bg-sky-50/70 font-bold text-base py-3.5 px-8 rounded-full shadow-md transition-all duration-300 border border-sky-200/60"
              >
                Cek Kebutuhan Hidrasi
              </button>
            </motion.div>
          </div>

          {/* Elegant Interactive Showcase Panel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="glass-card p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-white/60"
            >
              {/* Decorative dynamic bubble effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl"></div>

              <h3 className="font-display font-extrabold text-xl text-sky-950 mb-6 flex items-center space-x-2">
                <span className="bg-sky-500 text-white p-1 rounded-lg">AQUA</span>
                <span>Kebaikan Alami Untuk Anda</span>
              </h3>

              <div className="space-y-6">
                {corePillars.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="flex items-start space-x-4 p-3.5 rounded-2xl hover:bg-sky-100/50 transition-colors duration-300"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-sky-100/50 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sky-950 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => onLearnMore('sejarah')}
            className="flex flex-col items-center space-y-1 text-sky-800 hover:text-sky-600 transition-colors cursor-pointer"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Pelajari Sejarah</span>
            <ArrowDown className="h-4 w-4 bg-white/80 p-1.5 rounded-full shadow-md" style={{ width: '28px', height: '28px' }} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
