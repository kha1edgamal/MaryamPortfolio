import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Heart, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ClinicalExperience() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ce-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* القسم 16: المرحلة الرابعة - الدخول على الطبيب */}
      <section className="cs-section" style={{ background: "var(--purple)", color: "var(--white)" }}>
        <div className="cs-container">
          <div className="cs-badge ce-animate" style={{ background: "var(--yellow)", color: "var(--dark)", display: "inline-flex", alignItems: "center", gap: "8px" }}><Activity size={16} /> المرحلة الرابعة - الدخول على الطبيب</div>
          <h3 className="cs-subtitle ce-animate" style={{ color: "var(--white)" }}>هنا يحدث التأثير الحقيقي</h3>
          
          <p className="cs-text ce-animate" style={{ color: "rgba(255,255,255,0.9)" }}>
            في هذه المرحلة، <strong style={{ color: "var(--yellow)" }}>الطبيب ليس منفذًا للخدمة فقط، بل طرف أساسي في المسار التسويقي</strong> (بناء ثقة، توسيع وعي، تقديم حلول، تحويل الرضا لاستدامة).
          </p>
          <p className="cs-text ce-animate" style={{ color: "rgba(255,255,255,0.9)" }}>
            يبدأ الطبيب بتنفيذ الخدمة بأعلى جودة، ثم يفتح حواراً لإقناع العميل بخدمات إضافية <em>يحتاجها فعلياً</em>. التركيز هنا أن العناية الدورية توفر الوقت والمال، وتنعكس على سعادة العميل وثقته بنفسه.
          </p>

          <div className="cs-grid-3 mt-6 ce-animate">
            <div className="cs-card" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
              <div style={{ color: "var(--yellow)", fontSize: "16px", fontWeight: "700", marginBottom: "10px" }}>Before / قبل الخدمة</div>
              <p className="cs-text" style={{ color: "var(--white)", fontSize: "16px" }}>ترحيب، استماع دقيق، كسر الحاجز النفسي.</p>
            </div>
            <div className="cs-card" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
              <div style={{ color: "var(--yellow)", fontSize: "16px", fontWeight: "700", marginBottom: "10px" }}>During / أثناء الخدمة</div>
              <p className="cs-text" style={{ color: "var(--white)", fontSize: "16px" }}>تنفيذ عالي الجودة مع شرح مطمئن للإجراء الطبي.</p>
            </div>
            <div className="cs-card" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
              <div style={{ color: "var(--yellow)", fontSize: "16px", fontWeight: "700", marginBottom: "10px" }}>After / بعد الخدمة</div>
              <p className="cs-text" style={{ color: "var(--white)", fontSize: "16px" }}>فتح حوار للحلول الإضافية وصياغة الخطة العلاجية الشاملة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 17: البعد النفسي + الخطة العلاجية */}
      <section className="cs-section" style={{ background: "var(--cream)" }}>
        <div className="cs-container">
          <div className="cs-badge ce-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Heart size={16} /> البعد النفسي + الخطة العلاجية</div>
          <h3 className="cs-subtitle ce-animate">خلق احتياج + تقديم حل</h3>
          
          <div className="cs-grid-2 ce-animate">
            <div>
              <p className="cs-text">
                التسويق يخاطب الراحة، السعادة، والثقة بالنفس. من هنا جاءت أهمية <strong className="cs-highlight-text">الخطة العلاجية الشاملة</strong>.
              </p>
              <p className="cs-text">
                كتابة خطة علاجية كاملة (حتى لو لم تُنفذ فوراً) يشعر العميل بالاهتمام ويوضح له حجم احتياجه. الذكاء ليس في تضخيم التكلفة، بل في طرح البدائل وتحديد الأولويات.
              </p>
            </div>
            
            <div className="cs-card" style={{ background: "var(--white)", border: "2px dashed var(--purple)", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="cs-text" style={{ marginBottom: "15px" }}>إذا كانت الخطة بـ <strong style={{ color: "var(--dark)", fontSize: "24px" }}>15,000 ريال</strong></p>
              <p className="cs-text" style={{ fontSize: "16px", color: "gray" }}>واقترح الطبيب البدء بالأهم لتصبح</p>
              <div style={{ fontSize: "48px", fontWeight: "900", color: "var(--purple)", margin: "10px 0" }}>7,000 <span style={{ fontSize: "20px", color: "var(--dark)" }}>ريال</span></div>
              <p className="cs-text" style={{ marginTop: "15px", fontWeight: "700" }}>سيشعر العميل أن الطبيب صديق يبحث عن مصلحته لا استنزافه.</p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 18 و 19: Cross-Selling */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-2" style={{ top: "-100px", left: "-50px" }}></div>
        <div className="cs-bg-graphic cs-bg-1" style={{ bottom: "-100px", right: "-100px", top: "auto", left: "auto" }}></div>

        <div className="cs-container">
          <h3 className="cs-subtitle ce-animate" style={{ textAlign: "center", marginBottom: "60px", fontSize: "40px" }}><Sparkles size={32} style={{ verticalAlign: 'middle', marginRight: '10px' }} color="var(--purple)" /> Cross-Selling</h3>
          
          <div className="cs-grid-2 ce-animate">
            <div className="cs-box-yellow" style={{ background: "rgba(123, 47, 190, 0.03)", borderLeftColor: "var(--purple)" }}>
              <div className="cs-badge" style={{ background: "var(--purple)", color: "var(--white)" }}>قسم الأسنان</div>
              <h4 style={{ color: "var(--dark)", fontSize: "22px", marginBottom: "15px" }}>من خدمة واحدة إلى مسار متكامل</h4>
              
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px", margin: "20px 0" }}>
                <span style={{ background: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)" }}>تنظيف</span>
                <span style={{ color: "var(--purple)" }}>←</span>
                <span style={{ background: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)" }}>تبييض</span>
                <span style={{ color: "var(--purple)" }}>←</span>
                <span style={{ background: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)" }}>قوالب</span>
                <span style={{ color: "var(--purple)" }}>←</span>
                <span style={{ background: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)" }}>تجميل</span>
              </div>
              
              <p className="cs-text" style={{ fontSize: "16px" }}>
                إذا جاء العميل لتنظيف الأسنان، يُفتح له مسار متكامل. وحتى لو لم ينفذها، أصبح يدرك أن المجمع يمتلك حلولاً متكاملة.
                وقبل خروجه، يُذكّر بكشف الجلدية المجاني ونقاط الولاء، ليتم دفعه برفق نحو الإحالات والعودة.
              </p>
            </div>

            <div className="cs-box-yellow">
              <div className="cs-badge" style={{ background: "var(--yellow)", color: "var(--dark)" }}>قسم الجلدية</div>
              <h4 style={{ color: "var(--dark)", fontSize: "22px", marginBottom: "15px" }}>خدمات مدخلية تقود إلى أعلى قيمة</h4>
              
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px", margin: "20px 0" }}>
                <span style={{ background: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)", fontSize: "14px" }}>ليزر كربوني / تنظيف</span>
                <span style={{ color: "var(--yellow)", fontWeight: "900" }}>بوابة لـ</span>
                <span style={{ background: "var(--dark)", color: "var(--white)", padding: "10px 15px", borderRadius: "10px", fontWeight: "700", border: "1px solid rgba(0,0,0,0.1)", fontSize: "14px" }}>فيلر / بوتكس</span>
              </div>
              
              <p className="cs-text" style={{ fontSize: "16px" }}>
                تنفيذ الخدمة المطلوبة، ثم تعريف العميل بخدمات "مدخلية" أسعارها في المتناول كبوابة لخدمات أعلى قيمة لاحقًا. مع إعداد خطة علاجية وتذكيره بنقاط الولاء وكشف الأسنان المجاني.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
