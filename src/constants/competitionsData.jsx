import React from "react";
import { Target, Lightbulb, Flag, Handshake, CarFront, PiggyBank, Clapperboard, Radio, Megaphone, Store, Rocket, Hash, Trophy } from 'lucide-react';

import comp3Pic from "../assets/compcontent3-pic.png";
import comp4Pic from "../assets/compcontent4-pic.png";
import comp5Pic from "../assets/compcontent5-pic.png";
import comp9Pic1 from "../assets/compcontent9-pic1.png";
import comp9Pic2 from "../assets/compcontent9-pic2.png";
import comp11Pic from "../assets/compcontent11-pic.png";

export const competitionsData = [
  {
    id: 1,
    title: "التحدي",
    icon: <Target className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <ul className="styled-list">
          <li><strong>ميزانية محدودة</strong> مقارنة بالمطلوب</li>
          <li><strong>طلب تنفيذ حملة كبيرة</strong> (سيارة + مشاهير + إعلام)</li>
          <li><strong>الحاجة إلى</strong> مبيعات + انتشار + زيارات فروع</li>
          <li><strong>ضغط وقت عالي</strong></li>
        </ul>
      </div>
    ),
    colorContext: "var(--yellow)",
    blobPath: "M43.9,-54.6C56.1,-43.3,64.4,-27.4,66.4,-10.8C68.4,5.8,64,23,54.2,36.5C44.4,50,29.3,59.8,11.8,64.2C-5.6,68.7,-25.4,67.8,-42.6,58.9C-59.7,50,-74.1,33,-77.2,14.3C-80.4,-4.4,-72.2,-24.8,-59,-40.5C-45.7,-56.3,-27.3,-67.4,-10.6,-66.3C6.1,-65.2,23.1,-51.8,43.9,-54.6Z"
  },
  {
    id: 2,
    title: "التفكير",
    icon: <Lightbulb className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content text-center">
        <h3 className="section-sub-title">كان لازم يتم تنفيذ حملة متكاملة</h3>
        <p className="mt-2" style={{ fontSize: "20px" }}>بنفس القوة المطلوبة ... <span className="color-purple highlight-text-inline">لكن بذكاء أعلى وتكلفة أقل</span></p>
      </div>
    ),
    colorContext: "var(--purple)",
    blobPath: "M38.8,-48.9C50.2,-39.3,59,-25.6,63,-10.1C67,5.3,66.2,22.6,58,36.8C49.9,51,34.4,62.2,16.5,67C-1.4,71.8,-21.8,70.2,-37.8,61C-53.7,51.8,-65.2,35,-68.8,17.2C-72.4,-0.6,-68.1,-19.4,-57.1,-34.5C-46.1,-49.6,-28.4,-61.2,-12.3,-61.1C3.7,-61,27.5,-58.4,38.8,-48.9Z"
  },
  {
    id: 3,
    title: "البداية",
    icon: <Flag className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content split-layout">
        <div className="split-col">
          <p><strong>موسم رمضان:</strong> معروف انه موسم مسابقات وهدايا. قبل رمضان من الرمضانات اقترحت على الإدارة انهم يعملو مسابقة جايزتها سيارة.</p>
          <div className="callout-box mt-2">قالو لي معاكي ميزانية لكل الحملة <strong>250 الف ريال</strong> شامل كل شيئ</div>
          <p className="mt-2">مع العلم صاحب الحلال عايز إعلان في MBC من ضمن البادجت وكمان إعلان عند فايز المالكي.</p>
        </div>
        <div className="split-col">
          <ul className="price-list">
            <li>لقيت اقل إعلان في ام بي سي لوحده <strong>بـ 300 الف</strong></li>
            <li>وأقل سيارة <strong>بـ 45 الف</strong></li>
            <li>واعلان فايز المالكي <strong>بـ 100 الف</strong></li>
          </ul>
          <p className="mt-3">
            طيب تصوير فيديوهات المسابقة اليومية؟ طيب الإعلانات الممولة؟ طيب المطبوعات؟ <br/>
            <span className="color-purple highlight-text-inline mt-2" style={{ display: 'block' }}>فكان لازم الاقي حلول لإنجاز كل المتطلبات دي بالأشياء المتاحة.</span>
          </p>
        </div>
      </div>
    ),
    colorContext: "var(--cream)",
    blobPath: "M43.2,-57.4C55.6,-48.5,65,-34.1,65.8,-19.3C66.5,-4.4,58.6,10.9,49.2,25.2C39.8,39.5,28.9,52.8,14.6,58.4C0.4,63.9,-17.3,61.8,-32.8,54.1C-48.3,46.3,-61.6,33,-66.4,17.2C-71.1,1.5,-67.3,-16.8,-57.8,-31C-48.2,-45.3,-33,-55.5,-17.7,-59.5C-2.4,-63.5,12.9,-61.2,43.2,-57.4Z"
  },
  {
    id: 4,
    title: "الشراكة مع جمعية إنسان",
    pic: comp3Pic,
    icon: <Handshake className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content split-layout">
        <div className="split-col">
          <p>كلمت <strong>جمعية إنسان</strong> اتفقت معاهم ان عن كل فاتورة فردية مش عقود شركات في ليدر اكسبرس سيتم اصدارها طوال شهر رمضان <strong>يتم التبرع بريال لصالح الجمعية</strong>.</p>
          <div className="callout-box mt-3 purple-bg">
            <h4>الفايدة من الاتفاق دا :</h4>
            <ul className="styled-list">
              <li>زيادة عامل الجذب للعملاء بجانب المسابقة والشعور بالانتماء العاطفي وانه ساهم في عمل خير في رمضان</li>
              <li>فايز المالكي بيساعد دايما في مجالات الخير فدا حيقلل من سعر اعلانه</li>
              <li>نشر اسم ليدر اكسبرس وشركة الرسام وسيارة هانغاي في حسابات السوشيال ميديا لجمعية إنسان.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    colorContext: "var(--yellow)",
    blobPath: "M48.2,-55.5C61.4,-44.6,70.5,-27.9,73,-10.1C75.4,7.7,71.2,26.6,60.1,41.9C49,57.2,30.9,68.8,11.8,70.9C-7.2,73,-27.2,65.5,-42.6,52.4C-58,39.3,-68.8,20.6,-68.7,2.2C-68.6,-16.2,-57.6,-34.5,-43.3,-46.1C-29.1,-57.6,-11.6,-62.4,5.9,-69.3C23.4,-76.3,46.8,-85.4,48.2,-55.5Z"
  },
  {
    id: 5,
    title: "توفير سيارة المسابقة",
    pic: comp4Pic,
    icon: <CarFront className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <p className="text-center highlight-text-inline" style={{ fontSize: "22px" }}>البادجت <strong>لا يكفي</strong> لشراء سيارة مع باقي البنود والمتطلبات فكان لابد من التحرك سريعا</p>
        <div className="split-layout mt-4">
          <div className="split-col">
            <p>فجهزت ملف كامل بخطة التسويق والاعلانات والعوائد التسويقية المتوقعة. وكلمت وكالات السيارات للمشاركة بسيارة مجانية في المسابقة مقابل الاعلان عنهم في كل المسابقة.</p>
            <div className="callout-box mt-3">لكن لأن الوقت كان <strong>ضيقا</strong> كان اسرع من استجاب <strong>وكالة الرسام للسيارات</strong></div>
            <ul className="styled-list mt-2">
              <li>الإجراءات عندهم قصيرة وغير معقدة وسلسين في التعامل</li>
              <li>وعندهم سيارات جديدة على السوق السعودي</li>
            </ul>
          </div>
          <div className="split-col centered-content">
             <div className="big-promo-badge">
                شاركوا معنا <strong>بسيارة هانغاي</strong> هدية <br/>
                <span className="h1 color-purple mt-2">80 ألف ريال</span>
             </div>
          </div>
        </div>
      </div>
    ),
    colorContext: "var(--purple-light)",
    blobPath: "M42,-55.2C54.4,-44.8,64.8,-32,68.9,-17.1C73,-2.2,70.7,14.8,61.9,29C53,43.2,37.6,54.5,20.7,61C3.8,67.6,-14.7,69.5,-30.9,64.2C-47.2,58.8,-61.2,46.3,-68.6,30.3C-75.9,14.2,-76.6,-5.5,-69,-21.9C-61.4,-38.3,-45.4,-51.4,-29.9,-60C-14.4,-68.6,0.6,-72.7,16,-69.3C31.5,-65.9,50,-51.2,42,-55.2Z"
  },
  {
    id: 6,
    title: "تقليل تكلفة الانتاج",
    pic: comp5Pic,
    icon: <PiggyBank className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content split-layout">
        <div className="split-col">
          <p>اقل شركة تصوير أخبروني أن تصوير إعلان السيارة الهانغاي لوحده سيتكلف <strong>100 ألف ريال</strong> غير إعلان المسابقة. غير تصوير الـ30 فيديو بإجمالي تكلفة حوالي <strong>200 ألف ريال</strong> تصوير ومونتاج.</p>
        </div>
        <div className="split-col">
          <div className="callout-box purple-bg">
            <h4>الحل Solve:</h4>
            <ul className="styled-list">
              <li>كلمت شركة تصوير فلبينية وخليتهم يجوا السعودية.</li>
              <li>والجو كان أمطار في حائل ومناسب تمامًا لتصوير السيارة والدفع الرباعي وسط الطين والزرع والجبال.</li>
              <li>خليت أخويا يسافر بالسيارة لحائل وشركة التصوير قاموا بتصوير الإعلانات بمناظر خيالية وإخراج رائع.</li>
            </ul>
             <div className="mt-3 text-center">الموضوع كله اتكلف أقل من <strong>30 ألف ريال</strong></div>
          </div>
        </div>
      </div>
    ),
    colorContext: "var(--yellow)",
    blobPath: "M43.7,-49.6C56.6,-36.8,67,-20.9,67.7,-4.4C68.3,12.1,59.3,29.1,46.5,41.9C33.6,54.6,16.8,63,1.1,61.7C-14.6,60.4,-29.2,49.4,-41.8,36.5C-54.4,23.6,-65,8.8,-65.4,-6.5C-65.8,-21.8,-56.1,-37.6,-43.3,-50.2C-30.5,-62.8,-15.2,-72.1,0.5,-72.7C16.3,-73.3,30.8,-62.3,43.7,-49.6Z"
  },
  {
    id: 7,
    title: "إنتاج المحتوى",
    icon: <Clapperboard className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content split-layout">
        <div className="split-col">
          <p>تصوير الحلقات والاسئلة اليومية وإعداد محتوى الأسئلة كان سيكلف كثيرا خصوصا انه لا يوجد أي أحد غيري في الشركة في قسم التسويق والعلاقات العامة.</p>
          <div className="mt-2 text-center" style={{ fontSize: "28px", fontWeight: "bold" }}>حرفيا لا يوجد فريق أنا فقط</div>
        </div>
        <div className="split-col">
          <div className="callout-box">
             <p>والاسم مديرة تسويق كنت مديرة ومستشارة نفسي ومساعديني ايدي اليمين وايدي الشمال مع مخي.</p>
          </div>
          <ul className="styled-list mt-3">
             <li>قمت بإعداد سكربت الأسئلة والحلقات واتفقت مع مصور جوال يصور في الفرع عشان يكون السعر اقل.</li>
             <li>وطلبت من اخي انه يكون موديل التصوير وقمت بالتعاون مع موديل بنت في تصوير اسئلة المسابقة اليومية.</li>
          </ul>
          <p className="mt-2 color-purple highlight-text-inline">صورنا كل الحلقات في 3 ايام 10 أسئلة كل يوم من الساعة 8 الصباح الى الساعة 11 الظهر قبل الزحمة مع الايقاف المتكرر مغسلة سيارات بجوار الفرع.</p>
        </div>
      </div>
    ),
    colorContext: "var(--cream)",
    blobPath: "M36.1,-55.8C49.2,-47.9,59.2,-35.1,66.6,-20.1C74,-5.2,78.8,11.8,73.5,26.4C68.1,41.1,52.6,53.2,36.3,62.1C19.9,71,-7.2,76.5,-28.9,69.5C-50.6,62.5,-66.8,42.8,-74.1,21.6C-81.4,0.4,-79.8,-22.4,-69.1,-39.8C-58.4,-57.2,-38.7,-69.2,-21.8,-68.8C-4.9,-68.4,12.1,-63.7,36.1,-55.8Z"
  },
  {
    id: 8,
    title: "الإعلان الذكي ( MBC FM )",
    icon: <Radio className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <p>الإعلان في MBC كان مكلفًا ولن يظهر سوى 10 مرات فقط لذلك تم <strong>نقل الاستثمار إلى الراديو MBC FM</strong> حيث إن الناس تستمع إليه داخل سياراتها أثناء العودة من الدوامات، وفي الليل بعد صلاة التراويح.</p>
        <p className="mt-2">كما أن جمهور MBC FM داخل السعودية بشكل أكبر بعكس التلفزيون الذي يصل إلى كل أنحاء الوطن العربي وجمهور غير مستهدف.</p>
        
        <div className="split-layout mt-4">
           <div className="split-col">
              <div className="callout-box purple-bg">
                 <h4>تم رعاية مسابقة رمضان في MBC FM</h4>
                 <p className="mt-2">وتقديم جوائز يومية بقيمة <strong>2000 ريال</strong> على شكل كوبونات خصم في الفروع.</p>
                 <p className="mt-2">بحيث لا يوجد خسارة مباشرة لأن العميل يجب أن يزور الفرع ليستفيد من الخصم وبالتالي يقوم بالشراء و يتكلف أكثر من قيمة الكوبون.</p>
              </div>
           </div>
           <div className="split-col">
               <ul className="styled-list">
                 <li>تم تكرار اسم <strong>ليدر إكسبرس وشركة الرسام وسيارة هانغاي</strong> أكثر من <strong>100 مرة يوميًا</strong> مما زاد من الوعي بالعلامة التجارية.</li>
               </ul>
               <div className="mt-4 callout-box">
                  بلغ إجمالي تكلفة الإعلان <strong>160 ألف ريال</strong> طوال شهر رمضان
               </div>
           </div>
        </div>
      </div>
    ),
    colorContext: "var(--purple)",
    blobPath: "M43.7,-58.5C55.3,-48.7,62.3,-33.5,66.3,-17.1C70.3,-0.6,71.4,17.1,64.2,31.7C56.9,46.3,41.2,57.7,24.1,64.2C7,70.6,-11.5,72,-27.1,66C-42.6,60,-55.2,46.6,-61.8,31C-68.3,15.4,-68.8,-2.6,-63.9,-18.2C-58.9,-33.7,-48.5,-46.8,-35.1,-56.3C-21.7,-65.7,-5.4,-71.4,9.6,-69.1C24.5,-66.9,39.1,-56.6,43.7,-58.5Z"
  },
  {
    id: 9,
    title: "إعلان فايز المالكي",
    icon: <Megaphone className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content split-layout">
         <div className="split-col">
             <div className="callout-box">
                فايز المالكي علّق على الإعلان بأنه سيكون <strong>بسعر مخفّض</strong> بسبب اتفاق جمعية إنسان <strong>ووافق على ذلك</strong>!
             </div>
         </div>
         <div className="split-col">
            <p>لكنه دخل المستشفى وأجرى عملية في قلبه ولم يرد بعدها، <br/> <strong className="color-purple mt-2" style={{ display: 'block' }}>إلى أن تم استخدام الميزانية في الإعلانات الممولة.</strong></p>
         </div>
      </div>
    ),
    colorContext: "var(--yellow)",
    blobPath: "M40.7,-51.2C54.1,-40.5,67,-27.8,70.2,-13.1C73.4,1.6,66.8,18.4,56.5,32.3C46.1,46.2,31.9,57.3,15.6,62.8C-0.8,68.4,-19.2,68.4,-33.5,59.9C-47.8,51.4,-57.9,34.4,-62.7,16.6C-67.5,-1.2,-67.1,-19.8,-58.6,-33.9C-50,-47.9,-33.3,-57.4,-17.8,-60.8C-2.2,-64.1,20.5,-66.2,40.7,-51.2Z"
  },
  {
    id: 10,
    title: "المطبوعات وتجربة الفروع",
    pic: comp9Pic1,
    icon: <Store className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <p>اخبرت الادارة ان ممكن نستغنى عن المطبوعات ونعمل صفحة نجمع فيها بيانات المشتركين في المسابقة وتكون المشاركة اون لاين. <strong>لم توافق الادارة</strong> واخبروني انهم يريدون زيادة زيارات الفروع.</p>
        
        <div className="split-layout mt-3">
           <div className="split-col">
              <div className="callout-box purple-bg">
                 فقمت بتجهيز المطبوعات <strong>200 الف بروشور وكوبون</strong> وايضا بانرات لتعليقها على الفروع جميعها وصناديق كوبونات المسابقة في كل فرع.
              </div>
           </div>
           <div className="split-col">
              <ul className="styled-list">
                 <li>قمت بتفصيلهم لتقليل التكلفة وجهزت كوبونات المسابقة وقمت بتوزيعها على الفروع</li>
                 <li>وايضا بروشورات تفاصيل المسابقة صممتها كأنها مطوية رمضانية مع اذكار الصباح والمساء.</li>
                 <li><strong>فكانت النتيجة:</strong> ان العميل يقوم بالاحتفاظ بها وعدم رميها لما فيها من قيمة بذاتها.</li>
              </ul>
           </div>
        </div>
      </div>
    ),
    colorContext: "var(--cream)",
    blobPath: "M40.3,-50C54.1,-40.4,68.6,-28.9,73,-14.2C77.4,0.5,71.7,18.4,60.8,32.4C49.9,46.4,33.7,56.5,16,61.9C-1.7,67.3,-20.9,68.1,-36.8,59.8C-52.6,51.5,-65.2,34,-68.8,15C-72.4,-3.9,-67,-24.5,-55,-39.8C-43,-55,-25.4,-64.9,-9.2,-68.2C7,-71.6,26.5,-59.6,40.3,-50Z"
  },
  {
    id: 11,
    title: "الاعلانات الممولة",
    icon: <Rocket className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <p>الإعلانات الممولة مهم تكون <strong>مستهدفة والهوك مميز</strong>.</p>
        <p className="mt-2">فقمت بتجربة نفس الفيديو مع تغيير الهوك في البداية وإعادة ترتيب المشاهد إلى أن وصلت إلى <strong>أفضل ترتيب يجعل العميل يكمل الإعلان ويتفاعل معه.</strong></p>
        
        <div className="split-layout mt-4 text-center">
           <div className="split-col callout-box">
              وصل عدد المشاهدات إلى أكثر من<br/>
              <span className="h1 color-purple mt-2" style={{ display: 'block'}}>10 مليون مشاهدة</span>
              على كافة المنصات
           </div>
           <div className="split-col callout-box">
              وزادت إجمالي المتابعات بأكثر من<br/>
              <span className="h1 color-yellow mt-2" style={{ display: 'block'}}>80%</span>
              على منصات السوشيال ميديا
           </div>
        </div>
      </div>
    ),
    colorContext: "var(--purple-light)",
    blobPath: "M43.6,-59.2C55.6,-48.9,63.9,-33.6,67.7,-16.9C71.5,-0.2,70.9,17.8,63.1,33.2C55.3,48.6,40.3,61.3,23.3,66.6C6.3,71.8,-12.8,69.5,-29,62C-45.2,54.5,-58.5,41.9,-65.3,26.4C-72,10.9,-72.1,-7.5,-65.4,-23.3C-58.8,-39,-45.5,-52.1,-31.2,-60.8C-16.9,-69.5,-1.6,-73.8,16.2,-71.4C34,-69,48.6,-60.7,43.6,-59.2Z"
  },
  {
    id: 12,
    title: "الهاشتاق الترند",
    icon: <Hash className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
        <p>تم الاتفاق مع <strong>زياد الجهني</strong> للإعلان عن المسابقة ووصل الهاشتاق ترند في أول 3 هاشتاقات في السعودية لأكثر من 10 ساعات.</p>
        <div className="callout-box mt-3 purple-bg">
           وصل عدد متابعين تويتر الى <strong>50 الف متابع</strong>.
        </div>
        <p className="mt-3" style={{ fontSize: "14px" }}>طبعا بعد انتهاء المسابقة نزل العدد الى اقل لكن يظل العدد في النهاية جيدا.</p>
      </div>
    ),
    colorContext: "var(--yellow)",
    blobPath: "M45.5,-52C58.8,-41,69.5,-25,72,-8.1C74.4,8.8,68.6,26.5,56.8,40.6C44.9,54.7,27,65.2,8.1,68.7C-10.7,72.2,-30.5,68.7,-46.8,57.7C-63.1,46.7,-75.9,28.2,-77.8,8.7C-79.6,-10.8,-70.5,-31.3,-56.3,-43.3C-42,-55.4,-22.6,-58.9,-4.4,-53.9C13.8,-48.9,32.3,-63,45.5,-52Z"
  },
  {
    id: 13,
    title: "النتيجة",
    pic: comp11Pic,
    icon: <Trophy className="comp-blob-icon" strokeWidth={1.5} />,
    content: (
      <div className="popup-ocr-content">
         <ul className="grid-list">
            <li>تحقيق أكثر من 10 مليون مشاهدة</li>
            <li>وصول الحملة لترند السعودية</li>
            <li>تفاعل مباشر مع أكثر من 30 ألف عميل</li>
            <li>زيادة المتابعين بأكثر من 80%</li>
            <li>زيادة زيارات الفروع</li>
            <li>تحقيق مبيعات فعلية</li>
            <li>بناء ارتباط عاطفي مع العملاء</li>
         </ul>
         <p className="mt-3" style={{ textAlign: "center" }}>تم السحب على السيارة بحضور ممثل من الغرفة التجارية واللي فاز بالسيارة طفل عمره 11 سنة.</p>
         
         <div className="callout-box mt-4 purple-bg text-center">
            <h4>الخلاصة Conclusion</h4>
            <p className="mt-2 text-highlight">عندما لا تكفي الميزانية يجب أن تكون الفكرة أذكى</p>
         </div>
         <div className="callout-box mt-2 text-center">
            <h4>الحل الحقيقي</h4>
            <p className="mt-2 text-highlight color-purple">لم تكن المشكلة في الميزانية بل في طريقة التفكير</p>
         </div>
      </div>
    ),
    colorContext: "var(--purple)",
    blobPath: "M41.3,-58.6C54.6,-49.4,67.3,-38.3,71.2,-24.1C75,-9.9,70.1,7.2,60.8,20.8C51.5,34.4,37.8,44.4,22.8,51.8C7.8,59.2,-8.5,64.1,-24.1,60.5C-39.6,56.9,-54.4,44.8,-63.3,29.3C-72.2,13.8,-75.2,-5,-69.6,-20.9C-64,-36.8,-49.9,-49.8,-35.1,-58.4C-20.3,-67.1,-4.8,-71.4,9.6,-69.1C24.5,-66.9,39.1,-56.6,41.3,-58.6Z"
  }
];
