import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar.jsx";
import CardUMKM from "/src/components/CardUMKM.jsx";
import Footer from "../components/Footer";

import { allUmkmData, allPromos, allEvents } from "/src/data/umkmData.js";

const PromoIcon = () => <img src="/image/promo.svg" alt="Promo" className="w-6 h-6 mb-1" />;

const StoreIcon = () => <img src="/image/store.svg" alt="Store" className="w-6 h-6 mb-1" />;

const EventIcon = () => <img src="/image/event.svg" alt="Event" className="w-6 h-6 mb-1" />;
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const INITIAL_LOAD_COUNT = 8;
const LOAD_MORE_AMOUNT = 4;

function UMKMPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("umkm");
  const [visibleItems, setVisibleItems] = useState(INITIAL_LOAD_COUNT);

  useEffect(() => {
    setVisibleItems(INITIAL_LOAD_COUNT);
  }, [activeTab, searchTerm]);

  const filteredUmkm = allUmkmData.filter(
    (umkm) =>
      umkm.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPromos = allPromos.filter(
    (promo) =>
      promo.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.umkmNama.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEvents = allEvents.filter(
    (event) =>
      event.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.umkmNama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const umkmToShow = filteredUmkm.slice(0, visibleItems);
  const promosToShow = filteredPromos.slice(0, visibleItems);
  const eventsToShow = filteredEvents.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + LOAD_MORE_AMOUNT);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="bg-background min-h-screen">
        <Navbar />

        <div className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/image/bg-umkm.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

          <div className="container mx-auto max-w-7xl px-4 py-20 text-center relative z-10 mt-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white">Temukan Semuanya</h1>
            <p className="text-xl md:text-2xl text-white mt-4">Promo, event, dan UMKM terbaik di satu tempat.</p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl p-4 md:p-8">
          <div className="flex justify-center mb-8 border-b border-gray-300">
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${
                activeTab === "umkm" ? "text-primary border-b-4 border-primary" : "text-gray-600 hover:text-primary"
              }`}
              onClick={() => {
                setActiveTab("umkm");
              }}
            >
              <StoreIcon /> UMKM
            </button>
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${
                activeTab === "promo" ? "text-primary border-b-4 border-primary" : "text-gray-600 hover:text-primary"
              }`}
              onClick={() => {
                setActiveTab("promo");
              }}
            >
              <PromoIcon /> Promo
            </button>
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${
                activeTab === "event" ? "text-primary border-b-4 border-primary" : "text-gray-600 hover:text-primary"
              }`}
              onClick={() => {
                setActiveTab("event");
              }}
            >
              <EventIcon /> Event
            </button>
          </div>

          <div className="mb-8 relative">
            <input
              type="text"
              placeholder={`Cari ${activeTab === "umkm" ? "UMKM" : activeTab === "promo" ? "promo" : "event"}...`}
              className="w-full p-4 pl-12 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>

          {activeTab === "umkm" && (
            <section>
              <h2 className="sr-only">Semua UMKM</h2>
              {filteredUmkm.length > 0 ? (
                <div>
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {umkmToShow.map((umkm) => (
                      <motion.div
                        key={umkm.id}
                        variants={gridItemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <CardUMKM umkm={umkm} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {filteredUmkm.length > visibleItems && (
                    <div className="text-center mt-12">
                      <button
                        onClick={handleLoadMore}
                        className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors text-lg"
                      >
                        Tampilkan Lebih Banyak
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center text-lg py-10">Tidak ada UMKM yang ditemukan.</p>
              )}
            </section>
          )}

          {activeTab === "promo" && (
            <section>
              <h2 className="sr-only">Promo & Penawaran Terbaik</h2>
              {filteredPromos.length > 0 ? (
                <div>
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promosToShow.map((promo) => (
                      <motion.div
                        key={promo.id}
                        variants={gridItemVariants}
                        className="h-full"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{promo.judul}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{promo.deskripsi}</p>
                          </div>
                          <Link to={`/umkm/${promo.umkmId}`} className="text-sm font-semibold text-primary hover:underline mt-4 block">
                            Dari: {promo.umkmNama}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {filteredPromos.length > visibleItems && (
                    <div className="text-center mt-12">
                      <button
                        onClick={handleLoadMore}
                        className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors text-lg"
                      >
                        Tampilkan Lebih Banyak
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center text-lg py-10">Belum ada promo yang tersedia saat ini.</p>
              )}
            </section>
          )}

          {activeTab === "event" && (
            <section>
              <h2 className="sr-only">Event & Kegiatan Seru</h2>
              {filteredEvents.length > 0 ? (
                <div>
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsToShow.map((event) => (
                      <motion.div
                        key={event.id}
                        variants={gridItemVariants}
                        className="h-full"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{event.judul}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{event.deskripsi}</p>
                          </div>
                          <Link to={`/umkm/${event.umkmId}`} className="text-sm font-semibold text-primary hover:underline mt-4 block">
                            Di: {event.umkmNama}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {filteredEvents.length > visibleItems && (
                    <div className="text-center mt-12">
                      <button
                        onClick={handleLoadMore}
                        className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors text-lg"
                      >
                        Tampilkan Lebih Banyak
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center text-lg py-10">Belum ada event yang tersedia saat ini.</p>
              )}
            </section>
          )}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default UMKMPage;
