// Hitung mundur 15 detik
let countdownValue = 15;
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  if (countdownValue <= 0) {
    // Redirect ke MediaFire setelah hitung mundur selesai
    window.location.href = "https://www.mediafire.com/file/45tzw9v6cxznyb8/bahan.rar/file";
  } else {
    // Update countdown di halaman
    countdownElement.textContent = countdownValue;
    countdownValue--;
  }
}

// Jalankan updateCountdown setiap detik
setInterval(updateCountdown, 1000);
