import React, { useState } from 'react';
import { PhoneCall, MessageSquare, Mail, MapPin, Check, Send, HelpCircle, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'pertanyaan_produk',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactMethods = [
    {
      title: 'AQUA Menyapa (Layanan Pelanggan)',
      detail: '0800-15-88888',
      desc: 'Layanan bebas pulsa untuk keluhan pelanggan, informasi kemurnian air, dan pengaduan umum.',
      actionLabel: 'Telepon Sekarang (Bebas Pulsa)',
      actionUrl: 'tel:08001588888',
      icon: <PhoneCall className="h-6 w-6 text-sky-600 animate-bounce" />,
      color: 'sky'
    },
    {
      title: 'WhatsApp AQUA Home Service',
      detail: '0813-8888-8873',
      desc: 'Pesan langsung Galon AQUA 19 Liter untuk diantar gratis ke rumah Anda dengan mudah.',
      actionLabel: 'Pesan Galon via WA',
      actionUrl: 'https://wa.me/6281388888873?text=Halo%20AQUA%20Home%20Service%2C%20saya%20tertarik%20memesan%20Galon%20AQUA%20untuk%20dikirim%20ke%20rumah.',
      icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
      color: 'emerald'
    },
    {
      title: 'WhatsApp Customer Service Resmi',
      detail: '0812-8964-7723',
      desc: 'Hubungi agen bantuan kami untuk pertanyaan ketersediaan produk, keagenan, atau kerjasama bisnis.',
      actionLabel: 'Hubungi CS Resmi',
      actionUrl: 'https://wa.me/6281289647723?text=Halo%20AQUA%20Customer%20Service%2C%20saya%20ingin%20bertanya%20mengenai%20produk%2Fkeagenan%20AQUA.',
      icon: <MessageSquare className="h-6 w-6 text-cyan-600" />,
      color: 'cyan'
    }
  ];

  const faqs = [
    {
      q: 'Bagaimana cara mendaftar jadi agen AQUA Home Service (AHS)?',
      a: 'Anda bisa bergabung menjadi jaringan distribusi resmi kami dengan menghubungi WhatsApp Customer Service Resmi di 0812-8964-7723. Tim kami akan melakukan survei lokasi dan menjelaskan syarat kemitraan seperti minimal modal serta stok awal galon.'
    },
    {
      q: 'Bagaimana AQUA menjamin kualitas dan keamanan kemurnian airnya?',
      a: 'AQUA melewati 400 parameter uji kualitas sebelum dikemas. Sumber air kami berasal dari lapisan tanah terdalam (artesis) terlindungi yang disaring alami oleh batuan vulkanis, dijaga ketat agar bebas dari segala bentuk kontaminasi luar.'
    },
    {
      q: 'Apakah galon AQUA aman dari BPA?',
      a: 'Ya, seluruh kemasan galon Danone-AQUA diproduksi dengan standar keamanan pangan tertinggi dari BPOM dan Kementerian Perindustrian. Kami melakukan pencucian berulang bersuhu tinggi serta sterilisasi ultraviolet yang ketat di pabrik sebelum diisi ulang.'
    },
    {
      q: 'Apa itu Situs Sehat AQUA?',
      a: 'Situs Sehat AQUA adalah wadah edukasi dan informasi resmi kami mengenai pentingnya hidrasi sehat, tip menjaga kebugaran tubuh, serta peluncuran inovasi produk dan kampanye lingkungan sirkularitas Danone-AQUA.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'pertanyaan_produk', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/10 to-sky-200/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-sky-100 border border-sky-200 text-sky-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <PhoneCall className="h-4.5 w-4.5 text-sky-600 fill-sky-100" />
            <span>Kontak & Bantuan Resmi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-4xl text-sky-950 tracking-tight"
          >
            AQUA Menyapa Layanan 24 Jam
          </motion.h2>
          <p className="text-slate-700 mt-4 text-base sm:text-lg font-medium">
            Punya pertanyaan mengenai produk, pesanan galon, atau pendaftaran agen? Hubungi kanal komunikasi resmi kami di bawah ini.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-white/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center space-x-3 mb-5">
                  <div className={`p-3 rounded-2xl bg-white shadow-sm border border-sky-100`}>
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">KANAL RESMI</span>
                    <h3 className="font-display font-bold text-sky-950 text-sm sm:text-base -mt-0.5">{method.title}</h3>
                  </div>
                </div>

                <div className="bg-sky-100/50 rounded-2xl p-4 border border-sky-200/30 mb-4">
                  <span className="text-[10px] font-bold text-sky-800 uppercase block tracking-wider">NOMOR KONTAK</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-sky-950 tracking-tight mt-0.5 block">{method.detail}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-6">
                  {method.desc}
                </p>
              </div>

              <a
                href={method.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl text-center font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md ${
                  method.color === 'emerald'
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/10'
                    : method.color === 'cyan'
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/10'
                    : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/10'
                }`}
              >
                {method.actionLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and FAQ Segment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-sky-950 mb-6 flex items-center space-x-2">
              <HelpCircle className="h-6 w-6 text-sky-600" />
              <span>Pertanyaan Umum (FAQ)</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div key={i} className="glass-card rounded-2xl overflow-hidden border border-white/60 shadow-sm transition-all">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full text-left p-4 sm:p-5 font-bold text-sky-950 text-sm sm:text-base flex items-center justify-between hover:bg-sky-50/50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="h-5 w-5 text-sky-600" /> : <ChevronDown className="h-5 w-5 text-sky-600" />}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-sky-100"
                        >
                          <p className="p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-sky-50/20">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            {/* Situs Sehat link card */}
            <div className="p-5 glass-card rounded-2xl border border-sky-200/50 bg-sky-50/50 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
                <div>
                  <span className="font-bold text-sm text-sky-950 block">Situs Sehat AQUA</span>
                  <span className="text-xs text-slate-500 font-semibold">Artikel gaya hidup, nutrisi, & kesehatan</span>
                </div>
              </div>
              <a
                href="https://www.sehatq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                Kunjungi Situs
              </a>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-xl border border-white/60 relative overflow-hidden">
              <h3 className="font-display font-extrabold text-2xl text-sky-950 mb-2 flex items-center space-x-2">
                <Mail className="h-6 w-6 text-sky-600" />
                <span>Kirim Pesan Langsung</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium">Tim komunikasi humas PT Tirta Investama / Danone-AQUA akan menjawab pertanyaan bisnis Anda.</p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 shadow-inner"
                >
                  <div className="bg-emerald-500 text-white p-3 rounded-full inline-flex items-center justify-center">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto">
                    Terima kasih telah menghubungi Danone-AQUA. Pesan Anda telah kami terima dan akan diulas oleh departemen terkait secepat mungkin.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-sky-950 block mb-1.5">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/70 border border-sky-100 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-sky-950 block mb-1.5">Alamat Email</label>
                      <input
                        type="email"
                        required
                        placeholder="budi@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/70 border border-sky-100 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-sky-950 block mb-1.5">Kategori Pertanyaan</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/70 border border-sky-100 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    >
                      <option value="pertanyaan_produk">Pertanyaan Mengenai Produk</option>
                      <option value="keagenan_ahs">Pendaftaran Agen AQUA Home Service</option>
                      <option value="sponsor_kerjasama">Sponsor / Kerjasama Event</option>
                      <option value="karir_recruitment">Karir & Rekrutmen Pegawai</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-sky-950 block mb-1.5">Isi Pesan Anda</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan detail pertanyaan atau proposal kerja sama Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/70 border border-sky-100 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-sky-600/20 hover:shadow-sky-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Pesan Ke Danone-AQUA</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
