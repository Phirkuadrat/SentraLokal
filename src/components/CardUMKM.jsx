import React from 'react';
import { Link } from 'react-router-dom';

function CardUMKM({ umkm }) {
  return (
    <Link to={`/umkm/${umkm.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className='overflow-hidden h-40'>
          <img
            src={umkm.gambar || 'https://via.placeholder.com/400x250/1f2937/ffffff?text=Image+UMKM'}
            alt={umkm.nama}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className='flex justify-between items-center mb-1'>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              {umkm.kategori}
            </p>

            {umkm.lokasi && umkm.lokasi.length > 1 && (
              <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                {umkm.lokasi.length} Lokasi
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">
            {umkm.nama}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2 flex-1">
            {umkm.deskripsi}
          </p>

          {umkm.lokasi && umkm.lokasi.length > 0 && (
            <p className="text-xs text-gray-500 mt-3 truncate">
              📍 {umkm.lokasi[0].alamat}
            </p>
          )}
        </div>
      </div>
    </Link >
  );
}

export default CardUMKM;