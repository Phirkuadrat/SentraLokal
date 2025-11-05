import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

import Navbar from "../components/Navbar.jsx";
import CardUMKM from "../components/CardUMKM.jsx";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const ChevronLeftIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 19l-7-7 7-7"
    />
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

function ResizeMap({ isListOpen }) {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, [isListOpen, map]);
  return null;
}

function JelajahiPage() {
  const [isListOpen, setIsListOpen] = useState(true);
  const [popupInfo, setPopupInfo] = useState(null);
  const popupRef = useRef(null);

  const [umkmList] = useState([
    {
      id: 1,
      nama: "Warung Kopi Senja",
      kategori: "Minuman",
      deskripsi: "Kopi robusta terbaik.",
      gambar:
        "https://images.unsplash.com/photo-1511920170033-f8329023c35c?auto=format&fit=crop&w=687&q=80",
      lat: -6.9023,
      lng: 107.6186,
    },
    {
      id: 2,
      nama: "Bakso Pak Kumis",
      kategori: "Makanan",
      deskripsi: "Bakso urat resep kuno.",
      gambar:
        "https://images.unsplash.com/photo-1576867757603-05b1348c9803?auto=format&fit=crop&w=1074&q=80",
      lat: -6.9045,
      lng: 107.6198,
    },
    {
      id: 3,
      nama: "Kerajinan Etnik",
      kategori: "Kerajinan",
      deskripsi: "Kerajinan tangan unik.",
      gambar:
        "https://images.unsplash.com/photo-1510416075971-d64de8ab3105?auto=format&fit=crop&w=687&q=80",
      lat: -6.9001,
      lng: 107.6155,
    },
    {
      id: 4,
      nama: "Pangkas Rambut Gaya",
      kategori: "Jasa",
      deskripsi: "Potongan rambut modern.",
      gambar:
        "https://images.unsplash.com/photo-1585749363324-336e09e8093a?auto=format&fit=crop&w=687&q=80",
      lat: -6.9033,
      lng: 107.6167,
    },
  ]);

  const mapCenter = [-6.9023, 107.6186];
  const defaultZoom = 15;

  useEffect(() => {
    if (popupInfo && popupRef.current) {
      popupRef.current.openOn(popupRef.current._map);
    }
  }, [popupInfo]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

        {/* Layout utama */}
        <div className="relative flex flex-col md:flex-row flex-grow pt-20 overflow-hidden" style={{ height: "calc(100vh - 5rem)" }}>
          {/* Tombol toggle */}
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center 
                      bg-white text-gray-700 border border-gray-200 shadow-lg rounded-r-lg w-9 h-20 hover:bg-gray-100 transition-all duration-300`}
            style={{
              left: isListOpen ? "calc(25% - 18px)" : "0",
            }}
          >
            {isListOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>

          {/* Panel daftar UMKM */}
          <div
            className={`bg-gray-100 border-r border-gray-200 overflow-y-auto shadow-inner transition-all duration-500 ease-in-out 
                      ${isListOpen
                ? "md:w-1/4 w-full h-1/2 md:h-auto"
                : "w-0 md:w-0 p-0"
              }`}
          >
            {isListOpen && (
              <div className="p-5 space-y-5">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-between">
                  Jelajahi Sekitar
                  <span className="text-sm text-gray-500 font-normal">
                    ({umkmList.length} UMKM)
                  </span>
                </h2>

                <div className="space-y-4">
                  {umkmList.map((umkm) => (
                    <div
                      key={`list-${umkm.id}`}
                      onClick={() => setPopupInfo(umkm)}
                      className="bg-white rounded-xl shadow hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={umkm.gambar}
                        alt={umkm.nama}
                        className="rounded-t-xl w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="text-gray-800 font-semibold text-lg truncate">
                          {umkm.nama}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">
                          Kategori: {umkm.kategori}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {umkm.deskripsi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Peta */}
          <div
            className={`transition-all duration-500 ease-in-out 
                      ${isListOpen ? "md:w-3/4 w-full" : "w-full h-full"}`}
          >
            <MapContainer
              center={mapCenter}
              zoom={defaultZoom}
              scrollWheelZoom
              style={{ width: "100%", height: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ResizeMap isListOpen={isListOpen} />

              {umkmList.map((umkm) => (
                <Marker
                  key={`marker-${umkm.id}`}
                  position={[umkm.lat, umkm.lng]}
                  eventHandlers={{ click: () => setPopupInfo(umkm) }}
                />
              ))}

              {popupInfo && (
                <Popup
                  ref={popupRef}
                  position={[popupInfo.lat, popupInfo.lng]}
                  onClose={() => setPopupInfo(null)}
                >
                  <div className="w-52 bg-white rounded-lg overflow-hidden shadow">
                    <img
                      src={
                        popupInfo.gambar ||
                        "https://placehold.co/400x250/F97316/FFFFFF?text=SentraLokal"
                      }
                      alt={popupInfo.nama}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {popupInfo.nama}
                      </h3>
                      <p className="text-xs text-gray-500 mb-1">
                        {popupInfo.kategori}
                      </p>
                      <Link
                        to={`/umkm/${popupInfo.id}`}
                        className="text-xs text-blue-600 hover:underline font-medium"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </Popup>
              )}

              {popupInfo && (
                <ChangeView center={[popupInfo.lat, popupInfo.lng]} zoom={17} />
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default JelajahiPage;
