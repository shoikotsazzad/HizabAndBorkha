import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-[#C9A84C]" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Nuraniya
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              স্নিগ্ধতায় মোড়ানো সৌন্দর্য।<br />
              Light in Modesty, Grace in Every Layer. Finely crafted modest fashion for the modern woman of Bangladesh.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/nuraniya.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                title="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com/nuraniya.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://tiktok.com/@nuraniya.style"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-xs font-bold"
                title="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#C9A84C] mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/shop', label: 'Shop All' },
                { to: '/shop?cat=hijab', label: 'Hijab Collection' },
                { to: '/shop?cat=burkha', label: 'Borkha Collection' },
                { to: '/shop?cat=abaya', label: 'Abaya Collection' },
                { to: '/wishlist', label: 'My Wishlist' },
                { to: '/about', label: 'Our Story' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 text-sm hover:text-[#C9A84C] hover:translate-x-1 transition-all inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-[#C9A84C] mb-4 uppercase tracking-wider text-xs">
              Customer Care
            </h3>
            <ul className="space-y-2">
              {[
                'Shipping Policy',
                '3-Day Return Policy',
                'Size Guide',
                'FAQ',
                'Track My Order',
                'Privacy Policy',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm cursor-pointer hover:text-[#C9A84C] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#C9A84C] mb-4 uppercase tracking-wider text-xs">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  House 18, Road 7, Sector 3<br />
                  Uttara, Dhaka 1230, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Shop 12, Level 3, Jamuna Future Park<br />
                  Kuril, Dhaka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C9A84C]" />
                <span className="text-white/60 text-sm">+880 1712-345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#C9A84C]" />
                <span className="text-white/60 text-sm">support@nuraniya.com</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60">
              <Clock size={12} className="inline mr-1 text-[#C9A84C]" />
              <strong className="text-white">শনি–বৃহস্পতি:</strong> ১০ AM – ৯ PM<br />
              <span className="ml-4"><strong className="text-white">শুক্রবার:</strong> ৩ PM – ৯ PM</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2025 Nuraniya. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-white/50 text-xs mr-2">Payment:</span>
              {['bKash', 'Nagad', 'Rocket', 'COD'].map((p) => (
                <span
                  key={p}
                  className="px-2 py-1 border border-[#C9A84C]/30 text-[#C9A84C] rounded text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
