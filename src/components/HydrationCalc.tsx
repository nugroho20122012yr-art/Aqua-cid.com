import React, { useState, useEffect } from 'react';
import { Sparkles, Droplet, Flame, Scale, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function HydrationCalc() {
  const [weight, setWeight] = useState<number>(65);
  const [activity, setActivity] = useState<'low' | 'medium' | 'high'>('medium');
  const [gender, setGender] = useState<'pria' | 'wanita'>('wanita');
  const [dailyRequirement, setDailyRequirement] = useState<number>(2.2);

  const calculateHydration = () => {
    // Basic baseline: 35ml per kg of weight
    let baseline = weight * 35; // in ml

    // Activity level modifier
    if (activity === 'medium') {
      baseline += 500; // +500ml
    } else if (activity === 'high') {
      baseline += 1000; // +1000ml
    }

    // Gender adjustments (marginal difference for body composition)
    if (gender === 'pria') {
      baseline += 200;
    }

    // Convert to Liters, rounded to 1 decimal place
    const liters = parseFloat((baseline / 1000).toFixed(1));
    setDailyRequirement(liters);
  };

  useEffect(() => {
    calculateHydration();
  }, [weight, activity, gender]);

  const bottle600mlEquivalent = Math.ceil(dailyRequirement / 0.6);
  const glass250mlEquivalent = Math.ceil(dailyRequirement / 0.25);
  const galonPercent = ((dailyRequirement / 19) * 100).toFixed(1);

  return (
    <section id="kalkulator" className="py-24 relative overflow-hidden">
      {/* Absolute floating water droplets background style */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-sky-300/10 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-sky-100 border border-sky-200 text-sky-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="h-4.5 w-4.5 text-sky-500 fill-sky-100" />
            <span>Kalkulator Hidrasi Sehat</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-sky-950 tracking-tight"
          >
            Berapa Kebutuhan Air Harian Anda?
          </motion.h2>
          
          <p className="text-slate-700 mt-4 text-base sm:text-lg font-medium">
            Gunakan kalkulator pintar kami untuk mengetahui rekomendasi asupan air mineral alami harian sesuai kondisi fisik Anda.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Inputs Panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl shadow-xl border border-white/60 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-display font-extrabold text-lg text-sky-950 mb-6 flex items-center space-x-2">
                <span className="bg-sky-500 text-white p-1 rounded-lg">Step 1</span>
                <span>Isi Data Tubuh & Aktivitas</span>
              </h3>

              <div className="space-y-6">
                
                {/* Weight Input (Slider) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-sky-950 flex items-center space-x-1.5">
                      <Scale className="h-4 w-4 text-sky-600" />
                      <span>Berat Badan Anda</span>
                    </label>
                    <span className="bg-sky-100 text-sky-800 text-sm font-black px-3 py-1 rounded-xl">
                      {weight} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="120"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                    <span>35 kg</span>
                    <span>80 kg</span>
                    <span>120 kg</span>
                  </div>
                </div>

                {/* Gender selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sky-950 block">Jenis Kelamin</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['wanita', 'pria'] as const).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGender(g)}
                        className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold capitalize border transition-all duration-300 ${
                          gender === g
                            ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-500/15'
                            : 'bg-white/60 text-sky-900 border-sky-100 hover:bg-white'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sky-950 flex items-center space-x-1.5">
                    <Flame className="h-4 w-4 text-amber-500" />
                    <span>Tingkat Aktivitas Fisik</span>
                  </label>
                  <div className="space-y-2.5">
                    {[
                      { id: 'low', label: 'Ringan / Sedentary', desc: 'Bekerja di meja, jarang berolahraga berat' },
                      { id: 'medium', label: 'Sedang / Moderat', desc: 'Olahraga ringan, jalan kaki harian aktif' },
                      { id: 'high', label: 'Tinggi / Aktif Berat', desc: 'Sering olahraga berat, atletis, atau kerja lapangan' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActivity(item.id as any)}
                        className={`w-full text-left p-3 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                          activity === item.id
                            ? 'bg-sky-50 border-sky-400/80 shadow-inner'
                            : 'bg-white/50 border-sky-100 hover:bg-white'
                        }`}
                      >
                        <div>
                          <span className="font-bold text-sky-950 text-sm block">{item.label}</span>
                          <span className="text-xs text-slate-600 mt-0.5 block font-medium">{item.desc}</span>
                        </div>
                        <div className={`h-4.5 w-4.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          activity === item.id ? 'border-sky-600 bg-sky-600' : 'border-sky-200'
                        }`}>
                          {activity === item.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-sky-100 text-slate-500 text-[10px] sm:text-xs leading-relaxed font-medium flex items-center space-x-2">
              <Info className="h-4 w-4 text-sky-500 shrink-0" />
              <span>Sesuai anjuran Kementerian Kesehatan RI (Sekitar 2 Liter air sehari atau sesuai aktivitas tubuh).</span>
            </div>
          </motion.div>

          {/* Outputs/Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-gradient-to-br from-sky-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-lg text-sky-300 mb-6 flex items-center space-x-2">
                <span className="bg-sky-500 text-white p-1 rounded-lg">Step 2</span>
                <span>Rekomendasi Hidrasi Anda</span>
              </h3>

              {/* Large Liters Target */}
              <div className="text-center py-6 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden mb-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/10 pointer-events-none">
                  <Droplet className="h-40 w-40 fill-cyan-500/5" />
                </div>

                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-sky-300 block">Kebutuhan Harian Anda</span>
                <span className="text-5xl sm:text-6xl font-black font-display tracking-tight mt-1 inline-block">
                  {dailyRequirement} <span className="text-2xl text-sky-400">Liter</span>
                </span>
                <p className="text-xs text-sky-200/80 mt-2 font-medium">Air mineral murni sehari untuk menjaga kinerja organ optimal.</p>
              </div>

              {/* Equivalent in AQUA packages */}
              <h4 className="text-sm font-extrabold text-sky-300 uppercase tracking-widest mb-4">Setara Dengan Produk AQUA:</h4>
              <div className="space-y-3.5">
                
                {/* 600ml bottle equivalent */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500/20 p-2 rounded-xl text-sky-400">
                      <Droplet className="h-5 w-5 fill-sky-400/20" />
                    </div>
                    <div>
                      <span className="font-bold text-sm block text-white">AQUA Botol 600ml</span>
                      <span className="text-xs text-sky-300/80 font-medium">Sangat ideal saat bepergian</span>
                    </div>
                  </div>
                  <span className="font-display font-black text-xl text-sky-300">~{bottle600mlEquivalent} <span className="text-xs">Botol</span></span>
                </div>

                {/* 250ml glasses equivalent */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-xl text-cyan-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-sm block text-white">Gelas AQUA 250ml</span>
                      <span className="text-xs text-sky-300/80 font-medium">Konsumsi berkala di rumah / kantor</span>
                    </div>
                  </div>
                  <span className="font-display font-black text-xl text-cyan-300">~{glass250mlEquivalent} <span className="text-xs">Gelas</span></span>
                </div>

                {/* Percentage of a Galon */}
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <span className="text-xs text-sky-300/80 block font-medium">Tingkat Konsumsi Galon AQUA 19L Per Hari:</span>
                  <div className="flex items-center justify-between mt-2">
                    <div className="w-full bg-white/10 rounded-full h-2 mr-4">
                      <div className="bg-sky-400 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(galonPercent) * 4)}%` }}></div>
                    </div>
                    <span className="text-sm font-black text-white shrink-0">{galonPercent}% <span className="text-[10px] text-sky-300 font-semibold">Galon</span></span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-300/80 font-semibold">
              <span>Mulai Gaya Hidup Sehat Sekarang!</span>
              <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                AQUA Sehat Hidrasi
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
