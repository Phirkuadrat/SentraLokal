import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardUMKM from "../components/CardUMKM";
import Footer from "../components/Footer";
import { allUmkmData } from "../data/umkmData";
import SplitText from "../components/SplitText";
import OurStorySection from "../components/OurStorySection";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const SearchIcon = () => (
  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  const [umkmList, setUmkmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setUmkmList(allUmkmData);
  }, []);

  const filteredUmkm = umkmList.filter((umkm) => {
    const matchesSearch = umkm.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || umkm.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(allUmkmData.map((umkm) => umkm.kategori))];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="min-h-screen bg-background text-text">
        <Navbar />

        <section
          className="relative h-screen flex flex-col justify-center items-center text-center text-white p-6"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full max-w-2xl mb-8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Cari UMKM...."
                  className="w-full p-5 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-secondary/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 p-2 bg-primary text-white rounded-full hover:bg-opacity-80 transition-colors">
                  <SearchIcon />
                </button>
              </div>
            </div>
            {/* SATU SENTRAL */}
            <SplitText
              text={
                <>
                  Satu <span className="text-[#FF7517]">Sentral</span>
                </>
              }
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              delay={80}
              duration={0.7}
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            {/* RIBUAN CERITA LOKAL */}
            <SplitText
              text={
                <>
                  Ribuan Cerita <span className="text-[#FF7517]">Lokal</span>
                </>
              }
              className="text-5xl md:text-7xl font-bold tracking-tight"
              delay={80}
              duration={0.7}
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-auto z-10 ">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#F9F5F0"
                fillOpacity="1"
                d="M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,160C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <div className="container mx-auto p-6 -mt-16 md:-mt-24 relative z-20 mb-20">
          <OurStorySection />
          <motion.section className="mb-12" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {/* Kita juga ubah judulnya agar serasi */}
            <h2 className="text-3xl font-bold text-[#000000] mb-6 text-center">Jelajahi Kategori</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200 border
          ${
            selectedCategory === category
              ? "bg-[#FF7517] text-white shadow-lg scale-105 border-[#FF7517]"
              : "bg-transparent text-[#FF7517] border-[#FF7517] hover:bg-[#FF7517] hover:text-white"
          }
        `}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {filteredUmkm.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">Tidak ada UMKM yang ditemukan.</p>
            ) : (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredUmkm.slice(0, 4).map((umkm) => (
                    <CardUMKM key={umkm.id} umkm={umkm} />
                  ))}
                </div>

                {filteredUmkm.length > 4 && (
                  <div className="text-center mt-12">
                    <Link
                      to="/UMKM"
                      className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors text-lg"
                    >
                      Lihat Semua UMKM
                    </Link>
                  </div>
                )}
              </div>
            )}
          </motion.section>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default HomePage;
