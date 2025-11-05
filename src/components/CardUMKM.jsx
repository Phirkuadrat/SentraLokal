// src/components/CardUMKM.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Untuk navigasi ke detail UMKM

function CardUMKM({ umkm }) { // Komponen ini menerima properti 'umkm'
  return (
    <Link to={`/umkm/${umkm.id}`} className="block group"> {/* Klik kartu akan ke halaman detail */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Gambar UMKM */}
        <div className='overflow-hidden h-40'>
          <img
            src={umkm.gambar || 'https://via.placeholder.com/400x250/1f2937/ffffff?text=Image+UMKM'}
            alt={umkm.nama}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Kategori */}
        <div className="p-4">
          <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wide">
            {umkm.kategori}
          </p>

          {/* Nama UMKM */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">
            {umkm.nama}
          </h3>

          {/* Deskripsi Singkat */}
          <p className="text-gray-600 text-sm line-clamp-2">
            {umkm.deskripsi}
          </p>
        </div>
      </div>
    </Link >
  );
}

export default CardUMKM;