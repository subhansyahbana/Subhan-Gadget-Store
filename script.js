/**
 * ============================================================================
 * SUBHAN GADGET STORE - LOGIKA UTAMA APLIKASI
 * Arsitektur: Vanilla JavaScript Murni (Tanpa Framework/Dependensi Eksternal)
 * Aksesibilitas: Dioptimalkan untuk NVDA, JAWS, & Navigasi Keyboard Penuh
 * ============================================================================
 */

"use strict";

/* ============================================================================
   1. KONFIGURASI TOKO & WHATSAPP
   ============================================================================ */
/**
 * PENTING UNTUK PEMILIK TOKO:
 * Ganti placeholder di bawah ini dengan nomor WhatsApp aktif toko Anda.
 * Gunakan format internasional TANPA tanda plus (+), spasi, atau tanda hubung (-).
 * Contoh nomor aktif Indonesia: "6281234567890" (bukan "0812-3456-7890")
 */
const WHATSAPP_NUMBER = "628xxxxxxxxxx";

/**
 * Memeriksa apakah nomor WhatsApp sudah dikonfigurasi dengan benar oleh pemilik toko.
 * Mengembalikan true jika valid, false jika masih berupa placeholder atau belum disetel.
 */
function isWhatsAppConfigured() {
  if (!WHATSAPP_NUMBER) return false;
  // Periksa apakah masih mengandung huruf 'x' atau bukan format digit yang valid
  if (/x/i.test(WHATSAPP_NUMBER)) return false;
  // Harus terdiri dari minimal 10 digit angka
  return /^\d{10,16}$/.test(WHATSAPP_NUMBER);
}

/**
 * Format mata uang Rupiah Indonesia (IDR) sesuai standar nasional.
 * Contoh: 129000 -> "Rp129.000"
 */
const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

function formatRupiah(amount) {
  return currencyFormatter.format(amount);
}

/* ============================================================================
   2. DATA KATALOG: 20 PRODUK RESMI SUBHAN GADGET STORE
   ============================================================================ */
