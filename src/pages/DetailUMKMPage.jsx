import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

import Navbar from '../components/Navbar';
import { allUmkmData } from '../data/umkmData';

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

const LocationIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const PhoneIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

function LocationCard({ lokasi }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyPhone = (telepon) => {
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(telepon).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => console.error('Gagal menyalin:', err));
    };

    const mapPosition = [lokasi.lat, lokasi.lng];

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="h-64 md:h-auto md:w-1/3 z-0">
                <MapContainer
                    center={mapPosition}
                    zoom={16}
                    scrollWheelZoom={false}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ChangeView center={mapPosition} zoom={16} />
                    <TileLayer
                        attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={mapPosition} />
                </MapContainer>
            </div>

            <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-text">{lokasi.nama_cabang}</h3>
                {lokasi.alamat && (
                    <p className="text-gray-600 mt-2 mb-4">{lokasi.alamat}</p>
                )}

                <div className="space-y-4">
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${lokasi.lat},${lokasi.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors"
                    >
                        <LocationIcon /> Dapatkan Arah
                    </a>

                    {lokasi.telepon && (
                        <button
                            type="button"
                            onClick={() => handleCopyPhone(lokasi.telepon)}
                            disabled={isCopied}
                            className={`flex items-center justify-center w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300
                ${isCopied
                                    ? 'bg-green-600 cursor-not-allowed'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            {isCopied ? (
                                <><CheckIcon /> Nomor Tersalin!</>
                            ) : (
                                <><PhoneIcon /> Telepon ({lokasi.telepon})</>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}


function DetailUMKMPage() {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const { id } = useParams();
    const umkm = allUmkmData.find(item => item.id === +id);

    if (!umkm) {
        return (
            <div className="bg-background min-h-screen">
                <Navbar />
                <div className="pt-20 text-center py-40">
                    <h1 className="text-4xl font-bold text-text mb-4">404 - UMKM Tidak Ditemukan</h1>
                    <p className="text-gray-600 mb-8">Maaf, kami tidak dapat menemukan data untuk UMKM ini.</p>
                    <Link to="/UMKM" className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors">
                        Kembali ke Daftar UMKM
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-background min-h-screen">
                <Navbar />

                <div
                    className="h-[50vh] bg-cover bg-center relative pt-20"
                    style={{ backgroundImage: `url(${umkm.gambar})` }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="container mx-auto max-w-7xl h-full flex flex-col justify-end relative z-10 p-8 text-white">
                        <p className="text-lg font-semibold text-primary uppercase tracking-wider">{umkm.kategori}</p>
                        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">{umkm.nama}</h1>
                    </div>
                </div>

                <div className="container mx-auto max-w-7xl p-4 md:p-8">

                    <div className="w-full space-y-8">

                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-text mb-4">Tentang {umkm.nama}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{umkm.deskripsi}</p>
                        </section>

                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-text mb-4">Galeri Foto</h2>
                            {umkm.gallery && umkm.gallery.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {umkm.gallery.map((photo, index) => (
                                        <motion.div
                                            key={index}
                                            className="rounded-lg overflow-hidden cursor-pointer h-40 w-full"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => {
                                                setLightboxIndex(index);
                                                setOpenLightbox(true);
                                            }}
                                        >
                                            <img
                                                src={photo.src}
                                                alt={`${umkm.nama} ${index + 1}`}
                                                className="object-cover w-full h-full"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">Galeri foto belum tersedia.</p>
                            )}
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-text mb-6">
                                Temukan Kami di {umkm.lokasi.length} Lokasi
                            </h2>
                            <div className="space-y-8">
                                {umkm.lokasi.map(lokasi => (
                                    <LocationCard key={lokasi.id_lokasi} lokasi={lokasi} />
                                ))}
                            </div>
                        </section>

                        {umkm.promos && umkm.promos.length > 0 && (
                            <section className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-text mb-4">Promo Saat Ini</h2>

                                <div className="space-y-4">
                                    {umkm.promos.map(promo => (
                                        <div key={promo.id} className="border-l-4 border-primary p-4 bg-background rounded-r-lg">
                                            <h3 className="font-bold text-lg text-gray-800">{promo.judul}</h3>
                                            <p className="text-gray-600">{promo.deskripsi}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {umkm.events && umkm.events.length > 0 && (
                            <section className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-text mb-4">Event Mendatang</h2>

                                <div className="space-y-4">
                                    {umkm.events.map(event => (
                                        <div key={event.id} className="border-l-4 border-primary p-4 bg-background rounded-r-lg">
                                            <h3 className="font-bold text-lg text-gray-800">{event.judul}</h3>
                                            <p className="text-gray-600">{event.deskripsi}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </div>

            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={umkm.gallery}
                index={lightboxIndex}
                plugins={[Thumbnails]}
            />
        </motion.div>
    );
}

export default DetailUMKMPage;