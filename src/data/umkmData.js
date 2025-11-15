export const allUmkmData = [
    {
        id: 1,
        nama: "Toko Bubur Dibawah Pohon Rindang",
        kategori: "Makanan",
        deskripsi: "Warung bubur legendaris yang tak pernah sepi. Menawarkan kenikmatan semangkuk bubur ayam hangat di bawah naungan pohon rindang yang sejuk. Tempat sempurna untuk memulai pagi dengan suasana santai dan cita rasa otentik.",
        gambar: "/image/bubur-dpr-1.png",
        gallery: [
            { src: "/image/bubur-dpr-1.png" },
            { src: "/image/bubur-dpr-2.webp" },
            { src: "/image/bubur-dpr-3.webp" },
        ],
        promos: [
            { id: 'p1', umkmId: 1, umkmNama: 'Bubur DPR', judul: 'Paket Sarapan Rindang', deskripsi: 'Pesan Bubur Spesial + Teh Manis Hangat dengan harga hemat. Berlaku jam 6-9 pagi.' },
            { id: 'p2', umkmId: 1, umkmNama: 'Bubur DPR', judul: 'Gratis Sate', deskripsi: 'Setiap pembelian 2 porsi bubur, dapatkan 1 tusuk sate (ati/ampela) gratis.' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 101,
                nama_cabang: "Cihaur Geulis",
                lat: -6.902611024926869,
                lng: 107.63339522210063,
                alamat: "Jl. Brigadir Jend. Katamso No.66, Kota Bandung, Jawa Barat",
                telepon: "08176968707",
                promos_cabang: []
            }
        ]
    },
    {
        id: 2,
        nama: "Kedai Selasih",
        kategori: "Makanan",
        deskripsi: "Tempat makan yang lapang dan santai dengan suasana penuh warna. Kami menyajikan hidangan seafood lokal, sushi, dan beberapa menu pilihan Barat.",
        gambar: "/image/kedai-selasih-1.png",
        gallery: [
            { src: "/image/kedai-selasih-1.png" },
            { src: "/image/kedai-selasih-2.webp" },
            { src: "/image/kedai-selasih-3.webp" },
        ],
        promos: [
            { id: 'p1', umkmId: 2, umkmNama: 'Kedai Selasih', judul: 'Diskon 20% Seafood Bakar', deskripsi: 'Nikmati diskon 20% untuk semua menu seafood bakar setiap hari Selasa.' },
            { id: 'p2', umkmId: 2, umkmNama: 'Kedai Selasih', judul: 'Paket Lunch Sushi', deskripsi: 'Dapatkan 1 Sushi Roll pilihan + Ocha dingin hanya dengan Rp 50.000 (Senin-Jumat, 11:00-14:00).' }
        ],
        events: [
            { id: 'e1', umkmId: 2, umkmNama: 'Kedai Selasih', judul: 'Acoustic Night Live', deskripsi: 'Temani santap malam Anda dengan alunan musik akustik setiap Sabtu malam mulai pukul 19:00.' }
        ],
        lokasi: [
            {
                id_lokasi: 201,
                nama_cabang: "Neglasari",
                lat: -6.895536496741586,
                lng: 107.64029181153609,
                alamat: "Jl. Cikutra Baru VI No.34, Kota Bandung",
                telepon: "0227108165",
                promos_cabang: []
            }
        ]
    },
    {
        id: 3,
        nama: "Saung Angklung Udjo",
        kategori: "Kerajinan",
        deskripsi: "Sebuah pusat warisan budaya Sunda yang lengkap. Saung Angklung Udjo tidak hanya menjual kerajinan angklung bambu berkualitas, tetapi juga menawarkan pertunjukan musik interaktif dan workshop bagi pengunjung.",
        gambar: "/image/saung-angklung-udjo-1.jpeg",
        gallery: [
            { src: "/image/saung-angklung-udjo-1.jpeg" },
            { src: "/image/saung-angklung-udjo-2.jpeg" },
            { src: "/image/saung-angklung-udjo-3.png" },
        ],
        promos: [
            { id: 'p1', umkmId: 3, umkmNama: 'Saung Angklung Udjo', judul: 'Diskon 10% Kerajinan', deskripsi: 'Tunjukkan tiket pertunjukan Anda dan dapatkan diskon 10% untuk semua kerajinan bambu di toko kami.' }
        ],
        events: [
            { id: 'e1', umkmId: 3, umkmNama: 'Saung Angklung Udjo', judul: 'Pertunjukan Bambu Interaktif', deskripsi: 'Nikmati pertunjukan musik angklung yang memukau dan belajar bermain bersama. Diadakan setiap sore.' }
        ],
        lokasi: [
            {
                id_lokasi: 301,
                nama_cabang: "Pasirlayung",
                lat: -6.884747014260751,
                lng: 107.65262502416415,
                alamat: "Jl. Padasuka No.118, Kota Bandung",
                telepon: "082182821200",
                promos_cabang: []
            }
        ]
    },
    {
        id: 4,
        nama: "Gepuk Ny. Ong",
        kategori: "Oleh-Oleh",
        deskripsi: "Olahan daging sapi tradisional yang legendaris. Gepuk Ny. Ong menawarkan empal daging sapi empuk dengan bumbu rempah yang meresap dan rasa manis gurih otentik. Pilihan lauk praktis yang tahan lama untuk dibawa pulang.",
        gambar: "/image/gepuk-nyong-2.jpg",
        gallery: [
            { src: "/image/gepuk-nyong-2.jpg" },
            { src: "/image/gepuk-nyong-3.jpg" },
        ],
        promos: [
            { id: 'p1', umkmId: 4, umkmNama: 'Gepuk Ny. Ong', judul: 'Paket Oleh-Oleh Bandung', deskripsi: 'Beli 5 box Gepuk (rasa bebas), gratis 1 bungkus keripik kentang spesial.' },
            { id: 'p2', umkmId: 4, umkmNama: 'Gepuk Ny. Ong', judul: 'Gratis Ongkir Bandung', deskripsi: 'Pesan antar ke hotel/rumah Anda di area Kota Bandung (minimal pembelian 3 box).' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 401,
                nama_cabang: "Pasteur",
                lat: -6.8920,
                lng: 107.5916,
                alamat: "Jl. Dr. Djundjunan No. 155E, Kota Bandung",
                telepon: "022-6031262",
                promos_cabang: []
            },
            {
                id_lokasi: 402,
                nama_cabang: "Pasir Kaliki",
                lat: -6.9114,
                lng: 107.6020,
                alamat: "Jl. Pasir Kaliki No. 104, Kota Bandung",
                telepon: "082211157758",
                promos_cabang: []
            }
        ]
    },
    {
        id: 5,
        nama: "Kopi Toko Djawa",
        kategori: "Minuman",
        deskripsi: "Sebuah kedai kopi kecil yang sederhana. Dahulu merupakan toko buku jadul yang kemudian “terlahir kembali” pada akhir Desember 2017. Kami bangga menjadi salah satu favorit warga lokal yang mencari kedai kopi untuk dinikmati bersama teman, atau sebagai pilihan “take away” melalui layanan pesan-antar ke alamat Anda. Kami menyediakan berbagai kopi signature dan pilihan pastry buatan rumahan. Kami juga dengan senang hati menyambut Anda beserta teman berkaki empat Anda.",
        gambar: "/image/kopi-toko-djawa-1.jpg",
        gallery: [
            { src: "/image/kopi-toko-djawa-1.jpg" },
            { src: "/image/kopi-toko-djawa-2.jpg" },
            { src: "/image/kopi-toko-djawa-3.jpg" },
            { src: "/image/kopi-toko-djawa-4.jpg" },
            { src: "/image/kopi-toko-djawa-5.jpg" },
        ],
        promos: [
            { id: 'p1', umkmId: 5, umkmNama: 'Kopi Toko Djawa', judul: 'Kopi Hari Ini', deskripsi: 'Nikmati Es Kopi Awan dengan harga spesial setiap hari Senin.' },
            { id: 'p2', umkmId: 5, umkmNama: 'Kopi Toko Djawa', judul: 'Bawa Tumbler-mu', deskripsi: 'Dapatkan potongan harga Rp 5.000 untuk semua minuman dengan membawa tumbler sendiri.' }
        ],
        events: [
            { id: 'e1', umkmId: 5, umkmNama: 'Kopi Toko Djawa', judul: 'Djawa Berbagi Cerita', deskripsi: 'Sesi bincang-bincang inspiratif dengan kreator lokal. Cek jadwal di Instagram kami.' }
        ],
        lokasi: [
            {
                id_lokasi: 501,
                nama_cabang: "Braga",
                lat: -6.917277948686142,
                lng: 107.60916090699195,
                alamat: 'Jl. Braga No.81, Braga, Kec. Sumur Bandung, Kota Bandung',
                telepon: '08996979748',
                promos_cabang: []
            },
            {
                id_lokasi: 502,
                nama_cabang: "Riau",
                lat: -6.912273036826862,
                lng: 107.62897772474426,
                alamat: 'LLRE Martadinata St No.205, Cihapit, Sumurbandung, Kota Bandung',
                telepon: '087822287387',
                promos_cabang: []
            },
            {
                id_lokasi: 503,
                nama_cabang: "Teuku Umar",
                lat: -6.8895851895346905,
                lng: 107.61371857919868,
                alamat: 'Jl. Teuku Umar No.5, Lebakgede, Kecamatan Coblong, Kota Bandung',
                telepon: '08996979748',
                promos_cabang: []
            },
            {
                id_lokasi: 504,
                nama_cabang: "Cihapit",
                lat: -6.907003600669987,
                lng: 107.62481975122024,
                alamat: 'Jl. Cihapit No.14, Cihapit, Kec. Bandung Wetan, Kota Bandung',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 505,
                nama_cabang: "Progo",
                lat: -6.903691416273267,
                lng: 107.6194914821319,
                alamat: 'Jl. Progo No.22, Citarum, Kec. Bandung Wetan, Kota Bandung',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 506,
                nama_cabang: "Buah Batu",
                lat: -6.941420602180657,
                lng: 107.62856949808146,
                alamat: 'Jl. Buah Batu No.209, Turangga, Kec. Lengkong, Kota Bandung',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 507,
                nama_cabang: "Lembang",
                lat: -6.810952205734047,
                lng: 107.63526565913592,
                alamat: 'Jl. Raya Tangkuban Parahu Ciburial No.91, Cibogo, Kabupaten, Kec. Lembang, Kabupaten Bandung Barat',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 508,
                nama_cabang: "Blok M",
                lat: -6.244758512773876,
                lng: 106.79988761345294,
                alamat: 'Jl. Melawai 5 No.3, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 509,
                nama_cabang: "Menteng",
                lat: -6.1876215384806725,
                lng: 106.82594422238107,
                alamat: 'Jl. H. Agus Salim No.60, RT.8/RW.4, Dukuh Atas, Gondangdia, Kec. Menteng, Kota Jakarta Pusat',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 510,
                nama_cabang: "Pondok Indah",
                lat: -6.2548463641791665,
                lng: 106.79018366552631,
                alamat: 'Jl. Sultan Iskandar Muda No.1B, RT.7/RW.8, Kby. Lama Sel., Kec. Kebayoran Lama, Kota Jakarta Selatan',
                telepon: null,
                promos_cabang: []
            },
            {
                id_lokasi: 511,
                nama_cabang: "Tunjungan",
                lat: -7.259038450249569,
                lng: 112.73943077461102,
                alamat: 'Jl. Tunjungan No.45, Genteng, Kec. Genteng, Surabaya',
                telepon: '081235668346',
                promos_cabang: []
            },
        ]
    },
    {
        id: 6,
        nama: "Warung Lela (WALE)",
        kategori: "Makanan",
        deskripsi: "Sebuah warung makan legendaris di Bandung, yang lebih dikenal sebagai tempat favorit untuk menikmati mie yamin sejak tahun 1997. Warung ini terkenal dengan suasana yang nyaman dan sejuk di Dago Atas, serta menu andalannya yaitu Mie Yamin Manis dengan cita rasa autentik. ",
        gambar: "/image/wale-1.jpeg",
        gallery: [
            { src: "/image/wale-1.jpeg" },
            { src: "/image/wale-2.jpeg" },
            { src: "/image/wale-3.jpeg" },
            { src: "/image/wale-4.jpeg" },
            { src: "/image/wale-5.jpeg" },
        ],
        promos: [
            { id: 'p1', umkmId: 6, umkmNama: 'Warung Lela (WALE)', judul: 'Paket WALE Nikmat', deskripsi: 'Dapatkan 1 porsi Yamin Manis/Asin + 1 Es Teh Manis dengan harga paket.' },
            { id: 'p2', umkmId: 6, umkmNama: 'Warung Lela (WALE)', judul: 'Diskon Mahasiswa', deskripsi: 'Tunjukkan kartu mahasiswa aktif dan dapatkan diskon 10% (Senin-Kamis).' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 601,
                nama_cabang: "Dago Atas",
                lat: -6.8696177121635245,
                lng: 107.62675330685207,
                alamat: 'Jl. Kupa No.6, Cigadung, Kec. Cibeunying Kaler, Kota Bandung',
                telepon: '0222501396',
                promos_cabang: []
            }
        ],
    },
    {
        id: 7,
        nama: "Mie Akup",
        kategori: "Makanan",
        deskripsi: "Sebuah kedai mie yamin legendaris di Bandung yang terkenal dengan rasa gurih, tekstur kenyal, dan harga terjangkau. Meskipun sudah berdiri puluhan tahun, Mie Akup terus berinovasi sambil mempertahankan kualitas dan keaslian resepnya dengan menyajikan berbagai varian mie yamin manis, asin, atau balado dengan aneka topping seperti bakso, siomay, dan pangsit.",
        gambar: "/image/mie-akup-1.jpeg",
        gallery: [
            { src: "/image/mie-akup-1.jpeg" },
            { src: "/image/mie-akup-2.jpeg" },
        ],
        promos: [
            { id: 'p1', umkmId: 7, umkmNama: 'Mie Akup', judul: 'Promo Ojol Spesial', deskripsi: 'Diskon khusus untuk pemesanan melalui GoFood/GrabFood setiap hari Rabu.' },
            { id: 'p2', umkmId: 7, umkmNama: 'Mie Akup', judul: 'Gratis Pangsit Goreng', deskripsi: 'Setiap pembelian 2 porsi Mie Yamin Bakso, dapatkan 1 porsi Pangsit Goreng gratis.' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 701,
                nama_cabang: "Metro Margahayu",
                lat: -6.941640249809107,
                lng: 107.66714087116364,
                alamat: "Jl. Venus Raya No.28, Manjahlega, Kec. Rancasari, Kota Bandung",
                telepon: "085174481875",
                promos_cabang: []
            },
            {
                id_lokasi: 702,
                nama_cabang: "Mekarwangi",
                lat: -6.95404775082012,
                lng: 107.60834442883635,
                alamat: "Jl. Mekar Utama No.33, Mekarwangi, Kec. Bojongloa Kidul, Kota Bandung",
                telepon: "085179844686",
                promos_cabang: []
            },
            {
                id_lokasi: 703,
                nama_cabang: "Gegerkalong",
                lat: -6.864244013318769,
                lng: 107.59197516319544,
                alamat: "Jl. Gegerkalong Girang No.14, Isola, Kec. Sukasari, Kota Bandung",
                telepon: "085173202839",
                promos_cabang: []
            },
            {
                id_lokasi: 704,
                nama_cabang: "Antapani",
                lat: -6.917112343303584,
                lng: 107.6567816,
                alamat: "Jl. Purwakarta No.103, Antapani Tengah, Kec. Antapani, Kota Bandung",
                telepon: "082115449116",
                promos_cabang: []
            }
        ]
    },
    {
        id: 8,
        nama: "Surabi Cihapit",
        kategori: "Makanan",
        deskripsi: "Surabi Cihapit adalah Surabi legendaris di Bandung yang terkenal dengan rasa oncomnya yang khas, kami berdiri sejak tahun 1993.",
        gambar: "/image/surabi-cihapit-1.webp",
        gallery: [
            { src: "/image/surabi-cihapit-1.webp" },
            { src: "/image/surabi-cihapit-2.webp" },
        ],
        promos: [
            { id: 'p1', umkmId: 8, umkmNama: 'Surabi Cihapit', judul: 'Paket Surabi Hangat', deskripsi: 'Beli 2 Surabi (1 Oncom, 1 Kinca) + 1 Teh Hangat dengan harga spesial.' },
            { id: 'p2', umkmId: 8, umkmNama: 'Surabi Cihapit', judul: 'Beli 5 Gratis 1', deskripsi: 'Beli 5 surabi rasa apa saja, gratis 1 Surabi Oncom Polos.' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 801,
                nama_cabang: "Cihapit",
                lat: -6.907915854068436,
                lng: 107.62285169356666,
                alamat: 'Jl. Sabang No.65, Cihapit, Kec. Bandung Wetan, Kota Bandung',
                telepon: '0895344606887',
                promos_cabang: []
            }
        ],
    },
    {
        id: 9,
        nama: "Bakso Bintang Asia",
        kategori: "Makanan",
        deskripsi: "Sebuah restoran kuliner unik di Bandung yang menyajikan perpaduan konsep makanan Asia Tenggara, terutama bakso dengan kuah bening khas Vietnam seperti Pho. Restoran ini menawarkan pengalaman makan yang berbeda dengan konsep kedai modern minimalis dan dapur terbuka, serta menyediakan berbagai hidangan comfort food halal dari beberapa negara Asia Tenggara.",
        gambar: "/image/bakso-bintang-asia-1.webp",
        gallery: [
            { src: "/image/bakso-bintang-asia-1.webp" },
            { src: "/image/bakso-bintang-asia-2.webp" },
            { src: "/image/bakso-bintang-asia-3.webp" },
        ],
        promos: [
            { id: 'p1', umkmId: 9, umkmNama: 'Bakso Bintang Asia', judul: 'Paket Berdua Asia', deskripsi: 'Pesan 2 porsi Bakso Pho + 2 Es Teh Tarik dengan harga lebih hemat.' }
        ],
        events: [
            { id: 'e1', umkmId: 9, umkmNama: 'Bakso Bintang Asia', judul: 'Menu Spesial Bulan Ini', deskripsi: 'Cicipi menu Banh Mi (Sandwich Vietnam) edisi terbatas kami. Hanya bulan ini!' }
        ],
        lokasi: [
            {
                id_lokasi: 901,
                nama_cabang: "Cihapit",
                lat: -6.907744196976561,
                lng: 107.62265909329196,
                alamat: 'Jl. Sabang No.63, Cihapit, Kec. Bandung Wetan, Kota Bandung',
                telepon: '02245720331',
                promos_cabang: []
            }
        ],
    },
    {
        id: 10,
        nama: "Sentra Sikat dan Sapu",
        kategori: "Kerajinan",
        deskripsi: "Sentra kerajinan tradisional yang sudah ada sejak tahun 1980-an dan dikenal dengan kualitasnya yang mendunia, bahkan mampu menembus pasar Eropa. UMKM ini memproduksi aneka sapu ijuk dan sikat berbagai jenis, termasuk yang digunakan untuk membersihkan spare parts mesin industri, dan telah diwariskan secara turun-temurun.",
        gambar: "/image/sentra-sikat-dan-sapu-1.webp",
        gallery: [
            { src: "/image/sentra-sikat-dan-sapu-1.webp" },
        ],
        promos: [
            { id: 'p1', umkmId: 10, umkmNama: 'Sentra Sikat dan Sapu', judul: 'Paket Bersih Rumah', deskripsi: 'Beli 1 Sapu Ijuk Super + 1 Sikat Kamar Mandi, dapatkan diskon 15%.' }
        ],
        events: [
            { id: 'e1', umkmId: 10, umkmNama: 'Sentra Sikat dan Sapu', judul: 'Demo Membuat Sapu', deskripsi: 'Lihat langsung proses pembuatan Sapu Ijuk oleh pengrajin kami setiap Sabtu pagi.' }
        ],
        lokasi: [
            {
                id_lokasi: 1001,
                nama_cabang: "Cibiru",
                lat: -6.9338273397662205,
                lng: 107.72013838018933,
                alamat: 'Pasir Biru, Cibiru, Kota Bandung',
                telepon: null,
                promos_cabang: []
            }
        ],
    },
    {
        id: 11,
        nama: "Kopi Aroma",
        kategori: "Oleh-Oleh",
        deskripsi: "Kopi Aroma adalah usaha keluarga berukuran kecil (home-industry) yang dikelola oleh Pak Widyapratama. Kopi Aroma menjual kopi biji dan bubuk kopi dalam jumlah terbatas. Kopi Aroma didirikan oleh Tan Houw Sian pada tahun 1930. Awalnya, Tan Houw Sian merintis Kopi Aroma dengan melayani kebutuhan kopi pelanggan di Kota Bandung termasuk orang Belanda dan Jepang yang waktu itu tinggal di Bandung. Saat ini, Kopi Aroma dijalankan oleh generasi kedua dan ketiga, Bapak Widyapratama dan keluarganya. Seiring waktu, berkat pelanggan yang menggemari rasa dan keharuman Kopi Aroma, Kopi Aroma menjadi pilihan kopi yang diminum pelanggan di rumah dan menjadi oleh-oleh khas kota Bandung. Kopi Aroma berkembang lebih luas sehingga dikenal oleh pelanggan dari di dalam maupun luar kota Bandung, bahkan mancanegara.",
        gambar: "/image/kopi-aroma-1.jpg",
        gallery: [
            { src: "/image/kopi-aroma-1.jpg" },
            { src: "/image/kopi-aroma-2.webp" },
            { src: "/image/kopi-aroma-3.webp" },
            { src: "/image/kopi-aroma-4.webp" },
            { src: "/image/kopi-aroma-5.webp" },
            { src: "/image/kopi-aroma-6.webp" },
            { src: "/image/kopi-aroma-7.png" }
        ],
        promos: [
            { id: 'p1', umkmId: 11, umkmNama: 'Kopi Aroma', judul: 'Paket Kopi Nusantara', deskripsi: 'Dapatkan paket spesial berisi 250gr Robusta dan 250gr Arabika dengan harga khusus (Stok terbatas).' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 1101,
                nama_cabang: "Braga",
                lat: -6.917220205263587,
                lng: 107.60616823663699,
                alamat: 'Jl. Banceuy No.51, Braga, Kec. Sumur Bandung, Kota Bandung',
                telepon: '0224230473',
                promos_cabang: []
            }
        ],
    },
    {
        id: 12,
        nama: "Mie Kocok BPJS",
        kategori: "Makanan",
        deskripsi: "Hidangan mie kocok legendaris di Bandung yang populer karena kelezatannya. Nama \"BPJS\" berasal dari lokasinya yang dulunya berada di depan kantor BPJS Ketenagakerjaan di Jalan Suci atau Jalan PH.H Mustofa. Hidangan ini dikenal dengan kuah kaldu sapi yang kental dan kaya rasa, serta topping yang melimpah seperti kikil, urat, dan daging sapi.",
        gambar: "/image/mie-kocok-bpjs-1.jpeg",
        gallery: [
            { src: "/image/mie-kocok-bpjs-1.jpeg" },
            { src: "/image/mie-kocok-bpjs-2.jpeg" }
        ],
        promos: [
            { id: 'p1', umkmId: 12, umkmNama: 'Mie Kocok BPJS', judul: 'Paket Komplit BPJS', deskripsi: 'Pesan Mie Kocok Spesial Kikil, gratis 1 Es Teh Manis.' },
            { id: 'p2', umkmId: 12, umkmNama: 'Mie Kocok BPJS', judul: 'Tambah Kerupuk Sepuasnya', deskripsi: 'Hanya tambah Rp 3.000, Anda bisa ambil kerupuk kaleng sepuasnya.' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 1201,
                nama_cabang: "Neglasari",
                lat: -6.898610378044715,
                lng: 107.63997595935425,
                alamat: 'Jalan Penghulu Haji Jl. Khp Hasan Mustopa No.126, Neglasari, Cibeunying Kaler, Kota Bandung',
                telepon: null,
                promos_cabang: []
            }
        ],
    },
    {
        id: 13,
        nama: "Warung Kopi Purnama",
        kategori: "Minuman",
        deskripsi: "Sebuah kedai kopi legendaris di Bandung yang didirikan pada tahun 1930, terkenal dengan gaya kopitiam klasik, menu otentik, dan suasana nostalgia. Awalnya bernama \"Chang Chong Se\" yang berarti \"selamat mencoba\", nama warung ini diubah menjadi \"Purnama\" pada tahun 1966 karena kebijakan pemerintah. Kedai ini masih dikelola oleh generasi keempat keluarga pendiri dan mempertahankan orisinalitasnya dengan resep dan interior tempo dulu.",
        gambar: "/image/warung-kopi-purnama-1.jpeg",
        gallery: [
            { src: "/image/warung-kopi-purnama-1.jpeg" },
            { src: "/image/warung-kopi-purnama-2.jpeg" }
        ],
        promos: [
            { id: 'p1', umkmId: 13, umkmNama: 'Warung Kopi Purnama', judul: 'Sarapan Klasik Purnama', deskripsi: 'Paket Kopi Susu + Roti Bakar Srikaya dengan harga spesial. Berlaku hingga jam 10 pagi.' }
        ],
        events: [
            { id: 'e1', umkmId: 13, umkmNama: 'Warung Kopi Purnama', judul: 'Purnama Tempo Dulu', deskripsi: 'Setiap hari jadi, nikmati alunan musik keroncong live di kedai kami.' }
        ],
        lokasi: [
            {
                id_lokasi: 1301,
                nama_cabang: "Braga",
                lat: -6.919989840892155,
                lng: 107.60522360627061,
                alamat: 'Jl. Alkateri No.22, Braga, Kec. Sumur Bandung, Kota Bandung',
                telepon: '08112131930',
                promos_cabang: []
            }
        ],
    },
    {
        id: 14,
        nama: "Batagor Hanjuang Astina",
        kategori: "Makanan",
        deskripsi: "Tempat makan batagor legendaris di Bandung yang terkenal dengan rasa bumbu kacangnya yang khas dan inovasi menu unik, yaitu batagor yang disajikan dengan Indomie goreng. Tempat ini berlokasi di Jalan Astina, dekat dengan Istana Plaza, dan sudah ada sejak era 90-an. Selain menu populer batagor goreng dengan Indomie, mereka juga menawarkan batagor kuah.",
        gambar: "/image/batagor-hanjuang-astina-1.jpg",
        gallery: [
            { src: "/image/batagor-hanjuang-astina-1.jpg" },
            { src: "/image/batagor-hanjuang-astina-2.jpg" },
            { src: "/image/batagor-hanjuang-astina-3.jpg" },
            { src: "/image/batagor-hanjuang-astina-4.jpg" },
            { src: "/image/batagor-hanjuang-astina-5.jpg" },
            { src: "/image/batagor-hanjuang-astina-6.jpg" },
            { src: "/image/batagor-hanjuang-astina-7.jpg" },
            { src: "/image/batagor-hanjuang-astina-8.jpg" }
        ],
        promos: [
            { id: 'p1', umkmId: 14, umkmNama: 'Batagor Hanjuang Astina', judul: 'Paket Batagor + Indomie', deskripsi: 'Nikmati menu andalan Batagor disajikan dengan Indomie Goreng + Es Teh Botol dengan harga paket.' },
            { id: 'p2', umkmId: 14, umkmNama: 'Batagor Hanjuang Astina', judul: 'Diskon Pelajar', deskripsi: 'Tunjukkan kartu pelajar/mahasiswa dan dapatkan diskon 10% untuk makan di tempat.' }
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 1401,
                nama_cabang: "Pamoyanan",
                lat: -6.902846250648825,
                lng: 107.59900748009571,
                alamat: 'Jl. Astina No.5, Pamoyanan, Kec. Cicendo, Kota Bandung',
                telepon: '085352719532',
                promos_cabang: []
            }
        ],
    },
];

export const allPromos = allUmkmData.flatMap(umkm => umkm.promos);
export const allEvents = allUmkmData.flatMap(umkm => umkm.events);