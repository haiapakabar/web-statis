const filmCatalog = [
  //  1 ALAS ROBAN
  {
    slug: "alas-roban",
    title: "Alas Roban",
    poster: "img/genre horor/alas roban.jpg",
    section: "hits",
    genres: ["Horor", "Film"],
    isTrending: true,
    info: [
      { label: "Genre", value: "Horor" },
      { label: "Sutradara", value: "Hadrah Daeng Ratu" },
      {
        label: "Rumah Produksi",
        value:
          "Unlimited Production, Narasi Semesta, Legacy Pictures, Light House",
      },
      { label: "Tanggal Rilis", value: "15 Januari 2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Michelle Ziudith",
      "Rio Dewanto",
      "Taskya Namya",
      "Fara Shakila",
      "Imelda Therinne",
      "Agus Kuncoro",
      "Dewi Pakis",
      "Saputra Kori",
    ],
    synopsis:
      "Sebuah perjalanan melintasi kawasan Alas Roban berubah menjadi mimpi buruk ketika teror misterius mulai menghantui para penumpang. Legenda kelam yang selama ini beredar tentang hutan tersebut perlahan menjadi nyata, memaksa mereka menghadapi rahasia dan ancaman yang tak kasatmata.",
  },
  //  2 ALMARHUM
  {
    slug: "almarhum",
    title: "Almarhum",
    poster: "img/genre horor/Poster_Film_Almarhum.jpg",
    section: "hits",
    genres: ["Horor"],
    isTrending: true,
    info: [
      { label: "Genre", value: "Horor" },
      { label: "Sutradara", value: "Adhe Dharmasatriya" },
      { label: "Produser", value: "Oswin Bonifanz" },
      { label: "Skenario", value: "Evelyn Afnilia" },
      { label: "Tanggal Rilis", value: "9 Januari 2025" },
      { label: "Durasi", value: "103 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ratu Sofya sebagai Nuri",
      "Dimas Aditya sebagai Wisesa",
      "Alzi Markers sebagai Yanda",
      "Nova Eliza sebagai Ibu Rahmi",
    ],
    synopsis:
      "Kematian Pak Mulwanto di Selasa Kliwon membawa kutukan baru, dan Nuri bersama adiknya harus menghadapi mitos yang berubah menjadi kenyataan. Mereka menggali ritual tradisional demi melawan bayang-bayang yang terus mengintai.",
  },
  //  3 JALAN PULANG
  {
    slug: "jalan-pulang",
    title: "Jalan Pulang",
    poster: "img/genre horor/jalan pulang.jpg",
    section: "hits",
    genres: ["Horor", "Drama"],
    isTrending: true,
    info: [
      { label: "Genre", value: "Horor, Drama, Film" },
      { label: "Sutradara", value: "Jeropoint" },
      { label: "Produser", value: "Agung Saputra" },
      { label: "Skenario", value: "Mhd Arjunanta" },
      { label: "Tanggal Rilis", value: "19 Juni 2025" },
      { label: "Durasi", value: "97 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Luna Maya sebagai Lastini",
      "Shareefa Daanish sebagai Marsinah",
      "Taskya Namya sebagai Lia",
      "Saskia Chadwick sebagai Arum",
      "Teuku Rifnu Wikana sebagai Djatmiko",
      "Sujiwo Tejo sebagai Subagir",
      "Kiki Narendra sebagai Ki Rustaman",
      "Jajang C. Noer sebagai Ruhannah",
      "Ruth Marini sebagai Suhana",
      "Raffan Al Aryan sebagai Rama",
    ],
    synopsis:
      "Setelah kematian misterius suaminya, Lastini berjuang menyelamatkan putrinya, Arum, yang diduga dirasuki kekuatan gaib menjelang ulang tahunnya di tahun kabisat. Bersama dua anaknya, ia melakukan perjalanan panjang menyusuri Pulau Jawa untuk mencari pertolongan spiritual, menghadapi teror supranatural dan waktu yang semakin sempit sebelum mereka bisa kembali ke jalan pulang.",
  },
  //  4 PABRIK GULA
  {
    slug: "pabrik-gula",
    title: "Pabrik Gula",
    poster: "img/genre horor/pabrik gula.jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Misteri"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Misteri" },
      { label: "Sutradara", value: "Awi Suryadi" },
      { label: "Produser", value: "Manoj Punjabi" },
      { label: "Skenario", value: "Lele Laila Nurazizah" },
      { label: "Tanggal Rilis", value: "31 Maret 2025" },
      { label: "Durasi", value: "132 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ersya Aurelia sebagai Endah",
      "Arbani Yasiz sebagai Fadhil",
      "Erika Carlina sebagai Naning",
      "Bukie B. Mansyur sebagai Hendra",
      "Wavi Zihan sebagai Wati",
      "Benidictus Siregar sebagai Franky",
      "Arif Alfiansyah sebagai Dwi",
      "Yono Bakrie (pemeran pembantu)",
      "Sadana Agung (pemeran pembantu)",
      "Vonny Anggraini (pemeran pembantu)",
      "Azela Putri (pemeran pembantu)",
    ],
    synopsis:
      "Sekelompok buruh musiman datang ke sebuah pabrik gula tua di musim panen, hanya untuk menemukan bahwa tempat itu menyimpan misteri gelap yang lebih dari sekadar kerja keras. Kejadian aneh mulai menghantui mereka setelah salah satu dari mereka mengikuti sosok misterius di malam hari, memicu rangkaian teror dari entitas yang menuntut nyawa sebagai balasan atas pelanggaran aturan pabrik tersebut.",
  },
  //  5 QODRAT 2
  {
    slug: "qodrat-2",
    title: "Qodrat 2",
    poster: "img/genre horor/Qodrat-2_Main-Poster-Azizah_Revised-1 copy.jpg",
    section: "hits",
    genres: ["Horor", "Religi", "Aksi"],
    info: [
      { label: "Genre", value: "Horor, Religi, Aksi" },
      { label: "Sutradara", value: "Charles Gozali" },
      { label: "Produser", value: "Linda Gozali" },
      { label: "Produksi", value: "MAGMA Entertainment, Rapi Films" },
      { label: "Tanggal Rilis", value: "2025 (Indonesia)" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Vino G. Bastian sebagai Ustaz Qodrat",
      "Acha Septriasa sebagai Azizah",
      "Donny Alamsyah",
      "Della Dartyan",
      "Septian Dwi Cahyo",
    ],
    synopsis:
      "Melanjutkan kisah sebelumnya, Ustaz Qodrat kembali menghadapi kekuatan iblis yang belum sepenuhnya musnah. Ketika ancaman baru muncul dan menguji iman serta masa lalunya, Qodrat harus berhadapan dengan teror yang lebih besar dan lebih personal. Pertarungan antara keyakinan dan kegelapan kembali menjadi inti perjalanan spiritual dan fisiknya.",
  },
  //  6 PEREMPUAN PEMBAWA SIAL
  {
    slug: "perempuan-pembawa-sial",
    title: "Perempuan Pembawa Sial",
    poster: "img/genre horor/Perempuan.jpg",
    section: "hits",
    genres: ["Horor", "Misteri"],
    info: [
      { label: "Genre", value: "Horor, Misteri" },
      { label: "Sutradara", value: "Fajar Nugros" },
      {
        label: "Produser",
        value: "Susanti Dewi, Winston Utomo, William Utomo",
      },
      { label: "Skenario", value: "Fajar Nugros" },
      { label: "Tanggal Rilis", value: "18 September 2025" },
      { label: "Durasi", value: "97 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Raihaanun sebagai Mirah",
      "Morgan Oey sebagai Bana",
      "Clara Bernadeth sebagai Puti",
      "Aurra Kharisma sebagai Lasmi",
      "Didik Nini Thowok",
      "Rukman Rosadi",
      "Benidictus Siregar",
      "Ben Bening",
      "Iang Darmawan (pemeran pembantu)",
      "Pipien Putri (pemeran pembantu)",
      "Bima Sena (pemeran pembantu)",
    ],
    synopsis:
      "Mengangkat mitos kuno Bahu Laweyan, film ini mengikuti kisah Mirah (Raihaanun) yang hidup dalam kesendirian karena dianggap membawa sial; setiap pria yang mencintainya selalu berakhir mati secara tragis. Di tengah pengusiran oleh warga, ia bertemu Bana (Morgan Oey) yang tulus menerimanya. Namun, cinta mereka justru membuka tabir rahasia kelam keluarga dan dendam masa lalu yang melibatkan ritual gaib, memaksa Mirah menghadapi kutukan yang ternyata adalah kiriman untuk menghancurkannya.",
  },
  //  7 KAFIR: GERBANG SUKMA
  {
    slug: "kafir-gerbang-sukma",
    title: "KAFIR: Gerbang Sukma",
    poster: "img/genre horor/kafir gerbang sukma.heic",
    section: "hits",
    genres: ["Horor", "Mystery", "Drama"],
    info: [
      { label: "Genre", value: "Horor, Mystery, Drama" },
      { label: "Sutradara", value: "Azhar Kinoi Lubis" },
      { label: "Produser", value: "Chand Parwez Servia, Riza, Mithu Nisar" },
      { label: "Rumah Produksi", value: "Starvision Plus" },
      { label: "Tanggal Rilis", value: "29 Januari 2026" },
      { label: "Durasi", value: "108 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Putri Ayudya sebagai Sri",
      "Rangga Azof sebagai Andi",
      "Nadya Arina sebagai Dina",
      "Indah Permatasari sebagai Hanum",
      "Asha Assuncao sebagai Rani",
      "Arswendy Bening Swara sebagai Kakek",
      "Mutia Datau sebagai Nenek",
      "Sujiwo Tejo sebagai Jarwo",
      "Nova Eliza sebagai Laila",
      "Teddy Syach sebagai Herman",
      "Fuad Idris sebagai Ki Rojo",
      "Totos Rasiti sebagai Seno",
    ],
    synopsis:
      "Delapan tahun setelah kematian tragis Herman akibat santet, Sri mencoba menata kehidupan barunya bersama anak-anaknya. Namun ketika ia kembali ke rumah keluarga karena kondisi ibunya yang kritis, rahasia masa lalu yang terkubur mulai menuntut balas. Teror supranatural yang berkaitan dengan dosa lama kembali menghantui mereka, memaksa Sri dan keluarganya menghadapi ancaman dari gerbang sukma yang terbuka kembali.",
  },
  //  8 GUNDIK
  {
    slug: "gundik",
    title: "Gundik",
    poster: "img/genre horor/gundik.jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Misteri"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Misteri" },
      { label: "Sutradara", value: "Rizal Mantovani" },
      { label: "Produser", value: "Rocky Soraya" },
      { label: "Rumah Produksi", value: "Hitmaker Studios" },
      { label: "Tanggal Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Luna Maya",
      "Maxime Bouttier",
      "Rukman Rosadi",
      "Yati Surachman",
      "Totos Rasiti",
    ],
    synopsis:
      "Teror misterius bermula ketika seorang perempuan muda terlibat dalam pusaran rahasia kelam masa lalu yang berkaitan dengan praktik pesugihan dan ritual kuno. Sosok gundik yang terikat perjanjian gelap kembali menuntut tumbal, membuka konflik antara ambisi, cinta, dan konsekuensi dari kesepakatan dengan dunia tak kasatmata.",
  },
  //  9 JANUR IRENG
  {
    slug: "janur-ireng",
    title: "Janur Ireng",
    poster:
      "img/genre horor/JANUR IRENG - Sewu Dino The Prequel (Horror)24 Desember 2025Sabdo (Marthino Lio) dan Intan (Rat.webp",
    section: "hits",
    genres: ["Horor", "Misteri", "Thriller"],
    info: [
      { label: "Genre", value: "Horor, Misteri, Thriller" },
      { label: "Sutradara", value: "Kimo Stamboel" },
      { label: "Produser", value: "Manoj Punjabi" },
      { label: "Rumah Produksi", value: "MD Pictures" },
      { label: "Tanggal Rilis", value: "24 Desember 2025" },
      { label: "Durasi", value: "± 94 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Marthino Lio sebagai Sabdo Kuncoro",
      "Nyimas Ratu Rafa sebagai Intan",
      "Tora Sudiro sebagai Arjo Kuncoro",
      "Rio Dewanto sebagai Sugik",
      "Masayu Anastasia sebagai Lasmini",
      "Givina Lukita sebagai Erna",
      "Epy Kusnandar sebagai Anggodo",
      "Karina Suwandi sebagai Karsa",
      "Faradina Mufti sebagai Gayatri",
      "Gisellma Firmansyah sebagai Della",
      "Vincent Sanjaya sebagai Bokolono",
      "Udin Bhakti sebagai Wage",
      "Dayinta Melira sebagai Sengarturih",
      "Putri Permata sebagai Lina",
      "Pipien Putri sebagai Tabib Gayatri",
      "Agra Piliang sebagai Bayu Suseno",
      "Anneu Putri sebagai Tri",
      "Aulia Raditya sebagai Isah",
    ],
    synopsis:
      "Prekuel dari *Sewu Dino*, *Janur Ireng* mengikuti Sabdo dan Intan sebelum tragedi besar terjadi. Ketika rumah mereka terbakar dan hidup dalam kemiskinan, paman mereka yang kaya, Arjo Kuncoro, menawarkan tempat tinggal yang tampak menjanjikan. Namun di balik kemewahan itu tersembunyi rencana jahat yang memaksa keluarga itu menghadapi santet legendaris bernama Janur Ireng, membuka konflik keluarga dan kekuatan gelap yang lebih besar dari yang mereka bayangkan.",
  },
  //  10 KITAB SIJJIN DAN ILLIYYIN
  {
    slug: "kitab-sijjin-dan-illiyyin",
    title: "Kitab Sijjin dan Illiyyin",
    poster:
      "img/genre horor/Kitab Sijjin & Illiyyin haunting cinemas this September 25! 🎬🔥From Suraya Filem, GSC Movies & .jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Religi"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Religi" },
      { label: "Sutradara", value: "Hadrah Daeng Ratu" },
      { label: "Produser", value: "Gope T. Samtani" },
      {
        label: "Rumah Produksi",
        value:
          "Rapi Films, Sky Media, Rhaya Flicks, Legacy Pictures, Narasi Semesta",
      },
      { label: "Tanggal Rilis", value: "17 Juli 2025" },
      { label: "Durasi", value: "99 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Yunita Siregar sebagai Yuli",
      "Dinda Kanyadewi sebagai Laras",
      "Tarra Budiman sebagai Rudi",
      "Djenar Maesa Ayu sebagai Ambar",
      "Kawai Labiba sebagai Tika",
      "Sulthan Hamonangan sebagai Dean",
      "Eduwart Manalu sebagai Satya",
      "Banon Gautama",
      "Nelly Sukma",
      "Firzanah Alya Ratifa",
      "Septian Dwi Cahyo",
    ],
    synopsis:
      "Yuli, setelah kehilangan rumah dan keluarga, diperlakukan kejam oleh keluarga Ambar sehingga berubah menjadi pribadi yang dipenuhi dendam. Berbekal bantuan ilmu hitam yang mematikan, ia melancarkan santet terhadap Laras, Rudi, Dean, dan Tika; namun ritual tersebut membawa konsekuensi supranatural yang mengerikan dan menuntut mereka menghadapi kegelapan dalam Kitab Sijjin dan Illiyyin.",
  },
  //  11 LABINAK
  {
    slug: "labinak-mereka-ada-di-sini",
    title: "Labinak: Mereka Ada Di Sini",
    poster: "img/genre horor/labinak.jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Psikologis"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Psikologis" },
      { label: "Sutradara", value: "Azhar Kinoi Lubis" },
      {
        label: "Produser",
        value: "Deepak Chugani, Dilip Chugani, Prakash Chugani, Sanjeev Bhalla",
      },
      { label: "Rumah Produksi", value: "Anami Films, Paragon Pictures" },
      { label: "Tanggal Rilis", value: "21 Agustus 2025" },
      { label: "Durasi", value: "100 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Raihaanun sebagai Najwa",
      "Nayla D. Purnama sebagai Yanti",
      "Arifin Putra",
      "Giulio Parengkuan sebagai Jodas",
      "Chantiq Schagerl sebagai Eva",
      "Ivanka Suwandi",
      "Jenny Zhang sebagai Diana",
      "Aimee Saras sebagai Ratih",
    ],
    synopsis:
      "Najwa, seorang guru honorer dari kota kecil, pindah ke Jakarta demi masa depan putrinya Yanti. Ketika mereka mulai bekerja di sebuah sekolah elit, rumah baru mereka ternyata menyimpan misteri gelap yang berkaitan dengan arwah korban praktik kanibalisme kuno oleh keluarga pendiri yayasan tersebut. Ketegangan meningkat ketika ritual mengerikan mendekat, dan Najwa harus berjuang menyelamatkan dirinya serta Yanti dari ancaman yang menghantui setiap sudut.",
  },
  //  12 MAMA PESAN DARI NERAKA
  {
    slug: "mama-pesan-dari-neraka",
    title: "Mama: Pesan dari Neraka",
    poster: "img/genre horor/mama pesan dari neraka.jpg",
    section: "hits",
    genres: ["Horor", "Misteri"],
    info: [
      { label: "Genre", value: "Horor, Misteri" },
      { label: "Sutradara", value: "Azhar Kinoi Lubis" },
      { label: "Produser", value: "Rajesh Punjabi" },
      { label: "Rumah Produksi", value: "Pichouse Films, PAW Pictures" },
      { label: "Tanggal Rilis", value: "11 September 2025" },
      { label: "Durasi", value: "92 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Callista Arum sebagai Putri",
      "Nova Eliza sebagai Sari",
      "Raihan Khan sebagai Donny",
      "Hannah Al Rashid sebagai Tante Marni",
      "Andy /Rif sebagai Pak Karto",
      "Naura Hakim sebagai Bella",
      "Sri Yatun sebagai Bibi Septi",
      "Ruli Fitrian Alia sebagai Iblis",
      "Rachel Mikhayla sebagai Putri Kecil",
      "Grace Emmanuela sebagai Abel",
      "Dinda Hanarizky sebagai Rani",
    ],
    synopsis:
      "Putri didera kesedihan setelah ibunya, Sari, seorang peramal tarot terkenal, meninggal dalam kecelakaan tragis. Suatu hari ia mulai menerima pesan misterius dari nomor ibunya yang sudah tiada. Awalnya dianggap sebagai lelucon, pesan itu ternyata memberi petunjuk tentang kejadian yang benar-benar terjadi, membawa Putri ke dalam teror yang mengejutkan dan penuh misteri.",
  },
  //   13 SEBELUM DIJEMPUT NENEK
  {
    slug: "sebelum-dijemput-nenek",
    title: "Sebelum Dijemput Nenek",
    poster: "img/genre horor/Sebelum Dijemput Nenek.jpg",
    section: "hits",
    genres: ["Horor", "Komedi"],
    info: [
      { label: "Genre", value: "Horor, Komedi" },
      { label: "Sutradara", value: "Fajar Martha Santosa" },
      { label: "Produser", value: "Sunil Samtani" },
      { label: "Rumah Produksi", value: "Rapi Films" },
      { label: "Tanggal Rilis", value: "22 Januari 2026" },
      { label: "Durasi", value: "103 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Angga Yunanda sebagai Hestu",
      "Dodit Mulyanto sebagai Akbar",
      "Nopek Novian sebagai Ki Mangun",
      "Oki Rengga sebagai Kotrek",
      "Wavi Zihan sebagai Nisa",
    ],
    synopsis:
      "Hestu dan Akbar adalah saudara kembar yang hidup terpisah setelah janji pahit dibuat saat kecil. Ketika nenek mereka meninggal pada hari keramat, arwah sang nenek muncul untuk 'menjemput' mereka, memaksa kedua bersaudara itu dan teman-temannya mencari cara menghentikan teror tersebut sebelum waktu 7 hari habis.",
  },
  //  14 PANGGILAN DARI KUBUR
  {
    slug: "panggilan-dari-kubur",
    title: "Panggilan dari Kubur",
    poster: "img/genre horor/panggilan dari kubur.jpg",
    section: "hits",
    genres: ["Horor", "Misteri", "Drama"],
    info: [
      { label: "Genre", value: "Horor, Misteri, Drama" },
      { label: "Sutradara", value: "Dyan Sunu Prastowo" },
      { label: "Produser", value: "Yoen K." },
      {
        label: "Rumah Produksi",
        value: "Dunia Mencekam Studios, Maxima Pictures",
      },
      { label: "Tanggal Rilis", value: "14 Agustus 2025" },
      { label: "Durasi", value: "88 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Nirina Zubir sebagai Alya",
      "Nugie sebagai Raka",
      "Firzanah Alya sebagai Yasmin",
      "Mutia Datau sebagai Bu Dewi",
      "Septian Dwi Cahyo sebagai Basri",
      "Shaqueena Medina Lukman",
      "Fara Shakila",
      "Ozan Arkananta",
    ],
    synopsis:
      "Alya, Raka, dan putri mereka Yasmin berlibur ke rumah nenek di desa terpencil, namun tragedi mengubah segalanya ketika Yasmin tewas dalam kecelakaan. Setelah kembali ke Jakarta, Alya terus mendengar suara yang memanggil namanya. Ia kembali ke desa hanya untuk menemukan makam Yasmin kosong, memicu teror supranatural yang menguji cinta dan rasa kehilangan seorang ibu.",
  },
  //  15 PENCARIAN TERAKHIR
  {
    slug: "pencarian-terakhir",
    title: "Pencarian Terakhir",
    poster: "img/genre horor/pencpaian.jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Misteri", "Petualangan", "Film"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Misteri, Petualangan" },
      { label: "Sutradara", value: "Affandi Abdul Rachman" },
      { label: "Produser", value: "Chand Parwez Servia, Mithu Nisar" },
      { label: "Rumah Produksi", value: "Starvision Plus" },
      { label: "Tanggal Rilis", value: "28 Agustus 2025" },
      { label: "Durasi", value: "103 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Adzana Ashel sebagai Drupadi",
      "Razan Zu sebagai Raka",
      "Artika Sari Devi sebagai Sita",
      "Donny Alamsyah sebagai Tito",
      "Fatih Unru sebagai Ucok",
      "Alika Jantinia sebagai Nurul",
      "Fadi Alaydrus sebagai Jamal",
      "Dinda Mahira sebagai Maya",
      "Alex Abbad sebagai Oji",
      "Yama Carlos sebagai Bagus",
      "Tesadesrada Ryza sebagai Gancar",
      "M. Iqbal Sulaiman sebagai Rochmat",
      "Azkya Mahira sebagai Drupadi kecil",
      "Verdi Solaiman sebagai Bernard",
      "Ramon Y. Tungka sebagai Hadi",
      "Andrew Andika sebagai Norman",
      "Egi Fedly sebagai Ki Tapa",
      "Ruth Marini sebagai Saidah",
    ],
    synopsis:
      "Drupadi yang berusia 17 tahun bertekad menelusuri kembali Gunung Sarangan untuk menemukan ibunya yang hilang tujuh tahun lalu. Bersama Raka dan teman-temannya, ia menghadapi teror misterius di hutan angker yang menyimpan rahasia dunia lain dan kebenaran tentang hilangnya Sita, sementara ayahnya Tito harus menghadapi traumanya sendiri saat ikut pencarian.",
  },
  //  16 REG0 NYOWO
  {
    slug: "rego-nyowo",
    title: "Rego Nyowo",
    poster: "img/genre horor/Poster-Rego-nyowo5.jpg",
    section: "hits",
    genres: ["Horor", "Misteri", "Supranatural"],
    info: [
      { label: "Genre", value: "Horor, Misteri, Supranatural" },
      { label: "Sutradara", value: "Rizal Mantovani" },
      { label: "Produser", value: "Rocky Soraya" },
      {
        label: "Rumah Produksi",
        value: "Legacy Pictures, Masih Belajar Pictures, Hitmaker Studios",
      },
      { label: "Tanggal Rilis", value: "31 Juli 2025" },
      { label: "Durasi", value: "105 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Sandrinna Michelle sebagai Lena",
      "Ari Irham sebagai Benhur",
      "Cassandra Lee sebagai Rina",
      "Diah Permatasari sebagai Bu Astri",
      "Erwin Moron sebagai Pak Wiryo",
      "Rayensyah Rassya sebagai Yamin",
      "Zayyan Sakha sebagai Bobi",
      "Sheva Audrey sebagai Nadia",
      "Sinyo Riza sebagai Eka",
      "Zoe Jireh sebagai Hani",
      "Zasa Zefanya sebagai Della",
      "Robert Chaniago Timor sebagai Ryan",
      "Michael Russell sebagai Aryo",
    ],
    synopsis:
      "Lena pindah ke Malang untuk melanjutkan kuliah dan tinggal bersama kakaknya Benhur di rumah kos milik Bu Astri dan Pak Wiryo. Awalnya kehidupan mereka normal, tetapi kejanggalan mulai muncul ketika penghuni kos mengalami mimpi-mimpi aneh dan melihat sosok pocong yang menyeramkan. Teror gaib itu memaksa Lena dan teman-temannya mengungkap misteri kelam di balik kos yang ternyata punya harga yang jauh lebih tinggi dari uang sewa.",
  },
  //  17 SELEPAS TAHLIL
  {
    slug: "selepas-tahlil",
    title: "Selepas Tahlil",
    poster: "img/genre horor/selepas tahlil.jpg",
    section: "hits",
    genres: ["Horor", "Drama", "Misteri"],
    info: [
      { label: "Genre", value: "Horor, Drama, Misteri" },
      { label: "Sutradara", value: "Adriano Rudiman" },
      { label: "Produser", value: "Taufan Adryan" },
      { label: "Rumah Produksi", value: "BION Studios" },
      { label: "Tanggal Rilis", value: "10 Juli 2025" },
      { label: "Durasi", value: "96 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Aghniny Haque sebagai Saras",
      "Bastian Steel sebagai Yudhis",
      "Epy Kusnandar sebagai Hadi",
      "Vonny Anggraini",
      "Diandra Agatha",
      "Adjie N.A.",
      "Abdul Rachman Hidayat",
    ],
    synopsis:
      "Setelah kematian ayah mereka, Saras dan Yudhis bersiap untuk perpisahan terakhir, namun keesokan harinya jenazah sang ayah tiba-tiba menghilang secara misterius. Pencarian mereka membongkar rahasia lama keluarga dan teror supranatural yang tak terduga saat mereka mencoba memakamkan kembali jenazah tersebut.",
  },
  //  18 JEMBATAN SHIRATAL MUSTAQIM
  {
    slug: "jembatan-shiratal-mustaqim",
    title: "Jembatan Shiratal Mustaqim",
    poster: "img/genre horor/jembatan_.jpg",
    section: "hits",
    genres: ["Horor", "Religi", "Drama", "Film"],
    info: [
      { label: "Genre", value: "Horor, Religi, Drama" },
      { label: "Sutradara", value: "Bounty Umbara" },
      { label: "Produser", value: "Dheeraj Kalwani" },
      { label: "Rumah Produksi", value: "Dee Company" },
      { label: "Tanggal Rilis", value: "9 Oktober 2025" },
      { label: "Durasi", value: "96 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Imelda Therinne",
      "Raihan Khan",
      "Agus Kuncoro",
      "Mike Lucock",
      "Rory Asyari",
      "Eduwart Manalu",
      "Khalif Al Juna",
    ],
    synopsis:
      "Setelah bencana tsunami yang melanda kampung halamannya, Arya mulai mengalami teror penglihatan tentang sebuah jembatan mistis yang dipercaya sebagai Shiratal Mustaqim — jembatan di akhirat yang menghubungkan surga dan neraka. Bersama ibunya, ia menyelidiki keterkaitan antara penggelapan dana bantuan pasca-bencana dengan munculnya teror gaib yang menghantui mereka, yang menguji iman, moral, dan nyawa di tengah ancaman konsekuensi dosa besar itu.",
  },
  //  19 PENGANTIN IBLIS
  {
    slug: "pengantin-iblis",
    title: "Pengantin Iblis",
    poster: "img/genre horor/pengantin-iblis.jpg",
    section: "hits",
    genres: ["Horor", "Thriller", "Supernatural"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Supernatural" },
      { label: "Sutradara", value: "Azhar Kinoi Lubis" },
      { label: "Produser", value: "Andi Suryanto, Marcella Daryanani" },
      { label: "Rumah Produksi", value: "LYTO Pictures" },
      { label: "Tanggal Rilis", value: "29 Januari 2025" },
      { label: "Durasi", value: "105 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Taskya Namya sebagai Ranti",
      "Wafda Saifan sebagai Bowo",
      "Arla Ailani sebagai Gita",
      "Givina Lukita Dewi sebagai Siti",
      "Bukie B. Mansyur sebagai Bayu",
      "Ratna Riantiarno sebagai Mrs. Diane",
      "Elly Luthan sebagai Mrs. Utari",
      "Shaqueena Medina Lukman sebagai Nina",
    ],
    synopsis:
      "Ranti adalah seorang ibu yang putus asa berjuang menyelamatkan putrinya yang sakit kritis. Ketika tawaran supranatural datang melalui ritual pernikahan dengan iblis demi kesembuhan sang anak, Ranti menerimanya tanpa memahami konsekuensi mengerikan yang akan menghantui keluarganya dan membalik kehidupan mereka selamanya.",
  },

  //  20 LIFT
  {
    slug: "lift",
    title: "Lift",
    poster: "img/genre horor/lift.jpg",
    section: "upcoming",
    genres: ["Thriller", "Drama", "Mystery"],
    info: [
      { label: "Genre", value: "Thriller, Drama, Mystery" },
      { label: "Sutradara", value: "Randy Chans" },
      { label: "Produser", value: "Adha Riantono" },
      { label: "Rumah Produksi", value: "Trois Films, Maxima Pictures" },
      { label: "Tanggal Rilis", value: "26 Februari 2026" },
      { label: "Durasi", value: "98–107 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ismi Melinda sebagai Linda",
      "Shareefa Daanish sebagai Doris",
      "Verdi Solaiman sebagai Hansen",
      "Alfie Alfandy sebagai X",
      "Tegar Satrya sebagai Joko",
      "Max Metino sebagai Anton",
      "Luthi Saputra sebagai Jonathan",
      "T. Rifnu Wikana sebagai Deddy",
      "Annete Yules sebagai Leoni",
      "Berliana Lovell sebagai Dita",
    ],
    synopsis:
      "Linda, staf humas PT Jamsa Land, terjebak di dalam lift kantor yang tiba-tiba berhenti dan menerima ancaman melalui interkom. Suara misterius itu menyandera anaknya dan memaksanya mengikuti instruksi berbahaya yang perlahan membuka rahasia tragis tragedi kecelakaan lift enam tahun sebelumnya, mengungkap konspirasi dan konflik batin di balik kengerian ruang sempit yang terus menekan emosi para karakter.",
  },
  //  21 DANUR THE LAST CHAPTER
  {
    slug: "danur-the-last-chapter",
    title: "Danur: The Last Chapter",
    poster: "img/genre horor/danur the last.jpg",
    section: "upcoming",
    genres: ["Horor", "Supernatural", "Mystery"],
    info: [
      { label: "Genre", value: "Horor, Supernatural, Mystery" },
      { label: "Sutradara", value: "Awi Suryadi" },
      { label: "Produser", value: "Manoj Punjabi" },
      { label: "Rumah Produksi", value: "MD Pictures" },
      { label: "Tanggal Rilis", value: "18 Maret 2026 (Lebaran 2026)" },
      { label: "Durasi", value: "Belum diumumkan" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Prilly Latuconsina sebagai Risa",
      "Zee Asadel sebagai Riri",
      "Dito Darmawan sebagai Dimas",
      "Lewis Robert sebagai Peter",
      "Muhammad Fauzan sebagai William",
      "Said Darian sebagai Hendrik",
      "Dian Nitami sebagai Elly",
      "Fajar Nugra sebagai Dadang",
      "Fillio Dheno sebagai Janshen",
    ],
    synopsis:
      "Risa, yang kini sudah dewasa dan berusaha menjauh dari dunia gaib setelah lama hidup berdampingan dengan Peter CS dan teman-temannya, dipaksa kembali menghadapi teror supranatural yang jauh lebih gelap menjelang momen penting dalam hidup adiknya, Riri. Ketegangan semakin intens ketika kekuatan jahat mulai menguji batas kenyataan dan emosi sang tokoh utama dalam babak terakhir cerita Danur Universe.",
  },
  //  22 BADUT GENDONG
  {
    slug: "badut-gendong",
    title: "Badut Gendong",
    poster: "img/genre horor/Badut Gendong.jpg",
    section: "upcoming",
    genres: ["Horor", "Misteri", "Supernatural"],
    info: [
      { label: "Genre", value: "Horor, Misteri, Supernatural" },
      { label: "Sutradara", value: "Charles Gozali" },
      { label: "Produser", value: "Linda Gozali" },
      { label: "Rumah Produksi", value: "MAGMA Entertainment" },
      { label: "Tanggal Rilis", value: "2026 (tanggal resmi belum diumumkan)" },
      { label: "Durasi", value: "Belum diumumkan" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Marthino Lio",
      "Dayinta Melira",
      "Clara Bernadeth",
      "Derby Romero",
      "Iskak Khivano",
      "Barry Prima",
    ],
    synopsis:
      "Spin-off dari Jagat Sinema Qodrat yang mengikuti kisah dua badut jalanan yang mengalami teror supranatural setelah tragedi tragis dan ritual kuno menghidupkan entitas boneka badut yang penuh dendam. Cerita ini menggali sisi antagonis dan asal-usul kekuatan jahat yang akan mempertemukan karakter-karakter utama dalam konflik gelap yang memicu ekspansi naratif semesta Qodrat.",
  },
  //   23 WARU
  {
    slug: "waru",
    title: "Waru",
    poster:
      "img/genre horor/WARU (Horror)Mulai Tayang 12 Februari 2026Di Dakota Cinema Terpasung karena sering kerasukan da.webp",
    section: "upcoming",
    genres: ["Horor", "Drama", "Mistik"],
    info: [
      { label: "Genre", value: "Horor, Drama, Mistik" },
      { label: "Sutradara", value: "Chiska Doppert" },
      { label: "Produser", value: "Aji Fauzi" },
      {
        label: "Rumah Produksi",
        value: "Adglow Pictures, Suraya Filem, Film Q, Megah Sinema Indonesia",
      },
      { label: "Tanggal Rilis", value: "12 Februari 2026" },
      { label: "Durasi", value: "88 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Bella Graceva sebagai Nadine",
      "Zikri Daulay sebagai Adrian",
      "Jinan Safa sebagai Anya",
      "Josiah Hogan sebagai Reza",
      "Sharifah Husna sebagai Sarah",
      "Dewi Amanda sebagai Lydia",
      "Sean Mikhail sebagai Haqi",
      "Yatti Surachman sebagai Sosok Iblis Waru",
    ],
    synopsis:
      "Nadine dan teman-temannya terjerat dalam kengerian ketika Lydia, yang selalu kerasukan dan akhirnya meninggal, memohon agar mereka memusnahkan pohon Waru terkutuk di kampung halaman keluarga. Teror mistis serta misteri perjanjian pesugihan kuno yang terkait dengan pohon itu memaksa mereka menyusuri rumah tua dan hutan gelap, mengungkap rahasia kelam yang terus menghantui keluarga mereka dan menghadapi kekuatan supernatural bernama Iblis Waru.",
  },
  //  24 SLEEP NO MORE
  {
    slug: "sleep-no-more",
    title: "Sleep No More",
    poster:
      "img/genre horor/Palari Films mempersembahkan Sleep No More, judul internasional dari Monster Pabrik Rambut, sebu.jpg",
    section: "upcoming",
    genres: ["Horor", "Fantasi", "Supernatural"],
    info: [
      { label: "Genre", value: "Horor, Fantasi, Supernatural" },
      { label: "Sutradara", value: "Edwin" },
      { label: "Produser", value: "Meiske Taurisia, Muhammad Zaidy" },
      {
        label: "Rumah Produksi",
        value:
          "Palari Films, Giraffe Pictures, Hassaku Lab, In Good Company, Apsara Films",
      },
      {
        label: "Tanggal Rilis",
        value:
          "World Premiere 14 Februari 2026 (Berlinale), Tayang Indonesia 2026 (tanggal pasti belum diumumkan)",
      },
      { label: "Durasi", value: "96 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Rachel Amanda sebagai Putri",
      "Lutesha sebagai Ida",
      "Iqbaal Ramadhan sebagai Bona",
      "Sal Priadi sebagai Rudi",
      "Luqman Hakim sebagai Tohar",
      "Didik Nini Thowok sebagai Maryati",
    ],
    synopsis:
      "Dalam sebuah pabrik rambut wig yang suram dan penuh tekanan kerja, Putri dan saudara perempuannya Ida berusaha mengungkap misteri kematian mendadak ibu mereka. Putri percaya itu adalah bunuh diri, sementara Ida yakin ada kekuatan gelap dan supranatural yang bermain di balik tragedi itu. Ketika saudara laki-laki mereka, Bona, dengan kemampuan aneh untuk menyembuhkan dirinya sendiri, ikut terlibat, mereka harus menghadapi kengerian tak terduga yang mengancam kehidupan mereka di pabrik tersebut dan menyatukan kekuatan untuk bertahan.",
  },
  //  25 TANEUH KALAKNAT
  {
    slug: "taneuh-kalaknat",
    title: "Taneuh Kalaknat",
    poster: "img/genre horor/16TKAT.jpg",
    section: "upcoming",
    genres: ["Horor", "Misteri", "Supernatural"],
    info: [
      { label: "Genre", value: "Horor, Misteri, Supernatural" },
      { label: "Sutradara", value: "Gierendy" },
      {
        label: "Produser",
        value: "Fransen Susanto, Risa Risfiandi, Qori Lestari",
      },
      { label: "Rumah Produksi", value: "Anugerah Pictures, Corise Cinema" },
      { label: "Tanggal Rilis", value: "19 Februari 2026" },
      { label: "Durasi", value: "87 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Adinda Thomas sebagai Dara",
      "Nagra Kautsar sebagai Monty",
      "Annette Edoarda sebagai Nana",
      "Rizky Mochil sebagai Obi",
      "Aga Dirgantara sebagai Fikri",
      "Halilintar Syumanjaya sebagai Erik",
      "Egi Fedli sebagai Opa",
      "Jerry Likumahwa",
    ],
    synopsis:
      "Sekelompok kreator konten YouTube bernama The Eyes nekat mengunjungi Tanah Kalaknat, sebuah lokasi terkutuk yang konon tak seorang pun bisa keluar hidup-hidup. Demi konten sensasi dan popularitas, mereka tetap melanjutkan ekspedisi meski banyak peringatan. Setibanya di sana, berbagai kejadian aneh dan teror supranatural mulai terjadi, mengancam jiwa satu per satu anggota tim dalam mimpi buruk yang tak pernah mereka bayangkan.",
  },
  //  26 RAJAH
  {
    slug: "rajah",
    title: "Rajah",
    poster: "img/genre horor/rajah.jpg",
    section: "upcoming",
    genres: ["Horor", "Fantasi", "Thriller"],
    info: [
      { label: "Genre", value: "Horor, Fantasi, Thriller" },
      { label: "Sutradara", value: "R. Jiwo Kusumo" },
      { label: "Produser", value: "Ditha Samantha" },
      { label: "Rumah Produksi", value: "Eight Senses Film" },
      { label: "Tanggal Rilis", value: "26 Februari 2026" },
      { label: "Durasi", value: "108 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Samuel Rizal sebagai Malawangsa",
      "Aditya Zoni sebagai Birsha",
      "Panji Zoni sebagai Cakra",
      "Angel Lisandi Putri sebagai Nilam",
      "Ditha Samantha sebagai Tribuana",
    ],
    synopsis:
      "Nilam dan Cakra mulai diteror oleh kekuatan gaib yang berusaha melahap jiwa mereka. Teror itu membawa mereka bertemu dengan Malawangsa dan Birsha, serta seorang pelatih tari tradisional bernama Tribuana, yang perlahan mengungkap misteri gelap di balik teror supranatural dan konflik batin yang menyentuh masa lalu serta warisan budaya leluhur.",
  },
  //  27 GHOST IN THE CELL
  {
    slug: "ghost-in-the-cell",
    title: "Ghost in the Cell",
    poster: "img/genre horor/GHOST IN THE CELL.jpg",
    section: "upcoming",
    genres: ["Horor", "Komedi", "Thriller"],
    info: [
      { label: "Genre", value: "Horor, Komedi, Thriller" },
      { label: "Sutradara", value: "Joko Anwar" },
      { label: "Produser", value: "Tia Hasibuan" },
      {
        label: "Rumah Produksi",
        value: "Come and See Pictures, RAPI Films, Legacy Pictures",
      },
      { label: "Tanggal Rilis", value: "16 April 2026" },
      { label: "Durasi", value: "106 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Abimana Aryasatya sebagai Anggoro",
      "Bront Palarae sebagai Jefry",
      "Morgan Oey sebagai Bimo",
      "Endy Arfian sebagai Dimas",
      "Lukman Sardi",
      "Yoga Pratama sebagai Six",
      "Aming sebagai Tokek",
      "Tora Sudiro",
      "Rio Dewanto",
      "Mike Lucock",
      "Kiki Narendra",
      "Danang Suryonegoro",
    ],
    synopsis:
      "Di sebuah penjara keras bernama Labuan Angsana, rivalitas sengit antargeng narapidana dan korupsi antar penjaga menciptakan ketegangan yang mematikan. Ketika sosok misterius dengan kekuatan supranatural muncul dan mulai memburu satu per satu penghuni lapas, para napi yang biasanya berseteru terpaksa bersatu demi bertahan hidup. Film ini memadukan ketegangan horor dengan unsur komedi dan kritik sosial tentang kekuasaan, solidaritas, dan kekacauan dalam sistem.",
  },
  //  28 POCONG MERAH
  {
    slug: "pocong-merah",
    title: "Pocong Merah",
    poster:
      "img/genre horor/Pocong Merah siap gentayangan di bioskop kesayangan kamu mulai 19 Februari 2026!Siapkan nyali u.webp",
    section: "upcoming",
    genres: ["Horor", "Supernatural", "Drama"],
    info: [
      { label: "Genre", value: "Horor, Supernatural, Drama" },
      { label: "Sutradara", value: "Hendra Lee" },
      { label: "Produser", value: "Belum diumumkan secara resmi" },
      { label: "Rumah Produksi", value: "Checklist Cinema" },
      { label: "Tanggal Rilis", value: "19 Februari 2026" },
      { label: "Durasi", value: "83 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Adinda Halona sebagai Nadia",
      "Ahmad Pule sebagai Joko",
      "Yogi Werner sebagai Aryo",
      "Ferdian Ariyadi sebagai Reihan",
      "Putri Nabilla Aurora",
      "Leoni Winar",
      "Callista Yuna",
      "Sri Laksmi",
      "Sukoco",
      "H. Anwar Taryadi",
    ],
    synopsis:
      "Ketika keluarga Reihan pindah ke Desa Kaliboyong yang menyimpan legenda kelam tentang Katiyem, seorang dukun santet yang tewas tragis dan bangkit menjadi entitas pocong dengan aura mengerikan, mereka harus menghadapi teror supranatural yang tak terduga. Teror itu tidak hanya mengancam keselamatan mereka, tetapi juga memaksa mereka menyelami konflik batin dan pilihan moral di tengah kutukan yang terus menghantui desa tersebut.",
  },
  //  29 ASRAMA PUTRI
  {
    slug: "asrama-putri",
    title: "Asrama Putri",
    poster: "img/genre horor/asrama putri.heic",
    section: "upcoming",
    genres: ["Horor", "Drama", "Supernatural"],
    info: [
      { label: "Genre", value: "Horor, Drama, Supernatural" },
      { label: "Sutradara", value: "Wishnu Kuncoro" },
      { label: "Produser", value: "Adipati Karna" },
      { label: "Rumah Produksi", value: "Puras Alam Semesta" },
      { label: "Tanggal Rilis", value: "19 Februari 2026" },
      { label: "Durasi", value: "93 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Dea Annisa sebagai Gwen",
      "Samuel Rizal sebagai Lazuardi",
      "Mawar Butterfly sebagai Mia",
      "Monique Henry sebagai Liza",
      "Nasywa Auliya sebagai Sally",
      "Luz Victoria",
      "Nadya Ulya sebagai Loly",
      "Bima Prawira sebagai Miko",
      "Surya R Kusumah sebagai Beny",
    ],
    synopsis:
      "Kedatangan dosen baru, Mia, di sebuah kampus putri di Bogor secara tak sengaja bertepatan dengan kejadian kerasukan massal yang melanda para mahasiswi di asrama tersebut. Di balik teror mistis ini tersembunyi rahasia kelam yang melibatkan praktik gaib dan sisi gelap kehidupan kampus, memaksa Gwen dan Mia untuk menyelidiki asal mula kekuatan jahat yang mengancam keselamatan semua penghuni asrama.",
  },

  //  30 ZONA MERAH
  {
    slug: "zona-merah",
    title: "Zona Merah",
    poster: "img/genre series/zona merah.jpg",
    section: "hits",
    genres: ["Action", "Thriller", "Horor", "Survival", "Series"],
    info: [
      { label: "Genre", value: "Action, Thriller, Horror, Survival" },
      { label: "Creator", value: "Sidharta Tata, Fajar Martha Santosa" },
      { label: "Rumah Produksi", value: "Screenplay Films" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "8 November 2024" },
      { label: "Jumlah Episode", value: "8" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Aghniny Haque sebagai Maya",
      "Andri Mashadi sebagai Risang",
      "Devano Danendra sebagai Adi",
      "Maria Theodore sebagai Ella",
      "Lukman Sardi sebagai Zaenal Effendi",
      "Haru Sandra sebagai Dandy",
      "Dian Sidik sebagai Seno",
      "Ruth Marini sebagai Dyah Ayu Maharani",
      "Ratna Riantiarno sebagai Nelly",
      "Mariana Resli sebagai Acha",
      "Aksara Dena sebagai Ipung",
    ],
    synopsis:
      "Di kota fiksi Rimbalaya, wabah mayit hidup menyebar dan memaksa warga bertahan hidup. Maya, seorang pekerja pabrik, harus mencari adiknya yang hilang di tengah kekacauan yang mencampur unsur politik, konspirasi, dan serangan makhluk mayat hidup. Bersama jurnalis Risang dan Ella, mereka mencoba melarikan diri sebelum Rimbalaya benar-benar berubah menjadi zona merah yang tak terjangkau.",
  },
  //  31 PERTARUHAN 3
  {
    slug: "pertaruhan-3",
    title: "Pertaruhan The Series 3",
    poster: "img/genre series/pertaruhan 3 the series.webp",
    section: "hits",
    genres: ["Action", "Drama", "Thriller", "Series", "Film"],
    info: [
      { label: "Genre", value: "Action, Drama, Thriller" },
      { label: "Creator", value: "Fajar Martha Santosa, Sidharta Tata" },
      { label: "Rumah Produksi", value: "Screenplay Films" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "14 November 2025" },
      { label: "Jumlah Episode", value: "8" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Jefri Nichol sebagai Elzan",
      "Giulio Parengkuan sebagai Ical",
      "Clara Bernadeth sebagai Ara",
      "Graciella Abigail sebagai Ayu",
      "Aulia Sarah sebagai Kumala",
      "Maudy Effrosina sebagai Laras",
      "Aming sebagai Kalkun",
      "Jeremie J. Tobing sebagai Iskandar",
      "Ali Fikry sebagai Dolar",
      "Elang El Gibran sebagai Elang",
      "Ferry Salim sebagai Bos Besar",
    ],
    synopsis:
      "Elzan dan Ical berusaha membuktikan diri tidak bersalah setelah digulingkan oleh konflik besar dan tuduhan pembunuhan misterius terhadap seorang bos kriminal. Di dunia Cikawe yang penuh kekerasan, intrik, dan keputusan berbahaya, mereka harus bertarung lagi untuk keluarga dan masa depan mereka sambil menghadapi karakter-karakter baru yang membawa konflik semakin intens dan emosional.",
  },
  //  32 NIGHTMARES AND DAYDREAMS
  {
    slug: "nightmares-and-daydreams",
    title: "Joko Anwar’s Nightmares and Daydreams",
    poster: "img/genre series/nightmares and Daydreams.jpg",
    section: "hits",
    genres: ["Sci-Fi", "Thriller", "Mystery", "Supernatural", "Series", "Film"],
    info: [
      { label: "Genre", value: "Sci-Fi, Thriller, Mystery, Supernatural" },
      { label: "Creator", value: "Joko Anwar" },
      { label: "Sutradara", value: "Joko Anwar" },
      { label: "Rumah Produksi", value: "Come and See Pictures" },
      { label: "Platform", value: "Netflix" },
      { label: "Tanggal Rilis", value: "14 Juni 2024" },
      { label: "Jumlah Episode", value: "7" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ario Bayu",
      "Marthino Lio",
      "Fachri Albar",
      "Kiki Narendra",
      "Asa Germann",
      "Salvita Decorte",
      "Teuku Rifnu Wikana",
      "Lukman Sardi",
    ],
    synopsis:
      "Serial antologi ini mengikuti kisah orang-orang biasa yang menghadapi kejadian aneh dan tak terjelaskan, mulai dari teknologi misterius hingga fenomena supranatural yang mengubah hidup mereka. Setiap episode berdiri sendiri namun perlahan membentuk benang merah tentang kekuatan tersembunyi dan konspirasi besar yang menghubungkan semuanya.",
  },
  //  33 KUPU MALAM
  {
    slug: "kupu-malam",
    title: "Kupu Malam",
    poster: "img/genre series/kupu malam.heic",
    section: "hits",
    genres: ["Drama", "Romansa", "Series"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Sutradara", value: "Anggy Umbara" },
      { label: "Rumah Produksi", value: "MD Entertainment" },
      { label: "Platform", value: "WeTV" },
      { label: "Tanggal Rilis", value: "25 November 2022" },
      { label: "Jumlah Episode", value: "7" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Michelle Ziudith sebagai Laura / Flo",
      "Kenny Austin sebagai Raffi",
      "Lukman Sardi sebagai Arif Dirgantara",
      "Rizky Kinos sebagai Dion",
      "Steffi Zamora sebagai Melly",
    ],
    synopsis:
      "Laura adalah mahasiswi cerdas yang diam-diam menjalani kehidupan ganda sebagai pekerja seks demi membiayai pengobatan ayahnya. Dalam perjalanan tersebut, ia bertemu Raffi, pria yang kemudian mengguncang batas antara identitas aslinya dan kehidupan malam yang ia jalani. Konflik batin, rahasia, dan tekanan sosial membuat hidup Laura semakin rumit.",
  },
  //  34 JODOH ATAU BUKAN
  {
    slug: "jodoh-atau-bukan",
    title: "Jodoh atau Bukan",
    poster: "img/genre series/JODOH.webp",
    section: "hits",
    genres: ["Drama", "Romansa", "Series"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Sutradara", value: "Lakonde" },
      { label: "Rumah Produksi", value: "MD Entertainment" },
      { label: "Platform", value: "WeTV" },
      { label: "Tanggal Rilis", value: "13 Januari 2023" },
      { label: "Jumlah Episode", value: "15" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Megan Domani sebagai Natalie",
      "Rayn Wijaya sebagai Johan",
      "Hessel Steven sebagai Julian",
      "David Chalik sebagai Ayah Natalie",
      "Ramzi sebagai Ayah Johan",
    ],
    synopsis:
      "Natalie dan Johan dijodohkan oleh keluarga mereka demi kepentingan bisnis. Awalnya keduanya menolak dan memiliki kehidupan masing-masing, namun kedekatan yang terbangun perlahan membuat batas antara kewajiban dan perasaan menjadi kabur. Konflik keluarga, cinta segitiga, dan ego pribadi membuat mereka mempertanyakan apakah perjodohan itu takdir atau sekadar tekanan sosial.",
  },
  //  35 ALGOJO
  {
    slug: "algojo",
    title: "Algojo",
    poster: "img/genre series/algojo.jpg",
    section: "hits",
    genres: ["Action", "Drama", "Thriller", "Series"],
    info: [
      { label: "Genre", value: "Action, Drama, Thriller" },
      { label: "Sutradara", value: "Rahabi Mandra" },
      { label: "Rumah Produksi", value: "Screenplay Films" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "16 Januari 2026" },
      { label: "Jumlah Episode", value: "8" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Arya Saloka sebagai Zar",
      "Caitlin Halderman sebagai Icha",
      "Randy Pangalila sebagai Frengky",
      "Andy /rif",
      "Justin Adiwinata",
      "Moh. Iqbal Sulaiman",
      "Yusuf Mahardika",
    ],
    synopsis:
      "Zar, seorang pengantar-jemput pekerja seks (anjelo), terjerat dunia gelap setelah ayahnya menjadi korban kekerasan dan konflik kriminal. Untuk mencari jawaban dan membalas dendam, ia menyusup ke dalam kelompok pembunuh bayaran yang dikenal sebagai algojo. Di tengah intrik, loyalitas, dan kekerasan, Zar berjuang mempertahankan kemanusiaannya sambil berkonfrontasi dengan kejamnya dunia bawah tanah Jakarta.",
  },
  //  36 SUGAR BABY
  {
    slug: "sugar-baby",
    title: "Sugar Baby",
    poster: "img/genre series/sugar baby.jpg",
    section: "hits",
    genres: ["Komedi", "Drama", "Romansa", "Series"],
    info: [
      { label: "Genre", value: "Komedi, Drama, Romansa" },
      { label: "Sutradara", value: "Aldo Swastia" },
      { label: "Rumah Produksi", value: "Screenplay Films" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "29 November 2025" },
      { label: "Jumlah Episode", value: "8" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Adipati Dolken sebagai Darma",
      "Davina Karamoy sebagai Susan",
      "Winky Wiryawan sebagai James",
      "Jolene Marie sebagai Rahmi",
      "Shakira Jasmine sebagai Tiara",
      "Arthada sebagai Merri",
      "Rachel Mikhayla sebagai Chacha",
      "Faiz Vishal sebagai Pati",
    ],
    synopsis:
      "Darma, seorang sopir pribadi yang hidupnya penuh tekanan ekonomi dan keluarga, tiba-tiba terlibat dalam kehidupan glamor setelah bertemu Susan, salah satu sugar baby dari bosnya. Ia berpura-pura menjadi pria kaya untuk menarik perhatian Susan, namun mencoba mempertahankan ketulusan dan identitasnya di balik topeng kemewahan. Ketika rahasia dan konflik mulai muncul, persahabatan, cinta, dan ambisi diuji di tengah dunia yang tidak seindah yang terlihat.",
  },
  //  37 WHATS UP SECRYTARY KIM?
  {
    slug: "whats-up-with-secretary-kim",
    title: "What's Up with Secretary Kim?",
    poster: "img/genre series/whats up.jpg",
    section: "hits",
    genres: ["Romansa", "Komedi", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Komedi, Drama" },
      { label: "Sutradara", value: "Rako Prijanto" },
      { label: "Rumah Produksi", value: "Falcon Pictures" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "8 November 2025" },
      { label: "Durasi", value: "97 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Mawar Eva de Jongh sebagai Kimberley Laksono",
      "Adipati Dolken sebagai Rendra Prakasa",
      "Dimas Beck sebagai Willy",
      "Agnes Naomi sebagai Mandy",
    ],
    synopsis:
      "Kimberley Laksono sudah menjadi sekretaris setia Rendra Prakasa selama sembilan tahun. Ketika ia mengajukan resign untuk mencari kehidupan dan cinta yang lebih bermakna, Rendra yang perfeksionis mulai menyadari perasaannya. Dalam perjuangan mempertahankan hubungan yang sedang berubah, mereka menghadapi dinamika emosional dan komedi yang mewarnai kasih sayang di tempat kerja dan kehidupan pribadi.",
  },
  //  38 JALINAN TERLARANG
  {
    slug: "jalinan-terlarang",
    title: "Jalinan Terlarang",
    poster: "img/genre series/Jalinan Terlarang.jpg",
    section: "hits",
    genres: ["Drama", "Romansa", "Series"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Sutradara", value: "Rudi Aryanto" },
      { label: "Rumah Produksi", value: "Screenplay Films" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Rilis", value: "2025" },
      { label: "Jumlah Episode", value: "8" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["Dimas Anggara", "Maria Theodore", "Ari Wibowo", "Catherine Wilson"],
    synopsis:
      "Sebuah kisah tentang hubungan terlarang yang melibatkan pasangan dengan konflik moral dan tekanan sosial. Ketika cinta tumbuh di situasi yang tidak seharusnya, rahasia, pengkhianatan, dan konsekuensi mulai menghantui kehidupan mereka. Setiap pilihan yang diambil membawa dampak besar bagi keluarga dan masa depan mereka.",
  },

  //  39 A DAN Z INSYAALLAH
  {
    slug: "a-dan-z-insyaallah-cinta",
    title: "A dan Z Insyaallah Cinta",
    poster: "img/genre series/a dan z.jpg",
    section: "upcoming",
    genres: ["Drama", "Romansa", "Series"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Platform", value: "Vidio" },
      { label: "Tanggal Tayang", value: "19 Februari 2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Rizky Nazar",
      "Laura Moane",
      "Zoe Abbas Jackson",
      "Anya Taroreh",
      "Yusuf Kartiko",
    ],
    synopsis:
      "Kisah pertemuan dua insan dengan latar belakang berbeda yang dipertemukan dalam situasi tak terduga. Di tengah konflik, masa lalu, dan ekspektasi keluarga, keduanya diuji untuk memahami arti komitmen, keikhlasan, dan cinta yang diridai.",
  },
  //  40 JAKARTA UNDERCOVER
  {
    slug: "jakarta-undercover",
    title: "Jakarta Undercover The Series",
    poster: "img/genre series/jakarta undercover.jpg",
    section: "upcoming",
    genres: ["Crime", "Drama", "Thriller", "Series"],
    info: [
      { label: "Genre", value: "Crime, Drama, Thriller" },
      { label: "Platform", value: "Vidio" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Caitlin Halderman",
      "Baskara Mahendra",
      "Haico Van der Veken",
      "Carissa Perusset",
      "Brandon Salim",
    ],
    synopsis:
      "Mengangkat sisi gelap kehidupan ibu kota, serial ini mengikuti perjalanan sejumlah karakter muda yang terjebak dalam pusaran dunia malam Jakarta. Ambisi, cinta, pengkhianatan, dan kekuasaan saling berkelindan, memaksa mereka menghadapi konsekuensi dari setiap pilihan yang diambil.",
  },
  //  41 THE BIG 4 SEASON 2
  {
    slug: "the-big-4-2",
    title: "The Big 4 2",
    poster:
      "img/genre series/THE BIG 4 merupakan film besutan Timo Tjahjanto yang  tayang di Netflix pada 15 Desember 2022. F.jpg",
    section: "upcoming",
    genres: ["Action", "Komedi", "Crime", "Series"],
    info: [
      { label: "Status", value: "Belum Dikonfirmasi Resmi" },
      { label: "Platform", value: "Netflix (perkiraan)" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["Abimana Aryasatya", "Putri Marino", "Lutesha", "Arie Kriting"],
    synopsis:
      "Sekuel yang berpotensi melanjutkan kisah empat mantan pembunuh bayaran dengan dinamika baru dan ancaman yang lebih besar.",
  },
  //  42 ROH HALU
  {
    slug: "roh-halu",
    title: "Roh Halu",
    poster: "img/genre series/ROh halu.jpg",
    section: "upcoming",
    genres: ["Horor", "Komedi", "Psychological Thriller", "Series"],
    info: [
      { label: "Genre", value: "Horor, Komedi, Psychological Thriller" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["Rigen Rakelna", "Ananta Rispo", "Hifdzi Khoir"],
    synopsis:
      "Tiga sahabat mengalami serangkaian kejadian aneh setelah salah satu dari mereka mengaku melihat sosok misterius yang tidak kasat mata. Awalnya dianggap halusinasi biasa, namun kejadian demi kejadian mulai mengarah pada sesuatu yang lebih menyeramkan. Di tengah kepanikan dan kekacauan, mereka harus membedakan antara sugesti, trauma, dan kemungkinan adanya entitas yang benar-benar mengganggu.",
  },
  //  43 BERCINTA DENGAN MAUT
  {
    slug: "bercinta-dengan-maut",
    title: "Bercinta dengan Maut",
    poster: "img/genre series/bercinta dengan maut.jpg",
    section: "upcoming",
    genres: ["Horor", "Thriller", "Drama", "Series"],
    info: [
      { label: "Genre", value: "Horor, Thriller, Drama" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["—"],
    synopsis:
      "Seorang perempuan yang terobsesi dengan ramalan tentang jodoh mulai mengalami kejadian-kejadian ganjil setelah bertemu sosok misterius yang diyakini sebagai takdirnya. Ketika orang-orang di sekitarnya satu per satu terkena dampak dari kehadiran pria tersebut, ia mulai menyadari bahwa cintanya mungkin terikat pada sesuatu yang lebih gelap dari yang ia bayangkan.",
  },
  //  44 TIBA TIBA BERONDONG
  {
    slug: "tiba-tiba-brondong",
    title: "Tiba-Tiba Brondong",
    poster: "img/genre series/tiba tiba brondong.jpg",
    section: "upcoming",
    genres: ["Romansa", "Komedi", "Series"],
    info: [
      { label: "Genre", value: "Romansa, Komedi" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Fiona Mahdalena",
      "Aluna Alwy",
      "Sondang Pratama",
      "Tatjana Saphira",
      "Fadi Alaydrus",
      "Cinta Brian",
      "Kimberly Angela",
      "Isad Gaddafi",
    ],
    synopsis:
      "Seorang perempuan yang merasa hidupnya terlalu terkontrol tiba-tiba menjalin hubungan dengan pria yang jauh lebih muda. Di tengah perbedaan usia, ekspektasi sosial, dan dinamika keluarga, mereka harus menentukan apakah hubungan tersebut sekadar fase atau sesuatu yang lebih serius.",
  },
  //  45 BAD GUYS 2
  {
    slug: "bad-guys-2",
    title: "Bad Guys 2",
    poster: "img/genre series/bad guys 2.jpg",
    section: "upcoming",
    genres: ["Action", "Crime", "Thriller", "Series"],
    info: [
      { label: "Genre", value: "Action, Crime, Thriller" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Oka Antara sebagai Jaka Maulana",
      "Randy Pangalila sebagai Haidar",
      "Dwi Sasono sebagai Anton Klewang",
      "Maudy Effrosina sebagai Sekar",
      "Omara Esteghlal sebagai Elias",
    ],
    synopsis:
      "Sekelompok mantan narapidana kembali direkrut untuk menghadapi jaringan kriminal baru yang lebih terorganisir dan brutal. Ketika misi berubah menjadi konflik pribadi, Jaka Maulana dan timnya harus memilih antara menyelesaikan tugas atau mempertahankan sisa moralitas yang masih mereka miliki.",
  },
  //  46 JAGAL BEGAL
  {
    slug: "jagal-begal",
    title: "Jagal Begal",
    poster: "img/genre series/jagal begall'.jpg",
    section: "upcoming",
    genres: ["Action", "Crime", "Drama", "Series"],
    info: [
      { label: "Genre", value: "Action, Crime, Drama" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["Angga Yunanda", "Zee Asadel", "Omara Esteghlal"],
    synopsis:
      "Seorang pemuda terjebak dalam lingkaran kekerasan jalanan setelah sebuah insiden yang mengubah hidupnya. Di tengah tekanan lingkungan dan konflik moral, ia harus memilih antara terus tenggelam dalam dunia kriminal atau mencari jalan keluar sebelum semuanya terlambat.",
  },
  //  47 GANTENG-GANTENG GENTENG
  {
    slug: "ganteng-ganteng-genteng",
    title: "Ganteng Ganteng Genteng",
    poster: "img/genre series/ganteng ganteng genteng.jpg",
    section: "upcoming",
    genres: ["Drama", "Komedi", "Romansa", "Series"],
    info: [
      { label: "Format", value: "Serial" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Antonio Blanco Jr. sebagai pewaris manja",
      "Zsa Zsa Utari",
      "Dian Sidik",
      "Yama Carlos",
      "Rafly Altama",
      "Apos Hutagaol",
      "Joe P Project",
      "Adinda Thomas",
    ],
    synopsis:
      "Seorang pewaris muda yang terbiasa hidup dalam kenyamanan harus menghadapi realitas baru ketika situasi keluarga memaksanya turun langsung mengelola bisnis warisan. Di tengah konflik internal, persaingan, dan dinamika percintaan, ia perlahan belajar tentang tanggung jawab, harga diri, dan arti kedewasaan.",
  },

  //  48 RANGGA & CINTA
  {
    slug: "rangga-dan-cinta",
    title: "Rangga & Cinta",
    poster: "img/genre romansa/Rangga_&_Cinta.jpeg",
    section: "hits",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "Riri Riza" },
      { label: "Produser", value: "Mira Lesmana" },
      { label: "Rumah Produksi", value: "Miles Films" },
      { label: "Tanggal Rilis", value: "2026" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Nicholas Saputra sebagai Rangga",
      "Dian Sastrowardoyo sebagai Cinta",
      "Titi Kamal sebagai Maura",
      "Adinia Wirasti sebagai Karmen",
      "Sissy Priscillia sebagai Milly",
      "Dennis Adhiswara sebagai Mamet",
      "Lukman Sardi sebagai Ayah Cinta",
      "Jajang C. Noer sebagai Ibu Cinta",
      "Robby Tumewu sebagai Guru Sastra",
      "Reza Rahadian sebagai Rekan Kerja Rangga",
    ],
    synopsis:
      "Rangga dan Cinta kembali dipertemukan dalam fase kehidupan yang lebih dewasa. Jarak, pilihan karier, dan luka lama menjadi ujian hubungan mereka. Film ini menyoroti cinta yang tidak lagi sekadar rasa, melainkan komitmen dan keberanian untuk bertahan.",
  },
  //  49 1 IMAM 2 MAKMUM
  {
    slug: "1-imam-2-makmum",
    title: "1 Imam 2 Makmum",
    poster: "img/genre romansa/1 imam 2 makmum.jpg",
    section: "hits",
    genres: ["Romansa", "Drama", "Religi"],
    info: [
      { label: "Genre", value: "Romansa, Drama, Religi" },
      { label: "Sutradara", value: "TBA" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Fedi Nuril sebagai Arman",
      "Amanda Manopo sebagai Alya",
      "Cut Mini sebagai Ibu Arman",
      "Rizky Nazar sebagai Sahabat Arman",
      "Aulia Sarah sebagai Mantan Istri",
      "Teuku Rifnu Wikana sebagai Ustaz",
      "Nadya Arina sebagai Rekan Kerja",
      "Donny Alamsyah sebagai Kakak Arman",
    ],
    synopsis:
      "Mengisahkan konflik emosional dalam pernikahan ketika seorang pria harus menghadapi masa lalu dan komitmennya di masa kini. Drama cinta dan keimanan yang menguji kesetiaan serta pengorbanan.",
  },
  //  50 TAK KENAL MAKA TAARUF
  {
    slug: "tak-kenal-maka-taaruf",
    title: "Tak Kenal Maka Taaruf",
    poster: "img/genre romansa/tak kenal maka taaruf.jpg",
    section: "hits",
    genres: ["Romansa", "Religi", "Film"],
    info: [
      { label: "Genre", value: "Romansa, Religi" },
      { label: "Sutradara", value: "TBA" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Adhisty Zara sebagai Aisyah",
      "Angga Yunanda sebagai Fikri",
      "Cut Syifa sebagai Sahabat Aisyah",
      "Omar Daniel sebagai Kakak Fikri",
      "Wulan Guritno sebagai Ibu Aisyah",
      "Surya Saputra sebagai Ayah Aisyah",
      "Dimas Anggara sebagai Rekan Kerja",
      "Asri Welas sebagai Tante",
    ],
    synopsis:
      "Aisyah dan Fikri dipertemukan melalui proses taaruf yang awalnya terasa canggung. Seiring waktu, keduanya belajar memahami makna cinta yang tumbuh dari komitmen dan kepercayaan.",
  },
  //  51 SAMPAI JUMPA, SELAMAT TINGGAL
  {
    slug: "sampai-jumpa-selamat-tinggal",
    title: "Sampai Jumpa, Selamat Tinggal",
    poster: "img/genre romansa/sampai jumpa selamat tinggal.jpg",
    section: "hits",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "Adrian Teh" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Putri Marino sebagai Wyn",
      "Jerome Kurnia sebagai Dani",
      "Jourdy Pranata sebagai Sahabat Dani",
      "Lutesha sebagai Rekan Kerja",
      "Mathias Muchus sebagai Ayah Wyn",
      "Nungki Kusumastuti sebagai Ibu Wyn",
      "Reza Rahadian sebagai Mentor",
      "Arifin Putra sebagai Mantan",
    ],
    synopsis:
      "Dua mantan kekasih dipertemukan kembali di luar negeri setelah bertahun-tahun berpisah. Pertemuan itu membuka kembali luka lama dan pertanyaan tentang kesempatan kedua dalam cinta.",
  },
  //  52 A BUSINESS PROPOSAL
  {
    slug: "a-business-proposal",
    title: "A Business Proposal",
    poster: "img/genre romansa/a business proposal.jpg",
    section: "hits",
    genres: ["Romansa", "Komedi"],
    info: [
      { label: "Genre", value: "Romansa, Komedi" },
      { label: "Sutradara", value: "Park Seon-ho" },
      { label: "Rumah Produksi", value: "SBS, Kakao Entertainment" },
      { label: "Tahun Rilis", value: "2022" },
      { label: "Jumlah Episode", value: "12 Episode" },
      { label: "Bahasa", value: "Bahasa Korea" },
    ],
    cast: [
      "Ahn Hyo-seop sebagai Kang Tae-moo",
      "Kim Se-jeong sebagai Shin Ha-ri",
      "Kim Min-kyu sebagai Cha Sung-hoon",
      "Seol In-ah sebagai Jin Young-seo",
      "Lee Deok-hwa sebagai Chairman Kang",
      "Kim Hyun-sook sebagai Yeo Eui-ju",
      "Lim Ki-hong sebagai Gye-bin",
      "Yoon Sang-jeong sebagai Kim Hye-ji",
    ],
    synopsis:
      "Shin Ha-ri menggantikan sahabatnya untuk menghadiri kencan buta dan terkejut saat mengetahui pria yang ditemuinya adalah CEO di kantornya sendiri. Hubungan pura-pura itu berkembang menjadi romansa penuh situasi canggung, humor, dan dinamika kantor.",
  },
  //  53 LA TAHZAN
  {
    slug: "la-tahzan",
    title: "La Tahzan",
    poster: "img/genre romansa/la tahzan.jpg",
    section: "hits",
    genres: ["Romansa", "Drama", "Religi"],
    info: [
      { label: "Genre", value: "Romansa, Drama, Religi" },
      { label: "Sutradara", value: "Hanung Bramantyo" },
      { label: "Produser", value: "Manoj Punjabi" },
      { label: "Rumah Produksi", value: "MD Pictures" },
      { label: "Tahun Rilis", value: "2024" },
      { label: "Durasi", value: "120 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Deva Mahenra sebagai Reza",
      "Marshanda sebagai Asih",
      "Ariel Tatum sebagai Dinda",
      "Cut Mini sebagai Ibu Reza",
      "Donny Alamsyah sebagai Ayah Reza",
      "Revalina S. Temat sebagai Sahabat Asih",
      "Teuku Rifnu Wikana sebagai Ustaz",
      "Asri Welas sebagai Tante",
    ],
    synopsis:
      "Reza menghadapi ujian berat dalam pernikahannya ketika masa lalu dan cobaan hidup menguji kesetiaan serta keimanannya. Film ini menggambarkan cinta, pengorbanan, dan makna sabar dalam hubungan rumah tangga.",
  },
  //  54 SETETES EMBUN CINTA NIYALA
  {
    slug: "setetes-embun-cinta-niyala",
    title: "Setetes Embun Cinta Niyala",
    poster: "img/genre romansa/setetes embun niyala.jpg",
    section: "hits",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "TBA" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Angga Yunanda sebagai Arya",
      "Beby Tsabina sebagai Niyala",
      "Jourdy Pranata sebagai Sahabat Arya",
      "Syifa Hadju sebagai Sahabat Niyala",
      "Mathias Muchus sebagai Ayah Niyala",
      "Christine Hakim sebagai Nenek",
      "Rizky Hanggono sebagai Dokter",
      "Aulia Sarah sebagai Rekan Kerja",
    ],
    synopsis:
      "Arya dan Niyala dipertemukan oleh takdir dalam situasi yang tidak mudah. Cinta mereka tumbuh perlahan di tengah konflik keluarga dan ujian kehidupan yang mengharuskan mereka memilih antara perasaan dan tanggung jawab.",
  },
  //  55 GOWOK: KAMASUTRA JAWA
  {
    slug: "gowok-kamasutra-jawa",
    title: "Gowok: Kamasutra Jawa",
    poster: "img/genre romansa/gowok.jpg",
    section: "hits",
    genres: ["Romansa", "Drama", "Budaya", "Film"],
    info: [
      { label: "Genre", value: "Romansa, Drama, Budaya" },
      { label: "Sutradara", value: "Hanung Bramantyo" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia, Jawa" },
    ],
    cast: [
      "Reza Rahadian sebagai Kiai Wiryo",
      "Raihaanun sebagai Nyai Santi",
      "Jerome Kurnia sebagai Murid",
      "Wulan Guritno sebagai Ibu Bangsawan",
      "Teuku Rifnu Wikana sebagai Penghulu",
      "Christine Hakim sebagai Sesepuh",
      "Putri Marino sebagai Gadis Desa",
      "Ibnu Jamil sebagai Bangsawan",
    ],
    synopsis:
      "Mengangkat tradisi gowok di Jawa yang sarat makna dan kontroversi. Film ini menampilkan relasi cinta, kuasa, serta benturan antara tradisi dan modernitas dalam perjalanan karakter-karakternya.",
  },
  //  56 SORE: ISTRI DARI MASA DEPAN
  {
    slug: "sore-istri-dari-masa-depan",
    title: "Sore: Istri dari Masa Depan",
    poster: "img/genre romansa/sore.jpg",
    section: "hits",
    genres: ["Romansa", "Drama", "Fantasi"],
    info: [
      { label: "Genre", value: "Romansa, Drama, Fantasi" },
      { label: "Sutradara", value: "Yandy Laurens" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "Cerita Films" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Dion Wiyoko sebagai Jonathan",
      "Sheila Dara Aisha sebagai Sore",
      "Mathias Muchus sebagai Ayah Jonathan",
      "Maya Hasan sebagai Ibu Jonathan",
      "Gisella Anastasia sebagai Rekan Kerja",
      "Rizky Hanggono sebagai Sahabat Jonathan",
      "Aulia Sarah sebagai Psikolog",
      "Reza Rahadian sebagai Mentor",
    ],
    synopsis:
      "Jonathan dikejutkan oleh kehadiran seorang perempuan bernama Sore yang mengaku sebagai istrinya dari masa depan. Ia datang untuk mengubah kebiasaan buruk Jonathan sebelum semuanya terlambat. Sebuah kisah cinta tentang waktu, pilihan, dan kesempatan kedua.",
  },
  //  57 NORMA: ANTARA MERTUA DAN MENANTU
  {
    slug: "norma-antara-mertua-dan-menantu",
    title: "Norma: Antara Mertua dan Menantu",
    poster: "img/genre romansa/norma.webp",
    section: "hits",
    genres: ["Romansa", "Drama", "Film"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "TBA" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Tissa Biani sebagai Norma",
      "Rizky Nazar sebagai Rozy",
      "Wulan Guritno sebagai Ibu Rozy",
      "Cut Mini sebagai Ibu Norma",
      "Teuku Rassya sebagai Sahabat Rozy",
      "Asri Welas sebagai Tetangga",
      "Donny Alamsyah sebagai Ayah Norma",
      "Adinia Wirasti sebagai Rekan Kerja",
    ],
    synopsis:
      "Norma harus menghadapi kenyataan pahit ketika hubungan rumah tangganya terguncang oleh konflik keluarga yang tak terduga. Drama cinta, pengkhianatan, dan tekanan sosial menjadi ujian berat dalam mempertahankan pernikahan.",
  },
  //  58 PANGKU
  {
    slug: "pangku",
    title: "Pangku",
    poster: "img/genre romansa/pangku.jpg",
    section: "hits",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "TBA" },
      { label: "Produser", value: "TBA" },
      { label: "Rumah Produksi", value: "TBA" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "TBA" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Lutesha sebagai Sartika",
      "Chicco Kurniawan sebagai Juna",
      "Jourdy Pranata sebagai Rekan Kerja",
      "Ari Irham sebagai Pelanggan",
      "Mathias Muchus sebagai Ayah Sartika",
      "Christine Hakim sebagai Nenek",
      "Rukman Rosadi sebagai Pengelola",
      "Putri Marino sebagai Sahabat Sartika",
    ],
    synopsis:
      "Sartika menjalani kehidupan yang keras dan penuh stigma, hingga ia bertemu seseorang yang mengubah cara pandangnya tentang cinta dan harga diri. Sebuah romansa realistis tentang penerimaan dan harapan.",
  },
  //  59 LYORA
  {
    slug: "lyora",
    title: "Lyora",
    poster: "img/genre romansa/lyora.jpeg",
    section: "hits",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Sutradara", value: "Yandy Laurens" },
      { label: "Produser", value: "Chand Parwez Servia" },
      { label: "Rumah Produksi", value: "Starvision Plus" },
      { label: "Tahun Rilis", value: "2025" },
      { label: "Durasi", value: "118 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Lutesha sebagai Lyora",
      "Jourdy Pranata sebagai Arka",
      "Christine Hakim sebagai Ibu Lyora",
      "Reza Rahadian sebagai Damar",
      "Putri Marino sebagai Sahabat Lyora",
    ],
    synopsis:
      "Lyora dan Arka pernah menjadi sepasang kekasih yang tak terpisahkan, hingga sebuah keputusan besar memisahkan mereka. Bertahun-tahun kemudian, pertemuan kembali membuka luka lama dan perasaan yang belum selesai. Di tengah tekanan keluarga dan pilihan hidup yang berbeda, Lyora harus menentukan apakah ia akan memperjuangkan cinta yang pernah ada atau berdamai dengan masa lalu.",
  },

  //  60 AHLAN SINGAPORE
  {
    slug: "ahlan-singapore",
    title: "Ahlan Singapore",
    poster: "img/genre romansa/ahlan singapore.jpeg",
    section: "upcoming",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bulan Rilis", value: "Februari" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["TBA sebagai Aisyah", "TBA sebagai Liam", "TBA sebagai Ridwan"],
    synopsis:
      "Aisyah melanjutkan studi di Singapura dan terjebak dalam konflik cinta segitiga antara Liam dan Ridwan. Di tengah ambisi, trauma masa lalu, dan perbedaan prinsip, ia harus memilih antara logika atau perasaan.",
  },

  //  61 SADALI
  {
    slug: "sadali",
    title: "Sadali",
    poster: "img/genre romansa/sadali.jpeg",
    section: "upcoming",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bulan Rilis", value: "Februari" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["TBA sebagai Sadali", "TBA sebagai Cinta Lama"],
    synopsis:
      "Seorang pelukis bernama Sadali berusaha bangkit dari patah hati dan kegagalan masa lalu. Pertemuan tak terduga dengan seseorang dari masa lalunya membuka kembali luka sekaligus peluang untuk memulai kisah cinta yang baru.",
  },

  //  62 BALAS BUDI
  {
    slug: "balas-budi",
    title: "Balas Budi",
    poster: "img/genre romansa/balas budi.jpeg",
    section: "upcoming",
    genres: ["Komedi", "Romansa"],
    info: [
      { label: "Genre", value: "Komedi, Romansa" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bulan Rilis", value: "Februari" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["TBA sebagai Alma", "TBA sebagai Budi"],
    synopsis:
      "Alma dan teman-temannya menyusun rencana untuk membalas perlakuan Budi, pria yang pernah menyakiti hati mereka. Namun di balik rencana balas dendam itu, muncul perasaan yang tak terduga.",
  },

  //  63 ANTARA MAMA, CINTA, DAN SURGA
  {
    slug: "antara-mama-cinta-dan-surga",
    title: "Antara Mama, Cinta, dan Surga",
    poster: "img/genre romansa/antara mama cinta dan surga.jpeg",
    section: "upcoming",
    genres: ["Romansa", "Drama"],
    info: [
      { label: "Genre", value: "Romansa, Drama" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bulan Rilis", value: "Februari" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["TBA sebagai Tokoh Utama"],
    synopsis:
      "Seorang pemuda dihadapkan pada pilihan sulit antara cinta yang ia perjuangkan dan restu ibunya. Konflik keluarga dan keyakinan membuatnya harus menentukan jalan hidupnya sendiri.",
  },

  //  64 RUMAH TANPA CAHAYA
  {
    slug: "rumah-tanpa-cahaya-2026",
    title: "Rumah Tanpa Cahaya",
    poster: "img/genre aksi/rumah tanpa cahaya.jpg",
    section: "upcoming",
    genres: ["Drama", "Family"],
    info: [
      { label: "Genre", value: "Drama, Family" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ira Wibowo sebagai Nurul",
      "Donny Damara sebagai Qomar",
      "Lavicky Nicholas sebagai Azizi",
      "Ridwan A. Ghany sebagai Samsul",
      "Dea Annisa",
    ],
    synopsis:
      "Sebuah keluarga menghadapi konflik batin dan permasalahan internal yang perlahan menggerus keharmonisan rumah tangga mereka. Dalam situasi penuh tekanan dan rahasia yang tersimpan lama, setiap anggota keluarga dipaksa menghadapi kebenaran yang selama ini dihindari.",
  },

  //  65 CHILDREN OF HEAVEN
  {
    slug: "children-of-heaven-2026",
    title: "Children of Heaven",
    poster: "img/genre aksi/children-of-heaven-cnp.jpg",
    section: "upcoming",
    genres: ["Drama"],
    info: [
      { label: "Genre", value: "Drama" },
      { label: "Sutradara", value: "Hanung Bramantyo" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Jared Ali",
      "Humaira Jahra",
      "Andri Mashadi",
      "Faradina Mufti",
      "Muhadkly Acho",
      "Lolox",
      "Reza Nangin",
    ],
    synopsis:
      "Dua saudara dari keluarga sederhana menghadapi kesulitan setelah kehilangan satu-satunya pasang sepatu yang mereka miliki. Dalam keterbatasan dan tekanan hidup, mereka belajar tentang tanggung jawab, pengorbanan, dan arti kasih sayang keluarga.",
  },

  //  66 THE SEA SPEAKS HIS NAME
  {
    slug: "the-sea-speaks-his-name-2026",
    title: "The Sea Speaks His Name",
    original_title: "Laut Bercerita",
    poster: "img/genre aksi/LAUT.webp",
    section: "upcoming",
    genres: ["Drama", "Historical", "Political", "Film"],
    info: [
      { label: "Original Title", value: "Laut Bercerita" },
      { label: "Adaptasi dari", value: "Novel karya Leila S. Chudori" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Reza Rahadian sebagai Biru Laut",
      "Dian Sastrowardoyo sebagai Kasih Kinanti",
      "Yunita Siregar sebagai Asmara Jati",
      "Christine Hakim sebagai Ibu Biru Laut",
      "Arswendy Bening Swara sebagai Ayah Biru Laut",
      "Eva Celia sebagai Ratih Anjani",
    ],
    synopsis:
      "Adaptasi dari novel Indonesia klasik yang menggambarkan perjuangan seorang aktivis mahasiswa pada masa Orde Baru dan dampak penghilangan paksa terhadap keluarga yang terus mencari kebenaran dan keadilan. Sebuah portrait kuat tentang ingatan, kehilangan, dan kesinambungan perjuangan dalam sejarah bangsa.",
  },

  //  67 TITIP BUNDA DI SURGA-MU
  {
    slug: "titip-bunda-di-surga-mu-2026",
    title: "Titip Bunda di Surga-Mu",
    poster:
      "img/genre aksi/Final Poster Titip Bunda di Surga-MuSejauh apa pun kita melangkah, harumnya masakan Ibu adalah a.jpg",
    section: "upcoming",
    genres: ["Drama", "Family"],
    info: [
      { label: "Genre", value: "Drama, Family" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Acha Septriasa",
      "Kevin Julio",
      "Ikang Fawzi",
      "Meriam Bellina",
      "Abun Sungkar",
      "Zora Vidyanata",
      "Asri Welas",
    ],
    synopsis:
      "Kisah seorang anak yang harus menghadapi kenyataan pahit ketika ibunya didiagnosis dengan penyakit serius. Di tengah konflik keluarga dan pergulatan batin, ia belajar tentang keikhlasan, pengorbanan, dan arti merelakan orang yang paling dicintai.",
  },

  //  68 Agak Laen: Menyala Pantiku!
  {
    slug: "agak-laen-menyala-pantiku",
    title: "Agak Laen: Menyala Pantiku!",
    poster:
      "img/genre komedi/AGAK LAEN- MENYALA PANTIKU - OFFICIAL POSTER ✨Bukan sekuel, bukan prekuel. Agak Laen- Menyala Pa.jpg",
    section: "hits",
    genres: ["Komedi", "Aksi", "Absurd"],
    info: [
      { label: "Genre", value: "Komedi, Aksi, Absurd" },
      { label: "Tanggal Rilis", value: "27 November 2025" },
      { label: "Durasi", value: "110 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Bene Dion sebagai Bene",
      "Oki Rengga sebagai Oki",
      "Indra Jegel sebagai Indra",
      "Boris Bokir sebagai Boris",
      "Tissa Biani Azzahra sebagai Ayu",
      "Boah Sartika sebagai Tantri",
      "Priska Baru Segu sebagai Martha",
      "Ghita Bhebhita sebagai Linda",
      "Ariyo Wahab sebagai Komandan Ario",
      "Tika Panggabean sebagai Ida",
      "Jarwo Kwat sebagai Karni",
      "Kin Wah Chew sebagai Kin Wah",
    ],
    synopsis:
      "Sekuel film komedi absurd yang membawa kembali kuartet lucu yang penuh kekacauan slapstick dan adegan absurd, menyusuri misteri yang justru makin lucu daripada menakutkan.",
  },

  //  69 Lupa Daratan (Lost in the Spotlight)
  {
    slug: "lupa-daratan",
    title: "Lupa Daratan",
    poster: "img/genre komedi/lupa_daratan.jpg",
    section: "hits",
    genres: ["Komedi", "Drama"],
    info: [
      { label: "Genre", value: "Komedi, Drama" },
      { label: "Tanggal Rilis", value: "11 Desember 2025" },
      { label: "Durasi", value: "114 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Vino G. Bastian sebagai Vino Agustian",
      "Agus Kuncoro sebagai Iksan",
      "Dea Panendra sebagai Dimi",
      "Emil Kusumo sebagai Hasto",
      "Sadha Triyudha sebagai Andi",
      "Mike Lucock sebagai Amir",
      "Sheila Dara Aisha sebagai Sheila",
      "Arswendy Bening Swara sebagai Sudibyo",
      "Morgan Oey sebagai Morgan Woo",
      "Lukman Sardi sebagai Lukman Sarbi",
    ],
    synopsis:
      "Aktor sukses kehilangan kemampuan aktingnya ketika diberi peran besar, memicu kekacauan lucu di kehidupan profesinya dan hubungan pribadi.",
  },

  //  70 Kang Solah from Kang Mak x Nenek Gayung
  {
    slug: "kang-solah-nenek-gayung",
    title: "Kang Solah from Kang Mak x Nenek Gayung",
    poster: "img/genre komedi/kang solah from kang mak x nenek gayung.jpg",
    section: "hits",
    genres: ["Komedi", "Fantasi"],
    info: [
      { label: "Genre", value: "Komedi, Fantasi" },
      { label: "Tanggal Rilis", value: "2025" },
      { label: "Durasi", value: "100 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Kang Solah sebagai Kang Solah",
      "Tokoh Nenek Gayung sebagai Nenek Gayung",
      "Bayu Skak sebagai Teman Kang Solah",
      "Tarra Budiman sebagai Tokoh Pendukung",
    ],
    synopsis:
      "Crossover unik antara semesta Kang Mak dan legenda urban Nenek Gayung, membawa humor absurd, situasi lucu, dan bumbu fantasi ringan.",
  },

  //  71 GJLS: Ibuku Ibu-Ibu
  {
    slug: "gjls-ibuku-ibu-ibu",
    title: "GJLS: Ibuku Ibu-Ibu",
    poster: "img/genre komedi/gjls ibuku ibu ibu.jpg",
    section: "hits",
    genres: ["Komedi", "Drama"],
    info: [
      { label: "Genre", value: "Komedi, Drama" },
      { label: "Tanggal Rilis", value: "12 Juni 2025" },
      { label: "Durasi", value: "95 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Rigen Rakelna sebagai Rigen",
      "Ananta Rispo sebagai Rispo",
      "Hifdzi Khoir sebagai Hifdzi",
      "Nadya Arina sebagai Calon Ibu Tiri",
      "Ferry Maryadi sebagai Pak Maryadi",
    ],
    synopsis:
      "Tiga bersaudara berusaha menggagalkan rencana ayah mereka menikah lagi dengan cara‑cara kocak dan absurd, penuh dinamika keluarga serta humor khas GJLS.",
  },

  //  72 Cocote Tonggo
  {
    slug: "cocote-tonggo",
    title: "Cocote Tonggo",
    poster: "img/genre komedi/cocote tonggo.jpg",
    section: "hits",
    genres: ["Komedi", "Drama", "Film"],
    info: [
      { label: "Genre", value: "Komedi, Drama" },
      { label: "Tanggal Rilis", value: "15 Mei 2025" },
      { label: "Durasi", value: "100 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Dennis Adhiswara sebagai Luki",
      "Ayushita sebagai Murni",
      "Asri Welas sebagai Bu Pur",
      "Furry Setya Raharja sebagai Tokoh Pendukung",
      "Brilliana Arfira sebagai Tokoh Pendukung",
    ],
    synopsis:
      "Pasangan penjual jamu di Solo menghadapi gosip tetangga dan konflik keluarga yang justru menjadi sumber tawa dan momen kocak.",
  },

  //  73 Jodoh 3 Bujang
  {
    slug: "jodoh-3-bujang",
    title: "Jodoh 3 Bujang",
    poster: "img/genre komedi/jodoh 3 bujang.jpg",
    section: "hits",
    genres: ["Komedi", "Romansa"],
    info: [
      { label: "Genre", value: "Komedi, Romansa" },
      { label: "Tanggal Rilis", value: "26 Juni 2025" },
      { label: "Durasi", value: "105 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Jourdy Pranata sebagai Fadly",
      "Aisha Nurra Datau sebagai Rifa",
      "Christoffer Nelwan sebagai Teman Fadly",
      "Cut Mini Theo sebagai Ibu Rifa",
      "Benidictus Siregar sebagai Sahabat Fadly",
    ],
    synopsis:
      "Tiga pria dengan karakter berbeda mencari cinta masing‑masing sambil menghadapi kejadian lucu dan romansa manis di setiap langkah mereka.",
  },

  //  74 Tinggal Meninggal
  {
    slug: "tinggal-meninggal",
    title: "Tinggal Meninggal",
    poster: "img/genre romansa/tiinggal mmeninggal.webp",
    section: "hits",
    genres: ["Komedi"],
    info: [
      { label: "Genre", value: "Komedi" },
      { label: "Tanggal Rilis", value: "14 Agustus 2025" },
      { label: "Durasi", value: "97 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Omara Esteghlal sebagai Gema",
      "Giorgino Abraham sebagai Teman Gema",
      "Nadya Arina sebagai Teman Gema",
    ],
    synopsis:
      "Dark comedy tentang Gema, pria yang tiba‑tiba mendapat perhatian setelah ayahnya meninggal, mengalami kehidupan absurd dipenuhi humor dan kejadian tak terduga.",
  },

  //  75 Ambyar Mak Byar
  {
    slug: "ambyar-mak-byar",
    title: "Ambyar Mak Byar",
    poster: "img/genre komedi/ambyar mak byar.jpg",
    section: "hits",
    genres: ["Komedi", "Musikal", "Film"],
    info: [
      { label: "Genre", value: "Komedi, Musikal" },
      { label: "Tanggal Rilis", value: "9 Januari 2025" },
      { label: "Durasi", value: "90 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Happy Asmara sebagai Happy",
      "Gilga Sahid sebagai Gilga",
      "Denny Malik sebagai Denny",
    ],
    synopsis:
      "Komedi musikal tentang perjuangan band campursari dengan cerita lucu penuh musik dan interaksi unik antar personel.",
  },

  //  76 Yakin Nikah
  {
    slug: "yakin-nikah",
    title: "Yakin Nikah",
    poster: "img/genre komedi/yakin nikah.jpg",
    section: "hits",
    genres: ["Komedi", "Romansa"],
    info: [
      { label: "Genre", value: "Komedi, Romansa" },
      { label: "Tanggal Rilis", value: "9 Oktober 2025" },
      { label: "Durasi", value: "100 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Maxime Bouttier sebagai Pria Muda",
      "Enzy Storia sebagai Wanita Muda",
      "Adjie Nugraha sebagai Sahabat",
    ],
    synopsis:
      "Rom‑Com tentang dilema tekanan sosial supaya cepat menikah, dibalut humor ringan dan dinamika hubungan modern.",
  },

  //  77 Dopamin
  {
    slug: "dopamin",
    title: "Dopamin",
    poster: "img/genre komedi/dopamin.jpg",
    section: "hits",
    genres: ["Komedi", "Romansa"],
    info: [
      { label: "Genre", value: "Komedi, Romansa" },
      { label: "Tanggal Rilis", value: "13 November 2025" },
      { label: "Durasi", value: "102 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Angga Yunanda sebagai Pria Muda",
      "Shenina Cinnamon sebagai Wanita Muda",
      "Jefri Nichol sebagai Teman Dekat",
    ],
    synopsis:
      "Pasangan muda menghadapi krisis keuangan dan kehidupan sehari‑hari dengan cara jenaka, penuh humor situasional.",
  },

  //  78 Angel Pol
  {
    slug: "angel-pol",
    title: "Angel Pol",
    poster: "img/genre komedi/angel pol.jpg",
    section: "hits",
    genres: ["Komedi", "Drama", "Musikal"],
    info: [
      { label: "Genre", value: "Komedi, Drama, Musikal" },
      { label: "Tanggal Rilis", value: "19 Juni 2025" },
      { label: "Durasi", value: "105 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Bhisma Mulia sebagai Jati",
      "Michelle Ziudith sebagai Lastri",
      "Jolene Marie sebagai Odelia",
      "Dayu Wijanto sebagai Mbok",
      "Siti Fauziah sebagai Ayu Asmara",
      "Kukuh Riyadi sebagai Jay",
      "Bogang Bakar sebagai Karso",
      "Ananda George sebagai Kang Joni",
      "Akun Gege sebagai Bos Brow",
      "Joni Belok Kiri sebagai Sunar",
      "Fajar Nugra sebagai Mulyadi",
      "Yono Bakrie sebagai Gatot",
    ],
    synopsis:
      "Jati, mahasiswa seni rupa yang kehilangan beasiswanya, bertemu Lastri, gadis desa yang tertipu calo kerja. Keduanya membentuk orkes dangdut keliling dan menghadapi perjuangan hidup, cinta, serta konflik sosial dalam balutan humor dan musik hidup mereka.",
  },

  //  79 PARA PERASUK
  {
    slug: "para-perasuk-2026",
    title: "Para Perasuk",
    poster: "img/genre aksi/para perasuk.webp",
    section: "hits",
    genres: ["Horor", "Action", "Adventure", "Drama", "Supernatural"],
    info: [
      {
        label: "Genre",
        value: "Horor, Action, Adventure, Drama, Supernatural",
      },
      { label: "Sutradara", value: "Wregas Bhanuteja" },
      {
        label: "Produser",
        value: "Iman Usman, Siera Tamihardja, Amalia Fitriani Rusdi",
      },
      { label: "Perusahaan Produksi", value: "Rekata Studio" },
      { label: "Tanggal Rilis", value: "24 Januari 2026" },
      { label: "Durasi", value: "1 jam 59 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Angga Yunanda",
      "Anggun C. Sasmi",
      "Maudy Ayunda",
      "Bryan Domani",
      "Chicco Kurniawan",
      "Ganindra Bimo",
      "Indra Birowo",
    ],
    synopsis:
      "Bayu, pemuda dari Desa Latas, berambisi menjadi perasuk paling handal dalam pesta sambetan akbar—sebuah perayaan yang menjadikan kerasukan sebagai ajang rekreasi sekaligus pelarian dari realita. Namun ambisinya berubah menjadi misi besar ketika ia harus melindungi desanya dari keserakahan para penguasa yang memanfaatkan tradisi demi kepentingan pribadi.",
  },

  //  80 SUKA DUKA TAWA
  {
    slug: "suka-duka-tawa",
    title: "Suka Duka Tawa",
    poster: "img/genre komedi/suka duka tawa.jpg",
    section: "upcoming",
    genres: ["Drama", "Komedi"],
    info: [
      { label: "Genre", value: "Drama, Komedi" },
      { label: "Sutradara", value: "Fajar Nugros" },
      { label: "Produser", value: "Chand Parwez Servia" },
      { label: "Rumah Produksi", value: "Starvision Plus" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Durasi", value: "102 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Raditya Dika sebagai Arga",
      "Prilly Latuconsina sebagai Tara",
      "Ernest Prakasa sebagai Dimas",
      "Cut Mini sebagai Ibu Arga",
    ],
    synopsis:
      "Arga, seorang komika yang kariernya meredup, mulai menggali kembali masa lalunya untuk materi panggung. Semakin ia menertawakan hidupnya, semakin ia sadar ada luka yang belum selesai.",
  },

  //  81 CHECK OUT SEKARANG, PAY LATER
  {
    slug: "check-out-sekarang-pay-later",
    title: "Check Out Sekarang, Pay Later",
    poster: "img/genre komedi/check out sekarang pay later.jpeg",
    section: "upcoming",
    genres: ["Drama", "Komedi", "Romansa"],
    info: [
      { label: "Genre", value: "Drama, Komedi, Romansa" },
      { label: "Sutradara", value: "Angga Dwimas Sasongko" },
      { label: "Produser", value: "Chicco Jerikho" },
      { label: "Rumah Produksi", value: "Visinema Pictures" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Durasi", value: "105 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Iqbaal Ramadhan sebagai Dito",
      "Rachel Amanda sebagai Anya",
      "Ardhito Pramono sebagai Kevin",
      "Widyawati sebagai Mama Dito",
    ],
    synopsis:
      "Dito dan Anya hidup dalam budaya instan dan pay later. Ketika cicilan menumpuk dan hubungan mulai retak, mereka dipaksa menghadapi realita yang tak bisa di-swipe away.",
  },

  //  82 TUNGGU AKU SUKSES NANTI
  {
    slug: "tunggu-aku-sukses-nanti-2026",
    title: "Tunggu Aku Sukses Nanti",
    poster: "img/genre komedi/tunggu aku sukses nanti.webp",
    section: "upcoming",
    genres: ["Drama", "Romansa"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Sutradara", value: "Naya Anindita" },
      { label: "Produser", value: "Gope T. Samtani" },
      { label: "Perusahaan Produksi", value: "Rapi Films" },
      { label: "Skenario", value: "Evelyn Afnilia" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["—"],
    synopsis:
      "Arga merasa minder karena sudah tiga tahun menganggur sementara kondisi ekonominya semakin sulit. Tekanan semakin besar ketika sang kekasih meminta kepastian untuk menikah dan keluarga terus melontarkan cibiran. Demi membuktikan dirinya mampu, Arga berjuang keras agar bisa meraih kesuksesan sebelum Lebaran 2026 tiba.",
  },

  //  83 JANGAN SEPERTI BAPAK
  {
    slug: "jangan-seperti-bapak",
    title: "Jangan Seperti Bapak",
    poster: "img/genre komedi/jangan seperti bapak.jpg",
    section: "upcoming",
    genres: ["Drama", "Komedi"],
    info: [
      { label: "Genre", value: "Drama, Komedi Keluarga" },
      { label: "Sutradara", value: "Bene Dion Rajagukguk" },
      { label: "Produser", value: "Ernest Prakasa" },
      { label: "Rumah Produksi", value: "Imaginari Pictures" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Durasi", value: "101 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Dodit Mulyanto sebagai Bagas",
      "Tora Sudiro sebagai Bapak",
      "Indah Permatasari sebagai Rani",
      "Asri Welas sebagai Ibu",
    ],
    synopsis:
      "Bagas berusaha keras tidak menjadi seperti ayahnya. Ironisnya, setiap keputusan yang ia ambil justru membuatnya semakin mirip.",
  },

  //  84 AIU-EO MACAM BETOOL AJA!
  {
    slug: "aiu-eo-macam-betool-aja",
    title: "AIU-EO Macam Betool Aja!",
    poster: "img/genre komedi/AIU - EO MACAM BETOOL AJA.jpg",
    section: "upcoming",
    genres: ["Komedi", "Drama"],
    info: [
      { label: "Genre", value: "Komedi, Drama" },
      { label: "Sutradara", value: "Monty Tiwa" },
      { label: "Produser", value: "Gope T. Samtani" },
      { label: "Rumah Produksi", value: "Rapi Films" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Durasi", value: "100 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Ge Pamungkas sebagai Andra",
      "Babe Cabita sebagai Jodi",
      "Nadya Arina sebagai Celine",
      "Rigen Rakelna sebagai Tyo",
    ],
    synopsis:
      "Tiga sahabat membangun usaha event organizer dengan penuh ambisi. Ketika proyek pertama gagal total, persahabatan mereka ikut diuji.",
  },

  //  85 SENIN HARGA NAIK
  {
    slug: "senin-harga-naik",
    title: "Senin Harga Naik",
    poster: "img/genre komedi/senin harga naik.jpg",
    section: "upcoming",
    genres: ["Drama", "Komedi"],
    info: [
      { label: "Genre", value: "Drama, Komedi Keluarga" },
      { label: "Sutradara", value: "Yandy Laurens" },
      { label: "Produser", value: "Adhya Pictures" },
      { label: "Rumah Produksi", value: "Adhya Pictures" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Durasi", value: "99 menit" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Christine Hakim sebagai Ibu Ratna",
      "Jourdy Pranata sebagai Aldi",
      "Shenina Cinnamon sebagai Mira",
    ],
    synopsis:
      "Tekanan ekonomi membuat keluarga kecil ini sering bertengkar. Namun di balik konflik harga dan tagihan, ada cinta yang tetap bertahan.",
  },

  //  86 WARKOP DKI REBORN 5
  {
    slug: "warkop-dki-reborn-5-2026",
    title: "Warkop DKI Reborn 5",
    poster: "img/genre komedi/warkopdki.webp",
    section: "upcoming",
    genres: ["Komedi"],
    info: [
      { label: "Genre", value: "Komedi" },
      { label: "Rumah Produksi", value: "Falcon Pictures" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Desta Mahendra sebagai Dono",
      "Vino G. Bastian sebagai Kasino",
      "Tora Sudiro sebagai Indro",
    ],
    synopsis:
      "Trio Warkop hadir dengan formasi baru untuk menghidupkan kembali komedi khas Dono, Kasino, dan Indro dalam balutan cerita yang segar dan relevan dengan kondisi sosial masa kini. Dengan pendekatan yang diperbarui, film ini tetap mempertahankan gaya slapstick, satire sosial, dan kekonyolan situasional yang menjadi ciri khas Warkop.",
  },

  //  87 PELANGI DI MARS
  {
    slug: "pelangi-di-mars",
    title: "Pelangi di Mars",
    poster: "img/genre aksi/pelangi dimars.webp",
    section: "upcoming",
    genres: ["Science Fiction", "Family", "Drama"],
    info: [
      { label: "Genre", value: "Science Fiction, Family, Drama" },
      { label: "Sutradara", value: "Upie Guava" },
      { label: "Produser", value: "Dendi Reynando" },
      {
        label: "Rumah Produksi",
        value: "Produksi Film Negara, A To Z Films Limited, MBK Productions",
      },
      { label: "Skenario", value: "Upie Guava, Alim Sudio" },
      { label: "Tanggal Rilis", value: "18 Maret 2026" },
      { label: "Latar Waktu", value: "Tahun 2090" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Messi Gusti",
      "Lutesha",
      "Rio Dewanto",
      "Livy Renata",
      "Myesha Lin",
    ],
    synopsis:
      "Berlatar tahun 2090, film ini mengisahkan seorang anak yang menjadi manusia pertama yang lahir dan tumbuh di Planet Mars. Dalam keterbatasan lingkungan dan tekanan kolonisasi antariksa, ia dan keluarganya menghadapi tantangan identitas, adaptasi, serta makna rumah di dunia yang benar-benar baru.",
  },

  //  88 TUKAR TAKDIR
  {
    slug: "tukar-takdir",
    title: "Tukar Takdir",
    poster: "img/genre aksi/tukar takdir.webp",
    section: "hits",
    genres: ["Drama"],
    info: [
      { label: "Genre", value: "Drama" },
      { label: "Sutradara", value: "Mouly Surya" },
      {
        label: "Produser",
        value: "Rama Adi, Chand Parwez Servia, Mithu Nisar",
      },
      {
        label: "Rumah Produksi",
        value:
          "Kharisma Starvision Plus, Legacy Pictures, Kaninga Pictures, Cinesurya Pictures",
      },
      { label: "Cerita oleh", value: "Valiant Budi Yogi" },
      { label: "Skenario", value: "Mouly Surya" },
      { label: "Tanggal Rilis", value: "2 Oktober 2025 (Indonesia)" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: ["Nicholas Saputra", "Marsha Timothy", "Adhisty Zara"],
    synopsis:
      "Diadaptasi secara bebas dari novel antologi karya Valiant Budi Yogi, film ini mengisahkan persinggungan hidup tiga individu dengan latar dan pilihan berbeda yang perlahan saling memengaruhi takdir masing-masing. Ketika keputusan masa lalu kembali menghampiri, mereka dipaksa menghadapi konsekuensi yang mengubah arah hidup secara drastis.",
  },

  // 89 KOMANG
  {
    slug: "komang-2025",
    title: "Komang",
    poster: "img/genre romansa/komang.jpg",
    section: "hits",
    genres: ["Drama", "Romansa"],
    info: [
      { label: "Genre", value: "Drama, Romansa" },
      { label: "Sutradara", value: "Naya Anindita" },
      { label: "Rumah Produksi", value: "Starvision" },
      { label: "Berdasarkan", value: "Lagu 'Komang' karya Raim Laode" },
      { label: "Penata Musik", value: "Hariopati Rinanto" },
      { label: "Tanggal Rilis", value: "31 Maret 2025" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Aurora Ribero",
      "Kiesha Alvaro",
      "Adzando Davema",
      "Cut Mini Theo",
      "Ayu Laksmi",
    ],
    synopsis:
      "Terinspirasi dari lagu populer 'Komang', film ini mengisahkan perjalanan cinta dua anak muda yang diuji oleh perbedaan latar belakang dan keadaan hidup. Di tengah tekanan keluarga dan realitas yang tak selalu sejalan dengan impian, mereka berusaha mempertahankan rasa yang tumbuh tulus di antara keduanya.",
  },

  // 90. COMIC 8 REVOLUTION: SANTET KABINET
  {
    slug: "comic-8-revolution-santet-kabinet",
    title: "Comic 8: Revolution: Santet Kabinet",
    poster: "img/genre aksi/Comic 8 Revolution Santen K4binet.png",
    section: "upcoming",
    genres: ["Action", "Komedi"],
    info: [
      { label: "Franchise", value: "Comic 8" },
      { label: "Tahun Rilis", value: "2026" },
      { label: "Bahasa", value: "Bahasa Indonesia" },
    ],
    cast: [
      "Andre Taulany",
      "Hesti Purwadinata",
      "Indro Warkop",
      "Oki Rengga",
      "Indy Barends",
      "Mo Sidik",
      "Cak Lontong",
      "Adjis Doa Ibu",
    ],
    synopsis:
      "Sekelompok karakter eksentrik kembali terseret dalam kekacauan berskala nasional ketika muncul ancaman misterius yang mengguncang struktur kekuasaan. Di tengah intrik, humor absurd, dan aksi konyol, mereka harus mengungkap dalang di balik kekacauan tersebut sebelum situasi semakin tak terkendali.",
  },
];

const genreRegistry = [
  { slug: "film", label: "Film", fragments: ["film.html", "genre-film.html"] },
  { slug: "series", label: "Series", fragments: ["genre-series.html"] },
  { slug: "horor", label: "Horor", fragments: ["genre-horor.html"] },
  { slug: "romansa", label: "Romansa", fragments: ["genre-romansa.html"] },
  { slug: "drama", label: "Drama", fragments: ["genre-drama.html"] },
  { slug: "komedi", label: "Komedi", fragments: ["genre-komedi.html"] },
  { slug: "genre", label: "Film", fragments: ["genre.html"] },
];

function findGenreEntryBySlug(slug) {
  if (!slug) {
    return null;
  }
  const normalized = slug.trim().toLowerCase();
  return genreRegistry.find((entry) => entry.slug === normalized) || null;
}

function findGenreEntryByPath(path) {
  if (!path) {
    return null;
  }
  const normalizedPath = path.toLowerCase();
  return (
    genreRegistry.find((entry) =>
      entry.fragments.some((fragment) => normalizedPath.includes(fragment)),
    ) || null
  );
}

function getRandomGenre() {
  const uniqueGenres = [];
  const seenLabels = new Set();

  for (const entry of genreRegistry) {
    if (!seenLabels.has(entry.label) && entry.label !== "Film") {
      uniqueGenres.push(entry);
      seenLabels.add(entry.label);
    }
  }

  if (uniqueGenres.length === 0) {
    return { slug: "film", label: "Film" };
  }

  return uniqueGenres[Math.floor(Math.random() * uniqueGenres.length)];
}

function normalizeGenreLabel(label = "Film") {
  if (!label || label === "Pilih Genre") {
    return "Film";
  }
  const slugMatch = findGenreEntryBySlug(label);
  if (slugMatch) {
    return slugMatch.label;
  }
  return label;
}

function getCurrentGenreLabel(defaultLabel = "Film") {
  if (typeof window === "undefined") {
    return defaultLabel;
  }
  const params = new URLSearchParams(window.location.search);
  const paramGenre = params.get("genre");
  if (paramGenre) {
    const entry = findGenreEntryBySlug(paramGenre);
    if (entry) {
      return entry.label;
    }
    return (
      paramGenre.charAt(0).toUpperCase() + paramGenre.slice(1) || defaultLabel
    );
  }
  const pathEntry = findGenreEntryByPath(window.location.pathname);
  if (pathEntry) {
    return pathEntry.label;
  }
  return defaultLabel;
}

function filterFilmsByGenre(genreLabel = "Film") {
  if (!Array.isArray(filmCatalog) || !filmCatalog.length) {
    return [];
  }
  const normalized = normalizeGenreLabel(genreLabel);
  if (normalized === "Film") {
    return filmCatalog;
  }
  return filmCatalog.filter((film) => film.genres.includes(normalized));
}

function getFilmBySlug(slug) {
  if (!slug || !Array.isArray(filmCatalog)) {
    return null;
  }
  return filmCatalog.find((film) => film.slug === slug) || null;
}