const PRODUCTS = [
  {
    id: "prod-1",
    name: "Baseus Encok C17 Headset USB-C",
    category: "Headset Kabel",
    price: 85000,
    shortDescription: "Headset kabel konektor USB-C untuk mendengarkan audio jernih dan panggilan harian.",
    description: "Baseus Encok C17 adalah headset kabel dengan konektor USB-C yang dirancang untuk kenyamanan audio sehari-hari. Dilengkapi tombol kontrol in-line untuk mengatur volume, memutar musik, dan menjawab panggilan telepon dengan mikrofon sensitif.",
    compatibility: "Memerlukan perangkat USB-C yang mendukung keluaran audio digital (Digital Audio Output/DAC terintegrasi).",
    specifications: "Tipe konektor: USB-C digital; Panjang kabel: ±1.1 meter; Mikrofon: In-line dengan remote control (Spesifikasi frekuensi detail perlu dikonfirmasi).",
    image: "images/headset-c17.svg",
    keywords: ["headset", "earphone", "usb-c", "type-c", "kabel", "baseus", "encok", "c17", "audio", "musik", "telepon"]
  },
  {
    id: "prod-2",
    name: "Havit E336C Headset USB-C",
    category: "Headset Kabel",
    price: 99900,
    shortDescription: "Headset berkabel USB-C ergonomis untuk musik dan konten multimedia.",
    description: "Havit E336C menghadirkan pengalaman mendengarkan musik dan konten audio yang bertenaga dengan konektor langsung Type-C. Rumah earphone ergonomis yang pas di telinga membantu meredam kebisingan dari luar.",
    compatibility: "Periksa dukungan audio USB-C pada perangkat yang digunakan sebelum membeli.",
    specifications: "Konektor: USB-C; Tipe: In-ear akustik; Built-in mic (Spesifikasi impedansi detail perlu dikonfirmasi).",
    image: "images/headset-e336c.svg",
    keywords: ["headset", "earphone", "usb-c", "type-c", "kabel", "havit", "e336c", "audio", "musik"]
  },
  {
    id: "prod-3",
    name: "Robot T50S TWS Bluetooth",
    category: "TWS",
    price: 103000,
    shortDescription: "Earbud nirkabel praktis dengan casing pengisian daya dan koneksi Bluetooth stabil.",
    description: "Robot T50S TWS adalah earbud nirkabel dengan koneksi Bluetooth stabil dan casing pengisian daya portabel. Desain ringan memudahkan mobilitas berolahraga, bekerja, maupun menikmati hiburan tanpa kabel yang membelit.",
    compatibility: "Kompatibel dengan semua smartphone Android, iPhone, tablet, dan laptop yang mendukung koneksi audio Bluetooth.",
    specifications: "Konektivitas: Bluetooth 5.x; Casing pengisi daya portabel (Spesifikasi daya tahan baterai riil perlu dikonfirmasi).",
    image: "images/tws-robot.svg",
    keywords: ["tws", "earbuds", "bluetooth", "wireless", "nirkabel", "robot", "t50s", "earphone bluetooth"]
  },
  {
    id: "prod-4",
    name: "Rexus FX99 TWS Bluetooth",
    category: "TWS",
    price: 117000,
    shortDescription: "Earbud nirkabel latensi rendah untuk musik, gaming santai, dan panggilan telepon.",
    description: "Rexus FX99 TWS menawarkan koneksi audio nirkabel dengan latensi rendah yang nyaman digunakan untuk mendengarkan lagu, menonton film, hingga bermain game santai. Dilengkapi charging case dengan indikator status.",
    compatibility: "Kompatibel dengan smartphone Android, iOS, dan komputer berfitur Bluetooth.",
    specifications: "Konektivitas: Bluetooth 5.x; Latensi rendah; Kontrol sentuh (Kapasitas mAh baterai perlu dikonfirmasi).",
    image: "images/tws-rexus.svg",
    keywords: ["tws", "earbuds", "bluetooth", "wireless", "rexus", "fx99", "gaming", "musik", "nirkabel"]
  },
  {
    id: "prod-5",
    name: "Softcase Bening TPU",
    category: "Softcase",
    price: 20000,
    shortDescription: "Casing transparan berbahan TPU lentur untuk perlindungan bagian belakang dan sisi HP.",
    description: "Softcase bening transparan berbahan Thermoplastic Polyurethane (TPU) berkualitas untuk melindungi bodi belakang dan bezel handphone dari gesekan serta benturan ringan tanpa menutupi warna asli ponsel.",
    compatibility: "Harus dipilih berdasarkan merek dan model spesifik HP Anda (tersedia berbagai varian tipe ponsel).",
    specifications: "Bahan: TPU bening elastis; Ketebalan: ±1.2mm (Varian tipe HP wajib dikonfirmasi saat pemesanan).",
    image: "images/softcase-clear.svg",
    keywords: ["softcase", "casing", "case", "silikon", "tpu", "bening", "transparan", "clear", "pelindung hp"]
  },
  {
    id: "prod-6",
    name: "Softcase Silikon Macaron",
    category: "Softcase",
    price: 15000,
    shortDescription: "Casing silikon lembut dengan tekstur halus dan aneka pilihan warna pastel macaron.",
    description: "Casing silikon bernuansa warna macaron dengan permukaan baby-skin yang sangat nyaman disentuh, tidak licin, dan membantu melindungi ponsel dari debu serta goresan harian.",
    compatibility: "Harus sesuai dengan model HP yang digunakan.",
    specifications: "Bahan: Liquid silicone lembut; Warna: Pilihan warna pastel macaron (Ketersediaan warna dan tipe HP perlu dikonfirmasi).",
    image: "images/softcase-macaron.svg",
    keywords: ["softcase", "silikon", "macaron", "casing", "case", "warna", "pastel", "murah", "pelindung hp"]
  },
  {
    id: "prod-7",
    name: "Hardcase Magnetik Model MagSafe",
    category: "Hardcase",
    price: 42000,
    shortDescription: "Casing kokoh berdesain ring magnetik untuk kompatibilitas aksesori magnetik/MagSafe.",
    description: "Casing protektif dengan cincin magnet terintegrasi yang memudahkan pemasangan charger nirkabel magnetik, car mount magnetik, maupun dompet kartu magnetik.",
    compatibility: "Periksa model HP, posisi magnet, dan dukungan aksesori pengisian daya sebelum membeli.",
    specifications: "Bahan: PC Hard Backing + TPU Edge dengan ring magnet Neodymium (Kesesuaian tipe HP perlu dikonfirmasi).",
    image: "images/hardcase-magsafe.svg",
    keywords: ["hardcase", "casing", "case", "magsafe", "magnet", "magnetik", "wireless charger", "ring magnet"]
  },
  {
    id: "prod-8",
    name: "Casing iPaky Carbon Fiber Style",
    category: "Hardcase",
    price: 12000,
    shortDescription: "Casing ramping bergaya serat karbon dengan grip mantap dan tampilan elegan.",
    description: "Casing dengan motif tekstur serat karbon (carbon fiber style) yang memberikan perlindungan tangguh namun tetap ramping di saku celana. Tahan sidik jari dan tidak licin saat digenggam.",
    compatibility: "Varian casing harus sesuai dengan merek dan tipe model HP Anda.",
    specifications: "Bahan: Polikarbonat dengan tekstur serat karbon brushed (Varian tipe HP perlu dikonfirmasi).",
    image: "images/hardcase-carbon.svg",
    keywords: ["casing", "hardcase", "case", "ipaky", "carbon", "fiber", "serat karbon", "hitam", "anti slip", "murah"]
  },
  {
    id: "prod-9",
    name: "Tempered Glass HD Clear",
    category: "Pelindung Layar",
    price: 10500,
    shortDescription: "Kaca pelindung layar definisi tinggi dengan kekerasan 9H terhadap goresan benda tajam.",
    description: "Tempered glass bening berkualitas tinggi yang menjaga permukaan layar HP dari goresan kunci, koin, dan retakan akibat jatuh ringan. Transparansi tinggi menjaga kejernihan tampilan layar asli.",
    compatibility: "Harus sesuai dengan model dan dimensi ukuran layar HP Anda.",
    specifications: "Kekerasan: 9H Hardness; Lapisan: Oleophobic coating tahan minyak (Tipe layar HP wajib dikonfirmasi).",
    image: "images/screen-tg-clear.svg",
    keywords: ["tempered glass", "pelindung layar", "kaca", "screen protector", "clear", "bening", "anti gores", "9h"]
  },
  {
    id: "prod-10",
    name: "Tempered Glass Privacy Anti-Spy",
    category: "Pelindung Layar",
    price: 10000,
    shortDescription: "Pelindung layar privasi dengan sudut pandang terbatas untuk mencegah intipan samping.",
    description: "Kaca pelindung layar dengan filter polarisasi dua arah (anti-spy). Layar hanya terlihat jelas saat dilihat langsung dari depan, sehingga informasi pribadi Anda aman dari tatapan orang di samping.",
    compatibility: "Harus sesuai dengan model HP. Informasikan bahwa lapisan privasi dapat sedikit memengaruhi tingkat kecerahan yang dirasakan oleh mata.",
    specifications: "Filter: 2-way privacy micro-louver filter; Kekerasan: 9H (Kecerahan layar ponsel mungkin perlu sedikit disesuaikan).",
    image: "images/screen-tg-privacy.svg",
    keywords: ["tempered glass", "pelindung layar", "privacy", "anti-spy", "anti intip", "kaca", "gelap", "rahasia"]
  },
  {
    id: "prod-11",
    name: "Pelindung Layar Hydrogel",
    category: "Pelindung Layar",
    price: 40000,
    shortDescription: "Film pelindung lentur dengan fitur self-healing, sempurna untuk layar datar maupun lengkung.",
    description: "Pelindung layar berteknologi film hydrogel elastis yang mampu menempel presisi hingga ke lengkungan tepi layar (curved display). Dilengkapi kemampuan pemulihan mandiri (self-healing) untuk goresan mikro.",
    compatibility: "Berdasarkan model HP dan varian permukaan yang tersedia (clear mengkilap atau matte anti-glare).",
    specifications: "Bahan: TPU Hydrogel Optical Film; Tipe: Menyesuaikan layar lengkung (Presisi potongan tipe HP perlu dikonfirmasi).",
    image: "images/screen-hydrogel.svg",
    keywords: ["hydrogel", "pelindung layar", "film", "screen protector", "layar lengkung", "curved", "self healing"]
  },
  {
    id: "prod-12",
    name: "ACMIC CWC01 Charger 10W",
    category: "Charger",
    price: 32000,
    shortDescription: "Adaptor pengisian daya USB 10W yang ringkas dan aman untuk kebutuhan cas dasar.",
    description: "Adaptor charger dinding ACMIC CWC01 10W cocok untuk pengisian daya harian smartphone standar, earphone TWS, smartwatch, kipas portable, dan gawai berdaya rendah lainnya dengan proteksi tegangan aman.",
    compatibility: "Periksa jenis konektor kabel, tegangan, dan protokol pengisian perangkat yang akan dicas.",
    specifications: "Input: AC 100-240V; Output: DC 5V/2A (Maksimal 10W); Port: USB-A (Kabel dijual terpisah).",
    image: "images/charger-10w.svg",
    keywords: ["charger", "adaptor", "casan", "acmic", "cwc01", "10w", "pengisian daya", "kepala charger", "usb-a"]
  },
  {
    id: "prod-13",
    name: "Anker Nano Charger USB-C 30W",
    category: "Charger",
    price: 129000,
    shortDescription: "Kepala charger cepat GaN 30W USB-C super ringkas untuk smartphone dan tablet modern.",
    description: "Anker Nano 30W memanfaatkan teknologi semikonduktor Gallium Nitride (GaN) untuk menghasilkan daya pengisian cepat 30 Watt dalam ukuran saku yang sangat mungil. Mendukung standar USB Power Delivery (PD) & PPS.",
    compatibility: "Kecepatan pengisian aktual bergantung pada protokol charger dan perangkat yang mendukung USB-C PD.",
    specifications: "Daya maksimum: 30W; Port: USB-C tunggal; Protokol: Power Delivery 3.0 / PPS (Kabel dijual terpisah).",
    image: "images/charger-anker-30w.svg",
    keywords: ["charger", "casan", "anker", "nano", "30w", "gan", "fast charging", "usb-c", "type-c", "power delivery", "pd"]
  },
  {
    id: "prod-14",
    name: "ACMIC Kabel Data USB-C 1 Meter",
    category: "Kabel Data",
    price: 41000,
    shortDescription: "Kabel USB-C 1 meter yang fleksibel untuk pengisian baterai dan transfer file cepat.",
    description: "Kabel data ACMIC berpanjang 1 meter dengan konektor USB-C yang presisi dan kuat. Mendukung transfer data berkecepatan tinggi antara HP dan komputer serta pengisian daya stabil.",
    compatibility: "Sesuaikan dengan jenis port perangkat dan adaptor daya yang Anda gunakan.",
    specifications: "Panjang: 1 Meter; Konektor: USB ke USB-C; Arus: Mendukung fast charge (Arus ampere riil perlu dikonfirmasi).",
    image: "images/cable-acmic-1m.svg",
    keywords: ["kabel", "kabel data", "kabel charger", "usb-c", "type-c", "acmic", "1 meter", "fast charging"]
  },
  {
    id: "prod-15",
    name: "Essager Kabel Braided USB ke USB-C 100W",
    category: "Kabel Data",
    price: 35300,
    shortDescription: "Kabel braided nilon tangguh berkemampuan daya hingga 100W, anti kusut dan tahan tekukan.",
    description: "Kabel pengisian daya Essager berbalut anyaman nilon (braided) berkekuatan tinggi yang tahan terhadap ribuan tekukan. Mampu menghantarkan daya tinggi hingga 100W untuk pengisian cepat gawai modern.",
    compatibility: "Daya pengisian aktual bergantung pada kabel, adaptor charger, protokol pengisian, dan perangkat yang digunakan.",
    specifications: "Daya maksimum: Hingga 100W; Bahan: High-density nylon braid; Konektor paduan aluminium (Spesifikasi chip E-Marker perlu dikonfirmasi).",
    image: "images/cable-essager-100w.svg",
    keywords: ["kabel", "kabel data", "essager", "braided", "anyaman", "100w", "usb-c", "fast charging", "kabel cas"]
  },
  {
    id: "prod-16",
    name: "JETE Powerbank C8 10.000mAh",
    category: "Powerbank",
    price: 142800,
    shortDescription: "Powerbank portabel 10.000mAh dengan port ganda dan lampu indikator kapasitas LED.",
    description: "JETE Powerbank C8 adalah cadangan daya portabel dengan kapasitas nominal 10.000mAh yang andal menemani perjalanan Anda. Dilengkapi dual output untuk mengisi dua perangkat sekaligus serta indikator LED penunjuk sisa baterai.",
    compatibility: "Periksa port keluaran, kabel, dan dukungan pengisian daya perangkat yang akan diisi ulang.",
    specifications: "Kapasitas nominal: 10.000mAh; Output: Dual USB Output; Indikator: 4 LED kapasitas (Daya output watt riil perlu dikonfirmasi).",
    image: "images/powerbank-jete.svg",
    keywords: ["powerbank", "jete", "c8", "10000mah", "baterai", "portable", "pengisian daya", "casan portable"]
  },
  {
    id: "prod-17",
    name: "Goojodoq Stand Holder HP Meja",
    category: "Holder HP",
    price: 35000,
    shortDescription: "Dudukan meja lipat ergonomis dengan sudut kemiringan yang dapat disesuaikan sesuka hati.",
    description: "Dudukan ponsel meja Goojodoq yang dapat dilipat rata sehingga praktis dibawa bepergian. Membantu menjaga postur tubuh yang nyaman saat video call, bekerja di meja, menonton tayangan, atau belajar online.",
    compatibility: "Pilih dan sesuaikan dengan ukuran serta berat perangkat handphone atau tablet kecil Anda.",
    specifications: "Bahan: ABS kokoh dengan bantalan silikon anti-slip; Fitur: Engsel lipat ganda dengan pengaturan ketinggian dan sudut kemiringan.",
    image: "images/holder-goojodoq.svg",
    keywords: ["holder", "stand", "dudukan hp", "meja", "goojodoq", "lipat", "penyangga", "stand hp"]
  },
  {
    id: "prod-18",
    name: "DSU Magnetic Phone Holder 360 Derajat",
    category: "Holder HP",
    price: 35500,
    shortDescription: "Dudukan HP magnetik kuat dengan ball-joint rotasi 360 derajat untuk fleksibilitas pandang.",
    description: "Holder magnetik serbaguna yang dapat ditempelkan pada dashboard mobil atau meja kerja. Dilengkapi sendi putar 360 derajat yang memudahkan orientasi ponsel vertikal (portrait) maupun horizontal (landscape).",
    compatibility: "Periksa sistem magnet, metode pemasangan perekat, dan kecocokan dengan casing atau bodi ponsel Anda.",
    specifications: "Tipe magnet: Neodymium magnet array; Rotasi: 360 derajat; Termasuk plat besi perekat (Kekuatan beban maksimal perlu dikonfirmasi).",
    image: "images/holder-dsu-magnetic.svg",
    keywords: ["holder", "stand", "magnet", "magnetic", "360", "dsu", "dudukan magnet", "mobil", "meja"]
  },
  {
    id: "prod-19",
    name: "NANVAN OTG Adapter",
    category: "Adaptor",
    price: 14500,
    shortDescription: "Adaptor OTG mini untuk menyambungkan flashdisk, keyboard, atau mouse langsung ke smartphone.",
    description: "Adaptor konverter On-The-Go (OTG) berukuran mungil dengan bodi logam yang kokoh. Memungkinkan handphone Anda membaca data flashdisk, menyambungkan mouse kabel/wireless, atau mentransfer foto tanpa lewat komputer.",
    compatibility: "Pengunjung harus memilih varian konektor yang sesuai (Micro-USB atau USB-C) dan memastikan HP mendukung fitur USB OTG.",
    specifications: "Varian port: USB-A Female ke USB-C / Micro-USB Male; Kecepatan: USB 2.0/3.0 kompatibel (Pilihan jenis port wajib dikonfirmasi).",
    image: "images/adapter-otg.svg",
    keywords: ["otg", "adapter", "adaptor", "nanvan", "usb-c", "micro-usb", "flashdisk", "konverter", "transfer data"]
  },
  {
    id: "prod-20",
    name: "PopSocket atau Phone Grip Universal",
    category: "Aksesori HP",
    price: 12000,
    shortDescription: "Grip pegangan jari fleksibel yang dapat ditarik untuk mencegah handphone terlepas dari genggaman.",
    description: "Aksesori pegangan bodi HP serbaguna yang dapat ditarik (pop-out) sebagai pegangan tangan yang mantap saat berswafoto (selfie) atau dijadikan penyangga meja sederhana saat menonton video.",
    compatibility: "Periksa permukaan casing atau bodi HP (bekerja optimal pada permukaan datar dan halus, bukan bahan kain/silikon bertekstur kasar).",
    specifications: "Perekat: 3M tape kuat; Desain: Dapat dilipat rata dan ditarik keluar (Pilihan motif gambar perlu dikonfirmasi).",
    image: "images/grip-popsocket.svg",
    keywords: ["popsocket", "phone grip", "grip", "pegangan", "gantungan hp", "aksesori", "stand hp", "selfie"]
  }
];

