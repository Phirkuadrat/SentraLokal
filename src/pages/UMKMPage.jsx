import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '/src/components/Navbar.jsx';
import CardUMKM from '/src/components/CardUMKM.jsx'; 

const allUmkmData = [
  { 
    id: 1, 
    nama: 'Warung Kopi Senja', 
    kategori: 'Minuman', 
    deskripsi: 'Kopi robusta terbaik di gang sempit, dengan suasana cozy. Kami menyajikan biji kopi pilihan dari seluruh nusantara, diseduh dengan metode manual brew untuk menjaga cita rasa otentik.', 
    gambar: 'https://images.unsplash.com/photo-1511920170033-f8329023c35c?auto=format&fit=crop&w=1087&q=80', 
    lat: -6.9023, 
    lng: 107.6186,
    alamat: 'Jl. Braga No. 15, Bandung',
    telepon: '081234567890',
    promos: [
      { id: 'p1', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Diskon 20% Kopi Susu', deskripsi: 'Tunjukkan kartu pelajar/mahasiswa untuk diskon 20% Kopi Susu Gula Aren.' },
      { id: 'p2', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Beli 1 Gratis 1', deskripsi: 'Promo Beli 1 Gratis 1 untuk semua manual brew setiap hari Jumat.' },
    ],
    events: [
      { id: 'e1', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Live Music Akustik', deskripsi: 'Nikmati alunan musik akustik setiap Sabtu malam, mulai pukul 19.00.' }
    ]
  },
  { 
    id: 2, 
    nama: 'Bakso Legendaris Pak Kumis', 
    kategori: 'Makanan', 
    deskripsi: 'Bakso urat dengan resep turun temurun sejak 1980. Kuah kaldu kami dibuat dari tulang sumsum sapi asli, dimasak perlahan selama 8 jam.', 
    gambar: 'https://images.unsplash.com/photo-1576867757603-05b1348c9803?auto=format&fit=crop&w=1074&q=80', 
    lat: -6.9045, 
    lng: 107.6198,
    alamat: 'Jl. Cihampelas No. 120, Bandung',
    telepon: '082112233445',
    promos: [
      { id: 'p1', umkmId: 2, umkmNama: 'Bakso Pak Kumis', judul: 'Gratis Es Teh Manis', deskripsi: 'Setiap pembelian Bakso Urat Spesial, gratis 1 Es Teh Manis.' },
    ],
    events: [] 
  },
  { 
    id: 3, 
    nama: 'Toko Kerajinan Etnik', 
    kategori: 'Kerajinan', 
    deskripsi: 'Berbagai kerajinan tangan unik dari seluruh nusantara. Kami bekerja sama langsung dengan pengrajin lokal untuk memastikan kualitas dan keaslian produk.', 
    gambar: 'https://images.unsplash.com/photo-1510416075971-d64de8ab3105?auto=format&fit=crop&w=687&q=80', 
    lat: -6.9001, 
    lng: 107.6155,
    alamat: 'Jl. Asia Afrika No. 50, Bandung',
    telepon: '083887766554',
    promos: [], 
    events: [
      { id: 'e1', umkmId: 3, umkmNama: 'Toko Kerajinan Etnik', judul: 'Workshop Membatik', deskripsi: 'Ikuti workshop membatik bersama seniman lokal. Terbuka untuk umum setiap hari Minggu.' }
    ]
  },
];

const allPromos = allUmkmData.flatMap(umkm => umkm.promos);
const allEvents = allUmkmData.flatMap(umkm => umkm.events);
// -----------------------------------------------------------

const PromoIcon = () => (
  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m-1 1H8m5 0h3m-3 1v1m-2-1c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m-1 1H8m5 0h3m-3 1v1"></path></svg>
);
const EventIcon = () => (
  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const StoreIcon = () => (
  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);

function DetailUMKMPage() { 
  const [searchTerm, setSearchTerm] = useState('');
  
  const [umkmList, setUmkmList] = useState(allUmkmData);

  const filteredUmkm = umkmList.filter(umkm => 
    umkm.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    umkm.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 py-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Temukan Semuanya</h1>
          <p className="text-xl text-gray-600 mt-2">
            Promo, event, dan UMKM terbaik di satu tempat.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl p-4 md:p-8">
        
        {/* Bagian Promo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <PromoIcon /> Promo & Penawaran Terbaik
          </h2>
          {allPromos.length > 0 ? (
            <div className="flex overflow-x-auto gap-6 pb-4">
              {allPromos.map(promo => (
                <div key={promo.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
                  <h3 className="font-bold text-lg text-gray-800">{promo.judul}</h3>
                  <p className="text-gray-600 mb-3">{promo.deskripsi}</p>
                  <Link 
                    to={`/umkm/${promo.umkmId}`} // Link ke detail UMKM
                    className="text-sm font-semibold text-secondary hover:underline"
                  >
                    Dari: {promo.umkmNama}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Belum ada promo yang tersedia saat ini.</p>
          )}
        </section>

        {/* Bagian Event */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <EventIcon /> Event & Kegiatan Seru
          </h2>
          {allEvents.length > 0 ? (
            <div className="flex overflow-x-auto gap-6 pb-4">
              {allEvents.map(event => (
                <div key={event.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-gray-800">{event.judul}</h3>
                  <p className="text-gray-600 mb-3">{event.deskripsi}</p>
                  <Link 
                    to={`/umkm/${event.umkmId}`} // Link ke detail UMKM
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Di: {event.umkmNama}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Belum ada event yang tersedia saat ini.</p>
          )}
        </section>

        {/* Bagian Semua UMKM */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <StoreIcon /> Semua UMKM
          </h2>

          {/* Search Bar untuk Semua UMKM */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Cari UMKM berdasarkan nama atau kategori..."
              className="w-full p-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Grid Daftar UMKM */}
          {filteredUmkm.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredUmkm.map(umkm => (
                <CardUMKM key={umkm.id} umkm={umkm} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">UMKM tidak ditemukan.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default DetailUMKMPage; 

