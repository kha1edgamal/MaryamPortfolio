import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Repeat, Eye, Headset, UserCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cj-animate", {
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
      {/* القسم 11: القسم الثاني | مسار العميل */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ top: "-100px", left: "0", width: "300px", height: "300px" }}></div>
        <div className="cs-bg-graphic cs-bg-2" style={{ top: "30%", right: "-150px", bottom: "auto", width: "400px", height: "400px" }}></div>

        <div className="cs-container">
          <div className="cs-badge cj-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Repeat size={16} /> القسم الثاني | مسار العميل</div>
          <h3 className="cs-subtitle cj-animate">رحلة العميل كدائرة مغلقة</h3>
          
          <p className="cs-text cj-animate">
            هذا القسم هو قلب الخطة، لأنه يشرح كيف يتحول اهتمام العميل بالإعلان إلى رحلة متكاملة تنتهي بالولاء وإعادة الاستهداف. تم تصميم المسار كدائرة مغلقة:
          </p>

          <div className="cj-animate" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {[
              { num: "01", title: "اهتمام العميل وتفاعله مع الإعلان" },
              { num: "02", title: "وصول العميل" },
              { num: "03", title: "حجز الخدمة" },
              { num: "04", title: "الدخول على الطبيب" },
              { num: "05", title: "متابعة العميل لقياس مدى رضاه" },
              { num: "06", title: "إعادة استهداف العميل في الدعاية" }
            ].map((step, idx) => (
              <div key={idx} className="cs-card" style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px", borderLeft: "4px solid var(--purple)" }}>
                <span style={{ fontSize: "32px", fontWeight: "900", color: "rgba(123, 47, 190, 0.2)", lineHeight: 1 }}>{step.num}</span>
                <span className="cs-text" style={{ fontSize: "18px", fontWeight: "700", margin: 0, color: "var(--dark)" }}>{step.title}</span>
              </div>
            ))}
          </div>

          <div className="cj-animate" style={{ textAlign: "center", marginTop: "40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(180deg)" }}>
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
            </div>
            <p className="cs-text" style={{ fontWeight: 700, color: "var(--purple)", fontSize: "22px" }}>بذلك لم يعد التسويق خطًا مستقيمًا ينتهي بعد الخدمة، بل دورة تبدأ من الإعلان وتعود إليه.</p>
          </div>

        </div>
      </section>

      {/* القسم 12: المرحلة الأولى - اهتمام العميل */}
      <section className="cs-section">
        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge cj-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Eye size={16} /> المرحلة الأولى - اهتمام العميل</div>
          <h3 className="cs-subtitle cj-animate">هنا يبدأ الخيط الأول</h3>
          
          <p className="cs-text cj-animate" style={{ maxWidth: "800px", margin: "0 auto" }}>
            تبدأ الرحلة عندما يرى العميل الإعلان. ليس كل من يرى الإعلان يصبح عميلًا، لكن المهتم يُظهر اهتمامه عبر رسالة، أو اتصال، أو تعليق.
            <br /><br />
            وهنا ننتقل من مرحلة الوعي إلى مرحلة أعمق: <strong className="cs-highlight-text" style={{ fontSize: "24px" }}>مرحلة الاهتمام الفعلي.</strong>
            <br /><br />
            هذا يعني أن الإعلان لا يُقاس بعدد المشاهدات فقط، بل بقدرته على دفع العميل لاتخاذ خطوة.
          </p>

          <div className="cs-funnel cj-animate">
            <div className="cs-funnel-step" style={{ color: "var(--purple)" }}>Ad (إعلان)</div>
            <div className="cs-funnel-arrow">→</div>
            <div className="cs-funnel-step" style={{ color: "var(--dark)" }}>Inquiry (استفسار)</div>
          </div>
        </div>
      </section>

      {/* القسم 13: المرحلة الثانية - وصول العميل | الكول سنتر */}
      <section className="cs-section" style={{ background: "rgba(123, 47, 190, 0.05)" }}>
        <div className="cs-container">
          <div className="cs-badge cj-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Headset size={16} /> المرحلة الثانية - وصول العميل | الكول سنتر</div>
          <h3 className="cs-subtitle cj-animate">الكول سنتر = نقطة الحسم</h3>
          
          <p className="cs-text cj-animate">
            عندما يتواصل العميل، يبدأ دور الكول سنتر. العميل هنا في منطقة وسطى بين الفضول والقرار، ومهمة الموظف: الاستقبال باهتمام، التوجيه، الحفاظ على نبرة راقية، وجعله يشعر بالترحيب لا بالضغط.
          </p>

          <div className="cs-grid-2 mt-4 cj-animate">
            <div className="cs-card">
              <strong style={{ color: "green", fontSize: "18px" }}>الكلمات الراقية المفضلة:</strong>
              <p className="cs-text mt-2" style={{ margin: 0 }}>من فضلك، عزيزتي، حياك، أبشر، نسعد بخدمتك.</p>
            </div>
            <div className="cs-card">
              <strong style={{ color: "red", fontSize: "18px" }}>العبارات غير المناسبة:</strong>
              <p className="cs-text mt-2" style={{ margin: 0 }}>انتي متى موعدك؟ / انت متى تبي تحجز؟</p>
            </div>
          </div>

          <div className="cs-quote cj-animate" style={{ textAlign: "right", margin: "40px 0" }}>
            <h4 style={{ color: "var(--dark)", marginBottom: "20px", fontSize: "20px" }}>نموذج احترافي للرد:</h4>
            <p className="cs-text" style={{ fontStyle: "italic", fontSize: "22px", color: "var(--purple)", margin: 0 }}>
              "مرحبًا، معك سلمى من المجمع الطبي، كيف أقدر أخدمك؟ نعم عزيزتي، متى حابة الموعد؟ ممكن تنتظري ثواني من فضلك أشوف لك الحجوزات... أبشري، نعم متوفر. ممكن تزودينا باسمك ورقم جوالك عشان أحجز لك؟ تم الحجز، ونسعد بخدمتك. حياك."
            </p>
          </div>

          <div className="cj-animate" style={{ textAlign: "center" }}>
            <strong className="cs-title" style={{ fontSize: "28px", color: "var(--dark)" }}>النتيجة: <span style={{ color: "var(--purple)" }}>تحويل الاستفسار إلى حجز فعلي.</span></strong>
          </div>
        </div>
      </section>

      {/* القسم 14 و 15: المرحلة الثالثة - الاستقبال وأدواته */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-3" style={{ top: "0", left: "0", width: "400px", height: "400px" }}></div>
        <div className="cs-bg-graphic cs-bg-1" style={{ bottom: "-100px", right: "-100px", top: "auto", left: "auto" }}></div>

        <div className="cs-container">
          <div className="cs-badge cj-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><UserCheck size={16} /> المرحلة الثالثة - حجز الخدمة + الاستقبال</div>
          <h3 className="cs-subtitle cj-animate">الاستقبال كأداة تسويقية</h3>
          
          <p className="cs-text cj-animate">
            بعد الحجز وحضور العميل، يصبح الاستقبال منصة بيع صامتة مسؤولة عن إعطاء صورة جيدة ومحاولة تحويل العميل لعميل دائم عبر طريقتين:
          </p>

          <div className="cs-grid-2 cj-animate">
            <div className="cs-card" style={{ borderTop: "4px solid var(--purple)" }}>
              <strong style={{ fontSize: "20px", color: "var(--purple)", display: "block", marginBottom: "15px" }}>الطريقة المباشرة:</strong>
              <p className="cs-text" style={{ margin: 0 }}>عرض بروشور العروض بلباقة ("حاب تتطلع على العروض؟").</p>
            </div>
            <div className="cs-card" style={{ borderTop: "4px solid var(--yellow)" }}>
              <strong style={{ fontSize: "20px", color: "var(--dark)", display: "block", marginBottom: "15px" }}>الطريقة غير المباشرة: <span style={{ fontWeight: 400, color: "gray", fontSize: "16px" }}>(الأكثر ذكاءً)</span></strong>
              <p className="cs-text" style={{ margin: 0 }}>إخبار مريض الأسنان بحصوله على كشف مجاني في الجلدية، وتشجيعه على الانضمام لنظام الولاء وترشيح الأصدقاء.</p>
            </div>
          </div>

          <h3 className="cs-subtitle cj-animate mt-6" style={{ marginTop: "80px" }}>من الزائر… إلى شريك في الترويج</h3>
          <p className="cs-text cj-animate">من أهم الأدوات التي تم تفعيلها داخل الاستقبال:</p>

          <div className="cs-grid-2 cj-animate">
            <div className="cs-box-yellow" style={{ marginTop: 0 }}>
              <h4 style={{ color: "var(--dark)", fontSize: "22px", marginBottom: "15px" }}>1. نموذج ترشيح الأصدقاء:</h4>
              <p className="cs-text" style={{ margin: 0 }}>
                تسجيل <strong style={{ color: "var(--purple)" }}>10 أرقام</strong> لأصدقاء، وعند اكتمالها يحصل العميل على خصم <strong style={{ color: "var(--purple)" }}>50%</strong> على خدمات معينة. العميل هنا أصبح شريكًا في الترويج.
              </p>
            </div>
            <div className="cs-box-yellow" style={{ marginTop: 0, background: "rgba(123, 47, 190, 0.05)", borderLeftColor: "var(--purple)" }}>
              <h4 style={{ color: "var(--purple)", fontSize: "22px", marginBottom: "15px" }}>2. كرت الولاء:</h4>
              <p className="cs-text" style={{ margin: 0 }}>
                كرت يحتوي على <strong style={{ color: "var(--yellow)", textShadow: "0 0 1px black" }}>5 دوائر</strong> (كل دائرة = <strong style={{ color: "var(--dark)" }}>100 ريال</strong>). عند إحالة عميل جديد، تُعلم دائرة للعميل الأول ليحصل على خدمات بقيمة <strong style={{ color: "var(--dark)" }}>100 ريال</strong>، ويحصل العميل الجديد على خصم <strong style={{ color: "var(--purple)" }}>30%</strong>. عند اكتمال الخانات، الخصم يصل لـ <strong style={{ color: "var(--purple)" }}>30%</strong> على كل الخدمات.
              </p>
            </div>
          </div>

          <div className="cj-animate" style={{ textAlign: "center", marginTop: "40px" }}>
            <strong className="cs-title" style={{ fontSize: "32px", color: "var(--dark)" }}>النتيجة: <span style={{ color: "var(--purple)" }}>تحويل العميل إلى مسوّق دائم.</span></strong>
          </div>
        </div>
      </section>
    </div>
  );
}
