import React from "react";
import useInView from "../hooks/useInView";

function SplitReveal({ text, baseDelay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <span ref={ref} className="split-reveal">
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className={`split-char${inView ? " split-char--visible" : ""}`}
          style={{ "--d": `${baseDelay + i * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default SplitReveal;
