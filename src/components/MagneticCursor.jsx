import React, { useEffect, useRef } from "react";

function MagneticCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let x = 0, y = 0, fx = 0, fy = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    document.addEventListener("mousemove", move);
    let raf;

    const animate = () => {
      fx += (x - fx) * 0.12;
      fy += (y - fy) * 0.12;
      if (cursor) cursor.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      if (follower) follower.style.transform = `translate(${fx - 20}px, ${fy - 20}px)`;
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export default MagneticCursor;
