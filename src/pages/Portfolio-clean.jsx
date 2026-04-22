import React, { useEffect, useRef, useState } from "react";
import { PURPLE, PURPLE_LIGHT, PURPLE_DARK, CREAM, DARK, WHITE, IMG_SEA, IMG_GOLF } from "../constants";
import useInView from "../hooks/useInView";
import MagneticCursor from "../components/MagneticCursor";
import RevealText from "../components/RevealText";
import SplitReveal from "../components/SplitReveal";
import Marquee from "../components/Marquee";
import NoiseOverlay from "../components/NoiseOverlay";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems = [["نبذة عني", "about"], ["لماذا أنا", "why-me"], ["الفلسفة", "philosophy"], ["الجانب الإنساني", "humanity"], ["تواصل معي", "contact"]];

  const fontFace = `
    @font-face {
      font-family: 'Handicrafts';
/* long line removed */
      font-weight: 400;
    }
    @font-face {
      font-family: 'Handicrafts';
/* long line removed */
      font-weight: 700;
    }
  `;

  return (
    <div style={{ fontFamily: "Handicrafts, Georgia, serif", background: DARK, color: WHITE, overflowX: "hidden", cursor: "none" }}>
      <style>{`
        ${fontFace}
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::selection { background:${PURPLE}; color:white; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:#0a0a0a; }
        ::-webkit-scrollbar-thumb { background:${PURPLE}; }
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes spin-slow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes pulse-ring { 0% { transform:scale(0.85); opacity:0.9; } 100% { transform:scale(1.6); opacity:0; } }
        @keyframes slide-in-left { from { transform:translateX(-80px); opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes fade-up { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        .hover-lift { transition:transform 0.3s cubic-bezier(0.16,1,0.3,1); cursor:none; }
        .hover-lift:hover { transform:translateY(-5px); }
        .nav-link { position:relative; color:rgba(255,255,255,0.55); text-decoration:none; font-family:Handicrafts,serif; font-size:14px; cursor:none; transition:color 0.3s; }
        .nav-link::after { content:\'\'; position:absolute; bottom:-4px; left:0; width:0; height:1px; background:${PURPLE}; transition:width 0.3s; }
        .nav-link:hover { color:white; }
        .nav-link:hover::after { width:100%; }
        .text-shimmer { background:linear-gradient(90deg,${PURPLE_LIGHT} 0%,white 40%,${PURPLE_LIGHT} 60%,white 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
        .img-reveal { opacity:0; transform:scale(1.04); transition:opacity 1.1s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1); }
        .img-reveal.visible { opacity:1; transform:scale(1); }
      `}</style>

      <MagneticCursor />
      <NoiseOverlay />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 56px", display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 60 ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(24px)" : "none",
        borderBottom: scrollY > 60 ? `1px solid rgba(123,47,190,0.18)` : "none",
        transition: "all 0.4s"
      }}>
        <div style={{ fontFamily: "Handicrafts,serif", fontSize: 22, letterSpacing: "0.04em", animation: "fade-up 0.8s ease 0.1s both" }}>
          م<span style={{ color: PURPLE }}>.</span>ا
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">{label}</a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* HERO — full viewport split */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="about" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }}>

        {/* LEFT — text panel */}
        <div style={{ padding: "160px 64px 80px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
          <div>
            <div style={{ marginBottom: 28, animation: "slide-in-left 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
              <span style={{ display: "inline-block", border: `1px solid ${PURPLE}`, padding: "5px 16px", fontFamily: "Handicrafts,serif", fontSize: 13, color: PURPLE_LIGHT }}>
                مديرة تسويق · استراتيجية · تطوير أعمال
              </span>
            </div>

            <div style={{ marginBottom: 24, overflow: "hidden" }}>
              <div style={{ fontSize: "clamp(52px,6.5vw,92px)", fontWeight: 400, lineHeight: 0.95 }}>
                <SplitReveal text="Maryam" style={{ display: "block" }} baseDelay={0.3} />
                <SplitReveal text="Ahmad" style={{ display: "block", color: "rgba(255,255,255,0.45)" }} baseDelay={0.5} />
                <div style={{ position: "relative", display: "inline-block" }}>
                  <SplitReveal text="Alhakeem" style={{ display: "block" }} charStyle={{ color: PURPLE_LIGHT }} baseDelay={0.7} />
                  <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: PURPLE, animation: "slide-in-left 0.8s ease 1.3s both" }} />
                </div>
              </div>
            </div>

            <RevealText delay={1.0} style={{ marginTop: 44 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", marginBottom: 12, fontFamily: "Handicrafts,serif" }}>— شعاري الشخصي</div>
              <div style={{ fontSize: 21, fontStyle: "italic", color: PURPLE_LIGHT, fontFamily: "Handicrafts,serif", lineHeight: 1.65, direction: "rtl" }}>
                "التسويق ليس ما أفعله...<br />بل هو طريقة تفكيري."
              </div>
            </RevealText>
          </div>

          <RevealText delay={1.2}>
            <div style={{ display: "flex", gap: 48 }}>
              {[["10+", "سنوات خبرة"], ["80%", "قرارات الشراء عاطفية"], ["∞", "أفكار → نمو"]].map(([n, l]) => (
                <div key={n}>
                  <div style={{ fontSize: 34, fontWeight: 700, color: WHITE, fontFamily: "Handicrafts,serif" }}>{n}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.14em", marginTop: 5, fontFamily: "Handicrafts,serif" }}>{l}</div>
                </div>
              ))}
            </div>
          </RevealText>
        </div>

        {/* RIGHT — photo + purple block stacked */}
        <div style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {/* Photo top 65% */}
          <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden" }}>
            <img
              src={IMG_SEA}
              alt="Maryam by the sea"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
            {/* dark vignette at bottom */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(transparent, rgba(10,10,10,0.6))" }} />
          </div>
          {/* Solid purple bottom block with motto */}
          <div style={{ flex: "0 0 35%", background: PURPLE, padding: "32px 48px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            {/* spinning ring */}
            <div style={{ position: "absolute", top: -48, right: 32, width: 96, height: 96, animation: "spin-slow 16s linear infinite" }}>
              <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                <path id="cp" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text style={{ fill: "rgba(255,255,255,0.65)", fontSize: 8, fontFamily: "Handicrafts" }}>
                  <textPath href="#cp">تسويق · استراتيجية · نمو · أثر · </textPath>
                </text>
              </svg>
            </div>
            <RevealText delay={0.6}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.18em", marginBottom: 12, direction: "rtl", fontFamily: "Handicrafts,serif" }}>شعاري الذي أعيش به دائماً :</div>
              <div style={{ fontSize: 26, color: WHITE, direction: "rtl", fontFamily: "Handicrafts,serif", lineHeight: 1.5 }}>« ويبقى الأثـر »</div>
              <div style={{ marginTop: 10, fontSize: 14, color: "rgba(255,255,255,0.75)", direction: "rtl", fontFamily: "Handicrafts,serif" }}>أينما زرعك الله فأثمر</div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={["مديرة تسويق", "استراتيجية أعمال", "تطوير الأعمال", "تحديد موقع العلامة التجارية", "قائدة النمو", "+10 سنوات خبرة", "خبيرة السوق السعودي"]} />

      {/* ══════════════════════════════════════════════════════════ */}
      {/* PHILOSOPHY — cream magazine spread */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="philosophy" style={{ background: CREAM, color: DARK, padding: "130px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "22vw", fontWeight: 900, color: "rgba(0,0,0,0.03)", whiteSpace: "nowrap", userSelect: "none", fontFamily: "Handicrafts,serif" }}>أثر</div>

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px" }}>
          <RevealText>
            <div style={{ fontSize: 11, color: "rgba(0,0,0,0.35)", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Handicrafts,serif" }}>§ ٠١ — الفلسفة</div>
          </RevealText>

          <RevealText delay={0.2}>
            <div style={{ fontSize: "clamp(30px,4.5vw,62px)", lineHeight: 1.2, maxWidth: "72%", marginBottom: 80, color: DARK, direction: "rtl", fontFamily: "Handicrafts,serif" }}>
              أنا لا أطارد العملاء —<br />
              <em style={{ color: PURPLE }}>أضع العلامات التجارية</em> حيث<br />
              يتواجد العملاء بالفعل.
            </div>
          </RevealText>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", gap: "0 40px" }}>
            {[
              { num: "٠١", title: "التسويق بالتأثير النفسي", body: "أكثر من 80% من قرارات الشراء تُبنى على الإحساس. كل حملة أبنيها مصممة حول هذه الحقيقة — لصناعة تجارب تلمس الوجدان قبل أن تقنع العقل." },
              { num: "٠٢", title: "تحويل الاستراتيجيات إلى سيمفونيات", body: "الأفكار وحدها لا تكفي. أحولها إلى نمو قابل للقياس — كل عنصر موقّت، كل قناة منسّقة، كل مقياس مُتابَع." },
              { num: "٠٣", title: "أثر حقيقي ويبقى", body: "التسويق الحقيقي لا يبيع فقط... بل يترك أثراً. أبني علامات تجارية تتجاوز الحملات وعلاقات تتجاوز الصفقات." }
            ].map((col, i) => (
              <div key={i} style={{ display: "contents" }}>
                {i > 0 && <div style={{ background: "rgba(0,0,0,0.1)" }} />}
                <RevealText delay={i * 0.15}>
                  <div style={{ direction: "rtl" }}>
                    <div style={{ fontSize: 68, fontWeight: 900, color: "rgba(0,0,0,0.05)", lineHeight: 1, marginBottom: 14, fontFamily: "Handicrafts,serif" }}>{col.num}</div>
                    <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 14, color: DARK, lineHeight: 1.35, fontFamily: "Handicrafts,serif" }}>{col.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 2, color: "rgba(0,0,0,0.58)", fontFamily: "'Libre Baskerville',serif" }}>{col.body}</div>
                  </div>
                </RevealText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* WHY ME — dark + golf photo */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="why-me" style={{ background: DARK, padding: "0", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

          {/* Left — golf photo full height */}
          <div style={{ position: "relative", minHeight: 700, overflow: "hidden" }}>
            <img
              src={IMG_GOLF}
              alt="Maryam at golf course"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            {/* purple overlay strip on right edge */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 6, height: "100%", background: PURPLE }} />
          </div>

          {/* Right — text cards */}
          <div style={{ padding: "80px 56px 80px 64px" }}>
            <RevealText>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 20, fontFamily: "Handicrafts,serif" }}>§ ٠٢ — لماذا أنا</div>
              <div style={{ fontSize: "clamp(40px,5vw,70px)", lineHeight: 0.95, marginBottom: 8, fontFamily: "Handicrafts,serif" }}>
                لماذا<br /><span style={{ color: PURPLE_LIGHT, fontStyle: "italic" }}>أنا؟</span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", lineHeight: 2.2, direction: "rtl", marginBottom: 48, fontFamily: "Handicrafts,serif" }}>
                خبيرة تسويق وتطوير أعمال<br />متخصصة في السوق السعودي<br />سجل حافل +10 سنوات
              </div>
            </RevealText>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {[
                { label: "متعددة المواهب", text: "متعددة المواهب، متحمسة لتطبيق مهارات وأساليب متنوعة وابتكارية في جميع مجالات التسويق وتطوير الأعمال.", bg: PURPLE_DARK },
                { label: "بيئة الابتكار", text: "أنا ملتزمة بتعزيز بيئة يزدهر فيها الابتكار، مما يضمن أن كل حملة أديرها تحقق نتائج مؤثرة وملموسة.", bg: "transparent", border: `1px solid rgba(123,47,190,0.3)` },
                { label: "استراتيجي + إبداعي", text: "ساعدتني قدراتي على المزج بين التفكير الاستراتيجي والرؤية الإبداعية في تحقيق النجاح في الأسواق شديدة التنافسية.", bg: "transparent", border: `1px solid rgba(123,47,190,0.3)` },
                { label: "السوق السعودي", text: "لدي معرفة عميقة بظروف السوق مع شبكة واسعة من العلاقات في المملكة العربية السعودية.", bg: PURPLE },
                { label: "ذكاء البيانات", text: "الاستخدام الفعّال للتحليل التنافسي والبيانات الإحصائية لتقييم الحملات وتقديم الحلول التي تعزز نمو الإيرادات.", bg: "transparent", border: `1px solid rgba(123,47,190,0.3)`, span: 2 },
              ].map((card, i) => (
                <RevealText key={i} delay={i * 0.1}>
                  <div className="hover-lift" style={{
                    background: card.bg, border: card.border || "none",
                    padding: "28px 24px", gridColumn: card.span ? `span ${card.span}` : "auto", height: "100%"
                  }}>
                    <div style={{ fontSize: 10, color: PURPLE_LIGHT, marginBottom: 10, direction: "rtl", fontFamily: "Handicrafts,serif", letterSpacing: "0.1em" }}>{card.label}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(255,255,255,0.68)", fontFamily: "'Libre Baskerville',serif", direction: "rtl" }}>{card.text}</div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* STATS — solid purple */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ background: PURPLE, padding: "90px 0", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 48, textAlign: "center" }}>
            {[
              ["10+", "سنوات في مجال التسويق وتطوير الأعمال"],
              ["80%", "من قرارات الشراء تُبنى على الإحساس"],
              ["∞", "استراتيجيات تحولت إلى نمو قابل للقياس"],
              ["Win Win Win", "أؤمن بأن التسويق ليس تكلفة بل فرصة"],
            ].map(([num, label], i) => (
              <RevealText key={i} delay={i * 0.1}>
                <div>
                  <div style={{ fontSize: "clamp(40px,4.5vw,66px)", fontWeight: 700, color: WHITE, marginBottom: 10, fontFamily: "Handicrafts,serif" }}>{num}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, fontFamily: "Handicrafts,serif", direction: "rtl" }}>{label}</div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SELF VIEW — two-tone panels */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0F0F0F", padding: "130px 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px" }}>
          <RevealText>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 48, fontFamily: "Handicrafts,serif" }}>§ ٠٣ — كيف أرى نفسي</div>
          </RevealText>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            <div style={{ background: "#1A1A1A", padding: "60px 52px" }}>
              <RevealText>
                <div style={{ fontSize: 26, fontWeight: 700, color: WHITE, marginBottom: 28, lineHeight: 1.3, direction: "rtl", fontFamily: "Handicrafts,serif" }}>كيف أرى نفسي</div>
              </RevealText>
              <RevealText delay={0.1}>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(255,255,255,0.58)", fontFamily: "'Libre Baskerville',serif", direction: "rtl" }}>
                  أرى في نفسي مستشار تسويق متمكن، قوي، وأمين، وقائد فريق مرن لديه معرفة باستراتيجيات تطوير الأعمال وطرق التسويق التقليدية والرقمية
                </p>
              </RevealText>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "32px 0" }} />
              <RevealText delay={0.2}>
                <div style={{ padding: "22px 22px 22px 0", borderRight: `3px solid ${PURPLE}`, direction: "rtl" }}>
                  <p style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(255,255,255,0.45)", fontFamily: "'Libre Baskerville',serif", fontStyle: "italic" }}>
                    "زي كأني براقب بذرة لما تتحول لشجرة، أو كأني برسم لوحة مش متكونة ولا باين ملامحها في البداية، بس بعد ما تكتمل... بشوفها بفخر وبشهد على العظمة وفكرة الخلق"
                  </p>
                </div>
              </RevealText>
            </div>

            <div style={{ background: PURPLE_DARK, padding: "60px 52px" }}>
              <RevealText>
                <div style={{ fontSize: 26, fontWeight: 700, color: WHITE, marginBottom: 28, lineHeight: 1.3, direction: "rtl", fontFamily: "Handicrafts,serif" }}>حب التسويق</div>
              </RevealText>
              <RevealText delay={0.1}>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(255,255,255,0.72)", fontFamily: "'Libre Baskerville',serif", direction: "rtl" }}>
                  بحسه شيء ممتع بقدر بيه أين وأبرز جوانب الجمال في الخدمة أو المنتج الي بسوق له
                </p>
              </RevealText>
              <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "32px 0" }} />
              <RevealText delay={0.2}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 8 }}>
                  {["زيادة المبيعات", "تحقيق الأهداف", "تطوير الأعمال", "الوعي بالعلامات"].map(tag => (
                    <div key={tag} style={{ padding: "12px 14px", border: "1px solid rgba(255,255,255,0.18)", fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "Handicrafts,serif", textAlign: "center", direction: "rtl" }}>{tag}</div>
                  ))}
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* HUMANITY — cream */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="humanity" style={{ background: CREAM, color: DARK, padding: "130px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 90, alignItems: "start" }}>
            <div>
              <RevealText>
                <div style={{ fontSize: 11, color: "rgba(0,0,0,0.32)", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 20, fontFamily: "Handicrafts,serif" }}>§ ٠٤ — الجانب الإنساني</div>
                <div style={{ fontSize: "clamp(38px,4.5vw,60px)", lineHeight: 1.1, marginBottom: 40, fontFamily: "Handicrafts,serif" }}>
                  في الجانب<br /><span style={{ color: PURPLE, fontStyle: "italic" }}>الإنساني</span>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div style={{ background: PURPLE, padding: "30px", marginBottom: 24, color: WHITE }}>
                  <p style={{ fontSize: 14, lineHeight: 1.85, fontFamily: "'Libre Baskerville',serif", direction: "rtl" }}>
                    أتبنى مفهوم العمل الخيري المستدام، حيث أركز على تمكين الأفراد من خلال تعليمهم مهارات مثل التسويق الإلكتروني والتصاميم والأشغال اليدوية، ليتمكنوا من تحقيق دخل مستقل بدلاً من الاعتماد على المساعدات.
                  </p>
                </div>
              </RevealText>

              <RevealText delay={0.3}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["✍️ الكتابة", "✈️ السفر", "🎵 الموسيقى", "🐎 الفروسية", "🌍 نادي الروتاري", "🐾 حقوق الحيوان"].map(tag => (
                    <span key={tag} style={{ padding: "7px 13px", border: `1px solid ${PURPLE}`, fontSize: 12, fontFamily: "Handicrafts,serif", color: PURPLE_DARK }}>{tag}</span>
                  ))}
                </div>
              </RevealText>
            </div>

            <div>
              <RevealText delay={0.15}>
                <p style={{ fontSize: 16, lineHeight: 2.05, color: "rgba(0,0,0,0.58)", fontFamily: "'Libre Baskerville',serif", direction: "rtl", marginBottom: 36 }}>
                  أنا شغوفة بالكتابة، بحب السفر والتعرف على الثقافات المختلفة، بحب الموسيقى، أحب الخيل والفروسية، اعشق الاطفال ومهتمة بمجال تربية الطفل وجودة حياته، عضو في نادي الروتاري العالمي، وناشطة في مجال حقوق الحيوان
                </p>
              </RevealText>

              <RevealText delay={0.25}>
                <div style={{ borderTop: `2px solid ${PURPLE}`, paddingTop: 32 }}>
                  <div style={{ fontSize: 19, fontStyle: "italic", color: PURPLE_DARK, fontFamily: "Handicrafts,serif", lineHeight: 1.65 }}>
                    "أسعى دائمًا لدمج الإبداع بالإنسانية في كل ما أقدمه. اهتم بالتفاصيل الصغيرة التي بتتكون بيها في النهاية لوحة حياتنا"
                  </div>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* CONTACT */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ background: DARK, padding: "160px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: PURPLE }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <RevealText>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 32, fontFamily: "Handicrafts,serif" }}>§ ٠٥ — لنبني معاً</div>
          </RevealText>

          <RevealText delay={0.1}>
            <div className="text-shimmer" style={{ fontSize: "clamp(48px,8vw,108px)", fontWeight: 400, lineHeight: 1, marginBottom: 48, fontFamily: "Handicrafts,serif" }}>
              Win Win Win
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.48)", fontFamily: "'Libre Baskerville',serif", maxWidth: 620, margin: "0 auto 64px", lineHeight: 1.95, direction: "rtl" }}>
              أؤمن بأن التسويق ليس تكلفة بل فرصة، لذلك أعمل على ابتكار شراكات ذكية وحلول مستدامة مثل الأفلييت ماركتنج والتكامل بين العلامات التجارية، بحيث يكون الجميع رابحاً.
            </p>
          </RevealText>

          {/* <RevealText delay={0.3}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:contact@maryamalhakeem.com" className="hover-lift" style={{ display: "inline-block", background: PURPLE, color: WHITE, padding: "18px 52px", fontFamily: "Handicrafts,serif", fontSize: 15, textDecoration: "none", cursor: "none" }}>
                تواصل معي ←
              </a>
              <a href="https://linkedin.com" className="hover-lift" style={{ display: "inline-block", background: "transparent", color: WHITE, padding: "18px 52px", fontFamily: "Handicrafts,serif", fontSize: 15, textDecoration: "none", border: `1px solid rgba(255,255,255,0.18)`, cursor: "none" }}>
                LinkedIn ↗
              </a>
            </div>
          </RevealText> */}
        </div>

        {/* Footer */}
        <div style={{ maxWidth: 1400, margin: "110px auto 0", padding: "32px 64px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "Handicrafts,serif", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2026 مريم أحمد الحكيم
          </div>
          <div style={{ fontFamily: "Handicrafts,serif", fontSize: 12, color: "rgba(255,255,255,0.2)", direction: "rtl" }}>
            مديرة تسويق · استراتيجية · نمو
          </div>
        </div>
      </section>
    </div>
  );
}
