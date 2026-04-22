import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waypoints, Stethoscope, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MarketingTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tl-animate", {
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
      {/* القسم 4: خلفية عن الفكرة */}
      <section className="cs-section" style={{ background: "var(--purple)", color: "var(--white)" }}>
        <div className="cs-container">
          <div className="cs-badge tl-animate" style={{ background: "var(--yellow)", color: "var(--dark)", display: "inline-flex", alignItems: "center", gap: "8px" }}><Lightbulb size={16} /> خلفية عن الفكرة</div>
          <h3 className="cs-subtitle tl-animate" style={{ color: "var(--white)" }}>من تسويق منفصل… إلى ثقافة تشغيلية يومية</h3>
          
          <div className="tl-animate" style={{ maxWidth: "900px" }}>
            <p className="cs-text" style={{ color: "rgba(255,255,255,0.9)" }}>
              في كثير من المنشآت الطبية، يُنظر إلى التسويق على أنه شيء منفصل عن التشغيل اليومي، وغالبًا ما يُختزل في الإعلانات، أو السوشيال ميديا، أو العروض، أو المصمم، أو موظف التسويق وحده. لكن في هذه التجربة، تم التعامل مع التسويق على أنه ثقافة تشغيلية يومية، وليس مجرد حملات إعلانية متفرقة.
            </p>
          </div>

          <div className="cs-quote tl-animate" style={{ background: "transparent", border: "2px solid var(--yellow)", color: "var(--yellow)" }}>
            العميل لا يشتري بسبب الإعلان فقط، بل بسبب التجربة الكاملة التي يمر بها.
          </div>

          <div className="tl-animate" style={{ maxWidth: "900px" }}>
            <p className="cs-text" style={{ color: "rgba(255,255,255,0.9)" }}>
              لذلك تم بناء مسار تشغيلي وتسويقي متكامل يجعل كل نقطة احتكاك مع العميل فرصة لتحقيق واحد أو أكثر من الأهداف التالية: كسب الثقة، رفع قيمة الفاتورة، زيادة الولاء، تحفيز الإحالات، إعادة الاستهداف، وتحويل العميل من زائر لمرة واحدة إلى عميل مستدام.
            </p>
          </div>
        </div>
      </section>

      {/* القسم 5: الهيكل العام للمسار التسويقي */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-badge tl-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Waypoints size={16} /> الهيكل العام للمسار التسويقي</div>
          <h3 className="cs-subtitle tl-animate">أربعة أقسام صنعت المنظومة</h3>
          <p className="cs-text tl-animate">
            تم تقسيم المسار التسويقي داخل المجمع الطبي إلى أربعة أقسام رئيسية:
          </p>

          <div className="cs-grid-4 tl-animate" style={{ position: "relative" }}>
            {/* Connecting Line behind Blocks */}
            <div style={{ position: "absolute", top: "50%", left: "0", right: "0", height: "4px", background: "rgba(123, 47, 190, 0.1)", zIndex: 0, transform: "translateY(-50%)" }} className="hide-on-mobile"></div>
            
            {[
              "القسم الأول: نبذة عن التسويق الطبي",
              "القسم الثاني: مسار العميل",
              "القسم الثالث: النماذج التشغيلية والمطبوعة",
              "القسم الرابع: التحليل والخطة التسويقية"
            ].map((text, idx) => (
              <div key={idx} className="cs-card" style={{ zIndex: 1, position: "relative", textAlign: "center", borderTop: "4px solid var(--purple)" }}>
                <div className="cs-card-num">٠{idx + 1}</div>
                <strong style={{ fontSize: "18px", color: "var(--dark)" }}>{text}</strong>
              </div>
            ))}
          </div>

          <p className="cs-text tl-animate mt-6">
            ولأن هذه الدراسة مبنية على التطبيق العملي الحقيقي، فقد تم بناء كل قسم بطريقة تخدم القسم الذي يليه، ليعمل الجميع داخل منظومة واحدة مترابطة.
          </p>
        </div>
      </section>

      {/* القسم 6: القسم الأول | نبذة عن التسويق الطبي */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ top: "-50px", left: "-50px", width: "300px", height: "300px" }}></div>
        <div className="cs-bg-graphic cs-bg-2" style={{ bottom: "-100px", right: "-100px", width: "400px", height: "400px" }}></div>

        <div className="cs-container">
          <div className="cs-badge tl-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Stethoscope size={16} /> القسم الأول | نبذة عن التسويق الطبي</div>
          <h3 className="cs-subtitle tl-animate">ما هو التسويق الطبي؟</h3>
          
          <div className="cs-grid-2 tl-animate">
            <div>
              <p className="cs-text">
                يُعتبر التسويق من أهم الأقسام في أي منشأة، لأن المنشأة مهما كانت جودة خدماتها، لن تستطيع أن تجني الأرباح أو تنتشر بقوة بين الناس إلا إذا كانت على دراية كافية بأساليب هذا المجال وأسراره.
              </p>
              <p className="cs-text">
                وفي المجال الطبي تحديدًا، يصبح التسويق أكثر حساسية وأهمية، لأنه لا يتعامل فقط مع خدمة أو منتج، بل يتعامل مع صحة الإنسان، وثقته، ومخاوفه، وراحته، وصورته عن نفسه، وأحيانًا ألمه أو قلقه.
              </p>
            </div>
            
            <div className="cs-box-yellow" style={{ marginTop: 0 }}>
              <p className="cs-text" style={{ margin: 0, fontWeight: 700 }}>
                ولهذا فإن التسويق الطبي لا يعني مجرد عرض خدمة أو إعلان عن سعر، بل هو مزيج من <span className="cs-highlight-text" style={{ color: "var(--purple)", fontSize: "20px" }}>التثقيف، والطمأنة، وبناء الثقة، وخلق الاحتياج، وتقديم الحل المناسب، وتحريك المشاعر النفسية</span> بطريقة راقية ومدروسة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
