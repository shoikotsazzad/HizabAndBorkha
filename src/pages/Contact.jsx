import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactItems = [
  {
    icon: <Phone size={18} />,
    title: 'Phone / WhatsApp',
    lines: ['+880 1712-345678', 'সাহায্যের জন্য যেকোনো সময় কল করুন'],
  },
  {
    icon: <Mail size={18} />,
    title: 'Email',
    lines: ['support@nuraniya.com', 'সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর'],
  },
  {
    icon: <MapPin size={18} />,
    title: 'Head Office',
    lines: ['House 18, Road 7, Sector 3', 'Uttara, Dhaka 1230, Bangladesh'],
  },
  {
    icon: <Clock size={18} />,
    title: 'Business Hours',
    lines: ['শনি–বৃহস্পতি: ১০:০০ AM – ৯:০০ PM', 'শুক্রবার: ৩:০০ PM – ৯:০০ PM'],
  },
];

const inputCls =
  'w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.4em] mb-5"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            আমরা সাহায্য করতে{' '}
            <span className="text-[#C9A84C]">সর্বদা প্রস্তুত</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm leading-relaxed"
          >
            যেকোনো প্রশ্ন, অর্ডার বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
            <br />
            We're always here to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-center gap-3 mt-7"
          >
            <div className="h-px w-16 bg-[#C9A84C]/30" />
            <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-16 bg-[#C9A84C]/30" />
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── LEFT: Info ─────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 bg-white/[0.04] border border-white/10 p-5 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  {item.lines.map((l) => (
                    <p key={l} className="text-gray-400 text-xs">{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36 }}
              href="https://wa.me/8801712345678?text=Hi, I have a question about Nuraniya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-semibold text-sm hover:bg-[#1da851] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>

            {/* Tagline card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.44 }}
              className="relative border border-[#C9A84C]/30 p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />
              <p
                className="text-white text-lg font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                স্নিগ্ধতায় মোড়ানো{' '}
                <span className="text-[#C9A84C]">সৌন্দর্য</span>
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Light in Modesty, Grace in Every Layer. Finely crafted hijabs, borkhas and abayas
                for the modern woman of Bangladesh.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/[0.04] border border-white/10 p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#C9A84C] text-sm border-b border-[#C9A84C]/50 pb-0.5 hover:border-[#C9A84C] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-8">
                  <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">Message Us</p>
                  <h2
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Send a Message
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="আপনার নাম"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="01712345678"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="আপনার বিষয়"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="আপনার বার্তা লিখুন..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1a1a1a] py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#d4b45a] transition-all hover:scale-[1.01]"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
