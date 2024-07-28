// fungsi login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mengecek username dan password
    if (username === 'admin' && password === '9') {
        // Jika benar, arahkan ke halaman main-dashboard/main.js
        window.location.href = '../main-menu/main.html';
    } else {
        // Jika salah, tampilkan alert dan reload halaman
        alert('Username atau password salah!');
        window.location.href = '/index.html';
        // location.reload();
    }
// fungsi login end
});


// fungsi onclick (not working)
document.getElementById("edit").addEventListener("click", function() {
    window.location.href = "./main-menu/edit.html";
});
// fungsi onclick end