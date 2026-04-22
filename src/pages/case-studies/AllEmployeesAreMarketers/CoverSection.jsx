import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoverSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-animate-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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
      {/* القسم 1: الغلاف */}
      <section className="cs-section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", background: "var(--cream)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ top: "-50px", right: "-100px", left: "auto", width: "400px", height: "400px" }}></div>
        <div className="cs-bg-graphic cs-bg-3" style={{ bottom: "-100px", left: "-50px", top: "auto", width: "500px", height: "500px" }}></div>

        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge cs-animate-up">دراسة حالة</div>
          <h1 className="cs-title cs-animate-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            جميع الموظفين <span>مسوّقون</span> <TrendingUp size={48} color="var(--purple)" />
          </h1>
          <h2 className="cs-subtitle cs-animate-up" style={{ color: "var(--dark)" }}>
            تحويل المجمع الطبي إلى ماكينة نمو مستمر
          </h2>
          <p className="cs-text cs-animate-up" style={{ maxWidth: "800px", margin: "0 auto", fontSize: "22px", lineHeight: "1.8" }}>
            كيف تحوّل تجربة العميل إلى نظام تسويقي وتشغيلي متكامل يرفع الإيرادات بأكثر من <strong className="cs-highlight-text" style={{ fontSize: "40px" }}>500%</strong> خلال أقل من 3 أشهر
          </p>
        </div>
      </section>

      {/* القسم 2: نظرة عامة | Overview */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1"></div>
        <div className="cs-bg-graphic cs-bg-2"></div>

        <div className="cs-container">
          <div className="cs-badge cs-animate-up" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Target size={16} /> نظرة عامة | Overview</div>
          <h3 className="cs-subtitle cs-animate-up">التحدي لم يكن في الخدمة… بل في المنظومة</h3>
          
          <div className="cs-grid-2">
            <div className="cs-animate-up" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="cs-text">
                في عدد من المجمعات الطبية التجميلية التي تضم أقسامًا مثل الأسنان والجلدية، كان التحدي الأساسي واضحًا، لكنه في الوقت نفسه صامت وغير ملحوظ من الخارج. كانت هناك خدمات قوية، وأطباء أكفاء، وفرص كبيرة للنمو، لكن في المقابل كان هناك نقص جوهري: <strong className="cs-highlight-text">غياب نظام تسويقي متكامل يربط كل نقطة تماس مع العميل.</strong>
              </p>
              <p className="cs-text">
                فكانت النتيجة أن كثيرًا من العملاء يأتون إلى المجمع، ينفذون خدمة واحدة، ثم يغادرون دون عودة، ودون ولاء، ودون أن يتحولوا إلى مصدر إحالات، ودون أن يتم استثمار رحلتهم بشكل كامل.
              </p>
            </div>
            
            <div className="cs-big-idea-box cs-animate-up" style={{ padding: "50px 40px", margin: "20px 0" }}>
              <p className="cs-text" style={{ fontWeight: 700, margin: 0, lineHeight: 1.8 }}>
                ومن هنا جاءت الفكرة الأساسية التي قامت عليها التجربة:
                <br /><br />
                <span className="cs-highlight-text" style={{ fontSize: "22px" }}>التسويق ليس وظيفة قسم واحد، بل منظومة تشغيل كاملة تبدأ من أول كلمة يسمعها العميل، ولا تنتهي إلا بعد متابعته وإعادة استهدافه.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 3: الفكرة المحورية | Big Idea */}
      <section className="cs-section" style={{ background: "rgba(123, 47, 190, 0.03)", padding: "120px 0" }}>
        <div className="cs-container">
          <div className="cs-badge cs-animate-up" style={{ background: "rgba(249, 181, 48, 0.15)", color: "var(--dark)", display: "inline-flex", alignItems: "center", gap: "8px" }}><Lightbulb size={16} /> الفكرة المحورية | Big Idea</div>
          <h3 className="cs-subtitle cs-animate-up" style={{ fontSize: "40px", marginBottom: "40px" }}>"جميع الموظفين مسوّقون"</h3>
          
          <p className="cs-text cs-animate-up" style={{ maxWidth: "800px", marginBottom: "50px", fontSize: "20px", lineHeight: "1.9" }}>
            لم تكن هذه الجملة مجرد شعار جميل، بل كانت فلسفة تشغيل كاملة تم زرعها داخل المجمع الطبي، بحيث يتحول كل فرد فيه إلى جزء مباشر من ماكينة النمو.
          </p>

          <div className="cs-grid-4" style={{ gap: "30px", marginBottom: "60px" }}>
            {["الاستقبال = مسوّق", "الكول سنتر = مسوّق", "الطبيب = مسوّق", "موظف المتابعة = مسوّق", "العميل نفسه = مسوّق", "النماذج الورقية = أدوات تسويق"].map((item, index) => (
              <div key={index} className="cs-card cs-animate-up" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "140px", gap: "10px" }}>
                <Users size={28} color="rgba(123, 47, 190, 0.5)" />
                <strong style={{ fontSize: "20px", color: "var(--purple)" }}>{item}</strong>
              </div>
            ))}
          </div>

          <div className="cs-box-yellow cs-animate-up" style={{ padding: "40px" }}>
            <h4 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}><Target size={24} color="var(--dark)" /> الهدف من ذلك كان واضحًا:</h4>
            <p className="cs-text" style={{ margin: 0, fontSize: "20px", lineHeight: "1.8" }}>
              تحويل كل تفاعل داخل المجمع إلى فرصة بيع، أو بناء ثقة، أو ولاء، أو إحالة، أو رفع قيمة العميل، أو عودة مستقبلية، أو إعادة استهداف.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
