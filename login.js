// login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const err = document.getElementById("loginError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.textContent = "";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      err.textContent = "Username dan password wajib diisi.";
      return;
    }

    // Ambil daftar pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const match = users.find(u => (u.username === username || u.email === username) && u.password === password);

    if (!match) {
      err.textContent = "Username/email atau password tidak cocok.";
      return;
    }

    // di login.js, dalam DOMContentLoaded
const signupFlag = localStorage.getItem("signupSuccess");
if (signupFlag === "1") {
  document.getElementById("loginError").textContent = "Pendaftaran berhasil. Silakan login.";
  localStorage.removeItem("signupSuccess");
}

    // Simpan sesi sederhana (opsional)
    localStorage.setItem("currentUser", JSON.stringify({ username: match.username, email: match.email }));

    // Redirect setelah login
    window.location.href = "index.html";
  });
});
