import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { competitionsData } from "../constants/competitionsData";
import PopupModal from "./PopupModal";
import RevealText from "./RevealText";
import "../competitions.css";

gsap.registerPlugin(ScrollTrigger);

export default function CompetitionsSection() {
  const [activePopupId, setActivePopupId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal blobs one by one on scroll
    gsap.utils.toArray('.comp-blob-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: (i % 4) * 0.1,
          ease: "back.out(1.2)"
        }
      );
      
      // Floating animation for each blob
      gsap.to(item.querySelector('.comp-svg-wrap'), {
        y: Math.random() * 10 + 5,
        x: Math.random() * -10,
        rotation: Math.random() * 4 - 2,
        duration: Math.random() * 2 + 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random()
      });
    });
  }, []);

  const handleBlobClick = (id) => {
    setActivePopupId(id);
  };

  const handleNext = () => setActivePopupId(prev => (prev < 13 ? prev + 1 : 1));
  const handlePrev = () => setActivePopupId(prev => (prev > 1 ? prev - 1 : 13));

  const activeData = activePopupId 
    ? competitionsData.find(d => d.id === activePopupId) 
    : null;

  return (
    <section id="competitions" className="competitions-section" ref={containerRef}>
      <div className="section-container">
        <RevealText>
          <div className="section-badge mb-4">٠٧ — المسابقات</div>
        </RevealText>
        <RevealText delay={0.2}>
          <div className="competitions-heading">
            خطوات وحلول <span>مسابقة ليدر إكسبرس</span>
          </div>
        </RevealText>

        <div className="comp-blobs-grid mt-6">
          {competitionsData.map((item) => (
            <div 
              key={item.id} 
              className="comp-blob-item"
              onClick={() => handleBlobClick(item.id)}
            >
                <div className="comp-svg-wrap" style={{ '--blob-color': item.colorContext }}>
                  <svg viewBox="-80 -80 160 160" xmlns="http://www.w3.org/2000/svg" className="comp-blob-svg">
                    <path fill="var(--blob-color, var(--purple))" d={item.blobPath} />
                  </svg>
                  <div className="comp-blob-content">
                     {item.icon && <div className="blob-icon-wrapper">{item.icon}</div>}
                     <span className="blob-number">{item.id}</span>
                     <h3 className="blob-title">{item.title}</h3>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <PopupModal 
        isOpen={activePopupId !== null} 
        onClose={() => setActivePopupId(null)} 
        data={activeData}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