/* ============================================================================
   3. INISIALISASI DOM & STATE APLIKASI
   ============================================================================ */
// State Aktif
const state = {
  searchQuery: "",
  selectedCategory: "all",
  sortBy: "default",
  currentModalProduct: null,
  previousActiveElement: null
};

// Elemen DOM
const dom = {
  // Filter & Search
  filterForm: document.getElementById("filter-form"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  categoryFilter: document.getElementById("category-filter"),
  sortSelect: document.getElementById("sort-select"),
  resetFilterBtn: document.getElementById("reset-filter-btn"),
  catalogStatus: document.getElementById("catalog-status"),
  activeFilterTags: document.getElementById("active-filter-tags"),

  // Katalog & Grid
  productGrid: document.getElementById("product-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),

  // Asisten Toko
  assistantForm: document.getElementById("assistant-form"),
  assistantInput: document.getElementById("assistant-input"),
  assistantSubmitBtn: document.getElementById("assistant-submit-btn"),
  assistantClearBtn: document.getElementById("assistant-clear-btn"),
  assistantOutput: document.getElementById("assistant-output"),
  questionChips: document.querySelectorAll(".question-chip"),

  // Modal Detail Produk
  productModal: document.getElementById("product-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalCancelBtn: document.getElementById("modal-cancel-btn"),
  modalProductTitle: document.getElementById("modal-product-title"),
  modalProductImage: document.getElementById("modal-product-image"),
  modalProductCategory: document.getElementById("modal-product-category"),
  modalProductPrice: document.getElementById("modal-product-price"),
  modalProductDescription: document.getElementById("modal-product-description"),
  modalProductCompatibility: document.getElementById("modal-product-compatibility"),
  modalProductSpecs: document.getElementById("modal-product-specs"),
  modalOrderBtn: document.getElementById("modal-order-btn"),

  // Modal WhatsApp Config Alert
  waConfigModal: document.getElementById("wa-config-modal"),
  waConfigCloseBtn: document.getElementById("wa-config-close-btn"),
  waConfigOkBtn: document.getElementById("wa-config-ok-btn"),
  headerWaBtn: document.getElementById("header-wa-btn"),
  footerWaBtn: document.getElementById("footer-wa-btn")
};

/* ============================================================================
   4. SISTEM PEMESANAN WHATSAPP CLICK-TO-CHAT
   ============================================================================ */
/**
 * Membuka alur pemesanan produk via WhatsApp.
 * Jika nomor WhatsApp toko belum dikonfigurasi, dialog pemberitahuan akan ditampilkan.
 */
function initiateWhatsAppOrder(product) {
  if (!isWhatsAppConfigured()) {
    openWhatsAppConfigModal(
      `Pemesanan untuk "${product.name}" belum dapat dialihkan ke WhatsApp karena pemilik toko belum mengonfigurasi nomor WhatsApp toko aktif.`
    );
    return;
  }

  const hargaFormatted = formatRupiah(product.price);
  const pesanTeks = `Halo Subhan Gadget Store, saya ingin memesan ${product.name} seharga ${hargaFormatted}. Mohon konfirmasi stok dan kompatibilitas produk ini.`;
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesanTeks)}`;

  // Buka WhatsApp di tab baru dengan proteksi keamanan noopener, noreferrer
  window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
}

/**
 * Membuka chat umum ke WhatsApp toko.
 */
function initiateGeneralWhatsAppChat() {
  if (!isWhatsAppConfigured()) {
    openWhatsAppConfigModal(
      "Layanan kontak WhatsApp toko belum aktif karena nomor WhatsApp toko belum disetel oleh pemilik toko di script.js."
    );
    return;
  }

  const pesanTeks = "Halo Subhan Gadget Store, saya ingin bertanya seputar ketersediaan produk aksesori handphone dan gadget di toko Anda.";
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesanTeks)}`;
  window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
}

/* ============================================================================
   5. LOGIKA FILTERING, PENCARIAN, & PENGURUTAN KATALOG
   ============================================================================ */
/**
 * Mengisi opsi kategori pada dropdown secara dinamis dari data produk.
 */
function populateCategories() {
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category))).sort();
  // Bersihkan opsi lama kecuali "Semua Kategori"
  dom.categoryFilter.innerHTML = `<option value="all">Semua Kategori (${PRODUCTS.length} Produk)</option>`;

  categories.forEach((cat) => {
    const count = PRODUCTS.filter((p) => p.category === cat).length;
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = `${cat} (${count})`;
    dom.categoryFilter.appendChild(option);
  });
}

