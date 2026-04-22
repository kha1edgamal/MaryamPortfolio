import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpenCheck, Gift, Share2, Shuffle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Approaches() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ap-animate", {
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
      {/* القسم 7: الأسلوب الأول - تثقيف المريض */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-badge ap-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><BookOpenCheck size={16} /> الأسلوب الأول - تثقيف المريض</div>
          <h3 className="cs-subtitle ap-animate">التثقيف كمدخل لبناء الثقة</h3>
          
          <div className="cs-grid-2 ap-animate">
            <div>
              <p className="cs-text">
                أول أسلوب تم الاعتماد عليه هو أسلوب تثقيف المريض. يقوم هذا الأسلوب على فكرة أن المريض كلما فهم أكثر طبيعة المشكلة، وطريقة العلاج، وفوائد الخدمة، وما يميز خدمات المجمع عن المنافسين، زادت ثقته وأصبح أكثر استعدادًا لاتخاذ القرار.
              </p>
              
              <div className="cs-box-yellow mt-4">
                <strong style={{ display: "block", marginBottom: "10px", color: "var(--dark)" }}>وسائل التطبيق:</strong>
                <ul className="cs-text" style={{ paddingRight: "20px", marginBottom: 0 }}>
                  <li>تقديم محاضرات مجانية وشرح مبسط للخدمات.</li>
                  <li>استخدام المنشورات والبروشورات التثقيفية.</li>
                  <li>دور الطبيب الأساسي داخل العيادة في توضيح الفوائد العلاجية بشفافية.</li>
                </ul>
              </div>
            </div>
            
            <div className="cs-big-idea-box" style={{ marginTop: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="cs-text" style={{ fontWeight: 700, margin: 0 }}>
                الهدف من هذا الأسلوب كان واضحًا:
                <br /><br />
                <span className="cs-highlight-text" style={{ fontSize: "28px", lineHeight: 1.4 }}>تحويل المريض من شخص متردد إلى شخص مقتنع.</span>
              </p>
              <p className="cs-text mt-4">
                العميل في المجال الطبي لا يبحث فقط عن السعر، بل يبحث عن الفهم، والأمان، والمصداقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 8: الأسلوب الثاني - تقديم بعض الخدمات المجانية */}
      <section className="cs-section" style={{ background: "rgba(155, 89, 212, 0.03)", padding: "120px 0" }}>
        <div className="cs-container">
          <div className="cs-badge ap-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Gift size={16} /> الأسلوب الثاني - تقديم بعض الخدمات المجانية</div>
          <h3 className="cs-subtitle ap-animate" style={{ marginBottom: "40px" }}>الخدمة المجانية ليست تكلفة… بل باب دخول</h3>
          
          <div className="cs-grid-2" style={{ alignItems: "center", gap: "60px" }}>
            <div className="ap-animate">
              <p className="cs-text" style={{ fontSize: "20px", lineHeight: 1.9 }}>
                الأسلوب الثاني هو تقديم بعض الخدمات المجانية، وهو من أكثر الأساليب الذكية لاجتذاب الأشخاص؛ لأنه يزيل الحاجز النفسي الأول بين العميل والمنشأة.
              </p>
              <div className="cs-card mt-6" style={{ display: "inline-block", padding: "25px 30px" }}>
                <strong className="cs-highlight-text" style={{ fontSize: "20px" }}>أمثلة:</strong> <span style={{ fontSize: "18px" }}>قياس ضغط الدم، قياس خفقان القلب، قياس نسبة الدهون، استشارات بسيطة، والكشف المجاني في قسم آخر.</span>
              </div>
            </div>

            <div className="ap-animate">
              <p className="cs-text" style={{ fontSize: "18px" }}>
                هذه الخدمات لم تكن تُقدَّم بوصفها تكلفة، بل كأداة لخلق زيارات أكثر، وتجربة أولى إيجابية، وانطباع مريح. وكان للطبيب دور في منح العميل بعض الخصومات أو الخدمات المجانية البسيطة لكسب صداقته وولائه. عندما يحصل العميل على شيء ذي قيمة دون مقابل، يشعر أن المكان لا يفكر فقط في البيع.
              </p>
              <div className="cs-quote cs-quote-purple mt-6" style={{ margin: 0, padding: "30px" }}>
                هنا يحدث التحول المهم: <strong style={{ display: "block", marginTop: "10px", fontSize: "24px" }}>من عميل متردد إلى عميل قريب نفسيًا من المنشأة.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* القسم 9: الأسلوب الثالث - التسويق بالإحالة */}
      <section className="cs-section" style={{ background: "var(--white)" }}>
        {/* Ambient Effects */}
        <div className="cs-bg-graphic cs-bg-1" style={{ width: "350px", height: "350px", top: "-100px", left: "-100px" }}></div>
        <div className="cs-bg-graphic cs-bg-3" style={{ bottom: "-150px", right: "-100px", top: "auto", left: "auto" }}></div>

        <div className="cs-container" style={{ textAlign: "center" }}>
          <div className="cs-badge ap-animate" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><Share2 size={16} /> الأسلوب الثالث - التسويق بالإحالة</div>
          <h3 className="cs-subtitle ap-animate">كل عميل يمكن أن يصبح قناة تسويقية</h3>
          
          <p className="cs-text ap-animate" style={{ maxWidth: "800px", margin: "0 auto" }}>
            الأسلوب الثالث كان قائمًا على فكرة قوية جدًا: تصميم نظام ذكي يمنح العميل مزايا أو خصومات إذا ساهم في جلب عميل جديد.
            <br /><br />
            تنوعت صور هذا الأسلوب بين خصم على خدمة، عرض خاص لمن يحضر معه صديقاً، أو مكافآت مستمرة مقابل الإحالات. هذا النوع (التسويق الشفهي/الفيروسي) يجعل اسم العيادة ينتشر في المجتمع لأن توصية العميل لصديقه أقوى نفسيًا من الإعلان.
          </p>

          <h4 className="cs-title ap-animate mt-6" style={{ fontSize: "32px", color: "var(--purple)" }}>
            النتيجة: تحول العملاء إلى قنوات تسويقية بشرية نشطة.
          </h4>
        </div>
      </section>

      {/* القسم 10: الأسلوب الرابع - العروض وربط الأقسام */}
      <section className="cs-section" style={{ background: "var(--purple)", color: "var(--white)" }}>
        <div className="cs-container">
          <div className="cs-badge ap-animate" style={{ background: "var(--yellow)", color: "var(--dark)", display: "inline-flex", alignItems: "center", gap: "8px" }}><Shuffle size={16} /> الأسلوب الرابع - العروض وربط الأقسام</div>
          <h3 className="cs-subtitle ap-animate" style={{ color: "var(--white)" }}>رفع قيمة العميل من خلال الربط بين الأقسام</h3>
          
          <p className="cs-text ap-animate" style={{ color: "rgba(255,255,255,0.9)" }}>
            هذه كانت من أقوى النقاط في الاستراتيجية. لم يكن الهدف من العروض زيادة عدد العملاء فقط، بل <strong style={{ color: "var(--yellow)" }}>رفع قيمة العميل (Customer Lifetime Value) من خلال الربط بين الأقسام.</strong>
          </p>

          <div className="cs-grid-2 ap-animate">
            <div className="cs-card" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <h4 style={{ color: "var(--yellow)", fontSize: "20px", marginBottom: "15px" }}>مثال تطبيقي واضح:</h4>
              <p className="cs-text" style={{ color: "var(--white)", margin: 0 }}>
                إذا جاء العميل لتنظيف أسنان بقيمة <strong style={{ color: "var(--yellow)", fontSize: "24px" }}>100 ريال</strong>، يُمنح كشفاً مجانياً في قسم الجلدية. عند دخوله الجلدية، يتم إقناعه بخدمة إضافية يحتاجها (مثل تنظيف البشرة) بقيمة <strong style={{ color: "var(--yellow)", fontSize: "24px" }}>150 ريال</strong>.
              </p>
            </div>
            
            <div className="cs-card" style={{ background: "var(--yellow)", color: "var(--dark)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <p style={{ fontSize: "20px", fontWeight: "700", margin: 0 }}>وهنا تتحول قيمة العميل من</p>
              <div style={{ fontSize: "40px", fontWeight: "900", direction: "ltr", margin: "10px 0", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--purple)", textDecoration: "line-through", opacity: 0.7 }}>100</span> <span>→</span> 250
              </div>
              <p style={{ fontSize: "24px", fontWeight: "900", margin: 0 }}>ريال</p>
            </div>
          </div>

          <p className="cs-text ap-animate mt-6" style={{ color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "800px", margin: "40px auto 0" }}>
            ما حدث هنا هو استغلال نفس الزيارة لصناعة قيمة أعلى، وتشغيل الأقسام الداخلية معًا بدلًا من عملها في جزر منعزلة.
          </p>
        </div>
      </section>
    </div>
  );
}
