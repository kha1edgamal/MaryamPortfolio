import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../style.css';

export default function Loader({ isLoading }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!isLoading && loaderRef.current) {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => {
          // ensure it doesn't block clicks after hiding
          gsap.set(loaderRef.current, { display: "none" });
        }
      });
    }
  }, [isLoading]);

  return (
    <div className="preloader-overlay" ref={loaderRef}>
      <div className="preloader-content">
        <svg viewBox="0 0 200 200" className="preloader-blob blob-animate-subtle" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F9B530" d="M36.8,-50.8C45.9,-36.1,50.4,-22.9,57.2,-6.8C64.1,9.4,73.2,28.5,67.5,39.4C61.7,50.4,41,53.2,23.9,54.6C6.8,56,-6.8,56,-22.2,53.6C-37.6,51.2,-54.9,46.4,-64.5,34.8C-74,23.2,-75.9,4.7,-73.1,-13.2C-70.2,-31.1,-62.7,-48.4,-49.7,-62.4C-36.8,-76.4,-18.4,-87.1,-2.3,-84.4C13.8,-81.7,27.6,-65.5,36.8,-50.8Z" transform="translate(100 100)" />
        </svg>
        <span className="preloader-text">مريم الحكيم</span>
      </div>
    </div>
  );
}
