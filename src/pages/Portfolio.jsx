import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PURPLE, PURPLE_LIGHT, YELLOW, CREAM, DARK, WHITE } from "../constants";
import MagneticCursor from "../components/MagneticCursor";
import RevealText from "../components/RevealText";
import Marquee from "../components/Marquee";
import NoiseOverlay from "../components/NoiseOverlay";
import CompetitionsSection from "../components/CompetitionsSection";
import "../style.css";

import profilePic from "../assets/profile-pic.jpg";
import heroImg from "../assets/hand.png";
import seaImg from "../assets/sea.png";
import testImg from "../assets/testpng.png";

// New Content Assets
import casestudy1Pic from "../assets/casestudy1-pic.png";
import casestudy2Pic from "../assets/casestudy2-pic.png";
import casestudy3Pic from "../assets/casestudy3-pic.png";
import casestudy4Pic from "../assets/casestudy4-pic.png";
import purplecowPic from "../assets/purplecow-pic.png";
import marketingsongPic from "../assets/marketingsong-pic.png";
import marketingsongPic2 from "../assets/marketingsong-pic2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  // GSAP animation refs
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);
  const floatRef = useRef(null);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (blobRef2.current) {
      gsap.to(blobRef2.current, { y: 25, rotation: -8, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
    if (blobRef3.current) {
      gsap.to(blobRef3.current, { x: 15, y: -15, rotation: 10, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
    if (floatRef.current) {
      gsap.to(floatRef.current, { y: -15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }

    // Numbers Count-Up Animation
    gsap.utils.toArray('.stat-card__num').forEach((el) => {
      const text = el.getAttribute('data-target');
      if (!text) return;
      const match = text.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[0], 10);
        const suffix = text.replace(match[0], '');
        const obj = { val: 0 };
        el.innerHTML = "0" + suffix; // Set initial value immediately

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2.5,
              ease: "power2.out",
              onUpdate: function () {
                el.innerHTML = Math.round(obj.val) + suffix;
              }
            });
          }
        });
      }
    });

    // Marketing Song Timeline Items Animation
    gsap.utils.toArray('.ms-timeline-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.15
        }
      );
    });

    // Parallax Effect for Humanity Photo
    gsap.to('.humanity-photo', {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".humanity-photo-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  // NEW ORDER:
  // 1. About
  // 2. Why Me
  // 3. Case Studies
  // 4. Contact
  // 5. Purple Cow
  // 6. Philosophy
  // 7. Marketing Song

  const navItems = [
    ["نبذة عني", "about"],
    ["لماذا أنا", "why-me"],
    ["دراسات حالة", "case-studies"],
    ["Win Win Win", "contact"],
    ["البقرة البنفسجية", "purple-cow"],
    ["الفلسفة", "philosophy"],
    ["تأثير الأغنية التسويقية", "marketing-song"],
    ["المسابقات", "competitions"],
  ];

  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(() => {
        setActiveCaseStudy((prev) => (prev + 1) % 4);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isHovered]);

  const caseStudies = [
    {
      pic: casestudy1Pic,
      date: "٢٠٢٤ - جيني وليدر إكسبرس",
      title: "رفع الحافز لدى كباتن جيني",
      ocr: (
        <>
          <div className="cs-text-group">
            <h4>لشركة جيني :</h4>
            <p>هدايا ترويجية مجانية بقيمة 5 مليون ريال تحفّز الكابتن على استخدام التطبيق ، خصوصًا مع قوة المنافسين.</p>
          </div>
          <div className="cs-text-group mt-3">
            <h4>للكابتن :</h4>
            <p>عينة مجانية بقيمة 50 ريال يحتاجها دوريًا ، يتعرّف من خلالها على البراند الجديد ويجربه، وذوق المنتج داخل السوبر ماركت ، وإذا أعجبه ، سيعود ليشتري كل مرة منه كمية كاملة.</p>
          </div>
        </>
      )
    },
    {
      pic: casestudy2Pic,
      date: "بطاقة الراجحي x ليدر إكسبرس",
      title: "ظهور مجاني أمام 11 مليون عميل",
      ocr: (
        <>
          <div className="cs-text-group">
            <p>البنوك (مثل الراجحي) : حيث إن لديهم أكثر من 11 مليون عميل ، قمنا بتقديم خصم 15% على الفاتورة عند استخدام أي بطاقة لبنك الراجحي.</p>
          </div>
          <div className="cs-text-group highlight-text">
            <h4>الاستفادة:</h4>
            <p>ليدر إكسبرس حصلت على ظهور مجاني أمام 11 مليون عميل عبر إشعارات تطبيق البنك، مما عزّز الوعي بالعلامة التجارية. والعميل بدوره استفاد من خصم 15% وتعرّف على شركة جديدة ذات خدمات مميزة وفاتورة معتمدة من الوكالة.</p>
          </div>
        </>
      )
    },
    {
      pic: casestudy3Pic,
      date: "ولاء بلس للشركات",
      title: "الربط بين الاحتياج والتحفيز",
      ocr: (
        <>
          <div className="cs-text-group">
            <p>البرنامج لديهم عملاء اكثر من 6 مليون موظف مشتركين في البرنامج ونحن لدينا خدمات السيارات فتم الربط بين (الاحتياج - والتجربة - والتحفيز).</p>
          </div>
          <div className="cs-text-group highlight-text mt-3">
            <p>وقمنا بعمل خصم على اجمالي الفاتورة 10% وعلى خدمات اضافية خصومات تصل الى 25%</p>
          </div>
        </>
      )
    },
    {
      pic: casestudy4Pic,
      date: "ذا فيس شوب",
      title: "بناء ارتباط شخصي بالمنتج",
      ocr: (
        <>
          <div className="cs-text-group">
            <p>التحدي كان ستوك كبير غير راغب بالمبيعات. السؤال هنا لم يكن: كيف نبيع المنتج؟ بل كان: <strong>كيف نجعل العميل يشعر أن هذا المنتج يمثله؟</strong></p>
          </div>
          <div className="cs-text-group mt-3">
            <h4>12 هوية مختلفة حسب الأبراج</h4>
            <p>الأبراج تعطي إحساس بالخصوصية وتجعل العميل يشعر أنه "مفهوم". قمت بصنع محتوى لكل قسم (مثلاً المنتجات هذي مخصصة لبرج الدلو) وإعلانات ممولة في سناب شات.</p>
          </div>
          <div className="cs-text-group highlight-text mt-3">
            <p>هنا انهالت الطلبات وتم إرشاد الموظفين ومتابعتهم لتقفيل المبيعات بنجاح، بناءً على قرار عاطفي بحت وليس احتياج فقط.</p>
          </div>
        </>
      )
    }
  ];

  const philosophyCards = [
    { num: "٠١", title: "التسويق بالتأثير النفسي", body: "أكثر من 80% من قرارات الشراء تُبنى على الإحساس. كل حملة أبنيها مصممة حول هذه الحقيقة — لصناعة تجارب تلمس الوجدان قبل أن تقنع العقل." },
    { num: "٠٢", title: "تحويل الاستراتيجيات إلى سيمفونيات", body: "الأفكار وحدها لا تكفي. أحولها إلى نمو قابل للقياس — كل عنصر موقّت، كل قناة منسّقة، كل مقياس مُتابَع." },
    { num: "٠٣", title: "أثر حقيقي ويبقى", body: "التسويق الحقيقي لا يبيع فقط... بل يترك أثراً. أبني علامات تجارية تتجاوز الحملات وعلاقات تتجاوز الصفقات." },
  ];

  const skillCards = [
    { label: "متعددة المواهب", text: "متحمسة لتطبيق مهارات متنوعة وابتكارية في جميع المجالات." },
    { label: "بيئة الابتكار", text: "ملتزمة بتعزيز بيئة يزدهر فيها الابتكار وتحقيق نتائج مؤثرة." },
    { label: "استراتيجي + إبداعي", text: "مزيج بين التفكير الاستراتيجي والرؤية الإبداعية في الأسواق التنافسية." },
    { label: "السوق السعودي", text: "معرفة عميقة بالسوق مع شبكة واسعة من العلاقات في السعودية." },
    { label: "ذكاء البيانات", text: "التحليل التنافسي والبيانات الإحصائية لتقديم حلول تعزز نمو الإيرادات.", span: 2 },
  ];

  const stats = [
    ["10+", "سنوات في مجال التسويق"],
    ["80%", "من قرارات الشراء تُبنى على الإحساس"],
    ["∞", "استراتيجيات تحولت إلى نمو"],
    ["Win Win", "التسويق ليس تكلفة بل فرصة"],
  ];

  return (
    <div className="portfolio-root">
      <MagneticCursor />
      <NoiseOverlay opacity={0.15} />

      {/* ── NAV ── */}
      {/* Nav moved to SharedLayout */}

      {/* 1. HERO SECTION (نبذة عني) */}
      <section id="about" className="hero-section">
        {/* Background Blobs */}
        <div ref={blobRef1} className="hero-blob-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-animate-subtle">
            <defs>
              <clipPath id="hero-blob-clip">
                <path d="M36.8,-50.8C45.9,-36.1,50.4,-22.9,57.2,-6.8C64.1,9.4,73.2,28.5,67.5,39.4C61.7,50.4,41,53.2,23.9,54.6C6.8,56,-6.8,56,-22.2,53.6C-37.6,51.2,-54.9,46.4,-64.5,34.8C-74,23.2,-75.9,4.7,-73.1,-13.2C-70.2,-31.1,-62.7,-48.4,-49.7,-62.4C-36.8,-76.4,-18.4,-87.1,-2.3,-84.4C13.8,-81.7,27.6,-65.5,36.8,-50.8Z" transform="translate(100 100)" />
              </clipPath>
            </defs>
            {/* Yellow fill */}
            <path fill="#F9B530" d="M36.8,-50.8C45.9,-36.1,50.4,-22.9,57.2,-6.8C64.1,9.4,73.2,28.5,67.5,39.4C61.7,50.4,41,53.2,23.9,54.6C6.8,56,-6.8,56,-22.2,53.6C-37.6,51.2,-54.9,46.4,-64.5,34.8C-74,23.2,-75.9,4.7,-73.1,-13.2C-70.2,-31.1,-62.7,-48.4,-49.7,-62.4C-36.8,-76.4,-18.4,-87.1,-2.3,-84.4C13.8,-81.7,27.6,-65.5,36.8,-50.8Z" transform="translate(100 100)" />
            {/* Photo clipped to blob */}
            <image
              href={testImg}
              x="-20" y="40" width="230" height="120"
              clipPath="url(#hero-blob-clip)"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>
        <div ref={blobRef2} className="hero-blob-2" />

        <div className="hero-container">
          {/* Text Content */}
          <div className="hero-text">
            <div className="hero-badge-wrap">
              <span className="hero-badge">مديرة تسويق · استراتيجية · تطوير أعمال</span>
            </div>

            <div className="hero-title-wrap">
              <h1 className="hero-title">
                مريم <span>أحمد الحكيم</span>
              </h1>
            </div>

            <RevealText delay={0.4}>
              <div className="hero-tagline-label">— شعاري الشخصي</div>
              <div className="hero-tagline">
                "التسويق ليس ما أفعله...<br />بل هو <span>طريقة تفكيري.</span>"
              </div>
            </RevealText>

            <RevealText delay={0.6}>
              <div className="hero-sub">
                أينما زرعك الله فأثمر — « ويبقى الأثـر »
              </div>
            </RevealText>
          </div>

          <div className="hero-image-col">
            {/* Stats Card */}
            <div className="glass-card hero-stats">
              {[["10+", "سنوات خبرة"], ["80%", "التأثير النفسي"], ["∞", "نمو"]].map(([n, l]) => (
                <div key={n} className="hero-stat">
                  <div className="hero-stat__num">{n}</div>
                  <div className="hero-stat__label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={["مديرة تسويق", "استراتيجية أعمال", "تطوير الأعمال", "تحديد موقع العلامة التجارية", "قائدة النمو", "+10 سنوات خبرة", "خبيرة السوق السعودي"]} />

      {/* 2. WHY ME */}
      <section id="why-me" className="why-section">
        <div ref={blobRef3} className="why-blob" />

        <div className="why-container">
          <div className="why-photo-col">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="why-popout-svg blob-animate-subtle" style={{ overflow: "visible" }}>
              <defs>
                <clipPath id="why-popout-clip-v3">
                  <path d="M36.8,-50.8C45.9,-36.1,50.4,-22.9,57.2,-6.8C64.1,9.4,73.2,28.5,67.5,39.4C61.7,50.4,41,53.2,23.9,54.6C6.8,56,-6.8,56,-22.2,53.6C-37.6,51.2,-54.9,46.4,-64.5,34.8C-74,23.2,-75.9,4.7,-73.1,-13.2C-70.2,-31.1,-62.7,-48.4,-49.7,-62.4C-36.8,-76.4,-18.4,-87.1,-2.3,-84.4C13.8,-81.7,27.6,-65.5,36.8,-50.8Z" transform="translate(100 120)" />
                  <rect x="-100" y="-150" width="400" height="250" />
                </clipPath>
              </defs>
              <path fill="#F9B530" d="M36.8,-50.8C45.9,-36.1,50.4,-22.9,57.2,-6.8C64.1,9.4,73.2,28.5,67.5,39.4C61.7,50.4,41,53.2,23.9,54.6C6.8,56,-6.8,56,-22.2,53.6C-37.6,51.2,-54.9,46.4,-64.5,34.8C-74,23.2,-75.9,4.7,-73.1,-13.2C-70.2,-31.1,-62.7,-48.4,-49.7,-62.4C-36.8,-76.4,-18.4,-87.1,-2.3,-84.4C13.8,-81.7,27.6,-65.5,36.8,-50.8Z" transform="translate(100 120)" opacity="0.95" />
              <image
                href={heroImg}
                x="5" y="-50"
                width="190" height="260"
                clipPath="url(#why-popout-clip-v3)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>

          <div className="why-text-col">
            <RevealText>
              <div className="why-section-badge">٠١ — لماذا أنا</div>
              <div className="why-heading">لماذا <span>أنا؟</span></div>
              <div className="why-desc">
                خبيرة تسويق وتطوير أعمال متخصصة في السوق السعودي. سجل حافل +10 سنوات.
              </div>
            </RevealText>

            <div className="skills-grid">
              {skillCards.map((card, i) => (
                <RevealText key={i} delay={i * 0.1}>
                  <div className={`glass-card skill-card${i === 3 ? " skill-card--purple" : ""}${card.span ? " skill-card--span-2" : ""}`}>
                    <div className="skill-card__label">{card.label}</div>
                    <div className="skill-card__text">{card.text}</div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map(([num, label], i) => (
              <RevealText key={i} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="stat-card__num" data-target={num}>{num}</div>
                  <div className="stat-card__label">{label}</div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES */}
      <section id="case-studies" className="case-studies-section">
        <div className="section-container">
          <RevealText>
            <div className="section-badge">٠٢ — دراسات الحالة</div>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="case-studies-heading">
              تحويل التحديات إلى <span>أرقام حقيقية.</span>
            </div>
          </RevealText>

          <div
            className="cs-slider-container mt-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="cs-slider-track" style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}>
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="cs-slide-card-wrap">
                  <div className="cs-unified-card">
                    {/* Dots on the Right */}
                    <div className="cs-card-dots">
                      {caseStudies.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          className={`cs-v-dot ${activeCaseStudy === dotIdx ? "active" : ""}`}
                          onClick={() => setActiveCaseStudy(dotIdx)}
                        ></button>
                      ))}
                    </div>

                    {/* Middle: Content */}
                    <div className="cs-card-content">
                      <div className="cs-card-date">{cs.date}</div>
                      <h3 className="cs-card-title">{cs.title}</h3>
                      <div className="cs-card-body">{cs.ocr}</div>
                    </div>

                    {/* Left: Image Breaking Out */}
                    <div className="cs-card-image-col">
                      <img src={cs.pic} alt="Case Study" className="cs-card-img" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT (Win Win Win) */}
      <section id="contact" className="contact-section">
        {/* <div className="contact-blob-wrap">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F9B530" d="M48.9,-53.3C64.3,-45.3,78.4,-30.8,82.7,-13.6C86.9,3.7,81.3,23.7,71,40.6C60.8,57.4,45.8,71.1,27.6,79.2C9.4,87.3,-12.1,89.8,-26.8,81.1C-41.4,72.5,-49.3,52.8,-56.2,35.2C-63.1,17.6,-69,2.2,-69.1,-14.7C-69.2,-31.7,-63.4,-50.2,-50.9,-58.7C-38.4,-67.2,-19.2,-65.8,-1.2,-64.4C16.7,-62.9,33.4,-61.3,48.9,-53.3Z" transform="translate(100 100)" />
          </svg>
        </div> */}

        <div className="contact-container">
          <RevealText>
            <div className="contact-badge">٠٣ — لنبني معاً</div>
          </RevealText>

          <RevealText delay={0.1}>
            <div className="contact-heading">Win Win Win</div>
          </RevealText>

          <RevealText delay={0.2}>
            <p className="contact-desc">
              أؤمن بأن التسويق ليس تكلفة بل فرصة، لذلك أعمل على ابتكار شراكات ذكية وحلول مستدامة مثل الأفلييت ماركتنج والتكامل بين العلامات التجارية، بحيث يكون الجميع رابحاً.
            </p>
          </RevealText>

          {/* <RevealText delay={0.3}>
            <div className="contact-ctas">
              <a href="mailto:contact@maryamalhakeem.com" className="btn-primary">
                تواصل معي ←
              </a>
              <a href="https://linkedin.com" className="btn-outline">
                LinkedIn ↗
              </a>
            </div>
          </RevealText> */}
        </div>
      </section>

      {/* 5. PURPLE COW */}
      <section id="purple-cow" className="purple-cow-section ">
        <div className="section-container">
          <RevealText>
            <div className="section-badge" style={{ marginBottom: "30px" }}>٠٤ — البقرة البنفسجية</div>
          </RevealText>
          <div className="pc-layout">
            <RevealText>
              <div className="pc-text-col glass-card">
                {/* <img src={purplecowContent} alt="Purple Cow Original Content" className="visually-hidden" /> */}
                <div className="pc-badge">(حين يتفوق الانتباه على الكمال)</div>
                <div className="pc-en-title">When Attention Beats Perfection</div>

                <p className="pc-para mt-4">في عالم مليان محتوى ... الناس بقت ما تشوفش ...<br />إلا الحاجة اللي " توقّفها غصب عنها " زي ...<br /><span className="pc-highlight">بقرة بنفسجية وسط قطيع أبيض</span></p>

                <div className="pc-insight mt-4">
                  المشاهد اليوم بيعدي على مئات الفيديوهات يوميًّا ... <br />
                  لكن ما بيقفش ... إلا لما يشوف حاجة غريبة، مختلفة، وغير
                  متوقعة وده بالضبط مفهوم:<br />
                  <strong>Purple Cow - Seth Godin</strong>
                </div>

                <div className="pc-quote mt-4">
                  إنك تكون مميز ... لدرجة لا يمكن تجاهلك
                </div>
              </div>
            </RevealText>

            <div className="pc-img-col">
              <RevealText delay={0.2}>
                <div>
                  <img src={purplecowPic} alt="Purple Cow" style={{ width: "100%", height: "auto" }} />
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY */}
      <section id="philosophy" className="philosophy-section">
        <div className="section-container">
          <RevealText>
            <div className="section-badge">٠٥ — الفلسفة</div>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="philosophy-heading">
              أنا لا أطارد العملاء —<br />
              <span>أضع العلامات التجارية</span> حيث يتواجد العملاء بالفعل.
            </div>
          </RevealText>
          <div className="philosophy-cards">
            {philosophyCards.map((col, i) => (
              <RevealText key={i} delay={i * 0.15}>
                <div className={`glass-card phil-card${i === 1 ? " phil-card--alt" : ""}`}>
                  <div className="phil-card__num">{col.num}</div>
                  <div className="phil-card__title">{col.title}</div>
                  <div className="phil-card__body">{col.body}</div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKETING SONG IMPACT */}
      <section id="marketing-song" className="marketing-song-section">
        <div className="section-container">
          <RevealText>
            <div className="section-badge">٠٦ — تأثير الأغنية التسويقية</div>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="marketing-heading">
              من لحن بسيط إلى <span>9 مليون مساهِم بنشر علامتك.</span>
            </div>
          </RevealText>
          {/* 
          <img src={marketingsongContent1} alt="Marketing Song 1 Text" className="visually-hidden" />
          <img src={marketingsongContent2} alt="Marketing Song 2 Text" className="visually-hidden" /> */}

          <div className="ms-timeline mt-6">
            <div className="ms-timeline-item">
              <div className="ms-timeline-marker">١</div>
              <div className="ms-timeline-content glass-card">
                <div className="ms-result-layout">
                  <div className="ms-result-text">
                    <h3 className="section-sub-title">1. الفكرة وتأثير الأغاني التسويقية</h3>
                    <p>الأغنية التسويقية تُعد من أقوى أدوات الانتشار الحديثة، لأنها لا تقدم الإعلان كمعلومة فقط، بل كتجربة صوتية ممتعة تعلق في الذاكرة.</p>
                    <p className="mt-2">وعندما يكون اللحن مشهورًا مثل <strong>BABY SHARK</strong>، يتفاعل الجمهور معه بمجرد سماعه ويبدأ بترديده تلقائيًا، فتصل الرسالة بسهولة دون مقاومة، مما يساعد على ترسيخ اسم البراند والخدمات بسرعة ورفع المشاركة والانتشار.</p>
                  </div>
                  <div className="ms-result-img glass-card">
                    <img src={marketingsongPic} alt="Marketing Song Concept" className="ms-image" />
                  </div>
                </div>

                <div className="ms-box glass-card mt-4">
                  <h4 className="color-purple">لماذا تنجح الأغاني التسويقية؟ تحقق تأثيرًا كبيرًا لأنها:</h4>
                  <ul className="ms-styled-list mt-2">
                    <li>ترتبط بالعاطفة أكثر من المعلومات المباشرة.</li>
                    <li>تزيد قابلية المشاركة والانتشار الفيروسي.</li>
                    <li>ترفع ولاء العملاء وتقوي العلاقة مع العلامة.</li>
                    <li>تُستخدم بسهولة في الإعلانات والفيديوهات والفعاليات.</li>
                    <li>تخلق هوية صوتية ثابتة يمكن تكرارها لسنوات.</li>
                    <li>تظل عالقة في الذاكرة أطول من أي إعلان بصري.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="ms-timeline-item">
              <div className="ms-timeline-marker">٢</div>
              <div className="ms-timeline-content glass-card">
                <div className="ms-split">
                  <div className="ms-split-col">
                    <h3 className="section-sub-title">2. تأثير الأطفال ودورهم في اتخاذ القرار</h3>
                    <p>الألحان البسيطة والمرحة ترتبط مباشرة بعالم الطفل، وعندما يتعلق الطفل بأغنية تخص خدمة أو منتج، فإنه غالبًا يصبح محفزًا للأسرة لاختيار المكان أو تكرار الزيارة. مما يجعل الأغنية بوابة لطيفة لجذب العائلات وزيادة العملاء بشكل غير مباشر.</p>
                  </div>
                  <div className="ms-split-col">
                    <h3 className="section-sub-title">3. التطبيق العملي (ليدر اكسبرس)</h3>
                    <p>وقد طبقت هذه الفكرة بنجاح عبر أغنية تعريف بخدمات ليدر اكسبرس بلحن بيبي شارك ، جعلت الأطفال يرددونها في البيت ، فانعكس ذلك على قرار الأهل في اختيار المركز لتتحول إلى ترنيمة صوتية محببة ساهمت في انتشار واسع وزيادة الوعي بالعلامة وبناء ارتباط ممتع ومستمر مع الجمهور.</p>
                    <p className="mt-2 text-highlight">وكان العملاء يتحدثون عنها كثيرًا وأثارت الجدل سواء بالاعتراض أو الموافقة وهذا هو المطلوب.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ms-timeline-item ms-timeline-item-final">
              <div className="ms-timeline-marker">٣</div>
              <div className="ms-timeline-content glass-card ms-highlight-card">
                <div className="ms-result-layout">
                  <div className="ms-result-text">
                    <h3 className="section-sub-title color-yellow">النتائج الفعّالة</h3>
                    <p className="mt-2">وقد حققت عدد مشاهدات تجاوز الـ <strong>9 مليون مشاهدة</strong> على كافة المنصات ، وفي هذا الشهر زادت مبيعات الفروع <strong>اكثر من 20%</strong> عن الشهر اللي قبله وكان العملاء يتفاعلون في الفروع وفي محيط المجتمع سواء عبر الاستهزاء او الإعجاب ، كانو يقولون واحنا في السيارة فاتحين اليوتيوب او الاولاد فاتحين اليوتيوب على التلفزيون تظهر هذي الأغنية والأولاد يرددونها لأن لحنها مشابه للحن اغنية بيبي شارك المعروفة.</p>
                  </div>
                  <div className="ms-result-img glass-card">
                    <img src={marketingsongPic2} alt="Marketing Song Results Visual 2" className="ms-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPETITIONS SECTION */}
      <CompetitionsSection />

      {/* HUMANITY (Kept intact with numerical badge at end) */}
      <section id="humanity" className="humanity-section">
        <div className="section-container">
          <div className="humanity-grid">
            <div>
              <RevealText>
                <div className="section-badge">٠٨ — الجانب الإنساني</div>
                <div className="humanity-heading">
                  في الجانب <span>الإنساني</span>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div className="humanity-box">
                  <p>
                    أتبنى مفهوم العمل الخيري المستدام، حيث أركز على تمكين الأفراد من خلال تعليمهم مهارات مثل التسويق الإلكتروني والتصاميم والأشغال اليدوية، ليتمكنوا من تحقيق دخل مستقل بدلاً من الاعتماد على المساعدات.
                  </p>
                </div>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="humanity-tags">
                  {["✍️ الكتابة", "✈️ السفر", "🎵 الموسيقى", "🐎 الفروسية", "🌍 نادي الروتاري", "🐾 حقوق الحيوان"].map(tag => (
                    <span key={tag} className="humanity-tag">{tag}</span>
                  ))}
                </div>
              </RevealText>
            </div>
            <div className="humanity-photo-wrap">
              <img src={seaImg} alt="Maryam by the sea" className="humanity-photo" />
            </div>
          </div>

          <div className="humanity-quote-wrap">
            <RevealText delay={0.15}>
              <p className="humanity-para">
                أنا شغوفة بالكتابة، بحب السفر والتعرف على الثقافات المختلفة، بحب الموسيقى، أحب الخيل والفروسية، اعشق الاطفال ومهتمة بمجال تربية الطفل وجودة حياته، عضو في نادي الروتاري العالمي، وناشطة في مجال حقوق الحيوان.
              </p>
            </RevealText>

            <RevealText delay={0.25}>
              <div className="humanity-quote">
                "أسعى دائمًا لدمج الإبداع بالإنسانية في كل ما أقدمه. اهتم بالتفاصيل الصغيرة التي بتتكون بيها في النهاية لوحة حياتنا"
              </div>
            </RevealText>
          </div>
        </div>

        {/* Footer */}
        {/* Footer moved to SharedLayout */}
      </section>

    </div>
  );
}
