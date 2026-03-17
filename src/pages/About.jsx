import { motion } from 'framer-motion';
import { Heart, Star, Users, Award, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: <Heart size={22} />,
    title: 'হালাল ব্র্যান্ড',
    titleEn: 'Halal Brand',
    desc: 'Every product is ethically sourced and designed with Islamic values at the core.',
  },
  {
    icon: <Star size={22} />,
    title: 'Premium Quality',
    titleEn: 'Quality First',
    desc: 'We never compromise on quality. Only the finest fabrics make it to our collection.',
  },
  {
    icon: <Users size={22} />,
    title: 'নারীর ক্ষমতায়ন',
    titleEn: 'Women Empowered',
    desc: 'We believe modest fashion empowers women to express themselves with confidence.',
  },
  {
    icon: <Award size={22} />,
    title: 'Bangladesh Proud',
    titleEn: 'Made in BD',
    desc: 'Proudly Bangladeshi. We support local artisans and sustainable fashion.',
  },
];

const stats = [
  { n: '5,000+', l: 'Happy Customers' },
  { n: '200+', l: 'Products' },
  { n: '8', l: 'Districts Served' },
  { n: '4.9★', l: 'Average Rating' },
];

const milestones = [
  { year: '2019', text: 'Nuraniya was born from a single stall in Dhaka, driven by a passion for modest fashion.' },
  { year: '2021', text: 'Launched our online store and reached customers across all 8 divisions of Bangladesh.' },
  { year: '2023', text: 'Hit 3,000 happy customers and expanded into premium abayas and prayer sets.' },
  { year: '2025', text: 'Now serving 5,000+ customers with 200+ products and same-day dispatch in Dhaka.' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/72" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.4em] mb-5"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            স্নিগ্ধতায় মোড়ানো{' '}
            <span className="text-[#C9A84C]">সৌন্দর্য</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Light in Modesty, Grace in Every Layer. Finely crafted hijabs, borkhas and abayas
            for the modern woman of Bangladesh.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="h-px w-20 bg-[#C9A84C]/40" />
            <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-20 bg-[#C9A84C]/40" />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 bg-[#0D0D0D]/50 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.l} className="text-center px-4">
                <p className="text-lg md:text-2xl font-bold text-[#C9A84C]">{s.n}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-1 h-14 bg-[#C9A84C] rounded-full mt-1 shrink-0" />
                <div>
                  <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">How It Started</p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Born from a Mother's Love
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed pl-6">
                <p>
                  Nuraniya is a Bangladesh-based modest fashion brand focused on bringing elegance,
                  comfort, and confidence to every woman. We specialize in premium quality borkha
                  and hijab designed for everyday wear as well as special occasions.
                </p>
                <p>
                  Our goal is simple — to make modest fashion more stylish, accessible, and
                  expressive without compromising comfort or cultural values. Every piece is
                  thoughtfully crafted with breathable fabrics, modern cuts, and timeless aesthetics.
                </p>
                <p>
                  Whether you prefer minimal styles or statement looks, Nuraniya has something
                  that fits your vibe. Our mission:{' '}
                  <strong className="text-[#C9A84C]">
                    make every Muslim woman feel beautiful, confident, and proud.
                  </strong>
                </p>
              </div>

              {/* Checklist */}
              <ul className="mt-8 space-y-3 pl-6">
                {['100% halal & ethical production', 'Free delivery on orders above ৳1,500', '3-day hassle-free returns', 'Same-day dispatch in Dhaka'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#C9A84C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://www.modestbd.com/cdn/shop/files/SRP03092.heic?v=1762056474&width=832"
                alt="Nuraniya Story"
                className="w-full h-[480px] object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#C9A84C]/40 -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#C9A84C]/20 -z-10" />
              {/* Stat badge */}
              <div className="absolute bottom-6 left-6 bg-[#1a1a1a] text-white px-6 py-4">
                <p className="text-2xl font-bold text-[#C9A84C]">5,000+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Our Journey</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Nuraniya Story
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[#C9A84C]/20" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white/[0.04] border border-white/10 px-6 py-4 hover:border-[#C9A84C]/30 transition-colors">
                      <p className="text-gray-300 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                  {/* Year dot */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-14 h-14 bg-[#1a1a1a] border-2 border-[#C9A84C] flex items-center justify-center">
                      <span className="text-[#C9A84C] font-bold text-sm">{m.year}</span>
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5 mb-14">
            <div className="w-1 h-14 bg-[#C9A84C] rounded-full mt-1 shrink-0" />
            <div>
              <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">What We Stand For</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Values
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-gray-100 p-8 hover:border-[#C9A84C]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-1">{v.title}</h3>
                <p className="text-xs text-[#C9A84C] uppercase tracking-wider mb-3">{v.titleEn}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
