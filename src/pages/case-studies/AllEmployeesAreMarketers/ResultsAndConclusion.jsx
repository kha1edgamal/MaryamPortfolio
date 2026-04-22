import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart, Users, CheckCircle, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsAndConclusion() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rc-animate", {
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
      {/* القسم 23: القسم الرابع | التحليل والخطة التسويقية */}
      <section className="cs-section" style={{ background: "rgba(249, 181, 48, 0.1)" }}>
        <div className="cs-container">
          <div className="cs-badge rc-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><BarChart size={16} /> القسم الرابع | التحليل والخطة التسويقية</div>
          <h3 className="cs-subtitle rc-animate">التحليل، القياس، والأهداف</h3>

          <div className="cs-grid-4 rc-animate">
            <div className="cs-card" style={{ borderTop: "4px solid var(--purple)" }}>
              <div style={{ fontWeight: "900", color: "var(--purple)", marginBottom: "10px", fontSize: "18px" }}>1. التحليل والقياس:</div>
              <p className="cs-text" style={{ fontSize: "16px", margin: 0 }}>تتبع مسار العملاء، الحجوزات، رضا العملاء، والتحويلات بين الأقسام.</p>
            </div>
            <div className="cs-card" style={{ borderTop: "4px solid var(--purple)" }}>
              <div style={{ fontWeight: "900", color: "var(--purple)", marginBottom: "10px", fontSize: "18px" }}>2. الأهداف التسويقية:</div>
              <p className="cs-text" style={{ fontSize: "16px", margin: 0 }}>رفع قيمة العميل، بناء ولاء، وخلق إحالات.</p>
            </div>
            <div className="cs-card" style={{ borderTop: "4px solid var(--purple)" }}>
              <div style={{ fontWeight: "900", color: "var(--purple)", marginBottom: "10px", fontSize: "18px" }}>3. الخطة التسويقية:</div>
              <p className="cs-text" style={{ fontSize: "16px", margin: 0 }}>ربط الإعلان بالتشغيل وتجربة العميل.</p>
            </div>
            <div className="cs-card" style={{ borderTop: "4px solid var(--purple)" }}>
              <div style={{ fontWeight: "900", color: "var(--purple)", marginBottom: "10px", fontSize: "18px" }}>4. الدعاية والإعلان:</div>
              <p className="cs-text" style={{ fontSize: "16px", margin: 0 }}>التعامل معها كجزء من المنظومة لا كحل منفصل.</p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 24: التحول الداخلي | Culture Shift */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ width: "300px", height: "300px", top: "-100px", left: "-50px" }}></div>

        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge rc-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Users size={16} /> التحول الداخلي | Culture Shift</div>
          <h3 className="cs-subtitle rc-animate">عندما يشعر الجميع أن المكان مكانهم</h3>

          <p className="cs-text rc-animate" style={{ maxWidth: "800px", margin: "0 auto" }}>
            التسويق مسؤولية موزعة على الجميع. لتعزيز ذلك، تم إقامة اجتماع شهري خارج بيئة العمل الرسمية (استراحة) لكسر الحواجز، تعزيز الانتماء، تبادل الملاحظات، وتكريم الموظف المثالي. النتيجة: الجميع يعمل بحب وكأن المكان مكانهم.
          </p>
        </div>
      </section>

      {/* القسم 25: النتائج | Results */}
      <section className="cs-section" style={{ background: "var(--purple)", color: "var(--white)", textAlign: "center" }}>
        <div className="cs-container">
          <div className="cs-badge rc-animate" style={{ background: "var(--yellow)", color: "var(--dark)", display: "inline-flex", alignItems: "center", gap: "8px" }}><Award size={16} /> النتائج | Results</div>
          <h3 className="cs-subtitle rc-animate" style={{ color: "var(--white)", fontSize: "36px" }}>
            +500% خلال أقل من 3 أشهر
          </h3>

          <div className="cs-huge-number rc-animate" style={{ color: "var(--yellow)", textShadow: "none" }}>+500%</div>

          <p className="cs-text rc-animate" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "800px", margin: "0 auto 30px" }}>
            زيادة أكثر من 500% في الإيرادات، لم تكن نتيجة إعلان واحد، بل تراكب منظومة كاملة.
          </p>

          <div className="cs-card rc-animate" style={{ background: "rgba(255,255,255,0.1)", border: "none", maxWidth: "800px", margin: "0 auto" }}>
            <strong style={{ color: "var(--yellow)", fontSize: "20px", display: "block", marginBottom: "15px" }}>النتائج النوعية:</strong>
            <p className="cs-text" style={{ color: "var(--white)", margin: 0 }}>
              ارتفاع معدل العودة، زيادة متوسط فاتورة العميل، نمو الإحالات، وبيئة عمل عالية الانتماء.
            </p>
          </div>
        </div>
      </section>

      {/* القسم 26 و 27: لماذا نجحت والخلاصة */}
      <section className="cs-section" style={{ background: "var(--cream)" }}>
        <div className="cs-container">
          <div className="cs-grid-2 rc-animate">
            <div>
              <div className="cs-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><CheckCircle size={16} /> لماذا نجحت هذه الخطة؟</div>
              <h3 className="cs-subtitle">لأنها لم تنظر إلى العميل كفاتورة… بل كرحلة</h3>
              <p className="cs-text">
                نجحت لأنها فهمت أن النمو الحقيقي يأتي من رفع قيمة العميل، تكرار الزيارة، الإحالات، وتفعيل التسويق الداخلي وتجربة العميل، وليس الاعتماد على الإعلان الخارجي فقط.
              </p>
            </div>
            <div>
              <div className="cs-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Award size={16} /> الخلاصة | Conclusion</div>
              <h3 className="cs-subtitle">التسويق ليس إعلانًا فقط</h3>
              <p className="cs-text">
                التسويق نظام متكامل يبدأ من أول كلمة وينتهي بولاء العميل. عندما يصبح كل شخص مسوقاً، تتحول المنشأة لماكينة تصنع النمو بشكل مستمر. كل نقطة في الرحلة تؤدي دورًا محسوبًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 28: خاتمة مختصرة احترافية */}
      <section className="cs-section" style={{ background: "var(--white)", paddingBottom: "150px" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-2" style={{ width: "500px", height: "500px", top: "-150px", right: "-100px" }}></div>
        <div className="cs-bg-graphic cs-bg-3" style={{ bottom: "0", left: "0", width: "400px", height: "400px", top: "auto" }}></div>

        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge rc-animate">(صياغة للبروفايل أو نهاية الكيس ستادي)</div>

          <div className="cs-quote cs-quote-purple rc-animate" style={{ maxWidth: "900px", margin: "40px auto", textAlign: "right", borderRadius: "30px", borderLeft: "8px solid var(--purple)" }}>
            <h3 style={{ color: "var(--dark)", fontSize: "24px", marginBottom: "20px" }}>الخاتمة</h3>
            <p className="cs-text" style={{ fontSize: "20px", lineHeight: 2, margin: 0, fontWeight: "400" }}>
              قمتُ ببناء وتنفيذ مسار تسويقي وتشغيلي متكامل لمجمع طبي تجميلي يضم قسمي الأسنان والجلدية، قائم على فلسفة أن كل فرد داخل المنشأة هو مسوّق بطريقته، من الكول سنتر والاستقبال إلى الطبيب والمتابعة. شمل النموذج تثقيف العميل، وتحسين لغة التواصل، ورفع قيمة العميل عبر ربط الأقسام، وتفعيل الإحالات ونقاط الولاء، وقياس الرضا، وإعادة الاستهداف الإعلاني. كما تم دعم التنفيذ باجتماعات شهرية وتحفيز داخلي وتكريم للموظف المثالي، مما خلق بيئة عمل عالية الانتماء، وأسهم في رفع دخل العيادات خلال أقل من 3 أشهر إلى أكثر من 500% من دخلها الاعتيادي.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