/**
 * Menyaring dan mengurutkan produk berdasarkan state pencarian dan filter aktif.
 */
function getFilteredAndSortedProducts() {
  const query = state.searchQuery.trim().toLowerCase();
  const selectedCat = state.selectedCategory;
  const sort = state.sortBy;

  // 1. Filter Pencarian & Kategori
  let filtered = PRODUCTS.filter((product) => {
    // Cocokkan Kategori
    if (selectedCat !== "all" && product.category !== selectedCat) {
      return false;
    }

    // Cocokkan Kata Kunci Pencarian jika ada
    if (query) {
      const matchName = product.name.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchShortDesc = product.shortDescription.toLowerCase().includes(query);
      const matchCat = product.category.toLowerCase().includes(query);
      const matchCompat = product.compatibility.toLowerCase().includes(query);
      const matchKeywords = product.keywords.some((kw) => kw.toLowerCase().includes(query));

      if (!matchName && !matchDesc && !matchShortDesc && !matchCat && !matchCompat && !matchKeywords) {
        return false;
      }
    }

    return true;
  });

  // 2. Pengurutan Harga
  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

/**
 * Merender daftar produk ke dalam elemen grid katalog.
 */
function renderCatalog() {
  const products = getFilteredAndSortedProducts();
  dom.productGrid.innerHTML = "";

  // Periksa kondisi katalog kosong
  if (products.length === 0) {
    dom.productGrid.hidden = true;
    dom.emptyState.hidden = false;
    updateCatalogStatus(0, PRODUCTS.length);
    renderActiveFilterTags();
    return;
  }

  dom.productGrid.hidden = false;
  dom.emptyState.hidden = true;

  // Buat fragmen untuk efisiensi DOM
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    // Media Wrapper
    const mediaWrap = document.createElement("div");
    mediaWrap.className = "product-media-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image;
    img.alt = `Foto ${product.name}`;
    img.loading = "lazy";
    img.onerror = function () {
      // Fallback anggun jika berkas gambar gagal dimuat
      this.onerror = null;
      this.src = "images/softcase-clear.svg";
    };

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "badge category-badge card-category-badge";
    categoryBadge.textContent = product.category;

    mediaWrap.appendChild(img);
    mediaWrap.appendChild(categoryBadge);

    // Body Wrapper
    const body = document.createElement("div");
    body.className = "product-body";

    const title = document.createElement("h3");
    title.className = "product-name";
    title.textContent = product.name;

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = product.shortDescription;

    const priceBox = document.createElement("div");
    priceBox.className = "product-price-box";
    priceBox.setAttribute("aria-label", `Harga: ${formatRupiah(product.price)}`);

    const priceLabel = document.createElement("span");
    priceLabel.className = "price-text-label";
    priceLabel.textContent = "Harga";

    const priceVal = document.createElement("span");
    priceVal.className = "product-price-val";
    priceVal.textContent = formatRupiah(product.price);

    priceBox.appendChild(priceLabel);
    priceBox.appendChild(priceVal);

    const compat = document.createElement("div");
    compat.className = "product-compat-snippet";
    compat.innerHTML = `<strong>Kecocokan:</strong> ${escapeHTML(product.compatibility)}`;

    // Tombol Aksi
    const actions = document.createElement("div");
    actions.className = "product-actions";

    const detailBtn = document.createElement("button");
    detailBtn.type = "button";
    detailBtn.className = "btn btn-outline";
    detailBtn.textContent = "Detail Produk";
    detailBtn.setAttribute("aria-label", `Lihat detail lengkap untuk ${product.name}`);
    detailBtn.addEventListener("click", () => openProductModal(product));

    const orderBtn = document.createElement("button");
    orderBtn.type = "button";
    orderBtn.className = "btn btn-whatsapp";
    orderBtn.innerHTML = `<span class="wa-icon" aria-hidden="true">💬</span><span>Pesan via WhatsApp</span>`;
    orderBtn.setAttribute("aria-label", `Pesan ${product.name} seharga ${formatRupiah(product.price)} melalui WhatsApp`);
    orderBtn.addEventListener("click", () => initiateWhatsAppOrder(product));

    actions.appendChild(detailBtn);
    actions.appendChild(orderBtn);

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(priceBox);
    body.appendChild(compat);
    body.appendChild(actions);

    card.appendChild(mediaWrap);
    card.appendChild(body);

    fragment.appendChild(card);
  });

  dom.productGrid.appendChild(fragment);
  updateCatalogStatus(products.length, PRODUCTS.length);
  renderActiveFilterTags();
}

