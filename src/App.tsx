import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import History from './components/History';
import Products from './components/Products';
import HydrationCalc from './components/HydrationCalc';
import Contact from './components/Contact';
import { Droplet, ArrowUp, Shield, HelpCircle, Heart, Star, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scrolling to highlight the active menu item dynamically
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['beranda', 'tentang-kami', 'sejarah', 'produk', 'kalkulator', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = (targetId: string) => {
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('beranda');
  };

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Absolute dark blue subtle top vignetting overlay for reading readability on the background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none z-10"></div>

      {/* Global Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container Content */}
      <main className="relative z-10">
        {/* Section 1: Hero and brand intro */}
        <Hero onLearnMore={handleLearnMore} />

        {/* Section 2: Tentang Kami & Kolaborasi Perusahaan */}
        <AboutUs />

        {/* Section 3: Sejarah & Profil Owner */}
        <History />

        {/* Section 3: Pilihan Produk */}
        <Products />

        {/* Section 4: Interactive Hydration Estimator */}
        <HydrationCalc />

        {/* Section 5: Official contacts, FAQs & Form */}
        <Contact />
      </main>

      {/* Corporate Commitments Highlights Banner (Sirkularitas) */}
      <section className="relative py-12 z-10 bg-sky-950/90 text-white border-t border-sky-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest">Sirkularitas Botol</span>
              <h4 className="font-display font-black text-lg">#BijakBerplastik</h4>
              <p className="text-xs text-sky-200/80 leading-relaxed font-medium">
                Bertekad mengumpulkan lebih banyak sampah plastik dari yang kami gunakan pada 2025, memimpin gerakan sirkularitas kemasan berkelanjutan di Indonesia.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest">Aksi Sosial</span>
              <h4 className="font-display font-black text-lg">Akses Air Bersih (WASH)</h4>
              <p className="text-xs text-sky-200/80 leading-relaxed font-medium">
                Membantu menyediakan akses sanitasi layak dan instalasi air bersih bagi ratusan ribu warga di kawasan pegunungan Wonosobo hingga wilayah timur Indonesia.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest">Sertifikasi Bergengsi</span>
              <h4 className="font-display font-black text-lg">Sertifikasi B Corp™</h4>
              <p className="text-xs text-sky-200/80 leading-relaxed font-medium">
                Danone-AQUA adalah salah satu perusahaan FMCG besar pertama di Asia yang meraih sertifikasi prestisius atas komitmen tata kelola sosial dan lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Column 1: Brand & Founder */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-sky-500 p-1.5 rounded-full">
                  <Droplet className="h-5 w-5 text-white fill-white" />
                </div>
                <span className="font-display font-black text-xl text-white tracking-wider">AQUA</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Didirikan oleh <strong>Tirto Utomo</strong> pada tahun 1973. Sejak 1998, merek air minum legendaris ini resmi bergabung dalam aliansi global bersama <strong>Grup Danone</strong> (Prancis), beroperasi di Indonesia melalui PT Tirta Investama dan PT AQUA Golden Mississippi.
              </p>
              <div className="text-xs text-slate-500 font-medium">
                &copy; {new Date().getFullYear()} PT Tirta Investama. Hak Cipta Dilindungi Undang-Undang.
              </div>
            </div>

            {/* Column 2: Legal & Links */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">Navigasi Cepat</h5>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button onClick={() => handleLearnMore('beranda')} className="hover:text-sky-400 transition-colors">
                    Beranda Utama
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLearnMore('sejarah')} className="hover:text-sky-400 transition-colors">
                    Sejarah & Tokoh Pendiri
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLearnMore('produk')} className="hover:text-sky-400 transition-colors">
                    Produk Kemasan AQUA
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLearnMore('kalkulator')} className="hover:text-sky-400 transition-colors">
                    Kalkulator Hidrasi Sehat
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Headquarters & Legal */}
            <div className="md:col-span-4 space-y-4">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">Kantor Pusat Administrasi</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Menara Danone</strong><br />
                Kuningan, Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia.<br />
                Layanan Bebas Pulsa (AQUA Menyapa): <strong>0800-15-88888</strong>
              </p>
              <div className="flex items-center space-x-2 bg-slate-900 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest block">Mitra Pemasaran:</span>
                <span className="text-xs text-white font-bold">Danone-AQUA Home Service</span>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600 font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              Dibuat dengan dedikasi penuh terhadap orisinalitas warisan Tirto Utomo & standar mutu Danone Indonesia.
            </div>
            <div className="flex items-center space-x-1 text-slate-500">
              <span>AQUA didukung oleh komunitas</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>Indonesia Sehat</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-sky-600 hover:bg-sky-700 text-white p-3.5 rounded-full shadow-xl shadow-sky-600/30 cursor-pointer transform hover:-translate-y-1 transition-all"
          aria-label="Kembali ke Atas"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
}
