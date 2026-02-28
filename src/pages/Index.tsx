import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  COPY_PRODUCT_NAME, BRAND_NAME, PDP_META_TITLE, PDP_META_DESC,
  PDP_H1, PDP_HERO_SUBHEAD, PDP_HERO_COPY, PDP_CTA_1,
  PDP_BENEFIT_1, PDP_BENEFIT_2, PDP_BENEFIT_3, PDP_BENEFIT_4, PDP_BENEFIT_5,
  PDP_PROBLEM_HEADLINE, PDP_PROBLEM_BODY,
  PDP_MECHANISM_HEADLINE, PDP_MECHANISM_BODY,
  PDP_ACTION_1_TITLE, PDP_ACTION_1_BODY, PDP_ACTION_1_BODY_EXT,
  PDP_ACTION_2_TITLE, PDP_ACTION_2_BODY, PDP_ACTION_2_BODY_EXT,
  PDP_ACTION_3_TITLE, PDP_ACTION_3_BODY, PDP_ACTION_3_BODY_EXT,
  PDP_STEP_1_HEADLINE, PDP_STEP_1_BODY,
  PDP_STEP_2_HEADLINE, PDP_STEP_2_BODY,
  PDP_STEP_3_HEADLINE, PDP_STEP_3_BODY,
  PDP_TESTIMONIAL_1_QUOTE, PDP_TESTIMONIAL_1_NAME, PDP_TESTIMONIAL_1_LOCATION,
  PDP_TESTIMONIAL_2_QUOTE, PDP_TESTIMONIAL_2_NAME, PDP_TESTIMONIAL_2_LOCATION,
  PDP_TESTIMONIAL_3_QUOTE, PDP_TESTIMONIAL_3_NAME, PDP_TESTIMONIAL_3_LOCATION,
  PDP_FAQ_1_Q, PDP_FAQ_1_A, PDP_FAQ_2_Q, PDP_FAQ_2_A,
  PDP_FAQ_3_Q, PDP_FAQ_3_A, PDP_FAQ_4_Q, PDP_FAQ_4_A,
  PDP_FAQ_5_Q, PDP_FAQ_5_A,
  BUNDLE_LABEL_1, BUNDLE_PRICE_1, BUNDLE_COMPARE_1, BUNDLE_SAVE_1,
  BUNDLE_LABEL_2, BUNDLE_PRICE_2, BUNDLE_COMPARE_2, BUNDLE_SAVE_2,
  BUNDLE_LABEL_3, BUNDLE_PRICE_3, BUNDLE_COMPARE_3, BUNDLE_SAVE_3,
  PDP_BUNDLE_1_PER_UNIT, PDP_BUNDLE_2_PER_UNIT, PDP_BUNDLE_3_PER_UNIT,
  CHECKOUT_URL_1UNIT, CHECKOUT_URL_2UNIT, CHECKOUT_URL_3UNIT,
  PDP_GUARANTEE_HEADLINE, PDP_GUARANTEE_BODY,
  PDP_FINAL_CTA_BUTTON, PDP_DISCLAIMER,
  CDN_HERO_FRONT, CDN_HERO_ANGLE, CDN_TEXTURE_1, CDN_LIFESTYLE_1,
  CDN_LIFESTYLE_2, CDN_INGREDIENT_1, CDN_BUNDLE_3,
  PDP_INGREDIENT_4_NAME, PDP_INGREDIENT_4_SCIENCE,
  PDP_INGREDIENT_5_NAME, PDP_INGREDIENT_5_SCIENCE,
} from "../config";