/**
 * Memperbarui pengumuman jumlah produk untuk live-region pembaca layar.
 */
function updateCatalogStatus(displayedCount, totalCount) {
  let statusText = `Menampilkan ${displayedCount} dari ${totalCount} produk`;
  if (state.selectedCategory !== "all") {
    statusText += ` dalam kategori "${state.selectedCategory}"`;
  }
  if (state.searchQuery.trim()) {
    statusText += ` untuk pencarian "${state.searchQuery.trim()}"`;
  }
  dom.catalogStatus.textContent = statusText;
}

/**
 * Menampilkan badge filter yang sedang aktif sehingga pengguna dapat melihat statusnya dengan jelas.
 */
function renderActiveFilterTags() {
  dom.activeFilterTags.innerHTML = "";
  if (state.selectedCategory !== "all") {
    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.textContent = `Kategori: ${state.selectedCategory}`;
    dom.activeFilterTags.appendChild(tag);
  }
  if (state.searchQuery.trim()) {
    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.textContent = `Pencarian: "${state.searchQuery.trim()}"`;
    dom.activeFilterTags.appendChild(tag);
  }
}

/**
 * Mereset seluruh parameter filter dan pencarian ke kondisi default awal.
 */
function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "all";
  state.sortBy = "default";

  dom.searchInput.value = "";
  dom.clearSearchBtn.hidden = true;
  dom.categoryFilter.value = "all";
  dom.sortSelect.value = "default";

  renderCatalog();
  dom.searchInput.focus();
}

/* ============================================================================
   6. LOGIKA MODAL DETAIL PRODUK (AKSESIBEL & FOKUS TERPERANGKAP)
   ============================================================================ */
