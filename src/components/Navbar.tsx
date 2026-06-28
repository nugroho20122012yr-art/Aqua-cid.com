import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, PhoneCall, Info, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
    { id: 'sejarah', label: 'Sejarah & Owner' },
    { id: 'produk', label: 'Produk AQUA' },
    { id: 'kalkulator', label: 'Kalkulator Hidrasi' },
    { id: 'kontak', label: 'Hubungi Kami' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-gradient-to-b from-blue-900/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-sky-500 p-2 rounded-full shadow-inner relative overflow-hidden flex items-center justify-center">
              <Droplet className="h-6 w-6 text-white fill-white animate-pulse" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div>
              <span className="font-display font-black text-2xl tracking-wider text-sky-800 bg-gradient-to-r from-sky-800 to-blue-600 bg-clip-text text-transparent">
                AQUA
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-bold text-sky-600/80 -mt-1">
                Danone-AQUA
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25 scale-105'
                    : 'text-sky-950 hover:bg-sky-50 hover:text-sky-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('kontak')}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-bold py-2 px-5 rounded-full shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4" />
              <span>AQUA Menyapa</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-sky-900 hover:bg-sky-100/60 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-panel border-b border-sky-200/50 overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'text-sky-950 hover:bg-sky-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-sky-200/50">
                <button
                  onClick={() => handleNavClick('kontak')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>AQUA Menyapa (0800-15-88888)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