const bundles = [
  { label: BUNDLE_LABEL_1, price: BUNDLE_PRICE_1, compare: BUNDLE_COMPARE_1, save: BUNDLE_SAVE_1, desc: PDP_BUNDLE_1_PER_UNIT, url: CHECKOUT_URL_1UNIT },
  { label: BUNDLE_LABEL_2, price: BUNDLE_PRICE_2, compare: BUNDLE_COMPARE_2, save: BUNDLE_SAVE_2, desc: PDP_BUNDLE_2_PER_UNIT, url: CHECKOUT_URL_2UNIT, badge: "MOST POPULAR" },
  { label: BUNDLE_LABEL_3, price: BUNDLE_PRICE_3, compare: BUNDLE_COMPARE_3, save: BUNDLE_SAVE_3, desc: PDP_BUNDLE_3_PER_UNIT, url: CHECKOUT_URL_3UNIT, badge: "BEST VALUE" },
];

const faqs = [
  { q: PDP_FAQ_1_Q, a: PDP_FAQ_1_A },
  { q: PDP_FAQ_2_Q, a: PDP_FAQ_2_A },
  { q: PDP_FAQ_3_Q, a: PDP_FAQ_3_A },
  { q: PDP_FAQ_4_Q, a: PDP_FAQ_4_A },
  { q: PDP_FAQ_5_Q, a: PDP_FAQ_5_A },
];

const testimonials = [
  { quote: PDP_TESTIMONIAL_1_QUOTE, name: PDP_TESTIMONIAL_1_NAME, loc: PDP_TESTIMONIAL_1_LOCATION },
  { quote: PDP_TESTIMONIAL_2_QUOTE, name: PDP_TESTIMONIAL_2_NAME, loc: PDP_TESTIMONIAL_2_LOCATION },
  { quote: PDP_TESTIMONIAL_3_QUOTE, name: PDP_TESTIMONIAL_3_NAME, loc: PDP_TESTIMONIAL_3_LOCATION },
];

const Stars = () => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    ))}
  </div>
);

