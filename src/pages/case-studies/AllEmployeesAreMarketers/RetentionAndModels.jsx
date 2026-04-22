import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircleHeart, RefreshCw, ClipboardList } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RetentionAndModels() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rm-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
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
      {/* القسم 20: المرحلة الخامسة - متابعة العميل */}
      <section className="cs-section">
        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge rm-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><MessageCircleHeart size={16} /> المرحلة الخامسة - متابعة العميل</div>
          <h3 className="cs-subtitle rm-animate">بعد الخروج… لا ينتهي الدور</h3>
          
          <p className="cs-text rm-animate" style={{ maxWidth: "800px", margin: "0 auto" }}>
            قياس الرضا، الاستماع للرأي، وإشعار العميل بأهميته. الاتصال بالعميل بعد مغادرته وتعبئة نموذج الرضا يوصل رسالة ضمنية قوية:
          </p>

          <div className="cs-quote rm-animate" style={{ maxWidth: "800px", margin: "40px auto", color: "var(--purple)" }}>
            رأيك مهم، وتجربتك تهمنا، ونريد أن نسمع منك.
          </div>
        </div>
      </section>

      {/* القسم 21: المرحلة السادسة - إعادة الاستهداف */}
      <section className="cs-section" style={{ background: "rgba(123, 47, 190, 0.05)" }}>
        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge rm-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><RefreshCw size={16} /> المرحلة السادسة - إعادة الاستهداف</div>
          <h3 className="cs-subtitle rm-animate">إعادة إدخال العميل إلى الدائرة</h3>
          
          <div className="rm-animate" style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2v6h-6"/>
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            </svg>
          </div>

          <p className="cs-text rm-animate" style={{ maxWidth: "800px", margin: "0 auto" }}>
            العميل الذي مر بكل المراحل يجب أن يعاد استهدافه إعلانيًا بعروض ورسائل مخصصة ليبقى المجمع في ذهنه. الدائرة تبدأ من الإعلان وتعود إليه.
          </p>
        </div>
      </section>

      {/* القسم 22: القسم الثالث | النماذج التشغيلية */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ top: "-100px", left: "-100px" }}></div>
        <div className="cs-bg-graphic cs-bg-3" style={{ bottom: "0", right: "0", top: "auto", left: "auto", width: "400px", height: "400px" }}></div>

        <div className="cs-container">
          <div className="cs-badge rm-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><ClipboardList size={16} /> القسم الثالث | النماذج التشغيلية</div>
          <h3 className="cs-subtitle rm-animate">عندما يتحول التسويق من اجتهاد… إلى نظام</h3>
          
          <p className="cs-text rm-animate">
            لم تكن مجرد أوراق، بل أدوات تشغيل وتسويق تحول العمل لجهد قابل للقياس:
          </p>

          <div className="cs-grid-8 rm-animate">
            {[
              "نموذج تسجيل الأرقام",
              "نموذج المهمات اليومية",
              "نموذج قياس رضا العملاء",
              "نموذج خدمة مجانية مقابل الترشيحات",
              "نموذج ولاء العملاء",
              "نموذج تسجيل الشركات والبطاقات",
              "نموذج مسار التسويق الميداني",
              "نموذج الخدمات المنفذة يومياً"
            ].map((model, i) => (
              <div key={i} className="cs-card" style={{ display: "flex", alignItems: "center", gap: "15px", padding: "20px" }}>
                <div style={{ background: "var(--yellow)", color: "var(--dark)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "var(--dark)" }}>{model}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
