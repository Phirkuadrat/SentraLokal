export const allUmkmData = [
    {
        id: 1,
        nama: "Warung Kopi Senja",
        kategori: "Minuman",
        deskripsi: "Kopi robusta terbaik di gang sempit, dengan suasana cozy. Kami menyajikan biji kopi pilihan dari seluruh nusantara, diseduh dengan metode manual brew untuk menjaga cita rasa otentik.",
        gambar: "https://images.unsplash.com/photo-1511920170033-f8329023c35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        gallery: [
            { src: "https://images.unsplash.com/photo-1511920170033-f8329023c35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80" },
            { src: "https://images.unsplash.com/photo-1559496417-13f6b0c3633f?auto=format&fit=crop&w=1087&q=80" },
            { src: "https://images.unsplash.com/photo-1495474472287-4d713b20a45c?auto=format&fit=crop&w=1087&q=80" },
        ],
        promos: [
            { id: 'p1', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Diskon 20% Kopi Susu', deskripsi: 'Tunjukkan kartu pelajar/mahasiswa untuk diskon 20% Kopi Susu Gula Aren.' },
            { id: 'p2', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Beli 1 Gratis 1', deskripsi: 'Promo Beli 1 Gratis 1 untuk semua manual brew setiap hari Jumat.' },
        ],
        events: [
            { id: 'e1', umkmId: 1, umkmNama: 'Warung Kopi Senja', judul: 'Live Music Akustik', deskripsi: 'Nikmati alunan musik akustik setiap Sabtu malam, mulai pukul 19.00.' }
        ],
        lokasi: [
            {
                id_lokasi: 101,
                nama_cabang: "Braga",
                lat: -6.9023,
                lng: 107.6186,
                alamat: "Jl. Braga No. 15, Bandung",
                telepon: "081234567890",
                promos_cabang: []
            }
        ]
    },
    {
        id: 2,
        nama: "Bakso Legendaris Pak Kumis",
        kategori: "Makanan",
        deskripsi: "Bakso urat dengan resep turun temurun sejak 1980. Kuah kaldu kami dibuat dari tulang sumsum sapi asli, dimasak perlahan selama 8 jam.",
        gambar: "https://images.unsplash.com/photo-1576867757603-05b1348c9803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        gallery: [
            { src: "https://images.unsplash.com/photo-1576867757603-05b1348c9803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" },
            { src: "https://images.unsplash.com/photo-1588117369363-3c3093a763e9?auto=format&fit=crop&w=1074&q=80" },
        ],
        promos: [
            { id: 'p1', umkmId: 2, umkmNama: 'Bakso Pak Kumis', judul: 'Gratis Es Teh Manis', deskripsi: 'Setiap pembelian Bakso Urat Spesial, gratis 1 Es Teh Manis.' },
        ],
        events: [],
        lokasi: [
            {
                id_lokasi: 201,
                nama_cabang: "Cihampelas",
                lat: -6.9045,
                lng: 107.6198,
                alamat: "Jl. Cihampelas No. 120, Bandung",
                telepon: "082112233445",
                promos_cabang: []
            }
        ]
    },
    {
        id: 3,
        nama: "Toko Kerajinan Etnik",
        kategori: "Kerajinan",
        deskripsi: "Berbagai kerajinan tangan unik dari seluruh nusantara. Kami bekerja sama langsung dengan pengrajin lokal untuk memastikan kualitas dan keaslian produk.",
        gambar: "https://images.unsplash.com/photo-1510416075971-d64de8ab3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        gallery: [
            { src: "https://images.unsplash.com/photo-1510416075971-d64de8ab3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
            { src: "https://images.unsplash.com/photo-1600863895243-75a55f46397c?auto=format&fit=crop&w=687&q=80" },
            { src: "https://images.unsplash.com/photo-1520621417066-67027c33e88c?auto=format&fit=crop&w=687&q=80" },
        ],
        promos: [],
        events: [
            { id: 'e1', umkmId: 3, umkmNama: 'Toko Kerajinan Etnik', judul: 'Workshop Membatik', deskripsi: 'Ikuti workshop membatik bersama seniman lokal. Terbuka untuk umum setiap hari Minggu.' }
        ],
        lokasi: [
            {
                id_lokasi: 301,
                nama_cabang: "Gedung Merdeka",
                lat: -6.9001,
                lng: 107.6155,
                alamat: "Jl. Asia Afrika No. 50, Bandung",
                telepon: "083887766554",
                promos_cabang: []
            }
        ]
    },
    {
        id: 4,
        nama: "Pangkas Rambut Gaya Baru",
        kategori: "Jasa",
        deskripsi: "Potongan rambut modern dan klasik dengan harga terjangkau.",
        gambar: "https://images.unsplash.com/photo-1585749363324-336e09e8093a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        gallery: [
            { src: "https://images.unsplash.com/photo-1585749363324-336e09e8093a?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        ],
        promos: [],
        events: [],
        lokasi: [
            {
                id_lokasi: 401,
                nama_cabang: "Utama",
                lat: -6.9033,
                lng: 107.6167,
                alamat: "Jl. Merdeka No. 10, Bandung",
                telepon: "081234567891",
                promos_cabang: []
            }
        ]
    },
    {
        id: 5,
        nama: "Kopi Toko Djawa",
        kategori: "Minuman",
        deskripsi: "Sebuah kedai kopi kecil yang sederhana. Dahulu merupakan toko buku jadul yang kemudian “terlahir kembali” pada akhir Desember 2017. Kami bangga menjadi salah satu favorit warga lokal yang mencari kedai kopi untuk dinikmati bersama teman, atau sebagai pilihan “take away” melalui layanan pesan-antar ke alamat Anda. Kami menyediakan berbagai kopi signature dan pilihan pastry buatan rumahan. Kami juga dengan senang hati menyambut Anda beserta teman berkaki empat Anda.",
        gambar: "https://www.pergidulu.com/wp-content/uploads/2018/10/Kopi-Toko-Djawa-Bandung.jpg",
        gallery: [
            { src: "https://www.pergidulu.com/wp-content/uploads/2018/10/Kopi-Toko-Djawa-Bandung.jpg" },
            { src: "https://www.pergidulu.com/wp-content/uploads/2018/10/Coffee-shop-Kopi-Toko-Djawa-Bandung.jpg" },
            { src: "https://www.pergidulu.com/wp-content/uploads/2018/10/Es-Kopi-Toko-Djawa.jpg" },
            { src: "https://www.pergidulu.com/wp-content/uploads/2018/10/Tempat-ngopi-paling-ramai-di-Bandung.jpg" },
            { src: "https://www.pergidulu.com/wp-content/uploads/2018/10/Kopi-Toko-Djawa-coffee-shop-Bandung.jpg" },
        ],
        promos: [],
        events: [],
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
        gambar: "https://akcdn.detik.net.id/community/media/visual/2024/06/01/wale-8.jpeg?w=700&q=90",
        gallery: [
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/06/01/wale-6.jpeg?w=800" },
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/06/01/wale-2.jpeg?w=800" },
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/06/01/wale-4.jpeg?w=800" },
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/06/01/wale-5.jpeg?w=800" },
        ],
        promos: [],
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
        gambar: "https://akcdn.detik.net.id/community/media/visual/2025/02/04/mie-akup-bandung_169.jpeg?w=620",
        gallery: [
            { src: "https://akcdn.detik.net.id/community/media/visual/2025/02/04/mie-akup-bandung-6_169.jpeg?w=700&q=90" },
        ],
        promos: [],
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
        gambar: "https://cdn.ayobandung.id/assets/medias/2025/Sep/01/cih.png",
        gallery: [
            { src: "https://cdn.ayobandung.id/assets/medias/2025/Sep/01/cih.png" },
            { src: "https://cdn.ayobandung.id/crop/original/medias/2025/Sep/01/sur.png" },
        ],
        promos: [],
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
        gambar: "https://cdn.ayobandung.id/assets/medias/2025/Jul/19/80ff67fa.jpg",
        gallery: [
            { src: "https://cdn.ayobandung.id/assets/medias/2025/Jul/19/80ff67fa.jpg" },
            { src: "https://cdn.ayobandung.id/crop/original/medias/2025/Jul/19/7f6275eb.jpg" },
            { src: "https://cdn.ayobandung.id/assets/medias/2025/Jul/19/f666461c.jpg" },
        ],
        promos: [],
        events: [],
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
        gambar: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-berkunjung-ke-sentra-sikat-dan-sapu-di-cibiru-sudah-ada-sejak-1970-an-sampai-diminati-pasar-eropa-5JmdxhI0v3.jpg?tr=w-730,h-486,fo-center",
        gallery: [
            { src: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-berkunjung-ke-sentra-sikat-dan-sapu-di-cibiru-sudah-ada-sejak-1970-an-sampai-diminati-pasar-eropa-5JmdxhI0v3.jpg?tr=w-730,h-486,fo-center" },
        ],
        promos: [],
        events: [],
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
        gambar: "https://uncov.co.id/img/blog/tOSTenMzCN/8cef19c5-a454-46f5-8019-909f0bb5f72a.jpg",
        gallery: [
            { src: "https://uncov.co.id/img/blog/tOSTenMzCN/8cef19c5-a454-46f5-8019-909f0bb5f72a.jpg" },
            { src: "https://uncov.co.id/_next/image?url=%2Fimg%2Fblog%2FtOSTenMzCN%2F7a0c8b3a-e4e3-4ad6-8595-79890236e10d.jpg&w=1920&q=75" },
            { src: "https://uncov.co.id/_next/image?url=%2Fimg%2Fblog%2FtOSTenMzCN%2Feca725d2-ba14-4433-a3c6-af8eea83e567.jpg&w=1920&q=75" },
            { src: "https://uncov.co.id/_next/image?url=%2Fimg%2Fblog%2FtOSTenMzCN%2F92b36a88-3adf-4fd2-bd21-31fcdd9fe99b.jpg&w=1920&q=75" },
            { src: "https://uncov.co.id/_next/image?url=%2Fimg%2Fblog%2FtOSTenMzCN%2F5bd2f2a0-44b3-49b7-bb55-2e8aef1ad628.jpg&w=1920&q=75" },
            { src: "https://uncov.co.id/img/blog/tOSTenMzCN/73199020-0134-4664-a203-1ce73109e37f.jpg" },
            { src: "https://kopiaroma.id/wp-content/uploads/2025/09/Screenshot-2025-09-07-at-10.57.03-AM.png" }
        ],
        promos: [],
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
        gambar: "https://akcdn.detik.net.id/community/media/visual/2024/03/08/mie-kocok-bpjs-abah-cibeunying-kota-bandung-1.jpeg?w=800",
        gallery: [
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/03/08/mie-kocok-bpjs-abah-cibeunying-kota-bandung-1.jpeg?w=800" },
            { src: "https://akcdn.detik.net.id/community/media/visual/2024/03/08/mie-kocok-bpjs-abah-cibeunying-kota-bandung_169.jpeg?w=700&q=90" }
        ],
        promos: [],
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
];

export const allPromos = allUmkmData.flatMap(umkm => umkm.promos);
export const allEvents = allUmkmData.flatMap(umkm => umkm.events);