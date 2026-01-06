document.addEventListener("DOMContentLoaded", function () {

  // ===== WAKTU FOOTER =====
  const waktu = document.getElementById("waktu");
  if (waktu) {
    setInterval(() => {
      waktu.textContent = "Waktu: " + new Date().toLocaleString("id-ID");
    }, 1000);
  }

  // ===== FORM BOOKING =====
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("bookingMessage");

  if (form && message) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // tampilkan pesan
      message.classList.add("show");

      // hilangkan pesan setelah 3 detik
      setTimeout(() => {
        message.classList.remove("show");
      }, 3000);

      form.reset(); // bersihkan form
    });
  }
});
