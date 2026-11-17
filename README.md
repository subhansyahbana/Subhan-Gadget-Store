# Subhan Gadget Store - Website Katalog Aksesori Handphone & Gadget

Selamat datang di repositori resmi **Subhan Gadget Store**. Website ini merupakan aplikasi web katalog toko online yang ringan, responsif, modern, dan dirancang dengan standar aksesibilitas tinggi (WCAG 2.1 AA) yang ramah bagi pengguna pembaca layar (*screen reader* seperti NVDA dan JAWS) serta pengguna navigasi *keyboard*.

Website ini dibangun menggunakan **HTML5 semantik murni**, **CSS3 modern**, dan **JavaScript Vanilla** tanpa dependensi pihak ketiga, framework rumit, database eksternal, maupun API berbayar. Seluruh sistem dapat langsung dijalankan secara lokal di browser apa pun.

---

## 📁 Struktur Berkas

```text
subhan-gadget-store/
├── index.html        # Struktur semantik HTML5, landmark, dan modal dialog
├── styles.css        # Desain visual modern, kontras tinggi, responsive grid, dan fokus aksesibel
├── script.js         # Data katalog 20 produk, filter/pencarian real-time, Asisten Toko, & alur WhatsApp
├── README.md         # Dokumentasi lengkap, panduan setup, dan petunjuk aksesibilitas
└── images/           # Berkas gambar ilustrasi vektor SVG untuk seluruh 20 produk katalog
    ├── headset-c17.svg
    ├── headset-e336c.svg
    ├── tws-robot.svg
    ├── tws-rexus.svg
    ├── softcase-clear.svg
    ├── softcase-macaron.svg
    ├── hardcase-magsafe.svg
    ├── hardcase-carbon.svg
    ├── screen-tg-clear.svg
    ├── screen-tg-privacy.svg
    ├── screen-hydrogel.svg
    ├── charger-10w.svg
    ├── charger-anker-30w.svg
    ├── cable-acmic-1m.svg
    ├── cable-essager-100w.svg
    ├── powerbank-jete.svg
    ├── holder-goojodoq.svg
    ├── holder-dsu-magnetic.svg
    ├── adapter-otg.svg
    └── grip-popsocket.svg
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

Anda dapat menjalankan website ini di komputer lokal dengan dua cara yang sangat mudah:

### Cara 1: Menggunakan Python HTTP Server (Sangat Disarankan)

1. Buka terminal atau PowerShell di dalam folder `subhan-gadget-store`:
   ```bash
   cd "subhan-gadget-store"
   python -m http.server 8000
   ```
2. Buka peramban (Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari) lalu kunjungi alamat:
   ```text
   http://localhost:8000
   ```

### Cara 2: Membuka Berkas `index.html` Secara Langsung

1. Buka File Explorer di Windows.
2. Masuk ke folder `subhan-gadget-store`.
3. Klik dua kali pada berkas `index.html`.
4. Halaman akan langsung terbuka di browser default Anda.

---

## 📱 Panduan Mengganti Nomor WhatsApp Toko

Pemesanan produk menggunakan integrasi resmi **WhatsApp Click-to-Chat**. Secara default, kode menggunakan placeholder keamanan `WHATSAPP_NUMBER = "628xxxxxxxxxx"`. Jika pengguna menekan tombol pemesanan saat placeholder masih aktif, aplikasi akan secara aman menampilkan modal instruksi dan **tidak akan membuat tautan pemesanan palsu**.

### Langkah Mengaktifkan Nomor Toko:
1. Buka berkas `script.js` menggunakan text editor (VS Code, Notepad, dll).
2. Temukan baris berikut pada bagian paling atas berkas (sekitar baris 19):
   ```javascript
   const WHATSAPP_NUMBER = "628xxxxxxxxxx";
   ```
3. Ganti dengan nomor WhatsApp aktif toko Anda menggunakan **format internasional tanpa tanda `+`, spasi, atau tanda hubung `-`**.
   - Contoh salah: `+62 812-3456-7890` atau `081234567890`
   - **Contoh benar:** `"6281234567890"`
4. Simpan berkas (`Ctrl + S`) dan muat ulang (*refresh*) halaman website di browser.

### Format Pesan WhatsApp Otomatis:
Ketika pelanggan memilih produk dan menekan tombol **Pesan via WhatsApp**, sistem akan membuat tautan dengan parameter pesan yang terenkripsi (`encodeURIComponent`):
> *"Halo Subhan Gadget Store, saya ingin memesan [Nama Produk] seharga [Harga]. Mohon konfirmasi stok dan kompatibilitas produk ini."*

> 💡 **Pemberitahuan Transaksi:** Sistem website hanya menyiapkan draf pesan otomatis. Pesan baru akan benar-benar terkirim setelah pelanggan menekan tombol kirim di aplikasi WhatsApp mereka.

---

## 📦 Panduan Mengelola & Memperbarui Data Katalog

Seluruh data produk tersentralisasi di dalam array `PRODUCTS` pada berkas `script.js`. Anda tidak perlu mengubah kode HTML untuk memperbarui katalog.

### Struktur Objek Produk:
```javascript
{
  id: "prod-21",                                // ID unik produk
  name: "Nama Produk Aksesori",                  // Nama produk lengkap
  category: "Charger",                          // Kategori produk (otomatis masuk ke dropdown)
  price: 75000,                                 // Harga angka integer tanpa Rp atau titik
  shortDescription: "Deskripsi singkat kartu",   // Tampil pada kartu grid katalog
  description: "Deskripsi lengkap rincian",      // Tampil pada modal detail produk
  compatibility: "Kesesuaian perangkat",        // Catatan penting kecocokan
  specifications: "Spesifikasi teknis",         // Spesifikasi atau keterangan konfirmasi
  image: "images/nama-file-gambar.svg",         // Jalur gambar (bisa SVG, PNG, WebP, JPG)
  keywords: ["kunci1", "kunci2", "kunci3"]      // Kata kunci untuk pencarian & Asisten Toko
}
```

### Cara Menambah Produk Baru:
1. Tambahkan objek baru ke dalam array `PRODUCTS` di `script.js`.
2. Format Rupiah (`Intl.NumberFormat`) dan opsi dropdown kategori akan diperbarui secara otomatis secara dinamis tanpa perlu mengubah berkas HTML.

### Cara Mengubah Harga Produk:
1. Cari produk berdasarkan nama atau `id` di `script.js`.
2. Ubah nilai atribut `price`, misalnya dari `85000` menjadi `80000`.
3. Simpan berkas, dan harga pada kartu katalog, modal rincian, pesan WhatsApp, serta kalkulasi Asisten Toko akan otomatis terhitung dengan benar.

---

## 🤖 Fitur "Asisten Toko" (Pencari Cerdas Berbasis Aturan)

Website dilengkapi komponen cerdas bernama **Asisten Toko**. Asisten ini bekerja secara lokal di browser pengunjung:
- **Transparan & Terpercaya:** Menggunakan aturan data katalog lokal yang ketat tanpa mengarang spesifikasi, harga, atau stok barang yang tidak ada.
- **Tidak Mengaku AI Cloud:** Tidak menggunakan model bahasa eksternal atau klaim palsu.
- **Pertanyaan Cepat (Chips):** Tersedia tombol pertanyaan praktis seperti:
  - *"Ada headset USB-C?"*
  - *"Casing apa yang paling murah?"*
  - *"Berapa harga powerbank?"*
  - *"Tampilkan aksesori di bawah Rp50.000."*
  - *"Ada tempered glass?"*
  - *"Produk apa saja yang cocok untuk pengisian daya?"*
- **Tampilan Interaktif:** Hasil rekomendasi asisten menyertakan tombol langsung untuk membuka dialog detail dan memesan via WhatsApp.

---

## ♿ Panduan & Pengujian Aksesibilitas (WCAG 2.1 AA)

Website ini dibangun dengan prinsip *Accessibility First* untuk menjamin kesetaraan akses bagi semua pengguna:

### 1. Struktur Semantik & Hirarki Heading
- Memiliki satu elemen `<h1>` utama di Hero Section.
- Elemen `<h2>` digunakan untuk setiap bagian halaman (*Search/Filter*, *Katalog*, *Asisten Toko*, *Modal*, dan *Footer*).
- Elemen `<h3>` digunakan untuk judul kartu produk dan sub-bagian modal.
- Menggunakan elemen semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`.

