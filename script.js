document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Cek username dan password (contoh sederhana)
    if (username === "admin" && password === "ditz") {
        // Jika login berhasil, arahkan ke berhasil.html
        window.location.href = "berhasil.html";
    } else {
        const messageDiv = document.getElementById("message");
        messageDiv.style.color = "red";
        messageDiv.innerText = "Username atau password salah!";
    }
});
