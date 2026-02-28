import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  COPY_PRODUCT_NAME,
  BRAND_NAME,
  CHECKOUT_URL_1UNIT,
  CHECKOUT_URL_2UNIT,
  CHECKOUT_URL_3UNIT,
  CDN_HERO_FRONT,
  CDN_HERO_ANGLE,
  CDN_LIFESTYLE_1,
  CDN_TEXTURE_1,
  CDN_BUNDLE_3,
  CDN_AD_OVERLAY,
  PDP_META_TITLE,
  PDP_META_DESC,
  PDP_H1,
  PDP_HERO_SUBHEAD,
  PDP_HERO_COPY,
  PDP_CTA_1,
  PDP_PROBLEM_BODY,
  MECHANISM_NAME,
  PDP_MECHANISM_HEADLINE,
  PDP_MECHANISM_BODY,
  PDP_STEP_1_HEADLINE,
  PDP_STEP_1_BODY,
  PDP_STEP_2_HEADLINE,
  PDP_STEP_2_BODY,
  PDP_STEP_3_HEADLINE,
  PDP_STEP_3_BODY,
  PDP_TESTIMONIAL_1_QUOTE,
  PDP_TESTIMONIAL_1_NAME,
  PDP_TESTIMONIAL_1_LOCATION,
  PDP_TESTIMONIAL_2_QUOTE,
  PDP_TESTIMONIAL_2_NAME,
  PDP_TESTIMONIAL_2_LOCATION,
  PDP_TESTIMONIAL_3_QUOTE,
  PDP_TESTIMONIAL_3_NAME,
  PDP_TESTIMONIAL_3_LOCATION,
  BUNDLE_LABEL_1,
  BUNDLE_PRICE_1,
  BUNDLE_COMPARE_1,
  PDP_BUNDLE_1_PER_UNIT,
  BUNDLE_LABEL_2,
  BUNDLE_PRICE_2,
  BUNDLE_COMPARE_2,
  PDP_BUNDLE_2_PER_UNIT,
  BUNDLE_LABEL_3,
  BUNDLE_PRICE_3,
  BUNDLE_COMPARE_3,
  PDP_BUNDLE_3_PER_UNIT,
  GUARANTEE,
  PDP_GUARANTEE_HEADLINE,
  PDP_GUARANTEE_BODY,
  PDP_ACTION_1_TITLE,
  PDP_ACTION_1_BODY,
  PDP_ACTION_2_TITLE,
  PDP_ACTION_2_BODY,
  PDP_ACTION_3_TITLE,
  PDP_ACTION_3_BODY,
  PDP_INGREDIENT_4_NAME,
  PDP_INGREDIENT_4_SCIENCE,
  PDP_INGREDIENT_5_NAME,
  PDP_INGREDIENT_5_SCIENCE,
  PDP_FAQ_1_Q,
  PDP_FAQ_1_A,
  PDP_FAQ_2_Q,
  PDP_FAQ_2_A,
  PDP_FAQ_3_Q,
  PDP_FAQ_3_A,
  PDP_FAQ_4_Q,
  PDP_FAQ_4_A,
  PDP_FAQ_5_Q,
  PDP_FAQ_5_A,
  PDP_FINAL_CTA_BUTTON,
  PDP_DISCLAIMER,
} from "../config";

const COLORS = {
  primary: "#4CAF50",
  cta: "#E53935",
  headline: "#1A1A2E",
  body: "#333344",
  bg: "#FAFAFA",
  bgDark: "#F0F0F5",
  green: "#2D6A4F",
  accent: "#666680",
};

const StarRating = ({ stars = 5 }: { stars?: number }) => (
  <span style={{ color: "#F4A40A", fontSize: "18px" }}>
    {"★".repeat(stars)}{"☆".repeat(5 - stars)}
  </span>
);

const CTAButton = ({ href, children, size = "normal" }: { href: string; children: React.ReactNode; size?: string }) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: COLORS.cta,
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: size === "large" ? "18px" : "16px",
      padding: size === "large" ? "18px 40px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.02em",
      boxShadow: "0 4px 16px rgba(229,57,53,0.25)",
      transition: "opacity 0.2s",
    }}
  >
    {children}
  </a>
);

const DiscountBadge = () => (
  <div style={{
    display: "inline-block",
    background: COLORS.green,
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    padding: "6px 16px",
    borderRadius: "9999px",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  }}>
    🔬 25% OFF — CODE: SECRET25
  </div>
);

