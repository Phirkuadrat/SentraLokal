import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Bagian Logo/Tentang */}
          <div className="md:col-span-2">
            {/* 2. Judul diubah ke warna oranye */}
            <h3 className="text-2xl font-bold text-[#FF7517] mb-4">Sentralokal</h3>
            {/* Teks paragraf kembali ke abu-abu terang (diwarisi dari footer) */}
            <p className="leading-relaxed max-w-md text-justify">
              Kami percaya setiap usaha lokal punya cerita yang layak didengar. Kami mengumpulkan tempat-tempat ini dalam satu wadah, agar kamu bisa
              lebih mudah menemukan dan mendukung mereka. Kami ingin kamu kembali merasakan senangnya menemukan sesuatu yang otentik, yang dibuat
              dengan hati, yang ada di lingkungan sekitarmu{" "}
            </p>
          </div>

          {/* Bagian Tautan Cepat */}
          <div>
            {/* 2. Judul diubah ke warna oranye */}
            <h4 className="text-lg font-semibold text-[#FF7517] mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                {/* Tautan kembali ke abu-abu terang, hover menjadi putih */}
                <a href="/tentang" className="hover:text-white transition-colors duration-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/layanan" className="hover:text-white transition-colors duration-300">
                  Jelajahi
                </a>
              </li>
              <li>
                <a href="/portofolio" className="hover:text-white transition-colors duration-300">
                  Daftar UMKM
                </a>
              </li>
              {/* <li>
                <a href="/blog" className="hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Bagian Our Team (Modifikasi Horizontal 3 Anggota) */}
          <div>
            {/* 2. Judul diubah ke warna oranye */}
            <h4 className="text-lg font-semibold text-[#FF7517] mb-4">Tim Kami</h4>
            <div className="grid grid-cols-3 gap-4">
              {/* Anggota Tim 1 */}
              <div className="text-center">
                <img
                  src="/image/Profile_Lutfi.jpg"
                  alt="Lutfi Firmansyah"
                  // 3. Ukuran diperbesar ke w-20 h-20 (80px)
                  // Border kembali ke abu-abu gelap
                  className="rounded-full w-20 h-20 mx-auto mb-2 border-2 border-gray-700 object-cover"
                />
                {/* Teks nama kembali ke abu-abu terang & tetap bold */}
                <p className="text-sm text-gray-400 font-bold">Lutfi Firmansyah</p>
              </div>

              {/* Anggota Tim 2 */}
              <div className="text-center">
                <img
                  src="/image/Profile_Axel.jpg"
                  alt="Muhammad Axel"
                  className="rounded-full w-20 h-20 mx-auto mb-2 border-2 border-gray-700 object-cover"
                />
                <p className="text-sm text-gray-400 font-bold">Muhammad Axel</p>
              </div>

              {/* Anggota Tim 3 */}
              <div className="text-center">
                <img
                  src="/image/Profile_Daffa.jpg"
                  alt="Daffa Maulana"
                  className="rounded-full w-20 h-20 mx-auto mb-2 border-2 border-gray-700 object-cover"
                />
                <p className="text-sm text-gray-400 font-bold">Daffa Maulana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        {/* Garis kembali ke abu-abu gelap */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          {/* Teks copyright kembali ke abu-abu (lebih redup) */}
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} SentraLokal. Hak Cipta Dilindungi.</p>

          {/* Ikon Media Sosial */}
          {/* Ikon kembali ke abu-abu, hover menjadi oranye */}
          <div className="flex space-x-4">
            <a
              href="httpss://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="httpsS://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="httpsS://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
