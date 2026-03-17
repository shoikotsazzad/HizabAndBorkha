import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, RefreshCcw, HeartHandshake } from 'lucide-react';
import { getFeaturedProducts, getNewArrivals } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/product/ProductCard';
import StarRating from '../components/ui/StarRating';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: <Truck size={22} />, title: 'Free Delivery', desc: 'On orders above ৳1,500 across Bangladesh' },
  { icon: <Shield size={22} />, title: 'Quality Assured', desc: 'Carefully inspected before every shipment' },
  { icon: <RefreshCcw size={22} />, title: '3-Day Returns', desc: 'Hassle-free returns for unused items' },
  { icon: <HeartHandshake size={22} />, title: 'Halal Brand', desc: '100% modest, ethical & halal fashion' },
];

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 8);
  const newArrivals = getNewArrivals().slice(0, 4);

  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/banner.png')" }}
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              স্নিগ্ধতায় মোড়ানো{' '}
              <span className="text-[#C9A84C]">সৌন্দর্য</span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} className="text-gray-300 text-base mb-10 leading-relaxed max-w-lg">
              Light in Modesty, Grace in Every Layer. Finely crafted hijabs, borkhas and abayas for the modern woman of Bangladesh.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0D0D0D] font-bold text-sm uppercase tracking-wider hover:bg-[#d4b45a] transition-all hover:scale-105"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/shop?cat=burkha"
                className="px-8 py-4 border border-white/40 text-white font-semibold text-sm uppercase tracking-wider hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                Borkha Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#0D0D0D]/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-3 divide-x divide-white/10">
            {[
              { n: '5,000+', l: 'Happy Customers' },
              { n: '200+', l: 'Products' },
              { n: '4.9 ★', l: 'Average Rating' },
            ].map((s) => (
              <div key={s.l} className="text-center px-4">
                <p className="text-xl md:text-2xl font-bold text-[#C9A84C]">{s.n}</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURES BAR — dark strip mirrors navbar ──────────────────────── */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 px-4 first:pl-0"
              >
                <div className="w-10 h-10 border border-[#C9A84C]/50 flex items-center justify-center text-[#C9A84C] shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{f.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with gold left border */}
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-start gap-5">
              <div className="w-1 h-14 bg-[#C9A84C] rounded-full mt-1" />
              <div>
                <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">Browse</p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Collections
                </h2>
              </div>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] border-b-2 border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors uppercase tracking-wider"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/shop?cat=${cat.id}`}
                  className="group block overflow-hidden relative aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-bold text-sm text-white">{cat.name}</p>
                    <p className="text-[10px] text-[#C9A84C] mt-0.5">{cat.nameBn}</p>
                  </div>
                  {/* Gold top line on hover */}
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C9A84C] group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-start gap-5">
              <div className="w-1 h-14 bg-[#C9A84C] rounded-full mt-1" />
              <div>
                <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">Handpicked for you</p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Featured Products
                </h2>
              </div>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C9A84C] transition-all"
            >
              View All <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider"
            >
              View All Products <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS — dark strip ─────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <section className="bg-[#1a1a1a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div className="flex items-start gap-5">
                <div className="w-1 h-14 bg-[#C9A84C] rounded-full mt-1" />
                <div>
                  <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">Just In</p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    New Arrivals
                  </h2>
                </div>
              </div>
              <Link
                to="/shop?sort=new"
                className="hidden md:flex items-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#1a1a1a] transition-all"
              >
                See All New <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {newArrivals.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 relative overflow-hidden">
        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered header */}
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Customer Love</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-16 bg-[#C9A84C]/30" />
              <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
              <div className="h-px w-16 bg-[#C9A84C]/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white/[0.04] border border-white/10 p-8 hover:border-[#C9A84C]/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                {/* Stars at top */}
                <StarRating rating={t.rating} size={13} />

                {/* Decorative large quote */}
                <div className="absolute top-5 right-6 text-[72px] leading-none font-serif text-[#C9A84C]/15 group-hover:text-[#C9A84C]/25 transition-colors select-none">
                  "
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-sm leading-relaxed mt-5 mb-6 relative z-10">{t.text}</p>

                {/* Gold separator */}
                <div className="w-8 h-0.5 bg-[#C9A84C] mb-5" />

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full ring-2 ring-[#C9A84C]/50 bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location} · {t.date}</p>
                  </div>
                </div>
                <p className="text-xs text-[#C9A84C]/60 mt-3 font-medium">Purchased: {t.product}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — split layout ─────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2"
        >
          {/* Left: image panel */}
          <div className="relative h-64 md:h-auto min-h-[360px] overflow-hidden">
            <img
              src="https://emaanbd.com/wp-content/uploads/2025/04/494206032_711028771274565_8136789613331643602_n.jpg"
              alt="Nuraniya Collection"
              className="w-full h-full object-cover object-top"
            />
            {/* Fade into dark bg on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1a1a]" />
            {/* Bottom fade for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:hidden" />
          </div>

          {/* Right: text panel */}
          <div className="relative flex flex-col justify-center py-16 px-8 md:px-14">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C9A84C]/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#C9A84C]/40" />

            <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.4em] mb-5">Nuraniya</p>
            <h2
              className="text-4xl md:text-[2.6rem] font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dress Modestly,{' '}
              <span className="text-[#C9A84C]">Live Beautifully</span>
            </h2>
            <p className="text-gray-400 text-sm mb-9 leading-relaxed max-w-sm">
              Join 5,000+ customers across Bangladesh who trust Nuraniya for premium modest fashion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#1a1a1a] font-bold text-sm uppercase tracking-wider hover:bg-[#d4b45a] transition-all hover:scale-105"
              >
                Shop Collection <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/8801700000000?text=Hi, I want to order from Nuraniya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L0 24l6.335-1.528A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                WhatsApp Order
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