/**
 * Membuka modal detail produk, memindahkan fokus, dan memerangkap navigasi keyboard Tab.
 */
function openProductModal(product) {
  state.currentModalProduct = product;
  state.previousActiveElement = document.activeElement;

  dom.modalProductTitle.textContent = product.name;
  dom.modalProductImage.src = product.image;
  dom.modalProductImage.alt = `Foto rincian ${product.name}`;
  dom.modalProductCategory.textContent = product.category;
  dom.modalProductPrice.textContent = formatRupiah(product.price);
  dom.modalProductDescription.textContent = product.description;
  dom.modalProductCompatibility.textContent = product.compatibility;
  dom.modalProductSpecs.textContent = product.specifications || "Spesifikasi perlu dikonfirmasi.";

  // Update aksi tombol pesan
  dom.modalOrderBtn.onclick = () => initiateWhatsAppOrder(product);

  // Buka modal
  dom.productModal.hidden = false;
  document.body.style.overflow = "hidden"; // Mencegah scrolling latar

  // Pindahkan fokus ke tombol tutup pertama
  setTimeout(() => {
    dom.modalCloseBtn.focus();
  }, 50);

  // Daftarkan handler trap fokus
  dom.productModal.addEventListener("keydown", handleModalKeydown);
}

/**
 * Menutup modal detail produk dan mengembalikan fokus ke elemen pemanggil.
 */
function closeProductModal() {
  if (dom.productModal.hidden) return;

  dom.productModal.hidden = true;
  document.body.style.overflow = "";
  dom.productModal.removeEventListener("keydown", handleModalKeydown);
  state.currentModalProduct = null;

  if (state.previousActiveElement && typeof state.previousActiveElement.focus === "function") {
    state.previousActiveElement.focus();
  }
}

/**
 * Mengelola navigasi keyboard di dalam dialog modal (Escape & Tab Trap).
 */
function handleModalKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeProductModal();
    return;
  }

  if (event.key === "Tab") {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(dom.productModal.querySelectorAll(focusableSelectors)).filter(
      (el) => !el.disabled && el.offsetParent !== null
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
}

/* ============================================================================
   7. MODAL PERINGATAN KONFIGURASI WHATSAPP
   ============================================================================ */
let lastWaModalTrigger = null;

function openWhatsAppConfigModal(customMessage) {
  lastWaModalTrigger = document.activeElement;
  const msgElement = document.getElementById("wa-config-modal-msg");
  if (msgElement && customMessage) {
    msgElement.textContent = customMessage;
  }

  dom.waConfigModal.hidden = false;
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    dom.waConfigOkBtn.focus();
  }, 50);

  dom.waConfigModal.addEventListener("keydown", handleWaModalKeydown);
}

function closeWhatsAppConfigModal() {
  if (dom.waConfigModal.hidden) return;
  dom.waConfigModal.hidden = true;
  document.body.style.overflow = "";
  dom.waConfigModal.removeEventListener("keydown", handleWaModalKeydown);

  if (lastWaModalTrigger && typeof lastWaModalTrigger.focus === "function") {
    lastWaModalTrigger.focus();
  }
}

function handleWaModalKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeWhatsAppConfigModal();
  }
}

/* ============================================================================
   8. MESIN PINTAR ASISTEN TOKO (RULE-BASED CATALOG ASSISTANT)
   ============================================================================ */
/**
 * Memproses pertanyaan pengguna dan menghasilkan jawaban yang jujur, tepat,
 * dan hanya didasarkan pada data katalog 20 produk yang ada.
 */
