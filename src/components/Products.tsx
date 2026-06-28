import React, { useState } from 'react';
import { Package, MessageSquare, ExternalLink, ShoppingCart, Info, Check, Plus, Minus, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Botol' | 'Kerdusan' | 'Galon'>('Semua');
  const [cart, setCart] = useState<{ [key: string]: number }>({
    'prod-1': 1,
    'prod-2': 1,
    'prod-3': 1,
  });
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'prod-1',
      name: 'AQUA Botolan (Mineral Alami)',
      category: 'Botol',
      description: 'Kemasan botol higienis yang praktis dibawa ke mana saja untuk mendukung hidrasi aktif harian Anda dalam berbagai aktivitas dinamis.',
      volume: '330ml, 600ml, 1500ml',
      imageFallback: 'https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&q=80&w=600', // high quality mock fallback representation
      link: 'https://share.google/cNAhtZvofMbzKSadN',
      badge: 'Terpopuler',
      priceEstimate: 'Rp 3.000 - Rp 6.000 / Botol',
    },
    {
      id: 'prod-2',
      name: 'AQUA Kerdusan (1 Pack / Karton)',
      category: 'Kerdusan',
      description: 'Kemasan karton isi banyak yang sangat cocok untuk stok hidrasi keluarga di rumah, konsumsi rapat kantor, hingga acara kumpul besar.',
      volume: 'Karton isi 24 botol / 48 gelas',
      imageFallback: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?auto=format&fit=crop&q=80&w=600',
      link: 'https://share.google/Tko4dWpsBgD2f6JAN',
      badge: 'Hemat Keluarga',
      priceEstimate: 'Rp 42.000 - Rp 50.000 / Dus',
    },
    {
      id: 'prod-3',
      name: 'AQUA Galon (19 Liter)',
      category: 'Galon',
      description: 'Layanan legendaris AQUA Home Service dengan kemasan galon reusable yang murni, aman, ramah lingkungan, dan hemat untuk kebutuhan hidrasi harian.',
      volume: '19 Liter',
      imageFallback: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600',
      link: 'https://www.sehatq.com', // fallback or general reference
      badge: 'Ramah Lingkungan',
      priceEstimate: 'Rp 22.000 / Refill Galon',
    }
  ];

  const updateQty = (id: string, delta: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const filteredProducts = activeTab === 'Semua' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const handleOrderWhatsApp = (product: Product, quantity: number) => {
    if (quantity <= 0) return;
    const isGalon = product.category === 'Galon';
    const waNumber = isGalon ? '081388888873' : '081289647723'; // as provided
    const waText = encodeURIComponent(
      `Halo AQUA Customer Service, saya ingin memesan produk berikut melalui website:\n\n` +
      `- Produk: ${product.name}\n` +
      `- Jumlah: ${quantity} unit\n` +
      `- Tipe Kemasan: ${product.volume}\n\n` +
      `Mohon dibantu info pengiriman dan konfirmasi pesanan saya. Terima kasih!`
    );
    window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');
  };

  return (
    <section id="produk" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Ripple */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-cyan-300/10 -translate-y-1/2 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-cyan-100 border border-cyan-200 text-cyan-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Package className="h-4.5 w-4.5 text-cyan-600 fill-cyan-100" />
            <span>Pilihan Produk Unggulan</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-sky-950 tracking-tight"
          >
            Kemurnian Dalam Berbagai Kemasan
          </motion.h2>
          
          <p className="text-slate-700 mt-4 text-base sm:text-lg font-medium">
            Temukan ukuran dan jenis kemasan yang paling sesuai dengan kebutuhan hidrasi aktif Anda serta seluruh anggota keluarga tercinta.
          </p>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {(['Semua', 'Botol', 'Kerdusan', 'Galon'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-white/60 hover:bg-white text-sky-900 border border-sky-100'
              }`}
            >
              {tab === 'Semua' ? 'Semua Produk' : tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {filteredProducts.map((product) => {
            const qty = cart[product.id] || 0;
            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/60 shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Banner representation */}
                <div className="relative h-56 bg-gradient-to-br from-sky-400/40 to-blue-500/10 flex items-center justify-center p-8 overflow-hidden">
                  
                  {/* Decorative element - floating bubbles */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10"></div>
                  
                  {/* Floating badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-20 bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Clean Visual Representation Card */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2 mt-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-sky-100/50 transform group-hover:scale-110 transition-transform duration-300">
                      <Package className="h-8 w-8 text-sky-600" />
                    </div>
                    <span className="bg-sky-100/90 text-sky-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest border border-sky-200">
                      {product.volume}
                    </span>
                  </div>
                </div>

                {/* Info and action */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white/40">
                  <div className="space-y-3">
                    <h3 className="font-display font-black text-xl text-sky-950 group-hover:text-sky-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {product.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-500 uppercase block">Estimasi Harga Pasaran:</span>
                      <span className="text-sm font-extrabold text-sky-800">{product.priceEstimate}</span>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="space-y-4 pt-4 border-t border-sky-100/60">
                    
                    {/* Share Link button if specified */}
                    {product.link && (product.category === 'Botol' || product.category === 'Kerdusan') && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-cyan-600 hover:text-cyan-800 hover:underline transition-all bg-cyan-50/50 px-3 py-2 rounded-xl border border-cyan-100 w-full justify-center"
                      >
                        <span>Situs Sehat AQUA - Detail Gambar Resmi</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {/* Quantity counter */}
                    <div className="flex items-center justify-between bg-sky-100/40 p-2 rounded-2xl border border-sky-100/50">
                      <span className="text-xs font-bold text-sky-950 ml-2">Jumlah Order</span>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => updateQty(product.id, -1)}
                          className="bg-white hover:bg-sky-100 text-sky-900 p-1.5 rounded-xl border border-sky-200 shadow-sm transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="font-extrabold text-sm text-sky-950 w-8 text-center">{qty}</span>
                        <button
                          onClick={() => updateQty(product.id, 1)}
                          className="bg-white hover:bg-sky-100 text-sky-900 p-1.5 rounded-xl border border-sky-200 shadow-sm transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* WhatsApp Checkout simulation */}
                    <button
                      disabled={qty === 0}
                      onClick={() => handleOrderWhatsApp(product, qty)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                        qty > 0
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 cursor-pointer transform hover:-translate-y-0.5'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <MessageSquare className="h-4.5 w-4.5" />
                      <span>Pesan lewat WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Banner on Authenticity */}
        <div className="max-w-4xl mx-auto glass-card p-6 rounded-3xl shadow-xl border border-emerald-200/50 bg-emerald-50/40 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-emerald-500 text-white p-3 rounded-2xl shadow-inner shrink-0">
            <ShoppingCart className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-emerald-950 text-base flex items-center space-x-2">
              <span>Mau Pesan dalam Jumlah Besar atau Langganan Galon?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              Dapatkan kenyamanan pengiriman gratis ongkir langsung ke pintu rumah Anda melalui layanan resmi <strong>AQUA Home Service (AHS)</strong>. Hubungi WhatsApp khusus Galon di <strong>0813-8888-8873</strong> atau hubungi langsung CS Resmi AQUA di <strong>0812-8964-7723</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