### 2. Navigasi Keyboard Penuh
- **Skip Link ("Lewati ke konten utama"):** Tautan tersembunyi yang langsung muncul di bagian atas ketika pengguna menekan tombol `Tab` pertama kali.
- **Indikator Fokus Jelas:** Ring fokus dengan kontras tinggi (`outline: 3px solid #0284c7; outline-offset: 3px`) pada semua elemen interaktif.
- **Urutan Tab Alami:** Tidak menggunakan `tabindex` positif yang merusak alur navigasi.

### 3. Pengujian Modal Dialog (Fokus Terperangkap)
- Saat modal dibuka:
  - Fokus otomatis berpindah ke tombol tutup dialog.
  - Tombol `Tab` dan `Shift + Tab` hanya bersirkulasi di dalam elemen interaktif modal (*focus trap*).
  - Menekan tombol `Escape` akan menutup modal secara instan.
  - Setelah modal ditutup, fokus keyboard dikembalikan ke tombol pemicu sebelumnya.

### 4. Pembaca Layar (NVDA & JAWS)
- **Live Region (`aria-live="polite"`):**
  - Pembaruan jumlah produk hasil pencarian dan filter diumumkan secara sopan tanpa memuat ulang seluruh halaman.
  - Balasan dari Asisten Toko menggunakan `role="log"` dan `aria-live="polite"` sehingga langsung dibacakan ke pengguna tunanetra.
- **Label Aksesibel Lengkap:**
  - Seluruh input form terhubung dengan `<label for="...">`.
  - Tombol memiliki teks deskriptif atau `aria-label` yang spesifik (misal: `"Lihat detail lengkap untuk Baseus Encok C17 Headset USB-C"`).
- **Teks Alternatif Gambar:** Seluruh gambar produk dilengkapi atribut `alt` yang relevan.

### 5. Aksesibilitas Visual & Kontras
- Rasio kontras teks slate `#0f172a` terhadap latar putih adalah **16.5:1** (jauh melampaui standar minimal WCAG AAA 7:1).
- Tombol WhatsApp menggunakan hijau gelap `#15803d` dengan teks putih (rasio kontras > **4.5:1** WCAG AA).
- Mendukung preferensi pengurangan animasi sistem melalui media query `@media (prefers-reduced-motion: reduce)`.

---

## 📋 Hak Cipta & Lisensi
Dibuat untuk **Subhan Gadget Store** (2026). Bebas digunakan, disesuaikan, dan dikembangkan untuk keperluan toko online aksesoris gadget Anda.