function processAssistantQuery(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // Analisis 1: Pertanyaan seputar Headset USB-C
  if (q.includes("headset") && (q.includes("usb-c") || q.includes("type-c") || q.includes("tipe-c") || q.includes("c17") || q.includes("e336c"))) {
    const usbHeadsets = PRODUCTS.filter((p) => p.category === "Headset Kabel");
    return {
      text: "Ya, kami memiliki 2 pilihan headset kabel dengan konektor USB-C langsung: Baseus Encok C17 seharga Rp85.000 dan Havit E336C seharga Rp99.900.",
      compatNote: "Penting: Pastikan perangkat handphone Anda mendukung keluaran audio digital (Digital Audio Output) melalui port USB-C.",
      products: usbHeadsets
    };
  }

  // Analisis 2: Pertanyaan Casing Paling Murah
  if ((q.includes("casing") || q.includes("case") || q.includes("softcase") || q.includes("hardcase")) && (q.includes("paling murah") || q.includes("termurah") || q.includes("paling hemat") || q.includes("murah"))) {
    const cases = PRODUCTS.filter((p) => p.category === "Softcase" || p.category === "Hardcase").sort((a, b) => a.price - b.price);
    const cheapest = cases[0];
    return {
      text: `Casing yang paling murah di Subhan Gadget Store saat ini adalah ${cheapest.name} dengan harga hanya ${formatRupiah(cheapest.price)}. Pilihan hemat lainnya adalah Softcase Silikon Macaron seharga Rp15.000 dan Softcase Bening TPU seharga Rp20.000.`,
      compatNote: "Catatan: Ketersediaan model untuk tipe merek HP Anda wajib dikonfirmasi terlebih dahulu.",
      products: cases.slice(0, 3)
    };
  }

  // Analisis 3: Pertanyaan Harga Powerbank
  if (q.includes("powerbank") || q.includes("power bank") || q.includes("baterai portabel")) {
    const pbList = PRODUCTS.filter((p) => p.category === "Powerbank");
    if (pbList.length > 0) {
      const pb = pbList[0];
      return {
        text: `Subhan Gadget Store menyediakan ${pb.name} dengan kapasitas 10.000mAh seharga ${formatRupiah(pb.price)}. Powerbank ini dilengkapi port ganda untuk mengisi dua perangkat sekaligus serta indikator kapasitas LED.`,
        compatNote: "Pastikan Anda menggunakan kabel pengisian yang sesuai dengan port gawai Anda.",
        products: pbList
      };
    }
  }

  // Analisis 4: Filter Berdasarkan Anggaran / Di Bawah Harga Tertentu
  // Contoh: "di bawah Rp50.000", "dibawah 50.000", "di bawah 50rb", "budget 50000"
  const priceMatch = q.match(/(?:di\s*bawah|dibawah|kurang\s*dari|maksimal|budget)\s*(?:rp\.?\s*)?(\d+)(?:\.?(\d{3}))?(?:\s*(?:ribu|rb|k))?/i);
  if (priceMatch) {
    let limit = 0;
    if (priceMatch[2]) {
      // Format 50.000
      limit = parseInt(priceMatch[1] + priceMatch[2], 10);
    } else {
      let num = parseInt(priceMatch[1], 10);
      if (q.includes("ribu") || q.includes("rb") || q.includes("k") || num <= 200) {
        limit = num * 1000;
      } else {
        limit = num;
      }
    }

    if (limit > 0) {
      const affordable = PRODUCTS.filter((p) => p.price <= limit).sort((a, b) => a.price - b.price);
      if (affordable.length > 0) {
        return {
          text: `Ditemukan ${affordable.length} produk aksesori dengan harga di bawah ${formatRupiah(limit)}, mulai dari ${affordable[0].name} (${formatRupiah(affordable[0].price)}).`,
          products: affordable
        };
      } else {
        return {
          text: `Saat ini belum ada produk dengan harga di bawah ${formatRupiah(limit)}. Produk dengan harga paling terjangkau di katalog kami adalah ${PRODUCTS.slice().sort((a, b) => a.price - b.price)[0].name} (${formatRupiah(10000)}).`,
          products: []
        };
      }
    }
  }

  // Analisis 5: Pertanyaan Tempered Glass & Pelindung Layar
  if (q.includes("tempered glass") || q.includes("pelindung layar") || q.includes("anti-spy") || q.includes("hydrogel")) {
    const screens = PRODUCTS.filter((p) => p.category === "Pelindung Layar");
    return {
      text: "Kami menyediakan 3 jenis pelindung layar: Tempered Glass HD Clear (Rp10.500) untuk kejernihan maksimal, Tempered Glass Privacy Anti-Spy (Rp10.000) agar layar tidak bisa diintip dari samping, dan Pelindung Layar Hydrogel (Rp40.000) yang lentur dan sangat cocok untuk layar lengkung (curved).",
      compatNote: "Perlindungan layar harus dipotong atau dipilih sesuai model presisi handphone Anda.",
      products: screens
    };
  }

  // Analisis 6: Pertanyaan Aksesori Pengisian Daya (Charging)
  if (q.includes("pengisian daya") || q.includes("cas") || q.includes("ngecas") || q.includes("charger") || q.includes("kabel")) {
    const chargingProds = PRODUCTS.filter((p) => ["Charger", "Kabel Data", "Powerbank"].includes(p.category)).sort((a, b) => a.price - b.price);
    return {
      text: "Untuk kebutuhan pengisian daya, kami memiliki paket lengkap: Charger dinding (ACMIC 10W & Anker GaN 30W), Kabel Data Type-C (ACMIC 1m & Essager Braided 100W), serta JETE Powerbank 10.000mAh.",
      compatNote: "Daya dan kecepatan pengisian aktual bergantung pada protokol charger serta kemampuan penerimaan daya pada ponsel Anda.",
      products: chargingProds
    };
  }

  // Analisis 7: Pertanyaan Holder HP
  if (q.includes("holder") || q.includes("stand") || q.includes("dudukan") || q.includes("penyangga")) {
    const holders = PRODUCTS.filter((p) => p.category === "Holder HP" || p.category === "Aksesori HP");
    return {
      text: "Tersedia Goojodoq Stand Meja Lipat (Rp35.000) untuk nonton/kerja di meja, DSU Magnetic 360 Derajat (Rp35.500) untuk dudukan magnetik serbaguna, dan Phone Grip PopSocket (Rp12.000) untuk pegangan tangan anti-jatuh.",
      products: holders
    };
  }

  // Analisis 8: Pertanyaan Adaptor OTG
  if (q.includes("otg") || q.includes("adaptor") || q.includes("adapter") || q.includes("flashdisk")) {
    const otg = PRODUCTS.filter((p) => p.category === "Adaptor");
    return {
      text: "Kami memiliki NANVAN OTG Adapter seharga Rp14.500 untuk menyambungkan flashdisk USB atau perangkat periferal langsung ke handphone Anda.",
      compatNote: "Pastikan Anda memilih varian port yang tepat (Micro-USB atau USB-C) dan handphone Anda mendukung protokol USB OTG.",
      products: otg
    };
  }

  // Analisis 9: Pertanyaan TWS / Bluetooth
  if (q.includes("tws") || q.includes("wireless") || q.includes("nirkabel") || (q.includes("bluetooth") && !q.includes("headset kabel"))) {
    const twsList = PRODUCTS.filter((p) => p.category === "TWS");
    return {
      text: "Kami memiliki 2 earbud TWS Bluetooth: Robot T50S TWS seharga Rp103.000 dan Rexus FX99 TWS Bluetooth seharga Rp117.000. Keduanya dilengkapi casing pengisi daya portabel.",
      products: twsList
    };
  }

  // Analisis 10: Pencarian Kata Kunci Umum pada Katalog
  const keywords = q.split(/\s+/).filter((w) => w.length > 2);
  const matched = PRODUCTS.filter((p) => {
    return keywords.some((kw) => {
      return (
        p.name.toLowerCase().includes(kw) ||
        p.category.toLowerCase().includes(kw) ||
        p.keywords.some((k) => k.toLowerCase().includes(kw))
      );
    });
  });

  if (matched.length > 0) {
    return {
      text: `Berdasarkan pertanyaan Anda, berikut adalah produk yang relevan di katalog kami:`,
      products: matched
    };
  }

  // Jawaban Jujur Jika Tidak Ada yang Cocok
  return {
    text: "Maaf, Asisten Toko tidak menemukan produk yang cocok dengan pertanyaan Anda di katalog saat ini. Kami berkomitmen untuk jujur dan hanya memberikan informasi berdasarkan 20 produk aksesori handphone yang benar-benar tersedia di Subhan Gadget Store. Silakan coba tanyakan seputar headset, casing, tempered glass, charger, kabel data, powerbank, holder, atau kisaran harga tertentu.",
    products: []
  };
}

/**
 * Menambahkan pesan ke jendela riwayat Asisten Toko secara aman tanpa kerentanan XSS.
 */
