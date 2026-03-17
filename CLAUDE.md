# Nuraniya — Developer Guide for Claude

## Brand
**Name:** Nuraniya
**Tagline EN:** Light in Modesty, Grace in Every Layer
**Tagline BN:** শালীনতায় আলো, প্রতিটি পরতে সৌন্দর্য

## Project Overview
Premium e-commerce frontend for Nuraniya — a Bangladeshi Hijab & Borkha brand.
Stack: Vite + React 18 + Tailwind CSS v4 + Zustand + React Router v6 + Framer Motion

## Brand Color Tokens (use these EVERYWHERE, never hardcode other colors)
- Primary:    #81A6C6  (soft steel blue)
- Accent:     #AACDDC  (light sky blue)
- Background: #F3E3D0  (warm peach/cream)
- Neutral:    #D2C4B4  (warm taupe)
- Ink/Text:   #1E2D3D  (dark navy)

Tailwind: `bg-[#81A6C6]`, `text-[#81A6C6]`, `bg-[#F3E3D0]`, `text-[#1E2D3D]`

## Contact Info
- Phone/WhatsApp: +880 1712-345678
- Email: support@nuraniya.com
- Head Office: House 18, Road 7, Sector 3, Uttara, Dhaka 1230
- Outlet: Shop 12, Level 3, Jamuna Future Park, Kuril, Dhaka
- Hours: Sat–Thu 10am–9pm | Fri 3pm–9pm
- Facebook: facebook.com/nuraniya.official
- Instagram: @nuraniya.bd | TikTok: @nuraniya.style

## Fonts
- Headings: 'Playfair Display' → `style={{ fontFamily: "'Playfair Display', serif" }}`
- Body: 'Inter' → default

## Image Utility
```js
// src/utils/images.js
export const unsplash = (id, w=600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
```

## File Structure
```
src/
  components/layout/   → Navbar.jsx, Footer.jsx
  components/ui/       → StarRating.jsx, Badge.jsx, SeasonalBanner.jsx, WhatsAppButton.jsx
  components/product/  → ProductCard.jsx, FilterSidebar.jsx
  components/cart/     → CartDrawer.jsx, CartItem.jsx, OrderSummary.jsx
  components/checkout/ → StepIndicator.jsx, DeliveryForm.jsx, PaymentSelector.jsx
  pages/               → Home, Shop, ProductDetail, Cart, Checkout,
                         OrderSuccess, Wishlist, About, Contact
  store/               → cartStore.js, wishlistStore.js
  data/                → products.js, categories.js, testimonials.js
  utils/               → images.js, formatCurrency.js
  hooks/               → useFilters.js
```

## Currency
```js
export const taka = (n) => `৳${Number(n).toLocaleString()}`;
```

## Cart Store (Zustand + localStorage)
Exposes: `items`, `addItem`, `removeItem`, `updateQty`, `clearCart`, `applyPromo`, `promoCode`, `totals`
- Delivery: FREE above ৳1500, else ৳80 Dhaka / ৳120 outside
- Promo codes: `EID20` = 20% off, `FIRST10` = ৳100 off

## Payment Methods (mock)
1. bKash   → +880 1712-345678, user enters TX ID
2. Nagad   → +880 1811-234567, user enters TX ID
3. Rocket  → +880 1611-123456, user enters TX ID
4. COD     → default, no extra input
- Return policy: 3-day return for unused items with original packaging

## Checkout Form (Bangladesh-specific)
Full Name, Phone (01XXXXXXXXX), Address Line, Para/Mohalla, Thana/Upazila,
Zila/District, Division (Dhaka/Chattogram/Sylhet/Rajshahi/Khulna/Barishal/Rangpur/Mymensingh)

## Delivery
- Inside Dhaka: 1–2 days
- Outside Dhaka: 2–4 days

## WhatsApp Float Button
`https://wa.me/8801712345678?text=Hi, I want to order from Nuraniya`

## Do NOT
- Add backend or real API calls
- Use Redux (Zustand only)
- Use CSS modules (Tailwind only)
- Add auth
- Use paid image services
