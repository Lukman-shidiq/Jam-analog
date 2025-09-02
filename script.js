const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    // Menggunakan Intl.DateTimeFormat untuk mendapatkan waktu WIB
    const wibTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const now = new Date(wibTime);

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Perhitungan sudut rotasi
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Tambah gerakan halus menit
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    // Menerapkan rotasi ke elemen jarum
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Perbarui jam setiap milidetik agar jarum detik bergerak halus
setInterval(setClock, 1000);

// Panggil fungsi segera agar jarum tidak diam saat halaman dimuat
setClock();
