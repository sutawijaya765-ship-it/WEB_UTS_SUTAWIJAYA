
// Memastikan file JavaScript berhasil terhubung
console.log("JavaScript berhasil terhubung!");

/* Mengambil elemen form dari HTML */
const calculatorForm = document.getElementById("calculatorForm");

/* Mengambil input jumlah halaman */
const jumlahHalaman = document.getElementById("jumlahHalaman");

/* Mengambil input biaya per halaman */
const biayaHalaman = document.getElementById("biayaHalaman");

/* Mengambil tempat untuk menampilkan hasil */
const hasilKalkulator = document.getElementById("hasilKalkulator");

/* Menjalankan perhitungan saat form dikirim */
calculatorForm.addEventListener("submit", function(event) {

    /* Mencegah halaman dimuat ulang */
    event.preventDefault();

    /* Mengambil nilai dari input */
    const jumlah = Number(jumlahHalaman.value);
    const biaya = Number(biayaHalaman.value);

    /* Memastikan nilai yang dimasukkan valid */
    if (!Number.isInteger(jumlah) || jumlah < 1 || biaya < 0) {
        hasilKalkulator.innerHTML = `
            <div class="alert alert-danger">
                Masukkan jumlah halaman minimal 1 dan biaya yang valid.
            </div>
        `;
        return;
    }

    /* Menghitung total biaya proyek */
    const totalBiaya = jumlah * biaya;

    /* Mengubah angka menjadi format Rupiah */
    const formatRupiah = totalBiaya.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    });

    /* Menampilkan hasil perhitungan */
    hasilKalkulator.innerHTML = `
        <div class="alert alert-success text-center">
            <p class="mb-2">Estimasi Total Biaya</p>
            <h3 class="fw-bold mb-0">${formatRupiah}</h3>
        </div>
    `;
});


/* ===== FITUR DARK MODE ===== */

// Mengambil tombol Dark Mode dari HTML
const darkModeToggle = document.getElementById("darkModeToggle");

// Memeriksa apakah tombol tersedia
if (darkModeToggle) {

    // Menjalankan fungsi ketika tombol diklik
    darkModeToggle.addEventListener("click", function() {

        // Mengaktifkan atau menonaktifkan class dark-mode
        document.body.classList.toggle("dark-mode");

        // Memeriksa apakah Dark Mode sedang aktif
        const darkModeAktif = document.body.classList.contains("dark-mode");

        // Mengubah tulisan tombol sesuai tema
        if (darkModeAktif) {
            darkModeToggle.innerHTML = "☀️ Light Mode";
        } else {
            darkModeToggle.innerHTML = "🌙 Dark Mode";
        }

    });

}
