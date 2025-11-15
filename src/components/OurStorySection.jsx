import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurStorySection = () => {
  const containerRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useGSAP(
    () => {
      // Animasi Paragraf 1
      const split1 = new SplitText(paragraph1Ref.current, {
        type: "words",
        wordsClass: "word",
      });

      gsap.fromTo(
        split1.words,
        {
          opacity: 0,
          y: 20,
          rotation: 5,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph1Ref.current,
            start: "top 85%",
            once: true,
          },
          delay: 0.2,
        }
      );

      // Animasi Paragraf 2
      const split2 = new SplitText(paragraph2Ref.current, {
        type: "words",
        wordsClass: "word",
      });

      gsap.fromTo(
        split2.words,
        {
          opacity: 0,
          y: 20,
          rotation: -5,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph2Ref.current,
            start: "top 85%",
            once: true,
          },
          delay: 0.4,
        }
      );

      return () => {
        split1.revert();
        split2.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <motion.section
      ref={containerRef}
      className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F9F5F0] rounded-4xl mb-20 mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-12 text-left">Our Story</h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start rounded-t-3xl overflow-hidden">
          {/* Gambar Kiri */}
          <div className="relative w-full md:w-11/12 lg:w-10/12 mx-auto">
            <div className="relative rounded-tl-3xl rounded-bl-3xl overflow-hidden shadow-2xl">
              <img src="/image/ourstory.jpg" alt="Our Story Image" className="w-full h-auto object-cover block" />
            </div>
          </div>
          {/* Teks Kanan */}
          <div className="flex flex-col justify-center space-y-8 text-gray-700 leading-relaxed text-lg md:text-xl text-justify">
            <p ref={paragraph1Ref}>
              Kita semua pasti punya tempat favorit yang rasanya seperti <strong>Pulang</strong>. Mungkin itu warung bakso di ujung jalan yang
              resepnya turun-temurun, pangkas rambut yang paling mengerti gayamu, atau kedai kopi kecil yang suasananya selalu bikin tenang.
              Tempat-tempat ini punya cerita. Ada ketulusan di baliknya. Rasanya personal dan hangat, seperti sesuatu yang dibuat khusus untuk kita.
            </p>

            <p ref={paragraph2Ref}>
              Namun, tempat-tempat berharga ini seringkali tidak mudah ditemukan. Di tengah riuhnya dunia digital, cerita mereka mudah sekali
              terlewat. Inilah alasan <strong className="text-[#FF7517]">Sentralokal</strong> hadir. Kami percaya setiap usaha lokal punya cerita yang
              layak didengar. Kami mengumpulkan tempat-tempat ini dalam satu wadah, agar kamu bisa lebih mudah menemukan dan mendukung mereka. Kami
              ingin kamu Kembali merasakan senangnya menemukan sesuatu yang otentik, yang dibuat dengan hati, yang ada di lingkungan sekitarmu.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStorySection;