const SectionDivider = () => (
  <div style={{ borderTop: `2px solid ${COLORS.primary}`, opacity: 0.3, margin: "60px 0" }} />
);

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phases = [
    { phase: "Step 1", title: PDP_STEP_1_HEADLINE, body: PDP_STEP_1_BODY, icon: "🎯" },
    { phase: "Step 2", title: PDP_STEP_2_HEADLINE, body: PDP_STEP_2_BODY, icon: "⏱️" },
    { phase: "Step 3", title: PDP_STEP_3_HEADLINE, body: PDP_STEP_3_BODY, icon: "✨" },
  ];

  const testimonials = [
    { stars: 5, text: PDP_TESTIMONIAL_1_QUOTE, name: PDP_TESTIMONIAL_1_NAME, location: PDP_TESTIMONIAL_1_LOCATION },
    { stars: 5, text: PDP_TESTIMONIAL_2_QUOTE, name: PDP_TESTIMONIAL_2_NAME, location: PDP_TESTIMONIAL_2_LOCATION },
    { stars: 5, text: PDP_TESTIMONIAL_3_QUOTE, name: PDP_TESTIMONIAL_3_NAME, location: PDP_TESTIMONIAL_3_LOCATION },
  ];

  const faqs = [
    { q: PDP_FAQ_1_Q, a: PDP_FAQ_1_A },
    { q: PDP_FAQ_2_Q, a: PDP_FAQ_2_A },
    { q: PDP_FAQ_3_Q, a: PDP_FAQ_3_A },
    { q: PDP_FAQ_4_Q, a: PDP_FAQ_4_A },
    { q: PDP_FAQ_5_Q, a: PDP_FAQ_5_A },
  ];

  const science = [
    { name: PDP_ACTION_1_TITLE, desc: PDP_ACTION_1_BODY },
    { name: PDP_ACTION_2_TITLE, desc: PDP_ACTION_2_BODY },
    { name: PDP_ACTION_3_TITLE, desc: PDP_ACTION_3_BODY },
    { name: PDP_INGREDIENT_4_NAME, desc: PDP_INGREDIENT_4_SCIENCE },
    { name: PDP_INGREDIENT_5_NAME, desc: PDP_INGREDIENT_5_SCIENCE },
  ];

  return (
    <>
      <Helmet>
        <title>{PDP_META_TITLE}</title>
        <meta name="description" content={PDP_META_DESC} />
      </Helmet>

      <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* ANNOUNCEMENT BAR */}
        <div style={{ background: COLORS.primary, color: "#fff", textAlign: "center", padding: "10px 16px", fontSize: "14px", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
          🔬 Limited Time: Use code SECRET25 for 25% off your order + Free Shipping
        </div>

        {/* NAV */}
        <nav style={{ background: "#fff", padding: "14px 24px", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: COLORS.headline, letterSpacing: "-0.02em" }}>
            {BRAND_NAME}
          </div>
          <a href={CHECKOUT_URL_1UNIT} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", padding: "10px 24px", borderRadius: "9999px", textDecoration: "none" }}>
            Shop Now — Starting at $149
          </a>
        </nav>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #F5F7FA 0%, #E8ECF1 100%)", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <DiscountBadge />
              <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: COLORS.headline, margin: "16px 0 8px", letterSpacing: "-0.02em" }}>
                {PDP_H1}
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 24px)", color: COLORS.primary, margin: "0 0 24px", lineHeight: 1.3 }}>
                {PDP_HERO_SUBHEAD}
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.7, color: COLORS.body, maxWidth: "500px", marginBottom: "24px" }}>
                {PDP_HERO_COPY}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <StarRating stars={5} />
                <span style={{ fontSize: "14px", color: COLORS.accent }}>4.9/5 Rating</span>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <CTAButton href={CHECKOUT_URL_1UNIT} size="large">{PDP_CTA_1}</CTAButton>
              </div>
              <div style={{ fontSize: "13px", color: COLORS.accent, display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <span>✓ FDA 510(k) Cleared</span>
                <span>✓ Free Shipping</span>
                <span>✓ {GUARANTEE}-Day Guarantee</span>
                <span>✓ 1-Year Warranty</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={CDN_HERO_FRONT}
                alt={`${COPY_PRODUCT_NAME} — Red Light Therapy LED Face Mask`}
                style={{ maxWidth: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              />
            </div>
          </div>
        </section>

        {/* PROBLEM / WHY SWITCH */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 32px)", color: COLORS.headline, textAlign: "center", marginBottom: "24px" }}>
            Why 12,000+ Women Have Switched to GlowBeam Pro
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: COLORS.body }}>
            {PDP_PROBLEM_BODY}
          </p>
        </section>

        {/* PRODUCT IMAGES */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <img src={CDN_HERO_ANGLE} alt={`${COPY_PRODUCT_NAME} — angle view`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover", maxHeight: "400px" }} />
            <img src={CDN_TEXTURE_1} alt={`${COPY_PRODUCT_NAME} — LED interior`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover", maxHeight: "400px" }} />
          </div>
        </section>

        <SectionDivider />

        {/* HOW TO USE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: COLORS.headline, textAlign: "center", marginBottom: "16px" }}>
            How to Use {COPY_PRODUCT_NAME}
          </h2>
          <p style={{ textAlign: "center", fontSize: "18px", color: COLORS.accent, maxWidth: "600px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            Three steps. 10 minutes. That's your entire routine.
          </p>

          {phases.map((phase, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ fontSize: "36px", lineHeight: 1 }}>{phase.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: COLORS.primary, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                    {phase.phase}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "16px" }}>
                    {phase.title}
                  </h3>
                  <p style={{ lineHeight: 1.8, color: COLORS.body }}>{phase.body}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <SectionDivider />

        {/* MECHANISM / SCIENCE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: COLORS.headline, textAlign: "center", marginBottom: "16px" }}>
            {PDP_MECHANISM_HEADLINE}
          </h2>
          <p style={{ textAlign: "center", fontSize: "18px", color: COLORS.accent, maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            {PDP_MECHANISM_BODY}
          </p>

          {/* Wavelength diagram */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <img src="https://shopify-staged-uploads.storage.googleapis.com/tmp/46285914267/files/8fc428e0-ac3b-4729-914f-a3f6394ca9d8/cdn-wavelength-diagram.png" alt="Dual wavelength diagram — 630-660nm red + 830-850nm near-infrared" style={{ maxWidth: "600px", width: "100%", borderRadius: "16px" }} />
          </div>

          {science.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "24px", marginBottom: "24px" }}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline, marginBottom: "8px" }}>{item.name}</h4>
              <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* LIFESTYLE IMAGES */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <img src={CDN_LIFESTYLE_1} alt={`Woman using ${COPY_PRODUCT_NAME}`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
            <img src="https://shopify-staged-uploads.storage.googleapis.com/tmp/46285914267/files/6b5594c8-fe41-4886-966b-3b53fc353bf5/cdn-lifestyle-2.png" alt={`${COPY_PRODUCT_NAME} lifestyle`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
              Real Women. Real Results.
            </h2>
            <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "15px" }}>
              Not influencers. Not models. Women who were skeptical, tried it anyway, and kept using it.
            </p>

            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                marginBottom: "24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                <StarRating stars={t.stars} />
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: COLORS.body, margin: "16px 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: COLORS.accent }}>
                  — {t.name} | {t.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "40px" }}>
            GlowBeam Pro vs. The Competition
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${COLORS.primary}` }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}></th>
                  <th style={{ textAlign: "center", padding: "12px 16px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: COLORS.primary }}>GlowBeam Pro™</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: COLORS.accent }}>$380-$435 Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Wavelengths", "630-660nm + 830-850nm ✅", "633nm + 830nm ✅"],
                  ["Wireless", "✅ Yes", "❌ Wired controllers"],
                  ["Material", "Soft silicone", "Varies (some hard plastic)"],
                  ["Price", "$149", "$380-$435"],
                  ["FDA Cleared", "✅", "✅"],
                  ["Session Time", "10 min", "✅ (varies)"],
                  ["Customer Support", "✅ Responsive", "⚠️ Documented complaints"],
                ].map(([label, ours, theirs], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", background: i % 2 === 0 ? "#fff" : COLORS.bgDark }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>{ours}</td>
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BUNDLES */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }} id="shop">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
            Choose Your GlowBeam Pro Bundle
          </h2>
          <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "16px" }}>
            Free shipping on all orders. 30-day money-back guarantee. 1-year warranty. Use code <strong>SECRET25</strong> for 25% off.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Tier 1 — Single Mask */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px" }}>{BUNDLE_LABEL_1}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_1}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_1}</span>
              </div>
              <p style={{ fontSize: "14px", color: COLORS.accent, marginBottom: "16px" }}>{PDP_BUNDLE_1_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "0 0 24px" }}>
                The perfect entry point. Same clinical wavelengths as $400+ masks at a fraction of the price.
              </p>
              <p style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>✓ Free Shipping · ✓ 1-Year Warranty</p>
              <CTAButton href={CHECKOUT_URL_1UNIT}>Get GlowBeam Pro →</CTAButton>
            </div>

            {/* Tier 2 — MOST POPULAR */}
            <div style={{ background: "linear-gradient(135deg, #F0FAF0 0%, #E8F5E9 100%)", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 8px 32px rgba(76,175,80,0.15)", border: `2px solid ${COLORS.primary}`, position: "relative" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: COLORS.primary, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "6px 20px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                ⭐ MOST POPULAR
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px", marginTop: "8px" }}>{BUNDLE_LABEL_2}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_2}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_2}</span>
              </div>
              <p style={{ fontSize: "14px", color: COLORS.accent, marginBottom: "16px" }}>{PDP_BUNDLE_2_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "0 0 24px" }}>
                Everything you need for the complete experience. Carrying case for travel, plus our Serum Optimization Guide to maximize your results.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ FREE: Carrying Case</div>
                <div>✓ FREE: Serum Optimization Guide</div>
                <div>✓ Free Shipping · 1-Year Warranty</div>
              </div>
              <CTAButton href={CHECKOUT_URL_2UNIT}>Get Complete Kit →</CTAButton>
            </div>

            {/* Tier 3 — BEST VALUE */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.08)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#FF9800", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "6px 20px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                🎁 BEST VALUE — Save 58%
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px", marginTop: "8px" }}>{BUNDLE_LABEL_3}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_3}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_3}</span>
              </div>
              <p style={{ fontSize: "14px", color: COLORS.accent, marginBottom: "16px" }}>{PDP_BUNDLE_3_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "0 0 24px" }}>
                One for you, one for your mom, sister, or best friend. The lowest price per mask — and the gift that keeps giving.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ 2 Masks — $124.50 each</div>
                <div>✓ Free Shipping · 1-Year Warranty</div>
              </div>
              <CTAButton href={CHECKOUT_URL_3UNIT}>Get Family Pack →</CTAButton>
            </div>
          </div>

          {/* Bundle image */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <img src={CDN_BUNDLE_3} alt={`${COPY_PRODUCT_NAME} Family Pack`} style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }} />
          </div>
        </section>

        {/* GUARANTEE */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛡️</div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, marginBottom: "16px" }}>
              {PDP_GUARANTEE_HEADLINE}
            </h2>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "32px" }}>
              {PDP_GUARANTEE_BODY}
            </p>
            <CTAButton href={CHECKOUT_URL_1UNIT} size="large">Try GlowBeam Pro Risk-Free →</CTAButton>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "40px" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: "0" }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline }}>{faq.q}</span>
                  <span style={{ fontSize: "24px", color: COLORS.primary, flexShrink: 0 }}>{activeFaq === i ? "−" : "+"}</span>
                </button>
                {activeFaq === i && (
                  <div style={{ padding: "0 0 20px", lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ background: `linear-gradient(135deg, ${COLORS.headline} 0%, #2A2A4E 100%)`, padding: "80px 24px", textAlign: "center", color: "#fff" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <img src={CDN_AD_OVERLAY} alt={COPY_PRODUCT_NAME} style={{ maxWidth: "200px", marginBottom: "32px", borderRadius: "16px" }} />
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 4vw, 36px)", marginBottom: "16px", lineHeight: 1.2 }}>
              {PDP_FINAL_CTA_BUTTON}
            </h2>
            <p style={{ opacity: 0.85, marginBottom: "32px", fontSize: "16px", lineHeight: 1.7 }}>
              Give your skin the clinical-grade wavelengths it deserves — without the clinical-grade price tag.
            </p>
            <div style={{ marginBottom: "24px" }}>
              <DiscountBadge />
            </div>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              <a href={CHECKOUT_URL_1UNIT} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>1 Mask — {BUNDLE_PRICE_1}</a>
              <a href={CHECKOUT_URL_2UNIT} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, padding: "16px 36px", borderRadius: "9999px", textDecoration: "none", fontSize: "17px" }}>Complete Kit — {BUNDLE_PRICE_2}</a>
              <a href={CHECKOUT_URL_3UNIT} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>Family Pack — {BUNDLE_PRICE_3}</a>
            </div>
            <p style={{ opacity: 0.7, fontSize: "13px" }}>
              {GUARANTEE}-Day Money-Back Guarantee · 1-Year Warranty · Free Shipping · Use code SECRET25 at checkout
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#1a1a1a", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", marginBottom: "16px" }}>{BRAND_NAME}</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 16px" }}>
              {PDP_DISCLAIMER}
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 {BRAND_NAME}. All Rights Reserved.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
