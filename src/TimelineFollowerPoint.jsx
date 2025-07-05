import { useEffect, useRef, useState } from "react";

export function TimelineFollowerPoint() {
  const pointRef = useRef(null);
  const containerRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!pointRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;

      const targetY = window.innerHeight / 2;
      const scrollYWithinContainer = targetY - containerRect.top;

      const clampedY = Math.max(
        0,
        Math.min(scrollYWithinContainer, containerHeight - 30)
      );

      pointRef.current.style.transform = `translateY(${clampedY}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: "-10px",
        right: 0,
        bottom: 0,
      }}
    >
      <div
        ref={pointRef}
        style={{
          position: "absolute",
          top: 0,
          transition: "transform 0.05s ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "max-content",
            left: "-165px",
            color: "#1A1A1A",
          }}
        >
          Job name, date
        </div>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#2A4D69",
            borderRadius: "50%",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
          }}
        />
      </div>
    </div>
  );
}
