import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { allUmkmData } from "../data/umkmData.js";
import Navbar from "../components/Navbar.jsx";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl, shadowUrl, iconSize: [25, 41], iconAnchor: [12, 41],
  popupAnchor: [1, -34], shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function ResizeMap({ isListOpen }) {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 300);
  }, [isListOpen, map]);
  return null;
}

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const allLocations = allUmkmData.flatMap(umkm =>
  umkm.lokasi.map(lokasi => ({
    ...lokasi, brandId: umkm.id, brandNama: umkm.nama, brandKategori: umkm.kategori,
    brandGambar: umkm.gambar, brandDeskripsi: umkm.deskripsi
  }))
);

const allCategories = ["All", ...new Set(allLocations.map(loc => loc.brandKategori))];

function MapEvents({ setMapBounds }) {
  const map = useMapEvents({
    ready() {
      setMapBounds(map.getBounds());
    },
    moveend() {
      setMapBounds(map.getBounds());
    },
    zoomend() {
      setMapBounds(map.getBounds());
    }
  });
  return null;
}

function JelajahiPage() {
  const [isListOpen, setIsListOpen] = useState(true);
  const [popupInfo, setPopupInfo] = useState(null);
  const popupRef = useRef(null);
  const mapRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mapBounds, setMapBounds] = useState(null);

  const [locationsOnMap, setLocationsOnMap] = useState(allLocations);
  const [locationsInList, setLocationsInList] = useState(allLocations);

  const mapCenter = [-6.9023, 107.6186];
  const defaultZoom = 14;

  useEffect(() => {
    const filtered = allLocations.filter(loc => {
      const matchesCategory = selectedCategory === "All" || loc.brandKategori === selectedCategory;
      const matchesSearch = loc.brandNama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.nama_cabang.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setLocationsOnMap(filtered);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (!mapBounds) return;

    const inBoundLocs = locationsOnMap.filter(loc => {
      return mapBounds.contains([loc.lat, loc.lng]);
    });
    setLocationsInList(inBoundLocs);

  }, [mapBounds, locationsOnMap]);

  useEffect(() => {
    if (popupInfo && popupRef.current) {
      popupRef.current.openOn(popupRef.current._map);
    }
  }, [popupInfo]);

  const onLocationClick = (lokasi) => {
    setPopupInfo(lokasi);
    if (mapRef.current) {
      mapRef.current.flyTo([lokasi.lat, lokasi.lng], 17);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

        <div className="relative flex flex-col md:flex-row flex-grow pt-20 overflow-hidden" style={{ height: "calc(100vh - 5rem)" }}>
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center bg-white text-gray-700 border border-gray-200 shadow-lg rounded-r-lg w-9 h-20 hover:bg-gray-100 transition-all duration-300`}
            style={{ left: isListOpen ? "calc(25% - 18px)" : "0" }}
          >
            {isListOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>

          <div
            className={`bg-gray-100 border-r border-gray-200 overflow-y-auto shadow-inner transition-all duration-500 ease-in-out ${isListOpen ? "md:w-1/4 w-full h-1/2 md:h-auto" : "w-0 md:w-0 p-0"}`}
          >
            {isListOpen && (
              <div className="p-4 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Jelajahi Sekitar
                </h2>

                <div className="sticky top-0 bg-gray-100 py-2 z-10">
                  <div className="relative mb-2">
                    <input
                      type="text"
                      placeholder="Cari nama UMKM..."
                      className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                      <SearchIcon />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(kategori => (
                      <button
                        key={kategori}
                        onClick={() => setSelectedCategory(kategori)}
                        className={`py-1 px-3 rounded-full text-sm font-semibold transition-colors
                          ${selectedCategory === kategori
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-200'
                          }`}
                      >
                        {kategori}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Menampilkan {locationsInList.length} dari {locationsOnMap.length} lokasi
                  </h3>

                  {locationsInList.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">Tidak ada lokasi ditemukan di area peta ini.</p>
                  ) : (
                    <div className="space-y-4">
                      {locationsInList.map((lokasi) => (
                        <div
                          key={`list-${lokasi.id_lokasi}`}
                          onClick={() => onLocationClick(lokasi)}
                          className="bg-white rounded-xl shadow hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                        >
                          <img
                            src={lokasi.brandGambar}
                            alt={lokasi.brandNama}
                            className="rounded-t-xl w-full h-32 object-cover"
                          />
                          <div className="p-3">
                            <h3 className="text-gray-800 font-semibold text-lg truncate">
                              {lokasi.brandNama}
                            </h3>
                            <p className="text-sm text-gray-600 font-medium mb-1">
                              {lokasi.nama_cabang}
                            </p>
                            <p className="text-sm text-gray-500 line-clamp-2">
                              Kategori: {lokasi.brandKategori}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${isListOpen ? "md:w-3/4 w-full" : "w-full h-full"}`}
          >
            <MapContainer
              center={mapCenter}
              zoom={defaultZoom}
              scrollWheelZoom
              style={{ width: "100%", height: "100%" }}
              className="z-0"
              ref={mapRef}
            >
              <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ResizeMap isListOpen={isListOpen} />

              <MapEvents setMapBounds={setMapBounds} />

              {locationsOnMap.map((lokasi) => (
                <Marker
                  key={`marker-${lokasi.id_lokasi}`}
                  position={[lokasi.lat, lokasi.lng]}
                  eventHandlers={{ click: () => onLocationClick(lokasi) }}
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
                      src={popupInfo.brandGambar}
                      alt={popupInfo.brandNama}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {popupInfo.brandNama}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        ({popupInfo.nama_cabang})
                      </p>
                      <p className="text-xs text-gray-500 mb-1">
                        {popupInfo.brandKategori}
                      </p>
                      <Link
                        to={`/umkm/${popupInfo.brandId}`}
                        className="text-xs text-blue-600 hover:underline font-medium"
                      >
                        Lihat Detail Brand
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