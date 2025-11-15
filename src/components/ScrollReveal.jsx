import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  delay = 0,
  duration = 800,
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Langkah 1: Ambil semua text node, pisah per kata, tapi jangan sentuh HTML
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    // Langkah 2: Split setiap text node jadi span per kata
    textNodes.forEach((textNode) => {
      const parent = textNode.parentNode;
      const text = textNode.nodeValue;
      const words = text.split(/(\s+)/);

      const fragment = document.createDocumentFragment();
      words.forEach((word, i) => {
        if (word.match(/^\s+$/)) {
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement("span");
          span.className = "inline-block opacity-0 word";
          span.style.willChange = "transform, opacity, filter";
          span.textContent = word;
          fragment.appendChild(span);
        }
      });

      parent.replaceChild(fragment, textNode);
    });

    // Langkah 3: Animasi GSAP
    const wordEls = el.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      {
        opacity: baseOpacity,
        rotation: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
        y: 15,
      },
      {
        opacity: 1,
        rotation: 0,
        filter: "blur(0px)",
        y: 0,
        duration: duration / 10000,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        delay: delay / 1000,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [children, baseOpacity, enableBlur, baseRotation, blurStrength, delay, duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealText;
