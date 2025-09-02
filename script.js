const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    // Dapatkan waktu UTC (Universal Time Coordinated)
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    // Tambahkan 7 jam untuk mendapatkan Waktu Indonesia Barat (WIB)
    let wibHours = utcHours + 7;
    let wibMinutes = utcMinutes;
    const wibSeconds = utcSeconds;

    // Sesuaikan jam jika lebih dari 23 (hari berikutnya)
    if (wibHours >= 24) {
        wibHours -= 24;
    }

    // Konversi jam dari format 24 jam ke 12 jam
    if (wibHours >= 12) {
        wibHours -= 12;
    }
    if (wibHours === 0) {
        wibHours = 12; // Menyesuaikan jam 0 (tengah malam) menjadi 12
    }

    // Perhitungan sudut rotasi jarum
    const secondsDegrees = ((wibSeconds / 60) * 360) + 90;
    const minutesDegrees = ((wibMinutes / 60) * 360) + ((wibSeconds / 60) * 6) + 90;
    const hoursDegrees = ((wibHours / 12) * 360) + ((wibMinutes / 60) * 30) + 90;

    // Menerapkan rotasi ke elemen jarum
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Perbarui jam setiap detik
setInterval(setClock, 1000);

// Panggil fungsi segera saat halaman dimuat
setClock();
);
