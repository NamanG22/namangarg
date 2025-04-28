'use client'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFadeCinematic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeText, setActiveText] = useState(0);

  const texts = [
    "First Text Here",
    "Second Text Here",
    "Third Text Here",
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(".section");

    const triggers = Array.from(sections).map((section, index) => {
      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveText(index),
        onEnterBack: () => setActiveText(index),
      });
    });

    // Background slow zoom
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
      });
    }

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-full h-full bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: "url('https://your-image-url.com/image.jpg')",
        }}
      />

      {/* Fake scroll sections */}
      <div ref={containerRef}>
        {texts.map((_, index) => (
          <div key={index} className="section h-screen" />
        ))}
      </div>

      {/* Texts */}
      <div className="fixed top-1/3 left-10 w-1/2 text-white text-5xl font-bold pointer-events-none">
        {texts.map((text, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) textRefs.current[index] = el;
            }}
            className={`absolute transition-all duration-700 ${
              activeText === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollFadeCinematic;




