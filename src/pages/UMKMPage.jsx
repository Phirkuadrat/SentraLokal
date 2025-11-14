import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '/src/components/Navbar.jsx';
import CardUMKM from '/src/components/CardUMKM.jsx';
import { allUmkmData, allPromos, allEvents } from '/src/data/umkmData.js';

const PromoIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m-1 1H8m5 0h3m-3 1v1m-2-1c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m-1 1H8m5 0h3m-3 1v1"></path></svg>
);
const EventIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const StoreIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const INITIAL_LOAD_COUNT = 8;
const LOAD_MORE_AMOUNT = 4;

function UMKMPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('umkm');

  const [visibleItems, setVisibleItems] = useState(INITIAL_LOAD_COUNT);

  useEffect(() => {
    setVisibleItems(INITIAL_LOAD_COUNT);
  }, [activeTab, searchTerm]);

  const filteredUmkm = allUmkmData.filter(umkm =>
    umkm.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    umkm.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    umkm.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPromos = allPromos.filter(promo =>
    promo.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promo.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promo.umkmNama.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEvents = allEvents.filter(event =>
    event.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.umkmNama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const umkmToShow = filteredUmkm.slice(0, visibleItems);
  const promosToShow = filteredPromos.slice(0, visibleItems);
  const eventsToShow = filteredEvents.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + LOAD_MORE_AMOUNT);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-background min-h-screen">
        <Navbar />

        <div className="bg-primary text-white shadow-lg pt-20">
          <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
            <h1 className="text-5xl font-bold">Temukan Semuanya</h1>
            <p className="text-xl text-secondary mt-2">
              Promo, event, dan UMKM terbaik di satu tempat.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl p-4 md:p-8">

          <div className="flex justify-center mb-8 border-b border-gray-300">
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${activeTab === 'umkm' ? 'text-primary border-b-4 border-primary' : 'text-gray-600 hover:text-primary'}`}
              onClick={() => { setActiveTab('umkm'); }}
            >
              <StoreIcon /> UMKM
            </button>
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${activeTab === 'promo' ? 'text-primary border-b-4 border-primary' : 'text-gray-600 hover:text-primary'}`}
              onClick={() => { setActiveTab('promo'); }}
            >
              <PromoIcon /> Promo
            </button>
            <button
              className={`flex flex-col items-center w-32 py-4 px-4 text-lg font-semibold transition-colors duration-200 ${activeTab === 'event' ? 'text-primary border-b-4 border-primary' : 'text-gray-600 hover:text-primary'}`}
              onClick={() => { setActiveTab('event'); }}
            >
              <EventIcon /> Event
            </button>
          </div>

          <div className="mb-8 relative">
            <input
              type="text"
              placeholder={`Cari ${activeTab === 'umkm' ? 'UMKM' : activeTab === 'promo' ? 'promo' : 'event'}...`}
              className="w-full p-4 pl-12 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>

          {activeTab === 'umkm' && (
            <section>
              <h2 className="sr-only">Semua UMKM</h2>
              {filteredUmkm.length > 0 ? (
                <div>
                  <motion.div
                    key={`umkm-grid-${searchTerm}-${visibleItems}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {umkmToShow.map(umkm => (
                      <motion.div key={umkm.id} variants={gridItemVariants}>
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

          {activeTab === 'promo' && (
            <section>
              <h2 className="sr-only">Promo & Penawaran Terbaik</h2>
              {filteredPromos.length > 0 ? (
                <div>
                  <motion.div
                    key={`promo-grid-${searchTerm}-${visibleItems}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {promosToShow.map(promo => (
                      <motion.div key={promo.id} variants={gridItemVariants} className="h-full">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{promo.judul}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{promo.deskripsi}</p>
                          </div>
                          <Link
                            to={`/umkm/${promo.umkmId}`}
                            className="text-sm font-semibold text-primary hover:underline mt-4 block"
                          >
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

          {activeTab === 'event' && (
            <section>
              <h2 className="sr-only">Event & Kegiatan Seru</h2>
              {filteredEvents.length > 0 ? (
                <div>
                  <motion.div
                    key={`event-grid-${searchTerm}-${visibleItems}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {eventsToShow.map(event => (
                      <motion.div key={event.id} variants={gridItemVariants} className="h-full">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{event.judul}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{event.deskripsi}</p>
                          </div>
                          <Link
                            to={`/umkm/${event.umkmId}`}
                            className="text-sm font-semibold text-primary hover:underline mt-4 block"
                          >
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
      </div>
    </motion.div>
  );
}

export default UMKMPage;