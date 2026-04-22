import React, { useEffect, useRef } from "react";
import { PURPLE, YELLOW } from "../constants";
import gsap from "gsap";

export function PurpleBlob({ className }) {
  const blobRef = useRef(null);

  useEffect(() => {
    if (!blobRef.current) return;
    gsap.to(blobRef.current, {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-10, 10)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <svg ref={blobRef} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`blob-svg ${className || ""}`}>
      <path fill={PURPLE} d="M47.7,-68.6C60.4,-57.4,68.2,-41.8,72.6,-25.5C77,-9.1,78,8,72.9,23.3C67.7,38.7,56.3,52.3,42.3,62.1C28.2,71.9,11.5,78,-6.2,85.5C-24,93,-44.6,102,-56.9,94.1C-69.2,86.2,-73.2,61.4,-77.2,40.1C-81.2,18.8,-85.1,1,-80.1,-14.2C-75,-29.4,-61,-42,-46,-52.1C-31,-62.1,-15.5,-69.5,0.7,-70.5C17,-71.5,35,-79.8,47.7,-68.6Z" transform="translate(100 100)" />
    </svg>
  );
}

export function YellowBlob({ className }) {
  const blobRef = useRef(null);

  useEffect(() => {
    if (!blobRef.current) return;
    gsap.to(blobRef.current, {
      y: "random(-25, 25)",
      x: "random(-25, 25)",
      rotation: "random(-15, 15)",
      duration: "random(5, 8)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <svg ref={blobRef} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`blob-svg ${className || ""}`}>
      <path fill={YELLOW} d="M44.7,-76.4C58.3,-69.2,70.1,-56.8,78.2,-42.2C86.3,-27.6,90.6,-10.8,87.6,4.9C84.7,20.5,74.5,34.9,62.8,46.5C51.1,58.1,38,66.9,23.5,72.7C9.1,78.5,-6.7,81.4,-20.9,78C-35,74.6,-47.5,64.9,-58.5,53.4C-69.5,41.9,-79,28.6,-83.4,13.2C-87.8,-2.2,-87,-19.7,-79.5,-34C-71.9,-48.3,-57.6,-59.5,-42.6,-66.1C-27.5,-72.7,-13.8,-74.8,1.4,-77.2C16.5,-79.6,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
  );
}

const Blobs = { PurpleBlob, YellowBlob };
export default Blobs;
