// src/components/CardUMKM.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Untuk navigasi ke detail UMKM

function CardUMKM({ umkm }) { // Komponen ini menerima properti 'umkm'
  return (
    <Link to={`/umkm/${umkm.id}`} className="block"> {/* Klik kartu akan ke halaman detail */}
      <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        {/* Gambar UMKM */}
        <img 
          src={umkm.gambar || 'https://via.placeholder.com/400x250/1f2937/ffffff?text=Image+UMKM'} 
          alt={umkm.nama} 
          className="w-full h-40 object-cover" 
        />
        
        <div className="p-4">
          {/* Nama UMKM */}
          <h3 className="text-xl font-semibold text-white mb-2 truncate">
            {umkm.nama}
          </h3>
          
          {/* Kategori */}
          <p className="text-sm text-gray-400 mb-3">
            Kategori: <span className="text-secondary">{umkm.kategori}</span>
          </p>
          
          {/* Deskripsi Singkat */}
          <p className="text-gray-300 text-sm line-clamp-2">
            {umkm.deskripsi}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardUMKM;