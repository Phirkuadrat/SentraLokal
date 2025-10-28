// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardUMKM from '../components/CardUMKM';

function HomePage() {
  const [umkmList, setUmkmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // --- Ini adalah contoh data dummy ---
  // Nantinya, ini akan diganti dengan fetch dari API Laravel Anda!
  const dummyUmkm = [
    { id: 1, nama: 'Warung Kopi Senja', kategori: 'Minuman', deskripsi: 'Kopi robusta terbaik di gang sempit, dengan suasana cozy.', gambar: 'https://via.placeholder.com/400x250/36454F/ffffff?text=Kopi+Senja' },
    { id: 2, nama: 'Bakso Legendaris Pak Kumis', kategori: 'Makanan', deskripsi: 'Bakso urat dengan resep turun temurun sejak 1980.', gambar: 'https://via.placeholder.com/400x250/2E8B57/ffffff?text=Bakso+Pak+Kumis' },
    { id: 3, nama: 'Toko Kerajinan Etnik', kategori: 'Kerajinan', deskripsi: 'Berbagai kerajinan tangan unik dari seluruh nusantara.', gambar: 'https://via.placeholder.com/400x250/8B4513/ffffff?text=Kerajinan+Etnik' },
    { id: 4, nama: 'Minimarket Sentosa', kategori: 'Lainnya', deskripsi: 'Kebutuhan sehari-hari dengan harga bersaing.', gambar: 'https://via.placeholder.com/400x250/4682B4/ffffff?text=Minimarket' },
    { id: 5, nama: 'Kedai Martabak Manis', kategori: 'Makanan', deskripsi: 'Martabak manis dengan topping premium, cocok untuk malam minggu.', gambar: 'https://via.placeholder.com/400x250/FFD700/000000?text=Martabak' },
    { id: 6, nama: 'Bengkel Motor Prima', kategori: 'Jasa', deskripsi: 'Perbaikan dan servis motor segala jenis, cepat dan terpercaya.', gambar: 'https://via.placeholder.com/400x250/708090/ffffff?text=Bengkel+Motor' },
    { id: 7, nama: 'Pangkas Rambut Gaya Baru', kategori: 'Jasa', deskripsi: 'Potongan rambut modern dan klasik dengan harga terjangkau.', gambar: 'https://via.placeholder.com/400x250/6A5ACD/ffffff?text=Pangkas+Rambut' },
    { id: 8, nama: 'Toko Buku Cerdas', kategori: 'Lainnya', deskripsi: 'Berbagai buku fiksi dan non-fiksi, juga alat tulis.', gambar: 'https://via.placeholder.com/400x250/D2B48C/000000?text=Toko+Buku' },
  ];
  // --- Akhir contoh data dummy ---


  useEffect(() => {
    // --- Di sini nanti Anda akan panggil API Laravel Anda ---
    // Contoh:
    // fetch('http://proyek-api.test/api/umkm')
    //   .then(res => res.json())
    //   .then(data => setUmkmList(data))
    //   .catch(err => console.error("Error fetching UMKM:", err));

    // Untuk sementara, pakai data dummy
    setUmkmList(dummyUmkm); 
  }, []);

  // Filter UMKM berdasarkan search term dan kategori
  const filteredUmkm = umkmList.filter(umkm => {
    const matchesSearch = umkm.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          umkm.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || umkm.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(dummyUmkm.map(umkm => umkm.kategori))];

  return (
    <div className="min-h-screen bg-gray-900 text-white"> {/* Latar belakang gelap untuk Dark Mode */}
      <Navbar /> {/* Komponen Navbar */}

      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Temukan <span className="text-primary">Harta Karun Lokal</span> Anda
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Jelajahi UMKM terdekat dengan mudah dan temukan pengalaman baru.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Cari UMKM, produk, atau layanan..."
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        {/* Filter Kategori */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Jelajahi Kategori</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 px-6 rounded-full text-lg transition-all duration-200 
                  ${selectedCategory === category 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Daftar UMKM */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">UMKM Pilihan</h2>
          {filteredUmkm.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">Tidak ada UMKM yang ditemukan untuk pencarian ini.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredUmkm.map(umkm => (
                <CardUMKM key={umkm.id} umkm={umkm} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default HomePage;