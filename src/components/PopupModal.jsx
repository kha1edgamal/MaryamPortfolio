import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function PopupModal({ isOpen, onClose, data, onNext, onPrev }) {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".popup-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        ".popup-content-box",
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(".popup-overlay", { opacity: 0, duration: 0.3 });
    gsap.to(".popup-content-box", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose
    });
  };

  if (!isOpen || !data) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className="popup-content-box glass-card"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="popup-bg-graphic popup-bg-1"></div>
        <div className="popup-bg-graphic popup-bg-2"></div>

        <button className="popup-close-btn" onClick={handleClose}>
          ✕
        </button>

        <div className="popup-slider-nav">
          <button className="popup-nav-btn prev-btn" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#10094;</button>
          <button className="popup-nav-btn next-btn" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#10095;</button>
        </div>

        <div className="popup-header">
          <span className="popup-badge">الخطوة رقم {data.id}</span>
          <h2 className="popup-title">{data.title}</h2>
        </div>

        <div className="popup-body">
          {/* Main typography content extracted from image */}
          {data.content}

          {/* Conditional extra picture display */}
          {data.pic && (
            <div className="popup-pic-container mt-4">
              <img src={data.pic} alt={data.title} className="popup-pic" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