function appendAssistantMessage(userQuery, responseData) {
  // 1. Pesan Pengguna
  const userMsgBox = document.createElement("div");
  userMsgBox.className = "assistant-message msg-user";
  userMsgBox.setAttribute("role", "note");
  userMsgBox.textContent = userQuery;
  dom.assistantOutput.appendChild(userMsgBox);

  // 2. Pesan Balasan Asisten
  const assistantMsgBox = document.createElement("div");
  assistantMsgBox.className = "assistant-message msg-assistant";
  assistantMsgBox.setAttribute("role", "status");

  const responseText = document.createElement("p");
  responseText.textContent = responseData.text;
  assistantMsgBox.appendChild(responseText);

  if (responseData.compatNote) {
    const noteEl = document.createElement("p");
    noteEl.className = "assistant-prod-compat";
    noteEl.style.marginTop = "0.5rem";
    noteEl.textContent = responseData.compatNote;
    assistantMsgBox.appendChild(noteEl);
  }

  // Jika ada produk yang direkomendasikan, tampilkan kartu ringkas
  if (responseData.products && responseData.products.length > 0) {
    responseData.products.forEach((prod) => {
      const prodCard = document.createElement("div");
      prodCard.className = "assistant-product-item";

      const header = document.createElement("div");
      header.className = "assistant-prod-header";

      const title = document.createElement("span");
      title.className = "assistant-prod-title";
      title.textContent = prod.name;

      const price = document.createElement("span");
      price.className = "assistant-prod-price";
      price.textContent = formatRupiah(prod.price);

      header.appendChild(title);
      header.appendChild(price);

      const desc = document.createElement("p");
      desc.className = "assistant-prod-desc";
      desc.textContent = prod.shortDescription;

      const actions = document.createElement("div");
      actions.className = "assistant-prod-actions";

      const detailBtn = document.createElement("button");
      detailBtn.type = "button";
      detailBtn.className = "btn btn-secondary";
      detailBtn.style.padding = "0.35rem 0.75rem";
      detailBtn.style.fontSize = "0.8125rem";
      detailBtn.textContent = "Lihat Detail";
      detailBtn.setAttribute("aria-label", `Buka detail ${prod.name}`);
      detailBtn.addEventListener("click", () => openProductModal(prod));

      const orderBtn = document.createElement("button");
      orderBtn.type = "button";
      orderBtn.className = "btn btn-whatsapp";
      orderBtn.style.padding = "0.35rem 0.75rem";
      orderBtn.style.fontSize = "0.8125rem";
      orderBtn.textContent = "Pesan via WA";
      orderBtn.setAttribute("aria-label", `Pesan ${prod.name} lewat WhatsApp`);
      orderBtn.addEventListener("click", () => initiateWhatsAppOrder(prod));

      actions.appendChild(detailBtn);
      actions.appendChild(orderBtn);

      prodCard.appendChild(header);
      prodCard.appendChild(desc);
      prodCard.appendChild(actions);

      assistantMsgBox.appendChild(prodCard);
    });
  }

  dom.assistantOutput.appendChild(assistantMsgBox);

  // Gulir otomatis ke pesan terakhir
  dom.assistantOutput.scrollTop = dom.assistantOutput.scrollHeight;
}

/**
 * Helper untuk menyaring string agar terhindar dari suntikan tag HTML.
 */
function escapeHTML(str) {
  const p = document.createElement("p");
  p.textContent = str;
  return p.innerHTML;
}

/* ============================================================================
   9. DAFTAR EVENT LISTENERS
   ============================================================================ */
function initEventListeners() {
  // 1. Pencarian Real-Time (Tanpa Reload)
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    dom.clearSearchBtn.hidden = !state.searchQuery;
    renderCatalog();
  });

  // Tombol Hapus Input Pencarian
  dom.clearSearchBtn.addEventListener("click", () => {
    state.searchQuery = "";
    dom.searchInput.value = "";
    dom.clearSearchBtn.hidden = true;
    renderCatalog();
    dom.searchInput.focus();
  });

  // 2. Filter Kategori
  dom.categoryFilter.addEventListener("change", (e) => {
    state.selectedCategory = e.target.value;
    renderCatalog();
  });

  // 3. Pengurutan Harga
  dom.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  // 4. Tombol Reset Filter
  dom.resetFilterBtn.addEventListener("click", resetAllFilters);
  dom.emptyResetBtn.addEventListener("click", resetAllFilters);

  // 5. Tombol Tutup Modal Detail Produk
  dom.modalCloseBtn.addEventListener("click", closeProductModal);
  dom.modalCancelBtn.addEventListener("click", closeProductModal);

  // Tutup modal jika klik di area backdrop di luar container
  dom.productModal.addEventListener("click", (e) => {
    if (e.target === dom.productModal) {
      closeProductModal();
    }
  });

  // 6. Tombol Modal Peringatan Konfigurasi WhatsApp
  dom.waConfigCloseBtn.addEventListener("click", closeWhatsAppConfigModal);
  dom.waConfigOkBtn.addEventListener("click", closeWhatsAppConfigModal);
  dom.waConfigModal.addEventListener("click", (e) => {
    if (e.target === dom.waConfigModal) {
      closeWhatsAppConfigModal();
    }
  });

  // Tombol Chat WhatsApp Global di Header & Footer
  dom.headerWaBtn.addEventListener("click", initiateGeneralWhatsAppChat);
  dom.footerWaBtn.addEventListener("click", initiateGeneralWhatsAppChat);

  // 7. Formulir Asisten Toko
  dom.assistantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = dom.assistantInput.value.trim();
    if (!query) return;

    const responseData = processAssistantQuery(query);
    appendAssistantMessage(query, responseData);
    dom.assistantInput.value = "";
    dom.assistantInput.focus();
  });

  // Tombol Bersihkan Percakapan Asisten
  dom.assistantClearBtn.addEventListener("click", () => {
    dom.assistantOutput.innerHTML = `
      <div class="assistant-message assistant-welcome">
        <p><strong>Percakapan telah dibersihkan.</strong></p>
        <p>Silakan tanyakan produk yang Anda cari, bandingkan harga, atau klik contoh pertanyaan di atas.</p>
      </div>
    `;
    dom.assistantInput.focus();
  });

  // Chip Contoh Pertanyaan Asisten
  dom.questionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-question");
      if (q) {
        dom.assistantInput.value = q;
        const responseData = processAssistantQuery(q);
        appendAssistantMessage(q, responseData);
      }
    });
  });

  // Kategori Link di Footer (Langsung memfilter katalog saat diklik)
  document.querySelectorAll(".footer-category-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const cat = link.getAttribute("data-category");
      if (cat) {
        state.selectedCategory = cat;
        dom.categoryFilter.value = cat;
        renderCatalog();
      }
    });
  });
}

/* ============================================================================
   10. INISIALISASI SAAT HALAMAN SELESAI DIMUAT
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
  renderCatalog();
  initEventListeners();
});