const Index = () => {
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [heroImg, setHeroImg] = useState(CDN_HERO_FRONT);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openAction, setOpenAction] = useState<number | null>(null);

  const thumbs = [CDN_HERO_FRONT, CDN_HERO_ANGLE, CDN_TEXTURE_1, CDN_LIFESTYLE_1];
  const benefits = [PDP_BENEFIT_1, PDP_BENEFIT_2, PDP_BENEFIT_3, PDP_BENEFIT_4, PDP_BENEFIT_5];

  return (
    <>
      <Helmet>
        <title>{PDP_META_TITLE}</title>
        <meta name="description" content={PDP_META_DESC} />
      </Helmet>

      <div className="bg-[#FAF8F5] text-gray-900 font-['Inter',sans-serif]">
        {/* 1. HERO */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* LEFT — Gallery */}
            <div>
              <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4">
                <img src={heroImg} alt={COPY_PRODUCT_NAME} className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {thumbs.map((t, i) => (
                  <button key={i} onClick={() => setHeroImg(t)} className={`aspect-square rounded-lg overflow-hidden border-2 transition ${heroImg === t ? "border-[#2D6A4F]" : "border-transparent hover:border-gray-300"}`}>
                    <img src={t} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            {/* RIGHT — Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-gray-600">4.9/5 — 12,000+ reviews</span>
              </div>
              <h1 className="font-['DM_Sans',sans-serif] text-4xl md:text-5xl font-bold leading-tight">{PDP_H1}</h1>
              <p className="text-lg md:text-xl text-gray-700 font-medium">{PDP_HERO_SUBHEAD}</p>
              <ul className="space-y-2 mt-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2D6A4F] mt-0.5">✓</span>
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold mt-2">Starting at {BUNDLE_PRICE_1}</p>
              <a href="#buybox" className="inline-block mt-2 bg-[#E53935] hover:bg-red-700 text-white text-center font-bold py-4 px-8 rounded-full text-lg transition">
                {PDP_CTA_1}
              </a>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL PROOF BAR */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-600">
            <span className="flex items-center gap-1.5 font-semibold text-[#2D6A4F]">🛡️ FDA 510(k) Cleared</span>
            <span className="hidden md:block text-gray-300">|</span>
            <span>12,000+ Happy Customers</span>
            <span className="hidden md:block text-gray-300">|</span>
            <span>⭐ 4.9/5 Average Rating</span>
            <span className="hidden md:block text-gray-300">|</span>
            <span>📦 Free Shipping</span>
          </div>
        </section>

        {/* 3. BENEFIT BLOCKS */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: "🔴", title: PDP_ACTION_1_TITLE, body: PDP_ACTION_1_BODY_EXT },
              { icon: "🟣", title: PDP_ACTION_2_TITLE, body: PDP_ACTION_2_BODY_EXT },
              { icon: "⚡", title: PDP_ACTION_3_TITLE, body: PDP_ACTION_3_BODY_EXT },
              { icon: "👆", title: PDP_STEP_1_HEADLINE, body: PDP_STEP_1_BODY },
            ].map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-['DM_Sans',sans-serif] text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. STATS */}
        <section className="bg-[#2D6A4F] text-white py-16">
          <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-3 gap-8 text-center">
            {[
              { num: "36%", label: "Wrinkle reduction in 12 weeks" },
              { num: "10 min", label: "Per session — hands-free" },
              { num: "630-850nm", label: "Dual clinical wavelengths" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-['DM_Sans',sans-serif] text-5xl md:text-6xl font-bold mb-2">{s.num}</div>
                <p className="text-green-100 text-lg">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROBLEM → SOLUTION */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="font-['DM_Sans',sans-serif] text-3xl md:text-4xl font-bold mb-8 text-center">{PDP_PROBLEM_HEADLINE}</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-gray-700 text-lg leading-relaxed">{PDP_PROBLEM_BODY}</p>
            <div className="rounded-2xl overflow-hidden">
              <img src={CDN_LIFESTYLE_2} alt="Woman using GlowBeam Pro" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* 6. SCIENCE / MECHANISM */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="font-['DM_Sans',sans-serif] text-3xl md:text-4xl font-bold mb-4">{PDP_MECHANISM_HEADLINE}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">{PDP_MECHANISM_BODY}</p>
            <img src={CDN_INGREDIENT_1} alt="Wavelength diagram" className="mx-auto max-w-md w-full rounded-xl mb-12" />
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              {[
                { title: PDP_ACTION_1_TITLE, body: PDP_ACTION_1_BODY },
                { title: PDP_ACTION_2_TITLE, body: PDP_ACTION_2_BODY },
                { title: PDP_ACTION_3_TITLE, body: PDP_ACTION_3_BODY },
              ].map((a, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenAction(openAction === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-lg hover:bg-gray-50 transition">
                    {a.title}
                    <span className="text-xl ml-4">{openAction === i ? "−" : "+"}</span>
                  </button>
                  {openAction === i && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{a.body}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BUYBOX */}
        <section id="buybox" className="bg-[#FAF8F5] py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="rounded-2xl overflow-hidden bg-white p-4">
                <img src={CDN_HERO_FRONT} alt={COPY_PRODUCT_NAME} className="w-full h-auto" />
              </div>
              <div>
                <div className="bg-[#2D6A4F] text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                  🎉 Use code SECRET25 at checkout for extra savings
                </div>
                <h2 className="font-['DM_Sans',sans-serif] text-2xl font-bold mb-6">Choose Your Bundle</h2>
                <div className="space-y-3 mb-6">
                  {bundles.map((b, i) => (
                    <label key={i} onClick={() => setSelectedBundle(i)} className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition ${selectedBundle === i ? "border-[#2D6A4F] bg-green-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                      <input type="radio" name="bundle" checked={selectedBundle === i} onChange={() => setSelectedBundle(i)} className="mt-1 accent-[#2D6A4F]" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold">{b.label}</span>
                          {b.badge && <span className={`text-xs font-bold py-0.5 px-2 rounded-full ${b.badge === "BEST VALUE" ? "bg-yellow-100 text-yellow-800" : "bg-[#2D6A4F] text-white"}`}>{b.badge}</span>}
                        </div>
                        <p className="text-sm text-gray-500 mt-0.5">{b.desc}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xl font-bold">{b.price}</span>
                          <span className="text-gray-400 line-through text-sm">{b.compare}</span>
                          <span className="text-[#E53935] text-sm font-bold">{b.save}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                <a href={bundles[selectedBundle].url} className="block w-full bg-[#E53935] hover:bg-red-700 text-white text-center font-bold py-4 rounded-full text-lg transition mb-4">
                  Add to Cart — {bundles[selectedBundle].price}
                </a>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>🛡️ 30-Day Guarantee</span>
                  <span>📦 Free Shipping</span>
                  <span>🔧 1-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMPARISON TABLE */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-['DM_Sans',sans-serif] text-3xl font-bold mb-8 text-center">How {COPY_PRODUCT_NAME} Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-gray-600 font-medium">Feature</th>
                  <th className="py-3 px-4 font-bold text-[#2D6A4F]">{COPY_PRODUCT_NAME}</th>
                  <th className="py-3 px-4 text-gray-500">CurrentBody</th>
                  <th className="py-3 px-4 text-gray-500">Omnilux</th>
                  <th className="py-3 px-4 text-gray-500 hidden sm:table-cell">Dr. Dennis Gross</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Price", BUNDLE_PRICE_1, "$380", "$395", "$435"],
                  ["Dual Wavelength", "✅", "✅", "✅", "❌"],
                  ["Wireless", "✅", "❌", "❌", "❌"],
                  ["Soft Silicone", "✅", "❌", "✅", "❌"],
                  ["Full Face Coverage", "✅", "Partial", "✅", "Partial"],
                  ["FDA 510(k) Cleared", "✅", "✅", "✅", "✅"],
                  ["Session Time", "10 min", "10 min", "10 min", "3 min"],
                  ["Money-Back Guarantee", "30 days", "Varies", "30 days", "Varies"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{row[0]}</td>
                    <td className="py-3 px-4 font-semibold text-[#2D6A4F]">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-500">{row[2]}</td>
                    <td className="py-3 px-4 text-gray-500">{row[3]}</td>
                    <td className="py-3 px-4 text-gray-500 hidden sm:table-cell">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. REVIEWS */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-['DM_Sans',sans-serif] text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#FAF8F5] rounded-2xl p-6 flex flex-col">
                  <Stars />
                  <p className="text-gray-700 mt-4 mb-6 flex-1 leading-relaxed text-sm">"{t.quote}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-['DM_Sans',sans-serif] text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-gray-50 transition">
                  <span className="pr-4">{f.q}</span>
                  <span className="text-xl shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* 11. GUARANTEE */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="font-['DM_Sans',sans-serif] text-3xl font-bold mb-4">{PDP_GUARANTEE_HEADLINE}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{PDP_GUARANTEE_BODY}</p>
            <a href="#buybox" className="inline-block bg-[#E53935] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition">
              {PDP_CTA_1}
            </a>
          </div>
        </section>

        {/* 12. CLOSING CTA */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-['DM_Sans',sans-serif] text-3xl md:text-4xl font-bold mb-4">{PDP_FINAL_CTA_BUTTON}</h2>
                <p className="text-gray-300 mb-8">Join 12,000+ women who chose clinical results over brand names.</p>
                <div className="space-y-3">
                  {bundles.map((b, i) => (
                    <a key={i} href={b.url} className="flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-xl p-4 transition">
                      <div>
                        <span className="font-bold">{b.label}</span>
                        {b.badge && <span className="ml-2 text-xs bg-yellow-400 text-gray-900 font-bold py-0.5 px-2 rounded-full">{b.badge}</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-gray-400 text-sm">{b.compare}</span>
                        <span className="font-bold text-lg">{b.price}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <img src={CDN_HERO_FRONT} alt={COPY_PRODUCT_NAME} className="max-w-xs w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* 13. FOOTER */}
        <footer className="bg-gray-950 text-gray-400 py-8">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm space-y-3">
            <p className="font-semibold text-gray-300">{BRAND_NAME}</p>
            <p className="text-xs leading-relaxed max-w-2xl mx-auto">{PDP_DISCLAIMER}</p>
            <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
