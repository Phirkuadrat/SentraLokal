import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CardUMKM from "../components/CardUMKM";

const SearchIcon = () => (
  <svg
    className="w-6 h-6 text-secondary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

function HomePage() {
  const [umkmList, setUmkmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dummyUmkm = [
    {
      id: 1,
      nama: "Warung Kopi Senja",
      kategori: "Minuman",
      deskripsi: "Kopi robusta terbaik di gang sempit, dengan suasana cozy.",
      gambar:
        "https://images.unsplash.com/photo-1511920170033-f8329023c35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      nama: "Bakso Legendaris Pak Kumis",
      kategori: "Makanan",
      deskripsi: "Bakso urat dengan resep turun temurun sejak 1980.",
      gambar:
        "https://images.unsplash.com/photo-1576867757603-05b1348c9803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 3,
      nama: "Toko Kerajinan Etnik",
      kategori: "Kerajinan",
      deskripsi: "Berbagai kerajinan tangan unik dari seluruh nusantara.",
      gambar:
        "https://images.unsplash.com/photo-1510416075971-d64de8ab3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      nama: "Pangkas Rambut Gaya Baru",
      kategori: "Jasa",
      deskripsi: "Potongan rambut modern dan klasik dengan harga terjangkau.",
      gambar:
        "https://images.unsplash.com/photo-1585749363324-336e09e8093a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  useEffect(() => {
    setUmkmList(dummyUmkm);
  }, []);

  const filteredUmkm = umkmList.filter((umkm) => {
    const matchesSearch = umkm.nama
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || umkm.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(dummyUmkm.map((umkm) => umkm.kategori)),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen bg-background text-text">
        <Navbar />

        <section
          className="relative h-screen flex flex-col justify-center items-center text-center text-white p-6"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)",
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

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Satu <span className="text-primary">Sentral</span>,
              <br />
              Ribuan <span className="text-primary">Cerita Lokal</span>.
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-auto z-10">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#F9F5F0"
                fillOpacity="1"
                d="M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,160C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <div className="container mx-auto p-6 -mt-16 md:-mt-24 relative z-20">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Jelajahi Kategori
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200 
                  ${selectedCategory === category
                      ? "bg-secondary text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              UMKM Pilihan
            </h2>
            {filteredUmkm.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                Tidak ada UMKM yang ditemukan.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredUmkm.map((umkm) => (
                  <CardUMKM key={umkm.id} umkm={umkm} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
