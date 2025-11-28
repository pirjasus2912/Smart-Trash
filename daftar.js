// daftar.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const err = document.getElementById("signupError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.textContent = "";

    const nama = document.getElementById("nama").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!nama || !username || !email || !password) {
      err.textContent = "Semua field wajib diisi.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(u => u.username === username)) {
      err.textContent = "Username sudah dipakai.";
      return;
    }
    if (users.some(u => u.email === email)) {
      err.textContent = "Email sudah terdaftar.";
      return;
    }
    
    // di login.js, dalam DOMContentLoaded
const signupFlag = localStorage.getItem("signupSuccess");
if (signupFlag === "1") {
  document.getElementById("loginError").textContent = "Pendaftaran berhasil. Silakan login.";
  localStorage.removeItem("signupSuccess");
}


    users.push({ nama, username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect ke halaman login setelah berhasil daftar
    window.location.href = "login.html";
  });
});
